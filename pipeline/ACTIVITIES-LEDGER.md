# ACTIVITIES-LEDGER.md — per-paragraph interactivity rollout (P1 backfill)

> **This file is the handoff for the P1 rollout.** It records the user's quality bar, the
> workflow, and exactly which lessons are done vs queued. Any agent (this machine or the
> PC) continues from here. The full plan lives in `ROADMAP.md` (P1).

## User directives (2026-11-08 — treat as hard requirements)

1. **Innovative interactive — NOT follow-up questions.** Do not default to quiz/predict
   after every paragraph. Choose the interaction TYPE from the paragraph's content:
   manipulate (`sliderLab`/`plotter`), construct/order (`order`), locate (`place`/`hotspot`),
   classify (`sort-buckets`), pair (`match`), detect-the-error (`spot-error`),
   estimate magnitude (`estimate`), decide (`branch`), explore (`compare`/`trace`).
   Answer-type widgets (`predict`/`judge`/`cloze`) are one family among many — at most
   2 of the 6 per lesson.
2. **Anti-repetition**: adjacent paragraphs never get the same type; **≥6 distinct types per
   lesson** (pilot bar); the mix shifts by subject flavour (history → order/compare/match;
   chemistry → place/cloze/predict; literature → match/spot-error/branch; math →
   estimate/cloze/trace).
3. **Ground every activity in the lesson's own facts and numbers.** Read the paragraph
   first; the anchor text must come from the paragraph you are attaching to. No invented facts.
4. The lesson-end **"Check yourself" quiz is untouched** and per-paragraph activities never
   duplicate its questions.
5. Existing prose, headings, widgets, frontmatter stay byte-untouched — the insert script
   only ADDS. (Quiz widgets that sit after the sources line: never move them.)
6. Every batch: build (`npm run build`), verify mounts in the built HTML, commit + push.

## Workflow per wave (the token-cheap pipeline)

1. Pick 2–3 lessons from the queue below.
2. Read the lesson paragraphs; design 5–6 activities each, obeying the directives above.
3. Write a batch file `pipeline/batches/<subject>-wave-N.json`:
   `[{"slug": "...", "activities": [{"anchor","type","caption","name","config"}]}, ...]`
   — anchor = unique text snippet from the target paragraph (whitespace inside the anchor
   is matched flexibly; it must be inside a `<p>`, not inside an existing widget figure).
