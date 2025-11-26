# Arc Raiders Ultimate Wiki - Design Document

**Date:** 2025-11-26
**Status:** Ready for implementation
**Deployment:** Render (static site)

---

## Overview

A comprehensive, production-ready Arc Raiders wiki with a weathered industrial aesthetic, sidebar navigation, and enhanced interactivity including cross-site search, favorites, skill tree builder, and interactive maps.

---

## Architecture

### File Structure

```
arc-raiders-wiki/
├── index.html
├── overview.html
├── maps.html
├── weapons.html
├── enemies.html
├── skills.html
├── crafting.html
├── traders.html
├── extraction.html
├── tips.html
├── lore.html
├── css/
│   └── style.css
├── js/
│   ├── main.js           # Core: sidebar, accordions, back-to-top
│   ├── search.js         # Cross-site search index and UI
│   └── features.js       # Favorites, visited, loadout builder, skill tree, maps
├── assets/
│   ├── textures/         # noise.png, rust-overlay.png
│   ├── icons/            # SVG nav icons, threat indicators
│   └── maps/             # User-provided map images (5 total)
└── render.yaml
```

### Layout Pattern

Every page follows this structure:

```
┌──────────────────────────────────────────────────────┐
│ [SIDEBAR 280px]  │  [MAIN CONTENT - scrollable]      │
│                  │                                    │
│  Logo            │  Page Title                        │
│  Search          │  ─────────────────                 │
│  ───────         │                                    │
│  Favorites       │  Content sections...               │
│  ───────         │                                    │
│  Navigation      │                                    │
│  - Home          │                                    │
│  - Overview      │                                    │
│  - Maps          │                                    │
│  - etc...        │                                    │
│  ───────         │                                    │
│  Tools           │                                    │
│  - Loadout       │                                    │
│  - Recent        │                                    │
└──────────────────────────────────────────────────────┘
```

- Sidebar fixed position, full height
- Main content scrolls independently
- Mobile (<768px): sidebar collapses to hamburger menu, slides in as overlay

---

## Visual Design

### Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Background | Near-black burnt metal | #0a0a0c |
| Sidebar | Panel separation | #0d0e10 |
| Card surface | With noise texture | #141619 |
| Rust accent | Primary CTA, active states | #c45c2e |
| Warning amber | Medium threats, caution | #d4a84b |
| Danger red | High threats, warnings | #a33d3d |
| Safe cyan | Low threats, links | #4a9b9b |
| Text primary | Aged off-white | #d4d0c8 |
| Text secondary | Weathered gray | #7a7670 |

### Typography

- **Headings:** Orbitron (Google Fonts) - industrial sci-fi feel
- **Body:** Rajdhani (Google Fonts) - clean, readable, slight tech feel
- **Data/stats:** Share Tech Mono (Google Fonts) - weapon stats, numbers

### Weathered Effects

1. **Noise texture:** Subtle PNG overlay on all card surfaces (5-10% opacity)
2. **Card borders:** 1px solid #2a2520, rust glow on hover (box-shadow)
3. **Worn edges:** CSS gradients creating slight darkening at card edges
4. **Vignette:** Radial gradient overlay on main content (darker corners)
5. **No scanlines:** Too distracting for reading

### Scanner Indicators (Threat Levels)

Pulsing dot with glow effect:
- **Cyan pulse:** Safe/Low threat
- **Amber pulse:** Caution/Medium threat
- **Red pulse:** Danger/High threat
- **Purple pulse:** Boss tier

---

## Sidebar Navigation

### Structure

```
┌─────────────────────────┐
│  ARC RAIDERS            │  Logo, rust-colored Orbitron
│  ━━━ WIKI ━━━           │
├─────────────────────────┤
│  🔍 Search all pages... │  Always visible input
├─────────────────────────┤
│  ★ FAVORITES            │  Collapsible, user's saved pages
│    └ (empty)            │
├─────────────────────────┤
│  NAVIGATION             │  Section label
│  ● Home                 │
│  ● Overview             │
├─────────────────────────┤
│  INTEL DATABASE         │  Section label
│  ● Maps                 │
│  ● Weapons              │
│  ● Enemies              │
├─────────────────────────┤
│  RAIDER PROGRESSION     │  Section label
│  ● Skills               │
│  ● Crafting             │
│  ● Traders              │
├─────────────────────────┤
│  SURVIVAL GUIDE         │  Section label
│  ● Extraction           │
│  ● Tips                 │
├─────────────────────────┤
│  ARCHIVES               │  Section label
│  ● Lore                 │
├─────────────────────────┤
│  TOOLS                  │  Section label
│  ⚙ Loadout Builder      │  Opens modal
│  📋 Recent Pages        │  Last 5 visited
└─────────────────────────┘
```

