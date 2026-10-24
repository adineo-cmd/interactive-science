// sliderLab — parameter sliders driving live readouts and a canvas preset.
// Config (JSON in data-config):
//   preset: 'projectile' | 'bohr' | 'seasons' | 'orbit' | null
//   params:  [{name, label, min, max, step, value, unit}]
//   readouts: [{label, expr, unit}]   (expressions may use param names)
//   height: canvas height (preset-dependent default)
import { compile, formatNum } from './lib/mathexpr.js';

const INK = '#172420';
const INK2 = 'rgba(23,36,32,0.55)';
const ACCENT = '#1f6f54';

const ELEMENTS = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen',
  'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminium', 'Silicon', 'Phosphorus',
  'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium'];
const MASS = [1, 4, 7, 9, 11, 12, 14, 16, 19, 20, 23, 24, 27, 28, 31, 32, 35, 40, 39, 40];

// ---------------------------------------------------------------- presets --
function drawProjectile(ctx, w, h, s, t, trail) {
  const g = s.g, u = s.u, th = (s.theta * Math.PI) / 180;
  const T = (2 * u * Math.sin(th)) / g;
  const tt = Math.min(t % Math.max(T, 0.001), T);
  const R = (u * u * Math.sin(2 * th)) / g;
  const Hmax = (u * u * Math.sin(th) ** 2) / (2 * g);
  const xMax = Math.max(R, 1) * 1.18, yMax = Math.max(Hmax, 1) * 1.45;
  const padL = 34, padB = 30, padT = 18, padR = 16;
  const X = (x) => padL + (x / xMax) * (w - padL - padR);
  const Y = (y) => h - padB - (y / yMax) * (h - padB - padT);
  ctx.font = '10px "IBM Plex Mono", monospace';
  // ground + frame
  ctx.strokeStyle = 'rgba(31,111,84,0.25)';
  for (let gx = 0; gx <= xMax; gx += xMax / 8) {
    ctx.beginPath(); ctx.moveTo(X(gx), padT); ctx.lineTo(X(gx), h - padB); ctx.stroke();
  }
  for (let gy = 0; gy <= yMax; gy += yMax / 5) {
    ctx.beginPath(); ctx.moveTo(padL, Y(gy)); ctx.lineTo(w - padR, Y(gy)); ctx.stroke();
  }
  ctx.strokeStyle = INK; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(padL, Y(0)); ctx.lineTo(w - padR, Y(0)); ctx.stroke();
  ctx.fillStyle = INK2; ctx.textAlign = 'center';
  ctx.fillText('range', X(xMax / 2), h - 12);
  // ideal path
  ctx.strokeStyle = 'rgba(29,78,216,0.5)'; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i <= 60; i++) {
    const tq = (i / 60) * T;
    const x = u * Math.cos(th) * tq, y = u * Math.sin(th) * tq - 0.5 * g * tq * tq;
    i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y));
  }
  ctx.stroke(); ctx.setLineDash([]);
  // trail
  ctx.fillStyle = 'rgba(180,35,24,0.55)';
  trail.forEach(([x, y]) => { ctx.beginPath(); ctx.arc(X(x), Y(y), 1.6, 0, 7); ctx.fill(); });
  // ball + velocity vector
  const bx = u * Math.cos(th) * tt, by = u * Math.sin(th) * tt - 0.5 * g * tt * tt;
  const vx = u * Math.cos(th), vy = u * Math.sin(th) - g * tt;
  arrow(ctx, X(bx), Y(by), X(bx) + vx * 1.6, Y(by) - vy * 1.6, '#1d4ed8');
  ctx.fillStyle = '#b42318';
  ctx.beginPath(); ctx.arc(X(bx), Y(by), 6, 0, 7); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.4; ctx.stroke();
  // range tick
  ctx.fillStyle = INK2; ctx.textAlign = 'center';
  ctx.fillText('R = ' + formatNum(R, 1) + ' m', X(R), Y(0) + 16);
  ctx.strokeStyle = INK; ctx.setLineDash([2, 3]); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(X(R), Y(0)); ctx.lineTo(X(R), Y(0) - 8); ctx.stroke();
  ctx.setLineDash([]);
  return { tt };
}

function arrow(ctx, x1, y1, x2, y2, color) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - 8 * Math.cos(a - 0.4), y2 - 8 * Math.sin(a - 0.4));
  ctx.lineTo(x2 - 8 * Math.cos(a + 0.4), y2 - 8 * Math.sin(a + 0.4));
  ctx.closePath(); ctx.fill();
}

