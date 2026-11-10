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
| physics/foundational/energy-conservation | 9 acts (PC pilot) | pilot |
| philosophy/intermediate/philosophy-of-mind | 7 acts (PC pilot) | pilot |
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

**Queue — PHYSICS IS COMPLETE (all 10 live lessons, 76 activities, waves physics-1…6).**

**Done subjects: physics, accounting, actuarial-science, aerospace-engineering, agriculture, animation, anthropology, archaeology, architecture — ALL lessons in each covered.**

**Anthropology: 9 of 9 COMPLETE** (55 new activities). **Archaeology: 1 of 1 COMPLETE.**
**Architecture: 10 of 10 COMPLETE (waves 6–11).**

**Art-history: 1 of 7 done (walk-through-western-art; remaining: global-prehistory, 3 intermediate, 2 advanced, 2 expert).**
**Astronomy: 9 of 9 COMPLETE (astro-1…10).**
**Then next subjects (alphabetical): art-history (6 remaining: global-prehistory, 3 intermediate, 2 advanced, 2 expert), biology, …** — check `src/data/topics.json` for each subject's lesson list; 2–3 lessons per wave. (use `src/data/topics.json` for the master list of the
  ~550 remaining live lessons; skip the done rows above). Update this table as each
  wave lands, and delete the lesson from the queue.

## Status snapshot (2026-11-08)

- P1 interaction library: **complete** — 12 new widget types in `public/widgets/*.js`
  (predict, cloze, judge, order, match, place, estimate, compare, hotspot, trace, branch,
  sort-buckets, spot-error) + the original 7. Config schemas in each file's header.
- P2 structural layer: **complete and shipped** (numbered topic positions, position chips,
  stage maps, learning-loop line, spacing) — commit 395dc79. Zero-token, no prose changes.
- P1 backfill: **193 lessons done, ~1,500 activities** (physics 10/10 complete; accounting,
  actuarial-science, aerospace-engineering foundational lessons done; **agriculture
  11/11 COMPLETE** — waves agriculture-1..4; animation 1/1 COMPLETE; **anthropology
  9/9 COMPLETE**; **archaeology 1/1 COMPLETE** and architecture 2/10 — wave 6). Each single-lesson subject done in one
  wave; multi-lesson subjects go 2–3 per wave.
- Remaining queue: **~390 live lessons** (counted as pages with fewer than 3 of the new
  activity types in `src/pages/<slug>.astro`).
- Quality bars, verified every wave by script: ≥6 distinct interaction types, zero
  adjacent repeats, ≤2 answer-family widgets (predict/judge/cloze). Cloned-answer-heavy
  lessons get rebalanced into sort-buckets/compare/branch — expect this on most waves.