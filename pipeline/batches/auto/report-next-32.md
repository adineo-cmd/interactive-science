# report-next-32 — P1 backfill COMPLETE (final gap fixes)

Final QA pass over the whole P1 campaign. All 583 live lessons already carried batch files
or pilot activities; the only lessons below the ≥6-distinct-types bar were the two
hand-built pilot pages. Both were topped up (insert-only, no prose changes):

| Lesson | Added | Final campaign types |
|---|---|---|
| physics/foundational/energy-conservation | sort-buckets, estimate, spot-error | predict, cloze, judge, sort-buckets, estimate, spot-error (6) |
| philosophy/intermediate/philosophy-of-mind | compare, branch | match, order, predict, judge, cloze, compare, branch (7) |

**Grounded in the lessons' own facts:** elastic/chemical stores versus electrical working,
heating and radiation; the 10,000 J phone / 1,000,000 J chocolate bar / 1,000,000,000 J
lightning benchmarks; the 60 kg student's 1,760 J climb at 350 W sprinting and 117 W
walking; type identity theory versus functional role and multiple realisability; and the
Chinese Room's man/room/systems reply mapped onto the current LLM debate.

**Whole-campaign verification:**
- 583/583 live lessons have per-paragraph activities; 5,607 widgets total (≈9.6 per lesson).
- Every live page has ≥6 distinct interaction types (counting chart/plotter/timeline),
  zero adjacent same-type repeats; the two pilot pages now clear the bar on campaign
  types alone.
- `pipeline/audit_lessons.py` register markers untouched; `scripts/validate-content.py`:
  "All content valid."
- `npm run build`: green, 742 pages; both edited pages render the new widgets.

Batch file: `pipeline/batches/auto/batch-pilot-gap-fix.json` (5 activities). Ledger and
`CONTINUE.md` now mark P1 COMPLETE; the backfill queue is empty.
