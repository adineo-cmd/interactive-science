# chunk-next-8 report — P1 per-paragraph activity backfill (12 lessons)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch, all clean on final run;
anchor dry-runs were checked first and 4 anchors were reworded before insertion — two
crossed inline `<strong>`/`<em>` tags, one duplicated its own config text, one used a
phrase that also appears in the lesson's key takeaways). All 12 pages use the Widget
component (no raw figure markup in this chunk, so no figure conversion/renumbering was
needed); every lesson's fig numbers continue past its pre-existing max (2–9 or 3–10).
Check-yourself quizzes and pre-existing widgets untouched; activities were steered clear
of each lesson's existing quiz/Check-yourself questions (e.g. Versailles avoids the
Big-Three wants/gets and the Diktat questions; HVAC avoids the GFI-compare and
oversized-AC questions; control charts avoids the four-fifths lifting-test arithmetic).

| lesson | types | next-8 |
|---|---|---|
| history/intermediate/the-islamic-golden-age | match, order, spot-error, sort-buckets, timeline, branch, compare, estimate | next-8 |
| history/intermediate/the-league-of-nations | predict, match, branch, order, sort-buckets, estimate, spot-error, compare | next-8 |
| history/intermediate/the-treaty-of-versailles | predict, match, spot-error, compare, estimate, place, order, branch | next-8 |
| history/intermediate/unification-of-italy-and-germany | match, sort-buckets, order, compare, estimate, spot-error, plotter, branch | next-8 |
| horticulture/foundational/knowing-plants-classification-and-structure | place, match, sort-buckets, spot-error, compare, sort-buckets, branch, predict | next-8 |
| hospitality-tourism/foundational/global-tourism | judge, match, estimate, cloze, sort-buckets, spot-error, branch, compare | next-8 |
| human-resources/foundational/hr-s-role-and-legal-foundations | match, plotter, sort-buckets, branch, compare, spot-error, judge, match | next-8 |
| hvac/foundational/safety-and-the-science-of-air | predict, cloze, order, place, spot-error, match, sort-buckets, branch | next-8 |
| illustration/foundational/drawing-as-illustration-s-root | match, predict, spot-error, place, compare, sort-buckets, branch, order | next-8 |
| industrial-engineering/foundational/statistics-quality-and-control-charts | place, match, cloze, predict, sort-buckets, trace, estimate, match | next-8 |
| information-technology/foundational/types-and-components-of-computer-systems | match, sort-buckets, order, sort-buckets, spot-error, match, branch, estimate | next-8 |
| interior-design/foundational/interior-design-fundamentals | estimate, sort-buckets, match, predict, compare, place, judge, order | next-8 |

96 activities total (8 per lesson). Verified by script after insertion: 8 activities per
lesson, 6–8 distinct types each, ≤2 answer-family widgets (predict/judge/cloze) per
lesson, no same type on adjacent activity paragraphs, fig numbers sequential per lesson.
Innovative/manipulate widgets used where content allowed: plotter (unification railway
growth 5,900→19,000 km; HR turnover cost curve 37500×departures), trace (Cpk tent curve
4/3 − |x−500|/1.5 as the process mean drifts), timeline (bimaristan centuries 900–1650);
global-tourism and control-charts already carried a plotter, so they got
branch/compare/estimate work instead. History flavours leaned on
order/match/compare/branch; the science-flavoured lessons (horticulture, HVAC) on
place/cloze/sort-buckets. All configs grounded in each lesson's own paragraphs and
numbers (1,089 redshirts, 132 bn gold marks ≈ £6.6bn, 4.2 trillion marks/$, 72% trade
collapse, 1.46 bn arrivals, $37,500×40 = $1.5m, 2.26 MJ latent heat, the (100−RH)/5
dew-point estimate, 114 bn M1 Ultra transistors, the 4–8 m work triangle, 90/60/150 cm
clearances, etc.); no invented facts.