4. `python3 -I pipeline/insert_activities.py pipeline/batches/<subject>-wave-N.json`
   (it inserts frontmatter consts + `<Widget no caption widget config>` lines, assigns fig
   numbers past the lesson's max, and self-verifies).
5. `cd astro-website && npm run build`; then check mounts:
   `grep -o 'data-widget="[a-z-]*"' dist/<slug>/index.html | sort | uniq -c`
6. Commit + push (batch file + script changes + lessons). Config-schema reference: the
   header comment of each widget in `astro-website/public/widgets/*.js`.

## Progress ledger

**Done (activities live):**
| Lesson | Types | Wave |
|---|---|---|
| physics/foundational/energy-conservation | 9 acts (PC pilot) | pilot |
| philosophy/intermediate/philosophy-of-mind | 7 acts (PC pilot) | pilot |
| physics/foundational/newtons-laws | sort-buckets, place, predict, match, judge, spot-error | physics-1 |
| physics/intermediate/circuits-and-ohms-law | order, cloze, spot-error, judge, estimate, predict | physics-1 |
| physics/intermediate/circular-motion-and-gravitation | cloze, predict, estimate, match, place, sort-buckets, compare | physics-2 |
| physics/intermediate/magnetism-and-induction | sort-buckets, cloze, order, predict, match, place, spot-error | physics-2 |
| physics/intermediate/thermal-physics | sort-buckets, cloze, predict, estimate, order, match, judge | physics-3 |
| physics/intermediate/electrostatics | order, judge, estimate, cloze, predict, sort-buckets, match | physics-3 |
| physics/intermediate/momentum-and-collisions | cloze, spot-error, predict, judge, order, estimate, match | physics-4 |
| physics/intermediate/waves-and-sound | cloze, predict, match, order, place, estimate, spot-error, sort-buckets | physics-4 |
| physics/intermediate/projectile-and-2d-motion | match, predict, estimate, sort-buckets, judge, cloze | physics-5 |
| physics/intermediate/optics-lenses-and-mirrors | judge, compare, cloze, place, match, predict, spot-error | physics-5 |
| physics/foundational/motion-1d | match, cloze, predict, estimate, place, judge, order | physics-6 |
| accounting/foundational/the-fundamentals-of-accounting | sort-buckets, match, spot-error, cloze, judge, predict, estimate | acct-1 |
| actuarial-science/foundational/probability-for-actuaries | match, spot-error, sort-buckets, cloze, judge, estimate, predict | act-1 |
| aerospace-engineering/foundational/aerodynamics-i-lift-and-airfoils | predict, cloze, order, sort-buckets, match, estimate, judge | aero-1 |
| agriculture/foundational/soil-water-sun | match, trace, sort-buckets, spot-error, judge, place, estimate, branch | agriculture-1 |
| agriculture/intermediate/soil-health | estimate, order, judge, place, sort-buckets, branch, match, predict | agriculture-1 |
| agriculture/intermediate/plant-nutrition-and-fertilisers | sort-buckets, cloze, estimate, trace, match, spot-error, order, branch | agriculture-1 |
| agriculture/intermediate/pests-weeds-and-ipm | sort-buckets, place, judge, predict, match, estimate, spot-error, branch | agriculture-2 |
| agriculture/intermediate/animal-husbandry | order, estimate, compare, sort-buckets, spot-error, match, predict, trace | agriculture-2 |
| agriculture/intermediate/farm-economics | match, cloze, estimate, sort-buckets, branch, trace, judge, spot-error | agriculture-2 |
| agriculture/advanced/precision-agriculture | estimate, match, place, judge, spot-error, order, branch, predict | agriculture-3 |
| agriculture/advanced/breeding-and-gmos | cloze, judge, estimate, spot-error, compare, order, branch | agriculture-3 |
| agriculture/advanced/agroecology | sort-buckets, predict, match, estimate, spot-error, judge, trace | agriculture-3 |
| agriculture/expert/food-systems-and-security | spot-error, predict, judge, estimate, branch, match, trace, sort-buckets | agriculture-4 |
| agriculture/expert/climate-smart-agriculture | estimate, judge, sort-buckets, compare, place, branch, predict, spot-error | agriculture-4 |

**Queue — PHYSICS IS COMPLETE (all 10 live lessons, 76 activities, waves physics-1…6).**

**Done subjects: physics, accounting, actuarial-science, aerospace-engineering, agriculture — ALL lessons in each covered.**

**Next subjects (alphabetical): animation, anthropology, archaeology, architecture, art-history, …** — check `src/data/topics.json` for each subject's lesson list; 2–3 lessons per wave. (use `src/data/topics.json` for the master list of the
  ~556 remaining live lessons; skip the done rows above). Update this table as each
  wave lands, and delete the lesson from the queue.

## Status snapshot (2026-11-08)

- P1 interaction library: **complete** — 12 new widget types in `public/widgets/*.js`
  (predict, cloze, judge, order, match, place, estimate, compare, hotspot, trace, branch,
  sort-buckets, spot-error) + the original 7. Config schemas in each file's header.
- P2 structural layer: **complete and shipped** (numbered topic positions, position chips,
  stage maps, learning-loop line, spacing) — commit 395dc79. Zero-token, no prose changes.
- P1 backfill: **24 lessons done, 210 activities** (physics 10/10 complete; accounting,
  actuarial-science, aerospace-engineering foundational lessons done; **agriculture
  11/11 COMPLETE** — waves agriculture-1..4, commits b973639, dd0409e, c59ffb3). Each
  single-lesson subject done in one wave; multi-lesson subjects go 2–3 per wave.
- Remaining queue: **556 live lessons** (counted as pages with fewer than 3 of the new
  activity types in `src/pages/<slug>.astro`).
- Agriculture quality check (reference for future waves): every lesson has ≥7 distinct
  interaction types, zero adjacent repeats, and ≤2 answer-family widgets
  (predict/judge/cloze). Three cloned-answer-heavy lessons were rebalanced into
  sort-buckets/compare to hold that bar — expect to do this on most waves.
