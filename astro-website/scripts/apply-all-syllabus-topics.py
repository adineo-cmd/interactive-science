#!/usr/bin/env python3
"""Insert the full-syllabus planned topics and new subject entries into src/data/topics.json.

Run once; re-running is a no-op (every insert checks for an existing slug/id first).
After inserting, cross-checks every syllabus program's lesson slugs against topics.json
so a transcription gap fails loudly here instead of in the validator.
"""
import glob
import json
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "..", "src", "data", "topics.json")
PLANNED = os.path.join(ROOT, "syllabus-planned.json")

NEW_SUBJECTS = [
    {"id": "accounting", "name": "Accounting", "ink": "#1e40af", "icon": "ledger",
     "tagline": "From the first ledger entry to the ratios that reveal a business's health."},
    {"id": "drama", "name": "Drama", "ink": "#db2777", "icon": "masks",
     "tagline": "Perform, direct and devise: taking plays and stimuli from page to stage."},
    {"id": "hospitality-tourism", "name": "Travel & Tourism", "ink": "#0891b2", "icon": "plane",
     "tagline": "How destinations, organisations and sustainable travel shape the world's biggest industry."},
    {"id": "information-technology", "name": "Information & Communication Technology", "ink": "#65a30d", "icon": "monitor",
     "tagline": "From hardware and networks to the practical skills of the digital workplace."},
    {"id": "media-studies", "name": "Media Studies", "ink": "#dc2626", "icon": "broadcast",
     "tagline": "Read the media's language, industries and audiences — then make your own."},
    {"id": "criminology", "name": "Criminology", "ink": "#57534e", "icon": "fingerprint",
     "tagline": "Why crime happens, how it is measured and how justice responds."},
    {"id": "public-health", "name": "Public Health", "ink": "#0369a1", "icon": "shield-plus",
     "tagline": "Protecting and improving the health of populations, from epidemiology to policy."},
    {"id": "education", "name": "Education", "ink": "#92400e", "icon": "graduation-cap",
     "tagline": "How people learn and how to teach them well."},
    {"id": "marketing", "name": "Marketing", "ink": "#c026d3", "icon": "target",
     "tagline": "Creating customer value, from analysis and strategy to the marketing mix."},
    {"id": "international-relations", "name": "International Relations", "ink": "#475569", "icon": "bridge",
     "tagline": "Interests, interactions and institutions in world politics: war, trade, rights and the environment."},
]


def main():
    with open(DATA, encoding="utf-8") as f:
        data = json.load(f)
    topics = data["topics"]
    slugs = {t["slug"] for t in topics}
    subject_ids = {s["id"] for s in data["subjects"]}
    added, skipped = [], []

    # 1. new subject entries
    for s in NEW_SUBJECTS:
        if s["id"] not in subject_ids:
            data["subjects"].append(s)
            subject_ids.add(s["id"])
            print("subject +", s["id"])

    # 2. planned topic rows
    with open(PLANNED, encoding="utf-8") as f:
        planned = json.load(f)
    for entry in planned:
        entry = dict(entry)
        entry["status"] = "planned"
        if entry["slug"] in slugs:
            skipped.append(entry["slug"])
            continue
        at = None
        for i, t in enumerate(topics):
            if t["subject"] == entry["subject"] and t["level"] == entry["level"]:
                at = i
        if at is None:
            for i, t in enumerate(topics):
                if t["subject"] == entry["subject"]:
                    at = i
        if at is None:
            topics.append(entry)
        else:
            topics.insert(at + 1, entry)
        slugs.add(entry["slug"])
        added.append(entry["slug"])

    with open(DATA, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print(f"planned added {len(added)}, skipped {len(skipped)}")

    # 3. cross-check: every syllabus lesson slug must now exist in its subject
    missing = []
    for path in sorted(glob.glob(os.path.join(ROOT, "..", "src", "data", "syllabus", "*.json"))):
        syl = json.load(open(path, encoding="utf-8"))
        for u in syl["program"]:
            for slug in u["lessons"]:
                if slug not in slugs:
                    missing.append((syl["subject"], u["unit"], slug))
                else:
                    t = next(x for x in topics if x["slug"] == slug)
                    if t["subject"] != syl["subject"]:
                        missing.append((syl["subject"], u["unit"], slug + " CROSS-SUBJECT"))
    if missing:
        print("MISSING/CROSS-SUBJECT syllabus lesson refs:")
        for m in missing:
            print("  !", m)
        raise SystemExit(1)
    print("all syllabus lesson refs resolved")


if __name__ == "__main__":
    main()
