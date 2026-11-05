# AGENT-TASKS.md — Work division for the Interactive Atlas content pipeline

Agreed strategy (2026-11-04): **extract content from open-licensed textbooks, generate
as little as possible with AI.** AI is used only to simplify hard passages, fill gaps,
place interactive widgets, add practice questions, and check consistency — per PEDAGOGY.md.

---

## Machine A (this agent — has the repo, push access, deploys)

Already done:
- Downloaded to `books/hf/openstax/` — 73 OpenStax books as text (CC BY 4.0), from
  Hugging Face dataset `crumb/openstax-text`.
- Downloaded `books/hf/libretexts/libretexts-0000.json.gz` — 40,049 LibreTexts pages
  (Common Pile corpus).
- Downloaded Saylor texts to `books/` (Elementary/Intermediate Algebra, General Chemistry).
- Built `pipeline/build_source_packs.py` — parses 4,939 OpenStax sections, matches each
  lesson to its source sections by full-text similarity, writes source packs.
- **171/181 foundational lessons have source packs** in `pipeline/packs/`.

Owns going forward:
1. Integrate the LibreTexts corpus into the matcher (second source for subjects OpenStax lacks).
2. Build the lesson transformer: source pack + PEDAGOGY.md → final lesson page
   (simplify language, add analogies, place widgets, callouts, Check yourself, takeaways).
3. All git commits, pushes, deploys, verification (widgets, safety scans).
4. AI simplification/consistency passes server-side.

## Machine B (your PC agent — human-supervised fetch + review)

Task 1 — Gap acquisition (sources this machine cannot reach):
- Try direct downloads your home network allows: openstax.org PDFs, ncert.nic.in,
  infobooks.org, freebookcentre.net. Save into `books/raw-incoming/<source-name>/`.
- Priority subjects with no OpenStax coverage: art history, film, journalism/media,
  dentistry, optometry, counseling, petroleum engineering, naval architecture,
  accounting practice materials, music theory, criminology.
- If a PDF is scanned (no text layer), run `ocrmypdf input.pdf output.pdf`.

Task 2 — Beginner QA reviews:
- Read converted lessons (site or repo) as a first-time learner.
- Write one note per lesson to `pipeline/reviews/<slug>.md`:
  what is still confusing, which sentence lost you, what example would help.

Task 3 — Fact spot-checks:
- Pick any lesson, compare its claims against the matching source pack in
  `pipeline/packs/<slug>.md`; flag mismatches in the same reviews folder.

Task 4 — Report dataset gaps:
- Any subject with no usable open source → list it; AI-generation remains the
  fallback for those lessons only.

## Shared conventions
- `books/` — all source PDFs/texts (gitignored; never pushed).
- `books/raw-incoming/` — Machine B drop folder (unreviewed files).
- `pipeline/packs/` — per-lesson source packs (committed; CC BY with attribution embedded).
- `pipeline/reviews/` — Machine B QA notes (committed).
- Every lesson's sources line keeps the open-license attribution
  (e.g. "Source text: OpenStax, CC BY 4.0 — adapted for Interactive Atlas").

## Sync
- Machine A commits and pushes everything (single writer for git).
- Machine B works on a clone or simply returns files/notes through the chat;
  Machine B never runs `git push`.

## UPDATE 2026-11-04 — PC agent tasks folded back to Machine A
The PC agent is unavailable; ALL tasks below and all acquisition are handled by Machine A.
The standing acquisition hierarchy is now codified in PEDAGOGY.md §16: extract → search
for databases → verify → generate only as last resort. Current coverage gaps being filled
by internet database searches: art history, film, journalism, dentistry, optometry,
counseling, petroleum engineering, naval architecture, hospitality, accounting practice.
