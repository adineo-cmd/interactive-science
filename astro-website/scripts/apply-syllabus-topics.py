#!/usr/bin/env python3
"""Insert syllabus-derived topics (new live lessons + planned rows) into src/data/topics.json.

Topics are inserted after the last existing topic of the same subject+level when there is
one, else after the last topic of the subject, else appended. Run once; re-running is a no-op
because every insert checks for an existing slug first.
"""
import json
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(ROOT, "..", "src", "data", "topics.json")

NEW_LIVE = [
    # --- biology: Cambridge IGCSE 0610 units 3, 4, 11, 13, 16, 20 ---
    {
        "title": "Movement Into and Out of Cells",
        "subject": "biology",
        "level": "foundational",
        "slug": "subjects/biology/foundational/movement-into-and-out-of-cells",
        "minutes": 14,
        "summary": "Diffusion, osmosis and active transport — watch particles cross the membrane and derive why water always knows where to go.",
        "tags": ["cells", "diffusion", "osmosis", "transport"],
        "widgets": ["plotter", "sliderLab", "equationStep", "diagramBuilder"],
    },
    {
        "title": "Biological Molecules",
        "subject": "biology",
        "level": "foundational",
        "slug": "subjects/biology/foundational/biological-molecules",
        "minutes": 15,
        "summary": "Carbohydrates, proteins, lipids and water — the four molecular families every living thing is built from and runs on.",
        "tags": ["molecules", "carbohydrates", "proteins", "lipids"],
        "widgets": ["plotter", "equationStep", "diagramBuilder"],
    },
    {
        "title": "Gas Exchange in Humans",
        "subject": "biology",
        "level": "intermediate",
        "slug": "subjects/biology/intermediate/gas-exchange-in-humans",
        "minutes": 15,
        "summary": "Alveoli, breathing mechanics and the journey of oxygen — modelled with pressures, areas and a breathing lab.",
        "tags": ["lungs", "gas exchange", "alveoli", "breathing"],
        "widgets": ["plotter", "sliderLab", "equationStep"],
    },
    {
        "title": "Excretion in Humans",
        "subject": "biology",
        "level": "intermediate",
        "slug": "subjects/biology/intermediate/excretion-in-humans",
        "minutes": 16,
        "summary": "Kidneys, nephrons and the fine art of filtering blood — follow a drop of plasma from glomerulus to bladder.",
        "tags": ["kidneys", "excretion", "nephron", "homeostasis"],
        "widgets": ["plotter", "sliderLab", "equationStep"],
    },
    {
        "title": "Reproduction in Humans",
        "subject": "biology",
        "level": "intermediate",
        "slug": "subjects/biology/intermediate/reproduction-in-humans",
        "minutes": 16,
        "summary": "Gametes, hormones and the menstrual cycle — the reproductive system as a feedback-controlled program.",
        "tags": ["reproduction", "hormones", "menstrual cycle", "fertility"],
        "widgets": ["plotter", "sliderLab", "equationStep"],
    },
    {
        "title": "Human Influences on Ecosystems",
        "subject": "biology",
        "level": "advanced",
        "slug": "subjects/biology/advanced/human-influences-on-ecosystems",
        "minutes": 18,
        "summary": "Food supply, habitat destruction, pollution and conservation — quantify the human footprint on the biosphere.",
        "tags": ["conservation", "pollution", "deforestation", "food supply"],
        "widgets": ["plotter", "timeline", "sliderLab"],
    },
    # --- geography: Cambridge IGCSE 0460 topics 3, 5, 8, 10 ---
    {
        "title": "Ecosystems and Biomes",
        "subject": "geography",
        "level": "foundational",
        "slug": "subjects/geography/foundational/ecosystems-and-biomes",
        "minutes": 13,
        "summary": "From Antarctic ice to tropical rainforest — how energy, water and temperature paint the planet's living zones.",
        "tags": ["ecosystems", "biomes", "rainforest", "tundra"],
        "widgets": ["plotter", "sliderLab", "diagramBuilder"],
    },
    {
        "title": "Climate Change: Causes and Impacts",
        "subject": "geography",
        "level": "intermediate",
        "slug": "subjects/geography/intermediate/climate-change-causes-and-impacts",
        "minutes": 17,
        "summary": "Natural drivers, the carbon curve and impacts at every scale — from a village's failed harvest to a shifting monsoon.",
        "tags": ["climate change", "greenhouse effect", "carbon", "impacts"],
        "widgets": ["plotter", "sliderLab", "timeline"],
    },
    {
        "title": "Development and Inequality",
        "subject": "geography",
        "level": "intermediate",
        "slug": "subjects/geography/intermediate/development-and-inequality",
        "minutes": 15,
        "summary": "GDP, HDI and the uneven map of development — plot the indicators and see where the world really stands.",
        "tags": ["development", "inequality", "hdi", "gdp"],
        "widgets": ["plotter", "sliderLab", "diagramBuilder"],
    },
    {
        "title": "Resource Provision: Food and Energy",
        "subject": "geography",
        "level": "advanced",
        "slug": "subjects/geography/advanced/resource-provision-food-energy",
        "minutes": 17,
        "summary": "How food and energy are produced, who gets them and what their production costs — the geography of supply and demand.",
        "tags": ["food security", "energy", "resources", "supply and demand"],
        "widgets": ["plotter", "sliderLab", "timeline"],
    },
    # --- history: Cambridge IGCSE 0470 A1–A4, B1–B2, depth study B ---
    {
        "title": "The Revolutions of 1848",
        "subject": "history",
        "level": "intermediate",
        "slug": "subjects/history/intermediate/revolutions-of-1848",
        "minutes": 16,
        "summary": "The springtime of peoples — why liberalism and nationalism swept Europe in 1848, and why the revolutions mostly failed.",
        "tags": ["1848", "revolutions", "liberalism", "nationalism"],
        "widgets": ["timeline", "equationStep"],
    },
    {
        "title": "Unifying Italy and Germany",
        "subject": "history",
        "level": "intermediate",
        "slug": "subjects/history/intermediate/unification-of-italy-and-germany",
        "minutes": 18,
        "summary": "Mazzini, Cavour, Garibaldi and Bismarck — how two patchworks of states became two nations by 1871.",
        "tags": ["unification", "risorgimento", "bismarck", "nation-state"],
        "widgets": ["timeline", "diagramBuilder"],
    },
    {
        "title": "The American Civil War",
        "subject": "history",
        "level": "intermediate",
        "slug": "subjects/history/intermediate/the-american-civil-war",
        "minutes": 17,
        "summary": "Slavery, secession and Lincoln's war — the conflict that tested whether a nation so conceived could long endure.",
        "tags": ["civil war", "slavery", "lincoln", "reconstruction"],
        "widgets": ["timeline", "plotter"],
    },
    {
        "title": "The Treaty of Versailles",
        "subject": "history",
        "level": "intermediate",
        "slug": "subjects/history/intermediate/the-treaty-of-versailles",
        "minutes": 15,
        "summary": "Wilson, Clemenceau and Lloyd George at the table — what the Big Three wanted, what they got and what it cost.",
        "tags": ["versailles", "peace treaty", "reparations", "big three"],
        "widgets": ["timeline", "diagramBuilder"],
    },
    {
        "title": "The League of Nations",
        "subject": "history",
        "level": "intermediate",
        "slug": "subjects/history/intermediate/the-league-of-nations",
        "minutes": 16,
        "summary": "The world's first peacekeeping experiment — its structure, its 1920s successes and its fatal 1930s failures.",
        "tags": ["league of nations", "collective security", "peacekeeping", "1930s"],
        "widgets": ["timeline", "diagramBuilder"],
    },
    {
        "title": "Germany, 1918–45",
        "subject": "history",
        "level": "advanced",
        "slug": "subjects/history/advanced/germany-1918-1945",
        "minutes": 20,
        "summary": "Depth study: Weimar's fragile democracy, Hitler's rise and the Nazi state — how a modern republic became a dictatorship.",
        "tags": ["weimar", "nazism", "hitler", "dictatorship"],
        "widgets": ["timeline", "plotter"],
    },
]

