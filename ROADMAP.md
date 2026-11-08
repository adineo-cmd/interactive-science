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

1. **Pilot:** build the Answer + Sequence families first (`predict`, `cloze`, `judge`,
   `order`, `match` — small JS modules reusing quiz/diagramBuilder machinery), then
   hand-convert one quantitative + one essay-ish lesson end-to-end. Judge density and UX
   before the big run; add Scale + Visual families next.
2. **Bulk pipeline:** one LLM pass per 3–4 lessons reads stripped lesson text and emits
   `(paragraph-anchor, widget-type, config)` JSON; a deterministic script inserts the
   frontmatter configs + `<Widget>` lines and runs the standard verification battery.
   ≈200–400k tokens/lesson.
3. **Sequencing:** backfill foundational + intermediate (357 lessons) per subject;
   remaining planned lessons get per-paragraph activities in their first pass.

## P2 — Register v2: the "conversational layer" (reference: ChatGPT tutoring style)

Target feel (captured from the user's reference lesson): a tutor that teaches in small
steps with room to breathe. Key characteristics to adopt site-wide:

1. **Small, easy sentences** — one idea per sentence; paragraphs of 1–3 sentences.
   Jargon only after the plain word has been used first.
2. **Generous spacing / gapping** — whitespace is pacing. More, shorter paragraphs;
   breathing room between steps (CSS line-height/margins tuned for this).
3. **Numbered topic positions** — hierarchical numbering inside lessons
   ("1. Understanding the word", "2. What exactly is…", "3. Seven characteristics…"
   with numbered sub-points). The reader always knows where they are.
4. **Stage roadmaps** — every subject opens with a stage map (Stage 1 → N) like the
   reference's 8-stage biology roadmap; the subject page's course contents become the
   explicit "journey from beginner to advanced".
5. **Lesson position labels** — "Beginner · Lesson 1" chips on lesson pages (tier +
   index within the subject ladder, already derivable from `topics.json`).
6. **Definition unpacking** — etymology/term-breakdown boxes ("Bios: Life / Logos:
   Study / Therefore: …") for every new technical term.
7. **Example-first explanations** — concrete example, then the rule
   ("Look at these examples: …" → Living / Non-living labels).
8. **Enumerated characteristics** — numbered list items each with a one-line definition
   followed by "Example: …" on its own line.
9. **End-of-lesson quiz is standard** — "Check your understanding" with 4 MCQs and a
   progress indicator ("0/4 answered") closing every lesson.
10. **The learning loop made explicit** — subject pages state the loop: Explore →
    Learn → Visualize → Apply → Practice → Assess.
11. **Friendly onboarding** — "You don't need any previous knowledge. We'll build it
    from zero." openers; optional goal question per subject ("Why are you learning
    this?" → tunes the Going deeper pointers).

Layout implication: lesson pages get a max-width and line-height tuned for the airy
register; widgets sit *between* short paragraphs, not after walls of text.

**Production split (no second content pass):** items 2–5, 9 and 10 (numbering, spacing,
lesson chips, quiz progress, stage framing, learning loop) are structural — CSS/build-time
scripting over existing data, **zero LLM tokens**, shippable site-wide immediately. Only the
prose-level items (1, 6, 7, 8, 11) touch text — those are **folded into P1's bulk pass**, so
each paragraph is touched exactly once: its sentences tightened *and* its activity added in
the same run. Never a separate P2 rewriting campaign.

## P3 — Career-role pages (deferred)

O*NET / BLS / EURES career pages per subject, after all subject tiers close.
