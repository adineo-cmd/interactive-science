// timeline — scrubable chronology.
// Config (JSON in data-config):
//   unit: 'year' (BCE/CE formatting) or a suffix like 'min', 'Myr'
//   events: [{year, title, text, tag}]
import { formatNum } from './lib/mathexpr.js';

const CHIP_COLORS = ['#1d4ed8', '#0f766e', '#b42318', '#b45309', '#7c3aed', '#d9480f', '#2e7d32', '#0e7490'];

function fmtYear(y, unit) {
  if (unit === 'year') {
    const n = Math.abs(y);
    const label = n >= 10000 ? Math.round(n).toLocaleString('en-US') : formatNum(n, 0);
    return y < 0 ? `${label} BCE` : `${label} CE`;
  }
  return `${formatNum(y, 0)} ${unit}`;
}

export function init(el, config = {}) {
  const cfg = config;
  const unit = cfg.unit || 'year';
  const events = [...(cfg.events || [])].sort((a, b) => a.year - b.year);
  if (!events.length) return;

  const tags = [...new Set(events.map((e) => e.tag).filter(Boolean))];
  const tagColor = Object.fromEntries(tags.map((t, i) => [t, CHIP_COLORS[i % CHIP_COLORS.length]]));
  const active = new Set(tags);

  // scrubber
  const scrub = document.createElement('div');
  scrub.className = 'tl-scrub';
  const scrubLabel = document.createElement('span');
  scrubLabel.className = 'tl-scrub-label';
  const scrubInput = document.createElement('input');
  scrubInput.type = 'range';
  scrubInput.min = events[0].year;
  scrubInput.max = events[events.length - 1].year;
  scrubInput.value = events[events.length - 1].year;
  scrubInput.setAttribute('aria-label', 'Scrub through time');
  scrub.append(scrubInput, scrubLabel);
  el.appendChild(scrub);

  // era chips
  let chips = null;
  if (tags.length > 1) {
    chips = document.createElement('div');
    chips.className = 'tl-chips';
    tags.forEach((t) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'tl-chip on';
      chip.style.setProperty('--chip', tagColor[t]);
      chip.innerHTML = `<i></i>${t}`;
      chip.addEventListener('click', () => {
        if (active.has(t)) active.delete(t); else active.add(t);
        chip.classList.toggle('on', active.has(t));
        render();
      });
      chips.appendChild(chip);
    });
    el.appendChild(chips);
  }

  // spine + events
  const list = document.createElement('ol');
  list.className = 'tl-list';
  const items = events.map((e) => {
    const li = document.createElement('li');
    li.className = 'tl-event';
    const dot = document.createElement('span');
    dot.className = 'tl-dot';
    if (e.tag) dot.style.background = tagColor[e.tag];
    const when = document.createElement('span');
    when.className = 'tl-when';
    when.textContent = fmtYear(e.year, unit);
    if (e.tag) when.style.color = tagColor[e.tag];
    const body = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = e.title;
    body.appendChild(title);
    if (e.text) {
      const p = document.createElement('p');
      p.textContent = e.text;
      body.appendChild(p);
    }
    li.append(dot, when, body);
    list.appendChild(li);
    return { li, year: e.year, tag: e.tag };
  });
  el.appendChild(list);

  function render() {
    const now = parseFloat(scrubInput.value);
    scrubLabel.textContent = fmtYear(now, unit);
    items.forEach(({ li, year, tag }) => {
      const visible = (!tag || active.has(tag)) && year <= now + 1e-9;
      li.classList.toggle('past', visible);
      li.classList.toggle('future', !visible);
    });
  }
  scrubInput.addEventListener('input', render);
  render();
}

function mountAll() {
  document.querySelectorAll('[data-widget="timeline"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
