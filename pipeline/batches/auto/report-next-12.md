# chunk-next-12 report — P1 per-paragraph activity backfill (12 lessons: linguistics + literature/advanced)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch; three anchors needed
replacing on first run — "The suprasegmental layer rides above them" and "scalar"/
"Presupposition"/"constrained" wrappers sat inside `<strong>`/`<em>` tags, and the
phonology Hawaiian anchor straddled a line break — all fixed and re-run clean; the
insert script's uniqueness check caught each one before writing). All 12 pages use
the Widget component (no raw figure markup, so no figure conversion/renumbering was
needed); every lesson's fig numbers continue past its pre-existing max (2–9, or 3–10
on the four lessons that already carried a no="2" quiz). Check-yourself quizzes and
pre-existing equationStep/timeline/quiz widgets untouched; activities were steered
around every quiz question — e.g. morphology avoids the unbelievably-count,
teacher/taught and ev-ler-iniz-den questions; phonetics avoids the [s]/[z]
coordinates, the vowel-chart and /pɪn/ vs [pʰɪn] questions; phonology avoids the
minimal-pair, allophone-signature, wug and sutoraiku questions; semantics avoids the
scalar-implicature, stopped-cheating, reference-letter and salt questions; syntax
avoids the substitution-test, telescope and what-movement questions; literary theory
avoids the lens-objects, Victorian-inheritance and anything-goes questions;
comparative literature avoids the flood-vs-convergent, Venuti/Fitzgerald and
Damrosch questions.

| lesson | types | next-12 |
|---|---|---|
| linguistics/advanced/sociolinguistics | sort-buckets, spot-error, trace, match, branch, compare, order, judge | next-12 |
| linguistics/expert/computational-linguistics | plotter, estimate, match, sort-buckets, spot-error, order, compare, timeline | next-12 |
| linguistics/expert/generative-grammar | match, compare, sort-buckets, spot-error, order, judge, cloze, branch | next-12 |
| linguistics/foundational/how-language-works | estimate, match, sort-buckets, spot-error, judge, cloze, order, branch | next-12 |
| linguistics/intermediate/morphology | order, match, sort-buckets, estimate, compare, match, spot-error, place | next-12 |
| linguistics/intermediate/phonetics-and-the-ipa | match, sort-buckets, judge, cloze, order, estimate, spot-error, place | next-12 |
| linguistics/intermediate/phonology | sort-buckets, match, branch, spot-error, estimate, match, compare, judge | next-12 |
| linguistics/intermediate/semantics-and-pragmatics | match, sort-buckets, judge, compare, spot-error, order, judge, branch | next-12 |
| linguistics/intermediate/syntax-trees-and-rules | match, spot-error, place, judge, order, branch, sort-buckets, compare | next-12 |
| literature/advanced/literary-theory | match, sort-buckets, spot-error, match, compare, judge, order, branch | next-12 |
| literature/advanced/modernism-and-postmodernism | match, spot-error, match, order, sort-buckets, judge, branch, sort-buckets | next-12 |
| literature/expert/comparative-literature | match, spot-error, sort-buckets, compare, judge, match, estimate, spot-error | next-12 |

96 activities total (8 per lesson). Verified by script after insertion: 8 activities per
lesson, ≥6 distinct types each (6–8), ≤2 answer-family widgets (predict/judge/cloze) per
lesson, no same type on adjacent activity paragraphs, fig numbers unique per lesson.
Innovative/manipulate widgets used where content allowed: plotter (Zipf's 7/x rank curve
with "the" at rank 1 ≈ 7% marked), trace (the 62/51/20 department-store /r/ gradient vs
flat, inverted and too-steep distractors), timeline (statistical NLP 1990 IBM/Hansard →
2002 BLEU → 2006 Google Translate → 2013 word2vec → 2018 ELMo/BERT). Linguistics
flavours leaned on the machinery the lessons teach (order the derivation, sort the
parameters and manners, place the inventory counts, branch through the diagnostics);
literature flavours leaned on match/spot-error/branch/order (pairing lenses with cases,
finding the line a theory would correct, walking a reading decision, sequencing Propp's
functions and the three tellings of one street). All configs grounded in each lesson's
own paragraphs and numbers: 62/51/20% r-pronunciation, ~44 phonemes, Hawaiian's 8
consonants and 13 sounds, Finnish's 15 cases, Cantonese's 6 tones, roughly 12
monophthongs, Shannon's ~1 bit per character, Khoisan inventories past 100, 25–30% vs
~5% word error rates, the 35%-vs-19% Koenecke audit, ~7,000 living languages, 7000-language
estimate, 756 full-Bible languages with ~1,800 New Testaments and 3,200+ in progress,
Propp's absentation→reward sequence, Molly Bloom's ~24,000 words in eight sentences,
English's ~6 productive inflectional endings, comprehension giving out at two nestings —
no invented facts.
