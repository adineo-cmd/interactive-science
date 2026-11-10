# next-13a report — P1 per-paragraph activity backfill (6 lessons: IR + landscape-architecture + literature ×4)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, each inserted with one run of
`python3 -I pipeline/insert_activities.py` — all five runs succeeded first time (40 anchors were
grep/whitespace-normalisation pre-checked for uniqueness, no first-run anchor failures). All six
pages use the Widget component (no raw figure markup, so no figure conversion/renumbering was
needed); fig numbers continue past each lesson's pre-existing max (IR and close-reading 3–10,
landscape/textual-criticism/how-to-read-a-story 2–9). Check-yourself quizzes, pre-existing
timeline/equationStep/plotter/quiz widgets and all prose untouched; activities were steered around
every quiz question — IR avoids the anarchy-definition, coordination-vs-cooperation-why and two-war-mechanisms
questions (the climate branch and tariff branch ask which-lens/deeper-lever decisions instead);
landscape avoids the inventory-vs-analysis, bubble-diagram, 0.9 m-over-18 m and English/Japanese-contribution
questions; textual criticism avoids the stemmatic-principle, homoeoteleuton and socialized-text questions;
how-to-read-a-story avoids the inciting-incident, setting-as-argument, brave-narrator-gap and short-story-economy
questions; close-reading avoids the slender/scrawny, intentional-fallacy, quotation-analysis and
Faulkner/Hemingway questions (its estimate uses the lesson's own "sleep"-count instead).

Note on figures-of-speech: already complete when this chunk started — `batch-figures-of-speech.json`
(8 activities: timeline, sort-buckets, match, branch, spot-error, compare, order, cloze) had been
inserted into the page earlier the same day by a parallel batch. Verified against every bar (8 distinct
types, 1 answer-family, no adjacent repeats) and left untouched rather than crowding the lesson.

Tone rule honoured on the IR lesson: all activity text treats conflict/cooperation abstractly
("two states restrict each other's goods", "collective security", "prisoner's dilemma",
"the 1904 war"-style naming avoided in favour of the lesson's own abstractions) with no graphic detail.

| lesson | types | next-13a |
|---|---|---|
| international-relations/foundational/frameworks-for-understanding-international-relations | match, spot-error, sort-buckets, branch, compare, order, judge, branch | next-13a |
| landscape-architecture/foundational/landscape-design-process | predict, sort-buckets, order, match, estimate, order, spot-error, timeline | next-13a |
| literature/expert/textual-criticism-and-editing | match, branch, order, spot-error, cloze, sort-buckets, compare, estimate | next-13a |
| literature/foundational/how-to-read-a-story | order, predict, sort-buckets, match, judge, branch, order, timeline | next-13a |
| literature/intermediate/close-reading | order, cloze, match, sort-buckets, estimate, compare, judge, branch | next-13a |
| literature/intermediate/figures-of-speech | timeline, sort-buckets, match, branch, spot-error, compare, order, cloze (pre-inserted by batch-figures-of-speech.json — verified, not modified) | next-13a |

40 new activities across the 5 lessons this chunk inserted (8 each) + 8 pre-existing in figures-of-speech
= 48 live in the chunk. Verified by script after insertion: 8 activities per lesson, ≥6 distinct types
(7–8), ≤2 answer-family widgets (predict/judge/cloze) per lesson, no same type on adjacent activity
paragraphs, fig numbers unique per lesson, all config consts JSON-parseable, every inserted widget seated
directly after its anchor paragraph's `</p>`.

Innovative/manipulate widgets used where content allowed: timeline (landscape canon 1660→1969; the novel's
development 1605 Don Quixote → 1719 Crusoe → 1740 Pamela → 1813 Pride and Prejudice → 2022 When We Were
Birds), estimate (walkway run needed at the 5 per cent comfortable maximum: 0.45 ÷ 0.05 = 9 m; Macbeth's
30+ "sleep" mentions; the NT's 200,000–400,000 variants against ~5,800 manuscripts), branch (pick the lens
for a tariff dispute; design the climate regime's lever; edit Hamlet across Q1/Q2/Folio; diagnose an
unearned climax; name-the-figure-then-its-job), compare (single-actor shortcut vs three levels of analysis;
date vs lineage in manuscript faithfulness; decoration vs claim in imagery). All configs grounded in each
lesson's own paragraphs and numbers: 1648/1815/1920/1945/1947/2015 milestones, Fearon's two mechanisms (named
in why-notes, never quizzed), 1,300 Mahabharata manuscripts, Venetus A, Hamlet's 1603/1604–5/1623 texts,
Max Brod/1925, Ehrman's count, ~140,000 words, Freytag's five parts, Forster's flat/round, Genette's
focalisation, 26-word Austen sentence, 400 pages, nearly 1,800 Dickinson variants, kids/children/offspring/brats,
Anglo-Saxon vs Latinate word lists, tenor/vehicle, 0.45 m over 15 m and the 5 per cent maximum, canopy →
groundcover layers, 1–2 per cent fall, Le Nôtre's 1660s Versailles, Olmsted and Vaux's 1858 Greensward win,
McHarg's 1969 Design with Nature — no invented facts.
