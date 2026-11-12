# Register gap-fix — 59 foundational lessons (2026-11-12, 2 subagents in parallel)

## Trigger
Re-running `pipeline/audit_lessons.py --tier foundational` after the P1 backfill flagged
59 lessons in Needs-work (scores 72–78): every P1-added widget had shipped without a
"What to notice" line, and 46 lessons had 0–1 "So far:" recaps (bar: ≥2). Intermediate,
advanced and expert tiers were already 100% Good.

## What was done
- 59 lessons split alphabetically 30 + 29 between two parallel subagents.
- Insert-only edits through a shared spec-driven tool: **472 "What to notice" paragraphs**
  (one under every widget that lacked one) and **72 "So far:" recaps** at section
  waypoints. Text grounded in each lesson's own widget configs and prose; no quiz
  questions duplicated; no existing prose, widgets, frontmatter or sources touched.
- 44 inserted lines rewritten to drop authoring meta-language ("the config's…") in favour
  of reader-facing "the widget's…"; one widget (petroleum-engineering
  `petroleum-geology-and-reservoir-rock` no=5) that had been counted via a stuffed phrase
  inside a recap got a real notice, and the recap was cleaned.
- Anti-regression checks over the full diff: no bare `<`+space/digit, no `$`/LaTeX, no
  raw braces, no notices in frontmatter or after Sources, every `<Widget>` line followed
  by a notice before the next widget.

## Verification
- Audit: foundational **187/187 Good (≥80)** (weakest score now 80); intermediate 194/194,
  advanced 119/119, expert 83/83 unchanged.
- `scripts/validate-content.py` → All content valid.
- `npm run build` → green, 742 pages; built HTML spot-checked (widget mounts + notice
  counts correct).
- Also re-verified the ≥3 "Common misconception" callout bar: 583/583 live lessons pass
  (the stale "420 lessons" note in CONTINUE.md is now marked closed).

## Queue
Empty. The only documented future pass left is P3 career-role pages (deferred in
ROADMAP.md).
