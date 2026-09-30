# HackVenture 2026 - Hackathon Portal & Developer Toolbox

A high-performance, modern web portal designed for hosting a global hackathon and equipping participants with 6 zero-friction productivity tools directly inside the browser.

---

## Overview & Core Features

### 1. Hackathon Event Platform
- **Hero & Live Countdown**: Real-time 45-day synchronized countdown clock with status indicators and prize pool highlights ($75,000 total).
- **Tracks & Challenges**: 5 distinct innovation tracks (Generative AI, Web3, ClimateTech, HealthTech, Open Innovation) with sponsor tags and prize allocations.
- **Interactive 48-Hour Schedule**: Day-by-day tabs (Kickoff & Ideation, Deep Hack & Workshops, Pitching & Grand Finale) with live status tags.
- **Tiered Prize Showcase**: Championship breakdown ($30,000 Grand Prize, $15,000 1st Runner Up, $10,000 2nd Runner Up, $20,000 in category bounties).
- **Registration & Holographic Pass Generator**: Native dialog registration that issues a persistent, digital attendee badge pass with unique ID, QR pattern, and print/save options.
- **Collapsible FAQ**: Native details accordion answering rules, team limits, and IP ownership.

---

### 2. The Developer Toolbox (6 Simple Tools)
Built directly into the portal so hackers never need to open 20 scattered tabs:

1. **Pitch & Demo Timer**
   - Preset time modes: 3-min Lightning Pitch, 5-min Full Demo, 2-min Q&A, 1-min Elevator.
   - Circular SVG progress ring with color transitions (Cyan -> Amber -> Red).
   - Custom time input for any minute duration.
   - Built-in Web Audio API synthesizer tones (warning tone at 1m, double alert at 30s, and celebratory fanfare when time expires).
2. **Project Idea Matrix**
   - Filter by Domain (AI, Climate, Health, Web3, DevTools), Tech Stack, and Target Audience.
   - Generates project titles, problem statements, 48-hr MVP features, and elevator pitches.
   - Random Idea generator button.
   - 1-click Export to README Builder integration.
3. **Team Matcher & Hacker Roster**
   - Filter by role: Frontend, Backend, AI/ML, UI/UX, Pitch/PM.
   - Instant search by keyword, skills, or location.
   - Add My Profile modal with localStorage persistence.
   - 1-click contact copier for Discord / GitHub.
4. **Devpost & GitHub README Builder**
   - Fill-in-the-blank form: Inspiration, What it does, How we built it, Challenges, and What's next.
   - Load Sample Data one-click button.
   - Live Markdown preview block.
   - 1-click Copy Markdown and Download README.md file.
5. **Judging Rubric & Self-Score Calculator**
   - Interactive sliders for the 4 official pillars: Innovation (25%), Technical Depth (25%), UI/UX Design (25%), Viability (25%).
   - Real-time weighted percentage calculation and tier ranking (e.g. Tier 1: Grand Prize Winner Material).
   - Dynamic judge feedback tips recommending what to polish.
6. **Curated APIs & Developer Resource Hub**
   - Searchable directory of verified free-tier tools (Google Gemini API, Supabase, Vercel, HuggingFace, Lucide, NASA Open APIs).
   - Direct link exploration.

---

## File Structure

```
hackathon-portal/
|-- index.html     # Semantic, accessible HTML5 structure with native <dialog> & <details>
|-- styles.css     # Modern Cyber theme, responsive grid/flexbox, glassmorphism, animations
|-- app.js         # Pure ES6+ logic: timers, synthesizer, idea matrix, markdown generator, storage
|-- server.js      # Zero-dependency local Node static server
`-- README.md      # Documentation & quick start guide
```

---

## How to Run Locally

Because the project is written in pure standard web technologies without heavy node dependencies, you can run it immediately using any of the following:

### Option 1: Local Node Server
```bash
node server.js
```
Then navigate to: `http://localhost:3000`

### Option 2: Direct Browser Launch
Simply double-click or open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## Design System
- **Theme**: Cyber Dark Neo-Glassmorphism
- **Fonts**: Plus Jakarta Sans (headlines & body) and JetBrains Mono (timers & code)
- **Palette**: Deep Navy (#070913), Electric Cyan (#38bdf8), Vivid Violet (#a855f7), Emerald Green (#34d399), and Amber (#fbbf24).
- **Icons**: Clean geometric vector SVGs.
