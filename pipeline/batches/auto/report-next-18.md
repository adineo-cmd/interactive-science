# chunk next-18 — P1 per-paragraph activity backfill report

12 lessons (mining-engineering, music-technology, music-therapy, music ×9), 94 activities inserted
via `pipeline/insert_activities.py` (batches `pipeline/batches/auto/batch-<lesson>.json`).
All lessons use the Widget component (no raw-figure pages in this chunk); "Check yourself" and
existing prose/frontmatter untouched; existing quiz widgets untouched.

| lesson | types (document order) | chunk |
|---|---|---|
| mining-engineering/foundational/ore-deposits-and-exploration | compare, sort-buckets, match, place, judge, order, spot-error, estimate | next-18 |
| music-technology/foundational/recording-fundamentals | order, branch, compare, sort-buckets, match, judge, cloze, spot-error | next-18 |
| music-therapy/foundational/what-music-therapy-is | match, timeline, order, judge, place, spot-error, predict, compare | next-18 |
| music/expert/music-cognition | match, predict, judge, branch, estimate, trace, place, spot-error | next-18 |
| music/foundational/sound-and-music | cloze, sort-buckets, match, place, judge, spot-error, estimate, compare | next-18 |
| music/intermediate/form-and-structure | match, sort-buckets, judge, order, predict, estimate, spot-error, compare | next-18 |
| music/intermediate/harmony-and-chords | match, sort-buckets, spot-error, compare, match, judge, timeline, branch | next-18 |
| music/intermediate/instruments-and-timbre | sort-buckets, judge, spot-error, match, estimate, match, compare, order | next-18 |
| music/intermediate/music-history-eras | match, spot-error, compare, order, predict, judge, timeline | next-18 |
| music/intermediate/reading-notation | timeline, match, spot-error, cloze, judge, sort-buckets, branch, order | next-18 |
| music/intermediate/rhythm-and-time-signatures | place, judge, cloze, order, sort-buckets, spot-error, estimate, trace | next-18 |
| music/intermediate/scales-and-keys | estimate, judge, sort-buckets, match, cloze, branch, place | next-18 |

Notes:
- Every lesson: ≥6 distinct types, zero same-type on adjacent paragraphs, ≤2 answer-family
  widgets (predict/judge/cloze) among the inserted set.
- Activities avoid duplicating the lessons' "Check yourself" quiz questions (e.g. reading-notation
  treble-clef and clarinet-transposition quiz answers; harmony 12-bar-blues bars; scales D-major
  sharps; recording headroom remedy).
- Exploration widgets used where content warranted: timeline (music-therapy history, harmony's
  assembly line, reading-notation's design history, music-history era boundaries), trace
  (Plomp–Levelt dissonance curve, Witek groove curve), branch (clipped-take decision, Snowball
  entrainment test, drone-vs-chords, transposing write-through, rāga/maqām), place (gold density,
  RAS cadence offset, walking tempo, tempered fifth/third in cents, absolute-pitch age).
