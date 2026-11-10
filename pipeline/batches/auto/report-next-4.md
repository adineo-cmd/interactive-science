# chunk-next-4 report — P1 per-paragraph activity backfill (12 lessons)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch, all clean on final run).
All 12 pages use the Widget component (no raw figure markup in this chunk, so no figure
conversion/renumbering was needed); every lesson's fig numbers continue past its
pre-existing max. Check-yourself quizzes and pre-existing widgets untouched; activities
were steered clear of each lesson's existing quiz/Check-yourself questions.

| lesson | types | next-4 |
|---|---|---|
| film/intermediate/shot-sizes-and-camera-grammar | order, predict, match, compare, spot-error, branch, sort-buckets, estimate | next-4 |
| film/intermediate/sound-design-and-score | match, cloze, spot-error, compare, sort-buckets, order, branch, judge | next-4 |
| finance/advanced/corporate-finance | sort-buckets, plotter, branch, spot-error, match, estimate, cloze, compare | next-4 |
| finance/advanced/options-and-derivatives | estimate, match, spot-error, cloze, place, branch, match, predict | next-4 |
| finance/advanced/portfolio-theory-markowitz | trace, match, spot-error, cloze, branch, sort-buckets, predict, estimate | next-4 |
| finance/expert/asset-pricing-models | predict, spot-error, match, estimate, sort-buckets, compare, place, timeline | next-4 |
| finance/expert/behavioural-finance | match, judge, estimate, spot-error, branch, compare, predict, timeline | next-4 |
| finance/foundational/compound-interest | predict, compare, estimate, order, spot-error, sort-buckets, place, match | next-4 |
| finance/intermediate/budgeting-and-personal-finance | sort-buckets, order, match, branch, estimate, cloze, spot-error, compare | next-4 |
| finance/intermediate/diversification-and-portfolios | cloze, spot-error, sort-buckets, compare, estimate, place, branch, timeline | next-4 |
| finance/intermediate/financial-statements | match, order, predict, cloze, sort-buckets, spot-error, order, timeline | next-4 |
| finance/intermediate/stocks-and-bonds | compare, match, place, estimate, predict, spot-error, branch, judge | next-4 |

96 activities total (8 per lesson). Verified by script after insertion: 8 activities per
lesson, 7–8 distinct types each, ≤2 answer-family widgets (predict/judge/cloze) per
lesson, no same type on adjacent activity paragraphs, fig numbers sequential per lesson.
Manipulate/explore widgets used where content allowed: plotter (corporate-finance NPV
profile with crossing detection), trace (portfolio-theory correlation curve vs naive
ceiling), sliderLab-less lessons got compare/branch/timeline instead. All configs
grounded in each lesson's own paragraphs (numbers taken from the worked examples: 926
bond repricing, 17–19% 30-year duration, 11.5 million adults under £100, FCA 0.8%/day
cap, 12.68% effective rate, Save More Tomorrow 3.5→13.6%, etc.); no invented facts.
