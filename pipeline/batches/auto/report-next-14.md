# chunk-next-14 report — P1 per-paragraph activity backfill (12 lessons: literature/intermediate + logistics, machining, marine-science, marketing, masonry, massage-therapy, materials-science)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch). All 12 pages use the
Widget component (no raw figure markup, so no figure conversion/renumbering was needed).
Fig numbers continue past each lesson's pre-existing max (3–10 on the eleven lessons that
carried figs 1–2; masonry had only its fig-1 equationStep, so its inserts run 2–9).

| Lesson | Types | Chunk |
|---|---|---|
| literature/intermediate/figures-of-speech | timeline, sort-buckets, match, branch, spot-error, compare, order, cloze | next-14 |
| literature/intermediate/poetry-form-and-meter | match, place, predict, plotter, order, compare, sort-buckets, judge | next-14 |
| literature/intermediate/shakespeares-craft | estimate, judge, compare, spot-error, order, branch, order, trace | next-14 |
| literature/intermediate/the-novel-a-short-history | timeline, spot-error, order, estimate, match, branch, cloze, compare | next-14 |
| literature/intermediate/world-epics | order, judge, place, compare, estimate, match, sort-buckets, branch | next-14 |
| logistics-supply-chain/foundational/supply-chain-concepts-and-metrics | sort-buckets, trace, branch, match, order, estimate, branch, place | next-14 |
| machining/foundational/measurement-and-materials | order, match, spot-error, judge, predict, branch, estimate, chart | next-14 |
| marine-science/foundational/earth-oceans-and-tides | place, order, match, sort-buckets, estimate, judge, cloze, match | next-14 |
| marketing/foundational/introduction-and-company-analysis | match, predict, branch, sort-buckets, compare, spot-error, cloze, order | next-14 |
| masonry/foundational/masonry-safety-and-tools | estimate, match, place, estimate, judge, order, cloze, spot-error | next-14 |
| massage-therapy/foundational/body-systems-and-movement | match, spot-error, branch, predict, sort-buckets, order, judge, order | next-14 |
| materials-science/advanced/failure-fracture-and-fatigue | sort-buckets, spot-error, match, branch, estimate, chart, order, cloze | next-14 |

96 activities total (8 per lesson). Verified by script after insertion: 8 activities per
lesson, ≥6 distinct types each (7–8), ≤2 answer-family widgets (predict/judge/cloze) per
lesson, no same type on consecutive widget-hosting paragraphs (masonry's two place
candidates were one paragraph apart only via a misconception paragraph — the second was
converted in place to an estimate, batch file updated to match), fig numbers unique per
lesson, every `config={...}` reference resolves to a frontmatter const.

Innovative/manipulate widgets used where content allowed: timeline (the Rhetorica-to-
Lakoff figure catalogue; the Genji→Tom Jones long-prose milestones), plotter (iambic vs
trochaic stress pulses as point series), trace (demand-signal fidelity decaying tier by
tier; Shakespeare's career-long loosening of end-stopping), chart (masonry-saw speeds
6061-aluminium vs 304 stainless; the K_IC league table), plus branch decision walks
through the part-or-associate test, Fisher's chain/product match, the Kraljic quadrants,
the thou/you dial, the trade-off triangle, VRIO, fail-soft vs fail-sudden, the seafloor-
spreading evidence, and the session arc as order tasks.

All configs grounded in each lesson's own paragraphs and numbers — no invented facts:
da-DUM/DUM-da feet, five iambs, 1540s Surrey, Kumukanda 2017; the Globe's ~3,000
spectators (1599), the OED's ~1,700 first recorded uses, the 1623 Folio's thirty-six
plays; Genji ~1010, Quixote 1605/1615, Crusoe 1719, Pamela 1740, Tom Jones 1749, Freytag
1863, Molly Bloom's ~20,000 words in eight sentences, Márquez's page-per-execution ratio;
2100 BCE Gilgamesh, the 1872 George Smith sensation, 100,000 Mahabharata verses, Kirina
1235 via Niane 1960, Wilson 2017; Fisher 1997, P&G's diaper bullwhip, turns-of-20 ≈ 18
days, Kraljic 1983, distributors at 2.5 vs 6 turns / 60 vs 25 days cash-to-cash; 0.5 mm
rule / 0.02 caliper / 0.01 micrometer, 0.5 mm screw pitch ÷ 50 divisions, ±0.5 vs ±0.01
assignment, 11.7 µm/m/°C, 250 vs 40 m/min → 6,600 vs 1,000 rpm; plates at a few cm/yr,
Challenger Deep ~11 km, Sun's 0.46 tide-raising force, Fundy 12–16 m, constituents
12.42 h and 24.07 h, zones 0–200/200–1,000/1,000–4,000/4,000–6,000 m; B = 35 − C = 18 =
17, rival gaps +17 vs +25, value-ratio 4×; 3–4 kg brick and ~20 kg block, 65 mm + 10 mm
= 75 mm coursing, OSHA silica 50 µg/m³, mortar M-S-N-O ladder; eleven organ systems, 206
bones, upper-trapezius occiput-to-clavicle grammar, Type I/II fibre roles, 55°→70°
charting; Griffith's 14,000 MPa tip stress and 116 MPa prediction, K_IC table (steels
50–200, titanium 40–100, aluminium 20–40, polymers 1–5, glass below 2), Paris-law m of
2–4, 0.7 mm per 10,000 flights toward a 9 mm critical size (quiz's own numbers left to
the quiz). Check-yourself quizzes and their feedback were steered around, never edited;
existing prose, frontmatter and pre-existing widgets untouched (insert-only).
