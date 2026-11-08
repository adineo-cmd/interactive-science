# CONTINUE.md — book-depth expansion COMPLETE (Nov 1, 2026) · register campaign COMPLETE (Nov 8, 2026)

## What this project is
Interactive Atlas (adineo-cmd/interactive-science): 142 subjects / 12 domains, every subject
with a syllabus-backed program. All 577 live lessons are now 1,800–2,600-word book chapters
(strict visible-text count, frontmatter/tags excluded), each with an <h2>The idea</h2> opener,
syllabus-topic sections with worked examples, "Common misconception" callouts, a
<h2>Going deeper</h2> expert section, and sources last. **STATUS: COMPLETE and pushed
(through 06a7a3e, Nov 1, 2026). Validator green, build green (724 pages).**

## Register campaign COMPLETE (Nov 2026, through 83c9de3)
Audit-driven waves (`pipeline/audit_lessons.py --tier <t>`, weakest-first, insert-only
register devices: Where you are / So far recaps / What to notice per widget / Check yourself /
Key takeaways / Where this goes next / OpenStax attribution) closed every tier at 100% Good:
foundational 181/181, intermediate 194/194, advanced 119/119, expert 83/83. Every lesson now
also has ≥3 misconception callouts and a What-to-notice under every widget (pre-existing
quiz-after-sources layout left in place, notices placed after the quiz). Do NOT regenerate
passing lessons; any future content work should re-run the audit and gap-fix only what it flags.

Note: the 1,800 floor above is the strict visible-text count. An earlier convention counted
raw file words (incl. markup), which left 37 lessons marginally short; they were topped up
in commits 610e526 and 06a7a3e. Remaining known gap (optional future pass): 420 lessons have
fewer than 3 "Common misconception" callouts (the playbook requires callouts but never
quantified them; a quantified ≥3 audit was applied only to the Nov 2026 batches).

## If resuming any content work
- Batch files: astro-website/scripts/expand-batches/*.json (spec + lesson lists per batch).
- Per-batch brief: see git history of this file (the expansion playbook is preserved in the
  pre-Nov-1 version; core rules: preserve frontmatter/TopicPage/widgets/sources byte-exact,
  no LaTeX, no bare '<'+space/digit, prose braces as &#123;…&#125;, ≤1 new widget/page).

## Repo state
- Branch main. Pushed through b6c4743 (Oct 31): GitHub auth works again — reuse the MCP
  personal-account token at ~/.config/mcp/secrets/github-personal.token as a git credential
  helper (repo owner adineo-cmd; the github-work token is the adineo-cmd2 account).
- On this machine node_modules was missing: run `npm ci`, then
  `node node_modules/esbuild/install.js` (npm blocks postinstall scripts), then build.
- 946 mode-only "modified" files are copy artifacts; `git config core.fileMode false`
  silences them.

## How to run
```
cd astro-website
export PATH=~/.local/opt/node-v22.14.0-linux-x64/bin:$PATH   # this machine only; laptop needs Node 18+
python3 scripts/validate-content.py
npm run build-search && npm run build
```
Site: Astro 5, base /interactive-science. Deploy: push to main → GitHub Actions.

## The expansion playbook (per batch of ~25 lessons)
Batch files: `astro-website/scripts/expand-batches/*.json` — remaining ones to process:
**adv-4b, adv-5, exp-1, exp-2, exp-3, exp-4**. Give each batch to an agent with this brief:

> Expand each lesson page at src/pages/<slug>.astro into a 1,800–2,600-word book chapter.
> For each: (1) get title/summary from src/data/topics.json; read the unit's topics from
> src/data/syllabus/<subject>.json (unit whose lessons[] contains the slug) — that checklist
> must ALL be covered; (2) preserve the frontmatter, TopicPage slug, all <Widget> components
> and configs byte-exact, and the sources line; (3) rewrite the body: <h2>The idea</h2> opener,
> one <h2> per syllabus topic with mechanism + why + worked example with real numbers +
> "Common misconception" callouts (<p><em>Common misconception:</em> …</p>), then
> <h2>Going deeper</h2> (expert layer), sources last. Rules: no LaTeX/$math$ (pages are HTML;
> unicode ² √ Δ × ≈ ° + <sub>/<sup> only); never write bare "<" followed by space/digit
> (breaks the Astro compiler — say "under 7" instead); math set braces in prose must be
> &#123;…&#125; entities; ≤1 new widget per page (see public/widgets/*.js for schemas;
> mathexpr grammar only; quiz.js exists); verify facts (WebSearch) or drop them; touch nothing
> outside the batch; final python word-count check ≥1,800 per file.

## Expansion waves so far (for reference)
found-1..8 (181), inter-1..8 + inter-3b/4b (191), adv-1..3 + adv-4 partial (100).

## Push (when GitHub auth works)
```
git push origin main   # needs a token with repo write; credential helper pattern:
git -c credential.helper='!f() { echo "username=adineo-cmd"; echo "password=$TOKEN"; }; f' push origin main
```
Known warning sign: `npm run build | tail -2` shows "addChunk" lines = a page has a syntax
error; find it via the build log's file path. Bare "<" in prose and bare "{set}" braces in
prose are the two recurring causes.

## Subject/catalog reference
- Catalog: astro-website/src/data/topics.json (1352 topics; 577 live / 775 planned)
- Programs: astro-website/src/data/syllabus/*.json (142 files)
- Domains: astro-website/src/data/domains.json (12)
- Kid summaries: astro-website/src/data/kid-summaries.json (all 577 live lessons)
