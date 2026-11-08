// order — rebuild a sequence: drag rows into place, or click two rows to swap.
//
// Config (JSON in data-config):
//   prompt: string          — instruction shown above the list
//   items:  [string, ...]   — in the CORRECT order (rendered shuffled)
//   why:    string          — explanation shown after checking or revealing
//
// Drag uses pointer events (touch + mouse); clicking one row then another
// swaps them; arrow keys move a focused row. Rows are <li> with data-index
// = position in config.items. "Check order" marks rows .correct/.wrong and
// reports k of n in place; a wrong check offers a "Reveal order" link that
// animates rows into the correct sequence. Styling: widgets-p1b.css.

export function init(el, config = {}) {
  const items = (config.items || []).filter((s) => typeof s === 'string' && s.trim());
  if (items.length < 2) return;
  const n = items.length;

  // Deterministic seeded shuffle — stable across loads, never already-solved.
  let seed = 2166136261;
  const key = String(config.prompt || '') + '\n' + items.join('|');
  for (let i = 0; i < key.length; i++) { seed ^= key.charCodeAt(i); seed = Math.imul(seed, 16777619); }
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const start = items.map((_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [start[i], start[j]] = [start[j], start[i]];
  }
  if (start.every((v, i) => v === i)) start.push(start.shift());

  // -- DOM -----------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'order';
  const prompt = document.createElement('p');
  prompt.className = 'order-prompt'; prompt.textContent = config.prompt || 'Put these in the right order.';
  const list = document.createElement('ul');
  list.className = 'order-list';
  start.forEach((idx) => {
    const li = document.createElement('li');
    li.className = 'order-row';
    li.dataset.index = String(idx);
    li.tabIndex = 0;
    const grip = document.createElement('span');
    grip.className = 'order-grip'; grip.setAttribute('aria-hidden', 'true'); grip.textContent = '⋮⋮';
    li.append(grip, items[idx]);
    list.appendChild(li);
  });
  const actions = document.createElement('div');
  actions.className = 'order-actions seq-actions';
  const checkBtn = document.createElement('button');
  checkBtn.type = 'button';
  checkBtn.className = 'btn btn-small'; checkBtn.textContent = 'Check order';
  actions.appendChild(checkBtn);
  const feedback = document.createElement('p');
  feedback.className = 'order-feedback seq-verdict';
  root.append(prompt, list, actions, feedback);
  el.appendChild(root);

  // -- drag (pointer events, touch + mouse) and click-to-swap --------------
  let drag = null, selected = null;

  const clearMarks = () => [...list.children].forEach((li) => li.classList.remove('correct', 'wrong'));

  const swap = (a, b) => {
    [a.dataset.index, b.dataset.index] = [b.dataset.index, a.dataset.index];
    [a.lastChild.data, b.lastChild.data] = [b.lastChild.data, a.lastChild.data];
    clearMarks();
  };

  list.addEventListener('pointerdown', (e) => {
    const row = e.target.closest('.order-row');
    if (!row || drag) return;
    e.preventDefault();
    drag = { row, id: e.pointerId, y0: e.clientY, moved: false };
    try { row.setPointerCapture(e.pointerId); } catch { /* empty */ }
  });
  list.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.moved) {
      if (Math.abs(e.clientY - drag.y0) < 6) return;
      drag.moved = true;
      if (selected) { selected.classList.remove('active'); selected = null; }
      drag.row.classList.add('dragging'); clearMarks();
    }
    const next = [...list.children].find((li) => {
      if (li === drag.row) return false;
      const b = li.getBoundingClientRect();
      return e.clientY < b.top + b.height / 2;
    });
    if (next) list.insertBefore(drag.row, next);
    else if (list.lastElementChild !== drag.row) list.appendChild(drag.row);
  });
  const settle = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { row, moved } = drag;
    drag = null;
    row.classList.remove('dragging');
    if (moved) return;
    if (selected === row) { row.classList.remove('active'); selected = null; }
    else if (selected) { swap(selected, row); selected.classList.remove('active'); selected = null; }
    else { selected = row; row.classList.add('active'); }
  };
  list.addEventListener('pointerup', settle);
  list.addEventListener('pointercancel', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag.row.classList.remove('dragging');
    drag = null;
  });
  list.addEventListener('keydown', (e) => {
    const row = e.target.closest('.order-row');
    const dir = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
    const rows = [...list.children];
    const at = rows.indexOf(row || list);
    if (!row || !dir || at + dir < 0 || at + dir >= rows.length) return;
    e.preventDefault();
    clearMarks();
    if (dir < 0) list.insertBefore(row, rows[at + dir]); else list.insertBefore(rows[at + dir], row);
  });

  // -- check / reveal --------------------------------------------------------
  const why = config.why ? ` ${config.why}` : '';
  const win = () => {
    feedback.classList.remove('wrong'); feedback.classList.add('correct');
    feedback.innerHTML = `<strong>Right.</strong>${why}`;
  };
  checkBtn.addEventListener('click', () => {
    list.classList.remove('revealed');
    let good = 0;
    [...list.children].forEach((li, pos) => {
      const ok = Number(li.dataset.index) === pos;
      li.classList.toggle('correct', ok); li.classList.toggle('wrong', !ok);
      if (ok) good += 1;
    });
    if (good === n) { win(); return; }
    feedback.classList.remove('correct'); feedback.classList.add('wrong');
    feedback.innerHTML = `<strong>Not quite.</strong> ${good} of ${n} in the right place — drag again or reveal. `;
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'order-reveal';
    link.textContent = 'Reveal order';
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      clearMarks();
      [...list.children].sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index))
        .forEach((li, pos) => { list.appendChild(li); li.style.setProperty('--i', pos); });
      list.classList.remove('revealed');
      void list.offsetWidth; // restart the settle animation
      list.classList.add('revealed');
      [...list.children].forEach((li) => li.classList.add('correct'));
      win();
    });
    feedback.appendChild(link);
  });
}

function mountAll() {
  document.querySelectorAll('[data-widget="order"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
