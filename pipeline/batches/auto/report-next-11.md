# chunk-next-11 report — P1 per-paragraph activity backfill (12 lessons: languages/advanced, law, library-science, linguistics)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch, all clean on final run).
All 12 pages use the Widget component (no raw figure markup, so no figure
conversion/renumbering was needed); every lesson's fig numbers continue past its
pre-existing max (2–9, and 3–10 for international-law which already had a quiz at no=2).
Three anchors needed replacement before insertion (writing-systems' takeaways repeated the
"invented independently" sentence; two anchors crossed inline `<strong>` tags in
writing-systems and international-law). Check-yourself quizzes and pre-existing
equationStep/quiz widgets untouched; activities were steered around every quiz question —
e.g. international-law avoids custom's-two-elements, jus-cogens-non-signatory, Chapter-VII
and Henkin-mechanism questions; sources-of-law drops Fisher v Bell from its interpretation
match so the quiz keeps it; how-a-case avoids the disclosure-settles, limitation-deadline
and jury-verdict questions; criminal-vs-civil avoids the both-cases-proceed, actus/mens and
civil-settlement questions; psycholinguistics avoids the wug-test, "I goed" and NSL
questions. Quality bar held per lesson: ≥6 distinct types, no same-type on adjacent
paragraphs, ≤2 answer-family widgets (predict/judge/cloze), all facts and figures grounded
in the lesson's own paragraphs.

| lesson | types | next-11 |
|---|---|---|
| languages/advanced/register-idiom-and-slang | match, sort-buckets, estimate, spot-error, branch, compare, match, predict | next-11 |
| languages/advanced/translation-versus-interpretation | match, spot-error, compare, order, estimate, sort-buckets, branch, cloze | next-11 |
| languages/advanced/writing-systems-of-the-world | timeline, match, spot-error, estimate, sort-buckets, estimate, order, match | next-11 |
| law/expert/international-law | estimate, match, branch, sort-buckets, spot-error, match, predict, compare | next-11 |
| law/expert/jurisprudence-what-is-law | match, compare, branch, sort-buckets, estimate, spot-error, match, place | next-11 |
| law/foundational/what-makes-a-law | sort-buckets, order, compare, judge, order, spot-error, match, cloze | next-11 |
| law/intermediate/criminal-vs-civil-law | match, place, predict, sort-buckets, order, estimate, compare, match | next-11 |
| law/intermediate/how-a-case-moves-through-court | match, order, branch, sort-buckets, judge, match, compare, order | next-11 |
| law/intermediate/sources-of-law | estimate, match, estimate, spot-error, match, sort-buckets, predict, compare | next-11 |
| library-science/foundational/foundations-of-library-science | spot-error, timeline, predict, estimate, order, cloze, match, sort-buckets | next-11 |
| linguistics/advanced/historical-linguistics | match, spot-error, order, estimate, predict, compare, judge, branch | next-11 |
| linguistics/advanced/psycholinguistics-and-acquisition | order, match, spot-error, branch, place, judge, cloze, order | next-11 |

Totals: 12 lessons, 96 activities (8 per lesson), all inserts verified by the script
(frontmatter consts + Widget lines, fig numbers sequential in document order).
