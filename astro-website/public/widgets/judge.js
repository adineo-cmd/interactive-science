// judge — rapid true/false: one statement at a time on a compact card,
// a one-line why, then a plain count at the end. Minimal sibling of
// quiz.js — no progress bar, no score machinery.
//
// Config (JSON in data-config):
//   statements: [{
//     s: string,      — the statement to judge
//     truth: boolean, — is the statement true?
//     why: string,    — the one-line reason, shown after answering
//   }]                — typically 3–5 statements
//
// Styling lives in widgets-p1a.css (.judge, …); the True/False buttons
// reuse .quiz-choice and the shared .correct/.wrong states.

export function init(el, config = {}) {
  const statements = (config.statements || [])
    .filter((st) => st && typeof st.s === 'string' && typeof st.truth === 'boolean');
  if (!statements.length) return;

  let index = 0;
  let score = 0;

  const root = document.createElement('div');
  root.className = 'judge';

  const card = document.createElement('div');
  card.className = 'judge-card';

  const q = document.createElement('p');
  q.className = 'judge-q';

  const actions = document.createElement('div');
  actions.className = 'judge-actions';
  const buttons = [true, false].map((value) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'quiz-choice judge-btn';
    b.textContent = value ? 'True' : 'False';
    b.addEventListener('click', () => answer(value, b));
    actions.appendChild(b);
    return b;
  });

  const why = document.createElement('p');
  why.className = 'judge-why';
  why.setAttribute('aria-live', 'polite');
  why.hidden = true;

  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'quiz-choice judge-next';
  next.hidden = true;

  const summary = document.createElement('p');
  summary.className = 'judge-summary';
  summary.hidden = true;

  card.append(q, actions, why, next);
  root.append(card, summary);
  el.appendChild(root);

  function answer(pick, picked) {
    const st = statements[index];
    const right = pick === st.truth;
    if (right) score += 1;
    buttons.forEach((b, i) => {
      b.disabled = true;
      if ([true, false][i] === st.truth) b.classList.add('correct');
      else if (b === picked) b.classList.add('wrong');
    });
    card.classList.add(right ? 'correct' : 'wrong'); // border flash
    const note = st.why ? ` ${st.why}` : '';
    why.innerHTML = right ? `<strong>Right.</strong>${note}` : `<strong>Not quite.</strong>${note}`;
    why.hidden = false;
    next.textContent = index === statements.length - 1 ? 'Summary' : 'Next';
    next.hidden = false;
    next.focus();
  }

  function paint() {
    card.classList.remove('correct', 'wrong');
    q.textContent = statements[index].s;
    why.hidden = true;
    next.hidden = true;
    buttons.forEach((b) => {
      b.disabled = false;
      b.classList.remove('correct', 'wrong');
    });
  }

  next.addEventListener('click', () => {
    if (index < statements.length - 1) { index += 1; paint(); return; }
    card.hidden = true;
    summary.textContent = `${score} of ${statements.length} right.`;
    summary.hidden = false;
  });

  paint();
}

function mountAll() {
  document.querySelectorAll('[data-widget="judge"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
