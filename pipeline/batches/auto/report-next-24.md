# chunk-next-24 — per-paragraph activity backfill (12 psychology lessons, 96 activities)

| Lesson | Types | Chunk |
|---|---|---|
| psychology/advanced/cognitive-psychology-and-models | match, judge, sort-buckets, trace, estimate, order, spot-error, compare | next-24 |
| psychology/advanced/neuropsychology | timeline, spot-error, match, branch, estimate, order, compare, sort-buckets | next-24 |
| psychology/advanced/psychometrics-and-testing | sort-buckets, place, spot-error, match, trace, judge, order, branch | next-24 |
| psychology/expert/behavioural-neuroscience | sort-buckets, spot-error, judge, order, timeline, compare, predict, match | next-24 |
| psychology/expert/clinical-practice-and-ethics | match, spot-error, place, order, predict, sort-buckets, estimate, timeline | next-24 |
| psychology/foundational/memory | predict, sort-buckets, order, spot-error, match, order, judge, compare | next-24 |
| psychology/intermediate/abnormal-psychology-therapies | sort-buckets, match, judge, order, spot-error, cloze, order, estimate | next-24 |
| psychology/intermediate/development-piaget-to-today | match, spot-error, timeline, predict, order, compare, judge, estimate | next-24 |
| psychology/intermediate/perception | match, spot-error, sort-buckets, judge, compare, timeline, estimate, predict | next-24 |
| psychology/intermediate/personality-theories | sort-buckets, place, judge, compare, match, spot-error, predict, timeline | next-24 |
| psychology/intermediate/research-methods | match, sort-buckets, spot-error, judge, match, cloze, branch, timeline | next-24 |
| psychology/intermediate/social-psychology | order, judge, match, spot-error, sort-buckets, estimate, compare, predict | next-24 |

**96 activities across 12 lessons; every lesson has >=6 distinct types (7–8), no same-type adjacent paragraphs, <=2 answer-family widgets (predict/judge/cloze).**
All 12 lessons use the Widget component; insert-only via pipeline/insert_activities.py (existing prose, headings, widgets and Check-yourself quizzes untouched).
Batches: batch-cognitive-psychology-and-models, batch-neuropsychology, batch-psychometrics-and-testing, batch-behavioural-neuroscience,
batch-clinical-practice-and-ethics, batch-memory, batch-abnormal-psychology-therapies, batch-development-piaget-to-today,
batch-perception, batch-personality-theories, batch-research-methods, batch-social-psychology (all in pipeline/batches/auto/).
Every activity is grounded in its lesson's own paragraphs, studies and numbers (e.g. Sternberg's 38 ms slope trace, Emmert/SEM/mortality
places, Milgram variation ordering, Andrade's 29% estimate, Darley & Latané's 85% estimate, Perry's stop-distance, Strange Situation,
Harlow, Wason, diathesis-stress); clinical and historical content kept strictly academic/clinical in tone.
