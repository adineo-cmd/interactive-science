# ROADMAP.md — future plan for Interactive Atlas

Standing priorities, newest first. The register campaign state (foundational closed,
intermediate 176/194, advanced/expert pending) is tracked in `AGENT-TASKS.md`; this file
is the *what next*, not the *what now*.

---

## P1 — Per-paragraph interactivity: the site becomes an activity, not a book

**Goal:** every substantive paragraph is paired with an interactive activity (Brilliant-style
learn → do → feedback loop). The page should *feel* like using instruments with short text
between them, not reading a textbook with occasional figures.

### The pairing rule

| Paragraph type | Activity | Widget |
|---|---|---|
| Introduces a quantity / relationship | manipulate it live | `plotter` / `sliderLab` |
| Walks through a procedure or derivation | step through it | `equationStep` |
| Historical / causal sequence | order & scrub events | `timeline` |
| Defines parts of a system | label the diagram | `diagramBuilder` |
| Makes a claim the reader can bet on | **predict, then reveal** | `predict` (NEW, 1-question choice + reveal) |
| Worked example / rule | check yourself | `quiz` (1-question instance) |

- Rule of thumb: **every substantive paragraph gets an activity** (≈6–8 per lesson).
  Transitions and scope notes stay prose-only — no gimmick filler.
- **New widget type `predict`:** lightweight 1-question inline choice with explanation
  reveal (~100 lines, reusing quiz machinery). This is the only cheap way to make
  claim-paragraphs interactive; build it during the pilot.

### Production (token-cheap, see P3)

1. **Pilot (2 lessons, hand-built):** one quantitative (`physics/foundational/
   energy-conservation`), one essay-ish intermediate. Defines density, UX, and the
   `predict` widget. Judge before committing to the big run.
2. **Bulk pipeline:** one LLM pass per 3–4 lessons reads stripped lesson text and emits
   `(paragraph-anchor, widget-type, config)` JSON; a deterministic script inserts the
   frontmatter configs + `<Widget>` lines and runs the standard verification battery.
   ≈200–400k tokens/lesson (vs ~1M in the subagent loop).
3. **Sequencing:** fold into the *first* pass of remaining content — finish the 18
   intermediate lessons + advanced (124) + expert (81) **with** per-paragraph activities
   built in, then backfill foundational + intermediate (357 lessons) per subject.

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

## P3 — Token-cheap content pipeline (adopted 2026-11-08)

The subagent loop averaged ~1M tokens/lesson. Replacement:

1. **Scripted scaffold** (`pipeline/insert_devices.py`): deterministic insertion of
   register devices (tail sections, h2 markers, sources append, "Where you are"
   skeleton, Check-yourself drafted from existing quiz configs). Zero tokens.
2. **Bulk-JSON content pass**: one call per 3–4 lessons outputs device text
   (misconceptions, What-to-notice, takeaways, questions) as JSON; script inserts and
   verifies. ~100–200k tokens/batch.
3. **Subagents only for stragglers** (Layout pages, odd structures the script rejects).

## P4 — Pack expansion (book acquisition without tokens)

- Download open corpora by script: **NCERT 10–12** (`AdithyaSNair/ncert-textbooks-10-12`),
  **BCcampus OpenEd**, **OER Commons / Pressbooks** titles for gap subjects.
- Registry of the 3 known gap sources in `pipeline/SOURCES.md`: Boundless Art History
  (CC BY-SA), Moving Pictures (film), Broccoli and Chocolate (journalism) — OCR
  (`ocrmypdf`) only if a source exists solely as a scan. Rebuild packs, re-run matcher.
- Never paste whole chapters: packs feed adaptation; attribution stays embedded.

## P5 — Remaining register campaign (tracked in AGENT-TASKS.md)

- Intermediate: 176/194 Good — final 18 ranked in `pipeline/needs-remaining.json`
  (all score 40, TopicPage, ≥3 callouts; need Where-you-are, recaps, notices,
  Check-yourself, takeaways, Where-next + CC BY append).
- Then advanced (124) → expert (81), weakest-first per audit, folded with P1/P2 above.

## P6 — Career-role pages (deferred)

O*NET / BLS / EURES career pages per subject, after all subject tiers close.
