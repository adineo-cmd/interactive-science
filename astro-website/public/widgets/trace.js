// trace — which curve matches the scenario?
//
// Config (JSON in data-config):
//   prompt: string                     — the scenario to match
//   curves: [{                         — 2–4 curves, drawn as anonymous
//     expr: string,                    —   coloured lines; expr is a math
//     color: string,                   —   expression in `x` (2*x, sin(x),
//     label: string,                   —   x^2 …), same grammar plotter uses
//   }]
//   correct: number (index)            — which curve is the right one
//   x: { min, max }   y: { min, max }  — fixed plot window
//   xlabel, ylabel: string             — axis labels (always drawn in mono)
//   why: string                        — explanation on correct/reveal
//
// Curves are sampled on a canvas using plotter.js's conventions (dpr fit,
// padded plot box, mono tick labels, ResizeObserver redraw). The expression
// evaluator is a tiny recursive-descent parser compiled to closures (no
// eval), re-implemented inline the same way as widgets/lib/mathexpr.js so
// this module stays import-free. Choice buttons carry the curve LABELS
// (never colours alone); a wrong pick draws that curve dashed red and
// allows one retry, then "Reveal" flashes the right curve. Styling lives
// in widgets-p1d.css (.trace, .trace-canvas, .trace-choices, …).

// -- tiny safe expression evaluator (recursive descent, no eval) -------------
const FUNCS = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos,
  atan: Math.atan, sqrt: Math.sqrt, abs: Math.abs, exp: Math.exp,
  log: Math.log, ln: Math.log, log2: Math.log2, log10: Math.log10,
  floor: Math.floor, ceil: Math.ceil, round: Math.round,
};
const CONSTS = { pi: Math.PI, e: Math.E, tau: Math.PI * 2 };
const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

