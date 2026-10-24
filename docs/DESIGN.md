# Interactive Science Platform — Design Spec (2026-10-14)

## 1. Vision

A static, interactive content-reader for every field of school-to-expert science and humanities — Physics, Chemistry, Biology, Mathematics, Earth Science, Astronomy, Economics, History, Geography, Computer Science, Statistics, Environmental Science, and more. No gamification, no accounts, no AI interface in the browser. Content is written once (with AI-assisted drafting + human review) and served as a static site on GitHub Pages via Astro. Each topic page is highly interactive: manipulable graphs, slider-driven labs, equation explainer steps, interactive diagrams, and step-by-step reveals — not a digital textbook.

The site is organised **subject-first**, then **level-laddered** (Foundational → Intermediate → Advanced → Expert). No board-lock-in (CBSE/ICSE/state boards can be added as overlay tags later).

## 2. Constraints (hard, confirmed by user)

- **100% static / free:** Astro static export to GitHub Pages. Zero hosting cost. Zero server-side runtime.
- **No user accounts / no persistent server data:** No auth, no DB, no backend. Optionally `localStorage` for bookmarks / last-read / progress tracking, but nothing required and nothing transmitted.
- **No AI interface in browser:** No "Ask AI" button, no chatbot widget, no LLM calls from the client. All AI work happens in the content-generation pipeline (offline / CI), never in the browser.
- **Astro only:** No React / Svelte / Vue framework islands for interactivity; widgets are pure-JS modules loaded as `<script type="module">` or Astro `client:load` if using Astro's framework component option if needed, but preferred is plain JS to stay true to "astro only".
- **Comprehensive:** Every topic must be present. Nothing omitted.
- **AI-generated / human-reviewed content pipeline:** Content authored via AI prompts + source references, reviewed/approved by user, committed to repo.
- **Static client-side search:** No server query endpoint.
- **Math rendering:** KaTeX (server-rendered at build via remark plugin).
- **No paid APIs in build / deploy:** If AI pipeline uses an external endpoint, the key comes from GitHub Secrets (not committed, never shipped to browser).

## 3. Sub-project decomposition (scope management)

Because "all subjects from school to expertise" is ~50–100× the content of mathsSimplified, the work decomposes into sequential sub-projects, each with its own spec + plan:

1. **Engine v1** (this spec): Widget library, content schema, Astro theme, search, navigation, AI pipeline scaffold. Physically small; validates interactivity model.
2. **Physics proof** (first content sub-project): ~20 chapters / topics across Foundational → Expert. Proves the engine with the highest-interactivity subject (motion, forces, energy, electricity, optics, thermodynamics, quantum basics, relativity).
3. **Chemistry proof:** Inorganic, organic, physical chemistry ladders.
4. **Biology proof:** Cell biology → genetics → ecology → human physiology.
5. **Mathematics proof:** Algebra, calculus, geometry, statistics, number theory ladders.
6. **Earth Science / Astronomy / Humanities / CS / Env. Sci / Economics:** Parallel / sequential after 2–5 are stable.

This spec covers #1 (Engine v1) and defines the contract for #2 (Physics proof).

## 4.1 Database (search only — zero user data, confirmed by user)

The user explicitly requested a database but confirmed the purpose is **only for search index; zero user accounts, zero progress data, zero auth**. To keep the site fully static (GitHub Pages) while providing a real DB for full-text search, the architecture uses a **client-side SQLite database** built at build time (via `sql.js` / `wa-sqlite` WASM), rather than Pagefind static JSON or a server-hosted DB.

- **DB contents:** Only published content index — topic titles, body excerpts, tags, equation text, references. No user input, no PII, no session data.
- **Build:** `scripts/build-search-db.py` reads `.md` sources, creates SQLite `topics`/`content`/`tags` tables, writes `public/search.db` into `dist/`.
- **Query:** Client `search.js` loads `search.db` into browser WASM SQLite, runs full-text `MATCH` queries, renders results. Zero server call.
- **No backend / no secrets:** `search.db` is a static public file; no API endpoint needed; no auth service.
- **If server DB needed later:** Would require Astro SSR endpoint + hosted DB (Supabase/PostgreSQL) — not selected now per user confirmation.

## 4. Architecture

