// Client-side search over search.db (SQLite WASM, sql.js).
// DB holds the published content index only. Zero user data, zero server calls.
// sql.js is loaded via its CDN script tag on the search page (exposes initSqlJs).
const BASE = (document.documentElement.dataset.base || '').replace(/\/+$/, '');

const INKS = {
  physics: '#1d4ed8',
  chemistry: '#d9480f',
  biology: '#2e7d32',
  math: '#7c3aed',
  history: '#b42318',
  geography: '#0f766e',
  economics: '#b45309',
  'computer-science': '#0e7490',
  astronomy: '#4338ca',
};

let dbPromise = null;

async function loadDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const SQL = await initSqlJs({
        locateFile: (f) => 'https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/' + f,
      });
      const res = await fetch(BASE + '/search.db');
      const buf = await res.arrayBuffer();
      return new SQL.Database(new Uint8Array(buf));
    })();
  }
  return dbPromise;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export async function runSearch(query, limit = 12) {
  const q = query.trim();
  if (!q) return [];
  const db = await loadDb();
  const like = '%' + q.replace(/[%_]/g, '') + '%';
  const stmt = db.prepare(
    'SELECT title, slug, level, subject, body FROM topics WHERE title LIKE ? OR body LIKE ? OR tags LIKE ? LIMIT ?'
  );
  stmt.bind([like, like, like, limit]);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

export async function runSearchAndRender(query, container) {
  const rows = await runSearch(query);
  if (!query.trim()) { container.innerHTML = ''; return; }
  if (!rows.length) {
    container.innerHTML = '<p style="color:var(--ink-2); padding:1rem .7rem">No matches. Try a broader term — "motion", "energy", "climate".</p>';
    return;
  }
  container.innerHTML = rows
    .map((r) =>
      '<a class="index-row" style="--row-ink:' + (INKS[r.subject] || '#1f6f54') + '" href="' + BASE + '/' + esc(r.slug) + '/">' +
        '<span class="glyph"><span class="dot" style="--dot:' + (INKS[r.subject] || '#1f6f54') + '"></span></span>' +
        '<span><span class="index-name">' + esc(r.title) + '</span>' +
        '<span class="index-tag" style="display:block">' + esc(r.body.slice(0, 110)) + '…</span></span>' +
        '<span class="index-meta">' + esc(r.subject) + ' · ' + esc(r.level) + '</span>' +
      '</a>'
    )
    .join('');
}
