# chunk-next-28 — per-paragraph activity backfill (12 lessons, 95 activities)

| Lesson | Types | Chunk |
|---|---|---|
| sports-science/expert/testing-and-analytics-in-elite-sport | compare, trace, match, sort-buckets, place, branch, estimate, order | next-28 |
| sports-science/foundational/training-load-adaptation | order, branch, compare, timeline, estimate, spot-error, sort-buckets, match | next-28 |
| sports-science/intermediate/muscles-and-energy-systems | order, sort-buckets, estimate, place, trace, match, compare, spot-error | next-28 |
| sports-science/intermediate/nutrition-for-performance | sort-buckets, order, estimate, place, match, estimate, spot-error, judge | next-28 |
| sports-science/intermediate/strength-and-hypertrophy | match, branch, cloze, sort-buckets, order, spot-error, judge, compare | next-28 |
| sports-science/intermediate/the-heart-and-lungs-in-exercise | estimate, judge, sort-buckets, place, order, compare, spot-error, match | next-28 |
| statistics/advanced/bayesian-statistics | match, compare, spot-error, estimate, order, trace, estimate, sort-buckets | next-28 |
| statistics/advanced/experimental-design | order, judge, sort-buckets, match, estimate, branch, spot-error, compare | next-28 |
| statistics/advanced/non-parametric-methods | order, sort-buckets, spot-error, cloze, match, estimate, branch, judge | next-28 |
| statistics/advanced/time-series-analysis | sort-buckets, order, judge, match, estimate, spot-error, compare | next-28 |
| statistics/expert/causal-inference | match, compare, trace, order, spot-error, judge, estimate, sort-buckets | next-28 |
| statistics/expert/multivariate-statistics | match, order, estimate, sort-buckets, estimate, cloze, branch, estimate | next-28 |

**95 activities across 12 lessons; every lesson has >=6 distinct types (7–8), no same-type adjacent
paragraphs, <=2 answer-family widgets (predict/judge/cloze).** All configs grounded in each lesson's
own facts and worked numbers (Literary Digest 1936, Anscombe's quartet r = 0.816, the 1-in-10,000
medical-test tree, Beta(8,4)/Beta(9,4) priors, the 142-per-arm power calculation and 6.9 design
effect, Galton's r = 0.5, 13-variable PCA at 60% + 20%, GPS 10 Hz over 90 minutes, PCr's 6–10 s
tank, the 400 m energy mix). "Check yourself" sections and their quiz widgets untouched; inserts
only — no prose, headings, frontmatter or existing widgets modified. All pages use the Widget
component (no raw-figure conversion needed). Batch files: pipeline/batches/auto/batch-<slug>.json
(one per lesson); all inserted cleanly with pipeline/insert_activities.py on first run.
