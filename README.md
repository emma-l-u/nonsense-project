# WHYmar?

**An interactive map that routes you through Weimar the way your character would — fast, safe, scenic, or on a fixie.**

---

## Author & course

| | |
|---|---|
| **Author** | [Your name] |
| **Studio** | Prompt City — Urban Vision Wolfsburg 2026 |
| **Course** | IUDD Master, SoSe 2026 |
| **Chair** | Informatics in Architecture and Urbanism (InfAU), Faculty of Architecture and Urbanism, Bauhaus-Universität Weimar |
| **Teaching staff** | Reinhard König, Martin Bielik, Sven Schneider, Egor Gaydukov, Egor Gavrilov |
| **Exercise** | Urban Absurdities (Nonsense Project) |
| **Submission date** | 2026-04-16 |

---

## Links

- **Live app (GitHub Pages):** https://emma-l-u.github.io/nonsense-project/
- **Source repo:** https://github.com/emma-l-u/nonsense-project
- **Miro frame:** https://miro.com/app/board/uXjVGCtKivA=/?moveToWidget=[your-frame-id]
- **60 s showreel:** embedded on the Miro frame above

---

## The task

Nonsense Project is a two-weeks long task designed to get familiar with application of coding agents in building apps, tools and projects that investigate unique ways of working with urban context. I was randomly assigned one urban paradox and one constraint from the studio's Nonsense Ideas deck and built a working web app that answers this combination. The process is documented here and in a 60-second showreel.

---

## Theme & constraint

**Theme (Urban Absurdity):**
[Paste the theme exactly as drawn.]

**Constraint (Playful Limitation):**
[Paste the constraint exactly as drawn.]

---

## Concept and User Story

### Concept

[Your concept goes here — 100–150 words, non-technical. What the app is, how it reads the theme, where the constraint actually bites.]

### User story

[Your user story goes here — 100–200 words. Write it as a small narrative: who is the person, why do they open the app, what do they do step by step, what do they feel, what do they take away?]

---

## How to use it

1. Open the live app — you land on an interactive map of Weimar with the route planner on the left.
2. **Pick a character** in the "Who's walking?" grid — each one routes differently:
   - **Little Luis** avoids busy roads and fast cars
   - **Aunt Anne** takes the quietest, most scenic path
   - **Busy Beate** finds the fastest route, traffic be damned
   - **Biker Benedikt** follows the best cycling lines
3. **Set your start point A** — type an address and press ↵, or click directly on the map (watch for the goose cursor).
4. **Set destination B** — same as above; a different goose appears to mark the switch.
5. Press **"Go with [character] ↗"** — the route animates across the map in the character's personal style.
6. Toggle **🔊 Noise overlay** to layer traffic, rail, and construction noise sources onto the map.
7. Open **MYmar** (bottom right) to browse everyday places — food, community spots, repair cafés, supermarkets, museums — or drop your own memory pin on the map.
8. Turn on **▶ Traffic simulation** to watch live car routes and adjust the time of day with the slider.

---

## Technical implementation

**Frontend:** React 18 + Vite, JavaScript (no TypeScript), Tailwind CSS

**Hosting & build:** GitHub Pages, deployed automatically via GitHub Actions on every push to `main` (`.github/workflows/deploy.yml`)

**Data sources / APIs:**
| Source | Used for |
|---|---|
| [Valhalla (valhalla1.openstreetmap.de)](https://valhalla1.openstreetmap.de) | Route planning — pedestrian & cycling profiles with `use_roads` costing |
| [OSRM (router.project-osrm.org)](https://router.project-osrm.org) | Background road & bike lane geometry display |
| [OpenStreetMap Overpass API](https://overpass-api.de) | Park, forest, and pedestrian zone polygons |
| [Nominatim](https://nominatim.openstreetmap.org) | Address geocoding |
| [weimar.wandelkarten.de](https://weimar.wandelkarten.de) | Community / sustainable places data (hardcoded from source) |

**Models at runtime:** None

**Notable libraries:** React-Leaflet 4, Leaflet 1.9, react-icons 5

**Run locally:**
```bash
git clone https://github.com/emma-l-u/nonsense-project.git
cd nonsense-project
npm install
npm run dev
```
Then open http://localhost:5173

---

## Working with AI

**Coding agent:** Claude Code, model `claude-sonnet-4-6`

**Key prompts (2–5 that actually moved the project):**

> [Quote prompt 1]

> [Quote prompt 2]

> [Quote prompt 3]

**Reflection (≤ 150 words):**
[What unlocked progress? Where did the agent get stuck or go sideways? What is one thing you would do differently next time?]

---

## Credits, assets, licenses

| Item | Source | License |
|---|---|---|
| **Fonts** | Nunito — Google Fonts | OFL |
| **Map tiles** | © OpenStreetMap contributors | ODbL |
| **Routing engine** | Valhalla (OpenStreetMap DE instance) | MIT |
| **Community places data** | weimar.wandelkarten.de | — |
| **Character portraits** | AI-generated (custom) | — |
| **Goose cursor** | swag-goose-custom-cursor.png (provided) | — |
| **This repo** | [MIT / CC-BY / choose one] | |
