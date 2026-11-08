// sort-buckets — classify items into 2–3 categories.
//
// Config (JSON in data-config):
//   prompt:  string                     — instruction shown above the tray
//   buckets: [string, ...]              — 2–3 category names
//   items:   [{ label, bucket }, ...]   — 4–8 items; bucket is the index of
//                                         the right category (rendered shuffled)
//   why:     string (optional)          — shown once every item is filed
//
// Two ways to file: click an item (selected), then click a bucket; or drag
// the item onto a bucket (pointer events, touch + mouse). Buckets highlight
// under a drag (.over). A wrong filing flashes red and bounces back to the
// tray; a right one locks into the bucket with a green tick. The mono
// counter tracks "k/n filed"; a "Reset" button restores the tray. Real
// <button>s throughout, so the widget is keyboard operable. Styling:
// widgets-p1c.css (.sortb, …).

export function init(el, config = {}) {
  const buckets = (config.buckets || []).map(String).filter((s) => s.trim()).slice(0, 3);
  const raw = (config.items || [])
    .filter((it) => it && typeof it.label === 'string' && it.label.trim()
      && Number.isInteger(it.bucket) && it.bucket >= 0 && it.bucket < buckets.length)
    .slice(0, 8);
  if (buckets.length < 2 || raw.length < 2) return;
  const n = raw.length;

  // Deterministic seeded shuffle — stable across loads, never pre-sorted
  // by bucket (same scheme as order.js / match.js).
  let seed = 2166136261;
  const key = String(config.prompt || '') + '\n' + raw.map((it) => it.label + it.bucket).join('|');
  for (let i = 0; i < key.length; i++) { seed ^= key.charCodeAt(i); seed = Math.imul(seed, 16777619); }
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = raw.map((_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  if (order.every((idx, pos) => raw[idx].bucket >= (raw[order[pos - 1]]?.bucket ?? -1))) {
    order.push(order.shift());
  }

  // -- DOM -------------------------------------------------------------------
  const root = document.createElement('div');
  root.className = 'sortb';
  const prompt = document.createElement('p');
  prompt.className = 'sortb-prompt';
  prompt.textContent = config.prompt || 'Sort each item into the right bucket.';
  const tray = document.createElement('div');
  tray.className = 'sortb-tray';
  const items = order.map((idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sortb-item';
    btn.textContent = raw[idx].label;
    tray.appendChild(btn);
    return { btn, label: raw[idx].label, bucket: raw[idx].bucket, filed: false };
  });
  const bucketsWrap = document.createElement('div');
  bucketsWrap.className = 'sortb-buckets';
  const drops = buckets.map((name) => {
    const b = document.createElement('div');
    b.className = 'sortb-bucket';
    const nameBtn = document.createElement('button');
    nameBtn.type = 'button';
    nameBtn.className = 'sortb-bucket-name';
    nameBtn.textContent = name;
    const drop = document.createElement('div');
    drop.className = 'sortb-drop';
    b.append(nameBtn, drop);
    bucketsWrap.appendChild(b);
    return drop;
  });
  const actions = document.createElement('div');
  actions.className = 'sortb-actions p1-actions';
  const counter = document.createElement('span');
  counter.className = 'sortb-counter';
  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.textContent = 'Reset';
  const feedback = document.createElement('p');
  feedback.className = 'sortb-feedback p1-verdict';
  actions.append(counter, resetBtn);
  root.append(prompt, tray, bucketsWrap, actions, feedback);
  el.appendChild(root);

  // -- state -------------------------------------------------------------------
  let selected = null;
  let done = 0;
  let finished = false;
  let busy = false;
  let drag = null;
  let ghost = null;
  let overEl = null;
  let hintT = null;

  const updateCounter = () => { counter.textContent = `${done}/${n} filed`; };
  updateCounter();
  const nudge = (msg) => {
    counter.textContent = msg;
    clearTimeout(hintT);
    hintT = setTimeout(updateCounter, 1400);
  };
  const select = (item) => {
    if (selected) selected.btn.classList.remove('selected');
    selected = item;
    if (item) item.btn.classList.add('selected');
  };
  const setOver = (bucketEl) => {
    if (overEl) overEl.classList.remove('over');
    overEl = bucketEl;
    if (bucketEl) bucketEl.classList.add('over');
  };

  // -- filing ---------------------------------------------------------------------
  const attempt = (item, bIdx) => {
    if (!item || busy || finished || item.filed) return;
    if (item.bucket === bIdx) {
      select(null);
      item.filed = true;
      item.btn.classList.remove('dragging');
      item.btn.classList.add('correct');
      item.btn.disabled = true;
      const tick = document.createElement('span');
      tick.className = 'sortb-tick';
      tick.setAttribute('aria-hidden', 'true');
      tick.textContent = '✓';
      item.btn.appendChild(tick);
      drops[bIdx].appendChild(item.btn);
      done += 1;
      updateCounter();
      if (done === n) {
        finished = true;
        feedback.classList.add('correct');
        feedback.innerHTML = config.why
          ? `<strong>Right.</strong> ${config.why}`
          : `<strong>Right.</strong> All ${n} filed — every item in its bucket.`;
      }
      return;
    }
    busy = true;
    select(null);
    item.btn.classList.add('wrong', 'bounce');
    setTimeout(() => {
      item.btn.classList.remove('wrong', 'bounce'); // back in the tray, ready to retry
      busy = false;
    }, 650);
  };

  // -- pointer drag (touch + mouse) + tap-to-select ---------------------------------
  root.addEventListener('pointerdown', (e) => {
    const btn = e.target.closest('.sortb-item');
    if (!btn || btn.disabled || busy || finished || drag || e.button !== 0) return;
    e.preventDefault();
    const item = items.find((it) => it.btn === btn);
    drag = { item, id: e.pointerId, x0: e.clientX, y0: e.clientY, moved: false };
    try { btn.setPointerCapture(e.pointerId); } catch { /* empty */ }
  });
  root.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.moved) {
      if (Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < 6) return;
      drag.moved = true;
      drag.item.btn.classList.add('dragging');
      ghost = drag.item.btn.cloneNode(true);
      ghost.className = 'sortb-item sortb-ghost';
      ghost.setAttribute('aria-hidden', 'true');
      document.body.appendChild(ghost);
    }
    ghost.style.left = `${e.clientX}px`;
    ghost.style.top = `${e.clientY}px`;
    const hit = document.elementFromPoint(e.clientX, e.clientY)?.closest('.sortb-bucket');
    setOver(hit);
  });
  const settle = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { item, moved } = drag;
    drag = null;
    item.btn.classList.remove('dragging');
    if (ghost) { ghost.remove(); ghost = null; }
    if (moved) { // a real drag: file it on the bucket under the pointer, if any
      const hit = document.elementFromPoint(e.clientX, e.clientY)?.closest('.sortb-bucket');
      setOver(null);
      if (hit) attempt(item, [...bucketsWrap.children].indexOf(hit));
      return;
    }
    if (finished || busy) return; // a tap: select / deselect the item
    select(selected === item ? null : item);
  };
  root.addEventListener('pointerup', settle);
  root.addEventListener('pointercancel', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { item } = drag;
    drag = null;
    item.btn.classList.remove('dragging');
    if (ghost) { ghost.remove(); ghost = null; }
    setOver(null);
  });

  // Click: mouse/touch item selection and drag-drops are already handled by
  // the pointer handlers above (and a click fires on the capture target
  // after a drag — it must not re-toggle). So tray items only react here to
  // keyboard activation (Enter/Space → click with detail 0); bucket clicks
  // file the selected item for both mouse and keyboard.
  root.addEventListener('click', (e) => {
    const itemBtn = e.target.closest('.sortb-item');
    if (itemBtn) {
      if (!itemBtn.disabled && e.detail === 0 && !finished) {
        const item = items.find((it) => it.btn === itemBtn);
        if (item) select(selected === item ? null : item);
      }
      return;
    }
    const bucketEl = e.target.closest('.sortb-bucket');
    if (bucketEl) {
      const bIdx = [...bucketsWrap.children].indexOf(bucketEl);
      if (!selected) { nudge('pick an item first'); return; }
      attempt(selected, bIdx);
    }
  });

  // -- reset -------------------------------------------------------------------------
  resetBtn.addEventListener('click', () => {
    items.forEach((it) => {
      it.filed = false;
      it.btn.disabled = false;
      it.btn.classList.remove('correct', 'wrong', 'selected', 'dragging', 'bounce');
      it.btn.querySelector('.sortb-tick')?.remove();
      tray.appendChild(it.btn);
    });
    select(null);
    done = 0;
    finished = false;
    busy = false;
    updateCounter();
    feedback.classList.remove('correct', 'wrong');
    feedback.textContent = '';
  });
}

function mountAll() {
  document.querySelectorAll('[data-widget="sort-buckets"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
