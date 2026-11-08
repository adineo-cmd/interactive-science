// cloze — fill the missing word or number in a key sentence.
//
// Config (JSON in data-config):
//   text: string            — the sentence; %%0%%, %%1%%… mark the blanks
//   answers: [answer, ...]  — one entry per %%n%%, in order; each entry is a
//                             string or an array of accepted alternates
//                             (matched case-insensitively, ignoring extra
//                             spaces and a trailing period)
//   hint: string (optional) — shown after the first wrong attempt
//
// Styling lives in widgets-p1a.css (.cloze, …); the Check button reuses
// .quiz-choice and the shared .correct/.wrong states.

export function init(el, config = {}) {
  const answers = (config.answers || []).map((a) => (Array.isArray(a) ? a : [a]));
  if (!config.text || !answers.length) return;

  const root = document.createElement('div');
  root.className = 'cloze';

  const line = document.createElement('p');
  line.className = 'cloze-text';
  const blanks = [];

  // Sentence with each %%n%% placeholder swapped for an inline input.
  const re = /%%(\d+)%%/g;
  let cursor = 0, match;
  while ((match = re.exec(config.text))) {
    if (match.index > cursor) line.append(config.text.slice(cursor, match.index));
    cursor = re.lastIndex;
    const accepted = answers[Number(match[1])] || [];
    if (!accepted.length) { line.append(match[0]); continue; }
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'cloze-input';
    input.setAttribute('aria-label', `blank ${blanks.length + 1}`);
    input.setAttribute('autocomplete', 'off');
    input.style.width = `${Math.min(16, Math.max(6, ...accepted.map((a) => String(a).length + 2)))}ch`;
    line.appendChild(input);
    blanks.push({ input, accepted, tries: 0, done: false, revealed: false });
  }
  if (cursor < config.text.length) line.append(config.text.slice(cursor));

  const actions = document.createElement('div');
  actions.className = 'cloze-actions';
  const check = document.createElement('button');
  check.type = 'button';
  check.className = 'quiz-choice cloze-check';
  check.textContent = 'Check';
  actions.appendChild(check);

  const feedback = document.createElement('p');
  feedback.className = 'cloze-feedback';
  feedback.setAttribute('aria-live', 'polite');
  feedback.hidden = true;

  root.append(line, actions, feedback);
  el.appendChild(root);

  const norm = (s) => String(s).trim().toLowerCase().replace(/\s+/g, ' ').replace(/\.+$/, '');

  check.addEventListener('click', () => {
    blanks.forEach((b) => {
      if (b.done) return;
      if (b.accepted.some((a) => norm(a) === norm(b.input.value))) {
        b.done = true; // typed correctly: green, locked
        b.input.value = b.accepted[0];
        b.input.classList.add('correct');
        b.input.disabled = true;
      } else {
        b.tries += 1;
        b.input.classList.add('wrong');
        if (b.tries >= 2) { // second miss: fill the answer in
          b.done = true;
          b.revealed = true;
          b.input.value = b.accepted[0];
          b.input.disabled = true;
        }
      }
    });

    const open = blanks.filter((b) => !b.done).length;
    if (!open) {
      check.hidden = true;
      feedback.innerHTML = blanks.some((b) => b.revealed)
        ? '<strong>Filled in.</strong> Compare with the sentence above.'
        : '<strong>Right.</strong> The sentence now reads correctly.';
    } else {
      const rest = config.hint ? ` ${config.hint}` : ` ${open} blank${open === 1 ? '' : 's'} to go.`;
      feedback.innerHTML = `<strong>Not quite.</strong>${rest}`;
    }
    feedback.hidden = false;
  });

  line.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); check.click(); }
  });
}

function mountAll() {
  document.querySelectorAll('[data-widget="cloze"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