```
Browser (GitHub Pages, static HTML/CSS/JS)
  /subjects/[subject]/        → Subject landing (level ladder)
  /subjects/[subject]/[level]/[topic]/  → Topic page
    Content: .md (build-time compiled by Astro)
    Widgets: /widgets/[name].js (pure JS, loaded per page by frontmatter)
    Math: KaTeX-rendered at build (no client-side LaTeX parsing overhead)
    Search: Pagefind index (built at `astro build`, served as `/pagefind/`)

Build pipeline (local or GitHub Actions)
  src/content/subjects/*.md  → Astro build → dist/
  src/components/widgets/*.js  → bundled / copied to dist/widgets/
  scripts/generate-topic.py → writes new .md + meta.json (AI-assisted draft)
  scripts/validate-content.py → checks schema, math syntax, broken links
  Pagefind build step → generates index

AI Pipeline (offline / CI only; never browser)
  Trigger: manual (user runs script) or GitHub Actions cron (optional)
  Input: prompt + reference source text (NCERT PDF/text, Wikipedia excerpt, OpenStax, MIT OCW)
  API / Model: configurable endpoint (free or paid, via env/API key from GitHub Secrets if used)
  Output: .md file + meta.json (topic title, level, tags, widget list, equation list, references)
  Review gate: human reads .md, approves, commits. No unreviewed AI content published.
```

Why static + CI pipeline: GitHub Pages has no server runtime; everything must be pre-computed. The AI pipeline is the only place where computation happens, and it runs outside the browser.

## 5. Content schema (Markdown + frontmatter)

Every topic file: `src/content/subjects/[subject]/[level]/[topic].md`

```yaml
---
title: "Projectile Motion — Point-to-Point"
level: advanced                  # foundational | intermediate | advanced | expert
tags: [physics, mechanics, kinematics, 2d-motion]
widgets:
  - plotter                   # interactive graph (x vs t, y vs t, trajectory)
  - sliderLab                 # parameter sliders (v0, theta, g, height)
  - equationStep              # step-by-step equation derivation
  - diagramBuilder            # interactive force/velocity vector diagram
equations:
  - "y = v_0 \sin\theta \\; t - \\frac{1}{2}gt^2"
figures:
  - src: /figures/projectile-diagram.svg
    caption: "Coordinate system and initial velocity components"
references:
  - NCERT Class 11 Physics, Chapter 4
  - OpenStax University Physics, Section 3.3
  - MIT OCW 8.01
---

## Content here...
```

- `widgets` is a curated list from the widget registry (not arbitrary JS; prevents arbitrary code execution and keeps content portable).
- `level` drives the ladder navigation and progression paths.
- `tags` feed into search (Pagefind indexes frontmatter + body).
- All content is authored in Markdown (not HTML); Astro renders via `@astrojs/markdown-remark`.
- Figures and interactive assets live in `public/figures/` or are inlined via widget config.

## 6. Widget library (generic, reusable)

Built once, reused for every topic that needs it. All pure JS, no external framework required. Each widget is a module exposing an init function `init(el, config)` where `el` is the DOM container and `config` is the JSON object from the topic's frontmatter.

### Widget types (v1 registry)

| Widget | Purpose | Interaction model | Data source |
|---|---|---|---|
| `plotter` | Function / parametric graph | Drag to pan/zoom; slider to vary param | Canvas/SVG; renders from equation string |
| `sliderLab` | Variable-driven lab simulation | Sliders control parameters; live output updates | Config defines param ranges and output formula |
| `equationStep` | Step-by-step derivation reveal | Click to reveal next step; highlights active term | Markdown list of steps + KaTeX equations |
| `diagramBuilder` | Interactive vector / circuit / force diagram | Drag nodes; toggle visibility; measure angles | SVG with interactive overlay; state in DOM |
| `tableExplorer` | Data table with sorting / filtering | Sort headers; filter by tag; hover for details | JSON data embedded in frontmatter or static file |
| `timeline` | Chronology / event sequence | Scrub slider; click event to expand | Config array of events |
| `3dViewer` (opt) | Molecular / geometric 3D | Rotate / zoom / toggle layers | Three.js or pure CSS 3D if kept simple; load as module |

- Widget implementation: `src/components/widgets/plotter.js`, etc.
- Each widget is loaded only when `widgets` frontmatter lists it, using Astro's `<script>` injection or `client:load` if using a framework component wrapper.
- No arbitrary `eval()`. Equations are parsed by a safe math parser (e.g., `mathjs` if allowed; otherwise pre-computed expressions with string substitution for sliders). Given the static constraint, pre-computation is safest.

### Interactivity constraints (security + static)

- No `eval()` of user input.
- No external CDN loads at runtime (all JS bundled/copied to `dist/` at build).
- Widget state is local to the page; no persistence except optional `localStorage` keys (`lastTopic`, `bookmarks`).
- All interactive data is embedded in the `.md` frontmatter or static JSON; no runtime fetch to APIs.

