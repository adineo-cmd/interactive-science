// estimate — guess the magnitude, then reveal (Fermi-style).
//
// Config (JSON in data-config):
//   prompt:  string           — the question to guess at
//   unit:    string           — unit label after the input ("km", "people", "kg")
//   answer:  number           — the true magnitude
//   factor:  number           — accepted log-distance; within ×factor either
//                               way counts as "Called it"
//   why:     string           — explanation shown with the reveal
//   context: string (optional)— friendly comparison for the answer, shown
//                               in a mono line after the reveal
//
// The reader types a rough number and hits "Reveal": within factor →
// "Called it."; within factor × 10 → "Close."; otherwise "Not quite." —
// each with the true answer. Empty or non-numeric input gets a gentle
// nudge instead of a grade. Styling: widgets-p1c.css (.estimate, …).

export function init(el, config = {}) {
  const answer = Number(config.answer);
  const factor = Math.abs(Number(config.factor));
  if (!Number.isFinite(answer) || !Number.isFinite(factor) || factor <= 0) return;

  // Group thousands with commas; keep small numbers to 2 decimals.
  const fmt = (n) => {
    if (!Number.isFinite(n)) return String(n);
    if (Math.abs(n) >= 1000) return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return String(parseFloat(n.toFixed(2)));
  };
  const parse = (raw) => {
    const n = Number(String(raw || '').replace(/[,\s_]/g, ''));
    return Number.isFinite(n) && String(raw || '').trim() !== '' ? n : NaN;
  };

  // -- DOM -------------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'estimate';
  const prompt = document.createElement('p');
  prompt.className = 'estimate-prompt';
  prompt.textContent = config.prompt || 'Roughly how big is it?';
  const row = document.createElement('div');
  row.className = 'estimate-row';
  const input = document.createElement('input');
  input.type = 'text';
  input.inputMode = 'decimal';
  input.className = 'estimate-input';
  input.setAttribute('aria-label', `your guess, in ${config.unit || 'units'}`);
  input.placeholder = 'your guess';
  input.autocomplete = 'off';
  const unit = document.createElement('span');
  unit.className = 'estimate-unit';
  unit.textContent = config.unit || '';
  const actions = document.createElement('div');
  actions.className = 'estimate-actions p1-actions';
  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Reveal';
  const feedback = document.createElement('p');
  feedback.className = 'estimate-feedback p1-verdict';
  const context = document.createElement('p');
  context.className = 'estimate-context';
  context.hidden = true;
  row.append(input, unit);
  actions.appendChild(revealBtn);
  root.append(prompt, row, actions, feedback, context);
  el.appendChild(root);

  const show = (n) => ` The answer is ~${fmt(n)}${config.unit ? ` ${config.unit}` : ''}.`;
  const why = config.why ? ` ${config.why}` : '';

  const settle = (verdict, cls) => {
    input.classList.add(cls);
    input.disabled = true;
    revealBtn.disabled = true;
    feedback.classList.add(cls);
    feedback.innerHTML = `<strong>${verdict}</strong>${show(answer)}${why}`;
    if (config.context) {
      context.textContent = `→ ${config.context}`;
      context.hidden = false;
    }
  };

  const grade = (given) => {
    const a = Math.abs(given);
    const b = Math.abs(answer);
    const lo = Math.min(a, b);
    const ratio = lo > 0 ? Math.max(a, b) / lo : Infinity;
    if (ratio <= factor) settle('Called it.', 'correct');
    else if (ratio <= factor * 10) settle('Close.', 'close');
    else settle('Not quite.', 'wrong');
  };

  const onReveal = () => {
    if (revealBtn.disabled) return;
    input.classList.remove('correct', 'close', 'wrong');
    const given = parse(input.value);
    if (Number.isNaN(given)) {
      feedback.classList.remove('correct', 'wrong');
      feedback.textContent = 'Type a number first — a rough guess is the whole point.';
      input.focus();
      return;
    }
    grade(given);
  };

  revealBtn.addEventListener('click', onReveal);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); onReveal(); }
  });
}

function mountAll() {
  document.querySelectorAll('[data-widget="estimate"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
