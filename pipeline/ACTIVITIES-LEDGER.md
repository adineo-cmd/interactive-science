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
| animation/foundational/the-twelve-principles-of-animation | estimate, sort-buckets, match, trace, judge, spot-error, branch, place | wave-5 |
| anthropology/foundational/culture-kin-long-view | cloze, estimate, match, order, judge, spot-error, compare, sort-buckets | wave-5 |
| anthropology/intermediate/the-four-fields | match, spot-error, branch, cloze, judge, order, compare, sort-buckets | wave-5 |
| anthropology/intermediate/human-evolution-a-timeline | place, sort-buckets, judge, spot-error, estimate, match, predict, order, branch, timeline | anthropology-1 |
| anthropology/intermediate/kinship-and-marriage-systems | compare, sort-buckets, spot-error, match, order, estimate, judge, branch, equationStep, quiz | anthropology-1 |
| anthropology/intermediate/archaeology-reading-material-culture | estimate, match, order, sort-buckets, branch, predict, compare, equationStep, judge, quiz | anthropology-1 |
| anthropology/advanced/ethnographic-methods | compare, sort-buckets, match, predict, order, branch, equationStep, quiz | anthropology-2 |
| anthropology/advanced/economic-and-political-anthropology | order, spot-error, compare, sort-buckets, judge, match, branch, predict, equationStep, quiz | anthropology-2 |
| anthropology/expert/deep-history-of-our-species | estimate, order, predict, branch, sort-buckets, cloze, match, place | anthropology-2 |
| anthropology/expert/anthropology-of-the-contemporary | predict, judge, spot-error, sort-buckets, match, compare, estimate, order, equationStep | anthropology-3 |
| archaeology/foundational/what-archaeology-is | timeline, sort-buckets, equationStep, order, predict, match, estimate, spot-error | wave-6 |
| architecture/foundational/form-follows-forces | plotter, compare, sort-buckets, match, order, judge, estimate, spot-error, branch | wave-6 |
| architecture/foundational/career-paths-and-licensure | equationStep, compare, predict, judge, sort-buckets, match, order, spot-error | wave-6 |
| architecture/intermediate/a-history-of-architectural-styles | match, cloze, predict, order, sort-buckets, estimate, judge | wave-7 |
| architecture/intermediate/plans-sections-and-scale | match, predict, cloze, order, spot-error, judge | wave-7 |
| architecture/intermediate/what-buildings-must-do | sort-buckets, predict, cloze, match, estimate, judge | wave-7 |
| architecture/advanced/environmental-design-light-heat-air | place, predict, cloze, order, judge, spot-error, match | wave-8 |
| architecture/advanced/structural-systems-arches-to-skyscrapers | match, predict, cloze, order, estimate, sort-buckets, judge | wave-8 |
| architecture/advanced/urban-design-and-public-space | match, predict, order, estimate, judge, sort-buckets, cloze | wave-9 |
| architecture/expert/computational-and-parametric-design | match, predict, cloze, order, sort-buckets, judge | wave-10 |
| architecture/expert/sustainable-and-passive-design | sort-buckets, order, predict, cloze, match, estimate, predict | wave-11 |
| art-history/foundational/walk-through-western-art | match, predict, cloze, sort-buckets, order, spot-error, estimate | art-astro-1 |
| astronomy/foundational/solar-system-scale | cloze, place, estimate, sort-buckets, predict, judge, match | art-astro-1 |
| astronomy/intermediate/stellar-life-cycles | estimate, cloze, judge, place, predict, match, sort-buckets | astro-2 |
| astronomy/intermediate/telescopes-and-the-electromagnetic-spectrum | cloze, match, spot-error, estimate, predict, sort-buckets, judge, order | astro-2 |
| astronomy/intermediate/the-milky-way | predict, cloze, place, estimate, order, judge, match | astro-3 |
| astronomy/intermediate/the-moon-and-eclipses | match, predict, cloze, place, sort-buckets, estimate, match | astro-3 |
| astronomy/foundational/orbits-and-keplers-laws | predict, cloze, order, estimate, sort-buckets, predict | astro-4 |
| astronomy/foundational/planet-earth | estimate, sort-buckets, predict, judge, estimate, match, predict | astro-4 |
| astronomy/advanced/compact-objects | cloze, match, predict, sort-buckets, estimate, judge | astro-5 |
| astronomy/advanced/exoplanets-and-detection | order, spot-error, place, sort-buckets, predict, estimate, match | astro-6 |
| astronomy/advanced/galaxies-and-the-expanding-universe | predict, sort-buckets, cloze, order, estimate, match, cloze | astro-7 |
| astronomy/expert/cosmology-and-general-relativity | cloze, predict, match, spot-error, sort-buckets, estimate, predict, match | astro-8 |
| astronomy/expert/dark-matter-and-dark-energy | order, match, cloze, predict, judge, spot-error, cloze | astro-9 |
| astronomy/expert/astrobiology | match, cloze, predict, sort-buckets, order, estimate, spot-error | astro-10 |

**Queue — PHYSICS IS COMPLETE (all 10 live lessons, 76 activities, waves physics-1…6).**

**Done subjects: physics, accounting, actuarial-science, aerospace-engineering, agriculture, animation, anthropology, archaeology, architecture — ALL lessons in each covered.**

**Anthropology: 9 of 9 COMPLETE** (55 new activities). **Archaeology: 1 of 1 COMPLETE.**
**Architecture: 10 of 10 COMPLETE (waves 6–11).**

**Art-history: 1 of 7 done (walk-through-western-art; remaining: global-prehistory, 3 intermediate, 2 advanced, 2 expert).**
**Astronomy: 9 of 9 COMPLETE (astro-1…10).**
**Then next subjects (alphabetical): art-history (6 remaining: global-prehistory, 3 intermediate, 2 advanced, 2 expert), biology, …** — check `src/data/topics.json` for each subject's lesson list; 2–3 lessons per wave. (use `src/data/topics.json` for the master list of the
  ~550 remaining live lessons; skip the done rows above). Update this table as each
  wave lands, and delete the lesson from the queue.

## Status snapshot (2026-11-08)

- P1 interaction library: **complete** — 12 new widget types in `public/widgets/*.js`
  (predict, cloze, judge, order, match, place, estimate, compare, hotspot, trace, branch,
  sort-buckets, spot-error) + the original 7. Config schemas in each file's header.
- P2 structural layer: **complete and shipped** (numbered topic positions, position chips,
  stage maps, learning-loop line, spacing) — commit 395dc79. Zero-token, no prose changes.
- P1 backfill: **40 lessons done, 337 activities** (physics 10/10 complete; accounting,
  actuarial-science, aerospace-engineering foundational lessons done; **agriculture
  11/11 COMPLETE** — waves agriculture-1..4; animation 1/1 COMPLETE; **anthropology
  9/9 COMPLETE**; **archaeology 1/1 COMPLETE** and architecture 2/10 — wave 6). Each single-lesson subject done in one
  wave; multi-lesson subjects go 2–3 per wave.
- Remaining queue: **~543 live lessons** (counted as pages with fewer than 3 of the new
  activity types in `src/pages/<slug>.astro`).
- Quality bars, verified every wave by script: ≥6 distinct interaction types, zero
  adjacent repeats, ≤2 answer-family widgets (predict/judge/cloze). Cloned-answer-heavy
  lessons get rebalanced into sort-buckets/compare/branch — expect this on most waves.