## 7. Navigation & discovery

### Subject landing (`/subjects/[subject]/`)
- Shows the level ladder: Foundational / Intermediate / Advanced / Expert
- Each level shows topics as cards: title, tags, estimated time, prerequisite list
- Search bar (Pagefind) filters across all subjects
- No user-specific progress reported (since no accounts), but `localStorage` can show a "Read" indicator if implemented

### Topic page (`/subjects/[subject]/[level]/[topic]/`)
- Header: title, level badge, subject breadcrumb (`Physics > Advanced`)
- Content: rendered Markdown with embedded widgets (widgets appear at positions defined by frontmatter, or at explicit markers in content)
- Bottom: "Next topic" / "Previous topic" links (from content schema order, or generated from file tree)
- Pagefind search result links directly to the topic URL; Pagefind highlights matches

### Global search (`/search/` or via dropdown)
- Pagefind builds `pagefind/` index from all `.md` content
- Client-side full-text search over titles, body, tags, equations, references
- Returns URLs, snippet with highlight, and level tag

## 8. Math rendering

- **KaTeX** via `remark-math` / `rehype-katex` in Astro's Markdown processing.
- Equations are rendered to static HTML at build time (fast, no FOUT, no JS dependency for basic render).
- Interactive equations (slider-driven formula updates) are handled by widget `sliderLab` or `plotter` using safe expression substitution, not KaTeX re-rendering.
- All equations in `.md` must pass a syntax validator (`scripts/validate-content.py`) before commit.

## 9. AI content pipeline (offline / CI only)

### Purpose
Generate first-draft `.md` files for topics where content does not yet exist, or improve existing content based on reference sources.

### Input
- `prompt.md`: structured prompt defining topic, level, target audience, style rules
- `sources/`: reference text / PDF text / web excerpts (manually curated, not arbitrary web scrape)
- `template.md`: content template with required sections (Concept, Formula, Step-by-step derivation, Example, Practice, References)

### Process (script `scripts/generate-topic.py` or `.mjs`)
- Reads prompt + sources
- Calls configurable endpoint (`AI_API_URL` + `AI_API_KEY` from env / GitHub Secrets if using external API; or runs local model if available)
- Parses JSON/Markdown output
- Writes to `src/content/subjects/[subject]/[level]/[topic]-draft.md`
- Runs `scripts/validate-content.py`: checks schema (frontmatter fields present), equation syntax, broken links to `public/`, markup validity
- If validation passes, writes final `.md`; if fails, writes to `draft/` for manual fix

### Review gate (hard)
- No unreviewed AI content is committed to `src/content/` or deployed.
- User reads generated `.md`, edits, approves → commits.
- If AI content is updated after initial publish, it must go through the same review gate.

### Secrets handling
- `.env` / `.env.local` for local development (ignored by `.gitignore`)
- GitHub Repository Secrets (`AI_API_URL`, `AI_API_KEY`) used by workflow only
- No secret ever written to `src/content/`, `public/`, or `dist/`
- Build script reads secrets from env; if missing, skips AI generation (falls back to manual authoring)

### Failure modes
- API unavailable / quota exceeded → skip generation, log error, leave existing content unchanged. UI shows "content updated at [date]" with stale flag if build fails.
- Bad output (invalid JSON, wrong format) → retry once with stricter prompt; if still bad, discard and keep manual draft.
- Hallucination detected by validator or user review → fix in `.md`, never publish unreviewed.

## 10. Content authoring flow (for new topics, especially Physics proof)

1. **Plan:** Define topic list for Physics proof (e.g., 20 topics across levels). Write to `plans/physics-proof.md`.
2. **Generate:** For each missing topic, run `scripts/generate-topic.py` → `draft/`.
3. **Review:** User edits `.md`, verifies equations with KaTeX render, checks widget config matches available widgets.
4. **Approve:** Commit `src/content/subjects/physics/...`.
5. **Build:** `astro build` → `dist/`; Pagefind index regenerated.
6. **Deploy:** GitHub Pages deploy from `dist/`.
7. **Validate:** Run `scripts/validate-content.py` on all `.md`; check for orphan links, broken widget refs, missing frontmatter fields.

## 11. Build & deploy workflow

### Local
```bash
npm install
npm run dev       # Astro dev server (fast, hot reload)
npm run build     # static export to dist/
python3 scripts/validate-content.py src/content/
```

