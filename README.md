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

### Syllabus-structured learning programs

**Every subject in the atlas — 89 of them, grouped into 11 domains — is structured around an
official published syllabus or an authoritative published curriculum.** Sources include
Cambridge IGCSE/A-Level syllabus PDFs where the subject has one (Biology 0610, Chemistry 0620,
Physics 0625, Mathematics 0580, Geography 0460, History 0470, Economics 0455, Business 0450,
Computer Science 0478, Accounting 0452, Agriculture 0600, Marine Science 9693, Sociology 0495,
Literature 0475, Music 0410, Art & Design 0400, Religious Studies 0490, Environmental
Management 0680, Design & Technology 0445, Drama 0411, Travel & Tourism 0471, ICT 0417,
PE 0413…), exam-board and professional specs (Edexcel Astronomy 1AS0 and Politics 9PL0, AQA
Law 7162 / Philosophy 7172 / GCSE Dance 8236, OCR Classical Civilisation H408, Eduqas Film &
Media Studies, WJEC Criminology, AP Art History, CEFR, IB Anthropology, NCLEX-RN, NAPLEX,
INBDE, NAVLE, SOA Exam P/FM, NCEES FE specifications, SWEBOK v4, NICE Framework, ABET
criteria, FAA ACS, ASCM CSCP, NCTJ, NASPAA, CACREP, CSWE EPAS, ACEND, CEPH, PAB, FEPAC, IFT,
SAF), and openly published curricula (MIT OpenCourseWare, OpenStax, Berkeley Data 8,
Neuroscience Online, Modern Robotics, Renfrew & Bahn).

Each source is parsed into a structured file in `astro-website/src/data/syllabus/*.json` —
one entry per syllabus unit: unit number, title, the syllabus's own topic list, and the atlas
lessons covering it in teaching order (live slugs reference `topics.json`; units without a
written lesson reference planned rows, so the full expert path is always visible). Subjects
carry a `domain` field (`src/data/domains.json` maps ids to labels) that groups the subjects
menu, the homepage index and `/programs/`.

- `/programs/` — index of all 89 syllabus-backed programs, grouped by domain
- `/subjects/<id>/#program` — unit-by-unit program on each subject page
- `scripts/universal-spec-*.json` — compact master spec for the 40 universal-coverage
  fields (source + units per field), expanded by the same pattern the earlier apply scripts
  (`apply-syllabus-topics.py`, `apply-all-syllabus-topics.py`, `promote-starter-lessons.py`)
  used for the first waves
- `validate-content.py` also checks syllabus files: every lesson slug must exist in
  `topics.json` and belong to the same subject

Fields from standard academic taxonomies that were absent were added as new subjects with
syllabus-backed programs — including Accounting, Drama, Travel & Tourism, ICT, Media Studies,
Criminology, Public Health, Education, Marketing, International Relations, Biochemistry,
Microbiology, Zoology, Botany, Marine Science, Meteorology, Forensic Science, Food Science,
Forestry, Nutrition & Dietetics, Chemical/Civil/Mechanical/Electrical/Aerospace/Biomedical
Engineering, Software Engineering, Cybersecurity, Robotics, Game Development, Actuarial
Science, Nursing, Pharmacy, Dentistry, Veterinary Medicine, Social Work, Counselling, Urban
Planning, Archaeology, Cognitive Science, Classics, Creative Writing, Dance, Animation,
Aviation, Culinary Arts, Library Science, Public Administration, Logistics & Supply Chain and
Gender Studies.

The downloaded source PDFs stay local (`syllabus/` is gitignored); official URLs are recorded
in each program's `source` block.

To add a subject: drop the official syllabus PDF in `syllabus/`, write the parsed
`src/data/syllabus/<subject>.json`, map or plan its lessons, validate, build.

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