function drawBohr(ctx, w, h, s, t) {
  const Z = Math.round(s.Z);
  const shells = [2, 8, 8, 2];
  const cx = w / 2, cy = h / 2 + 6;
  const rMax = Math.min(w, h) / 2 - 26;
  ctx.font = '10px "IBM Plex Mono", monospace';
  // shells
  let remaining = Z, placed = [];
  for (let i = 0; i < shells.length && remaining > 0; i++) {
    const n = Math.min(shells[i], remaining);
    placed.push({ n, r: rMax * ((i + 1) / shells.length) });
    remaining -= n;
  }
  placed.forEach(({ r }, i) => {
    ctx.strokeStyle = 'rgba(31,111,84,0.35)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.stroke();
    ctx.fillStyle = INK2; ctx.textAlign = 'left';
    ctx.fillText(['K', 'L', 'M', 'N'][i], cx + r + 4, cy - 4);
  });
  // electrons
  placed.forEach(({ n, r }, i) => {
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + t * (0.5 + i * 0.25) * (i % 2 ? -1 : 1);
      const ex = cx + r * Math.cos(a), ey = cy + r * Math.sin(a);
      ctx.fillStyle = '#1d4ed8';
      ctx.beginPath(); ctx.arc(ex, ey, 3.4, 0, 7); ctx.fill();
    }
  });
  // nucleus
  const A = MASS[Z - 1] || Z;
  const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 18);
  grad.addColorStop(0, '#d9480f'); grad.addColorStop(1, '#b42318');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(cx, cy, 17, 0, 7); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = 'bold 11px "IBM Plex Mono", monospace';
  ctx.fillText('+' + Z, cx, cy);
  ctx.textBaseline = 'alphabetic';
  // labels
  ctx.font = '12px "Spectral", serif'; ctx.fillStyle = INK; ctx.textAlign = 'center';
  ctx.fillText(ELEMENTS[Z - 1] + `  (${Z})`, cx, 20);
  ctx.font = '10.5px "IBM Plex Mono", monospace'; ctx.fillStyle = INK2;
  const conf = placed.map(({ n }) => n).join(' · ');
  ctx.fillText(`${A}p + ${A - Z}n in nucleus · shells ${conf}`, cx, h - 10);
}

function drawSeasons(ctx, w, h, s, t) {
  const tilt = s.tilt;
  const lat = s.latitude;
  const cx = w * 0.72, cy = h / 2, R = Math.min(w * 0.26, h * 0.36);
  ctx.font = '10px "IBM Plex Mono", monospace';
  // sun
  const sx = w * 0.12, sy = h / 2;
  const grad = ctx.createRadialGradient(sx, sy, 4, sx, sy, 46);
  grad.addColorStop(0, '#f5b301'); grad.addColorStop(1, 'rgba(245,179,1,0)');
  ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(sx, sy, 46, 0, 7); ctx.fill();
  ctx.fillStyle = '#f5b301'; ctx.beginPath(); ctx.arc(sx, sy, 14, 0, 7); ctx.fill();
  ctx.fillStyle = INK2; ctx.textAlign = 'center'; ctx.fillText('Sun', sx, sy + 62);
  // rays
  ctx.strokeStyle = 'rgba(245,179,1,0.75)'; ctx.lineWidth = 1.4;
  for (let i = -2; i <= 2; i++) {
    const ry = sy + i * (R / 2.2);
    ctx.beginPath(); ctx.moveTo(sx + 18, ry); ctx.lineTo(cx - R - 8, ry); ctx.stroke();
  }
  // earth (June solstice: north pole leans toward the sun by `tilt`)
  const tl = (-tilt * Math.PI) / 180;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = '#dbe7df';
  ctx.beginPath(); ctx.arc(0, 0, R, 0, 7); ctx.fill();
  ctx.strokeStyle = INK; ctx.lineWidth = 1.5; ctx.stroke();
  // night side (right half, away from sun)
  ctx.save();
  ctx.beginPath(); ctx.arc(0, 0, R, -Math.PI / 2, Math.PI / 2); ctx.closePath(); ctx.clip();
  ctx.fillStyle = 'rgba(23,36,32,0.18)'; ctx.fillRect(-R, -R, 2 * R, 2 * R);
  ctx.restore();
  // axis + equator
  ctx.strokeStyle = INK; ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(R * Math.sin(tl) * 1.25, -R * Math.cos(tl) * 1.25);
  ctx.lineTo(-R * Math.sin(tl) * 1.25, R * Math.cos(tl) * 1.25);
  ctx.stroke();
  ctx.fillStyle = INK2; ctx.textAlign = 'left';
  ctx.fillText('N', R * Math.sin(tl) * 1.25 + 6, -R * Math.cos(tl) * 1.25);
  ctx.strokeStyle = 'rgba(23,36,32,0.5)'; ctx.setLineDash([3, 3]); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(-R, 0); ctx.lineTo(R, 0); ctx.stroke(); ctx.setLineDash([]);
  ctx.textAlign = 'right';
  ctx.fillText('equator', R - 6, -6);
  // latitude circle
  const ly = -R * Math.sin((lat * Math.PI) / 180);
  ctx.strokeStyle = '#b42318'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(0, ly, R * Math.cos((lat * Math.PI) / 180), R * 0.09, 0, 0, 7); ctx.stroke();
  ctx.fillStyle = '#b42318'; ctx.textAlign = 'right';
  ctx.fillText(`${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'}`, -R * Math.cos((lat * Math.PI) / 180) - 4, ly + 3);
  ctx.restore();
  // daylight math
  const d = (tilt * Math.PI) / 180, phi = (lat * Math.PI) / 180;
  const dayAt = (dec) => {
    const c = -Math.tan(phi) * Math.tan(dec);
    if (c <= -1) return 24; if (c >= 1) return 0;
    return (2 * Math.acos(c) * 180) / Math.PI / 15;
  };
  const june = dayAt(d), dec = dayAt(-d);
  ctx.fillStyle = INK; ctx.textAlign = 'left'; ctx.font = '11px "IBM Plex Mono", monospace';
  ctx.fillText(`at ${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'} with ${formatNum(tilt, 0)}° tilt:`, w * 0.06, h - 44);
  ctx.fillStyle = INK2; ctx.font = '10.5px "IBM Plex Mono", monospace';
  ctx.fillText(`June solstice daylight  ${formatNum(june, 1)} h`, w * 0.06, h - 26);
  ctx.fillText(`December solstice       ${formatNum(dec, 1)} h`, w * 0.06, h - 12);
  ctx.fillStyle = INK; ctx.textAlign = 'center';
  ctx.fillText('Earth, June solstice', cx, h - 10);
}

