# chunk-next-1 report — P1 per-paragraph activity backfill (12 lessons)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch, all clean on final run).

| lesson | types | wave |
|---|---|---|
| education/foundational/the-learning-process | order, match, branch, sort-buckets, predict, cloze, estimate, place | next-1 |
| electrical-engineering/foundational/dc-circuit-analysis | match, trace, sort-buckets, order, spot-error, cloze, predict, estimate | next-1 |
| electrical-trades/foundational/electrical-safety-and-theory | estimate, match, sort-buckets, predict, order, branch, cloze, spot-error | next-1 |
| emergency-management/foundational/the-emergency-management-cycle | compare, sort-buckets, estimate, branch, spot-error, order, judge, cloze | next-1 |
| engineering/advanced/control-systems | order, match, cloze, sort-buckets, judge, place, estimate, trace | next-1 |
| engineering/advanced/materials-selection | place, match, order, sort-buckets, match, estimate, branch, spot-error | next-1 |
| engineering/advanced/signal-processing | order, predict, trace, match, cloze, branch, estimate, match | next-1 |
| engineering/expert/reliability-and-safety-engineering | match, order, estimate, predict, order, sort-buckets, spot-error, judge | next-1 |
| engineering/expert/systems-engineering | order, match, order, estimate, judge, branch, trace, spot-error | next-1 |
| engineering/foundational/statics-structures | match, place, predict, match, spot-error, order, cloze, sort-buckets | next-1 |
| engineering/intermediate/fluid-mechanics | sort-buckets, predict, estimate, place, spot-error, cloze, match, trace | next-1 |
| engineering/intermediate/forces-beams-and-bridges | spot-error, order, place, judge, branch, place, predict, compare | next-1 |

96 activities total (8 per lesson). All 12 pages use the Widget component (no raw
figure markup in this chunk, so no figure conversion/renumbering was needed); every
lesson's fig numbers continue past its pre-existing max. Quality bars verified by
script after insertion: 8 activities per lesson, 7–8 distinct types each, ≤2
answer-family widgets (predict/judge/cloze) per lesson, no same type on adjacent
activity paragraphs, anchors unique per file, and per-lesson activity sets steered
away from each lesson's pre-existing quiz/Check-yourself questions (control-systems,
materials-selection, signal-processing and fluid-mechanics all carry existing quiz
widgets whose questions were checked and avoided).
