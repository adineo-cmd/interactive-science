#!/usr/bin/env python3
"""Build client-side SQLite search DB from proof topics.

DB holds published content index only. Zero user data.
Reads TOPICS below (v1 proof: pages are .astro; content index is curated here).
When .md content lands in src/content/, extend to parse frontmatter automatically.
"""
import sqlite3
import os

TOPICS = [
    {
        "title": "Motion in One Dimension",
        "slug": "subjects/physics/foundational/motion-1d",
        "level": "foundational",
        "body": "Motion along a straight line. Position velocity acceleration. v = u + at. s = ut + half a t squared. Interactive plotter and slider lab.",
        "tags": "physics,mechanics,kinematics",
    },
    {
        "title": "Atomic Structure",
        "slug": "subjects/chemistry/foundational/atomic-structure",
        "level": "foundational",
        "body": "Atoms have nucleus protons neutrons electrons shells 2 8 8. Sodium electron configuration. Interactive Bohr diagram.",
        "tags": "chemistry,atomic,structure",
    },
    {
        "title": "Cell Structure",
        "slug": "subjects/biology/foundational/cell-structure",
        "level": "foundational",
        "body": "Cell membrane cytoplasm nucleus DNA mitochondria ribosomes. Plant cells add wall chloroplasts vacuole. Protein synthesis steps.",
        "tags": "biology,cell,organelles",
    },
    {
        "title": "Linear Functions",
        "slug": "subjects/math/foundational/linear-functions",
        "level": "foundational",
        "body": "Straight line y = m x + c. Slope m steepness. Intercept c. Slope from two points. Interactive plotter and sliders.",
        "tags": "math,algebra,functions",
    },
]


def main():
    os.makedirs("public", exist_ok=True)
    if os.path.exists("public/search.db"):
        os.remove("public/search.db")
    db = sqlite3.connect("public/search.db")
    db.execute(
        "CREATE TABLE topics (id INTEGER PRIMARY KEY, title TEXT, slug TEXT, level TEXT, body TEXT, tags TEXT)"
    )
    for t in TOPICS:
        db.execute(
            "INSERT INTO topics (title, slug, level, body, tags) VALUES (?, ?, ?, ?, ?)",
            (t["title"], t["slug"], t["level"], t["body"], t["tags"]),
        )
    db.commit()
    count = db.execute("SELECT COUNT(*) FROM topics").fetchone()[0]
    db.close()
    print(f"search.db built ({count} topics)")


if __name__ == "__main__":
    main()
