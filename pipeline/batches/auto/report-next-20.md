# chunk next-20 — P1 per-paragraph activity backfill report

12 lessons (nuclear-engineering, nuclear-medicine-technology, nursing, nutrition-dietetics,
occupational-therapy, operations-research, optometry, paramedicine, peace-conflict-studies,
petroleum-engineering, pharmacy, philosophy/advanced), 94 activities inserted via
`pipeline/insert_activities.py` (batches `pipeline/batches/auto/batch-<lesson>.json`).
All lessons use the Widget component (no raw-figure pages in this chunk); "Check yourself"
sections and their quiz widgets untouched; existing prose/frontmatter untouched (insert-only).

| lesson | types (document order) | chunk |
|---|---|---|
| nuclear-engineering/foundational/radiation-physics-and-detection | predict, sort-buckets, match, judge, branch, order, compare, estimate | next-20 |
| nuclear-medicine-technology/foundational/radiopharmaceuticals | sort-buckets, judge, order, spot-error, compare, predict, match, branch | next-20 |
| nursing/foundational/the-sciences-behind-nursing | match, judge, sort-buckets, cloze, spot-error, compare, estimate, branch | next-20 |
| nutrition-dietetics/foundational/nutrients-and-how-they-work | estimate, cloze, compare, sort-buckets, match, judge, place, branch | next-20 |
| occupational-therapy/foundational/occupation-the-core-construct | sort-buckets, compare, spot-error, compare, order, judge, branch, predict | next-20 |
| operations-research/foundational/linear-programming | cloze, sort-buckets, estimate, order, predict, match, spot-error | next-20 |
| optometry/foundational/optics-for-optometry | compare, order, cloze, estimate, judge, sort-buckets, match, branch | next-20 |
| paramedicine/foundational/ems-systems-and-the-paramedic | predict, estimate, match, spot-error, sort-buckets, order, judge, branch | next-20 |
| peace-conflict-studies/foundational/what-are-peace-and-violence | predict, sort-buckets, judge, match, order, match, branch, compare | next-20 |
| petroleum-engineering/foundational/petroleum-geology-and-reservoir-rock | compare, order, spot-error, match, sort-buckets, cloze, order, estimate | next-20 |
| pharmacy/foundational/pharmaceutical-sciences-foundations | compare, order, estimate, cloze, predict, sort-buckets, match, spot-error | next-20 |
| philosophy/advanced/language-and-meaning | match, spot-error, sort-buckets, cloze, judge, branch, match | next-20 |

Notes:
- Every lesson: ≥6 distinct types (6–8), zero same-type on adjacent paragraphs, ≤2
  answer-family widgets (predict/judge/cloze) among the inserted set.
- Activities avoid the "Check yourself" quiz content (e.g. radiation's 24-day I-131 and
  beta-shield questions; radiopharmacy's 740 MBq double-draw and cold-spot questions;
  nursing's shock-index, C. diff-gel and steady-state questions; optometry's cornea-power,
  vergence +1.00 D and Prentice 2.4Δ questions; LP's fractional-trucks and shadow-price
  questions; pharmacy's morphine bioavailability and potency-vs-efficacy questions).
- Clinical/academic register throughout; no graphic detail (e.g. paramedicine uses consent
  doctrine, scene discipline and CRM rather than clinical procedure detail).
- Exploration widgets grounded in each lesson's own numbers: place (nutrition body-water
  map), estimate (radiation √N counting, Seattle-system survival, LP vertex profit,
  optometry 40 cm accommodation, Lipinski weight, petroleum oil-in-place, nutrition glucose,
  nursing half-life), branch (waste-desk proposal, two-teas analysis, consent edge cases,
  verificationist dialectic, over-drinking case, stop-date phone call, three critics,
  bright-spot reading), order (neutron-shield sandwich, ocular-media staircase, simplex walk,
  scene size-up, recovery ladder, salbutamol engineering, iceberg layers, hot-lab morning,
  source-rock chain).
- Figure numbering continues past each lesson's max (pre-existing equationStep/plotter/
  sliderLab/timeline widgets keep their original numbers; three lessons start at fig 2
  because their max pre-existing fig was 1).
