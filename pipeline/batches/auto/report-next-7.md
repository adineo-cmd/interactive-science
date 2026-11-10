# chunk next-7 — history P1 backfill report

12 history lessons, 8 per-paragraph activities each (96 total), inserted via
`pipeline/insert_activities.py` from `batch-<last-slug-part>.json` files in this directory.
Bars verified by script: ≥6 distinct types per lesson, no same-type on adjacent paragraphs,
≤2 answer-family widgets (predict/judge/cloze) per lesson, anchors unique plain-text inside
their target `<p>`, configs grounded in each lesson's own facts, "Check yourself" untouched,
insert-only (existing prose/widgets byte-untouched).

`cradles-of-civilisation` is a raw Layout page (no Widget component): its 8 inserted
`<Widget/>` lines were converted to the page's `<figure class="widget">` markup and all
`fig-no` spans renumbered sequentially (fig. 1–9 in document order, pre-existing timeline
included). All other lessons use the Widget component; widget numbering continues past each
lesson's max (the end-of-page "check yourself" quiz keeps its original `no`, per repo
convention seen in prior waves).

| lesson | types | next-7 |
|---|---|---|
| history/foundational/cradles-of-civilisation | match, estimate, spot-error, sort-buckets, cloze, judge, order, compare | next-7 |
| history/foundational/how-historians-work | sort-buckets, order, match, spot-error, branch, predict, cloze, order | next-7 |
| history/foundational/medieval-world | judge, sort-buckets, match, order, match, spot-error, estimate, cloze | next-7 |
| history/foundational/the-cold-war | order, sort-buckets, match, estimate, spot-error, match, order, predict | next-7 |
| history/foundational/the-renaissance-and-reformation | match, spot-error, order, estimate, predict, order, sort-buckets, cloze | next-7 |
| history/foundational/the-world-wars | sort-buckets, match, order, estimate, spot-error, branch, predict, cloze | next-7 |
| history/intermediate/age-of-revolutions | match, predict, order, spot-error, estimate, compare, order, cloze | next-7 |
| history/intermediate/ancient-greece-and-rome | place, sort-buckets, match, order, cloze, estimate, spot-error, compare | next-7 |
| history/intermediate/colonialism-and-empire | order, sort-buckets, match, estimate, spot-error, cloze, compare, judge | next-7 |
| history/intermediate/revolutions-of-1848 | match, estimate, sort-buckets, spot-error, judge, sort-buckets, order, branch | next-7 |
| history/intermediate/the-american-civil-war | estimate, order, match, sort-buckets, estimate, cloze, spot-error, compare | next-7 |
| history/intermediate/the-history-of-science | sort-buckets, order, predict, match, estimate, order, cloze, compare | next-7 |

Batch files: batch-cradles-of-civilisation.json, batch-how-historians-work.json,
batch-medieval-world.json, batch-the-cold-war.json, batch-the-renaissance-and-reformation.json,
batch-the-world-wars.json, batch-age-of-revolutions.json, batch-ancient-greece-and-rome.json,
batch-colonialism-and-empire.json, batch-revolutions-of-1848.json,
batch-the-american-civil-war.json, batch-the-history-of-science.json.
