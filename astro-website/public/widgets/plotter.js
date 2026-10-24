// plotter — config-driven interactive graph.
// Config (JSON in data-config):
//   curves:  [{expr:'m*x + c', color, label, width}]
//   points:  [{points:[[x,y],...], color, label, mode:'line'|'dots'|'both'}]
//   params:  [{name, label, min, max, step, value, unit}]
//   x: {min,max,label}   y: {min,max,label} (omit y for autoscale)
//   height, crossings (default true), zoom (default true)
import { compile, formatNum } from './lib/mathexpr.js';

const PALETTE = ['#1d4ed8', '#b42318', '#0f766e', '#7c3aed', '#b45309'];
const INK = '#172420';
const GRID_MINOR = 'rgba(31,111,84,0.10)';
const GRID_MAJOR = 'rgba(31,111,84,0.22)';

function niceStep(span, target) {
  const rough = span / Math.max(2, target);
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  for (const m of [1, 2, 5, 10]) if (rough <= m * mag) return m * mag;
  return 10 * mag;
}

function fmtTick(v, step) {
  const d = Math.max(0, -Math.floor(Math.log10(step)) + (String(step).includes('5') || String(step).includes('2') ? 1 : 0));
  return formatNum(v, Math.min(6, d + 1));
}

export function init(el, config = {}) {
  const cfg = config;
  const scope = {};
  (cfg.params || []).forEach((p) => { scope[p.name] = p.value; });

  const compiled = (cfg.curves || []).map((c, i) => ({
    ...c,
    color: c.color || PALETTE[i % PALETTE.length],
    fn: compile(c.expr),
  }));
  const pointSets = (cfg.points || []).map((p, i) => ({
    ...p,
    color: p.color || PALETTE[i % PALETTE.length],
    mode: p.mode || 'both',
  }));

  // -- DOM ----------------------------------------------------------------
  const paramsRow = document.createElement('div');
  paramsRow.className = 'widget-params';
  (cfg.params || []).forEach((p) => {
    const lab = document.createElement('label');
    lab.className = 'widget-param';
    const name = document.createElement('span');
    name.textContent = p.label || p.name;
    const val = document.createElement('output');
    val.textContent = formatNum(p.value, 2) + (p.unit ? ' ' + p.unit : '');
    lab.append(name, val);
    const input = document.createElement('input');
    input.type = 'range';
    input.min = p.min; input.max = p.max; input.step = p.step ?? (p.max - p.min) / 100;
    input.value = p.value;
    input.setAttribute('aria-label', p.label || p.name);
    input.addEventListener('input', () => {
      scope[p.name] = parseFloat(input.value);
      val.textContent = formatNum(scope[p.name], 2) + (p.unit ? ' ' + p.unit : '');
      draw();
    });
    lab.appendChild(input);
    paramsRow.appendChild(lab);
  });
  if ((cfg.params || []).length) el.appendChild(paramsRow);

  const canvas = document.createElement('canvas');
  canvas.className = 'widget-canvas';
  canvas.style.height = (cfg.height || 360) + 'px';
  el.appendChild(canvas);
  const hint = document.createElement('p');
  hint.className = 'widget-hint';
  hint.textContent = cfg.zoom === false
    ? 'hover the graph for values'
    : 'hover for values · scroll to zoom · drag to pan · double-click resets';
  if (cfg.hint !== undefined) hint.textContent = cfg.hint;
  el.appendChild(hint);
  const ctx = canvas.getContext('2d');

  // -- view ---------------------------------------------------------------
  const x0 = cfg.x || { min: -1, max: 10 };
  let view = { x1: x0.min, x2: x0.max, y1: cfg.y?.min ?? 0, y2: cfg.y?.max ?? 1 };
  let yAuto = !cfg.y;
  const initial = { ...view };
  let dragging = false, last = null, pinch = null;

  function setView(v) { view = { ...v }; draw(); }

  function sample(curve, x1, x2, w) {
    const pts = [];
    const step = Math.max(1, Math.floor(w / 400));
    for (let px = 0; px <= w; px += step) {
      const x = x1 + (px / w) * (x2 - x1);
      const y = curve.fn.evaluate({ ...scope, x, t: x, p: x, n: x });
      pts.push([px, y]);
    }
    return pts;
  }

  function autoY(w) {
    let lo = Infinity, hi = -Infinity;
    compiled.forEach((c) => sample(c, view.x1, view.x2, w).forEach(([, y]) => {
      if (Number.isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y); }
    }));
    pointSets.forEach((ps) => (ps.points || []).forEach(([, y]) => {
      if (Number.isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y); }
    }));
    if (!Number.isFinite(lo) || !Number.isFinite(hi)) { lo = 0; hi = 1; }
    if (lo === hi) { lo -= 1; hi += 1; }
    const pad = (hi - lo) * 0.12;
    return [lo - pad, hi + pad];
  }

  // -- drawing ------------------------------------------------------------
  let dpr = 1, W = 0, H = 0;
  function fit() {
    dpr = window.devicePixelRatio || 1;
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  let mouse = null; // css px
  let samples = [];

  function draw() {
    if (yAuto) {
      fit();
      const [y1, y2] = autoY(W);
      view.y1 = y1; view.y2 = y2;
    }
    fit();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, W, H);

    const padL = 46, padR = 14, padT = 12, padB = 30;
    const px1 = (x) => padL + ((x - view.x1) / (view.x2 - view.x1)) * (W - padL - padR);
    const py1 = (y) => padT + (1 - (y - view.y1) / (view.y2 - view.y1)) * (H - padT - padB);
    const dx1 = (px) => view.x1 + ((px - padL) / (W - padL - padR)) * (view.x2 - view.x1);

    // grid
    const sx = niceStep(view.x2 - view.x1, Math.floor((W - padL - padR) / 90));
    const sy = niceStep(view.y2 - view.y1, Math.floor((H - padT - padB) / 60));
    ctx.lineWidth = 1;
    ctx.font = '10px "IBM Plex Mono", monospace';
    for (let gx = Math.ceil(view.x1 / (sx / 5)) * (sx / 5); gx <= view.x2; gx += sx / 5) {
      const X = px1(gx);
      const major = Math.abs(gx / sx - Math.round(gx / sx)) < 1e-6;
      ctx.strokeStyle = major ? GRID_MAJOR : GRID_MINOR;
      ctx.beginPath(); ctx.moveTo(X, padT); ctx.lineTo(X, H - padB); ctx.stroke();
    }
    for (let gy = Math.ceil(view.y1 / (sy / 5)) * (sy / 5); gy <= view.y2; gy += sy / 5) {
      const Y = py1(gy);
      const major = Math.abs(gy / sy - Math.round(gy / sy)) < 1e-6;
      ctx.strokeStyle = major ? GRID_MAJOR : GRID_MINOR;
      ctx.beginPath(); ctx.moveTo(padL, Y); ctx.lineTo(W - padR, Y); ctx.stroke();
    }
    // axes + tick labels
    ctx.strokeStyle = 'rgba(23,36,32,0.55)';
    ctx.fillStyle = 'rgba(23,36,32,0.72)';
    const yZero = Math.min(Math.max(py1(0), padT), H - padB);
    const xZero = Math.min(Math.max(px1(0), padL), W - padR);
    ctx.beginPath(); ctx.moveTo(padL, yZero); ctx.lineTo(W - padR, yZero); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(xZero, padT); ctx.lineTo(xZero, H - padB); ctx.stroke();
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let gx = Math.ceil(view.x1 / sx) * sx; gx <= view.x2 + 1e-9; gx += sx) {
      ctx.fillText(fmtTick(gx, sx), px1(gx), yZero + 5);
    }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let gy = Math.ceil(view.y1 / sy) * sy; gy <= view.y2 + 1e-9; gy += sy) {
      ctx.fillText(fmtTick(gy, sy), padL - 6, py1(gy));
    }
    if (cfg.x?.label) {
      ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
      ctx.fillText(cfg.x.label, W - padR, H - padB + 24);
    }
    if (cfg.y?.label) {
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(cfg.y.label, padL, padT - 2 + 12);
    }

    // curves
    samples = compiled.map((c) => sample(c, view.x1, view.x2, W - padL - padR));
    compiled.forEach((c, i) => {
      ctx.strokeStyle = c.color;
      ctx.lineWidth = c.width || 2;
      ctx.beginPath();
      let pen = false;
      samples[i].forEach(([px, y]) => {
        const X = padL + px;
        const Y = py1(y);
        if (!Number.isFinite(Y) || Y < -H || Y > 2 * H) { pen = false; return; }
        if (!pen) { ctx.moveTo(X, Y); pen = true; } else ctx.lineTo(X, Y);
      });
      ctx.stroke();
    });

    // data point sets
    pointSets.forEach((ps) => {
      const pts = (ps.points || []).filter(([x]) => x >= view.x1 && x <= view.x2);
      if (ps.mode !== 'dots') {
        ctx.strokeStyle = ps.color; ctx.lineWidth = 1.5;
        ctx.beginPath();
        pts.forEach(([x, y], i) => { const X = px1(x), Y = py1(y); i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); });
        ctx.stroke();
      }
      if (ps.mode !== 'line') {
        ctx.fillStyle = ps.color;
        pts.forEach(([x, y]) => {
          ctx.beginPath(); ctx.arc(px1(x), py1(y), 3.2, 0, 7); ctx.fill();
          ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2; ctx.stroke();
        });
      }
    });

    // crossings between curves
    if (cfg.crossings !== false && compiled.length > 1) {
      const marks = [];
      for (let i = 0; i < compiled.length; i++) for (let j = i + 1; j < compiled.length; j++) {
        const a = samples[i], b = samples[j];
        for (let k = 1; k < a.length && marks.length < 12; k++) {
          const d1 = a[k - 1][1] - b[k - 1][1], d2 = a[k][1] - b[k][1];
          if (Number.isFinite(d1) && Number.isFinite(d2) && d1 * d2 < 0) {
            const f = d1 / (d1 - d2);
            const x = view.x1 + ((a[k - 1][0] + f * (a[k][0] - a[k - 1][0])) / (W - padL - padR)) * (view.x2 - view.x1);
            const y = a[k - 1][1] + f * (a[k][1] - a[k - 1][1]);
            marks.push([x, y]);
          }
        }
      }
      ctx.strokeStyle = INK; ctx.fillStyle = '#fff'; ctx.lineWidth = 2;
      marks.forEach(([x, y]) => {
        ctx.beginPath(); ctx.arc(px1(x), py1(y), 4.5, 0, 7); ctx.fill(); ctx.stroke();
      });
    }

    // legend
    const labelled = [...compiled.filter((c) => c.label), ...pointSets.filter((p) => p.label)];
    if (labelled.length) {
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.font = '10.5px "IBM Plex Mono", monospace';
      labelled.forEach((c, i) => {
        const ly = padT + 14 + i * 16;
        ctx.fillStyle = c.color;
        ctx.fillRect(padL + 10, ly - 3, 14, 3);
        ctx.fillStyle = 'rgba(23,36,32,0.85)';
        ctx.fillText(c.label, padL + 30, ly);
      });
    }

    // crosshair
    if (mouse && mouse.x >= padL && mouse.x <= W - padR) {
      const x = dx1(mouse.x);
      ctx.strokeStyle = 'rgba(23,36,32,0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(mouse.x, padT); ctx.lineTo(mouse.x, H - padB); ctx.stroke();
      ctx.setLineDash([]);
      let box = ['x = ' + formatNum(x)];
      samples.forEach((s, i) => {
        const c = compiled[i];
        const y = c.fn.evaluate({ ...scope, x, t: x, p: x, n: x });
        if (Number.isFinite(y)) {
          const Y = py1(y);
          if (Y >= padT && Y <= H - padB) {
            ctx.fillStyle = c.color;
            ctx.beginPath(); ctx.arc(mouse.x, Y, 3.5, 0, 7); ctx.fill();
          }
          box.push((c.label ? c.label + ' = ' : 'y') + ' = ' + formatNum(y));
        }
      });
      ctx.font = '10.5px "IBM Plex Mono", monospace';
      const bw = Math.max(...box.map((s) => ctx.measureText(s).width)) + 14;
      const bx = Math.min(mouse.x + 10, W - padR - bw), by = padT + 6;
      ctx.fillStyle = 'rgba(255,255,255,0.94)';
      ctx.strokeStyle = 'rgba(23,36,32,0.35)';
      ctx.fillRect(bx, by, bw, 16 * box.length + 6);
      ctx.strokeRect(bx, by, bw, 16 * box.length + 6);
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      box.forEach((s, i) => { ctx.fillStyle = 'rgba(23,36,32,0.85)'; ctx.fillText(s, bx + 7, by + 12 + i * 16); });
    }
  }

  // -- interactions -------------------------------------------------------
  function pos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  canvas.addEventListener('pointermove', (e) => { mouse = pos(e); if (!dragging) draw(); });
  canvas.addEventListener('pointerleave', () => { mouse = null; draw(); });
  canvas.style.touchAction = 'pan-y';

  if (cfg.zoom !== false) {
    const pointers = new Map();
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      const padL = 46, padR = 14, padT = 12, padB = 30;
      const fx = Math.min(Math.max((mx - padL) / (W - padL - padR), 0), 1);
      const fy = Math.min(Math.max((my - padT) / (H - padT - padB), 0), 1);
      const cx = view.x1 + fx * (view.x2 - view.x1);
      const cy = view.y1 + (1 - fy) * (view.y2 - view.y1);
      const f = Math.exp(e.deltaY * 0.0016);
      const spanX = Math.min(Math.max((view.x2 - view.x1) * f, 1e-6), 1e9);
      const spanY = Math.min(Math.max((view.y2 - view.y1) * f, 1e-6), 1e12);
      setView({
        x1: cx - fx * spanX, x2: cx + (1 - fx) * spanX,
        y1: cy - (1 - fy) * spanY, y2: cy + fy * spanY,
      });
      yAuto = false;
    }, { passive: false });

    canvas.addEventListener('pointerdown', (e) => {
      pointers.set(e.pointerId, pos(e));
      canvas.setPointerCapture(e.pointerId);
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), view: { ...view } };
      }
      dragging = true; last = pos(e);
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, pos(e));
      if (pinch && pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const f = Math.min(Math.max(pinch.d / Math.max(d, 1), 0.2), 5);
        const v = pinch.view;
        const mx = (view.x1 + view.x2) / 2, my = (view.y1 + view.y2) / 2;
        setView({
          x1: mx - (mx - v.x1) * f, x2: mx + (v.x2 - mx) * f,
          y1: my - (my - v.y1) * f, y2: my + (v.y2 - my) * f,
        });
        yAuto = false;
        return;
      }
      if (!dragging) return;
      const p = pos(e);
      const sx = (view.x2 - view.x1) / Math.max(W - 60, 1);
      const sy = (view.y2 - view.y1) / Math.max(H - 42, 1);
      setView({ x1: view.x1 - (p.x - last.x) * sx, x2: view.x2 - (p.x - last.x) * sx, y1: view.y1 + (p.y - last.y) * sy, y2: view.y2 + (p.y - last.y) * sy });
      yAuto = false;
      last = p;
    });
    const endPointer = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) pinch = null; if (!pointers.size) dragging = false; };
    canvas.addEventListener('pointerup', endPointer);
    canvas.addEventListener('pointercancel', endPointer);
    canvas.addEventListener('dblclick', () => { yAuto = !cfg.y; setView(initial); });
  }

  new ResizeObserver(() => draw()).observe(canvas);
  draw();
}

function mountAll() {
  document.querySelectorAll('[data-widget="plotter"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
