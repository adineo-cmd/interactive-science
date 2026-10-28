// quiz — a small self-check at the end of a lesson.
//
// Config (JSON in data-config):
//   questions: [{
//     q: string,
//     choices: [string, ...],
//     answer: number (index),
//     why: string (shown after answering),
//   }]
//
// Progress, per-question feedback and a running score are handled here; the
// styling lives in global.css (.quiz, .quiz-choice, .quiz-bar, …).

export function init(el, config = {}) {
  const questions = (config.questions || []).filter((q) => q && q.choices?.length);
  if (!questions.length) return;

  const total = questions.length;
  let index = 0;
  let score = 0;
  let answered = false;

  const root = document.createElement('div');
  root.className = 'quiz';

  const progress = document.createElement('div');
  progress.className = 'quiz-progress';
  const count = document.createElement('span');
  const bar = document.createElement('div');
  bar.className = 'quiz-bar';
  const fill = document.createElement('i');
  bar.appendChild(fill);
  progress.append(count, bar);

  const qEl = document.createElement('p');
  qEl.className = 'quiz-q';

  const choices = document.createElement('div');
  choices.className = 'quiz-choices';

  const feedback = document.createElement('p');
  feedback.className = 'quiz-feedback';

  const foot = document.createElement('div');
  foot.className = 'quiz-foot';
  const scoreEl = document.createElement('span');
  scoreEl.className = 'quiz-score';
  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = 'btn btn-small';
  nextBtn.textContent = 'Next question';
  nextBtn.hidden = true;
  foot.append(scoreEl, nextBtn);

  root.append(progress, qEl, choices, feedback, foot);
  el.appendChild(root);

  const paint = () => {
    const item = questions[index];
    answered = false;
    count.textContent = `question ${index + 1} of ${total}`;
    fill.style.width = `${(index / total) * 100}%`;
    scoreEl.textContent = `score ${score} / ${total}`;
    qEl.textContent = item.q;
    feedback.textContent = '';
    nextBtn.hidden = true;
    nextBtn.textContent = index === total - 1 ? 'See result' : 'Next question';
    choices.replaceChildren();

    item.choices.forEach((text, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'quiz-choice';
      b.textContent = text;
      b.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const correct = i === item.answer;
        if (correct) score += 1;
        [...choices.children].forEach((child, ci) => {
          child.disabled = true;
          if (ci === item.answer) child.classList.add('correct');
          else if (ci === i) child.classList.add('wrong');
        });
        const why = item.why ? ` ${item.why}` : '';
        feedback.innerHTML = correct
          ? `<strong>Right.</strong>${why}`
          : `<strong>Not quite.</strong>${why}`;
        scoreEl.textContent = `score ${score} / ${total}`;
        nextBtn.hidden = false;
        nextBtn.focus();
      });
      choices.appendChild(b);
    });
  };

  nextBtn.addEventListener('click', () => {
    if (index < total - 1) {
      index += 1;
      paint();
      return;
    }
    fill.style.width = '100%';
    const pct = Math.round((score / total) * 100);
    qEl.textContent = score === total
      ? `All ${total} correct.`
      : `${score} of ${total} correct.`;
    choices.replaceChildren();
    feedback.textContent = pct >= 80
      ? 'You can explain this to someone else now.'
      : 'Worth a second pass over the section above.';
    nextBtn.hidden = true;
    count.textContent = 'finished';
    scoreEl.textContent = `final score ${score} / ${total}`;
  });

  paint();
}

function mountAll() {
  document.querySelectorAll('[data-quiz]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.quiz || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
