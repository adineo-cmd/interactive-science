# report-next-31 — journalism COMPLETE (7 lessons, 50 activities)

| Lesson | Types | Count | Wave |
|---|---|---|---|
| journalism/foundational/verification-before-publication | predict, sort-buckets, order, cloze, spot-error, match, sort-buckets, branch | 8 | next-31 |
| journalism/intermediate/news-vs-opinion-vs-analysis | match, sort-buckets, sort-buckets, spot-error, predict, cloze, compare | 7 | next-31 |
| journalism/intermediate/the-inverted-pyramid | predict, cloze, match, sort-buckets, estimate, spot-error, sort-buckets | 7 | next-31 |
| journalism/intermediate/interviewing | sort-buckets, match, predict, sort-buckets, order, judge, spot-error | 7 | next-31 |
| journalism/advanced/media-law-and-ethics | sort-buckets, predict, sort-buckets, spot-error, estimate, match, branch | 7 | next-31 |
| journalism/advanced/data-journalism | sort-buckets, order, match, predict, spot-error, estimate | 6 | next-31 |
| journalism/expert/investigative-methods | compare, predict, cloze, match, order, estimate, spot-error, branch | 8 | next-31 |

**50 activities across 7 lessons; journalism is 7 of 7 COMPLETE.** Every lesson reaches the
quality bar: 6–8 distinct interaction types, zero same-type widgets on adjacent paragraphs,
no paragraph hosting two widgets, and ≤2 answer-family widgets (predict/judge/cloze). All
configs are grounded in each lesson's own facts — the silence-after-the-question technique;
the two-source rule; the 11.5 million Panama Papers documents processed by ~370 journalists
across ~80 countries; the four editorial questions; the £17.5 million / 4% GDPR ceiling; the
90-cents-to-30-cents charity anomaly; the 11.5 million-document entity-matching pipeline; the
four defamation defences; and the SPJ Code's four pillars.

**Completion notes.** The six already-inserted lessons were audited before this wave:
news-vs-opinion-vs-analysis and media-law-and-ethics were each one distinct type short of the
≥6 bar, so each received one supplemental activity (`nvWallCompare` — compare; `mlSlappBranch`
— branch) anchored in existing prose. The remaining expert lesson, investigative-methods, was
designed from scratch with 8 activities (compare, predict, cloze, match, order, estimate,
spot-error, branch) covering the paper-gap pipeline, the evidence interview, the bulletproofing
pass, leaked-data ethics and the publication decision. The lesson's pre-existing equationStep
and its Check-yourself sections are untouched; inserts only.

Batch files: `pipeline/batches/auto/batch-<lesson>.json` for the six original lessons plus
`batch-investigative-methods.json`, `batch-news-vs-opinion-supplement.json` and
`batch-media-law-supplement.json`. All inserted cleanly with `pipeline/insert_activities.py`
(dry-run first, then real run) — two anchor rejections (duplicate text and an emphasis-tag
crossing) were fixed before insertion. `npm run build` is green (742 pages), and the built
HTML carries every widget: verification 8, news 7, inverted-pyramid 7, interviewing 7,
media-law 7, data-journalism 6, investigative-methods 8.
