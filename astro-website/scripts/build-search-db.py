#!/usr/bin/env python3
"""Build client-side SQLite search DB from src/data/topics.json.

DB holds published content index only. Zero user data.
topics.json is the single source of truth shared with the Astro site.
"""
import json
import os
import sqlite3

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "..", "src", "data", "topics.json")


def main():
    with open(DATA, encoding="utf-8") as f:
        data = json.load(f)

    os.makedirs("public", exist_ok=True)
    if os.path.exists("public/search.db"):
        os.remove("public/search.db")
    db = sqlite3.connect("public/search.db")
    db.execute(
        "CREATE TABLE topics (id INTEGER PRIMARY KEY, title TEXT, slug TEXT, level TEXT, "
        "subject TEXT, body TEXT, tags TEXT)"
    )
    for t in data["topics"]:
        subject = next(
            (s for s in data["subjects"] if s["id"] == t["subject"]), {}
        )
        body = f"{t['summary']} Subject: {subject.get('name', t['subject'])}."
        db.execute(
            "INSERT INTO topics (title, slug, level, subject, body, tags) VALUES (?, ?, ?, ?, ?, ?)",
            (t["title"], t["slug"], t["level"], t["subject"], body, ",".join(t["tags"])),
        )
    db.commit()
    count = db.execute("SELECT COUNT(*) FROM topics").fetchone()[0]
    db.close()
    print(f"search.db built ({count} topics)")


if __name__ == "__main__":
    main()
