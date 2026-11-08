// predict — a one-question inline bet: the reader commits to an answer,
// then the reveal explains why. Lightweight sibling of quiz.js — no progress
// bar, no score; the pacing comes from the paragraph it interrupts.
//
// Config (JSON in data-config):
//   q: string                  — the claim or question to bet on
//   choices: [string, ...]     — 2–4 options
//   answer: number (index)     — which option is right
//   why: string                — the reveal, shown after answering
//
// Styling lives in global.css (.predict, …); choice buttons reuse .quiz-choice.

export function init(el, config = {}) {
  if (!config.q || !config.choices?.length) return;

  const root = document.createElement('div');
  root.className = 'predict';

  const prompt = document.createElement('p');
  prompt.className = 'predict-q';
  prompt.textContent = config.q;

  const choices = document.createElement('div');
  choices.className = 'predict-choices';

  const feedback = document.createElement('p');
  feedback.className = 'predict-reveal';
  feedback.hidden = true;

  let answered = false;
  config.choices.forEach((text, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'quiz-choice predict-choice';
    b.textContent = text;
    b.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      [...choices.children].forEach((c, ci) => {
        c.disabled = true;
        if (ci === config.answer) c.classList.add('correct');
        else if (ci === i) c.classList.add('wrong');
      });
      const verdict = i === config.answer ? 'Called it.' : 'Not quite.';
      const why = config.why ? ` ${config.why}` : '';
      feedback.innerHTML = `<strong>${verdict}</strong>${why}`;
      feedback.hidden = false;
    });
    choices.appendChild(b);
  });

  root.append(prompt, choices, feedback);
  el.appendChild(root);
}

function mountAll() {
  document.querySelectorAll('[data-widget="predict"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
