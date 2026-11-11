# chunk-next-25 — per-paragraph activity backfill (12 lessons: public-administration, public-health, public-relations, radiation-therapy, radiography, real-estate, religious-studies ×6, 96 activities)

| Lesson | Types | Chunk |
|---|---|---|
| public-administration/foundational/the-administrative-state | spot-error, timeline, branch, sort-buckets, cloze, estimate, match, compare | next-25 |
| public-health/foundational/profession-and-science-of-public-health | order, spot-error, sort-buckets, estimate, cloze, branch, judge, match | next-25 |
| public-relations/foundational/what-public-relations-is | timeline, spot-error, sort-buckets, cloze, estimate, judge, match, branch | next-25 |
| radiation-therapy/foundational/therapy-physics-and-the-linac | branch, order, sort-buckets, cloze, place, spot-error, compare, judge | next-25 |
| radiography/foundational/x-ray-physics-and-safety | order, match, sort-buckets, spot-error, estimate, cloze, compare, judge | next-25 |
| real-estate/foundational/property-and-ownership | sort-buckets, judge, sort-buckets, match, spot-error, cloze, estimate, compare | next-25 |
| religious-studies/advanced/myth-ritual-symbol | sort-buckets, cloze, match, compare, judge, sort-buckets, spot-error, order | next-25 |
| religious-studies/advanced/scripture-and-interpretation | timeline, spot-error, sort-buckets, match, judge, cloze, branch, estimate | next-25 |
| religious-studies/expert/philosophy-of-religion | estimate, spot-error, match, cloze, order, match, timeline, branch | next-25 |
| religious-studies/expert/religion-in-the-modern-world | match, spot-error, order, estimate, judge, cloze, compare, sort-buckets | next-25 |
| religious-studies/foundational/worlds-traditions | spot-error, match, sort-buckets, judge, order, cloze, match, estimate | next-25 |
| religious-studies/foundational/worship-sacred-places-and-leaders | sort-buckets, spot-error, match, judge, cloze, order, compare, match | next-25 |

**96 activities across 12 lessons; every lesson has >=6 distinct types (6–8), no same-type adjacent paragraphs, <=2 answer-family widgets (predict/judge/cloze).**
All 12 lessons use the Widget component (no raw-figure conversion needed); insert-only via pipeline/insert_activities.py
(existing prose, headings, widgets and Check-yourself quizzes untouched; fig numbers continue past each lesson's max — 2–9 or 3–10).
Batches: batch-the-administrative-state, batch-profession-and-science-of-public-health, batch-what-public-relations-is,
batch-therapy-physics-and-the-linac, batch-x-ray-physics-and-safety, batch-property-and-ownership, batch-myth-ritual-symbol,
batch-scripture-and-interpretation, batch-philosophy-of-religion, batch-religion-in-the-modern-world, batch-worlds-traditions,
batch-worship-sacred-places-and-leaders (all in pipeline/batches/auto/).
Every activity is grounded in its lesson's own paragraphs and numbers (e.g. Pendleton→FOIA timeline and the 83-year span estimate;
the 400-chest-radiographs-per-CT estimate and the 15%-rule trade compare; the $6m/96m-viewer ≈ 6-cents-per-exposure Fermi estimate;
the 200÷0.70 PDD spot-error, d_max place and linac-vs-cobalt-60 buckets; the 400,000/300,000 foreclosure-surplus estimate;
canon-closing dates 367/393/397/650 and the Dead-Sea-Scrolls-vs-Leningrad-Codex gap; the ~1.8 million Hajj pilgrims estimate and
zakat/nisab/sadaqah cloze; the Vedas-to-1893-Parliament ~3,400-year span; the misbaha/bimah/tallit pairings).
Religious-studies content is treated descriptively and even-handedly throughout — academic comparative method, no verdicts on
truth; radiation-therapy and radiography content stays at physics-and-procedure level with no graphic clinical detail.
Check-yourself questions were never duplicated (per-lesson conflict scan done during design; e.g. MU-division and fourfold-sense
questions avoided in favour of distinct interactions).
Not done (main thread owns): npm run build, git commit/push, ACTIVITIES-LEDGER.md update.
