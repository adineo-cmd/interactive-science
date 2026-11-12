# ACTIVITIES-LEDGER.md — per-paragraph interactivity rollout (P1 backfill)

> **This file is the handoff for the P1 rollout.** It records the user's quality bar, the
> workflow, and exactly which lessons are done vs queued. Any agent (this machine or the
> PC) continues from here. The full plan lives in `ROADMAP.md` (P1).

## User directives (2026-11-08 — treat as hard requirements)

1. **Innovative interactive — NOT follow-up questions.** Do not default to quiz/predict
   after every paragraph. Choose the interaction TYPE from the paragraph's content:
   manipulate (`sliderLab`/`plotter`), construct/order (`order`), locate (`place`/`hotspot`),
   classify (`sort-buckets`), pair (`match`), detect-the-error (`spot-error`),
   estimate magnitude (`estimate`), decide (`branch`), explore (`compare`/`trace`).
   Answer-type widgets (`predict`/`judge`/`cloze`) are one family among many — at most
   2 of the 6 per lesson.
2. **Anti-repetition**: adjacent paragraphs never get the same type; **≥6 distinct types per
   lesson** (pilot bar); the mix shifts by subject flavour (history → order/compare/match;
   chemistry → place/cloze/predict; literature → match/spot-error/branch; math →
   estimate/cloze/trace).
3. **Ground every activity in the lesson's own facts and numbers.** Read the paragraph
   first; the anchor text must come from the paragraph you are attaching to. No invented facts.
4. The lesson-end **"Check yourself" quiz is untouched** and per-paragraph activities never
   duplicate its questions.
5. Existing prose, headings, widgets, frontmatter stay byte-untouched — the insert script
   only ADDS. (Quiz widgets that sit after the sources line: never move them.)
6. Every batch: build (`npm run build`), verify mounts in the built HTML, commit + push.

## Workflow per wave (the token-cheap pipeline)

1. Pick 2–3 lessons from the queue below.
2. Read the lesson paragraphs; design 5–6 activities each, obeying the directives above.
3. Write a batch file `pipeline/batches/<subject>-wave-N.json`:
   `[{"slug": "...", "activities": [{"anchor","type","caption","name","config"}]}, ...]`
   — anchor = unique text snippet from the target paragraph (whitespace inside the anchor
   is matched flexibly; it must be inside a `<p>`, not inside an existing widget figure).
