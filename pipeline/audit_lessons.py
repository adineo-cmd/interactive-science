#!/usr/bin/env python3
"""
Lesson health audit — identifies knowledge gaps and the weakest areas,
per the user directive: "identify knowledge gaps and improve the weakest
areas rather than regenerating everything."

Scores every lesson in a tier on PEDAGOGY.md structure compliance and depth:
  - register markers (Where you are / Check yourself / Key takeaways /
    Where this goes next / Going deeper)
  - "What to notice" guidance under widgets
  - "So far" recaps
  - misconception callouts
  - content depth (visible words)
Output: pipeline/audit-report.md (weakest first) + audit-report.json
"""
import glob, html, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "astro-website")
tier = "foundational"
if "--tier" in sys.argv:
    tier = sys.argv[sys.argv.index("--tier") + 1]

MARKERS = [
    ("Where you are, and what you will learn", 8, "Where you are"),
    ("Check yourself", 8, "Check yourself"),
    ("Key takeaways", 8, "Key takeaways"),
    ("Where this goes next", 6, "Where this goes next"),
    ("Going deeper", 5, "Going deeper"),
]

rows = []
for p in sorted(glob.glob(f"{SITE}/src/pages/subjects/*/{tier}/*.astro")):
    slug = p.replace(SITE + "/src/pages/", "").replace(".astro", "")
    t = open(p, encoding="utf-8").read()
    body = re.sub(r"^---.*?---", "", t, flags=re.S)
    text = html.unescape(re.sub(r"<[^>]+>", " ", body))
    n = len(re.findall(r"\S+", text))
    mc = body.count("<em>Common misconception:</em>")
    widgets = len(re.findall(r"<Widget\b", t))
    notices = body.count("What to notice")
    recaps = body.count("<strong>So far:</strong>")

    score = 0
    gaps = []
    for marker, pts, label in MARKERS:
        if marker in body:
            score += pts
        else:
            gaps.append(f"missing {label} ({pts})")
    if widgets:
        r = min(notices / widgets, 1)
        got = round(15 * r)
        score += got
        if got < 15:
            gaps.append(f"what-to-notice {notices}/{widgets} ({15 - got})")
    got = min(recaps, 2) / 2 * 10
    score += round(got)
    if recaps < 2:
        gaps.append(f"recaps {recaps}/2 ({10 - round(got)})")
    got = round(min(mc, 3) / 3 * 20)
    score += got
    if mc < 3:
        gaps.append(f"callouts {mc}/3 ({20 - got})")
    got = round(min(n, 2000) / 2000 * 15)
    score += got
    if n < 1800:
        gaps.append(f"depth {n}w ({15 - got})")

    rows.append({"slug": slug, "score": score, "words": n, "callouts": mc,
                 "widgets": widgets, "gaps": gaps})

rows.sort(key=lambda r: r["score"])
tiers = {"Weak (<40)": [r for r in rows if r["score"] < 40],
         "Needs work (40–79)": [r for r in rows if 40 <= r["score"] < 80],
         "Good (≥80)": [r for r in rows if r["score"] >= 80]}

report = [f"# Lesson health audit — {tier} tier", "",
          f"{len(rows)} lessons: " +
          " · ".join(f"{k}: {len(v)}" for k, v in tiers.items()), ""]
for band, lst in tiers.items():
    report.append(f"## {band} ({len(lst)})")
    for r in lst:
        report.append(f"- **{r['score']:3d}** {r['slug']} — {r['words']}w, "
                      f"{r['callouts']} callouts, {r['widgets']} widgets"
                      + (f" — GAPS: {'; '.join(r['gaps'])}" if r["gaps"] else ""))
    report.append("")

open(os.path.join(ROOT, "pipeline", "audit-report.md"), "w",
     encoding="utf-8").write("\n".join(report))
json.dump(rows, open(os.path.join(ROOT, "pipeline", "audit-report.json"), "w"),
          indent=1)
print(f"audited {len(rows)} lessons: " +
      " · ".join(f"{k}: {len(v)}" for k, v in tiers.items()))
print("weakest 10:")
for r in rows[:10]:
    print(f"  {r['score']:3d}  {r['slug']}  [{' ; '.join(r['gaps'])}]")
