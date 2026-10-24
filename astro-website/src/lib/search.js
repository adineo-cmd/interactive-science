// Client-side search over search.db (SQLite WASM, sql.js).
// DB holds published content index only. Zero user data, zero server calls.
let dbPromise = null;

async function loadDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const SQL = await initSqlJs({
        locateFile: (f) => 'https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/' + f,
      });
      const res = await fetch('/search.db');
      const buf = await res.arrayBuffer();
      return new SQL.Database(new Uint8Array(buf));
    })();
  }
  return dbPromise;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export async function runSearch(query, limit = 10) {
  const q = query.trim();
  if (!q) return [];
  const db = await loadDb();
  const like = '%' + q.replace(/[%_]/g, '') + '%';
  const stmt = db.prepare(
    'SELECT title, slug, level FROM topics WHERE title LIKE ? OR body LIKE ? OR tags LIKE ? LIMIT ?'
  );
  stmt.bind([like, like, like, limit]);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

export function renderResults(container, rows) {
  if (!rows.length) {
    container.innerHTML = '<p>No matches. Try another term.</p>';
    return;
  }
  container.innerHTML = rows
    .map((r) => '<a class="card" href="/' + esc(r.slug) + '/"><h2>' + esc(r.title) + '</h2><p>' + esc(r.level) + '</p></a>')
    .join('');
}