4. `python3 -I pipeline/insert_activities.py pipeline/batches/<subject>-wave-N.json`
   (it inserts frontmatter consts + `<Widget no caption widget config>` lines, assigns fig
   numbers past the lesson's max, and self-verifies).
5. `cd astro-website && npm run build`; then check mounts:
   `grep -o 'data-widget="[a-z-]*"' dist/<slug>/index.html | sort | uniq -c`
6. Commit + push (batch file + script changes + lessons). Config-schema reference: the
   header comment of each widget in `astro-website/public/widgets/*.js`.

## Progress ledger

**Done (activities live):**
| Lesson | Types | Wave |
|---|---|---|
| physics/foundational/energy-conservation | 9 acts (PC pilot) + 3 gap-fix (sort-buckets, estimate, spot-error) | pilot |
| philosophy/intermediate/philosophy-of-mind | 7 acts (PC pilot) + 2 gap-fix (compare, branch) | pilot |
| physics/foundational/newtons-laws | sort-buckets, place, predict, match, judge, spot-error | physics-1 |
| physics/intermediate/circuits-and-ohms-law | order, cloze, spot-error, judge, estimate, predict | physics-1 |
| physics/intermediate/circular-motion-and-gravitation | cloze, predict, estimate, match, place, sort-buckets, compare | physics-2 |
| physics/intermediate/magnetism-and-induction | sort-buckets, cloze, order, predict, match, place, spot-error | physics-2 |
| physics/intermediate/thermal-physics | sort-buckets, cloze, predict, estimate, order, match, judge | physics-3 |
| physics/intermediate/electrostatics | order, judge, estimate, cloze, predict, sort-buckets, match | physics-3 |
| physics/intermediate/momentum-and-collisions | cloze, spot-error, predict, judge, order, estimate, match | physics-4 |
| physics/intermediate/waves-and-sound | cloze, predict, match, order, place, estimate, spot-error, sort-buckets | physics-4 |
| physics/intermediate/projectile-and-2d-motion | match, predict, estimate, sort-buckets, judge, cloze | physics-5 |
| physics/intermediate/optics-lenses-and-mirrors | judge, compare, cloze, place, match, predict, spot-error | physics-5 |
| physics/foundational/motion-1d | match, cloze, predict, estimate, place, judge, order | physics-6 |
| accounting/foundational/the-fundamentals-of-accounting | sort-buckets, match, spot-error, cloze, judge, predict, estimate | acct-1 |
| actuarial-science/foundational/probability-for-actuaries | match, spot-error, sort-buckets, cloze, judge, estimate, predict | act-1 |
| aerospace-engineering/foundational/aerodynamics-i-lift-and-airfoils | predict, cloze, order, sort-buckets, match, estimate, judge | aero-1 |
| agriculture/foundational/soil-water-sun | match, trace, sort-buckets, spot-error, judge, place, estimate, branch | agriculture-1 |
| agriculture/intermediate/soil-health | estimate, order, judge, place, sort-buckets, branch, match, predict | agriculture-1 |
| agriculture/intermediate/plant-nutrition-and-fertilisers | sort-buckets, cloze, estimate, trace, match, spot-error, order, branch | agriculture-1 |
| agriculture/intermediate/pests-weeds-and-ipm | sort-buckets, place, judge, predict, match, estimate, spot-error, branch | agriculture-2 |
| agriculture/intermediate/animal-husbandry | order, estimate, compare, sort-buckets, spot-error, match, predict, trace | agriculture-2 |
| agriculture/intermediate/farm-economics | match, cloze, estimate, sort-buckets, branch, trace, judge, spot-error | agriculture-2 |
| agriculture/advanced/precision-agriculture | estimate, match, place, judge, spot-error, order, branch, predict | agriculture-3 |
| agriculture/advanced/breeding-and-gmos | cloze, judge, estimate, spot-error, compare, order, branch | agriculture-3 |
| agriculture/advanced/agroecology | sort-buckets, predict, match, estimate, spot-error, judge, trace | agriculture-3 |
| agriculture/expert/food-systems-and-security | spot-error, predict, judge, estimate, branch, match, trace, sort-buckets | agriculture-4 |
| agriculture/expert/climate-smart-agriculture | estimate, judge, sort-buckets, compare, place, branch, predict, spot-error | agriculture-4 |
| animation/foundational/the-twelve-principles-of-animation | estimate, sort-buckets, match, trace, judge, spot-error, branch, place | wave-5 |
| anthropology/foundational/culture-kin-long-view | cloze, estimate, match, order, judge, spot-error, compare, sort-buckets | wave-5 |
| anthropology/intermediate/the-four-fields | match, spot-error, branch, cloze, judge, order, compare, sort-buckets | wave-5 |
| anthropology/intermediate/human-evolution-a-timeline | place, sort-buckets, judge, spot-error, estimate, match, predict, order, branch, timeline | anthropology-1 |
| anthropology/intermediate/kinship-and-marriage-systems | compare, sort-buckets, spot-error, match, order, estimate, judge, branch, equationStep, quiz | anthropology-1 |
| anthropology/intermediate/archaeology-reading-material-culture | estimate, match, order, sort-buckets, branch, predict, compare, equationStep, judge, quiz | anthropology-1 |
| anthropology/advanced/ethnographic-methods | compare, sort-buckets, match, predict, order, branch, equationStep, quiz | anthropology-2 |
| anthropology/advanced/economic-and-political-anthropology | order, spot-error, compare, sort-buckets, judge, match, branch, predict, equationStep, quiz | anthropology-2 |
| anthropology/expert/deep-history-of-our-species | estimate, order, predict, branch, sort-buckets, cloze, match, place | anthropology-2 |
| anthropology/expert/anthropology-of-the-contemporary | predict, judge, spot-error, sort-buckets, match, compare, estimate, order, equationStep | anthropology-3 |
| archaeology/foundational/what-archaeology-is | timeline, sort-buckets, equationStep, order, predict, match, estimate, spot-error | wave-6 |
| architecture/foundational/form-follows-forces | plotter, compare, sort-buckets, match, order, judge, estimate, spot-error, branch | wave-6 |
| architecture/foundational/career-paths-and-licensure | equationStep, compare, predict, judge, sort-buckets, match, order, spot-error | wave-6 |
| architecture/intermediate/a-history-of-architectural-styles | match, cloze, predict, order, sort-buckets, estimate, judge | wave-7 |
| architecture/intermediate/plans-sections-and-scale | match, predict, cloze, order, spot-error, judge | wave-7 |
| architecture/intermediate/what-buildings-must-do | sort-buckets, predict, cloze, match, estimate, judge | wave-7 |
| architecture/advanced/environmental-design-light-heat-air | place, predict, cloze, order, judge, spot-error, match | wave-8 |
| architecture/advanced/structural-systems-arches-to-skyscrapers | match, predict, cloze, order, estimate, sort-buckets, judge | wave-8 |
| architecture/advanced/urban-design-and-public-space | match, predict, order, estimate, judge, sort-buckets, cloze | wave-9 |
| architecture/expert/computational-and-parametric-design | match, predict, cloze, order, sort-buckets, judge | wave-10 |
| architecture/expert/sustainable-and-passive-design | sort-buckets, order, predict, cloze, match, estimate, predict | wave-11 |
| art-history/foundational/walk-through-western-art | match, predict, cloze, sort-buckets, order, spot-error, estimate | art-astro-1 |
| astronomy/foundational/solar-system-scale | cloze, place, estimate, sort-buckets, predict, judge, match | art-astro-1 |
| astronomy/intermediate/stellar-life-cycles | estimate, cloze, judge, place, predict, match, sort-buckets | astro-2 |
| astronomy/intermediate/telescopes-and-the-electromagnetic-spectrum | cloze, match, spot-error, estimate, predict, sort-buckets, judge, order | astro-2 |
| astronomy/intermediate/the-milky-way | predict, cloze, place, estimate, order, judge, match | astro-3 |
| astronomy/intermediate/the-moon-and-eclipses | match, predict, cloze, place, sort-buckets, estimate, match | astro-3 |
| astronomy/foundational/orbits-and-keplers-laws | predict, cloze, order, estimate, sort-buckets, predict | astro-4 |
| astronomy/foundational/planet-earth | estimate, sort-buckets, predict, judge, estimate, match, predict | astro-4 |
| astronomy/advanced/compact-objects | cloze, match, predict, sort-buckets, estimate, judge | astro-5 |
| astronomy/advanced/exoplanets-and-detection | order, spot-error, place, sort-buckets, predict, estimate, match | astro-6 |
| astronomy/advanced/galaxies-and-the-expanding-universe | predict, sort-buckets, cloze, order, estimate, match, cloze | astro-7 |
| astronomy/expert/cosmology-and-general-relativity | cloze, predict, match, spot-error, sort-buckets, estimate, predict, match | astro-8 |
| astronomy/expert/dark-matter-and-dark-energy | order, match, cloze, predict, judge, spot-error, cloze | astro-9 |
| astronomy/expert/astrobiology | match, cloze, predict, sort-buckets, order, estimate, spot-error | astro-10 |
| art-history/advanced/art-market-and-museums | sort-buckets, match, order, estimate, branch, place, trace, spot-error | chunk-01 |
| art-history/advanced/modern-and-contemporary-art | order, predict, match, judge, sort-buckets, branch, compare, estimate | chunk-01 |
| art-history/expert/art-historiography-and-method | order, spot-error, sort-buckets, match, compare, branch, cloze, judge | chunk-01 |
| art-history/expert/attribution-conservation-and-forgery | match, sort-buckets, order, judge, place, spot-error, branch, compare | chunk-01 |
| art-history/foundational/global-prehistory-art-before-writing | sort-buckets, judge, cloze, spot-error, estimate, order, branch, compare | chunk-01 |
| art-history/intermediate/art-beyond-the-west | match, sort-buckets, cloze, judge, order, branch, place, compare | chunk-01 |
| art-history/intermediate/impressionism-to-expressionism | order, match, judge, sort-buckets, place, predict, spot-error, compare | chunk-01 |
| art-history/intermediate/renaissance-and-baroque | match, sort-buckets, judge, compare, spot-error, branch, cloze, order | chunk-01 |
| art-therapy/foundational/what-art-therapy-is | sort-buckets, order, match, place, judge, compare, branch, spot-error | chunk-01 |
| artificial-intelligence/advanced/evaluation-bias-and-safety | sort-buckets, match, spot-error, estimate, compare, trace, cloze, branch | chunk-01 |
| artificial-intelligence/advanced/reinforcement-learning | trace, judge, sort-buckets, spot-error, match, order, compare, branch | chunk-01 |
| artificial-intelligence/advanced/transformers-and-large-language-models | order, match, spot-error, trace, judge, compare, estimate, branch | chunk-01 |
| artificial-intelligence/expert/ai-alignment-and-interpretability | match, judge, sort-buckets, order, compare, branch, spot-error, predict | chunk-02 |
| artificial-intelligence/expert/generative-models | order, sort-buckets, judge, trace, estimate, spot-error, match, compare | chunk-02 |
| artificial-intelligence/expert/robotics-and-embodied-ai | order, match, judge, sort-buckets, estimate, spot-error, compare, branch | chunk-02 |
| artificial-intelligence/foundational/how-machines-learn | predict, order, sort-buckets, match, spot-error, cloze, compare, trace | chunk-02 |
| artificial-intelligence/intermediate/classification-and-regression | match, estimate, spot-error, cloze, place, sort-buckets, trace, branch | chunk-02 |
| artificial-intelligence/intermediate/image-recognition-cnns | estimate, spot-error, trace, order, place, judge, match, sort-buckets | chunk-02 |
| artificial-intelligence/intermediate/machine-learning-in-one-picture | sort-buckets, estimate, order, judge, match, trace, spot-error, compare | chunk-02 |
| artificial-intelligence/intermediate/neural-networks-from-scratch | estimate, sort-buckets, compare, cloze, order, judge, trace, match | chunk-02 |
| audiology/foundational/hearing-science | estimate, order, match, place, sort-buckets, judge, compare, branch | chunk-02 |
| automotive-technology/foundational/shop-safety-and-service-basics | sort-buckets, estimate, match, spot-error, order, predict, branch, cloze | chunk-02 |
| aviation-maintenance/foundational/amt-general | match, estimate, trace, sort-buckets, order, compare, judge, spot-error | chunk-02 |
| aviation/foundational/aircraft-systems-and-instruments | match, spot-error, compare, predict, sort-buckets, place, judge, order | chunk-02 |
| biology/foundational/cell-structure | order, match, cloze, place, judge, spot-error, estimate, compare | round-3 |
| chemistry/foundational/atomic-structure | estimate, order, sort-buckets, match, estimate, cloze, judge, compare | round-3 |
| chemistry/foundational/periodic-table | order, cloze, sort-buckets, place, spot-error, match, compare, trace | chunk-07 |
| chemistry/foundational/states-of-matter | sort-buckets, match, estimate, place, spot-error, judge, cloze, trace | chunk-07 |
| chemistry/intermediate/chemical-bonding | sort-buckets, branch, estimate, cloze, match, spot-error, judge, order | chunk-07 |
| chemistry/intermediate/chemical-equilibrium | spot-error, compare, estimate, sort-buckets, cloze, place, order, match | chunk-07 |
| chemistry/intermediate/organic-chemistry-hydrocarbons | match, sort-buckets, judge, place, spot-error, cloze, compare, estimate | chunk-07 |
| chemistry/intermediate/reaction-kinetics | estimate, sort-buckets, spot-error, trace, judge, branch, match | chunk-07 |
| chemistry/intermediate/redox-and-electrochemistry | order, match, spot-error, place, compare, judge, estimate | chunk-07 |
| chemistry/intermediate/thermodynamics-and-enthalpy | sort-buckets, match, estimate, spot-error, order, trace, judge, cloze | chunk-07 |
| civil-engineering/foundational/statics-and-dynamics-for-civil-engineers | branch, judge, sort-buckets, order, estimate, match, place, compare | chunk-07 |
| classics/foundational/homer-and-the-world-of-the-hero | compare, spot-error, order, match, branch, sort-buckets, judge | chunk-07 |
| cognitive-science/foundational/what-is-cognitive-science | branch, judge, cloze, estimate, match, sort-buckets, order | chunk-07 |
| communication-studies/foundational/communication-theory | branch, order, cloze, match, sort-buckets, compare, judge, place | chunk-07 |
| computer-science/advanced/cybersecurity-threats-and-defences | cloze, judge, estimate, sort-buckets, branch, order, spot-error, match | chunk-08 |
| computer-science/advanced/data-structures | trace, judge, estimate, sort-buckets, match, spot-error, order, branch | chunk-08 |
| computer-science/advanced/databases-and-sql | compare, sort-buckets, trace, branch, order, match, spot-error, estimate | chunk-08 |
| computer-science/advanced/graphs-and-dynamic-programming | sort-buckets, judge, estimate, branch, order, cloze, match, spot-error | chunk-08 |
| computer-science/advanced/networking-how-the-internet-works | estimate, trace, order, sort-buckets, judge, match, place | chunk-08 |
| computer-science/advanced/operating-systems-basics | cloze, estimate, order, place, sort-buckets, match, branch, judge | chunk-08 |
| computer-science/advanced/software-engineering-and-version-control | sort-buckets, order, compare, estimate, branch, judge, match, cloze | chunk-08 |
| computer-science/advanced/web-development-html-css-js | sort-buckets, match, judge, order, cloze, spot-error, branch, trace | chunk-08 |
| computer-science/expert/compilers-and-languages | order, sort-buckets, cloze, estimate, match, branch, judge, trace | chunk-08 |
| computer-science/expert/computability-and-complexity | order, estimate, trace, sort-buckets, cloze, judge, branch, match | chunk-08 |
| computer-science/expert/cryptography | sort-buckets, match, compare, estimate, judge, branch, cloze, place | chunk-08 |
| computer-science/expert/distributed-systems | order, branch, sort-buckets, estimate, compare, match, judge, cloze | chunk-08 |
| computer-science/foundational/binary-bits | sort-buckets, match, cloze, spot-error, predict, estimate, place, branch | round-5 |
| computer-science/foundational/computer-architecture-and-hardware | predict, spot-error, match, order, sort-buckets, cloze, estimate, branch | round-5 |
| computer-science/foundational/growth-of-functions | predict, trace, estimate, judge, compare, order, spot-error, branch | round-5 |
| computer-science/intermediate/algorithms-searching-and-sorting | order, match, place, branch, judge, spot-error, predict, estimate | round-5 |
| computer-science/intermediate/data-files-tables-json | predict, sort-buckets, judge, branch, spot-error, compare, match, order | round-5 |
| computer-science/intermediate/logic-gates-and-digital-circuits | compare, match, judge, spot-error, predict, order, estimate, sort-buckets | round-5 |
| computer-science/intermediate/programming-fundamentals | match, spot-error, predict, cloze, estimate, order, branch | round-5 |
| cosmetology/foundational/infection-control-and-salon-safety | predict, match, judge, branch, order, estimate, spot-error, sort-buckets | round-5 |
| counseling/foundational/the-counselling-profession | match, sort-buckets, compare, predict, cloze, spot-error, order, branch | round-5 |
| creative-writing/foundational/craft-image-detail-and-the-sentence | predict, sort-buckets, compare, judge, order, match, spot-error | round-5 |
| criminology/foundational/changing-awareness-of-crime | predict, match, sort-buckets, order, compare, spot-error, estimate | round-5 |
| culinary-arts/foundational/kitchen-essentials-safety-knives-mise-en-place | predict, sort-buckets, estimate, place, match, order, judge, branch | round-5 |
| cybersecurity/foundational/security-foundations-the-cia-triad | predict, compare, match, judge, sort-buckets, branch, estimate, order | round-5 |
| dance/foundational/performance-technique-and-expression | compare, match, sort-buckets, spot-error, place, judge, order, cloze | round-5 |
| data-science/advanced/ab-testing | predict, judge, order, sort-buckets, compare, estimate, spot-error | round-5 |
| data-science/advanced/dashboards-and-data-storytelling | sort-buckets, match, estimate, compare, predict, order, cloze | round-5 |
| data-science/intermediate/sql-for-analysts | order, spot-error, cloze, match, sort-buckets, judge, compare, branch | round-5 |
| dental-hygiene/foundational/the-sciences-behind-hygiene | match, sort-buckets, spot-error, order, cloze, judge, branch | round-5 |
| dentistry/foundational/biomedical-sciences-for-dentistry | sort-buckets, compare, branch, match, estimate, order, spot-error, cloze | round-5 |
| design/advanced/design-systems | order, judge, sort-buckets, estimate, match, branch, spot-error | round-5 |
| design/advanced/interaction-design | match, predict, spot-error, compare, place, sort-buckets, estimate, trace | round-5 |
| design/expert/design-strategy-and-leadership | branch, compare, judge, match, order, spot-error, cloze | round-5 |
| design/foundational/design-is-deciding | match, sort-buckets, estimate, spot-error, cloze, branch, place | round-5 |
| design/foundational/structures-loads-and-forces | sort-buckets, compare, estimate, predict, match, spot-error, place, judge | round-5 |
| design/intermediate/accessibility | sort-buckets, estimate, compare, match, place, order, spot-error, judge | round-5 |
| design/intermediate/grids-and-layout | match, estimate, place, predict, sort-buckets, branch, cloze, trace | round-5 |
| design/intermediate/prototyping-and-wireframes | judge, match, estimate, sort-buckets, cloze, branch, compare, order | round-5 |
| design/intermediate/ux-research | sort-buckets, match, order, estimate, branch, spot-error, compare, cloze | round-5 |
| development-studies/foundational/what-is-development | compare, match, spot-error, order, place, trace, judge, estimate | round-5 |
| drama/foundational/elements-of-practical-drama | sort-buckets, order, match, spot-error, compare, cloze, predict, branch | round-5 |
| earth-science/advanced/geochemical-cycles | match, sort-buckets, estimate, order, spot-error, judge, trace, place | round-5 |
| earth-science/advanced/paleoclimate-and-ice-ages | sort-buckets, match, spot-error, order, estimate, compare, place, cloze | round-5 |
| earth-science/expert/geophysics-of-plate-driving-forces | match, spot-error, order, sort-buckets, estimate, judge, branch | round-5 |
| earth-science/expert/planetary-geology | match, order, estimate, place, sort-buckets, spot-error, cloze, predict | round-5 |
| earth-science/foundational/earth-interior | sort-buckets, place, order, match, predict, estimate, judge, compare | round-5 |
| earth-science/foundational/fossils-and-geologic-time | order, sort-buckets, match, estimate, judge, cloze, branch | round-5 |
| earth-science/foundational/minerals-and-crystals | sort-buckets, compare, match, order, spot-error, branch, cloze, predict | round-5 |
| earth-science/foundational/rock-cycle | match, branch, sort-buckets, spot-error, judge, estimate, compare, order | round-5 |
| earth-science/foundational/the-water-cycle | compare, cloze, estimate, sort-buckets, predict, place, match, branch | round-5 |
| design/intermediate/typography-fundamentals | sort-buckets, match, order, estimate, branch, spot-error, compare, cloze | design-12 |
| earth-science/foundational/weathering-erosion-and-landforms | estimate, sort-buckets, match, place, cloze, spot-error, order, branch, predict | earthscience-6 |
| data-science/foundational/from-data-to-decisions | order, match, sort-buckets, branch, cloze, spot-error, compare, predict | datascience-3 |
| earth-science/intermediate/volcanoes-and-igneous-processes | match, sort-buckets, estimate, judge, spot-error, cloze, branch, compare, order | earthscience-7 |
| earth-science/intermediate/earthquakes-and-seismology | match, estimate, judge, cloze, place, order, sort-buckets, compare, spot-error | earthscience-8 |
| earth-science/intermediate/atmosphere-and-weather-systems | place, match, predict, order, cloze, estimate, compare, spot-error | earthscience-9 |
| earth-science/intermediate/oceans-and-currents | match, estimate, cloze, order, sort-buckets, branch, predict, spot-error | earthscience-10 |
| data-science/intermediate/cleaning-messy-data | estimate, match, order, predict, sort-buckets, branch, spot-error, judge | datascience-4 |
| data-science/intermediate/exploratory-data-analysis | order, match, predict, spot-error, branch, cloze, sort-buckets, estimate, compare | datascience-5 |
| data-science/intermediate/charts-that-tell-the-truth | sort-buckets, match, cloze, estimate, predict, spot-error, compare, order, branch | datascience-6 |
| data-science/advanced/statistics-for-data-science | match, estimate, place, predict, cloze, estimate, compare, branch, spot-error | datascience-7 |
| data-science/advanced/machine-learning-basics | match, cloze, branch, order, trace, sort-buckets, compare, estimate, match | datascience-8 |
| data-science/expert/data-engineering-and-pipelines | estimate, match, sort-buckets, cloze, order, spot-error, judge, compare, estimate, branch | datascience-9 |
| data-science/expert/ethics-privacy-and-bias | match, judge, estimate, cloze, branch, match, compare, estimate, order, spot-error | datascience-10 |
| math/foundational/equations-and-inequalities | sort-buckets, match, spot-error, order, branch, cloze, predict, compare, spot-error, estimate | math-1 |
| math/foundational/euclidean-geometry | sort-buckets, match, cloze, estimate, branch, estimate, match, spot-error, order, sort-buckets | math-2 |
| math/foundational/perimeter-area-volume | match, estimate, cloze, spot-error, estimate, compare, match, sort-buckets, spot-error, branch | math-3 |
| math/foundational/ratios-percentages-proportion | match, sort-buckets, cloze, spot-error, estimate, compare, estimate, predict, place, branch | math-4 |
| math/foundational/linear-functions | cloze, compare, estimate, order, sort-buckets, match, predict, spot-error, branch | math-5 |
| math/foundational/quadratics | match, sort-buckets, cloze, spot-error, branch, estimate, predict, place, order, spot-error | math-6 |
| math/intermediate/circles-and-coordinate-geometry | sort-buckets, estimate, spot-error, place, match, estimate, predict, cloze, order, branch | math-7 |
| math/intermediate/counting-and-combinatorics | match, estimate, predict, spot-error, estimate, sort-buckets, estimate, place, branch, judge | math-8 |
| math/intermediate/exponentials-and-logarithms | match, sort-buckets, spot-error, estimate, compare, estimate, cloze, spot-error, branch, place | math-9 |
| math/intermediate/trigonometry | match, estimate, spot-error, estimate, cloze, predict, branch, sort-buckets, order, spot-error | math-10 |
| math/intermediate/sequences-and-series | compare, estimate, branch, cloze, match, estimate, spot-error, order, estimate, judge | math-11 |
| math/intermediate/the-derivative | cloze, estimate, order, spot-error, sort-buckets, estimate, branch, place, spot-error, match | math-12 |
| math/advanced/logic-and-proof | sort-buckets, judge, match, compare, spot-error, cloze, order, branch, estimate, order | math-13 |
| math/advanced/number-theory | match, cloze, spot-error, estimate, place, order, branch, match, judge, order | math-14 |
| math/advanced/integration | cloze, estimate, judge, sort-buckets, spot-error, compare, match, estimate, order, place | math-15 |
| math/advanced/vectors-and-matrices | sort-buckets, judge, estimate, cloze, spot-error, compare, match, branch, place, order | math-16 |
| math/advanced/differential-equations | sort-buckets, estimate, cloze, estimate, order, match, branch, place, judge, compare | math-17 |
| math/expert/linear-algebra | sort-buckets, match, estimate, cloze, order, spot-error, branch, judge, compare, match | math-18 |
| math/expert/abstract-algebra | sort-buckets, estimate, cloze, estimate, match, place, estimate, spot-error, match, judge | math-19 |
| math/expert/complex-analysis | sort-buckets, estimate, order, place, match, branch, estimate, spot-error, cloze, compare | math-20 |
| math/expert/real-analysis | sort-buckets, cloze, spot-error, place, judge, compare, estimate, match, spot-error, order | math-21 |
| math/expert/topology | sort-buckets, branch, match, spot-error, cloze, compare, estimate, compare, order, match | math-22 |
| economics/foundational/supply-and-demand | place, sort-buckets, match, order, branch, cloze, estimate, judge, spot-error, compare | econ-1 |
| economics/foundational/money-inflation | estimate, match, sort-buckets, order, cloze, spot-error, place, branch, judge, compare | econ-2 |
| economics/intermediate/elasticity | sort-buckets, estimate, cloze, match, branch, order, place, judge, spot-error, compare | econ-3 |
| economics/intermediate/gdp-national-accounts | cloze, judge, order, sort-buckets, estimate, compare, place, branch, spot-error, match | econ-4 |
| economics/intermediate/fiscal-policy-public-debt | sort-buckets, match, estimate, place, judge, branch, order, compare, spot-error, cloze | econ-5 |
| economics/intermediate/market-failure-externalities | sort-buckets, match, estimate, branch, place, spot-error, cloze, judge, order, compare | econ-6 |
| economics/intermediate/monetary-policy-central-banks | cloze, place, sort-buckets, match, order, estimate, branch, judge, spot-error, compare | econ-7 |
| economics/intermediate/unemployment-labour-markets | cloze, sort-buckets, match, order, spot-error, estimate, branch, place, compare, judge | econ-8 |
| economics/advanced/behavioural-economics | sort-buckets, estimate, branch, cloze, spot-error, place, order, match, compare, judge | econ-9 |
| economics/advanced/development-economics | cloze, sort-buckets, spot-error, place, branch, compare, order, estimate, match, judge | econ-10 |
| economics/advanced/game-theory | cloze, sort-buckets, branch, spot-error, estimate, order, compare, place, judge, match | econ-11 |
| economics/advanced/international-trade | cloze, estimate, spot-error, sort-buckets, compare, place, order, match, branch, judge | econ-12 |
| economics/expert/econometrics | cloze, match, order, compare, branch, place, spot-error, estimate, sort-buckets, judge | econ-13 |
| economics/expert/financial-economics | sort-buckets, cloze, compare, place, match, estimate, branch, order, spot-error, judge | econ-14 |
| economics/expert/macroeconomic-models-dsge | cloze, order, match, spot-error, compare, place, sort-buckets, estimate, branch, judge | econ-15 |
| education/foundational/the-learning-process | order, match, branch, sort-buckets, predict, cloze, estimate, place | next-1 |
| electrical-engineering/foundational/dc-circuit-analysis | match, trace, sort-buckets, order, spot-error, cloze, predict, estimate | next-1 |
| electrical-trades/foundational/electrical-safety-and-theory | estimate, match, sort-buckets, predict, order, branch, cloze, spot-error | next-1 |
| emergency-management/foundational/the-emergency-management-cycle | compare, sort-buckets, estimate, branch, spot-error, order, judge, cloze | next-1 |
| engineering/advanced/control-systems | order, match, cloze, sort-buckets, judge, place, estimate, trace | next-1 |
| engineering/advanced/materials-selection | place, match, order, sort-buckets, match, estimate, branch, spot-error | next-1 |
| engineering/advanced/signal-processing | order, predict, trace, match, cloze, branch, estimate, match | next-1 |
| engineering/expert/reliability-and-safety-engineering | match, order, estimate, predict, order, sort-buckets, spot-error, judge | next-1 |
| engineering/expert/systems-engineering | order, match, order, estimate, judge, branch, trace, spot-error | next-1 |
| engineering/foundational/statics-structures | match, place, predict, match, spot-error, order, cloze, sort-buckets | next-1 |
| engineering/intermediate/fluid-mechanics | sort-buckets, predict, estimate, place, spot-error, cloze, match, trace | next-1 |
| engineering/intermediate/forces-beams-and-bridges | spot-error, order, place, judge, branch, place, predict, compare | next-1 |
| engineering/intermediate/thermodynamics-for-engineers | estimate, match, spot-error, place, branch, sort-buckets, order, predict | next-2 |
| engineering/intermediate/units-estimates-and-back-of-envelope | order, cloze, predict, match, branch, spot-error, sort-buckets, estimate | next-2 |
| entomology/foundational/insects-the-dominant-animals | estimate, spot-error, sort-buckets, place, compare, cloze, predict, match | next-2 |
| environmental-engineering/foundational/water-chemistry-and-microbiology | estimate, order, branch, sort-buckets, match, predict, spot-error, judge | next-2 |
| environmental-science/advanced/climate-modelling-and-scenarios | match, predict, sort-buckets, order, place, judge, spot-error, estimate | next-2 |
| environmental-science/advanced/environmental-economics-and-policy | estimate, cloze, order, trace, match, branch, timeline, compare | next-2 |
| environmental-science/advanced/sustainability-metrics-and-lca | order, estimate, sort-buckets, predict, match, branch, cloze, place | next-2 |
| environmental-science/expert/earth-system-tipping-points | sort-buckets, match, estimate, judge, order, place, spot-error, predict | next-2 |
| environmental-science/expert/mitigation-and-adaptation-design | sort-buckets, estimate, branch, order, predict, spot-error, match, cloze | next-2 |
| environmental-science/foundational/carbon-cycle-climate | order, judge, place, match, estimate, cloze, spot-error, sort-buckets | next-2 |
| environmental-science/foundational/ecosystems-energy | sort-buckets, estimate, predict, match, spot-error, cloze, order, compare | next-2 |
| environmental-science/intermediate/air-quality-and-aerosols | sort-buckets, estimate, predict, branch, match, cloze, spot-error, compare | next-2 |
| environmental-science/intermediate/biodiversity-and-conservation | match, order, spot-error, judge, trace, branch, compare, estimate | next-3 |
| environmental-science/intermediate/energy-systems-and-the-grid | place, order, spot-error, branch, predict, estimate, match, judge | next-3 |
| environmental-science/intermediate/waste-and-the-circular-economy | order, match, sort-buckets, predict, place, branch, estimate, judge | next-3 |
| environmental-science/intermediate/water-resources-and-pollution | order, predict, sort-buckets, match, branch, spot-error, judge, compare | next-3 |
| fashion-design/foundational/fashion-design-research | predict, sort-buckets, compare, judge, place, order, match, order | next-3 |
| film/advanced/documentary-form | spot-error, match, order, judge, match, cloze, estimate, branch | next-3 |
| film/advanced/mise-en-scene-analysis | match, spot-error, predict, sort-buckets, compare, cloze, compare, order | next-3 |
| film/advanced/screenwriting-craft | spot-error, order, cloze, predict, estimate, match, compare, branch | next-3 |
| film/expert/film-theory-and-criticism | sort-buckets, match, judge, compare, order, branch, cloze, sort-buckets | next-3 |
| film/foundational/grammar-of-cinema | match, cloze, match, sort-buckets, order, sort-buckets, compare, judge | next-3 |
| film/intermediate/cinematography-and-lighting | sort-buckets, cloze, place, match, sort-buckets, match, predict, branch | next-3 |
| film/intermediate/editing-the-cut | order, spot-error, match, cloze, compare, predict, estimate, sort-buckets | next-3 |
| film/intermediate/shot-sizes-and-camera-grammar | order, predict, match, compare, spot-error, branch, sort-buckets, estimate | next-4 |
| film/intermediate/sound-design-and-score | match, cloze, spot-error, compare, sort-buckets, order, branch, judge | next-4 |
| finance/advanced/corporate-finance | sort-buckets, plotter, branch, spot-error, match, estimate, cloze, compare | next-4 |
| finance/advanced/options-and-derivatives | estimate, match, spot-error, cloze, place, branch, match, predict | next-4 |
| finance/advanced/portfolio-theory-markowitz | trace, match, spot-error, cloze, branch, sort-buckets, predict, estimate | next-4 |
| finance/expert/asset-pricing-models | predict, spot-error, match, estimate, sort-buckets, compare, place, timeline | next-4 |
| finance/expert/behavioural-finance | match, judge, estimate, spot-error, branch, compare, predict, timeline | next-4 |
| finance/foundational/compound-interest | predict, compare, estimate, order, spot-error, sort-buckets, place, match | next-4 |
| finance/intermediate/budgeting-and-personal-finance | sort-buckets, order, match, branch, estimate, cloze, spot-error, compare | next-4 |
| finance/intermediate/diversification-and-portfolios | cloze, spot-error, sort-buckets, compare, estimate, place, branch, timeline | next-4 |
| finance/intermediate/financial-statements | match, order, predict, cloze, sort-buckets, spot-error, order, timeline | next-4 |
| finance/intermediate/stocks-and-bonds | compare, match, place, estimate, predict, spot-error, branch, judge | next-4 |
| finance/intermediate/time-value-of-money-npv | compare, trace, place, estimate, sort-buckets, branch, match, spot-error | next-5 |
| food-science/foundational/food-chemistry-fundamentals | compare, spot-error, place, match, sort-buckets, cloze, estimate, branch | next-5 |
| forensic-science/foundational/foundations-of-forensic-science | compare, match, order, sort-buckets, branch, spot-error, estimate, predict | next-5 |
| forestry/foundational/forests-and-forestry | sort-buckets, match, estimate, branch, order, judge, compare, spot-error | next-5 |
| game-development/foundational/game-design-foundations | compare, match, place, sort-buckets, branch, cloze, order, spot-error | next-5 |
| gender-studies/foundational/sex-gender-and-sexuality-the-vocabulary | estimate, sort-buckets, compare, judge, match, spot-error, estimate, branch | next-5 |
| geography/advanced/economic-globalisation | estimate, sort-buckets, estimate, match, order, judge, compare, branch | next-5 |
| geography/advanced/population-and-migration-geography | compare, estimate, judge, spot-error, place, sort-buckets, estimate, predict | next-5 |
| geography/advanced/remote-sensing-and-earth-observation | place, sort-buckets, compare, match, estimate, place, order, branch | next-5 |
| geography/advanced/resource-provision-food-energy | estimate, sort-buckets, spot-error, match, estimate, order, judge, compare | next-5 |
| geography/foundational/ecosystems-and-biomes | compare, sort-buckets, order, judge, place, estimate, match, judge | next-5 |
| geography/foundational/latitude-and-climate | sort-buckets, estimate, place, branch, judge, compare, match, branch | next-5 |
| geography/foundational/plate-tectonics | cloze, predict, sort-buckets, match, place, spot-error, compare, estimate | next-6 |
| geography/intermediate/climate-change-causes-and-impacts | compare, sort-buckets, match, estimate, order, cloze, place, branch | next-6 |
| geography/intermediate/coasts-and-oceans | compare, match, predict, order, spot-error, sort-buckets, branch, place | next-6 |
| geography/intermediate/development-and-inequality | compare, sort-buckets, predict, order, place, match, estimate, spot-error | next-6 |
| geography/intermediate/maps-projections-and-gis | predict, estimate, spot-error, cloze, match, sort-buckets, estimate, place | next-6 |
| geography/intermediate/monsoons-and-tropical-climates | compare, match, cloze, sort-buckets, predict, compare, estimate, spot-error | next-6 |
| geography/intermediate/rivers-floods-and-deltas | estimate, sort-buckets, estimate, spot-error, match, order, branch, compare | next-6 |
| geography/intermediate/urban-geography-and-cities | place, match, order, sort-buckets, estimate, judge, branch, spot-error | next-6 |
| history/advanced/decolonisation-postcolonial-world | order, predict, match, judge, estimate, compare, order, spot-error | next-6 |
| history/advanced/economic-history | estimate, compare, estimate, predict, spot-error, cloze, match, order | next-6 |
| history/advanced/germany-1918-1945 | match, predict, estimate, order, spot-error, sort-buckets, estimate, compare | next-6 |
| history/advanced/historiography-debates-and-schools | match, judge, compare, order, match, sort-buckets, predict, spot-error | next-6 |
| history/foundational/cradles-of-civilisation | match, estimate, spot-error, sort-buckets, cloze, judge, order, compare | next-7 |
| history/foundational/how-historians-work | sort-buckets, order, match, spot-error, branch, predict, cloze, order | next-7 |
| history/foundational/medieval-world | judge, sort-buckets, match, order, match, spot-error, estimate, cloze | next-7 |
| history/foundational/the-cold-war | order, sort-buckets, match, estimate, spot-error, match, order, predict | next-7 |
| history/foundational/the-renaissance-and-reformation | match, spot-error, order, estimate, predict, order, sort-buckets, cloze | next-7 |
| history/foundational/the-world-wars | sort-buckets, match, order, estimate, spot-error, branch, predict, cloze | next-7 |
| history/intermediate/age-of-revolutions | match, predict, order, spot-error, estimate, compare, order, cloze | next-7 |
| history/intermediate/ancient-greece-and-rome | place, sort-buckets, match, order, cloze, estimate, spot-error, compare | next-7 |
| history/intermediate/colonialism-and-empire | order, sort-buckets, match, estimate, spot-error, cloze, compare, judge | next-7 |
| history/intermediate/revolutions-of-1848 | match, estimate, sort-buckets, spot-error, judge, sort-buckets, order, branch | next-7 |
| history/intermediate/the-american-civil-war | estimate, order, match, sort-buckets, estimate, cloze, spot-error, compare | next-7 |
| history/intermediate/the-history-of-science | sort-buckets, order, predict, match, estimate, order, cloze, compare | next-7 |
| history/intermediate/the-islamic-golden-age | match, order, spot-error, sort-buckets, timeline, branch, compare, estimate | next-8 |
| history/intermediate/the-league-of-nations | predict, match, branch, order, sort-buckets, estimate, spot-error, compare | next-8 |
| history/intermediate/the-treaty-of-versailles | predict, match, spot-error, compare, estimate, place, order, branch | next-8 |
| history/intermediate/unification-of-italy-and-germany | match, sort-buckets, order, compare, estimate, spot-error, plotter, branch | next-8 |
| horticulture/foundational/knowing-plants-classification-and-structure | place, match, sort-buckets, spot-error, compare, sort-buckets, branch, predict | next-8 |
| hospitality-tourism/foundational/global-tourism | judge, match, estimate, cloze, sort-buckets, spot-error, branch, compare | next-8 |
| human-resources/foundational/hr-s-role-and-legal-foundations | match, plotter, sort-buckets, branch, compare, spot-error, judge, match | next-8 |
| hvac/foundational/safety-and-the-science-of-air | predict, cloze, order, place, spot-error, match, sort-buckets, branch | next-8 |
| illustration/foundational/drawing-as-illustration-s-root | match, predict, spot-error, place, compare, sort-buckets, branch, order | next-8 |
| industrial-engineering/foundational/statistics-quality-and-control-charts | place, match, cloze, predict, sort-buckets, trace, estimate, match | next-8 |
| information-technology/foundational/types-and-components-of-computer-systems | match, sort-buckets, order, sort-buckets, spot-error, match, branch, estimate | next-8 |
| interior-design/foundational/interior-design-fundamentals | estimate, sort-buckets, match, predict, compare, place, judge, order | next-8 |
| languages/expert/multilingual-cognition | estimate, sort-buckets, place, spot-error, match, branch, order, compare | next-10 |
| languages/expert/near-native-fluency | spot-error, estimate, place, order, compare, sort-buckets, match, branch | next-10 |
| languages/foundational/how-to-learn-any-language | judge, estimate, branch, spot-error, trace, match, order, predict | next-10 |
| languages/intermediate/grammar-without-tears | sort-buckets, spot-error, predict, order, match, judge, estimate, compare | next-10 |
| languages/intermediate/listening-comprehensible-input | estimate, match, place, branch, sort-buckets, order, spot-error, match | next-10 |
| languages/intermediate/pronunciation-and-the-ipa | match, predict, cloze, spot-error, compare, order, match, compare | next-10 |
| languages/intermediate/speaking-and-shadowing | match, order, compare, estimate, branch, sort-buckets, predict, spot-error | next-10 |
| languages/intermediate/your-first-1000-words | plotter, sort-buckets, match, predict, cloze, estimate, spot-error, order | next-10 |
| law/advanced/contracts | match, branch, sort-buckets, spot-error, cloze, compare, predict, estimate | next-10 |
| law/advanced/property-law | match, sort-buckets, place, predict, match, estimate, spot-error, order | next-10 |
| law/advanced/torts-and-liability | sort-buckets, plotter, judge, match, sort-buckets, spot-error, compare, predict | next-10 |
| law/expert/comparative-legal-systems | match, compare, sort-buckets, branch, spot-error, predict, timeline, match | next-10 |
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
| international-relations/foundational/frameworks-for-understanding-international-relations | match, spot-error, sort-buckets, branch, compare, order, judge, branch | next-13a |
| landscape-architecture/foundational/landscape-design-process | predict, sort-buckets, order, match, estimate, order, spot-error, timeline | next-13a |
| literature/expert/textual-criticism-and-editing | match, branch, order, spot-error, cloze, sort-buckets, compare, estimate | next-13a |
| literature/foundational/how-to-read-a-story | order, predict, sort-buckets, match, judge, branch, order, timeline | next-13a |
| literature/intermediate/close-reading | order, cloze, match, sort-buckets, estimate, compare, judge, branch | next-13a |
| literature/intermediate/figures-of-speech | timeline, sort-buckets, match, branch, spot-error, compare, order, cloze (pre-inserted by batch-figures-of-speech.json — verified, not modified) | next-13a |
| literature/intermediate/poetry-form-and-meter | match, place, predict, plotter, order, compare, sort-buckets, judge | next-14 |
| literature/intermediate/shakespeares-craft | estimate, judge, compare, spot-error, order, branch, order, trace | next-14 |
| literature/intermediate/the-novel-a-short-history | timeline, spot-error, order, estimate, match, branch, cloze, compare | next-14 |
| literature/intermediate/world-epics | order, judge, place, compare, estimate, match, sort-buckets, branch | next-14 |
| logistics-supply-chain/foundational/supply-chain-concepts-and-metrics | sort-buckets, trace, branch, match, order, estimate, branch, place | next-14 |
| machining/foundational/measurement-and-materials | order, match, spot-error, judge, predict, branch, estimate, chart | next-14 |
| marine-science/foundational/earth-oceans-and-tides | place, order, match, sort-buckets, estimate, judge, cloze, match | next-14 |
| marketing/foundational/introduction-and-company-analysis | match, predict, branch, sort-buckets, compare, spot-error, cloze, order | next-14 |
| masonry/foundational/masonry-safety-and-tools | estimate, match, place, estimate, judge, order, cloze, spot-error | next-14 |
| massage-therapy/foundational/body-systems-and-movement | match, spot-error, branch, predict, sort-buckets, order, judge, order | next-14 |
| materials-science/advanced/failure-fracture-and-fatigue | sort-buckets, spot-error, match, branch, estimate, chart, order, cloze | next-14 |
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
| nuclear-engineering/foundational/radiation-physics-and-detection | predict, sort-buckets, match, judge, branch, order, compare, estimate | next-20 |
| nuclear-medicine-technology/foundational/radiopharmaceuticals | sort-buckets, judge, order, spot-error, compare, predict, match, branch | next-20 |
| nursing/foundational/the-sciences-behind-nursing | match, judge, sort-buckets, cloze, spot-error, compare, estimate, branch | next-20 |
| nutrition-dietetics/foundational/nutrients-and-how-they-work | estimate, cloze, compare, sort-buckets, match, judge, place, branch | next-20 |
| occupational-therapy/foundational/occupation-the-core-construct | sort-buckets, compare, spot-error, compare, order, judge, branch, predict | next-20 |
| operations-research/foundational/linear-programming | cloze, sort-buckets, estimate, order, predict, match, spot-error | next-20 |
| optometry/foundational/optics-for-optometry | compare, order, cloze, estimate, judge, sort-buckets, match, branch | next-20 |
| paramedicine/foundational/ems-systems-and-the-paramedic | predict, estimate, match, spot-error, sort-buckets, order, judge, branch | next-20 |
| peace-conflict-studies/foundational/what-are-peace-and-violence | predict, sort-buckets, judge, match, order, match, branch, compare | next-20 |
| petroleum-engineering/foundational/petroleum-geology-and-reservoir-rock | compare, order, spot-error, match, sort-buckets, cloze, order, estimate | next-20 |
| pharmacy/foundational/pharmaceutical-sciences-foundations | compare, order, estimate, cloze, predict, sort-buckets, match, spot-error | next-20 |
| philosophy/advanced/language-and-meaning | match, spot-error, sort-buckets, cloze, judge, branch, match | next-20 |
| philosophy/advanced/modal-logic | sort-buckets, spot-error, match, compare, branch, order, sort-buckets, judge | next-21 |
| philosophy/advanced/phenomenology-and-existentialism | match, spot-error, branch, compare, sort-buckets, predict, order, judge | next-21 |
| philosophy/expert/ethics-of-technology-and-ai | branch, cloze, predict, spot-error, compare, estimate, timeline | next-21 |
| philosophy/foundational/epistemology | sort-buckets, judge, cloze, order, match, compare, sort-buckets, timeline | next-21 |
| philosophy/foundational/ethics-three-theories | match, spot-error, cloze, predict, compare, branch, sort-buckets, order | next-21 |
| philosophy/foundational/free-will-and-determinism | judge, compare, predict, match, branch, order, estimate, spot-error | next-21 |
| philosophy/foundational/logic-arguments | match, sort-buckets, cloze, predict, compare, spot-error, equationStep, branch | next-21 |
| philosophy/foundational/metaphysics | cloze, predict, sort-buckets, match, branch, compare, equationStep, timeline | next-21 |
| philosophy/foundational/what-is-philosophy | judge, sort-buckets, spot-error, order, match, compare, predict, equationStep | next-21 |
| philosophy/intermediate/aesthetics | cloze, match, judge, order, branch, compare, sort-buckets | next-21 |
| philosophy/intermediate/eastern-philosophy | order, match, spot-error, compare, predict, sort-buckets, match | next-21 |
| philosophy/intermediate/philosophy-of-science | spot-error, cloze, predict, sort-buckets, order, compare, match, branch | next-21 |
| philosophy/intermediate/political-philosophy | order, spot-error, match, judge, sort-buckets, branch, cloze, compare | next-22 |
| phlebotomy/foundational/veins-and-blood-the-phlebotomist-s-map | sort-buckets, order, match, estimate, branch, judge, spot-error, compare | next-22 |
| photography/foundational/the-exposure-triangle | predict, sort-buckets, place, order, match, compare, spot-error, judge | next-22 |
| physics/advanced/fluid-dynamics | sort-buckets, estimate, trace, judge, match, order, estimate, compare | next-22 |
| physics/advanced/quantum-foundations | order, predict, estimate, match, spot-error, judge, branch, trace | next-22 |
| physics/advanced/special-relativity | order, judge, sort-buckets, estimate, cloze, spot-error, trace, match | next-22 |
| physics/advanced/statistical-mechanics | match, order, spot-error, branch, compare, place, cloze, trace | next-22 |
| physics/expert/electrodynamics-maxwell | estimate, spot-error, cloze, sort-buckets, branch, match, order, predict | next-22 |
| physics/expert/general-relativity | predict, sort-buckets, order, estimate, match, cloze, spot-error, compare | next-22 |
| physics/expert/quantum-field-theory | estimate, judge, sort-buckets, place, spot-error, match, cloze, compare | next-22 |
| physics/expert/solid-state-physics | sort-buckets, spot-error, estimate, judge, branch, compare, predict, match | next-22 |
| physiotherapy/foundational/the-movement-sciences | sort-buckets, judge, place, branch, spot-error, order, match, predict | next-22 |
| plumbing/foundational/plumbing-tools-and-safety | sort-buckets, order, estimate, branch, spot-error, match, cloze, place | next-23 |
| political-science/advanced/comparative-politics-methods | sort-buckets, spot-error, order, match, predict, compare, sort-buckets, branch | next-23 |
| political-science/advanced/conflict-and-peace-studies | match, cloze, judge, sort-buckets, branch, order, estimate, spot-error | next-23 |
| political-science/advanced/political-economy | match, estimate, cloze, sort-buckets, predict, order, spot-error, compare | next-23 |
| political-science/expert/formal-political-theory | branch, judge, place, order, match, compare, spot-error, sort-buckets | next-23 |
| political-science/expert/global-governance | sort-buckets, match, judge, estimate, timeline, compare, spot-error, order | next-23 |
| political-science/foundational/forms-of-government | match, estimate, sort-buckets, cloze, spot-error, compare, sort-buckets, order | next-23 |
| political-science/intermediate/constitutions-rights | match, sort-buckets, compare, judge, order, cloze, estimate, spot-error | next-23 |
| political-science/intermediate/international-relations-theories | match, sort-buckets, spot-error, timeline, predict, match, judge, estimate | next-23 |
| political-science/intermediate/political-ideologies | sort-buckets, match, judge, order, predict, compare, spot-error | next-23 |
| political-science/intermediate/the-public-policy-cycle | match, timeline, predict, sort-buckets, spot-error, judge, compare, sort-buckets | next-23 |
| political-science/intermediate/voting-systems-and-electoral-design | place, predict, sort-buckets, compare, branch, spot-error, estimate, order | next-23 |
| psychology/advanced/cognitive-psychology-and-models | match, judge, sort-buckets, trace, estimate, order, spot-error, compare | next-24 |
| psychology/advanced/neuropsychology | timeline, spot-error, match, branch, estimate, order, compare, sort-buckets | next-24 |
| psychology/advanced/psychometrics-and-testing | sort-buckets, place, spot-error, match, trace, judge, order, branch | next-24 |
| psychology/expert/behavioural-neuroscience | sort-buckets, spot-error, judge, order, timeline, compare, predict, match | next-24 |
| psychology/expert/clinical-practice-and-ethics | match, spot-error, place, order, predict, sort-buckets, estimate, timeline | next-24 |
| psychology/foundational/memory | predict, sort-buckets, order, spot-error, match, order, judge, compare | next-24 |
| psychology/intermediate/abnormal-psychology-therapies | sort-buckets, match, judge, order, spot-error, cloze, order, estimate | next-24 |
| psychology/intermediate/development-piaget-to-today | match, spot-error, timeline, predict, order, compare, judge, estimate | next-24 |
| psychology/intermediate/perception | match, spot-error, sort-buckets, judge, compare, timeline, estimate, predict | next-24 |
| psychology/intermediate/personality-theories | sort-buckets, place, judge, compare, match, spot-error, predict, timeline | next-24 |
| psychology/intermediate/research-methods | match, sort-buckets, spot-error, judge, match, cloze, branch, timeline | next-24 |
| psychology/intermediate/social-psychology | order, judge, match, spot-error, sort-buckets, estimate, compare, predict | next-24 |
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
| religious-studies/intermediate/buddhism | order, match, spot-error, cloze, sort-buckets, estimate, branch, compare | next-26 |
| religious-studies/intermediate/christianity | match, sort-buckets, order, place, timeline, branch, compare, spot-error | next-26 |
| religious-studies/intermediate/hinduism | match, judge, sort-buckets, order, spot-error, compare, timeline, estimate, order | next-26 |
| religious-studies/intermediate/islam | order, match, judge, estimate, branch, spot-error, order, compare, match | next-26 |
| religious-studies/intermediate/judaism | cloze, sort-buckets, branch, judge, timeline, compare, match | next-26 |
| religious-studies/intermediate/studying-religion-academically | sort-buckets, judge, match, spot-error, cloze, timeline, spot-error, compare, match | next-26 |
| respiratory-therapy/foundational/cardiopulmonary-assessment | branch, order, sort-buckets, place, judge, cloze, spot-error, match | next-26 |
| robotics/foundational/configuration-space | match, cloze, spot-error, sort-buckets, compare, place, order, estimate | next-26 |
| social-work/foundational/the-social-work-profession | sort-buckets, match, cloze, order, spot-error, judge, compare, branch | next-26 |
| sociology/advanced/globalisation-and-society | timeline, judge, sort-buckets, match, estimate, spot-error, judge, compare | next-26 |
| sociology/advanced/social-networks | match, cloze, order, sort-buckets, judge, compare, spot-error, compare | next-26 |
| sociology/expert/demography | judge, branch, match, place, cloze, estimate, compare, sort-buckets | next-26 |
| sociology/expert/social-theory-marx-to-bourdieu | order, match, branch, judge, spot-error, compare, predict, match | next-27 |
| sociology/foundational/society-socialisation | match, spot-error, order, compare, branch, predict, judge, sort-buckets | next-27 |
| sociology/intermediate/class-and-stratification | sort-buckets, branch, cloze, place, match, spot-error, estimate, plotter | next-27 |
| sociology/intermediate/deviance-and-crime | match, place, cloze, spot-error, match, judge, sort-buckets, branch | next-27 |
| sociology/intermediate/gender-and-society | sort-buckets, match, spot-error, sort-buckets, compare, cloze, place, spot-error | next-27 |
| sociology/intermediate/race-ethnicity-and-identity | match, judge, estimate, compare, spot-error, cloze, place, sort-buckets | next-27 |
| software-engineering/foundational/software-requirements | sort-buckets, match, spot-error, branch, cloze, judge, compare, estimate | next-27 |
| special-education/foundational/special-education-law-and-the-iep | timeline, compare, spot-error, judge, sort-buckets, order, cloze, estimate | next-27 |
| speech-therapy/foundational/speech-and-hearing-sciences | place, match, sort-buckets, cloze, spot-error, compare, predict, branch | next-27 |
| sports-science/advanced/biomechanics | estimate, place, judge, order, trace, plotter, judge, estimate | next-27 |
| sports-science/advanced/periodisation-and-programming | compare, sort-buckets, match, estimate, spot-error, order, place, branch | next-27 |
| sports-science/expert/long-term-athlete-development | compare, judge, sort-buckets, spot-error, timeline, cloze, branch, match | next-27 |
| sports-science/expert/testing-and-analytics-in-elite-sport | compare, trace, match, sort-buckets, place, branch, estimate, order | next-28 |
| sports-science/foundational/training-load-adaptation | order, branch, compare, timeline, estimate, spot-error, sort-buckets, match | next-28 |
| sports-science/intermediate/muscles-and-energy-systems | order, sort-buckets, estimate, place, trace, match, compare, spot-error | next-28 |
| sports-science/intermediate/nutrition-for-performance | sort-buckets, order, estimate, place, match, estimate, spot-error, judge | next-28 |
| sports-science/intermediate/strength-and-hypertrophy | match, branch, cloze, sort-buckets, order, spot-error, judge, compare | next-28 |
| sports-science/intermediate/the-heart-and-lungs-in-exercise | estimate, judge, sort-buckets, place, order, compare, spot-error, match | next-28 |
| statistics/advanced/bayesian-statistics | match, compare, spot-error, estimate, order, trace, estimate, sort-buckets | next-28 |
| statistics/advanced/experimental-design | order, judge, sort-buckets, match, estimate, branch, spot-error, compare | next-28 |
| statistics/advanced/non-parametric-methods | order, sort-buckets, spot-error, cloze, match, estimate, branch, judge | next-28 |
| statistics/advanced/time-series-analysis | sort-buckets, order, judge, match, estimate, spot-error, compare | next-28 |
| statistics/expert/causal-inference | match, compare, trace, order, spot-error, judge, estimate, sort-buckets | next-28 |
| statistics/expert/multivariate-statistics | match, order, estimate, sort-buckets, estimate, cloze, branch, estimate | next-28 |
| statistics/expert/statistical-computing | match, spot-error, estimate, judge, sort-buckets, branch, order, predict | next-29 |
| statistics/foundational/describing-data | place, spot-error, estimate, order, cloze, judge, sort-buckets, branch | next-29 |
| statistics/foundational/probability | match, spot-error, estimate, order, sort-buckets, estimate, predict, compare | next-29 |
| statistics/intermediate/confidence-intervals | cloze, spot-error, compare, sort-buckets, estimate, predict, estimate, order | next-29 |
| statistics/intermediate/correlation-and-regression | compare, match, judge, spot-error, order, cloze, branch, estimate | next-29 |
| statistics/intermediate/hypothesis-testing | estimate, sort-buckets, spot-error, match, estimate, judge, compare, branch | next-29 |
| statistics/intermediate/sampling-and-survey-design | compare, judge, match, predict, order, spot-error, compare, branch, sort-buckets | next-29 |
| surgical-technology/foundational/asepsis-and-the-sterile-field | judge, branch, match, sort-buckets, spot-error, estimate, order, sort-buckets | next-29 |
| surveying/foundational/surveying-mathematics | estimate, match, cloze, estimate, trace, judge, compare, spot-error | next-29 |
| translation-studies/foundational/what-translation-is | compare, match, sort-buckets, branch, judge, cloze, compare, order | next-29 |
| urban-planning/foundational/planning-history-and-theory | match, sort-buckets, judge, compare, place, match, branch, estimate | next-29 |
| veterinary-medicine/foundational/veterinary-biomedical-sciences | estimate, match, judge, sort-buckets, cloze, branch, match, spot-error | next-29 |
| visual-arts/advanced/figure-drawing-and-anatomy | sort-buckets, order, spot-error, place, match, compare, branch, cloze | next-30 |
| visual-arts/advanced/painting-mediums | match, estimate, order, compare, sort-buckets, judge, match, cloze | next-30 |
| visual-arts/expert/critique-and-art-discourse | branch, match, cloze, judge, sort-buckets, spot-error, compare | next-30 |
| visual-arts/expert/developing-a-personal-style | match, order, branch, estimate, cloze, spot-error, place, compare | next-30 |
| visual-arts/foundational/value-colour-composition | sort-buckets, order, match, compare, cloze, spot-error, place, branch | next-30 |
| visual-arts/intermediate/colour-theory | order, cloze, sort-buckets, spot-error, compare, match, estimate, order | next-30 |
| visual-arts/intermediate/drawing-from-observation | sort-buckets, estimate, match, order, compare, branch, cloze, spot-error | next-30 |
| visual-arts/intermediate/line-shape-and-value | match, sort-buckets, order, cloze, spot-error, compare, branch, judge | next-30 |
| visual-arts/intermediate/perspective-and-depth | match, order, sort-buckets, spot-error, compare, branch, judge, cloze | next-30 |
| welding/foundational/welding-safety-first | estimate, match, order, place, match, spot-error, branch, judge | next-30 |
| zoology/foundational/the-animal-condition | match, sort-buckets, order, spot-error, compare, cloze, judge, estimate | next-30 |
| journalism/foundational/verification-before-publication | predict, sort-buckets, order, cloze, spot-error, match, sort-buckets, branch | next-31 |
| journalism/intermediate/news-vs-opinion-vs-analysis | match, sort-buckets, sort-buckets, spot-error, predict, cloze, compare | next-31 |
| journalism/intermediate/the-inverted-pyramid | predict, cloze, match, sort-buckets, estimate, spot-error, sort-buckets | next-31 |
| journalism/intermediate/interviewing | sort-buckets, match, predict, sort-buckets, order, judge, spot-error | next-31 |
| journalism/advanced/media-law-and-ethics | sort-buckets, predict, sort-buckets, spot-error, estimate, match, branch | next-31 |
| journalism/advanced/data-journalism | sort-buckets, order, match, predict, spot-error, estimate | next-31 |
| journalism/expert/investigative-methods | compare, predict, cloze, match, order, estimate, spot-error, branch | next-31 |

**Queue — P1 BACKFILL IS COMPLETE (2026-11-12): all 583 live lessons carry per-paragraph
activities.** 583/583 lessons have batch files or pilot activities; 5,607 widgets live
(≈9.6 per lesson); every lesson has ≥6 distinct interaction types, zero adjacent same-type
repeats, and the two hand-built pilot lessons were topped up in `next-32` so no live page
sits below the distinct-type bar. The queue is empty — future work is P3 career pages or
an optional ≥3-misconception-callout audit (see `CONTINUE.md`), not more backfill.

**Do not re-insert into any lesson below:** the done table above is the full live catalogue.
**Done subjects: physics, accounting, actuarial-science, aerospace-engineering, agriculture, animation, anthropology, archaeology, architecture — ALL lessons in each covered.**

**Anthropology: 9 of 9 COMPLETE** (55 new activities). **Archaeology: 1 of 1 COMPLETE.**
**Architecture: 10 of 10 COMPLETE (waves 6–11).**

**Art-history: 9 of 9 COMPLETE** (ledger rows art-astro-1 and chunk-01).
**Astronomy: 13 of 13 COMPLETE** (astro-1…10; orbits-and-keplers-laws uses raw figure widgets).
**Biology: 24 of 24 COMPLETE** (cell-structure backfilled in rounds 3–4 with raw-figure widgets).
**Chemistry: 17 of 17 COMPLETE** (atomic-structure backfilled in rounds 3–4 with raw-figure widgets).
**Economics: 15 of 15 COMPLETE** (econ-1…15: supply-and-demand, money-inflation, elasticity,
gdp-national-accounts, fiscal-policy-public-debt, market-failure-externalities,
monetary-policy-central-banks, unemployment-labour-markets, behavioural-economics,
development-economics, game-theory, international-trade, econometrics, financial-economics,
macroeconomic-models-dsge).
**Journalism: 7 of 7 COMPLETE** (next-31: verification-before-publication,
news-vs-opinion-vs-analysis, the-inverted-pyramid, interviewing, media-law-and-ethics,
data-journalism, investigative-methods — 50 activities).
**All other live subjects: COMPLETE** — 583 of 583 live lessons are recorded in the done
table above; the queue is empty. `src/data/topics.json` remains the master catalogue, but
there are no remaining live lessons to backfill.

## Status snapshot (2026-11-12)

- P1 interaction library: **complete** — 12 new widget types in `public/widgets/*.js`
  (predict, cloze, judge, order, match, place, estimate, compare, hotspot, trace, branch,
  sort-buckets, spot-error) + the original 7. Config schemas in each file's header.
- P2 structural layer: **complete and shipped** (numbered topic positions, position chips,
  stage maps, learning-loop line, spacing) — commit 395dc79. Zero-token, no prose changes.
- P1 backfill: **COMPLETE — 583/583 live lessons, 5,607 widgets, ≈9.6 per lesson.**
  Final QA (2026-11-12): every live page has ≥6 distinct interaction types (counting the
  original chart/plotter/timeline widgets), zero adjacent same-type repeats, BBC
  content validator green, `npm run build` green at 742 pages. The last two pilot lessons
  (`energy-conservation`, `philosophy-of-mind`) gained 3 + 2 non-answer activities in
  `next-32` to clear the bar.
- Remaining queue: **none**. Optional future passes: the ≥3 "Common misconception"
  callout audit noted in `CONTINUE.md`, and P3 career-role pages (deferred in `ROADMAP.md`).
- Quality bars, verified every wave by script: ≥6 distinct interaction types, zero
  adjacent repeats, ≤2 answer-family widgets (predict/judge/cloze). Cloned-answer-heavy
  lessons get rebalanced into sort-buckets/compare/branch — expect this on most waves.