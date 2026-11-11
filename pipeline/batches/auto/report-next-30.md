# chunk-next-30 — per-paragraph activity backfill (11 lessons, 87 activities)

| Lesson | Types | Chunk |
|---|---|---|
| visual-arts/advanced/figure-drawing-and-anatomy | sort-buckets, order, spot-error, place, match, compare, branch, cloze | next-30 |
| visual-arts/advanced/painting-mediums | match, estimate, order, compare, sort-buckets, judge, match, cloze | next-30 |
| visual-arts/expert/critique-and-art-discourse | branch, match, cloze, judge, sort-buckets, spot-error, compare | next-30 |
| visual-arts/expert/developing-a-personal-style | match, order, branch, estimate, cloze, spot-error, place, compare | next-30 |
| visual-arts/foundational/value-colour-composition | sort-buckets, order, match, compare, cloze, spot-error, place, branch | next-30 |
| visual-arts/intermediate/colour-theory | order, cloze, sort-buckets, spot-error, compare, match, estimate, order | next-30 |
| visual-arts/intermediate/drawing-from-observation | sort-buckets, estimate, match, order, compare, branch, cloze, spot-error | next-30 |
| visual-arts/intermediate/line-shape-and-value | match, sort-buckets, order, cloze, spot-error, compare, branch, judge | next-30 |
| visual-arts/intermediate/perspective-and-depth | match, order, sort-buckets, spot-error, compare, branch, judge, cloze | next-30 |
| welding/foundational/welding-safety-first | estimate, match, order, place, match, spot-error, branch, judge | next-30 |
| zoology/foundational/the-animal-condition | match, sort-buckets, order, spot-error, compare, cloze, judge, estimate | next-30 |

**87 activities across 11 lessons; every lesson has 7–8 distinct types, no same-type widgets on
adjacent paragraphs, no paragraph hosting two widgets, <=2 answer-family widgets (predict/judge/cloze:
six lessons carry 1, five carry 2).** All configs grounded in each lesson's own facts (the 7½–8-head
canon and eyes-at-midpoint; Muybridge's 1878 gallop; the (2/3)³ ≈ 30% glaze stack; Rand's 1841 tin
tube; Chevreul's 1839 simultaneous contrast; Feldman's four movements; the curator's fifth-to-a-third
rule; the 20–40% final-selection cut; Brunelleschi's 1420s mirror and Alberti's 1435 codification;
the inverse-distance 1.8 m figures; Holbein's 1533 anamorphic skull; the 6,000 °C arc and shade
10–13 plates; the 11 m clearing radius; acetylene above 15 psi; choanoflagellate collar cells;
acoelomate/pseudocoelomate/coelomate; Hox order on the chromosome; the ~30 phyla). "Check yourself"
sections and their quiz widgets untouched; inserts only — no prose, headings, frontmatter or
pre-existing widgets modified. All 11 pages use the Widget component (no raw-figure conversion needed).
Three initial placements that would have stacked a widget onto a paragraph already hosting the lesson's
pre-existing equationStep/timeline widget (figure-drawing-and-anatomy, painting-mediums,
value-colour-composition) were relocated to neighbouring source-appropriate paragraphs and renumbered
into document order; the zoology spot-error sits between its paragraph and the lesson's h2-hosted
widget and needed no move. Batch files: pipeline/batches/auto/batch-<slug>.json (one per lesson); all
inserted cleanly with pipeline/insert_activities.py (dry-run first, then real run) on first or second
attempt — two anchor rejections (duplicate or tag-crossing snippets) fixed before insertion.
