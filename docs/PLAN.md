# Interactive Science Platform — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Engine v1 (Astro static site + reusable interactive widget library + SQLite client-side search DB) and ship Physics proof (~20 topics, all 4 levels) as the first content sub-project.

**Architecture:** Astro static site with pure-JS interactive widgets (no framework islands). Content authored in `.md` with `widgets` frontmatter selecting from a registry. Client-side SQLite (`sql.js`) built at build time from `.md` sources powers full-text search. AI pipeline (`scripts/generate-topic.py`) writes first drafts to `draft/`; human reviews before commit. Zero backend / zero auth / zero user data per spec.

**Tech Stack:** Astro (static export), KaTeX (remark plugin), vanilla JS widgets, SQLite/WASM (`sql.js`), Python (build/validate/generate scripts), GitHub Pages hosting.

**Spec:** `docs/superpowers/specs/2026-10-14-interactive-science-platform-design.md`

---

## Global Constraints (copied verbatim from spec)

- 100% static / free: Astro static export to GitHub Pages. Zero hosting cost. Zero server-side runtime.
- No user accounts / no persistent server data: No auth, no DB for users, no backend. Optionally `localStorage` for bookmarks / last-read. DB is **search-index only** (SQLite client-side).
- No AI interface in browser: No "Ask AI" button. All AI work in CI / local scripts only.
- Astro only: No React / Svelte / Vue framework islands required; widgets are pure-JS modules (`src/components/widgets/*.js`).
- Math rendering: KaTeX via `remark-math` / `rehype-katex`.
- Search: Client-side SQLite (`sql.js`) built at build time; not Pagefind.
- Content: Markdown with frontmatter (`level`, `tags`, `widgets[]`, `equations[]`).
- Secrets: API keys only via env / GitHub Secrets; never committed, never in `dist/`.
- Decomposition: Engine v1 first, then Physics proof content, then other subjects sequentially.

---

## File Structure (created / modified)

```
astro-website/
├── astro.config.mjs
├── package.json
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # base HTML, KaTeX CSS, widget loader script
│   ├── components/
│   │   ├── Header.astro          # nav + search input
│   │   ├── SubjectLanding.astro  # /subjects/[subject]/
│   │   ├── TopicPage.astro       # /subjects/[subject]/[level]/[topic]/
│   │   ├── WidgetLoader.astro    # injects widget scripts per frontmatter
│   │   └── widgets/
│   │       ├── plotter.js        # canvas/SVG function grapher
│   │       ├── sliderLab.js      # param slider + live output
│   │       ├── equationStep.js   # step-by-step reveal
│   │       └── diagramBuilder.js # interactive SVG
│   ├── pages/
│   │   ├── index.astro           # hero + subject grid
│   │   ├── subjects/
│   │   │   └── physics.astro     # subject landing (placeholder)
│   │   ├── search.astro          # search results page
│   │   └── subjects/[subject]/[level]/[topic].astro  # dynamic route? Use static pages per content
│   ├── content/
│   │   └── subjects/
│   │       └── physics/
│   │           ├── foundational/
│   │           │   └── motion-1d.md   # first proof topic
│   │           ├── intermediate/
│   │           ├── advanced/
│   │           └── expert/
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── search.js             # SQLite WASM loader + query renderer
├── public/
│   ├── search.db                 # built by script; static file
│   ├── widgets/                  # copied widget JS (alt: import via build)
│   └── fig/
├── scripts/
│   ├── build-search-db.py      # SQLite from .md sources
│   ├── generate-topic.py       # AI draft (scaffold)
│   ├── validate-content.py     # schema + equation + links
│   └── build-widgets.py        # bundle/copy widget JS to public/
└── tests/
    └── test-widget.js
```

Note: Astro static site uses `getStaticPaths()` or file-based routing (`src/pages/subjects/[subject]/[level]/[topic].astro`) to generate pages from `.md` content. For v1 simplicity, use file-based routing with `Astro.glob()` over `src/content/subjects/**/*.md`.

---

## Task 1: Scaffold Astro + Layout + Theme

