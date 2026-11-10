# P1 activity backfill — report for chunk next-3

12 lessons, 8 activities each, 96 activities inserted via pipeline/insert_activities.py.
Every lesson: >=6 distinct widget types (grammar-of-cinema and cinematography-and-lighting
have pre-existing timeline/quiz/equationStep widgets on top of their 6 new types),
<=2 answer-family widgets (predict/judge/cloze), no adjacent-paragraph type repeats,
Check-yourself and end-of-lesson quiz content untouched, insert-only.
Verified by script after insertion (distinct types, answer-family count, adjacent repeats).

| lesson | types (insert order) | chunk |
|---|---|---|
| environmental-science/intermediate/biodiversity-and-conservation | match, order, spot-error, judge, trace, branch, compare, estimate | next-3 |
| environmental-science/intermediate/energy-systems-and-the-grid | place, order, spot-error, branch, predict, estimate, match, judge | next-3 |
| environmental-science/intermediate/waste-and-the-circular-economy | order, match, sort-buckets, predict, place, branch, estimate, judge | next-3 |
| environmental-science/intermediate/water-resources-and-pollution | order, predict, sort-buckets, match, branch, spot-error, judge, compare | next-3 |
| fashion-design/foundational/fashion-design-research | predict, sort-buckets, compare, judge, place, order, match, order | next-3 |
| film/advanced/documentary-form | spot-error, match, order, judge, match, cloze, estimate, branch | next-3 |
| film/advanced/mise-en-scene-analysis | match, spot-error, predict, sort-buckets, compare, cloze, compare, order | next-3 |
| film/advanced/screenwriting-craft | spot-error, order, cloze, predict, estimate, match, compare, branch | next-3 |
| film/expert/film-theory-and-criticism | sort-buckets, match, judge, compare, order, branch, cloze, sort-buckets | next-3 |
| film/foundational/grammar-of-cinema | match, cloze, match, sort-buckets, order, sort-buckets, compare, judge | next-3 |
| film/intermediate/cinematography-and-lighting | sort-buckets, cloze, place, match, sort-buckets, match, predict, branch | next-3 |
| film/intermediate/editing-the-cut | order, spot-error, match, cloze, compare, predict, estimate, sort-buckets | next-3 |
