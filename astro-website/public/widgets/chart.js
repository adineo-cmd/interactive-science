// chart — data-driven bar / line chart with a legend you can toggle and a
// hover readout. Built for the "show me the numbers" lessons where a function
// plotter is the wrong instrument.
//
// Config (JSON in data-config):
//   kind:   'line' | 'bar'   (default 'line'; per-series kind wins)
//   height: number           (default 300)
//   xLabels: [string, ...]
//   series: [{ label, values: [number|null, ...], color?, kind?, width? }]
//   y:      { min?, max?, label? }
//   xLabel: string, yLabel: string
//   unit:   string           (appended in the tooltip / y ticks)
//   digits: number           (default 2)

const PALETTE = ['#1d4ed8', '#b42318', '#0f766e', '#7c3aed', '#b45309', '#0e7490'];

function fmt(v, digits) {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  const abs = Math.abs(v);
  if (abs >= 10000) return `${(v / 1000).toFixed(abs >= 100000 ? 0 : 1)}k`;
  return Number(v.toFixed(digits)).toString();
}

function niceTicks(min, max, target = 5) {
  const span = max - min || 1;
  const rough = span / target;
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  let step = mag;
  for (const m of [1, 2, 2.5, 5, 10]) {
    if (rough <= m * mag) { step = m * mag; break; }
  }
  const ticks = [];
  for (let v = Math.ceil(min / step) * step; v <= max + step * 1e-9; v += step) {
    ticks.push(Number(v.toFixed(6)));
  }
  return ticks;
}

