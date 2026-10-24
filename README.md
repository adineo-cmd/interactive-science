# Interactive Atlas

An interactive, manipulable learning atlas — **physics, chemistry, biology, mathematics,
history, geography, economics, computer science and astronomy**. Every lesson is built from
reusable instruments (plots, slider labs, timelines, derivations, vector diagrams) instead of
static text. No accounts, no tracking, no backend — the whole site is static.

> Started as *interactive-science*; the frontend now covers the full multi-subject vision.
> The repo name is unchanged — the site brand lives in one place (`Layout.astro`).

## Stack

- [Astro](https://astro.build) 5, fully static, deployed to GitHub Pages
  (`https://adineo-cmd.github.io/interactive-science/`)
- Pure-JS widget modules in `astro-website/public/widgets/` — no framework islands
- Client-side SQLite search (`sql.js` WASM over a build-time-generated `search.db`)
- Type: Spectral + IBM Plex Sans/Mono. Theme: field-notebook (paper, hairlines, subject inks)

## Develop

```bash
cd astro-website
npm install
npm run build-search   # rebuilds public/search.db from src/data/topics.json
npm run dev            # http://localhost:4321/interactive-science/
npm run build          # static export to dist/
python3 scripts/validate-content.py
```

## Adding a lesson

1. Add the topic to `astro-website/src/data/topics.json` (subjects list + topics array).
   This one file drives navigation, subject pages, the homepage counts and the search index.
2. Create the page at `astro-website/src/pages/<slug>.astro` (copy an existing topic page and
   edit the content + widget configs).
3. Add subject ink/icon in `topics.json` if it's a new subject (glyph goes in
   `src/components/SubjectIcon.astro`).
4. Run `npm run build-search && python3 scripts/validate-content.py`, then open a PR.

### Live vs planned topics

`topics.json` carries the **complete curriculum map**: every subject lists topics for all four
levels (foundational → intermediate → advanced → expert). Entries with `"status": "planned"`
have no page yet — subject pages render them as muted "planned" rows so learners can see the
full expert path. Entries without a status are live lessons (page required).

### Bulk drafting

`scripts/generate-topic.py` drafts skeleton/lesson text for planned topics into `drafts/`
(never deployed — the human review gate from `docs/DESIGN.md`):

```bash
python3 scripts/generate-topic.py --subject math            # all planned maths topics
python3 scripts/generate-topic.py --title "Integration"     # one topic
AI_API_URL=... AI_API_KEY=... python3 scripts/generate-topic.py --subject physics
```

Review, edit, move to `src/pages/`, flip the status, validate, build.

## Widget registry

| Instrument | File | Config |
|---|---|---|
| Plotter | `public/widgets/plotter.js` | expression curves, data points, params, zoom/pan, crossing markers |
| Slider lab | `public/widgets/sliderLab.js` | params + live readouts, canvas presets: `projectile`, `bohr`, `seasons`, `orbit` |
| Timeline | `public/widgets/timeline.js` | scrubable events, BCE/CE or custom units, era filter chips |
| Derivation | `public/widgets/equationStep.js` | step-by-step reveal |
| Vector diagram | `public/widgets/diagramBuilder.js` | draggable vector with components |

Widgets mount on `<div data-widget="plotter" data-config='{"…": …}'></div>`; all configs are
plain JSON evaluated by a small safe expression parser (`widgets/lib/mathexpr.js`, no `eval`).

## Deploy

Push to `main` (paths under `astro-website/`) → `.github/workflows/deploy-science.yml` builds
the search DB, validates content, builds Astro and publishes to GitHub Pages.

## Privacy

Static HTML/CSS/JS only. The search index is a read-only SQLite file the browser queries
locally; nothing is transmitted. No cookies, no analytics, no AI in the browser.
