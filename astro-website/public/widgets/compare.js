// compare — drag a divider across two states of the same thing.
//
// Config (JSON in data-config):
//   prompt: string                     — instruction shown above the card
//   before: { label, text }            — left-of-divider state (HTML-free text)
//   after:  { label, text }            — right-of-divider state
//   why:    string (optional)          — footnote line under the card
//
// This one is exploration, not grading: there is no right split. Dragging the
// divider (pointer events, touch + mouse) or clicking anywhere in the stage
// re-veals more of one panel and less of the other via clip-path; the "after"
// panel is clipped from the left by the split, the "before" panel sits under
// it full-width. The mono readout tracks the split percentage while dragging,
// and the divider handle is a real <button> (arrow keys nudge it by 2).
// Styling lives in widgets-p1d.css (.compare, .compare-stage, …).

export function init(el, config = {}) {
  const before = config.before || {};
  const after = config.after || {};
  if (!before.text && !after.text) return;

  // -- DOM -----------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'compare';

  const prompt = document.createElement('p');
  prompt.className = 'compare-prompt';
  prompt.textContent = config.prompt || 'Drag the divider to compare.';

  const stage = document.createElement('div');
  stage.className = 'compare-stage';

  const makePanel = (state, side) => {
    const panel = document.createElement('div');
    panel.className = `compare-panel compare-${side}`;
    const label = document.createElement('p');
    label.className = 'compare-label';
    label.textContent = state.label || side;
    const text = document.createElement('p');
    text.className = 'compare-text';
    text.textContent = state.text || '';
    panel.append(label, text);
    return panel;
  };

  const beforePanel = makePanel(before, 'before'); // in flow — sizes the stage
  const afterPanel = makePanel(after, 'after'); // absolute, clipped from the left
  stage.append(beforePanel, afterPanel);

  const divider = document.createElement('div');
  divider.className = 'compare-divider';
  const handle = document.createElement('button');
  handle.type = 'button';
  handle.className = 'compare-handle';
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-label', 'Before / after divider');
  handle.setAttribute('aria-valuemin', '0');
  handle.setAttribute('aria-valuemax', '100');
  divider.appendChild(handle);
  stage.appendChild(divider);

  const readout = document.createElement('p');
  readout.className = 'compare-readout';

  root.append(prompt, stage, readout);
  if (config.why) {
    const foot = document.createElement('p');
    foot.className = 'compare-foot';
    foot.textContent = config.why;
    root.appendChild(foot);
  }
  el.appendChild(root);

  // -- split state ----------------------------------------------------------
  // The CSS var --split (a %) drives both the clip and the divider position;
  // clamped so both panels keep a sliver and the handle stays reachable.
  const MIN = 4;
  const MAX = 96;
  let split = 50;

  const paint = () => {
    const pct = `${split}%`;
    stage.style.setProperty('--split', pct);
    handle.setAttribute('aria-valuenow', String(Math.round(split)));
    readout.textContent = `before ${Math.round(split)}% · after ${Math.round(100 - split)}%`;
  };

  const setSplit = (value) => {
    split = Math.min(MAX, Math.max(MIN, value));
    paint();
  };

  // -- drag (pointer events, touch + mouse) ---------------------------------
  let dragging = false;

  const toSplit = (e) => {
    const box = stage.getBoundingClientRect();
    return ((e.clientX - box.left) / Math.max(box.width, 1)) * 100;
  };

  stage.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true;
    stage.classList.add('dragging');
    try { stage.setPointerCapture(e.pointerId); } catch { /* empty */ }
    setSplit(toSplit(e));
  });
  stage.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    setSplit(toSplit(e));
  });
  const release = () => {
    dragging = false;
    stage.classList.remove('dragging');
  };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);

  // Keyboard nudge on the handle.
  handle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); setSplit(split - 2); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setSplit(split + 2); }
  });

  paint();
}

function mountAll() {
  document.querySelectorAll('[data-widget="compare"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
