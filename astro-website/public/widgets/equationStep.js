// equationStep — step-by-step derivation reveal.
// Config (JSON in data-config):
//   title: string
//   steps: [{math:'v = u + at', note:'…'}, …]   (math is HTML: <sub>, <sup>, ½, ·, √)
export function init(el, config = {}) {
  const cfg = config;
  const steps = cfg.steps || [];

  const list = document.createElement('ol');
  list.className = 'eq-steps';
  const items = steps.map((s, i) => {
    const li = document.createElement('li');
    const no = document.createElement('span');
    no.className = 'eq-no';
    no.textContent = i + 1;
    const math = document.createElement('div');
    math.className = 'eq-math';
    math.innerHTML = s.math;
    li.append(no, math);
    if (s.note) {
      const note = document.createElement('p');
      note.className = 'eq-note';
      note.textContent = s.note;
      li.appendChild(note);
    }
    list.appendChild(li);
    return li;
  });
  el.appendChild(list);

  const bar = document.createElement('div');
  bar.className = 'eq-bar';
  const progress = document.createElement('span');
  progress.className = 'eq-progress';
  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'btn btn-small';
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.className = 'btn btn-ghost btn-small';
  reset.textContent = 'Start over';
  reset.hidden = true;
  bar.append(progress, next, reset);
  el.appendChild(bar);

  let shown = 0;
  function render() {
    items.forEach((li, i) => li.classList.toggle('shown', i < shown));
    progress.textContent = `${shown} / ${items.length} steps`;
    if (shown >= items.length) {
      next.textContent = 'All steps shown';
      next.disabled = true;
      reset.hidden = false;
    } else {
      next.textContent = shown === 0 ? 'Walk me through it' : 'Next step';
      next.disabled = false;
      reset.hidden = true;
    }
  }
  next.addEventListener('click', () => { shown = Math.min(shown + 1, items.length); render(); });
  reset.addEventListener('click', () => { shown = 0; render(); });
  render();
}

function mountAll() {
  document.querySelectorAll('[data-widget="equationStep"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