function compileExpr(src) {
  const s = String(src).replace(/\s+/g, '');
  const toks = s.match(/\d+\.?\d*|[a-zA-Z_]\w*|[-+*/^()]/g) || [];
  if (toks.join('') !== s) return () => NaN;
  let p = 0;
  const peek = () => toks[p];
  // Each grammar rule returns a closure (scope) => number.
  function expr() {
    let f = term();
    while (peek() === '+' || peek() === '-') {
      const op = toks[p++], g = term(), h = f;
      f = (sc) => (op === '+' ? h(sc) + g(sc) : h(sc) - g(sc));
    }
    return f;
  }
  function term() {
    let f = unary();
    for (;;) {
      const t = peek();
      if (t === '*' || t === '/') {
        p++; const g = unary(), h = f;
        f = (sc) => (t === '*' ? h(sc) * g(sc) : h(sc) / g(sc));
      } else if (t && /[0-9a-zA-Z_(]/.test(t[0])) { // implicit multiplication: 2x, 3(x+1)
        const g = unary(), h = f; // right operand starts AT t — don't advance
        f = (sc) => h(sc) * g(sc);
      } else break;
    }
    return f;
  }
  function unary() {
    if (peek() === '-') { p++; const f = unary(); return (sc) => -f(sc); }
    if (peek() === '+') { p++; return unary(); }
    return power();
  }
  function power() {
    const f = primary();
    if (peek() === '^') { p++; const g = unary(); return (sc) => Math.pow(f(sc), g(sc)); }
    return f;
  }
  function primary() {
    const t = toks[p];
    if (t === undefined) return () => NaN;
    p++;
    if (t === '(') {
      const inner = expr();
      if (peek() !== ')') return () => NaN;
      p++;
      return inner;
    }
    if (/^[0-9]/.test(t)) { const v = parseFloat(t); return () => v; }
    if (has(FUNCS, t.toLowerCase()) && peek() === '(') {
      p++; const arg = expr();
      if (peek() !== ')') return () => NaN;
      p++;
      return (sc) => FUNCS[t.toLowerCase()](arg(sc));
    }
    if (has(CONSTS, t.toLowerCase())) { const v = CONSTS[t.toLowerCase()]; return () => v; }
    return (sc) => (has(sc, t) ? sc[t] : NaN);
  }
  const f = expr();
  return p === toks.length ? f : () => NaN;
}

// -- widget -------------------------------------------------------------------
const WRONG = '#c2413b';
const PADS = [46, 14, 12, 30]; // left, right, top, bottom — plotter's plot box

function niceStep(span, target) {
  const rough = span / Math.max(2, target);
  const mag = Math.pow(10, Math.floor(Math.log10(rough)));
  for (const m of [1, 2, 5, 10]) if (rough <= m * mag) return m * mag;
  return 10 * mag;
}

export function init(el, config = {}) {
  const curves = (config.curves || []).filter((c) => c && c.expr && c.label).slice(0, 4);
  if (curves.length < 2) return;
  const correct = Math.min(Math.max(config.correct | 0, 0), curves.length - 1);
  const x0 = config.x || { min: -1, max: 10 };
  const y0 = config.y || { min: -1, max: 10 };
  const fns = curves.map((c) => compileExpr(c.expr));
  const state = curves.map(() => 'idle'); // idle | wrong | picked

  // -- DOM -----------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'trace';
  const prompt = document.createElement('p');
  prompt.className = 'trace-prompt';
  prompt.textContent = config.prompt || 'Which curve matches?';
  const canvas = document.createElement('canvas');
  canvas.className = 'trace-canvas';
  canvas.style.height = '320px';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', `${config.prompt || 'Graph'} — ${curves.length} unlabelled curves`);
  const choices = document.createElement('div');
  choices.className = 'trace-choices';
  curves.forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'trace-choice quiz-choice';
    b.style.setProperty('--c', c.color || '#1d4ed8');
    b.textContent = c.label;
    b.addEventListener('click', () => attempt(i, b));
    choices.appendChild(b);
  });
  const actions = document.createElement('div');
  actions.className = 'trace-actions p1-actions';
  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Reveal';
  revealBtn.hidden = true;
  actions.appendChild(revealBtn);
  const feedback = document.createElement('p');
  feedback.className = 'trace-feedback p1-verdict';
  root.append(prompt, canvas, choices, actions, feedback);
  el.appendChild(root);

  const ctx = canvas.getContext('2d');
  let dpr = 1, W = 0, H = 0;
  function fit() {
    dpr = window.devicePixelRatio || 1;
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  // -- drawing (plotter conventions: dpr transform, pads, mono labels) ------
  function draw(highlightIdx) {
    fit();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, W, H);
    const [padL, padR, padT, padB] = PADS;
    const px = (x) => padL + ((x - x0.min) / (x0.max - x0.min)) * (W - padL - padR);
    const py = (y) => padT + (1 - (y - y0.min) / (y0.max - y0.min)) * (H - padT - padB);
    const xZero = Math.min(Math.max(px(0), padL), W - padR);
    const yZero = Math.min(Math.max(py(0), padT), H - padB);

    // grid + axes + mono ticks/labels
    const sx = niceStep(x0.max - x0.min, Math.floor((W - padL - padR) / 90));
    const sy = niceStep(y0.max - y0.min, Math.floor((H - padT - padB) / 60));
    ctx.font = '10px "IBM Plex Mono", monospace';
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(31,111,84,0.14)';
    ctx.beginPath();
    for (let gx = Math.ceil(x0.min / sx) * sx; gx <= x0.max; gx += sx) { ctx.moveTo(px(gx), padT); ctx.lineTo(px(gx), H - padB); }
    for (let gy = Math.ceil(y0.min / sy) * sy; gy <= y0.max; gy += sy) { ctx.moveTo(padL, py(gy)); ctx.lineTo(W - padR, py(gy)); }
    ctx.stroke();
    ctx.strokeStyle = 'rgba(23,36,32,0.55)';
    ctx.fillStyle = 'rgba(23,36,32,0.72)';
    ctx.beginPath();
    ctx.moveTo(padL, yZero); ctx.lineTo(W - padR, yZero);
    ctx.moveTo(xZero, padT); ctx.lineTo(xZero, H - padB);
    ctx.stroke();
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let gx = Math.ceil(x0.min / sx) * sx; gx <= x0.max + 1e-9; gx += sx) ctx.fillText(String(+gx.toFixed(6)), px(gx), yZero + 5);
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let gy = Math.ceil(y0.min / sy) * sy; gy <= y0.max + 1e-9; gy += sy) ctx.fillText(String(+gy.toFixed(6)), padL - 6, py(gy));
    if (config.xlabel) { ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText(config.xlabel, W - padR, H - padB + 24); }
    if (config.ylabel) { ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(config.ylabel, padL, padT); }

    // anonymous curves; the highlighted one gets a halo ("solid bright")
    curves.forEach((c, i) => {
      const highlight = i === highlightIdx;
      const wrong = state[i] === 'wrong';
      const dim = highlightIdx != null && !highlight && state[i] === 'idle';
      const stroke = () => {
        ctx.beginPath();
        let pen = false;
        const step = Math.max(1, Math.floor(W / 400));
        for (let q = 0; q <= W - padL - padR; q += step) {
          const x = x0.min + (q / (W - padL - padR)) * (x0.max - x0.min);
          const y = fns[i]({ x, t: x, p: x, n: x });
          const slack = (y0.max - y0.min) * 0.02;
          if (!Number.isFinite(y) || y < y0.min - slack || y > y0.max + slack) { pen = false; continue; }
          if (!pen) { ctx.moveTo(px(x), py(y)); pen = true; } else ctx.lineTo(px(x), py(y));
        }
        ctx.stroke();
      };
      ctx.globalAlpha = dim ? 0.35 : 0.9;
      ctx.strokeStyle = wrong ? WRONG : c.color;
      ctx.setLineDash(wrong ? [6, 4] : []);
      if (highlight) {
        ctx.lineWidth = 7;
        ctx.globalAlpha = 0.22;
        stroke();
        ctx.globalAlpha = dim ? 0.35 : 1;
      }
      ctx.lineWidth = highlight ? 3 : 1.8;
      stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    });
  }

  new ResizeObserver(() => draw()).observe(canvas);

  // -- grading ----------------------------------------------------------------
  let tries = 0;
  let settled = false;

  const settleReveal = (ok) => {
    settled = true;
    [...choices.children].forEach((b) => { b.disabled = true; });
    revealBtn.hidden = true;
    feedback.classList.toggle('correct', ok);
    feedback.classList.toggle('wrong', !ok);
    feedback.innerHTML = `<strong>${ok ? 'Right.' : 'Not quite.'}</strong>${config.why ? ` ${config.why}` : ''}`;
    let n = 0;
    const flash = setInterval(() => { // flash the right curve, then leave it lit
      draw(n % 2 ? null : correct);
      if (++n > 5) { clearInterval(flash); state[correct] = 'picked'; draw(correct); }
    }, 170);
  };

  const attempt = (i, btn) => {
    if (settled || state[i] === 'wrong') return;
    if (i === correct) {
      state[i] = 'picked';
      btn.classList.add('correct');
      settleReveal(true);
      return;
    }
    tries += 1;
    state[i] = 'wrong';
    btn.classList.add('wrong');
    if (tries === 1) {
      feedback.classList.remove('correct');
      feedback.classList.add('wrong');
      feedback.innerHTML = '<strong>Not quite.</strong> that curve is dashed red — one more look, or reveal.';
      revealBtn.hidden = false;
    } else {
      settleReveal(false);
    }
  };

  revealBtn.addEventListener('click', () => settleReveal(false));
  draw();
}

function mountAll() {
  document.querySelectorAll('[data-widget="trace"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