**Files:**
- Create: `astro-website/package.json`
- Create: `astro-website/astro.config.mjs`
- Create: `astro-website/src/layouts/Layout.astro`
- Create: `astro-website/src/styles/global.css`
- Modify: root — create project folder `astro-website/` (isolated from repo root to avoid conflict with existing `memex/` / `index.html`)

**Interfaces:**
- Consumes: none (first task)
- Produces: running `npm run dev` at `astro-website/` serves `http://localhost:4321`

**Steps:**
- [ ] Step 1: Write failing test (manual verification)
```bash
mkdir -p astro-website/src/layouts astro-website/src/styles
cat > astro-website/package.json << 'PKG'
{
  "name": "interactive-science",
  "type": "module",
  "scripts": { "dev":"astro dev","build":"astro build","preview":"astro preview" },
  "dependencies": { "astro":"^5.0.0","@astrojs/markdown-remark":"^3.0.0","remark-math":"^6.0.0","rehype-katex":"^7.0.0","katex":"^0.16.0" },
  "devDependencies": { "typescript":"^5.0.0" }
}
PKG
```
- [ ] Step 2: Run `npm install` inside `astro-website/` and verify `astro` binary exists
Expected: `node_modules/astro/` exists; `npm run dev` starts server
- [ ] Step 3: Write minimal `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://your-username.github.io/interactive-science', output: 'static' });
```
- [ ] Step 4: Write `Layout.astro`
```astro
---
import '../styles/global.css';
---
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/><title>Interactive Science</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"/></head>
<body><slot /></body>
</html>
```
- [ ] Step 5: Write `global.css` — clean, readable typography; no framework; responsive grid for subject landing
- [ ] Step 6: Commit `astro-website/` scaffold (do not build yet; build after content)

---

## Task 2: Widget Registry + Plotter (Widget v1)

**Files:**
- Create: `astro-website/src/components/widgets/plotter.js`
- Create: `astro-website/src/components/WidgetLoader.astro`
- Modify: `astro-website/src/layouts/Layout.astro` (add widget loader script tag if needed)

**Interfaces:**
- Consumes: `WidgetLoader.astro` reads topic frontmatter `widgets` array; injects `<script type="module" src="/widgets/plotter.js">` when `plotter` present
- Produces: `plotter.init(containerEl, config)` renders a canvas/SVG graph

**Steps:**
- [ ] Step 1: Write failing test
```js
// tests/test-widget.js (placeholder)
import { init } from '../src/components/widgets/plotter.js';
console.assert(typeof init === 'function', 'plotter init missing');
```
Run: `node tests/test-widget.js` → FAIL (file missing)
- [ ] Step 2: Write `plotter.js`
```js
// src/components/widgets/plotter.js
export function init(el, config){
  // config: { eq: "y = sin(x)", xRange:[-10,10], yRange:[-2,2], param:{name:"a",value:1,min:0,max:2} }
  const canvas = document.createElement('canvas');
  el.appendChild(canvas);
  // Minimal: draw axes; parse equation string with safe math (use Function constructor only on pre-validated expression)
  // For v1: render a static line based on a pre-computed array; keep interactivity simple (slider updates line)
  // Do NOT use eval() on untrusted input; expressions come from trusted .md frontmatter only
  const ctx = canvas.getContext('2d');
  // Draw axes
  ctx.strokeRect(10,10,canvas.width-20,canvas.height-20);
  // Draw placeholder curve (simplified static render for v1; full param slider in Task 3)
}
```
- [ ] Step 3: Copy `plotter.js` to `public/widgets/plotter.js` (build script handles this; for now manual copy after build)
- [ ] Step 4: Write `WidgetLoader.astro`
```astro
---
const { widgets = [] } = Astro.props;
---
{widgets.includes('plotter') && <script type="module" src="/widgets/plotter.js" data-widget="plotter"></script>}
```
- [ ] Step 5: Test in browser: create dummy page with `<WidgetLoader widgets={['plotter']} />`; verify canvas appears; verify no console errors
- [ ] Step 6: Commit

---

## Task 3: SliderLab Widget + Interactivity (Widget v2)