function drawOrbit(ctx, w, h, s, t, state) {
  const e = s.eccentricity;
  const cx = w * 0.5, cy = h * 0.52;
  const a = Math.min(w, h) * 0.38;
  const b = a * Math.sqrt(1 - e * e);
  const fx = a * e; // star at focus
  ctx.font = '10px "IBM Plex Mono", monospace';
  // orbit path
  ctx.strokeStyle = 'rgba(31,111,84,0.45)'; ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.ellipse(cx - fx + fx, cy, a, b, 0, 0, 7); ctx.stroke();
  // equal-area wedges: sample true anomaly over equal times
  const M = (t * 0.5) % (Math.PI * 2);
  let E = M;
  for (let i = 0; i < 6; i++) E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const nu = Math.atan2(Math.sqrt(1 - e * e) * Math.sin(E), Math.cos(E) - e);
  // star sits at one focus; ellipse centre is at cx
  const starX = cx + fx;
  const wedge = (M0, fill) => {
    ctx.beginPath();
    ctx.moveTo(starX, cy);
    for (let k = 0; k <= 16; k++) {
      const Mm = M0 - 0.55 + (k / 16) * 0.55;
      let Ei = Mm;
      for (let q = 0; q < 5; q++) Ei = Ei - (Ei - e * Math.sin(Ei) - Mm) / (1 - e * Math.cos(Ei));
      const nui = Math.atan2(Math.sqrt(1 - e * e) * Math.sin(Ei), Math.cos(Ei) - e);
      const r = a * (1 - e * Math.cos(Ei));
      ctx.lineTo(starX + r * Math.cos(nui), cy + r * Math.sin(nui));
    }
    ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
  };
  // wedges at opposite mean anomalies sweep equal areas in equal times
  wedge(M, 'rgba(180,35,24,0.15)');
  wedge(M - Math.PI, 'rgba(29,78,216,0.12)');
  // planet + star
  const r = a * (1 - e * Math.cos(E));
  const px = starX + r * Math.cos(nu), py = cy + r * Math.sin(nu);
  ctx.fillStyle = '#f5b301';
  ctx.beginPath(); ctx.arc(starX, cy, 9, 0, 7); ctx.fill();
  ctx.fillStyle = INK2; ctx.textAlign = 'center'; ctx.fillText('star', starX, cy + 24);
  ctx.fillStyle = '#1d4ed8';
  ctx.beginPath(); ctx.arc(px, py, 6, 0, 7); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2; ctx.stroke();
  // perihelion / aphelion markers
  ctx.fillStyle = INK2; ctx.textAlign = 'center';
  ctx.fillText('perihelion', starX, cy - b - 10);
  ctx.fillText('aphelion', cx - a, cy - b - 10);
  ctx.strokeStyle = 'rgba(23,36,32,0.3)'; ctx.setLineDash([2, 3]);
  ctx.beginPath(); ctx.moveTo(cx - a, cy + b + 14); ctx.lineTo(cx + a, cy + b + 14); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillText('2a — major axis', cx, cy + b + 26);
  return { nu, r };
}