### Behavior

- Active page: rust left border (3px) + subtle background highlight
- Hover: slight glow effect
- Section headers: non-clickable labels, uppercase, smaller text
- Mobile: hamburger icon fixed top-left, tap to slide sidebar in

---

## Interactive Features

### 1. Cross-Site Search

**Index structure (search.js):**
```javascript
const searchIndex = [
  { page: 'weapons.html', section: 'S-Tier', title: 'Ferro', keywords: ['rifle', 'heavy', 'arc', 'pve'] },
  { page: 'enemies.html', section: 'High Threat', title: 'Bastion', keywords: ['walker', 'minigun', 'flank'] },
  // ... all searchable items
];
```

**UI behavior:**
- Dropdown appears below search input as user types
- Results grouped by page: "Ferro → Weapons (S-Tier)"
- Arrow keys navigate, Enter selects
- Click result → navigates to page, scrolls to section
- Minimum 2 characters to trigger search

### 2. Favorites System

- Star icon (☆/★) on major headings (weapons, enemies, maps, skills, traders)
- Click toggles favorite state
- Stored in localStorage: `arcwiki_favorites = ['weapons#ferro', 'enemies#bastion']`
- Favorites section in sidebar shows saved items
- Click favorite → navigates directly

### 3. Recently Visited

- Auto-tracks page visits in localStorage
- `arcwiki_recent = ['weapons.html', 'maps.html', ...]`
- Shows last 5 unique pages in sidebar Tools section
- Updates on page load

### 4. Loadout Builder (Modal)

**Accessible from:** Sidebar "Tools" section or Weapons page

**Interface:**
```
┌─────────────────────────────────────┐
│  LOADOUT BUILDER              [X]  │
├─────────────────────────────────────┤
│  Primary Weapon    [Dropdown ▼]    │
│  Secondary Weapon  [Dropdown ▼]    │
│  Shield Type       [Dropdown ▼]    │
│  Augment           [Dropdown ▼]    │
├─────────────────────────────────────┤
│  STATS                              │
│  Total Weight: 12.5 kg              │
│  Ammo Types: Heavy, Shotgun         │
├─────────────────────────────────────┤
│  [Copy Loadout]  [Clear]            │
└─────────────────────────────────────┘
```

**Data:** Weapon/shield/augment stats stored in features.js
**Storage:** sessionStorage (not persistent)
**Copy:** Generates text like "Loadout: Bettina + Vulcano | Medium Shield | Looting Mk.2"

### 5. Skill Tree Builder (Skills Page)

**Visual layout:** Three columns for Mobility, Conditioning, Survival

**Each branch:**
```
        [Tier 4 skills]
             │
        [Tier 3 skills]
             │
        [Tier 2 skills]
             │
        [Entry skill] ← Must unlock first
```

**Behavior:**
- Click node to allocate point (if prerequisites met)
- Click allocated node to deallocate (if no dependents)
- Locked nodes: grayed out, tooltip shows requirements
- Essential skills: rust glow border
- Counter: "Points: 28/75" - updates live

**Preset builds:**
- Buttons above tree: "Solo Survivor", "Team Support", "PvP Hunter", "Speed Looter"
- Click applies that build's allocation

**Export:**
- "Copy Build" button
- Format: `MOB:1,2,3,5|CON:1,4|SUR:2,3,6` (node IDs per branch)

### 6. Interactive Maps (Maps Page)

**Per map:**
- User-provided map image as base (full width)
- Toggle buttons above: Extractions, POIs, Loot Zones, ARC Spawns
- Hotspot markers positioned via CSS absolute positioning