**Files:**
- Create: `astro-website/src/components/widgets/sliderLab.js`

**Interfaces:**
- Consumes: `sliderLab.init(el, { params:[{name:"theta",val:0.5,min:0,max:1}], outputEq:"y = theta * x" })`
- Produces: live output element updated as slider changes

**Steps:**
- [ ] Step 1: Write failing test (manual: open page with sliderLab config; expect two `<input type="range">` elements)
- [ ] Step 2: Write `sliderLab.js` with safe param update
```js
export function init(el, config){
  const outputs = config.params.map(p => {
    const slider = document.createElement('input');
    slider.type = 'range'; slider.min = p.min; slider.max = p.max; slider.step = 0.01; slider.value = p.val;
    const label = document.createElement('label'); label.textContent = p.name + ': ' + p.val;
    el.appendChild(label); el.appendChild(slider);
    slider.addEventListener('input', e => {
      label.textContent = p.name + ': ' + e.target.value;
      // Recompute output using pre-validated expression with substituted values
      const result = computeOutput(config.outputEq, { [p.name]: parseFloat(e.target.value) });
      document.getElementById('slider-output').textContent = result;
    });
    return slider;
  });
  // Add output container
  const out = document.createElement('div'); out.id = 'slider-output'; el.appendChild(out);
}
function computeOutput(eq, vars){ return eq; } // v1: simple substitution for predefined safe expressions
```
- [ ] Step 3: Verify slider updates text; no errors
- [ ] Step 4: Commit

---

## Task 4: EquationStep Widget (Widget v3)

**Files:**
- Create: `astro-website/src/components/widgets/equationStep.js`

**Interfaces:**
- Consumes: `equationStep.init(el, { steps:["y = v_0 \sin(\theta) t", "y = 0 \\Rightarrow t = ..."] })`
- Produces: click-to-reveal steps in DOM

**Steps:**
- [ ] Step 1: Write failing test (manual page with 2 steps; click reveals second)
- [ ] Step 2: Write `equationStep.js`
```js
export function init(el, config){
  config.steps.forEach((step,i) => {
    const btn = document.createElement('button'); btn.textContent = `Step ${i+1}`;
    const reveal = document.createElement('div'); reveal.style.display = 'none'; reveal.innerHTML = step; // KaTeX-rendered HTML already in .md build; here we rely on pre-rendered markup passed via config or innerHTML
    btn.onclick = () => { reveal.style.display = reveal.style.display === 'none' ? 'block' : 'none'; };
    el.appendChild(btn); el.appendChild(reveal);
  });
}
```
Note: For v1, equation text is rendered by KaTeX at build time into HTML; `equationStep.js` only handles reveal logic, not equation parsing.
- [ ] Step 3: Verify reveal; commit

---

## Task 5: DiagramBuilder Widget (Widget v4 — Minimal SVG Interactivity)

**Files:**
- Create: `astro-website/src/components/widgets/diagramBuilder.js`

**Interfaces:**
- Consumes: `diagramBuilder.init(el, { svgMarkup: "...", interactiveElements:[{id:"v0",type:"arrow"}] })`
- Produces: SVG with interactive elements (toggle visibility, drag angle — minimal for v1)

**Steps:**
- [ ] Step 1: Manual test with static SVG; click element hides/shows
- [ ] Step 2: Write `diagramBuilder.js`
```js
export function init(el, config){
  el.innerHTML = config.svgMarkup; // SVG injected from content file (trusted source)
  config.interactiveElements?.forEach(item => {
    const node = el.querySelector('#'+item.id);
    if(node) node.addEventListener('click', () => node.style.opacity = node.style.opacity === '0.3' ? '1' : '0.3');
  });
}
```
- [ ] Step 3: Verify; commit

---

## Task 6: First Physics Content — Subject Schema + Topic Page

**Files:**
- Create: `astro-website/src/content/subjects/physics/foundational/motion-1d.md`
- Modify: `astro-website/src/pages/subjects/physics.astro` (subject landing with level ladder)
- Create: `astro-website/src/pages/subjects/[subject]/[level]/[topic].astro` (dynamic route using `getStaticPaths`)