NEW_PLANNED = [
    # biology units 7, 8, 15
    {
        "title": "Human Nutrition & the Digestive System",
        "subject": "biology",
        "level": "foundational",
        "slug": "subjects/biology/foundational/human-nutrition-digestive-system",
        "minutes": 14,
        "summary": "Diet, the digestive tract and the chemistry of breaking food down — syllabus unit 7, in the works.",
        "tags": ["nutrition", "digestion", "diet", "enzymes"],
        "status": "planned",
    },
    {
        "title": "Transport in Plants: Xylem & Transpiration",
        "subject": "biology",
        "level": "intermediate",
        "slug": "subjects/biology/intermediate/transport-in-plants-xylem-transpiration",
        "minutes": 15,
        "summary": "Water's climb from root to leaf — the transpiration stream and the plumbing that makes tall trees possible.",
        "tags": ["xylem", "transpiration", "phloem", "plants"],
        "status": "planned",
    },
    {
        "title": "Drugs: Medicine and Misuse",
        "subject": "biology",
        "level": "intermediate",
        "slug": "subjects/biology/intermediate/drugs-medicine-and-misuse",
        "minutes": 14,
        "summary": "Antibiotics, analgesics and the difference between use and abuse — the pharmacology of syllabus unit 15.",
        "tags": ["drugs", "antibiotics", "medicine", "addiction"],
        "status": "planned",
    },
    # geography topic 4 (impacts + management, beyond plate-tectonics)
    {
        "title": "Tectonic Hazards: Earthquakes & Volcanoes",
        "subject": "geography",
        "level": "foundational",
        "slug": "subjects/geography/foundational/tectonic-hazards-earthquakes-volcanoes",
        "minutes": 14,
        "summary": "Why quakes and eruptions happen where they do, what they cost, and how people manage the risk.",
        "tags": ["earthquakes", "volcanoes", "hazards", "management"],
        "status": "planned",
    },
    # history B6 + depth studies A, C, D
    {
        "title": "Soviet Control of Eastern Europe, 1948–c.1989",
        "subject": "history",
        "level": "advanced",
        "slug": "subjects/history/advanced/soviet-control-of-eastern-europe",
        "minutes": 17,
        "summary": "Hungary 1956, the Berlin Wall, Czechoslovakia 1968 and Solidarity — how Soviet control held, cracked and fell.",
        "tags": ["eastern europe", "berlin wall", "solidarity", "gorbachev"],
        "status": "planned",
    },
    {
        "title": "Depth Study A: The First World War, 1914–18",
        "subject": "history",
        "level": "advanced",
        "slug": "subjects/history/advanced/depth-study-the-first-world-war",
        "minutes": 20,
        "summary": "Stalemate on the Western Front, the war beyond Europe and the road to the armistice — the full depth study.",
        "tags": ["first world war", "trenches", "western front", "armistice"],
        "status": "planned",
    },
    {
        "title": "Depth Study C: Russia, 1905–41",
        "subject": "history",
        "level": "advanced",
        "slug": "subjects/history/advanced/depth-study-russia-1905-1941",
        "minutes": 20,
        "summary": "Tsarist collapse, the Bolshevik seizure and Stalin's transformation of Russia — the full depth study.",
        "tags": ["russia", "revolution", "bolsheviks", "stalin"],
        "status": "planned",
    },
    {
        "title": "Depth Study D: The United States, 1919–41",
        "subject": "history",
        "level": "advanced",
        "slug": "subjects/history/advanced/depth-study-the-united-states-1919-1941",
        "minutes": 20,
        "summary": "The Roaring Twenties, the Crash and the New Deal — the full depth study.",
        "tags": ["usa", "roaring twenties", "great depression", "new deal"],
        "status": "planned",
    },
]


def main():
    with open(DATA, encoding="utf-8") as f:
        data = json.load(f)
    topics = data["topics"]
    slugs = {t["slug"] for t in topics}
    added, skipped = [], []

    for entry in NEW_PLANNED + NEW_LIVE:
        if entry["slug"] in slugs:
            skipped.append(entry["slug"])
            continue
        # insert after the last topic sharing subject+level, else after the
        # last topic of the subject, else append
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

    print(f"added {len(added)}, skipped {len(skipped)} (already present)")
    for s in added:
        print("  +", s)
    for s in skipped:
        print("  =", s)


if __name__ == "__main__":
    main()
