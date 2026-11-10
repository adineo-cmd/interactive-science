# chunk-next-17 report — P1 per-paragraph activity backfill (12 lessons: materials-science ×5, medicine ×5, meteorology, microbiology)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch). All 12 pages use the
Widget component (no raw figure markup, so no figure conversion/renumbering was needed).
Fig numbers continue past each lesson's pre-existing max: 3–10 on the seven lessons with a
fig-1 equationStep plus an end-of-page quiz (heat-treatment, phase-diagrams,
semiconductors-and-doping, heart-circulation, the-atmosphere-and-its-energy,
the-microbial-world) or a fig-1 timeline plus a fig-2 equationStep; 2–9 on the five
lessons whose only prior widget was a fig-1 equationStep or sliderLab and which have no
quiz widget (computational-materials-design, nanomaterials-and-biomaterials,
how-doctors-think, infection-and-antibiotics, pharmacology-basics,
public-health-and-epidemiology).

All five medicine lessons kept strictly clinical/academic activity text — physiology,
pharmacology, epidemiology and emergency-response framing described abstractly
(the patient, populations, organ function, drug arithmetic), no graphic detail.

| Lesson | Types | Chunk |
|---|---|---|
| materials-science/advanced/heat-treatment | order, spot-error, place, estimate, judge, sort-buckets, match, branch | next-17 |
| materials-science/advanced/phase-diagrams | match, compare, order, estimate, place, sort-buckets, trace, branch | next-17 |
| materials-science/advanced/semiconductors-and-doping | sort-buckets, compare, match, order, estimate, branch, judge, spot-error | next-17 |
| materials-science/expert/computational-materials-design | place, match, sort-buckets, order, estimate, predict, branch, judge | next-17 |
| materials-science/expert/nanomaterials-and-biomaterials | spot-error, compare, place, sort-buckets, estimate, order, match, branch | next-17 |
| medicine/foundational/heart-circulation | estimate, sort-buckets, order, branch, judge, match, cloze, order | next-17 |
| medicine/intermediate/how-doctors-think | estimate, branch, match, estimate, sort-buckets, spot-error, judge, cloze | next-17 |
| medicine/intermediate/infection-and-antibiotics | sort-buckets, cloze, match, spot-error, predict, branch, compare, estimate | next-17 |
| medicine/intermediate/pharmacology-basics | order, estimate, place, predict, match, spot-error, sort-buckets, estimate | next-17 |
| medicine/intermediate/public-health-and-epidemiology | order, judge, match, sort-buckets, estimate, trace, branch, cloze | next-17 |
| meteorology/foundational/the-atmosphere-and-its-energy | compare, estimate, sort-buckets, match, place, spot-error, estimate, cloze | next-17 |
| microbiology/foundational/the-microbial-world | judge, compare, spot-error, sort-buckets, predict, match, branch, order | next-17 |

Verification: per-lesson distinct-type count ≥6 (7–8 everywhere), zero same-type widgets
on adjacent paragraphs (checked in document order, including pre-existing widgets), ≤2
answer-family widgets (predict/judge/cloze) per lesson, no widget stacked on a paragraph
that already hosts one, all anchors unique inside their target paragraphs, no activity
duplicates a lesson's "Check yourself" questions, and fig numbers unique per lesson.
All 12 inserts self-verified clean on first run; no failures. 96 activities total
(8 per lesson × 12).