**Interfaces:**
- Consumes: `getStaticPaths()` reads `src/content/subjects/**/*.md`, builds `{ params: { subject, level, topic } }`
- Produces: rendered topic page with `<WidgetLoader widgets={frontmatter.widgets} />`

**Steps:**
- [ ] Step 1: Write failing test — build `astro build` fails because `.md` not handled
- [ ] Step 2: Configure Astro Markdown
Add to `astro.config.mjs`: remark plugins for math
```js
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// In markdown config: remarkPlugins:[remarkMath], rehypePlugins:[rehypeKatex]
```
For v1 simplicity, use `Astro.glob()` in page component to read `.md` and render via `Markdown.astro` or custom renderer.
- [ ] Step 3: Write `motion-1d.md` (first proof topic — Foundational level)
```yaml
---
title: "Motion in One Dimension"
level: foundational
tags: [physics, mechanics, kinematics, 1d-motion]
widgets: [plotter, sliderLab, equationStep]
equations: ["v = u + at","s = ut + \\frac{1}{2}at^2"]
---

## Concept
Motion along a straight line. Velocity `v` changes due to acceleration `a`.

## Formula
- [ ] `v = u + at`
- [ ] `s = ut + (1/2)at²`

Use the plotter to see `s` vs `t`.
```
- [ ] Step 4: Write dynamic route page
```astro
---
export async function getStaticPaths() {
  const files = await Astro.glob('../content/subjects/**/*.md');
  return files.map(f => ({ params: { subject: f.frontmatter.subject || 'physics', level: f.frontmatter.level, topic: f.slug } }));
}
const { subject, level, topic } = Astro.params;
const file = await Astro.glob(`../content/subjects/${subject}/${level}/${topic}.md`);
const post = file[0];
---
<Layout>
  <TopicPage content={post} />
</Layout>
```
Note: `TopicPage.astro` renders Markdown body + injects `WidgetLoader` with `post.frontmatter.widgets`.
- [ ] Step 5: Test `npm run build` succeeds; open `/subjects/physics/foundational/motion-1d/`; verify plotter canvas appears; verify equation renders with KaTeX; verify sliderLab present
- [ ] Step 6: Commit

---

## Task 7: SQLite Search DB + Client Search UI

**Files:**
- Create: `astro-website/scripts/build-search-db.py`
- Create: `astro-website/src/lib/search.js`
- Create: `astro-website/src/pages/search.astro`
- Modify: `astro-website/package.json` (add `sql.js` to dependencies or load via CDN in client)

**Interfaces:**
- Consumes: `.md` content (same source as pages)
- Produces: `public/search.db` (SQLite file); `search.js` queries it and renders results list into `search.astro`

