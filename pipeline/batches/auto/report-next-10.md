# chunk-next-10 report — P1 per-paragraph activity backfill (12 lessons: languages + law)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch, all clean on final run;
anchors were whitespace-tolerant grep-checked first — one replacement was needed when
"the opposite of the goal" turned out to appear twice in speaking-and-shadowing, and
contracts/property/torts anchors were chosen to avoid each lesson's pre-existing quiz
case names). All 12 pages use the Widget component (no raw figure markup, so no figure
conversion/renumbering was needed); every lesson's fig numbers continue past its
pre-existing max (2–9 or 3–10). Check-yourself quizzes and pre-existing equationStep/
plotter/quiz widgets untouched; activities were steered around every quiz question —
e.g. contracts avoids the Boots display, the charity bare-promise, the Hadley £50k/£20k
arithmetic and efficient breach; property avoids the estate-bundle, patent-bargain,
idea/expression and adverse-possession questions; torts avoids the snail, the Hand
£2m/2% computation, the eggshell skull and Fairchild; how-to-learn avoids the 45%-podcast,
leech-free SRS and l/r questions; the languages lessons avoid their quizzes'
chunk/loop/fossilised questions.

| lesson | types | next-10 |
|---|---|---|
| languages/expert/multilingual-cognition | estimate, sort-buckets, place, spot-error, match, branch, order, compare | next-10 |
| languages/expert/near-native-fluency | spot-error, estimate, place, order, compare, sort-buckets, match, branch | next-10 |
| languages/foundational/how-to-learn-any-language | judge, estimate, branch, spot-error, trace, match, order, predict | next-10 |
| languages/intermediate/grammar-without-tears | sort-buckets, spot-error, predict, order, match, judge, estimate, compare | next-10 |
| languages/intermediate/listening-comprehensible-input | estimate, match, place, branch, sort-buckets, order, spot-error, match | next-10 |
| languages/intermediate/pronunciation-and-the-ipa | match, predict, cloze, spot-error, compare, order, match, compare | next-10 |
| languages/intermediate/speaking-and-shadowing | match, order, compare, estimate, branch, sort-buckets, predict, spot-error | next-10 |
| languages/intermediate/your-first-1000-words | plotter, sort-buckets, match, predict, cloze, estimate, spot-error, order | next-10 |
| law/advanced/contracts | match, branch, sort-buckets, spot-error, cloze, compare, predict, estimate | next-10 |
| law/advanced/property-law | match, sort-buckets, place, predict, match, estimate, spot-error, order | next-10 |
| law/advanced/torts-and-liability | sort-buckets, plotter, judge, match, sort-buckets, spot-error, compare, predict | next-10 |
| law/expert/comparative-legal-systems | match, compare, sort-buckets, branch, spot-error, predict, timeline, match | next-10 |

96 activities total (8 per lesson). Verified by script after insertion: 8 activities per
lesson, ≥6 distinct types each (6–8), ≤2 answer-family widgets (predict/judge/cloze) per
lesson, no same type on adjacent activity paragraphs, fig numbers sequential per lesson.
Innovative/manipulate widgets used where content allowed: plotter (the 1,000-words
coverage curve 100·x/(x+k) with lesson milestones at 1k/2k/5k words; the Hand formula
P×L vs B with probability sliders — breach begins at the crossing), trace (the SRS
forgetting curves, exp(−0.6x) vs exp(−0.1x) with returns at 1/3/7/16 days), timeline
(codification 1804 Code civil → 1900 BGB → 1933 Enabling Act → 1965 Law Commission →
2016 recodification). Law flavours leaned on match/sort-buckets/branch/spot-error
(doctrine pairing, filing fact patterns, deciding the dispute, finding the wrong line);
languages leaned on the input-pipeline machinery (order the protocol, place the
threshold, call the magnitude). All configs grounded in each lesson's own paragraphs and
numbers: 43% of humanity bilingual, ~2,200 FSI hours, 8,000–9,000 word families, 15–20
daily SRS minutes maintaining thousands, intervals 1/3/7/16 days, 60–750 vs 2,200 FSI
hours, 8–10 shadow repetitions per 60–90 s clip, forty minutes of your voice per paid
hour, 20 new cards a day for ninety days, 1,200–1,500 words by day 90, Carlill's £100/£1,000
smoke-ball deposit, Hyde v Wrench's 1,000/950 lathe, the builder's £300k/£200k/£60k cure
cost, 12 years' adverse possession, the £800m/£20m drug arithmetic, Finland's fifteen
cases, Zulu contrasts at ~95/80/65%, comí vs comía, Ship/Sheep across five speakers —
no invented facts.
