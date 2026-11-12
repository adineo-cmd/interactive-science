#!/usr/bin/env python3
"""Generate (or remove) career-page route wrappers to match the careers data set.

For every astro-website/src/data/careers/<subject>.json this writes
astro-website/src/pages/subjects/<subject>/careers.astro; wrappers whose data
file is gone are removed. Run after each careers wave.
"""
import glob
import os
import re

SITE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "astro-website")
DATA = os.path.join(SITE, "src", "data", "careers")
PAGES = os.path.join(SITE, "src", "pages", "subjects")

TEMPLATE = """---
import CareersPage from '../../../components/CareersPage.astro';
---
<CareersPage subject="{sid}" />
"""

written = removed = 0
for p in glob.glob(os.path.join(PAGES, "*", "careers.astro")):
    sid = os.path.basename(os.path.dirname(p))
    if not os.path.exists(os.path.join(DATA, f"{sid}.json")):
        os.remove(p)
        removed += 1

for p in sorted(glob.glob(os.path.join(DATA, "*.json"))):
    sid = os.path.splitext(os.path.basename(p))[0]
    dest = os.path.join(PAGES, sid, "careers.astro")
    body = TEMPLATE.format(sid=sid)
    if not os.path.exists(dest) or open(dest).read() != body:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        open(dest, "w").write(body)
        written += 1

print(f"career routes: {written} written, {removed} removed")