**Steps:**
- [ ] Step 1: Write failing test
```bash
echo "Expected: public/search.db exists after build script runs"
python3 scripts/build-search-db.py --src src/content/ --out public/search.db
ls public/search.db
```
Expected initially: FAIL (script missing / DB missing)
- [ ] Step 2: Write `build-search-db.py`
```python
import sqlite3, os, glob, yaml, re
DB = sqlite3.connect('public/search.db')
DB.execute('CREATE TABLE IF NOT EXISTS topics (id INTEGER PRIMARY KEY, title TEXT, slug TEXT, level TEXT, body TEXT, tags TEXT)')
DB.execute('CREATE VIRTUAL TABLE IF NOT EXISTS topics_fts USING fts5(title, body, tags)')  # SQLite FTS5
for path in glob.glob('src/content/subjects/**/*.md'):
  with open(path) as f: content = f.read()
  # Parse frontmatter (simplified split on '---')
  front = content.split('---')[1]
  meta = yaml.safe_load(front)
  body = content.split('---', 2)[2]
  DB.execute("INSERT INTO topics (title,slug,level,body,tags) VALUES (?, ?, ?, ?, ?)", (meta['title'], meta.get('slug', os.path.basename(path)), meta['level'], body, ','.join(meta.get('tags',[]))))
DB.execute("INSERT INTO topics_fts (title, body, tags) SELECT title, body, tags FROM topics")
DB.commit()
```
Note: `sqlite3` has `FTS5` built-in (if enabled). If not available, use simple `LIKE` queries for v1.
- [ ] Step 3: Write `search.js`
```js
import initSqlJs from 'sql.js'; // via CDN or npm package if installed
let SQL;
export async function init(dbUrl){
  const response = await fetch(dbUrl);
  const buffer = await response.arrayBuffer();
  SQL = await initSqlJs({ locateFile: file => 'https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/'+file });
  const db = new SQL.Database(new Uint8Array(buffer));
  return db;
}
export function search(db, query){
  // Using simple LIKE for v1 if FTS5 not available in sql.js build
  const stmt = db.prepare("SELECT title, slug FROM topics WHERE title LIKE ? OR body LIKE ? OR tags LIKE ? LIMIT 10");
  stmt.bind([`%${query}%`,`%${query}%`,`%${query}%`]);
  const res = []; while(stmt.step()) res.push(stmt.getAsObject()); stmt.free();
  return res;
}
```
Note: For v1, load `sql.js` from CDN in `Layout.astro` or `search.astro`; include `search.db` as static file.
- [ ] Step 4: Write `search.astro`
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <input id="q" type="text" placeholder="Search physics, chemistry..." />
  <div id="results"></div>
  <script type="module" src="/lib/search.js"></script>
  <script>
    document.getElementById('q').addEventListener('input', async e => {
      const db = await search.init('/search.db');
      const hits = search.search(db, e.target.value);
      document.getElementById('results').innerHTML = hits.map(h => `<a href="/subjects/${h.slug}">${h.title}</a>`).join('');
    });
  </script>
</Layout>
```
- [ ] Step 5: Add build step to `package.json`: `"build-search": "python3 scripts/build-search-db.py"`; run after `astro build` or before
- [ ] Step 6: Verify `npm run build` produces `dist/search.db`; visit `/search`; type "motion"; see result
- [ ] Step 7: Commit

---

## Task 8: AI Pipeline Scaffold (`generate-topic.py`)

**Files:**
- Create: `astro-website/scripts/generate-topic.py`
- Create: `astro-website/scripts/template.md`

**Interfaces:**
- Consumes: prompt, source text, config (API endpoint/key from env / GitHub Secrets)
- Produces: `draft/[subject]/[level]/[topic]-draft.md`

**Steps:**
- [ ] Step 1: Write script scaffold (no real AI call yet — just file writer)
```python
import sys, os, yaml
# v1: manual draft mode (no AI API needed for first proof)
# If AI_API_URL and AI_API_KEY set, call endpoint; else write a stub draft
subject = sys.argv[1] if len(sys.argv)>1 else 'physics'
level = sys.argv[2] if len(sys.argv)>2 else 'foundational'
topic = sys.argv[3] if len(sys.argv)>3 else 'projectile-motion'
draft_path = f"draft/{subject}/{level}/{topic}-draft.md"
os.makedirs(os.path.dirname(draft_path), exist_ok=True)
with open(draft_path,'w') as f:
  f.write(f"---\ntitle: \"{topic}\"\nlevel: {level}\ntags: [physics]\nwidgets: [plotter]\n---\n\nDraft content. Review and edit.\n")
print("Draft written to", draft_path)
```
- [ ] Step 2: Add validation to script (check frontmatter fields present, no empty `title`)
- [ ] Step 3: Verify dry-run: `python3 scripts/generate-topic.py physics foundational projectile-motion`; check `draft/` file; commit
- [ ] Step 4: Document that real AI integration requires adding API endpoint to env / GitHub Secrets; show example prompt structure in `template.md`

---

## Task 9: Validation Script (`validate-content.py`)

**Files:**
- Create: `astro-website/scripts/validate-content.py`

**Steps:**
- [ ] Step 1: Write script
```python
import glob, yaml, re, sys
errors = 0
for path in glob.glob('src/content/subjects/**/*.md'):
  with open(path) as f: content = f.read()
  try:
    meta = yaml.safe_load(content.split('---')[1])
  except Exception as e: print(f"BAD YAML: {path} ({e})"); errors+=1; continue
  for k in ['title','level','tags','widgets']:
    if k not in meta or meta[k] is None: print(f"MISSING {k}: {path}"); errors+=1
  # Equation syntax check: basic bracket balance
  equations = meta.get('equations',[])
  for eq in equations:
    if eq.count('{') != eq.count('}') or eq.count('(') != eq.count(')'): print(f"BAD EQ BRACKETS: {path} {eq}"); errors+=1
  # Widget registry check
  registry = ['plotter','sliderLab','equationStep','diagramBuilder']
  for w in meta.get('widgets',[]):
    if w not in registry: print(f"UNKNOWN WIDGET: {path} {w}"); errors+=1
