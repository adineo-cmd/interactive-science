# Verified source registry — acquisition targets for coverage gaps

Per PEDAGOGY.md §16: extract → search for databases → verify → generate last.
This registry tracks verified sources for domains the acquired datasets
(OpenStax 73 books, LibreTexts 36k pages, Saylor, MedRAG) do not cover well.

## Status: covered by acquired datasets ✓
- STEM, economics, sociology, psychology, history (US/World), government,
  anatomy/physiology, business ethics, accounting (FinancialAccounting-OP),
  medical sciences (MedRAG chunks) — all matched in pipeline/packs/.

## Gap domains — verified sources awaiting acquisition

### Art history
- **Boundless Art History** — CC BY-SA, 400+ images, downloadable PDF — candidate primary source.
- **Art History Teaching Resources** (arthistoryteachingresources.org) — CC BY-NC — reference only.
- Open Textbook Library (open.umn.edu) art section — check titles.
- Status: NOT ACQUIRED. Next step: locate a full-text download of Boundless Art History.

### Film
- **Moving Pictures: An Introduction to Cinema** — Open Textbook Library, CC-licensed, PDF/EPUB — candidate primary source.
- **An Introduction to Film (3rd ed.)**, Teresa Fisher — CUNY Academic Works OER (2024).
- **Contemporary World Cinema** — eCampusOntario Pressbooks.
- Status: NOT ACQUIRED.

### Journalism / media writing
- **Broccoli and Chocolate: A Beginner's Guide to Journalism News Writing** — CC BY-SA (2024),
  pressbooks.pub/introjournalism — candidate primary source.
- **Writing for Electronic Media** — Open Textbook Library.
- **News Writing Workbook** — pressbooks.cuny.edu/journalismworkbook.
- Status: NOT ACQUIRED.

### Accounting (practice depth)
- HF: `kothasuhas/accounting-textbooks-6/15/16` — parquet, license untagged — inspect before use.
- Already covered for basics by FinancialAccounting-OP (in openstax-text).

### Music theory
- HF: MusicTheoryBench, Chordonomicon, music_abc_notation — QA/notation data, not prose.
- LibreTexts music shelves partially match. Status: WEAK — needs a prose source.

## Search reminders
- Prefer CC BY / CC BY-SA. CC BY-NC usable for a free educational site but record the NC.
- Avoid Scribd/aggregator copies of commercial textbooks (piracy).
- Pressbooks and Open Textbook Library titles usually have direct PDF/EPUB downloads.
- After acquiring: run extraction → add to the matcher → rebuild packs for the
  affected subjects (pipeline/build_source_packs.py) → transform pass.
