// spot-error — find the deliberate mistake in a worked solution.
//
// Config (JSON in data-config):
//   prompt:     string           — instruction shown above the solution
//   lines:      [string, ...]    — the worked solution, 4–7 lines, in order
//   errorLine:  number           — 0-based index of the faulty line
//   correction: string           — what that line should say
//   why:        string           — explanation shown with the grade/reveal
//
// Each line is a real <button> in a mono list. Clicking a line marks the
// learner's choice: the right line locks in green with the correction and
// why; a wrong line flashes red — one retry allowed, then "Reveal" (shown
// after the first miss) highlights the true line green and explains.
// Styling: widgets-p1c.css (.spoterr, .spoterr-line, …).

export function init(el, config = {}) {
  const lines = (config.lines || []).filter((s) => typeof s === 'string' && s.trim()).slice(0, 7);
  const err = Number(config.errorLine);
  const correction = typeof config.correction === 'string' ? config.correction.trim() : '';
  if (lines.length < 3 || !Number.isInteger(err) || err < 0 || err >= lines.length || !correction) return;

  // -- DOM -------------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'spoterr';
  const prompt = document.createElement('p');
  prompt.className = 'spoterr-prompt';
  prompt.textContent = config.prompt || 'One of these steps is wrong. Find it.';
  const list = document.createElement('div');
  list.className = 'spoterr-lines';
  const lineBtns = lines.map((text, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'spoterr-line';
    b.dataset.i = String(i);
    const no = document.createElement('span');
    no.className = 'spoterr-no';
    no.textContent = String(i + 1);
    const txt = document.createElement('span');
    txt.className = 'spoterr-text';
    txt.textContent = text;
    b.append(no, txt);
    list.appendChild(b);
    return b;
  });
  const actions = document.createElement('div');
  actions.className = 'spoterr-actions p1-actions';
  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.textContent = 'Reveal';
  revealBtn.hidden = true;
  actions.appendChild(revealBtn);
  const feedback = document.createElement('p');
  feedback.className = 'spoterr-feedback p1-verdict';
  root.append(prompt, list, actions, feedback);
  el.appendChild(root);

  // -- interaction ---------------------------------------------------------------
  let done = false;
  let attempts = 0;
  const why = config.why ? ` ${config.why}` : '';
  const shouldRead = `Line ${err + 1} should read: ${correction}.`;

  const lock = () => {
    done = true;
    lineBtns.forEach((b) => { b.disabled = true; });
    revealBtn.hidden = true;
  };
  const reveal = () => {
    lock();
    lineBtns[err].classList.add('reveal');
    feedback.classList.remove('correct');
    feedback.classList.add('wrong');
    feedback.innerHTML = `<strong>Not quite.</strong> ${shouldRead}${why}`;
  };
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button.spoterr-line');
    if (!btn || done || btn.disabled) return;
    const i = Number(btn.dataset.i);
    if (i === err) {
      lock();
      btn.classList.add('correct');
      feedback.classList.remove('wrong');
      feedback.classList.add('correct');
      feedback.innerHTML = `<strong>Right.</strong> ${shouldRead}${why}`;
      return;
    }
    attempts += 1;
    btn.classList.add('wrong');
    setTimeout(() => btn.classList.remove('wrong'), 600);
    if (attempts >= 2) { reveal(); return; }
    revealBtn.hidden = false;
    feedback.classList.remove('correct');
    feedback.classList.add('wrong');
    feedback.innerHTML = '<strong>Not quite.</strong> One more try — or reveal.';
  });
  revealBtn.addEventListener('click', () => { if (!done) reveal(); });
}

function mountAll() {
  document.querySelectorAll('[data-widget="spot-error"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