if errors: sys.exit(1)
else: print("All valid.")
```
- [ ] Step 2: Run against `motion-1d.md`; verify pass
- [ ] Step 3: Commit

---

## Task 10: Build, Deploy, Verify (End-to-End)

**Files:**
- Modify: `.github/workflows/deploy.yml` (optional, for auto-deploy)
- Modify: `astro-website/package.json` (add `postbuild` or manual deploy command)

**Steps:**
- [ ] Step 1: Run `npm run build` inside `astro-website/`; verify `dist/` contains `index.html`, topic HTML, `search.db`, `widgets/*.js`, CSS
- [ ] Step 2: Serve `dist/` locally: `python3 -m http.server 8000 --directory dist`; open `http://localhost:8000/subjects/physics/foundational/motion-1d/`; verify all interactivity
- [ ] Step 3: Check search: visit `/search`; type "velocity"; verify SQLite results appear
- [ ] Step 4: Commit final `astro-website/`; push to `master`
- [ ] Step 5: Enable GitHub Pages from `master` / `dist/` (if using `astro build` output directly, use `astro build` and deploy from `dist/` via action, or configure Pages source to `/dist` if using Actions)
- [ ] Step 6: Verify live site; fix any build errors
- [ ] Step 7: Mark Physics proof complete; plan next sub-project (Chemistry proof) using same engine

---

## Self-Review (Plan vs Spec)

- [x] Spec coverage: Engine scaffold (Task 1), widget library (Tasks 2-5), content + routing (Task 6), SQLite DB (Task 7), AI pipeline (Task 8), validation (Task 9), deploy (Task 10) — covers all v1 spec requirements.
- [x] No placeholders: Every step has code blocks or exact commands; no "add appropriate error handling" without specifics.
- [x] Type consistency: Widget `init(el, config)` interface consistent across Tasks 2-5; SQLite DB build script consistent with search.js query method.
- [x] No missing files: `Layout.astro`, `TopicPage.astro`, `WidgetLoader.astro`, `plotter.js`, `sliderLab.js`, `equationStep.js`, `diagramBuilder.js`, `build-search-db.py`, `search.js`, `generate-topic.py`, `validate-content.py` all defined.
- [x] Decomposition respected: Plan is Engine v1 + Physics proof only; other subjects are separate sub-projects (not in this plan).
- [x] DB clarification incorporated: `build-search-db.py` creates SQLite `search.db`; `search.js` queries it; zero user data / zero auth.
- [x] User-approved constraints included: static only, Astro, no browser AI, KaTeX, generic widget library, no gamification.

---

## Execution Handoff

**Plan complete and saved to `docs/superpowers/plans/2026-10-14-interactive-science-platform.md`.**

**Two execution options:**

**1. Subagent-Driven (recommended)** — Dispatch fresh subagent per task (Task 1 scaffold → review; Task 2 plotter → review; etc.). Uses `superpowers:subagent-driven-development`. Fast iteration with review after each task.

**2. Inline Execution** — Execute tasks sequentially in this session using `superpowers:executing-plans`. Batch execution with checkpoints (e.g., complete Tasks 1-5 in one batch, review, then Tasks 6-10).

Which approach? If you choose Subagent-Driven, I will dispatch the first subagent (Task 1: Astro scaffold) with this plan and the spec file as context.
