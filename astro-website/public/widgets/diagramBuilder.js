// diagramBuilder — draggable vector diagram with live components.
// Config (JSON in data-config):
//   type: 'vector'
//   unit: 'm/s', x: {min,max}, y: {min,max}, start: [x, y]
import { formatNum } from './lib/mathexpr.js';

export function init(el, config = {}) {
  const cfg = config;
  if ((cfg.type || 'vector') !== 'vector') return;
  const unit = cfg.unit || 'm/s';

  const canvas = document.createElement('canvas');
  canvas.className = 'widget-canvas';
  canvas.style.height = (cfg.height || 320) + 'px';
  canvas.style.touchAction = 'none';
  el.appendChild(canvas);
  const readouts = document.createElement('div');
  readouts.className = 'widget-readouts';
  const cells = {};
  [['vx', 'x-component'], ['vy', 'y-component'], ['mag', 'magnitude'], ['ang', 'angle']].forEach(([k, lab]) => {
    const c = document.createElement('div');
    c.className = 'widget-readout';
    c.innerHTML = `<span>${lab}</span>`;
    const v = document.createElement('strong');
    c.appendChild(v);
    readouts.appendChild(c);
    cells[k] = v;
  });
  el.appendChild(readouts);

  const xr = cfg.x || { min: -10, max: 10 };
  const yr = cfg.y || { min: -10, max: 10 };
  let head = cfg.start ? [...cfg.start] : [6, 4];
  const ctx = canvas.getContext('2d');
  let dragging = false;

  function draw() {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);
    const pad = 30;
    const X = (x) => pad + ((x - xr.min) / (xr.max - xr.min)) * (w - 2 * pad);
    const Y = (y) => h - pad - ((y - yr.min) / (yr.max - yr.min)) * (h - 2 * pad);
    const IX = (px) => xr.min + ((px - pad) / (w - 2 * pad)) * (xr.max - xr.min);
    const IY = (py) => yr.min + ((h - pad - py) / (h - 2 * pad)) * (yr.max - yr.min);
    const ox = X(0), oy = Y(0);

    // grid
    ctx.strokeStyle = 'rgba(31,111,84,0.14)';
    ctx.lineWidth = 1;
    ctx.font = '10px "IBM Plex Mono", monospace';
    ctx.fillStyle = 'rgba(23,36,32,0.5)';
    for (let x = Math.ceil(xr.min); x <= xr.max; x++) {
      ctx.beginPath(); ctx.moveTo(X(x), Y(yr.min)); ctx.lineTo(X(x), Y(yr.max)); ctx.stroke();
    }
    for (let y = Math.ceil(yr.min); y <= yr.max; y++) {
      ctx.beginPath(); ctx.moveTo(X(xr.min), Y(y)); ctx.lineTo(X(xr.max), Y(y)); ctx.stroke();
    }
    // axes
    ctx.strokeStyle = 'rgba(23,36,32,0.6)';
    ctx.beginPath(); ctx.moveTo(X(xr.min), oy); ctx.lineTo(X(xr.max), oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, Y(yr.min)); ctx.lineTo(ox, Y(yr.max)); ctx.stroke();
    ctx.textAlign = 'right';
    ctx.fillText('x', w - 12, oy - 6);
    ctx.fillText('y', ox + 16, 14);

    // components
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(29,78,216,0.6)';
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(X(head[0]), oy); ctx.stroke();
    ctx.strokeStyle = 'rgba(180,35,24,0.6)';
    ctx.beginPath(); ctx.moveTo(X(head[0]), oy); ctx.lineTo(X(head[0]), Y(head[1])); ctx.stroke();
    ctx.setLineDash([]);
    // main vector
    const a = Math.atan2(oy - Y(head[1]), X(head[0]) - ox);
    ctx.strokeStyle = '#172420'; ctx.lineWidth = 2.4;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(X(head[0]), Y(head[1])); ctx.stroke();
    ctx.fillStyle = '#172420';
    ctx.beginPath();
    ctx.moveTo(X(head[0]), Y(head[1]));
    ctx.lineTo(X(head[0]) - 11 * Math.cos(a - 0.35), Y(head[1]) + 11 * Math.sin(a - 0.35));
    ctx.lineTo(X(head[0]) - 11 * Math.cos(a + 0.35), Y(head[1]) + 11 * Math.sin(a + 0.35));
    ctx.closePath(); ctx.fill();
    // handle
    ctx.fillStyle = dragging ? '#1f6f54' : '#1d4ed8';
    ctx.beginPath(); ctx.arc(X(head[0]), Y(head[1]), 8, 0, 7); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();

    cells.vx.textContent = `${formatNum(head[0], 2)} ${unit}`;
    cells.vy.textContent = `${formatNum(head[1], 2)} ${unit}`;
    cells.mag.textContent = `${formatNum(Math.hypot(head[0], head[1]), 2)} ${unit}`;
    cells.ang.textContent = `${formatNum((Math.atan2(head[1], head[0]) * 180) / Math.PI, 1)}°`;
  }

  canvas.addEventListener('pointerdown', (e) => {
    dragging = true;
    canvas.setPointerCapture(e.pointerId);
    move(e);
  });
  canvas.addEventListener('pointermove', (e) => dragging && move(e));
  canvas.addEventListener('pointerup', () => { dragging = false; draw(); });
  function move(e) {
    const r = canvas.getBoundingClientRect();
    const pad = 30;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    head = [
      Math.min(Math.max(xr.min, xr.min + ((e.clientX - r.left - pad) / (w - 2 * pad)) * (xr.max - xr.min)), xr.max),
      Math.min(Math.max(yr.min, yr.min + ((h - pad - (e.clientY - r.top)) / (h - 2 * pad)) * (yr.max - yr.min)), yr.max),
    ];
    draw();
  }
  new ResizeObserver(() => draw()).observe(canvas);
  draw();
}

function mountAll() {
  document.querySelectorAll('[data-widget="diagramBuilder"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
