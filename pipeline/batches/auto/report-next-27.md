# chunk-next-27 — per-paragraph activity backfill (12 lessons, 96 activities)

| Lesson | Types | Chunk |
|---|---|---|
| sociology/expert/social-theory-marx-to-bourdieu | order, match, branch, judge, spot-error, compare, predict, match | next-27 |
| sociology/foundational/society-socialisation | match, spot-error, order, compare, branch, predict, judge, sort-buckets | next-27 |
| sociology/intermediate/class-and-stratification | sort-buckets, branch, cloze, place, match, spot-error, estimate, plotter | next-27 |
| sociology/intermediate/deviance-and-crime | match, place, cloze, spot-error, match, judge, sort-buckets, branch | next-27 |
| sociology/intermediate/gender-and-society | sort-buckets, match, spot-error, sort-buckets, compare, cloze, place, spot-error | next-27 |
| sociology/intermediate/race-ethnicity-and-identity | match, judge, estimate, compare, spot-error, cloze, place, sort-buckets | next-27 |
| software-engineering/foundational/software-requirements | sort-buckets, match, spot-error, branch, cloze, judge, compare, estimate | next-27 |
| special-education/foundational/special-education-law-and-the-iep | timeline, compare, spot-error, judge, sort-buckets, order, cloze, estimate | next-27 |
| speech-therapy/foundational/speech-and-hearing-sciences | place, match, sort-buckets, cloze, spot-error, compare, predict, branch | next-27 |
| sports-science/advanced/biomechanics | estimate, place, judge, order, trace, plotter, judge, estimate | next-27 |
| sports-science/advanced/periodisation-and-programming | compare, sort-buckets, match, estimate, spot-error, order, place, branch | next-27 |
| sports-science/expert/long-term-athlete-development | compare, judge, sort-buckets, spot-error, timeline, cloze, branch, match | next-27 |

**96 activities across 12 lessons; every lesson has >=6 distinct types (6–8), no same-type adjacent
paragraphs, <=2 answer-family widgets (predict/judge/cloze).** All configs are grounded in each
lesson's own facts and numbers (e.g. the stratification r-vs-g plotter at 4–5% vs 1–2%, biomechanics'
137 N biceps bill and 0.18v³ drag-power curve, the speech-sciences 5–10 cm H2O subglottal pressure and
F1/F2 numbers, the special-ed 1954→2004 rights timeline and 60-day evaluation clock). Manipulate-type
widgets (plotter, trace, place, estimate, timeline) appear in every lesson; Check-yourself quizzes are
untouched and no activity duplicates their questions (e.g. the relative-age-effect quiz item steered
the LTAD sort's why-line away from the correctives answer).

All 12 lessons use the Widget component; insert-only via pipeline/insert_activities.py (existing prose,
headings, widgets, frontmatter untouched — new fig numbers continue past each lesson's max: 2–9 where
a lesson carried fig 1, 3–10 where it carried figs 1–2). Anchor uniqueness, paragraph containment and
name collision all verified by the script; anchor-in-<p>, non-stacking, adjacency, distinct-type and
answer-family bars re-verified post-insert by an independent scan of the widget lines.

Batches: batch-social-theory-marx-to-bourdieu, batch-society-socialisation, batch-class-and-stratification,
batch-deviance-and-crime, batch-gender-and-society, batch-race-ethnicity-and-identity,
batch-software-requirements, batch-special-education-law-and-the-iep, batch-speech-and-hearing-sciences,
batch-biomechanics, batch-periodisation-and-programming, batch-long-term-athlete-development
(all in pipeline/batches/auto/).
