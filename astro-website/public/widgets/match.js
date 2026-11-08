// match — pair terms with their meanings (or causes with effects).
//
// Config (JSON in data-config):
//   prompt: string                    — instruction shown above the columns
//   pairs:  [{ left, right }, ...]    — 3–5 pairs; left keeps the given
//                                       order, right is rendered shuffled
//   why:    string (optional)         — shown once every pair is matched
//
// Click a left item to select it (.active), then a right item to attempt the
// pair: correct → both lock in (.correct + .paired, disabled); wrong → both
// flash .wrong for ~600 ms and the left item stays selected. Progress shows
// in the mono counter ("3/5 paired"). Real <button>s throughout, so the
// widget is keyboard operable. Styling lives in widgets-p1b.css (.match,
// .match-grid, .match-item, …).

export function init(el, config = {}) {
  const pairs = (config.pairs || []).filter((p) => p && p.left && p.right).slice(0, 5);
  if (pairs.length < 2) return;
  const n = pairs.length;
  let done = 0;
  let selected = null;
  let busy = false;
  let hintT = null;

  // Deterministic shuffle of the right column (seeded from the content),
  // same scheme as order.js — never renders the already-solved layout.
  let seed = 2166136261;
  const key = String(config.prompt || '') + '\n' + pairs.map((p) => p.left + p.right).join('|');
  for (let i = 0; i < key.length; i++) { seed ^= key.charCodeAt(i); seed = Math.imul(seed, 16777619); }
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rights = pairs.map((_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [rights[i], rights[j]] = [rights[j], rights[i]];
  }
  if (rights.every((v, i) => v === i)) rights.push(rights.shift());

  // -- DOM -----------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'match';
  const prompt = document.createElement('p');
  prompt.className = 'match-prompt';
  prompt.textContent = config.prompt || 'Match each term with its meaning.';
  const grid = document.createElement('div');
  grid.className = 'match-grid';
  const leftCol = document.createElement('div');
  leftCol.className = 'match-left';
  const rightCol = document.createElement('div');
  rightCol.className = 'match-right';
  const makeItem = (i, text) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'match-item';
    b.dataset.i = String(i);
    b.textContent = text;
    return b;
  };
  pairs.forEach((p, i) => leftCol.appendChild(makeItem(i, p.left)));
  rights.forEach((i) => rightCol.appendChild(makeItem(i, pairs[i].right)));
  grid.append(leftCol, rightCol);
  const actions = document.createElement('div');
  actions.className = 'match-actions seq-actions';
  const counter = document.createElement('span');
  counter.className = 'match-counter';
  const feedback = document.createElement('p');
  feedback.className = 'match-feedback seq-verdict';
  actions.appendChild(counter);
  root.append(prompt, grid, actions, feedback);
  el.appendChild(root);

  // -- interaction -----------------------------------------------------------
  const updateCounter = () => { counter.textContent = `${done}/${n} paired`; };
  updateCounter();

  const attempt = (rightBtn) => {
    if (!selected) { // tapping the right column first: nudge, don't attempt
      counter.textContent = 'pick a term on the left first';
      clearTimeout(hintT);
      hintT = setTimeout(updateCounter, 1200);
      return;
    }
    busy = true;
    const leftBtn = selected;
    if (leftBtn.dataset.i === rightBtn.dataset.i) {
      leftBtn.classList.remove('active');
      leftBtn.classList.add('correct', 'paired');
      rightBtn.classList.add('correct', 'paired');
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      selected = null;
      busy = false;
      done += 1;
      updateCounter();
      if (done === n) {
        feedback.classList.add('correct');
        feedback.innerHTML = `<strong>Right.</strong>${config.why ? ` ${config.why}` : ''}`;
      }
      return;
    }
    leftBtn.classList.add('wrong');
    rightBtn.classList.add('wrong');
    setTimeout(() => {
      leftBtn.classList.remove('wrong'); // .active kept — left stays selected
      rightBtn.classList.remove('wrong');
      busy = false;
    }, 600);
  };

  leftCol.addEventListener('click', (e) => {
    const btn = e.target.closest('button.match-item');
    if (!btn || btn.disabled || busy) return;
    if (selected === btn) { btn.classList.remove('active'); selected = null; return; }
    if (selected) selected.classList.remove('active');
    selected = btn;
    btn.classList.add('active');
  });
  rightCol.addEventListener('click', (e) => {
    const btn = e.target.closest('button.match-item');
    if (!btn || btn.disabled || busy) return;
    attempt(btn);
  });
}

function mountAll() {
  document.querySelectorAll('[data-widget="match"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
