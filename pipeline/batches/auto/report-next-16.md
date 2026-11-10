# chunk-next-16 report — P1 per-paragraph activity backfill (12 lessons: materials-science ×3, mechanical-engineering, media-studies, medical-laboratory-science, medicine ×6)

Batch files: `pipeline/batches/auto/batch-<last-slug-part>.json`, inserted with
`python3 -I pipeline/insert_activities.py` (one run per batch). All 12 pages use the
Widget component (no raw figure markup, so no figure conversion/renumbering was needed).
Fig numbers continue past each lesson's pre-existing max (2–9 on lessons whose only prior
widget was a fig-1 equationStep; 3–10 where a fig-1 equationStep and an end-of-page fig-2
quiz already existed; why-materials-behave had only its mid-lesson fig-1 plotter, inserts
run 2–9).

Medicine lessons kept strictly clinical/academic activity text — disease and trauma
described abstractly (the patient, mortality statistics, organ function), no graphic detail.

| Lesson | Types | Chunk |
|---|---|---|
| materials-science/foundational/why-materials-behave | sort-buckets, order, timeline, match, spot-error, judge, compare, estimate | next-16 |
| materials-science/intermediate/atoms-to-crystals | match, estimate, sort-buckets, order, branch, trace, cloze, spot-error | next-16 |
| materials-science/intermediate/metals-ceramics-polymers-composites | match, order, branch, spot-error, match, estimate, cloze, sort-buckets | next-16 |
| mechanical-engineering/foundational/mechanics-foundations | match, order, place, spot-error, judge, cloze, estimate, trace | next-16 |
| media-studies/foundational/the-theoretical-framework | compare, sort-buckets, order, spot-error, branch, judge, match, cloze | next-16 |
| medical-laboratory-science/foundational/laboratory-operations-and-safety | sort-buckets, order, branch, match, sort-buckets, cloze, place | next-16 |
| medicine/advanced/cancer-biology-and-oncology | place, spot-error, match, judge, trace, branch, compare, order | next-16 |
| medicine/advanced/cardiovascular-pathophysiology | match, trace, estimate, order, sort-buckets, judge, place, branch | next-16 |
| medicine/advanced/clinical-trials-and-evidence | match, compare, spot-error, estimate, sort-buckets, order, judge, branch | next-16 |
| medicine/advanced/medical-imaging | match, cloze, judge, spot-error, compare, sort-buckets, branch, chart | next-16 |
| medicine/expert/genomic-medicine | place, spot-error, sort-buckets, match, branch, order, estimate, timeline | next-16 |
| medicine/expert/health-systems-and-policy | match, estimate, spot-error, place, cloze, order, branch, trace | next-16 |

Verification: per-lesson distinct-type count ≥6 (7–9 everywhere), zero same-type widgets
on adjacent paragraphs, answer-family (predict/judge/cloze) ≤2 per lesson, no widget
stacked on a paragraph that already hosts one, all anchors unique inside their target
paragraph, and no activity duplicates a lesson's "Check yourself" questions. All 12
inserts self-verified clean on first run; no failures.
