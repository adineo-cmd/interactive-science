# CONTINUE.md — how to resume the book-depth expansion task

## What this project is
Interactive Atlas (adineo-cmd/interactive-science): 142 subjects / 12 domains, every subject
with a syllabus-backed program. All 577 live lessons get expanded from ~600-word snippets to
1,800–2,600-word book chapters. **Done: foundational 181/181 ✓, intermediate 191/191 ✓,
advanced 100/124 (adv-1..adv-3 complete; adv-4 partial). Remaining: 112 lessons** —
adv-4b (7), adv-5 (24), exp-1 (25), exp-2 (25), exp-3 (25), exp-4 (6).

## Repo state
- Branch main. origin/main is BEHIND: local has unpushed commits (Advanced tier batch work
  + JSX-brace fix). Push once you have fresh GitHub auth (old tokens expired).
- Uncommitted WIP may exist (partial adv-4b/adv-5 rewrites from interrupted agents) — commit
  as WIP or inspect with `git status` / `git diff`.

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
