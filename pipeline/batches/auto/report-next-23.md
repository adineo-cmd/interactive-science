# Report — chunk next-23 (plumbing + political-science ×11)

One batch file per lesson (`pipeline/batches/auto/batch-<slug>.json`), all inserted via
`python3 -I pipeline/insert_activities.py`. 95 activities total. Verified per lesson:
6–8 activities, ≥6 distinct types, zero adjacent same-type paragraphs, ≤2 answer-family
widgets (predict/judge/cloze), anchors unique and inside their target paragraphs, no
widget stacked on a paragraph that already hosts one, fig numbers unique past each
lesson's prior max. Check-yourself quizzes untouched; insert-only edits.

| Lesson | Types | next-23 |
|---|---|---|
| plumbing/foundational/plumbing-tools-and-safety | sort-buckets, order, estimate, branch, spot-error, match, cloze, place | next-23 |
| political-science/advanced/comparative-politics-methods | sort-buckets, spot-error, order, match, predict, compare, sort-buckets, branch | next-23 |
| political-science/advanced/conflict-and-peace-studies | match, cloze, judge, sort-buckets, branch, order, estimate, spot-error | next-23 |
| political-science/advanced/political-economy | match, estimate, cloze, sort-buckets, predict, order, spot-error, compare | next-23 |
| political-science/expert/formal-political-theory | branch, judge, place, order, match, compare, spot-error, sort-buckets | next-23 |
| political-science/expert/global-governance | sort-buckets, match, judge, estimate, timeline, compare, spot-error, order | next-23 |
| political-science/foundational/forms-of-government | match, estimate, sort-buckets, cloze, spot-error, compare, sort-buckets, order | next-23 |
| political-science/intermediate/constitutions-rights | match, sort-buckets, compare, judge, order, cloze, estimate, spot-error | next-23 |
| political-science/intermediate/international-relations-theories | match, sort-buckets, spot-error, timeline, predict, match, judge, estimate | next-23 |
| political-science/intermediate/political-ideologies | sort-buckets, match, judge, order, predict, compare, spot-error | next-23 |
| political-science/intermediate/the-public-policy-cycle | match, timeline, predict, sort-buckets, spot-error, judge, compare, sort-buckets | next-23 |
| political-science/intermediate/voting-systems-and-electoral-design | place, predict, sort-buckets, compare, branch, spot-error, estimate, order | next-23 |

Notes:
- All 12 pages are TopicPage lessons using the `<Widget />` component — no raw
  figure-markup conversion or renumbering was needed.
- Activities avoid duplicating each lesson's Check-yourself questions (both prose and
  quiz-widget items); designs are grounded in each lesson's own cases, numbers and
  thinkers (e.g. Fearon's three blocks, Kingdon's streams, the butterfly ballot, the
  amendment gauntlet).