**Hotspot data structure:**
```javascript
const mapData = {
  'dam-battlegrounds': {
    image: 'assets/maps/dam-battlegrounds.png',
    hotspots: [
      { id: 'ext-1', type: 'extraction', x: 25, y: 40, name: 'Elevator Alpha', details: '...' },
      { id: 'poi-1', type: 'poi', x: 60, y: 30, name: 'Electrical Substation', details: '...' },
      // ...
    ]
  }
};
```

**Interaction:**
- Toggle buttons show/hide hotspot types
- Click hotspot → info panel slides in from right
- Mobile: hotspots become numbered, tap shows list below map

---

## Page Content Summary

Each page follows the spec's content with these structural notes:

| Page | Key Components |
|------|----------------|
| index.html | Hero with stats grid, 6 quick-access cards, getting started steps |
| overview.html | Game info cards, gameplay loop diagram, key features grid |
| maps.html | Interactive map viewer, 5 map cards with details, conditions table |
| weapons.html | Ammo guide, tier accordions (S/A/B/C), loadout recommendations |
| enemies.html | Scanner guide, threat category grids (Low/Medium/High/Boss) |
| skills.html | Interactive skill tree builder, recommended builds |
| crafting.html | Workshop station cards, blueprint guide, material farming table |
| traders.html | 5 trader profile cards, quest system guide, quest count table |
| extraction.html | Method cards (Elevator/Hatch/Safe Pocket), tactics, checklist |
| tips.html | Categorized tip cards (Beginner/Combat/Movement/Looting/Advanced) |
| lore.html | Timeline, mystery sections, faction details, thematic content |

---

## Technical Decisions

### No Build Process
- Pure HTML/CSS/JS, no bundler needed
- Google Fonts loaded via CDN
- Single CSS file, 3 JS files
- Simple to maintain and deploy

### Render Deployment

**render.yaml:**
```yaml
services:
  - type: web
    name: arc-raiders-wiki
    env: static
    staticPublishPath: .
    headers:
      - path: /*
        name: Cache-Control
        value: public, max-age=3600
```

### Performance Considerations
- Images: WebP format with PNG fallback
- Lazy load map images (loading="lazy")
- Search index loads on first search interaction
- CSS animations use transform/opacity only (GPU accelerated)

### Accessibility
- Semantic HTML (nav, main, section, article)
- ARIA labels on interactive elements
- Keyboard navigation for search, skill tree, modals
- Color contrast meets WCAG AA
- Focus indicators visible

---

## What's NOT Included (YAGNI)

Removed from original spec to keep scope manageable:

1. ~~Scanline overlay~~ - Hurts readability
2. ~~4-column footer~~ - Sidebar handles all navigation
3. ~~Per-table search/filter~~ - Cross-site search is better
4. ~~Scroll animations on every card~~ - Keep it snappy
5. ~~Dark/light toggle~~ - Industrial theme is inherently dark

---

## Implementation Order

1. **Foundation:** CSS design system, sidebar layout, responsive shell
2. **Core pages:** index.html, weapons.html, enemies.html (most content)
3. **Remaining pages:** overview, maps, skills, crafting, traders, extraction, tips, lore
4. **Interactivity:** Search, favorites, recent pages
5. **Advanced features:** Skill tree builder, loadout builder, interactive maps
6. **Polish:** Textures, animations, testing
7. **Deploy:** Render static site, verify

---

## Assets Needed from User

1. **Map images (5):**
   - dam-battlegrounds.png
   - buried-city.png
   - spaceport.png
   - blue-gate.png
   - stella-montis.png
   - Recommended: ~1600px wide, PNG or WebP

2. **Optional enhancements:**
   - Enemy silhouettes/icons
   - Weapon icons
   - Trader portraits

---

## Success Criteria

- [ ] All 11 pages render correctly
- [ ] Sidebar navigation works on desktop and mobile
- [ ] Cross-site search finds items across all pages
- [ ] Favorites persist across sessions
- [ ] Skill tree builder allocates/deallocates points correctly
- [ ] Interactive maps show/hide hotspot layers
- [ ] Loadout builder calculates combined stats
- [ ] Deploys successfully to Render
- [ ] Lighthouse performance score >90
