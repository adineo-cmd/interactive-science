# chunk-next-5 report — P1 per-paragraph activity backfill (12 lessons)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch, all clean on final run —
no failed insertions anywhere in the chunk). 11 of 12 pages use the Widget component.
`geography/foundational/latitude-and-climate` is a raw Layout page (`<figure class="widget">`
+ `data-widget` divs): its 8 inserted `<Widget>` lines were converted to the page's raw
figure markup (`<figcaption><span class="fig-no">…` + `data-config={JSON.stringify(name)}`)
and all fig-no spans renumbered sequentially in document order (now fig. 1–11; the three
pre-existing figures kept their inner markup untouched apart from the renumber). Every
lesson's fig numbers continue past its pre-existing max. Check-yourself quizzes (including
the two geography quiz widgets) and pre-existing widgets untouched; activities were
steered clear of each lesson's quiz questions.

| lesson | types | next-5 |
|---|---|---|
| finance/intermediate/time-value-of-money-npv | compare, trace, place, estimate, sort-buckets, branch, match, spot-error | next-5 |
| food-science/foundational/food-chemistry-fundamentals | compare, spot-error, place, match, sort-buckets, cloze, estimate, branch | next-5 |
| forensic-science/foundational/foundations-of-forensic-science | compare, match, order, sort-buckets, branch, spot-error, estimate, predict | next-5 |
| forestry/foundational/forests-and-forestry | sort-buckets, match, estimate, branch, order, judge, compare, spot-error | next-5 |
| game-development/foundational/game-design-foundations | compare, match, place, sort-buckets, branch, cloze, order, spot-error | next-5 |
| gender-studies/foundational/sex-gender-and-sexuality-the-vocabulary | estimate, sort-buckets, compare, judge, match, spot-error, estimate, branch | next-5 |
| geography/advanced/economic-globalisation | estimate, sort-buckets, estimate, match, order, judge, compare, branch | next-5 |
| geography/advanced/population-and-migration-geography | compare, estimate, judge, spot-error, place, sort-buckets, estimate, predict | next-5 |
| geography/advanced/remote-sensing-and-earth-observation | place, sort-buckets, compare, match, estimate, place, order, branch | next-5 |
| geography/advanced/resource-provision-food-energy | estimate, sort-buckets, spot-error, match, estimate, order, judge, compare | next-5 |
| geography/foundational/ecosystems-and-biomes | compare, sort-buckets, order, judge, place, estimate, match, judge | next-5 |
| geography/foundational/latitude-and-climate | sort-buckets, estimate, place, branch, judge, compare, match, branch | next-5 |

96 activities total (8 per lesson). Verified by script after insertion: 8 activities per
lesson, 7–8 distinct types each, ≤2 answer-family widgets (predict/judge/cloze) per
lesson, no same type on adjacent activity paragraphs, every const + widget mount present
(raw-figure conversion on latitude-and-climate validated: 11 figures, 11 data-widget
divs, frontmatter intact). Trace/plotter-grade manipulation went where content allowed
(trace: the PV decay curve in time-value-of-money). All configs grounded in each lesson's
own paragraphs and numbers (433 W/m² equinox insolation, $5.86→16¢ container handling,
Niger's 3.75%/rule-of-70, Cape Denison 70–80 km/h, Vostok −55 °C mean / −89.2 °C record,
90% of Earth's ice, 150 bn t/yr ice loss, 56.7 °C Death Valley, Mawsynram 11,800 mm,
El Niño record years 1998/2016/2023–24, 2008 free-archive usage to tens of millions of
scenes, NDVI-free instrument choices, 735 million undernourished, 40% of Europe's gas,
Rana Plaza 1,134, soy-moratorium 2006, Butler life-cycle, ILO 169, pink/blue switch,
one-in-1.5-hundred intersex broad count, 82.5¢ pay-gap midpoint, poker's hidden
information, Land's-end fig numbers, etc.); no invented facts.
