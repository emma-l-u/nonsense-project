# WHYmar?

An interactive map that routes you through Weimar — fast, safe, scenic, or on a bike — on a journey to discover my favourite places and maybe yours?

---

## Author & course

- **Author:** Emma Ullrich
- **Studio:** Prompt City — Urban Vision Wolfsburg 2026
- **Course:** IUDD Master, SoSe 2026
- **Chair:** Informatics in Architecture and Urbanism (InfAU), Faculty of Architecture and Urbanism, Bauhaus-Universität Weimar
- **Teaching staff:** Reinhard König, Martin Bielik, Sven Schneider, Egor Gaydukov, Egor Gavrilov
- **Exercise:** Urban Absurdities (Nonsense Project)
- **Submission date:** 2026-04-16

---

## Links

- **Live app:** https://emma-l-u.github.io/nonsense-project/
- **Source repo:** https://github.com/emma-l-u/nonsense-project
- **Miro frame:** https://miro.com/app/board/uXjVGCtKivA=/?moveToWidget=3458764667721140508&cot=14
- **60 s showreel:** embedded on the Miro frame above

---

## The task

Nonsense Project is a two-weeks long task designed to get familiar with application of coding agents in building apps, tools and projects that investigate unique ways of working with urban context. I was randomly assigned one urban paradox and one constraint from the studio's Nonsense Ideas deck and built a working web app that answers this combination. The process is documented here and in a 60-second showreel.

---

## Theme & constraint

- **Theme (Urban Absurdity):** People have started to avoid certain streets without knowing why.
- **Constraint (Playful Limitation):** The project must adapt continuously based on incoming data.

---

## Concept

Every navigation app promises to get you there faster. WHYmar? does the opposite. It slows you down on purpose, or at least makes you question why speed became the default. The app routes you through Weimar as one of four characters, each with a different relationship to the city's streets: a child who needs safety, a woman who wants pleasure, a commuter who wants efficiency, a cyclist who wants flow. The routes diverge because the city itself is divided. Some streets are built for cars, some for feet, some for neither. A noise overlay shows where the loudest and quietest streets are. A community panel lets anyone mark what they love or what needs fixing. The result is less a navigation tool than a portrait of a city that was never designed for everyone equally. Here you can experience discovering my favourite spots and go on a search of finding your own.

---

## User story

My friend Ronja (26) came to visit me in Weimar for five days. I warned her in advance: I have PUD & UAS on Tuesday and studio deadlines Thursday, so she'd basically be on her own most of the week. She'd never been to Weimar before. She knew Goethe lived here. That was about it.

On her first morning alone she opened WHYmar? from a link I sent her before disappearing into studio. She picked Anne, because "enjoy promenading like Anne & her pomeranian" was exactly the energy she was going for. She typed in the address of a café I'd recommended and pressed go.

The route took her through streets she would never have found on Google Maps — quieter, slower, past a free book shelf and a repair café with a hand-painted sign. She turned on the everyday places layer and started tapping the icons: a farmers market, an organic bakery two minutes from where she was standing, a museum she'd never heard of.

By Wednesday she had a better mental map of Weimar than I do after a whole semester. She dropped three memory pins in MYmar — a courtyard she found beautiful, a loud street corner, a bakery that needed to be visited immediately. I opened them between critiques.

She didn't feel like a tourist. She felt like someone who walked into a city and actually looked at it.

---

## How to use it

1. Open the live app — you land on an interactive map of Weimar with the route planner on the left.
2. Pick a character in the "Who's walking?" grid:
   - **Little Luis** — avoids busy roads and fast cars
   - **Aunt Anne** — takes the quietest, most scenic path
   - **Busy Beate** — finds the fastest route, traffic be damned
   - **Biker Benedikt** — follows the best cycling lines
3. Set your start point A — type an address and press ↵, or click on the map.
4. Set destination B — same as above; a different goose cursor appears.
5. Press "Go with [character]" — the route animates across the map.
6. Toggle the noise overlay to layer traffic, rail, and construction sources.
7. Open MYmar (bottom right) to browse everyday places or drop your own memory pin.
8. Turn on traffic simulation to watch live car routes and adjust the time of day.

---

## Technical implementation

- **Frontend:** React 18 + Vite, JavaScript, Tailwind CSS
- **Hosting:** GitHub Pages, deployed via GitHub Actions on every push to main
- **Routing:** Valhalla — pedestrian & cycling profiles with use_roads costing
- **Other APIs:** OSRM (road geometry), OpenStreetMap Overpass (parks & pedestrian zones), Nominatim (geocoding)
- **Places data:** weimar.wandelkarten.de (hardcoded)
- **Models at runtime:** None
- **Notable libraries:** React-Leaflet 4, Leaflet 1.9, react-icons 5

Run locally:
```bash
git clone https://github.com/emma-l-u/nonsense-project.git
cd nonsense-project
npm install
npm run dev
```

---

## Working with AI

- **Coding agent:** Claude Code, model claude-sonnet-4-6

Key prompts:

> Build a single-file interactive HTML application for the city of Weimar that combines real-time-style traffic and noise visualization with intelligent route planning. Users can set a start and end point and choose between walking or cycling as their transport mode. For each mode, four route variants are available: Fastest, Safest, Nicest, and Best for Cycling. Noise sources across the city should be displayed using distinct icons — construction sites, busy roads, railways, schools, bars, and markets. Car traffic density should be overlaid as a heat map or flow layer. The map should draw from openly accessible sources such as OpenStreetMap, Overpass API, or public traffic feeds, and update dynamically to reflect changing conditions. The interface should be clean and map-centric, with a collapsible sidebar for route controls and a legend for noise and traffic layers.

**Reflection:** Working with Claude revealed both the strengths and limitations of AI-assisted design. Overloaded prompts with multiple unordered tasks often led to incomplete or inefficient results; breaking requests into clear, sequential steps proved far more effective.

Image generation within Claude was costly and disappointing. Switching to Adobe Firefly and then integrating the results via Claude was a much better workflow, and one I would adopt from the start next time.

Creative decisions made autonomously by Claude tended to feel generic and dated, requiring frequent aesthetic adjustments. It became clear that Claude works best as an executor of a defined vision, not as a creative director.

Where Claude genuinely added value was in reflective pauses — stepping back mid-process to evaluate progress together, or brainstorming loosely. The ideas it offered were rarely usable directly, but they often sparked new directions and helped sharpen my own thinking.

---

## Credits & licenses

- **Fonts:** Nunito — Google Fonts — OFL
- **Map tiles:** © OpenStreetMap contributors — ODbL
- **Routing engine:** Valhalla, OpenStreetMap DE instance — MIT
- **Places data:** weimar.wandelkarten.de
- **Character portraits:** AI-generated
- **Goose cursor:** swag-goose-custom-cursor.png (provided)
- **This repo:** MIT
