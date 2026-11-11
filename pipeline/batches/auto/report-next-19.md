# chunk next-19 — P1 per-paragraph activity backfill report

12 lessons (naval-architecture, neuroscience ×11), 96 activities inserted via
`pipeline/insert_activities.py` (batches `pipeline/batches/auto/batch-<lesson>.json`).
All lessons use the Widget component (no raw-figure pages in this chunk); "Check yourself"
sections and existing prose/frontmatter untouched; existing quiz/equationStep/sliderLab/plotter
widgets untouched.

| lesson | types (document order) | chunk |
|---|---|---|
| naval-architecture/foundational/floating-things-steadily-hydrostatics | compare, estimate, match, order, spot-error, sort-buckets, judge, branch | next-19 |
| neuroscience/advanced/brain-imaging-methods | order, spot-error, match, branch, sort-buckets, judge, order, place | next-19 |
| neuroscience/advanced/memory-circuits | sort-buckets, order, spot-error, place, branch, compare, match, trace | next-19 |
| neuroscience/expert/computational-neuroscience | trace, match, spot-error, place, estimate, order, branch, sort-buckets | next-19 |
| neuroscience/expert/consciousness-hard-problem | branch, judge, match, compare, spot-error, cloze, sort-buckets, order | next-19 |
| neuroscience/foundational/the-neuron | order, match, spot-error, estimate, place, judge, match, cloze | next-19 |
| neuroscience/intermediate/brain-anatomy-tour | estimate, match, sort-buckets, judge, cloze, place, timeline, spot-error | next-19 |
| neuroscience/intermediate/movement-and-the-motor-system | estimate, match, judge, order, spot-error, sort-buckets, place, cloze | next-19 |
| neuroscience/intermediate/neurons-and-synapses | sort-buckets, order, estimate, match, judge, spot-error, compare, cloze | next-19 |
| neuroscience/intermediate/neurotransmitters-and-drugs | match, spot-error, sort-buckets, compare, trace, judge, place, order | next-19 |
| neuroscience/intermediate/senses-photons-to-perception | match, sort-buckets, order, cloze, spot-error, estimate, place, timeline | next-19 |
| neuroscience/intermediate/the-action-potential | sort-buckets, spot-error, judge, trace, compare, order, estimate, match | next-19 |

Notes:
- Every lesson: ≥6 distinct types (7–8), zero same-type on adjacent paragraphs, ≤2 answer-family
  widgets (predict/judge/cloze) among the inserted set.
- Activities avoid duplicating the lessons' "Check yourself" questions and quiz widgets
  (e.g. hydrostatics free-surface vs quiz Q3 phrased as filing/judging rather than the quiz
  question; brain-imaging reverse-inference run as a spot-error headline, not the quiz's
  naming task; memory-circuits avoids the NMDA-coincidence and Nader question formats;
  the-action-potential refractory question left to the quiz, trace covers frequency coding
  instead).
- Exploration/manipulation widgets used where content warranted: timeline (brain-anatomy's
  map-drawing dates, senses' illusion experiments), trace (population-code error curve,
  Yerkes–Dodson arousal curve, ADHD inverted-U, Weber–Fechner rate coding), branch
  (GM-target design, EEG-electrode dead end, orexin off-switch, all-nighter decision,
  circuit-stabilisation), compare (steel ball vs envelope, storage vs constructive recall,
  wanting vs liking, tank vs machine drug views, fever set point).
- All activity text kept academic/clinical; clinical facts (e.g. alcohol withdrawal,
  tetrodotoxin, stroke cascade) stated in the lessons' own terms.
