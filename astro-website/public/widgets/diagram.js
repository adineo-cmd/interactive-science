// diagram — a labelled node map you can poke at. Nodes are laid out from
// explicit coordinates so each lesson can draw its own shape (cell, cycle,
// causal chain) instead of a generic auto-graph.
//
// Config (JSON in data-config):
//   height: number (default 320)
//   nodes: [{ id, label, sub?, num?, x, y, w?, h?, center?, shape?: 'rect'|'circle' }]
//   edges: [{ from, to, dashed? }]
//   details: { [id]: { title, text, href?, hrefLabel? } }
//   detailHint: string shown before anything is selected
//
// Coordinates are in the widget's own 720 x height space.

const NS = 'http://www.w3.org/2000/svg';

export function init(el, config = {}) {
  const cfg = config;
  const nodes = cfg.nodes || [];
  const edges = cfg.edges || [];
  const details = cfg.details || {};
  if (!nodes.length) return;

  const W = 720;
  const H = cfg.height || 320;

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'diagram-svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', cfg.ariaLabel || 'Labelled diagram');

  const add = (tag, attrs, parent = svg) => {
    const node = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) node.setAttribute(k, String(v));
    parent.appendChild(node);
    return node;
  };

  const box = (n) => {
    const w = n.w || 132;
    const h = n.h || 54;
    return { x: n.x, y: n.y, w, h, cx: n.x + w / 2, cy: n.y + h / 2 };
  };
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  // edges first so nodes paint over them
  const edgeEls = new Map();
  for (const e of edges) {
    const a = byId[e.from];
    const b = byId[e.to];
    if (!a || !b) continue;
    const ba = box(a);
    const bb = box(b);
    const line = add('line', {
      class: 'd-edge',
      x1: ba.cx,
      y1: ba.cy,
      x2: bb.cx,
      y2: bb.cy,
      'stroke-dasharray': e.dashed ? '5 4' : undefined,
    });
    edgeEls.set(`${e.from}->${e.to}`, line);
  }

  const nodeEls = new Map();
  for (const n of nodes) {
    const b = box(n);
    const g = add('g', {
      class: `d-node${n.center ? ' center' : ''}`,
      tabindex: '0',
      role: 'button',
      'aria-label': n.label,
      'data-id': n.id,
    });
    if (n.shape === 'circle') {
      add('circle', { cx: b.cx, cy: b.cy, r: Math.min(b.w, b.h) / 2 }, g);
    } else {
      add('rect', { x: b.x, y: b.y, width: b.w, height: b.h, rx: 10 }, g);
    }
    const label = add('text', { x: b.cx, y: b.cy + (n.sub ? -2 : 4), 'text-anchor': 'middle' }, g);
    label.textContent = n.label;
    if (n.sub) {
      add('text', { class: 'd-sub', x: b.cx, y: b.cy + 12, 'text-anchor': 'middle' }, g).textContent = n.sub;
    }
    if (n.num) {
      add('text', { class: 'd-num', x: b.x + 8, y: b.y + 14 }, g).textContent = n.num;
    }
    nodeEls.set(n.id, g);
  }

  // detail panel
  const panel = document.createElement('div');
  panel.className = 'diagram-detail';
  const hint = cfg.detailHint || 'Choose a part of the diagram to read what it does.';
  panel.innerHTML = `<span>${hint}</span>`;

  const clear = () => {
    nodeEls.forEach((g) => g.classList.remove('active'));
    edgeEls.forEach((l) => l.classList.remove('active'));
  };

  const select = (id) => {
    const n = byId[id];
    if (!n) return;
    clear();
    nodeEls.get(id)?.classList.add('active');
    for (const e of edges) {
      if (e.from === id) edgeEls.get(`${e.from}->${e.to}`)?.classList.add('active');
      if (e.to === id) edgeEls.get(`${e.from}->${e.to}`)?.classList.add('active');
    }
    const info = details[id];
    const title = info?.title || n.label;
    const text = info?.text || n.sub || '';
    const link = info?.href
      ? ` <a href="${info.href}">${info.hrefLabel || 'read more'} →</a>`
      : '';
    panel.innerHTML = `<strong>${title}</strong><span>${text}${link}</span>`;
  };

  nodeEls.forEach((g, id) => {
    g.addEventListener('click', () => select(id));
    g.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        select(id);
      }
    });
  });

  const wrap = document.createElement('div');
  wrap.className = 'diagram-wrap';
  wrap.appendChild(svg);
  el.appendChild(wrap);
  el.appendChild(panel);

  if (cfg.key) {
    const key = document.createElement('p');
    key.className = 'diagram-key';
    key.textContent = cfg.key;
    el.appendChild(key);
  }
}

function mountAll() {
  document.querySelectorAll('[data-widget="diagram"]').forEach((el) => {
    if (el.dataset.mounted) return;
    el.dataset.mounted = '1';
    let cfg = {};
    try { cfg = JSON.parse(el.dataset.config || '{}'); } catch { /* empty */ }
    init(el, cfg);
  });
}
if (typeof document !== 'undefined') mountAll();