// ------------------------------------------------------------------ init --
export function init(el, config = {}) {
  const cfg = config;
  const scope = {};
  (cfg.params || []).forEach((p) => { scope[p.name] = p.value; });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const paramsRow = document.createElement('div');
  paramsRow.className = 'widget-params';
  (cfg.params || []).forEach((p) => {
    const lab = document.createElement('label');
    lab.className = 'widget-param';
    const name = document.createElement('span');
    name.textContent = p.label || p.name;
    const val = document.createElement('output');
    val.textContent = formatNum(p.value, p.step >= 1 ? 0 : 2) + (p.unit ? ' ' + p.unit : '');
    lab.append(name, val);
    const input = document.createElement('input');
    input.type = 'range';
    input.min = p.min; input.max = p.max; input.step = p.step ?? 1; input.value = p.value;
    input.setAttribute('aria-label', p.label || p.name);
    input.addEventListener('input', () => {
      scope[p.name] = parseFloat(input.value);
      val.textContent = formatNum(scope[p.name], p.step >= 1 ? 0 : 2) + (p.unit ? ' ' + p.unit : '');
      refresh();
    });
    lab.appendChild(input);
    paramsRow.appendChild(lab);
  });
  if ((cfg.params || []).length) el.appendChild(paramsRow);

  const readoutsEl = document.createElement('div');
  readoutsEl.className = 'widget-readouts';
  const readouts = (cfg.readouts || []).map((r) => {
    const cell = document.createElement('div');
    cell.className = 'widget-readout';
    const lab = document.createElement('span');
    lab.textContent = r.label;
    const val = document.createElement('strong');
    cell.append(lab, val);
    readoutsEl.appendChild(cell);
    return { ...r, fn: compile(r.expr), val };
  });
  if (readouts.length) el.appendChild(readoutsEl);

  const heights = { projectile: 330, bohr: 330, seasons: 330, orbit: 340 };
  let canvas = null, ctx = null;
  if (cfg.preset) {
    canvas = document.createElement('canvas');
    canvas.className = 'widget-canvas';
    canvas.style.height = (cfg.height || heights[cfg.preset] || 330) + 'px';
    el.appendChild(canvas);
    ctx = canvas.getContext('2d');
  }

  let visible = true, frame = 0, t0 = performance.now(), simT = 0;
  const state = {};

  function refresh() {
    readouts.forEach((r) => {
      const v = r.fn.evaluate(scope);
      r.val.textContent = formatNum(v, 3) + (r.unit ? ' ' + r.unit : '');
    });
    if (canvas) paint(0);
  }

  function paint(dt) {
    simT += dt;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);
    const t = reduced ? 0.6 : simT;
    if (cfg.preset === 'projectile') {
      if (!state.trail) state.trail = [];
      const info = drawProjectile(ctx, w, h, scope, t, state.trail);
      if (info && !reduced) {
        const g = scope.g, u = scope.u, th = (scope.theta * Math.PI) / 180;
        const tt = info.tt;
        if (state.lastT !== undefined && tt < state.lastT) state.trail = [];
        state.trail.push([u * Math.cos(th) * tt, u * Math.sin(th) * tt - 0.5 * g * tt * tt]);
        if (state.trail.length > 90) state.trail.shift();
        state.lastT = tt;
      }
    } else if (cfg.preset === 'bohr') drawBohr(ctx, w, h, scope, t);
    else if (cfg.preset === 'seasons') drawSeasons(ctx, w, h, scope, t);
    else if (cfg.preset === 'orbit') drawOrbit(ctx, w, h, scope, t, state);
  }

  function loop(now) {
    if (!visible) return;
    paint((now - t0) / 1000);
    t0 = now;
    frame = requestAnimationFrame(loop);
  }
  if (canvas && !reduced) {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !visible) { visible = true; t0 = performance.now(); frame = requestAnimationFrame(loop); }
        else if (!en.isIntersecting) { visible = false; cancelAnimationFrame(frame); }
      });
    }).observe(canvas);
    t0 = performance.now();
    frame = requestAnimationFrame(loop);
  } else {
    visible = false;
  }

  refresh();
}

function mountAll() {
  document.querySelectorAll('[data-widget="sliderLab"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
