#!/usr/bin/env python3
"""Promote the 10 new-field starter lessons from planned to live once their pages exist."""
import json
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "..", "src", "data", "topics.json")
PAGES = os.path.join(ROOT, "..", "src", "pages")

WIDGETS = {
    "subjects/accounting/foundational/the-fundamentals-of-accounting": ["equationStep", "sliderLab"],
    "subjects/drama/foundational/elements-of-practical-drama": ["equationStep", "diagramBuilder"],
    "subjects/hospitality-tourism/foundational/global-tourism": ["plotter", "timeline"],
    "subjects/information-technology/foundational/types-and-components-of-computer-systems": ["equationStep", "plotter"],
    "subjects/media-studies/foundational/the-theoretical-framework": ["equationStep", "plotter"],
    "subjects/criminology/foundational/changing-awareness-of-crime": ["equationStep", "timeline"],
    "subjects/public-health/foundational/profession-and-science-of-public-health": ["timeline", "plotter"],
    "subjects/education/foundational/the-learning-process": ["plotter", "equationStep"],
    "subjects/marketing/foundational/introduction-and-company-analysis": ["equationStep", "sliderLab"],
    "subjects/international-relations/foundational/frameworks-for-understanding-international-relations": ["timeline", "equationStep"],
}

with open(DATA, encoding="utf-8") as f:
    data = json.load(f)

promoted = 0
for t in data["topics"]:
    if t["slug"] in WIDGETS:
        page = os.path.join(PAGES, t["slug"] + ".astro")
        if not os.path.exists(page):
            print("page missing, skipping:", t["slug"])
            continue
        t.pop("status", None)
        t["widgets"] = WIDGETS[t["slug"]]
        promoted += 1

with open(DATA, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write("\n")
print(f"promoted {promoted}/10")
