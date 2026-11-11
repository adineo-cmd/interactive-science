# chunk-next-26 — per-paragraph activity backfill (12 lessons, 98 activities)

| Lesson | Types | Chunk |
|---|---|---|
| religious-studies/intermediate/buddhism | order, match, spot-error, cloze, sort-buckets, estimate, branch, compare | next-26 |
| religious-studies/intermediate/christianity | match, sort-buckets, order, place, timeline, branch, compare, spot-error | next-26 |
| religious-studies/intermediate/hinduism | match, judge, sort-buckets, order, spot-error, compare, timeline, estimate, order | next-26 |
| religious-studies/intermediate/islam | order, match, judge, estimate, branch, spot-error, order, compare, match | next-26 |
| religious-studies/intermediate/judaism | cloze, sort-buckets, branch, judge, timeline, compare, match | next-26 |
| religious-studies/intermediate/studying-religion-academically | sort-buckets, judge, match, spot-error, cloze, timeline, spot-error, compare, match | next-26 |
| respiratory-therapy/foundational/cardiopulmonary-assessment | branch, order, sort-buckets, place, judge, cloze, spot-error, match | next-26 |
| robotics/foundational/configuration-space | match, cloze, spot-error, sort-buckets, compare, place, order, estimate | next-26 |
| social-work/foundational/the-social-work-profession | sort-buckets, match, cloze, order, spot-error, judge, compare, branch | next-26 |
| sociology/advanced/globalisation-and-society | timeline, judge, sort-buckets, match, estimate, spot-error, judge, compare | next-26 |
| sociology/advanced/social-networks | match, cloze, order, sort-buckets, judge, compare, spot-error, compare | next-26 |
| sociology/expert/demography | judge, branch, match, place, cloze, estimate, compare, sort-buckets | next-26 |

**98 activities across 12 lessons; every lesson has >=6 distinct types (6–8), no same-type adjacent
paragraphs, <=2 answer-family widgets (predict/judge/cloze).** Religious-studies content is treated
descriptively and even-handedly throughout (branch nodes present insider and outsider answers without
grading them); respiratory-therapy content stays clinical (triage branch, ABG ranges, exam-move audit,
lab panel, oxycurve breakpoint).

All 12 lessons use the Widget component; insert-only via pipeline/insert_activities.py (existing prose,
headings, widgets, frontmatter and Check-yourself quizzes untouched — several lessons already carried
fig-1/fig-2 widgets (equationStep, sliderLab, timeline, quiz) and new fig numbers continue past the
lesson max). Anchor uniqueness, figure containment and name collision all verified by the script;
quality bars re-verified post-insert by an independent scan of widget lines.

Batches: batch-buddhism, batch-christianity, batch-hinduism, batch-islam, batch-judaism,
batch-studying-religion-academically, batch-cardiopulmonary-assessment, batch-configuration-space,
batch-the-social-work-profession, batch-globalisation-and-society, batch-social-networks,
batch-demography (all in pipeline/batches/auto/).
