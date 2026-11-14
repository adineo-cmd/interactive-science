# ROADMAP.md — future plan for Interactive Atlas

Standing priorities, newest first. The register campaign is COMPLETE (577/577 lessons Good
across all four tiers, Nov 2026) — tracked in `AGENT-TASKS.md` and `CONTINUE.md`; this file
is the *what next*.

---

## P1 — Per-paragraph interactivity: the site becomes an activity, not a book

**Goal:** every substantive paragraph is paired with an interactive activity (Brilliant-style
learn → do → feedback loop). The page should *feel* like using instruments with short text
between them, not reading a textbook with occasional figures.

### The interaction library (user decision 2026-11-08: build ALL of it — plus further
innovative types; never repeat the same widget paragraph after paragraph)

**Answer family** — cheapest, works on every subject:
| Widget | Interaction | Best for |
|---|---|---|
| `predict` | guess first, then reveal the answer + why | claims, comparisons |
| `cloze` | fill the missing word/number in a key sentence | definitions, key facts |
| `judge` | rapid true/false with a one-line why | misconception-busting |

**Sequence family** — processes, history, systems:
| Widget | Interaction | Best for |
|---|---|---|
| `order` | drag steps/events into the correct sequence | procedures, causal chains |
| `match` | pair term↔meaning, cause↔effect | vocabulary, structures |

**Scale family** — quantities, geography, science:
| Widget | Interaction | Best for |
|---|---|---|
| `place` | drop a marker on the right spot of a scale/line | pH, magnitudes, eras |
| `estimate` | guess the magnitude, then reveal (Fermi-style) | big numbers, distances |

**Visual family** — flashiest, most JS effort:
| Widget | Interaction | Best for |
|---|---|---|
| `compare` | drag a before/after divider across two states | change over time, then-vs-now |
| `hotspot` | click the right region of a diagram | anatomy, maps, diagrams |
| `trace` | pick which curve/graph matches a scenario | graph literacy |
| `sort-buckets` | classify items into 2–3 categories | taxonomy, living/non-living |
| `spot-error` | find the deliberate mistake in a worked solution | correctness, debugging |
| `branch` | mini decision tree with consequences (case-based) | medicine, law, business |

Existing types (`plotter`, `sliderLab`, `equationStep`, `timeline`, `diagramBuilder`,
`chart`, `quiz`) stay in rotation for quantitative paragraphs and lesson-end checks.

### Anti-repetition rules (baked into the generator)

1. Adjacent paragraphs never get the same interaction type.
2. Every lesson uses **≥4 distinct types** (plus its existing figure widgets).
3. The mix shifts by subject flavour: history leans order/predict/compare; chemistry leans
   place/cloze/predict; literature leans match/spot-error/branch; math leans estimate/cloze/trace.
4. Lesson-end "Check yourself" stays a quiz; per-paragraph activities never duplicate its questions.
5. Rule of thumb: **every substantive paragraph gets an activity** (≈6–8 per lesson).
   Transitions and scope notes stay prose-only — no gimmick filler.

### Production

> **Rollout is live — the operating handoff is `pipeline/ACTIVITIES-LEDGER.md`** (user
> directives, per-wave workflow, done/queue ledger). Read it before adding activities.
> User quality bar (2026-11-08): innovative interactions, **never default to follow-up
> questions** — pick the type from the paragraph (construct, locate, classify, pair,
> detect-the-error, estimate, decide, explore); ≥6 distinct types per lesson; no adjacent
> repeats; everything grounded in the lesson's own facts.

1. **Pilot: DONE** — Answer + Sequence families built, plus Scale + Visual families
   (all 12 types), hand-converted `energy-conservation` (9 activities) and
   `philosophy-of-mind` (7).
2. **Bulk pipeline: LIVE** — one batch JSON per 2–3 lessons (I generate the configs after
   reading the lesson), `pipeline/insert_activities.py` inserts frontmatter consts +
   `<Widget>` lines and self-verifies; build + mount-check per batch; commit + push.
   ≈200–400k tokens/lesson.
3. **Sequencing:** physics subject first, then subject by subject across the ~578
   remaining lessons — ledger tracks done vs queue.

## P2 — Register v2: the structural "conversational layer" (reference: ChatGPT tutoring style)

**User decision (2026-11-08): structural tactics only — NO content regeneration.** The
prose-level tactics from the reference (micro-sentence rewriting, definition-unpacking boxes,
example-first restructuring, onboarding prose) are deliberately **omitted**; existing lesson
prose stays untouched. Everything below is CSS/build-time scripting over data that already
exists — **zero LLM tokens**, shippable site-wide:

1. **Generous spacing / gapping** — whitespace is pacing: more breathing room between
   paragraphs and steps (CSS line-height/margins tuned for the airy feel).
2. **Numbered topic positions** — hierarchical numbering rendered on existing headings
   ("1. Understanding the word", "2. What exactly is…") via CSS counters/build step.
   The reader always knows where they are.
3. **Stage roadmaps** — every subject's course contents framed as a stage map
   (Stage 1 → N), the explicit "journey from beginner to advanced".
4. **Lesson position labels** — "Beginner · Lesson 1" chips on lesson pages (tier +
   index within the subject ladder, derivable from `topics.json`).
5. **End-of-lesson quiz progress** — "0/4 answered" progress indicator on the existing
   quiz widgets.
6. **The learning loop made explicit** — subject pages state the loop: Explore →
   Learn → Visualize → Apply → Practice → Assess.

Layout implication: lesson pages get a max-width and line-height tuned for the airy
register; widgets sit *between* short paragraphs, not after walls of text.

## P3 — Career-role pages: COMPLETE (Nov 12–14, 2026)

One careers page per subject (142/142) at `subjects/<id>/careers/`, plus a `/careers`
index. Data-driven: `src/data/careers/<id>.json` rendered by `CareersPage.astro`;
route wrappers generated by `pipeline/gen_career_routes.py`; every role's title+code
pair validated EXACT against the O*NET 31.0 pack (`pipeline/packs/onet-31-occupation-data.txt`,
CC BY 4.0) by `pipeline/validate_careers.py`; pay/growth/entry verified per role via
bls.gov-restricted search with the real OOH page URL cited per role. EURES linked only.
Built across 7 waves of 2 parallel subagents (pilot + 6). Validator 142/142, build green
885 pages.