### CI (GitHub Actions, optional)
```yaml
# .github/workflows/update.yml
- name: Build and deploy
  run: |
    npm ci
    npm run build
    python3 scripts/generate-topic.py --subject physics --level advanced --count 1  # optional
    python3 scripts/validate-content.py src/content/
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

- Cron can trigger regeneration (optional), but content only updates with user approval (no auto-publish of unreviewed AI output).
- Build artifacts (`dist/`) never contain secrets (script never writes env to output).

## 12. Error handling & failure modes

| Failure | Behavior | Recovery |
|---|---|---|
| Widget JS error (browser) | Widget fails gracefully (shows static fallback image/text); page remains readable | Fix JS, rebuild |
| KaTeX parse error (build) | Build fails with clear error; `.md` must be fixed | Fix equation syntax in source |
| Pagefind index build fails | Search unavailable; site still serves | Fix content schema issue, rebuild |
| AI pipeline fails (API down) | No new content generated; existing content unchanged | Retry manually; no site impact |
| Broken link in content (build-time check) | Build fails or warning; fix required | Update link in `.md` |
| Invalid frontmatter (missing `level` or `widgets`) | Validation fails; file not deployed | Add required fields |

## 13. Testing

- `scripts/validate-content.py`: schema check, equation syntax check (KaTeX parser), widget registry membership check (does `widgets` list exist?), broken link check against `public/` and `/subjects/` paths, duplicate slug detection.
- `tests/test-widget.js`: load each widget module in Node/Puppeteer, verify `init()` runs without error on dummy container.
- Manual: open `/subjects/physics/advanced/projectile-motion/` in browser; test plotter interaction, slider updates, equation reveal, search result link.
- Visual regression: optional Playwright test that screenshots a widget state; not required for v1.

## 14. Scope check (YAGNI)

**In v1 (Engine + Physics proof):**
- Widget library: plotter, sliderLab, equationStep, diagramBuilder (4 widgets)
- Search: Pagefind (client-side full text)
- Navigation: Subject landing + level ladder + topic pages
- Content: Physics only, ~20 topics, all 4 levels
- AI pipeline: scaffold script + one example generation
- No accounts, no server, no billing, no comments, no forums, no live collaboration, no real-time updates, no download/PDF export (can be added via browser print, but not a feature)
- No user analytics (no Google Analytics; can add privacy-respecting tracker later if needed, but not in v1)

**Out of v1:**
- 3D viewer widget (complex; add when needed for chemistry / biology)
- All other subjects (Chemistry, Bio, Math, etc. — pure content work once engine is stable)
- Adaptive difficulty / weak-topic detection (requires persistent state or complex analysis; out for static site)
- Offline mode / PWA (can be added with service worker, but not v1)
- Print/PDF generation
- User-generated content / community notes
- Board-specific overlays (can be done with tag filter, not separate content)
- Video / audio content (out; text + interactive graphics only)

## 15. Design self-review

- [x] No TBDs / placeholders (all sections filled; AI pipeline specified; widget types named)
- [x] Internal consistency: static site + AI pipeline resolved (AI in CI, not browser); Astro-only + interactive widgets resolved (pure JS modules); no user data + progress tracking resolved (optional localStorage only); comprehensive content + subject-first ladder resolved (decomposition into sub-projects)
- [x] Scope focused: one spec = Engine + Physics proof; other subjects are separate sub-project specs
- [x] Ambiguity removed: "astro only" defined as Astro build + pure JS widgets, no framework islands required; "highly interactive" defined as generic widget library; "everything" defined as subject-first decomposition; "no AI interface" defined as no browser AI; "no user data"
- [x] Secrets flow explicit: env / GitHub Secrets for AI endpoint; never in `dist/`; `.gitignore` covers `.env`
- [x] Error handling specified for build-time and runtime
- [x] Testing approach defined (validation script + manual + optional Playwright)

## 16. Next step (implementation transition)

Once user approves this spec, invoke `writing-plans` skill to create detailed implementation plan for Engine v1 + Physics proof.

Plan structure (expected):
1. Scaffold Astro project (theme, pages, layout)
2. Build content schema + first Physics topic (`projectile-motion.md`) with 4 widgets
3. Build widget library v1 (plotter, sliderLab, equationStep, diagramBuilder)
4. Configure KaTeX + Pagefind + search page
5. Write `scripts/generate-topic.py` scaffold + validation script
6. Author Physics proof content (20 topics, reviewed + committed)
7. Build + deploy to GitHub Pages
8. Manual verification + fix loop