export function init(el, config = {}) {
  const cfg = config;
  const kind = cfg.kind || 'line';
  const height = cfg.height || 300;
  const digits = cfg.digits ?? 2;
  const xLabels = cfg.xLabels || [];
  const series = (cfg.series || []).map((s, i) => ({
    ...s,
    color: s.color || PALETTE[i % PALETTE.length],
    kind: s.kind || kind,
    width: s.width || 2.4,
  }));
  if (!series.length) return;

  const values = series.flatMap((s) => s.values).filter((v) => typeof v === 'number' && Number.isFinite(v));
  const yMin = cfg.y?.min ?? Math.min(0, ...values);
  const yMax = cfg.y?.max ?? Math.max(...values, yMin + 1);
  const digital = digits;

  const W = 720;
  const H = height;
  const m = { top: 16, right: 16, bottom: 40, left: cfg.y?.label || cfg.unit ? 54 : 42 };
  const plotW = W - m.left - m.right;
  const plotH = H - m.top - m.bottom;
  const n = xLabels.length || series[0].values.length;
  const spacing = n > 1 ? plotW / (n - 1) : plotW;

  const xAt = (i) => (kind === 'bar' ? m.left + (plotW / n) * (i + 0.5) : m.left + i * spacing);
  const yAt = (v) => m.top + plotH - ((v - yMin) / (yMax - yMin || 1)) * plotH;

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'chart-svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', cfg.ariaLabel || 'Data chart');

  const add = (tag, attrs, parent = svg) => {
    const node = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
    parent.appendChild(node);
    return node;
  };

  // grid + y ticks
  const ticks = niceTicks(yMin, yMax);
  for (const t of ticks) {
    const y = yAt(t);
    add('line', { class: 'c-grid', x1: m.left, x2: W - m.right, y1: y, y2: y });
    add('text', { class: 'c-tick', x: m.left - 8, y: y + 3.5, 'text-anchor': 'end' }).textContent = `${fmt(t, digital)}${cfg.unit ? '' : ''}`;
  }
  // axes
  add('line', { class: 'c-axis', x1: m.left, x2: W - m.right, y1: H - m.bottom, y2: H - m.bottom });
  add('line', { class: 'c-axis', x1: m.left, x2: m.left, y1: m.top, y2: H - m.bottom });

  // x labels — thin them out when crowded
  const every = Math.max(1, Math.ceil(n / 10));
  xLabels.forEach((label, i) => {
    if (i % every !== 0 && i !== n - 1) return;
    add('text', {
      class: 'c-tick',
      x: xAt(i),
      y: H - m.bottom + 16,
      'text-anchor': 'middle',
    }).textContent = label;
  });

  if (cfg.y?.label || cfg.unit) {
    const yLabel = add('text', {
      class: 'c-tick',
      x: 10,
      y: m.top + plotH / 2,
      'text-anchor': 'middle',
      transform: `rotate(-90 10 ${m.top + plotH / 2})`,
    });
    yLabel.textContent = cfg.y?.label || cfg.unit;
  }
  if (cfg.xLabel) {
    add('text', {
      class: 'c-tick',
      x: m.left + plotW / 2,
      y: H - 4,
      'text-anchor': 'middle',
    }).textContent = cfg.xLabel;
  }

  // series groups (kept so the legend can toggle opacity)
  const groups = series.map((s) => {
    const g = add('g', { class: 'c-series' });
    const color = s.color;
    if (s.kind === 'bar') {
      const barW = Math.max(3, (plotW / n) * 0.62);
      s.values.forEach((v, i) => {
        if (typeof v !== 'number') return;
        const y = v >= 0 ? yAt(v) : yAt(0);
        const h = Math.abs(yAt(v) - yAt(0));
        add('rect', {
          x: xAt(i) - barW / 2,
          y,
          width: barW,
          height: Math.max(1, h),
          fill: color,
          rx: 2,
        }, g);
      });
    } else {
      let d = '';
      let started = false;
      s.values.forEach((v, i) => {
        if (typeof v !== 'number') { started = false; return; }
        d += `${started ? 'L' : 'M'}${xAt(i).toFixed(2)},${yAt(v).toFixed(2)} `;
        started = true;
      });
      add('path', { d: d.trim(), fill: 'none', stroke: color, 'stroke-width': s.width, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, g);
      s.values.forEach((v, i) => {
        if (typeof v !== 'number') return;
        add('circle', { class: 'c-point', cx: xAt(i), cy: yAt(v), r: 3.2, fill: color }, g);
      });
    }
    return g;
  });

  // hover readout
  const wrap = document.createElement('div');
  wrap.className = 'chart-wrap';
  wrap.appendChild(svg);

  const tip = document.createElement('div');
  tip.className = 'chart-tooltip';
  wrap.appendChild(tip);

  const hoverLine = add('line', {
    y1: m.top, y2: H - m.bottom, x1: 0, x2: 0,
    stroke: 'currentColor', 'stroke-width': 1, 'stroke-dasharray': '3 3', opacity: 0,
  });

  const nearestIndex = (clientX) => {
    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * W;
    if (kind === 'bar') {
      const i = Math.floor(((x - m.left) / plotW) * n);
      return Math.min(n - 1, Math.max(0, i));
    }
    const i = Math.round((x - m.left) / spacing);
    return Math.min(n - 1, Math.max(0, i));
  };

  const showAt = (clientX) => {
    const i = nearestIndex(clientX);
    const x = xAt(i);
    hoverLine.setAttribute('x1', x);
    hoverLine.setAttribute('x2', x);
    hoverLine.setAttribute('opacity', '0.5');
    const rows = series
      .filter((s) => s._visible !== false && typeof s.values[i] === 'number')
      .map((s) => `<span style="color:${s.color}">■</span> ${s.label}: <strong>${fmt(s.values[i], digits)}${cfg.unit ? ' ' + cfg.unit : ''}</strong>`);
    tip.innerHTML = `<em>${xLabels[i] ?? i}</em><br>${rows.join('<br>')}`;
    const rect = wrap.getBoundingClientRect();
    const px = (x / W) * rect.width;
    tip.style.left = `${Math.min(Math.max(px, 60), rect.width - 60)}px`;
    tip.style.top = `${(m.top + 10) / H * rect.height}px`;
    tip.classList.add('on');
  };

  svg.addEventListener('pointermove', (e) => showAt(e.clientX));
  svg.addEventListener('pointerleave', () => {
    tip.classList.remove('on');
    hoverLine.setAttribute('opacity', '0');
  });

  // legend
  const legend = document.createElement('div');
  legend.className = 'chart-legend';
  series.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `<i style="--c:${s.color}"></i>${s.label}`;
    b.setAttribute('aria-pressed', 'true');
    b.addEventListener('click', () => {
      const off = b.classList.toggle('off');
      b.setAttribute('aria-pressed', String(!off));
      s._visible = !off;
      groups[i].classList.toggle('dim', off);
    });
    legend.appendChild(b);
  });

  el.appendChild(wrap);
  if (series.length > 1) el.appendChild(legend);
}

function mountAll() {
  document.querySelectorAll('[data-widget="chart"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
