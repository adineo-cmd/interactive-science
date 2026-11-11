# chunk next-21 — P1 per-paragraph activity backfill report

12 philosophy lessons (advanced: modal-logic, phenomenology-and-existentialism; expert:
ethics-of-technology-and-ai; foundational: epistemology, ethics-three-theories,
free-will-and-determinism, logic-arguments, metaphysics, what-is-philosophy; intermediate:
aesthetics, eastern-philosophy, philosophy-of-science), 93 activities inserted via
`pipeline/insert_activities.py` (batches `pipeline/batches/auto/batch-<lesson>.json`).
All lessons use the Widget component (no raw-figure pages in this chunk); "Check yourself"
sections and their quiz widgets untouched; existing prose/frontmatter untouched (insert-only).

| lesson | types (document order) | chunk |
|---|---|---|
| philosophy/advanced/modal-logic | sort-buckets, spot-error, match, compare, branch, order, sort-buckets, judge | next-21 |
| philosophy/advanced/phenomenology-and-existentialism | match, spot-error, branch, compare, sort-buckets, predict, order, judge | next-21 |
| philosophy/expert/ethics-of-technology-and-ai | branch, cloze, predict, spot-error, compare, estimate, timeline | next-21 |
| philosophy/foundational/epistemology | sort-buckets, judge, cloze, order, match, compare, sort-buckets, timeline | next-21 |
| philosophy/foundational/ethics-three-theories | match, spot-error, cloze, predict, compare, branch, sort-buckets, order | next-21 |
| philosophy/foundational/free-will-and-determinism | judge, compare, predict, match, branch, order, estimate, spot-error | next-21 |
| philosophy/foundational/logic-arguments | match, sort-buckets, cloze, predict, compare, spot-error, equationStep, branch | next-21 |
| philosophy/foundational/metaphysics | cloze, predict, sort-buckets, match, branch, compare, equationStep, timeline | next-21 |
| philosophy/foundational/what-is-philosophy | judge, sort-buckets, spot-error, order, match, compare, predict, equationStep | next-21 |
| philosophy/intermediate/aesthetics | cloze, match, judge, order, branch, compare, sort-buckets | next-21 |
| philosophy/intermediate/eastern-philosophy | order, match, spot-error, compare, predict, sort-buckets, match | next-21 |
| philosophy/intermediate/philosophy-of-science | spot-error, cloze, predict, sort-buckets, order, compare, match, branch | next-21 |

Notes:
- Every lesson: ≥6 distinct types (6–8 activities), zero same-type on adjacent paragraphs,
  ≤2 answer-family widgets (predict/judge/cloze) among the inserted set.
- Philosophy flavour applied throughout: sort-buckets for positions/schools (modal statuses,
  Kuhn-cycle stages, Mencius vs Xunzi, autono/moralism), match for argument↔objection and
  term↔work pairs (axioms↔frame conditions, Gettier repairs↔costs, theories of art↔casualties),
  branch walks for dilemma paths (Plantinga's wager, rule-utilitarian horns, Frankfurt-adjacent
  livability, grue/realism disputes), spot-error on student glosses, estimate on the lesson's own
  numbers (COMPAS 23% vs 45%, PhilPapers 59%), timeline for dated sequences (Statute of Anne→NYT
  suit, Descartes→Goldman, Hobbes→Rawls), equationStep for conditional-move walks and Lewis's
  trade. All facts/numbers are the lessons' own; no invented content.
- Activities avoid the "Check yourself" quizzes (e.g. modal-logic's duality/frame-condition/
  defence questions; epistemology's tripartite/trilemma questions; aesthetics' Fountain and
  Hume-vs-Bourdieu questions; philosophy-of-science's asymmetry/neutrino/realism questions)
  and do not duplicate them.
