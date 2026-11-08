// place — drop a marker on the right spot of a labelled scale.
//
// Config (JSON in data-config):
//   prompt:    string              — instruction shown above the track
//   labels:    [string, ...]       — tick labels left→right, evenly spaced
//                                    from scale.min to scale.max (["0","7","14"])
//   scale:     { min, max }        — the numeric range of the track
//   answer:    number              — the correct value on the scale
//   tolerance: number              — ± accepted around the answer
//   why:       string              — explanation shown on grade or reveal
//
// The marker is a real <button role="slider">: click/tap anywhere on the
// track to place it, drag it with pointer events (touch + mouse), or focus
// it and use the arrow keys. "Check" grades |value − answer| ≤ tolerance;
// a wrong check gives one retry, then "Reveal" animates the marker to the
// correct spot and explains. Styling: widgets-p1c.css (.place, …).

export function init(el, config = {}) {
  const min = Number(config.scale?.min);
  const max = Number(config.scale?.max);
  const answer = Number(config.answer);
  const tolerance = Math.abs(Number(config.tolerance));
  const labels = (config.labels || []).map(String).filter((s) => s.trim());
  if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) return;
  if (!Number.isFinite(answer) || !Number.isFinite(tolerance) || labels.length < 2) return;
  const range = max - min;

  // Decimals shown in the readout follow the tolerance's precision.
  const dp = tolerance >= 1 ? 0 : tolerance >= 0.1 ? 1 : 2;
  const fmt = (v) => Number(v).toFixed(dp);
  const pct = (v) => Math.min(100, Math.max(0, ((v - min) / range) * 100));

  // -- DOM -------------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'place';
  const prompt = document.createElement('p');
  prompt.className = 'place-prompt';
  prompt.textContent = config.prompt || 'Place the marker at the right spot on the scale.';
  const readout = document.createElement('p');
  readout.className = 'place-readout';
  readout.setAttribute('aria-live', 'polite');
  const track = document.createElement('div');
  track.className = 'place-track';
  const marker = document.createElement('button');
  marker.type = 'button';
  marker.className = 'place-marker';
  marker.setAttribute('role', 'slider');
  marker.setAttribute('aria-label', `marker on the scale, from ${fmt(min)} to ${fmt(max)}`);
  marker.setAttribute('aria-valuemin', String(min));
  marker.setAttribute('aria-valuemax', String(max));
  const ticks = document.createElement('div');
  ticks.className = 'place-ticks';
  ticks.setAttribute('aria-hidden', 'true');
  labels.forEach((text, i) => {
    const t = document.createElement('span');
    t.className = 'place-tick';
    if (i === 0) t.style.left = '0%';
    else if (i === labels.length - 1) t.style.left = '100%';
    else t.style.left = `${(i / (labels.length - 1)) * 100}%`;
    t.textContent = text;
    ticks.appendChild(t);
  });
  const actions = document.createElement('div');
  actions.className = 'place-actions p1-actions';
  const checkBtn = document.createElement('button');
  checkBtn.type = 'button';
  checkBtn.textContent = 'Check';
  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Reveal';
  revealBtn.hidden = true;
  actions.append(checkBtn, revealBtn);
  const feedback = document.createElement('p');
  feedback.className = 'place-feedback p1-verdict';
  root.append(prompt, readout, track, ticks, actions, feedback);
  track.appendChild(marker);
  el.appendChild(root);

  // -- marker state ------------------------------------------------------------
  let value = min;
  let done = false;
  let attempts = 0;
  let drag = null;
  const why = config.why ? ` ${config.why}` : '';

  const paint = () => {
    marker.style.left = `${pct(value)}%`;
    marker.setAttribute('aria-valuenow', fmt(value));
    readout.textContent = `≈ ${fmt(value)}`;
  };
  const set = (v) => { value = Math.min(max, Math.max(min, v)); paint(); };
  paint();

  // -- pointer drag / tap-to-place (touch + mouse) ------------------------------
  const valueAt = (clientX) => {
    const b = track.getBoundingClientRect();
    return min + (Math.min(1, Math.max(0, (clientX - b.left) / b.width))) * range;
  };
  track.addEventListener('pointerdown', (e) => {
    if (done || drag) return;
    drag = { id: e.pointerId, moved: false };
    set(valueAt(e.clientX));
    try { track.setPointerCapture(e.pointerId); } catch { /* empty */ }
  });
  track.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id || done) return;
    drag.moved = true;
    set(valueAt(e.clientX));
  });
  const release = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null;
  };
  track.addEventListener('pointerup', release);
  track.addEventListener('pointercancel', release);

  // -- keyboard ------------------------------------------------------------------
  const step = range / 50;
  marker.addEventListener('keydown', (e) => {
    if (done) return;
    const big = e.shiftKey ? 5 : 1;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); set(value - step * big); }
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); set(value + step * big); }
    else if (e.key === 'Home') { e.preventDefault(); set(min); }
    else if (e.key === 'End') { e.preventDefault(); set(max); }
  });

  // -- check / reveal --------------------------------------------------------------
  const markWrong = () => {
    marker.classList.add('wrong');
    setTimeout(() => marker.classList.remove('wrong'), 600);
  };
  const resolve = () => {
    done = true;
    marker.classList.remove('wrong');
    marker.classList.add('correct');
    checkBtn.hidden = true;
    revealBtn.hidden = true;
    feedback.classList.remove('wrong');
    feedback.classList.add('correct');
    feedback.innerHTML = `<strong>Right.</strong>${why}`;
  };
  const reveal = () => {
    done = true;
    marker.classList.remove('wrong');
    marker.classList.add('reveal');
    set(answer); // base transition animates the marker to the answer
    checkBtn.hidden = true;
    revealBtn.hidden = true;
    feedback.classList.remove('correct');
    feedback.classList.add('wrong');
    feedback.innerHTML = `<strong>Not quite.</strong> The answer is ~${fmt(answer)}.${why}`;
  };
  checkBtn.addEventListener('click', () => {
    if (done) return;
    if (Math.abs(value - answer) <= tolerance) { resolve(); return; }
    attempts += 1;
    markWrong();
    if (attempts >= 2) { reveal(); return; }
    revealBtn.hidden = false;
    feedback.classList.remove('correct');
    feedback.classList.add('wrong');
    feedback.innerHTML = '<strong>Not quite.</strong> One more try — or reveal.';
  });
  revealBtn.addEventListener('click', () => { if (!done) reveal(); });
}

function mountAll() {
  document.querySelectorAll('[data-widget="place"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
