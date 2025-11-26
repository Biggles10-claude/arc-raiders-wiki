# Arc Raiders Ultimate Wiki - Full Specification

Build a complete, production-ready Arc Raiders Ultimate Wiki website as a FULL MULTI-PAGE WEBSITE with separate HTML files for each major section. This should be a professional website with consistent navigation, styling, and interlinked pages.

## PROJECT STRUCTURE
Create the following files in a organized directory structure:
```
arc-raiders-wiki/
├── index.html (Homepage/Hero)
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
│   └── style.css (shared styles)
├── js/
│   └── main.js (shared scripts)
└── assets/
    └── (placeholder for future images)
```

## DESIGN SYSTEM (Consistent across ALL pages)

**Color Palette:**
- Background: #0a0a0c (dark)
- Card Background: #121418
- Accent Orange: #ff6b35
- Accent Yellow: #ffc857
- Accent Cyan: #00d4ff
- Accent Red: #ff4757
- Accent Green: #2ed573
- Text Primary: #e8e6e3
- Text Secondary: #9a9a9a

**Typography:**
- Headings: Orbitron (Google Fonts)
- Body: Rajdhani (Google Fonts)
- Data/Mono: Share Tech Mono (Google Fonts)

**Visual Effects:**
- Scanline overlay on body
- Animated hover states
- Smooth transitions
- Scanner indicators (blue/yellow/red pulsing dots)
- Card hover effects with border glow

## NAVIGATION (Same on ALL pages)

Fixed header with logo and links to:
- Home
- Overview
- Maps
- Weapons
- Enemies
- Skills
- Crafting
- Traders
- Extraction
- Tips
- Lore

Active page should be highlighted in navigation.

## FOOTER (Same on ALL pages)

- Quick links column
- Progression column
- Official resources column
- About/Status column
- Copyright notice
- "Made for Raiders" tagline

---

## PAGE-BY-PAGE CONTENT

### 1. INDEX.HTML (Homepage)

**Hero Section:**
- Large animated title: "THE ULTIMATE RAIDER'S GUIDE"
- Subtitle: "Your complete survival companion for the Rust Belt"
- Badge: "SPERANZA DATALINK ACTIVE"
- Stats grid:
  - 19+ Weapons
  - 15+ ARC Types
  - 5 Maps
  - 45 Skills
  - 66+ Quests

**Quick Access Cards:**
Grid of 6 large cards linking to main sections:
1. Maps - "Explore 5 Deadly Locations"
2. Weapons - "Master Your Arsenal"
3. Enemies - "Know Your Threats"
4. Skills - "Build Your Raider"
5. Crafting - "Forge Your Gear"
6. Extraction - "Get Out Alive"

**Latest Updates Box:**
- "New: Stella Montis Map Added!"
- "New: Matriarch & Shredder Enemies"
- "Balance: Venator Nerfed"
- "Event: Snowfall Condition (December)"

**Getting Started Section:**
3 steps with icons:
1. Learn the Basics → Overview
2. Choose Your Loadout → Weapons & Skills
3. Master Extraction → Survival Guide

---

### 2. OVERVIEW.HTML

**Game Overview:**
- Title: "What is ARC Raiders?"
- Developer: Embark Studios
- Platforms: PC, PS5, Xbox Series X|S
- Release: October 30, 2025
- Price: $40
- Genre: Third-person PvPvE extraction shooter

**Core Concepts (Cards):**
1. **Speranza** - Underground home base, craft/trade/quest
2. **The Rust Belt** - Dangerous surface world
3. **PvPvE** - Fight ARC + other players
4. **Extraction** - Keep loot by extracting alive

**Gameplay Loop Diagram:**
Visual flow: Speranza → Topside Drop → Scavenge → Fight → Extract → Repeat

**Key Features (Grid):**
- 30-minute raids
- Solo/Duo/Trio gameplay
- Up to 21 players per server
- Persistent progression
- Workshop crafting system
- Free loadout system
- Dynamic map conditions
- Cross-platform play

**Sales/Review Info:**
- 4+ million copies sold
- 400,000+ concurrent players
- Game Awards nomination
- "Best Extraction Shooter 2025"

---

### 3. MAPS.HTML

**Page Title:** "Maps & Locations"
**Subtitle:** "Five distinct battlegrounds across the Rust Belt"

**Map Cards (5 large detailed cards):**

**1. Dam Battlegrounds**
- Image placeholder area
- Difficulty: ⭐ (1/5) - Beginner
- Description: Alcantara Power Plant with dense forests and swamps
- Best For: Learning basics, Metal Parts, Batteries, Arc Circuitry
- Top POIs:
  - Electrical Substations (Battery farm)
  - Hydroponic Dome Complex
  - Power Generation Complex
  - Water Treatment
  - Testing Annex
- Extraction Points: 3 elevators
- Tips: Great cover, low-value loot, avoid open water

**2. Buried City**
- Difficulty: ⭐⭐⭐ (3/5) - Intermediate
- Description: Ancient city half-buried in sand dunes
- Best For: Fabric, Cat Beds, mid-tier loot
- Top POIs:
  - Hospital (high-value medical)
  - Town Hall
  - Plaza Rosa
  - Santa Maria Houses
  - Piazza Arbusto
  - Galleria
- Extraction Points: Metro Stations (3)
- Tips: Narrow streets = ambush danger, check shop shelves

**3. Spaceport**
- Difficulty: ⭐⭐⭐ (3/5) - Intermediate
- Description: Acerra Spaceport where Exodus shuttles launched
- Best For: ARC Circuitry, Tech Parts, Electronics
- Top POIs:
  - Container Storage (DANGEROUS - PvP hotspot)
  - Launch Towers
  - Departure Building
  - Arrival Building
  - Control Tower A6
  - Fuel Lines
- Extraction Points: 4 elevators
- Tips: Industrial = long sightlines, bring ranged weapon

**4. The Blue Gate**
- Difficulty: ⭐⭐⭐⭐ (4/5) - Advanced
- Description: Mountain pass with underground tunnel network
- Best For: High-tier loot, puzzle rewards
- Top POIs:
  - Pilgrim's Peak
  - Checkpoint (Bastion spawn)
  - Trapper's Glade
  - Underground tunnels
- Extraction Points: Elevators + Raider Hatches
- Tips: Requires puzzle solving (Barricade Kits, Jolt Mines)

**5. Stella Montis** (NEW)
- Difficulty: ⭐⭐⭐⭐⭐ (5/5) - Expert
- Description: Massive 2-floor underground facility in northern mountains
- Best For: Epic loot, exclusive drops, new enemies
- Top POIs:
  - Medical Research (INTENSE PvP)
  - Seed Vault
  - Assembly Workshops
  - Lobby (long-range combat)
  - Sandbox A & B
  - Loading Bay (Bastion patrol)
- Extraction Points: 3 (Airshaft, 2 Metro Stations)
- Enemies: Shredder, Matriarch, Bastions
- Tips: Close-quarters, bring shotguns, dark corridors

**Map Conditions Section:**
Table with icons:
| Condition | Effect | Loot Quality |
|-----------|--------|--------------|
| Standard | Normal ARC patrols | Normal |
| Night Raid | Darkness, limited extractions | Increased |
| Harvester | Queen boss appears | High (vaults) |
| Snowfall | Reduced visibility | Normal |

**Interactive Map Features Box:**
- "View extraction points"
- "Loot tier zones (Yellow = Medium, Red = High)"
- "ARC spawn locations"
- "Material farming routes"

---

### 4. WEAPONS.HTML

**Page Title:** "Weapons Database"
**Subtitle:** "19+ weapons. Master your arsenal."

**Ammo Types Guide (Top section):**
- **Heavy Ammo**: Best ARC penetration (Ferro, Bettina, Anvil)
- **Medium Ammo**: Balanced for all scenarios
- **Light Ammo**: High fire rate, weak vs armor
- **Shotgun Shells**: Devastating close range
- **Launcher Ammo**: Explosive, rare

**Weapon Tier List:**

**S-TIER: META DOMINANCE**
Expandable accordion with detailed cards for each:

1. **Ferro** (Break-Action Rifle)
   - Rarity: Common
   - Damage: 40
   - Ammo: Heavy
   - Magazine: 1
   - Penetration: Excellent
   - Best For: PvE / ARC destruction
   - Why S-Tier: King of ARC killing. 40 damage + armor shredding. Dirt cheap. Essential for Bastions/Rocketeers.
   - Upgrade Path: Tier 1-4 at Gunsmith
   - Cost: Very low
   - Mod Slots: 2

2. **Bettina** (Assault Rifle)
   - Rarity: Epic
   - Damage: 28
   - Ammo: Heavy
   - Magazine: 30
   - Fire Rate: Full-auto
   - Penetration: Strong
   - Best For: All-around
   - Why S-Tier: Best overall weapon. Smooth recoil, great accuracy, heavy ammo penetration. Works everywhere.
   - Mod Slots: 3

3. **Anvil** (Hand Cannon)
   - Rarity: Uncommon
   - Damage: 45
   - Ammo: Heavy
   - Magazine: 6
   - Why S-Tier: Functions like a primary weapon. One-tap potential. Shatters ARC armor. Essential sidearm.

4. **Vulcano** (Semi-Auto Shotgun)
   - Rarity: Rare
   - Damage: 55
   - Ammo: Shotgun
   - Magazine: 8
   - Why S-Tier: Instant player deletion. Semi-auto = faster follow-ups. Tight spread.
   - Warning: Struggles vs armored ARC

5. **Venator** (Double-Shot Pistol)
   - Rarity: Uncommon
   - Damage: 2x18
   - Ammo: Medium
   - Magazine: 12
   - Why S-Tier: Fires two bullets per trigger pull. Still top-tier after nerfs. Close-range king.
   - Recent Nerf: Fire rate + weight increased

6. **Hullcracker** (Grenade Launcher)
   - Rarity: Epic
   - Damage: 100 (explosive)
   - Ammo: Launcher (rare)
   - Magazine: 6
   - Why S-Tier: Unmatched ARC destruction. Mandatory for Queen/Matriarch. 100 damage per shot.
   - Cost: Very high

**A-TIER: STRONG CONTENDERS**
Cards for: Osprey, Renegade, Tempest, Il Toro, Jupiter, Bobcat

**B-TIER: BUDGET/STARTER**
Cards for: Rattler, Stitcher, Burletta

**C-TIER: SITUATIONAL**
Cards for: Hairpin, Arpeggio

**Weapon Modification Section:**
- Barrel Mods (suppressors)
- Sight Mods
- Grip Mods (Vertical Grip III reduces recoil)
- Extended Mags

**Recommended Loadouts:**
1. **Budget Beast**: Ferro + Stitcher + Light Shield
2. **All-Rounder**: Bettina + Anvil + Medium Shield
3. **PvP Hunter**: Vulcano + Venator + Heavy Shield
4. **Boss Killer**: Hullcracker + Ferro + Combat Augment Mk.3

---

### 5. ENEMIES.HTML

**Page Title:** "ARC Enemy Database"
**Subtitle:** "Know your threats. Learn their weaknesses."

**Scanner Behavior Guide (Top):**
Visual indicators:
- BLUE Scanner = Patrolling (Neutral) - Safe to observe
- YELLOW Scanner = Alerted (Caution) - Heard noise or spotted at distance
- RED Scanner = Attacking (Danger) - Locked on, engaging

**Enemy Categories:**

**LOW THREAT (Green)**
Grid of enemy cards:

1. **Tick**
   - Type: Ground Ambusher
   - Threat: Low
   - HP: Very Low
   - Behavior: Hides on walls/ceilings, leaps at face
   - Weak Point: Entire body
   - Drops: Minor loot, ARC Alloy
   - XP: 25
   - Counter: Melee one-shot with Fly Swatter skill
   - Audio Cue: Scuttling sound

2. **Pop**
   - Type: Rolling Bomb
   - Threat: Low
   - Behavior: Rolls toward players, detonates
   - Weak Point: Core (glowing)
   - Counter: Shoot before it reaches you
   - Don't Rush: Will explode

3. **Snitch**
   - Type: Scout Drone
   - Threat: Low (calls reinforcements)
   - Behavior: Flies high, scans area, summons Wasps/Hornets
   - Weak Point: 3 wiper blades
   - Drops: Snitch Scanner
   - Priority: KILL FAST to prevent alarm
   - Counter: Destroy all 3 blades quickly

4. **Wasp**
   - Type: Flying Drone
   - Threat: Low
   - Behavior: Aerial machine gun fire
   - Weak Point: Thrusters (all sides exposed)
   - Drops: Wasp Driver, ARC Alloy
   - Counter: Target propellers

5. **Rollbot/Surveyor**
   - Type: Indoor Patrol
   - Behavior: Rolls, stops to scan (core exposed)
   - Weak Point: Core when scanning
   - Counter: Wait for scan, shoot core

6. **Fireball**
   - Type: Flamethrower Unit
   - Behavior: Patrols in groups, stops and flames
   - Weak Point: Entire body
   - Drops: Fireball Burner
   - Counter: Shoot while rolling, avoid flames

**MEDIUM THREAT (Yellow)**

7. **Hornet**
   - Type: Combat Drone
   - Threat: Medium
   - Behavior: Faster than Wasp, stun attacks
   - Weak Point: Rear thrusters (back only)
   - Drops: Hornet Driver, ARC Alloy
   - XP: 150
   - Danger: Stun leaves you vulnerable

8. **Turret**
   - Type: Stationary Defense
   - Behavior: Wall-mounted, calibrates then fires
   - Weak Point: Base/core
   - Counter: Jump + melee from above
   - Time Window: Slow to aim

9. **Sentinel**
   - Threat: Medium
   - Good For: Fast XP farming
   - Weak Point: Core

10. **Bison**
    - Type: Quadruped
    - Behavior: Jump attacks, wave blasts
    - Faster than Bastion
    - Weak Point: Legs/joints

11. **Leaper**
    - Type: Ambush Unit
    - Behavior: Pounces from distance
    - Counter: Set traps on jump paths
    - Strategy: Mines + grenades

**HIGH THREAT (Red)**

12. **Rocketeer**
    - Type: Aerial Artillery
    - Threat: HIGH
    - Behavior: Guided rockets with AoE damage
    - Weak Point: Thrusters, glowing core underneath
    - Drops: Rocketeer Driver, Heavy Gun Parts
    - Audio Cue: Lock-on warning sound
    - DANGER: #1 player killer
    - Strategy: ALWAYS fight from indoor cover
    - Quick Kill: 1 Wolfpack Grenade
    - Never: Fight in open areas

13. **Bastion**
    - Type: Heavy Walker
    - Threat: HIGH
    - Behavior: Slow crab-like walker, devastating minigun
    - Weak Points: Yellow kneecaps → rear yellow cylinder
    - Drops: Bastion Parts, Bastion Cells (Hullcracker ammo)
    - XP: Massive
    - Strategy: NEVER front assault. Flank mandatory.
    - Team Tactic: One draws aggro, others flank
    - Spawns: Known locations on each map

14. **Bombardier**
    - Type: Artillery Walker
    - Threat: HIGH
    - Behavior: Heat-seeking mortar strikes
    - Works With: Spotter drones (yellow laser)
    - Weak Points: Same as Bastion (knees, rear)
    - Strategy: Fight from buildings with SOLID ROOFS
    - Counter: Kill Spotters first

15. **Shredder** (NEW)
    - Type: Close Combat Specialist
    - Threat: HIGH
    - Location: Stella Montis ONLY
    - Behavior: Rapid shotgun-like barrage
    - Danger: Shreds shields and HP instantly
    - Strategy: Maintain distance, use cover

**BOSS TIER (Purple)**

16. **The Queen**
    - Type: Harvester Guardian
    - Threat: BOSS
    - Behavior: Mortar fire + laser beam
    - Size: GIGANTIC
    - Requires: Multiple squads
    - Weak Point: Large core (after breaking outer armor)
    - Strategy: Team coordination essential
    - Alt Strategy: Loot Harvester vaults instead (easier)
    - Drops: Advanced Power Cells, Legendary components

17. **Matriarch** (NEW)
    - Type: Advanced Combat Unit
    - Threat: BOSS
    - Tagline: "Makes the Queen look friendly"
    - Behavior: Flashbangs, gas mines, summons backup
    - Summons: Bastions + Rocketeers
    - Weak Point: Face (only when blue shield is DOWN)
    - Requirements: Hullcracker + Wolfpack Grenades
    - Warning: Blue shield = invulnerable
    - Location: Stella Montis

**Lootable ARC (Non-Hostile):**
- ARC Courier
- ARC Probe
- ARC Husks (dead units)

---

### 6. SKILLS.HTML

**Page Title:** "Skill Trees & Progression"
**Subtitle:** "45 skills. 75 max points. No free respecs."

**Priority Build Path (Top visual):**
- Levels 1-15: Mobility focus (28 points recommended)
- Levels 16-30: Add Conditioning basics
- Levels 31-50: Unlock Survival (In-Round Crafting at 36)
- Levels 50+: Fill out remaining skills

**Three Branch Layout:**

**MOBILITY TREE** (Icon: Running figure)
*Speed, stamina efficiency, traversal*

Visual tree diagram showing progression:

**Tier 1 (Entry):**
- Nimble Climber (Required) - Faster climb/vault

**Tier 2 (5-10 points):**
- Marathon Runner (ESSENTIAL) - Movement costs less stamina
- Youthful Lungs (ESSENTIAL) - Max stamina increase
- Proper Breathing - Faster stamina regen

**Tier 3 (10-20 points):**
- Effortless Roll (ESSENTIAL) - Cheaper dodge rolls
- Calming Stroll - Stamina regen while walking
- Carry the Momentum - Speed boost after dodging

**Tier 4 (20-30 points):**
- Vault on Vaults - Zero stamina vaulting
- Light Feet - Faster sprint speed
- Nimble Recovery - Faster stamina recovery after depletion

**Advanced (30+ points):**
- Advanced skills for pure mobility builds

**Rating System:**
- ESSENTIAL = get ASAP
- Important = get early-mid
- Situational = optional

---

**CONDITIONING TREE** (Icon: Flexed arm)
*Toughness, recovery, weight management*

**Tier 1 (Entry):**
- Used to the Weight (ESSENTIAL) (Required) - Less shield speed penalty

**Tier 2:**
- Gentle Pressure (Important) - Quieter breaching
- Proficient Pryer (Important) - Faster breaching
- Heavier Hitter - Melee damage increase

**Tier 3 (15 points):**
- Survivor's Stamina (ESSENTIAL) - Faster regen when hurt
- Fight or Flight - Auto stamina regen at low HP
- Unburdened Roll - Free dodge when shield breaks

**Tier 4:**
- Downed but Determined (Team Play) - Longer bleed-out
- Turtle Crawl - Less damage while downed
- Three Deep Breaths - Faster stamina recovery after ability use

**Advanced (36+ points):**
- Back on Your Feet - Health regen at critical HP
- Loaded Arms - Equipped weapon weighs less
- Fly Swatter - One-hit melee on Ticks/Wasps

---

**SURVIVAL TREE** (Icon: Backpack)
*Scavenging, stealth, field crafting*

**Tier 1 (Entry):**
- Agile Croucher (Required) - Faster crouch movement

**Tier 2:**
- Looter's Instincts (ESSENTIAL) - Faster item identification
- Silent Scavenger (ESSENTIAL) - Quieter looting
- Broad Shoulders - Increased carry capacity

**Tier 3:**
- Just Another Plant (Important) - Harder for ARC to spot when crouching
- Revitalizing Squat - Stamina regen while crouching
- Good as New - Repair gear in-field (small amount)

**Tier 4 (36 points - GAME CHANGERS):**
- In-Round Crafting (CRITICAL) - Craft bandages, shield cells, grenades during raids
- Security Breach (ESSENTIAL) - Access Security Lockers
- Traveling Tinkerer - Expanded field crafting options

**Advanced:**
- Looter's Luck - Double loot chance
- One Raider's Scraps - Find crafted items in containers
- Minesweeper - Defuse enemy mines

---

**RECOMMENDED BUILDS:**

**1. Solo Survivor Build**
- Max Mobility (all essential skills)
- Gentle Pressure + Silent Scavenger (stealth)
- In-Round Crafting (self-sufficiency)
- Revitalizing Squat + Calming Stroll (stamina management)

**2. Team Support Build**
- Mobility essentials
- Downed but Determined + Turtle Crawl
- Traveling Tinkerer (craft for team)
- Broad Shoulders (carry team loot)

**3. PvP Hunter Build**
- Max Mobility + Combat-focused Conditioning
- Fight or Flight + Survivor's Stamina
- Skip crafting, focus on combat sustainability

**4. Speed Looter Build**
- All Mobility
- All Survival looting skills
- Broad Shoulders maxed
- Goal: Fast in/out, maximum loot

---

### 7. CRAFTING.HTML

**Page Title:** "Workshop & Crafting System"
**Subtitle:** "8 stations. 3 tiers each. Permanent progression."

**The Golden Rule (Large banner):**
"RECYCLE EVERYTHING - Materials > Money"
Never sell: Toasters, Fans, Radios, Broken Electronics
Recycle for: Metal Parts, Plastic Parts, Wires, Rubber Parts

**Workshop Stations (Grid with detailed cards):**

**1. GUNSMITH** (Priority)
- Crafts: Weapons, Weapon Mods, Advanced Ammo
- Tier 1: Basic weapons (Rattler, Stitcher, Burletta)
- Tier 2: Mid-tier weapons (Osprey, Tempest, basic mods)
- Tier 3: Legendary weapons (Ferro, Jupiter), advanced mod kits
- Materials Needed: Metal Parts, Gun Parts, Mechanical Components
- Strategy: RUSH TO TIER 2 for competitive weapons

**2. GEAR BENCH** (Priority)
- Crafts: Shields, Augments, Armor
- Shields:
  - Light Shield (fast, low protection)
  - Medium Shield (balanced) - Requires Tier 2
  - Heavy Shield (slow, high protection) - Requires Tier 3
- Augments:
  - Combat Mk.1-3 (combat stats, shield efficiency)
  - Looting Mk.1-3 (MASSIVE backpack space)
  - Tactical Mk.1-3 (more gadget slots)
- Strategy: Looting Mk.2 for material runs

**3. MEDICAL LAB** (Important)
- Tier 1: Bandages, Basic Shield Rechargers
- Tier 2: Medkits, Shield Rechargers, Detox Sprays
- Tier 3: Adrenaline Shots, Advanced Medkits, Raid Buffs
- Materials: Chemicals, Plastics, Medical Supplies
- Strategy: Craft in batches (20+ bandages, 10 rechargers)

**4. EXPLOSIVES STATION** (Important)
- Tier 1: Light Impact Grenades
- Tier 2: Gas Grenades, Blaze Grenades
- Tier 3: C4, Mines, Advanced explosives
- Materials: Chemicals, Wasp Drivers, Rocketeer Drivers
- Best For: ARC crowd control

**5. UTILITY STATION** (Important)
- Tier 1: Zipline, Basic gadgets
- Tier 2: Snap Hook (personal grapple), Tagging Grenades
- Tier 3: Photoelectric Cloak (stealth invisibility)
- Materials: Snitch Scanners, Electronics, Fabric
- Essential: Zipline for verticality

**6. REFINER** (Useful)
- Function: Convert materials
- Example: 5 Metal Parts → 1 Mechanical Component
- Saves: Inventory space, farming time
- Strategy: Upgrade mid-game for efficiency

**7. EXPLOSIVES BENCH**
(already covered above)

**8. BASIC WORKBENCH** (Cannot Upgrade)
- Always Available: Basic weapons, most ammo
- Crafts: Light/Medium/Heavy Ammo, Shotgun Shells
- Free Forever: No upgrade needed

**SCRAPPY** (Your Pet Rooster)
- Function: Passively collects materials while offline
- Brings: Metal Parts, Fabric, Plastic Parts, Chemicals, Rubber, Seeds
- Upgrade: Feed special items found in raids
- Strategy: UPGRADE FIRST for passive income snowball

---

**BLUEPRINT SYSTEM:**

**What are Blueprints?**
- Permanent crafting recipe unlocks
- Found: Containers, locked rooms, quests, boss drops
- Rarity: Common → Legendary
- Account-Wide: Never lose once learned

**How to Use:**
1. Find blueprint in raid
2. Put in SAFE POCKET immediately
3. Extract successfully
4. Use in inventory to learn
5. Unlocked forever at appropriate workbench

**Best Blueprint Farming Locations:**

**Spaceport:**
- Container Storage (high-risk, high-reward)
- Launch Towers event
- Security rooms

**Stella Montis:**
- Medical Research (most Epic drops)
- Security Checkpoint
- Breach rooms (east side Lobby)

**Buried City:**
- Hospital (medical blueprints)
- Town Hall
- Pharmacy rooms

**General Tips:**
- Breach rooms = better loot tables
- Security Lockers = requires Security Breach skill
- Night Raids = increased blueprint drop rates
- Harvester event = legendary blueprint chances

---

**MATERIAL FARMING GUIDE:**

| Material | Best Maps | Hot Spots | Used For |
|----------|-----------|-----------|----------|
| Metal Parts | Dam, All maps | Everywhere (recycle junk) | Everything |
| Mechanical Components | All | Refiner (5 Metal → 1 Mech) | Weapon upgrades |
| Arc Circuitry | Spaceport, Dam | Electrical areas | Workshop upgrades |
| Batteries | Dam | Electrical Substations | Crafting, upgrades |
| Fabric | Buried City | Residential, shops | Armor, augments |
| Cat Beds | Buried City | Plaza Rosa, shops | Scrappy upgrades |
| Chemicals | All | Medical areas | Explosives, medical |
| Wasp Drivers | Kill Wasps | Any map | Explosives |
| Rocketeer Drivers | Kill Rocketeers | See enemy guide | Tier 3 Explosives |
| Bastion Cells | Kill Bastions | See enemy guide | Hullcracker ammo |

---

**UPGRADE PRIORITY GUIDE:**

**Early Game (Levels 1-20):**
1. Scrappy (passive income)
2. Gunsmith Tier 2 (better weapons)
3. Gear Bench Tier 2 (Medium Shield + Looting Mk.2)

**Mid Game (Levels 20-40):**
1. Medical Lab Tier 2 (sustainability)
2. Explosives Tier 2 (ARC control)
3. Gunsmith Tier 3 (endgame weapons)

**Late Game (Level 40+):**
1. All stations to Tier 3
2. Focus on blueprint collection
3. Stockpile materials for expensive crafts

---

### 8. TRADERS.HTML

**Page Title:** "Traders & Quests"
**Subtitle:** "5 Traders. 66+ Quests. Your path to wealth and power."

**Trader Profiles (Large detailed cards):**

**1. CELESTE**
*Leader of Speranza*

- **Personality:** Charismatic, strategic, symbol of hope
- **Background:** Lost home multiple times to ARC. Founded Speranza. Preparing evacuation plans.
- **Specialty:** Leadership, Community Resources
- **Sells:**
  - Gun Parts (Light, Medium, Heavy)
  - Wires
  - Batteries
  - Basic crafting materials
  - Essential resources
- **Quests:** 15+ story progression quests
- **Key Quests:**
  - "A First Foothold" (starter)
  - "Look for any ARC Courier or Probe"
  - Various exploration missions
- **Lore Role:** Your main quest giver, unfolds the story of Speranza and the ARC threat

**2. TIAN WEN**
*Gun Craftsman*

- **Personality:** Reclusive, prefers tools to people, secretly has a soft spot
- **Background:** Wears mask, only eyes visible. Disdainful of most Raiders but loves repairs.
- **Specialty:** Weapons, Blueprints
- **Sells:**
  - Weapons (daily rotation)
  - Weapon blueprints
  - Gun Parts
  - Weapon mods
  - Ammunition
- **Quests:** 12+ weapon-focused missions
- **Key Quests:**
  - "Broken Monument" (find Tian Wen's items)
  - Weapon testing missions
  - Blueprint delivery quests
- **Trading Tip:** Check daily for rare weapon blueprints

**3. APOLLO**
*Traveling Mechanic*

- **Personality:** Cryptic about past, wants to make everywhere better
- **Background:** Not his first rodeo. Runs kids' football team, stocks library.
- **Specialty:** Explosives, Tactical Gear
- **Sells:**
  - Grenades (Impact, Gas, Blaze)
  - Mines
  - C4
  - Tactical gadgets
  - Explosive components
- **Quests:** 14+ explosive-focused missions
- **Key Quests:**
  - "Eliminate 2 ARC with grenades"
  - "Use Fireball Burner to eliminate ARC"
  - "Use Trigger Nade on Hornet"
  - "Find espresso machine parts"
  - "Deliver books to Library"
- **Lore Role:** Community builder, mysterious past

**4. LANCE**
*Android Medic*

- **Personality:** Eccentric, bubbly, tries to fit in with humans
- **Background:** Amnesia. Loves midnight karaoke (off-pitch), fashion, boxing.
- **Specialty:** Medical Supplies, Augments
- **Sells:**
  - Medical supplies (bandages, medkits)
  - Shield Rechargers
  - Augments (all types)
  - Medical components
- **Quests:** Medical and support missions
- **SPECIAL FEATURE:** Trade Free Loadout Augment for better augment!
  - Take Free Loadout
  - Extract successfully
  - Trade gray augment → green augment (Combat/Looting/Tactical Mk.1)
- **Strategy:** Use for upgrading from free runs
- **Lore Mystery:** Lost memories returning slowly...

**5. SHANI**
*Head of Security*

- **Personality:** Paranoid (for good reason), contingency plans for contingencies
- **Background:** ARC expert. Celeste's biggest tactical resource.
- **Specialty:** Utility, Security, Intel
- **Sells:**
  - Ziplines
  - Snap Hooks
  - **Hatch Keys (DAILY - one per day)**
  - Gadgets
  - Security tools
- **Quests:** 18+ security and exploration missions
- **Key Quests:**
  - "Fix Field Depot antenna"
  - "Fix Raider Hatch hydraulics"
  - "Deliver Field Crate to Supply Station"
  - "Eliminate Wasp, Hornet, Snitch - return their parts"
  - "Deliver LiDar scanner to Jiangsu warehouse"
- **Daily Purchase:** Hatch Key (one per day, buy early!)
- **Lore Role:** Knows more about ARC than anyone

---

**QUEST SYSTEM GUIDE:**

**How Quests Work:**
1. Accept from trader in Speranza
2. Complete objectives topside
3. Return to trader to turn in
4. Receive rewards: XP, materials, weapons, blueprints, cosmetics

**Quest Progression:**
- Many quests locked behind earlier quests
- Complete starter quests to unlock advanced missions
- Some quests require specific map access
- Story unfolds through quest dialogue

**Helpful Mechanics:**
- **Team Shared:** Teammate actions count toward your objectives
  - Kills
  - Container looting
  - Objectives
- **Item Trading:** Drop items on ground for teammates
- **Keep Rewards:** Most quests let you keep required items after completion

**Quest Types:**

**1. Collection Quests**
- "Collect 6 Wires and a Battery"
- "Deliver specific items"
- Tip: Use Watchlist feature

**2. Elimination Quests**
- "Eliminate 3 ARC"
- "Kill specific enemy types"
- Tip: Team kills count!

**3. Exploration Quests**
- "Discover location X"
- "Visit specific POI"
- Tip: Use Free Loadout for scouting

**4. Delivery Quests**
- "Deliver Field Crate to Supply Station"
- "Take items to specific locations"
- Tip: Put quest items in Safe Pocket

**5. Multi-Stage Quests**
- Multiple objectives across maps
- "Greasing Her Palms" (3 objectives, 3 maps)
- Highest rewards

---

**TOTAL QUEST COUNT BY TRADER:**

| Trader | Quest Count | Focus |
|--------|-------------|-------|
| Celeste | 15+ | Story, exploration |
| Tian Wen | 12+ | Weapons, combat |
| Apollo | 14+ | Explosives, community |
| Lance | 10+ | Medical, survival |
| Shani | 18+ | Security, intel |
| **TOTAL** | **66+** | More coming in updates |

---

### 9. EXTRACTION.HTML

**Page Title:** "Extraction Guide"
**Subtitle:** "Get out alive. Keep your loot. Survive."

**The Core Truth (Large box):**
"Everything you collect is WORTHLESS until you extract. Dead Raiders extract nothing."

---

**EXTRACTION METHODS:**

**METHOD 1: ELEVATOR / METRO STATION** (Standard)

**How It Works:**
1. Locate extraction point (marked on map)
2. Approach and activate console
3. **LOUD ALARM BROADCASTS YOUR POSITION**
4. Wait for elevator/train arrival
5. Enter when it arrives
6. 90-second auto-departure timer
7. Optional: Pull lever for immediate departure (takes few seconds)

**Pros:**
- Multiple per map (usually 3-4)
- No special key required
- Free to use
- Can extract while downed (crawl in)
- Always available (until timer expires)

**Cons:**
- **LOUD ALARM** attracts everyone
- Popular camping/ambush spots
- Countdown timers close points permanently
- 90-second wait = vulnerability window
- Other Raiders can follow you in

**Locations by Map:**
- Dam Battlegrounds: 3 elevator locations
- Buried City: 3 Metro Stations (underground then extract)
- Spaceport: 4 elevators
- Blue Gate: 2 elevators + hatches
- Stella Montis: 2 Metro Stations + 1 Airshaft

**Critical Mechanic:**
Timers show when extraction CLOSES. When countdown hits 0:00, that exit is GONE for the rest of the match. Plan accordingly!

---

**METHOD 2: RAIDER HATCH** (Silent)

**How It Works:**
1. Find Raider Hatch location (marked on map)
2. Approach with Hatch Key in inventory
3. **SILENT - No alarm**
4. Use key to unlock
5. Enter and extract immediately

**Pros:**
- **COMPLETELY SILENT** - no announcement
- Instant extraction (no wait)
- Rarely camped (players don't know you're there)
- Quick and safe
- Perfect for high-value loot runs

**Cons:**
- Requires Hatch Key (limited supply)
- Fewer locations than elevators
- Key is one-time use
- Must plan ahead to have key

**How to Get Hatch Keys:**
- Buy from Shani (1 per day, resets daily)
- Craft at Workshop (requires materials + blueprint)
- Find rarely during raids

**Strategy:**
- Save for high-value extractions
- Use when carrying blueprints or epic loot
- Solo players: safer than elevator
- Emergencies: quick exit when pursued

**Best Time to Use:**
- Found a legendary blueprint
- Full bag of epic materials
- Low HP, being hunted
- Time running out, far from elevators

---

**METHOD 3: SAFE POCKET** (Insurance)

**How It Works:**
- Special inventory slots (bottom of inventory)
- Items placed here are KEPT even if you die
- Automatically protected

**Safe Pocket Slots:**
- Default: 3 slots
- With Augment: 2 slots (trade-off for bigger backpack)
- Free Loadout: **0 SLOTS** (NOTHING protected!)

**What to Put in Safe Pocket:**
1. **BLUEPRINTS** (always #1 priority)
2. Epic/Legendary materials
3. Rare components (Rocketeer Drivers, Bastion Cells)
4. Quest items (if not confident)
5. Expensive crafting materials

**What NOT to Put:**
- Common materials (Metal Parts, etc.)
- Cheap ammo
- Items you have plenty of
- Basic weapons

**Critical Rule:**
If you find a BLUEPRINT, immediately:
1. Stop what you're doing
2. Open inventory
3. Put blueprint in Safe Pocket
4. Plan extraction route
5. Extract ASAP

**Free Loadout Warning:**
Free Loadouts have ZERO Safe Pockets. You lose EVERYTHING if you die. Only use for:
- Learning maps (nothing to lose)
- Quick material runs (okay to risk)
- NOT for quest items or blueprints

---

**EXTRACTION COMBAT TACTICS:**

**BEFORE Calling Extraction:**

**1. Scout the Area**
- Check for other Raiders (listen for footsteps)
- Clear nearby buildings/cover spots
- Look for ARC patrols (especially Snitches)
- Identify escape routes if ambushed

**2. Timing Strategy**
- Don't call elevator with tons of time left (gives others time to arrive)
- Don't wait until last minute (timer might expire)
- Sweet spot: 5-10 minutes remaining

**3. Positioning**
- Take high ground overlooking extraction
- Position with back to wall (can't be flanked)
- Have cover from multiple angles
- Be ready to move inside quickly

**DURING the Wait:**

**90-Second Survival:**
- Constantly scan for threats (360 degrees)
- Don't stay stationary (makes you sniper target)
- Keep moving between cover spots
- Watch the entry point for ambushers

**If Attacked:**
- Option 1: Fight and defend (if confident)
- Option 2: Use gadgets (smoke, flash, traps)
- Option 3: Pull lever for early departure (risky, 3-5 second animation)
- Option 4: Abandon and use backup extraction

**ARC Threats at Extractions:**
- Snitches: Kill immediately (will call hordes)
- Wasps/Hornets: Target propellers for quick kills
- Leapers: Set mines before calling
- Ticks: Check walls/ceilings before camping spot

---

**ADVANCED EXTRACTION TACTICS:**

**The Decoy Play:**
- Call one extraction (alarm goes off)
- Don't actually wait there
- Sneak to different extraction
- Raiders converge on first alarm
- You extract quietly elsewhere

**The Last-Second Switch:**
- Wait at elevator until final 10 seconds
- Pull lever (committed to leave)
- If safe, you're gone
- If ambushed, you're trapped (high risk)

**The Hatch Reserve:**
- Save Hatch Key for emergencies
- If main extraction is camped, use hatch
- Always know hatch locations before raiding

**The Downed Extraction:**
- If downed near extraction, CRAWL IN
- Elevator/Metro still works while downed
- Team can revive you inside
- You keep everything!

**The Over-Encumbered Extraction:**
- If too heavy (slowed movement)
- Drop lowest-value items as you move
- Speed > 1-2 extra items
- Getting there alive matters most

---

**EXTRACTION POINT TIMERS:**

**What the Countdown Means:**
- Shows minutes until that SPECIFIC extraction closes
- Different extractions have different timers
- When timer hits 0:00 = permanently closed
- Forces players to move and adapt

**Strategy:**
- Always have backup extraction in mind
- If primary has 2 minutes left, use it NOW
- If timer low, head to different extraction
- Late game = fewer options = more PvP

**Map-Specific Notes:**
- Buried City: Metro Stations take extra time (underground travel)
- Stella Montis: Airshaft has unique vertical exit
- Blue Gate: Hatches more common here

---

**EXTRACTION CHECKLIST:**

Before every extraction:
- [ ] Check Safe Pocket (blueprints secure?)
- [ ] Verify extraction timer (enough time?)
- [ ] Scout area (clear of threats?)
- [ ] Backup extraction known?
- [ ] Gadgets ready (smoke, flashes, mines?)
- [ ] HP and shields topped off?
- [ ] Weapon reloaded?
- [ ] Team coordinated?
- [ ] Worth the risk? (or extract now with what you have?)

---

**WHEN TO EXTRACT:**

**Extract NOW if:**
- Found a blueprint
- Bag full of good loot
- Low HP/shields with no meds
- Heavy PvP in your area
- Timer running out
- Completed quest objectives
- Better to bank smaller gains than risk total loss

**Stay Longer if:**
- Bag mostly empty
- Near high-value loot location
- Plenty of time and resources
- Comfortable with current risk
- Specific quest objective nearby

**The Golden Rule:**
"A full bag means it's time to leave, regardless of time remaining."

---

### 10. TIPS.HTML

**Page Title:** "Essential Tips & Tricks"
**Subtitle:** "Hard-earned wisdom from the Rust Belt"

**Beginner Tips (First 10 Hours):**

**1. Use Free Loadouts Aggressively**
- Zero risk way to learn
- Scout maps, find POIs
- Complete low-risk quests
- Learn ARC spawn locations
- Then trade augment to Lance for upgrade
- Repeat until comfortable

**2. Recycle Everything (CRITICAL)**
- **Never Sell:**
  - Toasters
  - Desk Fans
  - Broken Radios
  - Damaged Electronics
  - Any "junk" item
- **Right-Click → Recycle:**
  - Toaster = Plastic Parts + Wires
  - Fan = Metal Parts + Wires
  - Radio = Metal Parts + Electronics
- **Why:** Materials are the REAL currency
- **Money** is easy to earn
- **Materials** gate your progression

**3. Sound is Intelligence**
- Footsteps reveal player positions
- Gunfire shows ongoing fights
- Car alarms broadcast careless players
- ARC machines have unique audio cues
  - Wasp: Propeller hum
  - Rocketeer: Heavy rotors
  - Bastion: Mechanical walking
  - Snitch: High-pitched scan
- Use headphones for best spatial audio
- Turn on setting: "Enable 3D Audio"

**4. Blueprint Priority Protocol**
- Blueprint found = mission changes
- **STOP EVERYTHING**
- **Open inventory immediately**
- **Place in Safe Pocket**
- **Head to nearest extraction**
- Ignore other loot
- Avoid all fights
- Permanent unlock > any material

**5. Heavy Ammo for ARC**
- Light ammo = pea shooter vs armored ARC
- Medium ammo = okay vs ARC
- **Heavy ammo = ARC killer**
- Essential for:
  - Bastions (heavy armor)
  - Rocketeers (armored thrusters)
  - Bombardiers (heavy plating)
- Bring Ferro or Anvil for ARC fights

---

**Combat Tips:**

**6. Melee Finish Downed Players**
- Downed Raider = vulnerable but time-consuming
- Bullets = 5-10 seconds + loud
- **Knockout Punch = 1 second + silent**
- **Always melee** downed enemies
- Saves ammo
- Quieter (doesn't attract attention)
- Faster (get their loot and move)

**7. ~100 HP Standard**
- Most Raiders have roughly 100 HP
- Helps with engagement decisions
- Know your weapon TTK (time to kill)
- Example: Ferro (40 dmg) = 3 shots to kill
- Factor in shields (varies by type)
- Headshots deal bonus damage
- Use this to decide: engage or disengage

**8. Camera Melee Trick**
- Security cameras can be destroyed
- Jump + vertical crowbar swing
- Disables without using ammo
- Silent (doesn't alert)
- Useful for breaching undetected

**9. Drone Propeller Focus**
- Wasps/Hornets have exposed propellers
- Shoot same-side propeller
- Causes immediate crash
- Then melee to finish
- Black smoke marks crash site
- Quick kills = less attention

**10. Pre-Destroyed ARC Lootable**
- Dead ARC units ("husks") have loot
- Don't overlook "cold" wrecks
- Giant spider-type = lootable hatch on top
- Climb up, grab loot, jump off FAST
- Chassis heats up after opening (damage)

---

**Movement & Survival:**

**11. Stamina Management**
- Everything drains stamina:
  - Sprinting
  - Jumping
  - Vaulting
  - Rolling/Dodging
- **Slide while running** = passive regen
- Invest in Mobility skills FIRST
- Calming Stroll = regen while walking
- Marathon Runner = less drain
- Running out = death sentence

**12. Plan Your Exit**
- Before dropping, know extraction points
- Mental note: "I'll extract at X"
- Backup: "If X is closed, I'll go to Y"
- Watch timers (they close permanently)
- **Full bag = time to leave**
- Don't get greedy (greed = death)

**13. Parkour = Life**
- Vertical movement wins fights
- Unexpected angles = advantage
- Learn parkour lines (YouTube)
- Practice on Free Loadouts
- Zipline + Snap Hook = mobility king
- High ground = better sightlines

**14. Car Alarm Hell**
- Vehicles with lights on = armed
- Bump them = **LOUD ALARM**
- Broadcasts position to entire area
- **Fix:** Smash the attached alarm device
- Do it FAST (before ARC/players arrive)
- Or just avoid lit vehicles

---

**Looting & Efficiency:**

**15. Watchlist Feature**
- Need specific materials?
- Hover over item in crafting
- Click **eye icon**
- Materials auto-highlight when looting
- Saves time
- Prevents missing needed items
- Essential for quest items

**16. In-Round Crafting (Skill)**
- **36-point Survival skill**
- **GAME CHANGER**
- Craft during raids:
  - Bandages (when out of heals)
  - Shield Cells (emergency shield)
  - Impact Grenades (need explosives)
- Extends raid time indefinitely
- Solo player essential
- Team support amazing

**17. Flare Reading**
- Flare on ground = someone died there
- BUT: Crafted flares can be decoys
- Don't blindly charge flares
- Could be trap
- Could be mislead
- Scan area first, then approach

**18. Locked Room = Best Loot**
- Breachable doors = high-value loot
- Game treats room as premium zone
- Higher blueprint drop rates
- Better container rolls
- Worth the noise usually
- Prioritize security rooms

---

**Advanced Strategy:**

**19. Noise Discipline**
- Breaching = loud (use Gentle Pressure skill)
- Prolonged fighting = loud (attracts)
- Finish fast or move on
- Silent kills when possible
  - Melee
  - Suppressed weapons (Hairpin)
- Avoid unnecessary noise

**20. Risk vs Reward Always**
- Every decision = risk assessment
- Got good loot? Consider extracting
- Empty bag? Push further
- Low HP? Play safe
- High HP + resources? Be bold
- **Bank smaller gains > lose everything**

**21. Team Communication**
- Proximity chat is powerful
- "Don't shoot!" often works
- Many players are friendly
- Temporary alliances common
- Take down ARC together
- Then extract peacefully
- Or... betray at extraction (your choice)

**22. Free Loadout Strategies**
- **Loot Goblin:** Sneak, avoid all fights, fill bag, extract
- **PvP Hunter:** Find geared player, surprise attack, take their stuff
- **Scout Mission:** Learn map, find quest locations, no loot needed
- **Trade Exploit:** Extract, trade augment to Lance, repeat for upgrades

---

**Meta Knowledge:**

**23. Match Making:**
- Solo players often matched vs other solos
- Not guaranteed, but common
- Fair fights more likely
- Still prepare for squads

**24. Extract While Downed**
- Game lets you extract when downed
- Crawl into elevator/metro
- Keep everything!
- Team can revive you inside
- Don't give up if near extraction

**25. Scrappy is Essential**
- Pet rooster collects materials passively
- Even while you're offline
- Upgrade him FIRST
- Compounds over time
- Free materials = huge advantage

**26. Night Raids = Better Loot**
- Map condition: Night Raid
- Darkness + limited extractions
- Higher risk
- Better loot drop rates
- Blueprint chance increased
- Worth it if confident

---

**Common Mistakes to Avoid:**

**DON'T:**
- Sell junk items (recycle instead)
- Fight every ARC you see (avoid when possible)
- Run in open areas (always use cover)
- Ignore extraction timers (plan ahead)
- Forget Safe Pockets (protect blueprints)
- Use Free Loadout for quests (no Safe Pockets)
- Fight Bastion head-on (always flank)
- Stand still at extraction (keep moving)
- Ignore audio cues (sound = intel)
- Get greedy (full bag = leave)

**DO:**
- Recycle everything
- Pick fights wisely
- Move tactically
- Plan extractions early
- Use Safe Pockets correctly
- Invest in Mobility skills first
- Flank heavy ARC
- Stay mobile at extraction
- Listen carefully
- Extract when ahead

---

### 11. LORE.HTML (Bonus)

**Page Title:** "The Lore of ARC Raiders"
**Subtitle:** "The story of humanity's last stand"

**Timeline of Catastrophe:**

**The First Wave: Climate Collapse**
- Earth ravaged by climate catastrophe
- Civilization on brink of collapse
- Desperate attempts at salvation
- Exodus shuttles built (Spaceport)
- Hope for space colonies

**The Second Wave: ARC Arrival**
- Mysterious machines appear
- Unknown origin, unknown purpose
- Designation: "ARC" (Artificial Robotic Construct)
- Systematic destruction of humanity
- Surface becomes "Rust Belt"
- Humanity driven underground

**The Underground Era:**
- Survivors build Speranza
- Located in post-apocalyptic Italy
- District of Toledo
- Leaders: Celeste, Shani, others
- Society of "Raiders" emerges
- Risk-takers who venture topside

**Present Day:**
- Raids for resources essential
- ARC threat ever-present
- Factions with different visions
- Mystery of ARC origin unsolved
- Evacuation plans being prepared
- The fight continues...

---

**The ARC Mystery:**

**What We Know:**
- Mechanical entities of immense power
- Variety of units (ground, air, boss)
- Seem to "rain from the sky"
- Methodical, intelligent behavior
- Origins completely unknown

**What We Don't Know:**
- Who created them?
- Why did they appear?
- What is their purpose?
- Can they be stopped?
- Is there a controller?

**Theories (In-Universe):**
- Failed AI uprising
- Extraterrestrial force
- Military experiment gone wrong
- Earth's defense mechanism
- Time paradox

---

**Speranza: The Last City**

**Location:**
- Deep underground
- Beneath Italy's ruins
- District of Toledo
- Multiple neighborhoods
- Growing population

**Society Structure:**
- **Celeste:** Leader, founder
- **Raiders:** Scavengers (player characters)
- **Traders:** Resource managers
- **Citizens:** Regular survivors
- **Security:** Shani's forces

**Culture:**
- NASA-Punk aesthetic
- Function over fashion
- Cowboy dusters + astronaut helmets
- "Boldness and bravado"
- Maker culture (workshops)
- Tight-knit community

**Key Locations:**
- Workshop District (your den)
- Trading Hub (merchants)
- Security Command (Shani)
- Library (Apollo maintains)
- Recreation areas
- Living quarters

---

**The Traders' Agendas:**

**Celeste:**
- Vision: Preserve humanity
- Goal: Prepare for evacuation
- Method: Strengthen Speranza
- Secret: Planning exodus route

**Tian Wen:**
- Vision: Unknown (reclusive)
- Goal: Perfect weapon craft
- Method: Isolation, focus
- Secret: Soft spot for repairs

**Apollo:**
- Vision: Better tomorrow
- Goal: Build community bonds
- Method: Kids' football, library
- Secret: Mysterious past

**Lance:**
- Vision: Fit in with humans
- Goal: Recover lost memories
- Method: Over-participation
- Secret: Amnesia hiding something

**Shani:**
- Vision: Total security
- Goal: Understand ARC threat
- Method: Paranoid preparation
- Secret: Knows more than she says

**Tensions:**
- Different visions for future
- Resource allocation conflicts
- Risk tolerance disagreements
- Some want to fight, others flee
- Political undercurrents

---

**The Rust Belt:**

**What It Is:**
- The surface world
- Post-post-apocalyptic Italy
- Overgrown, reclaimed by nature
- Deadly beautiful

**Regions:**
- Dam Battlegrounds (Power Plant)
- Buried City (Ancient ruins)
- Spaceport (Exodus site)
- Blue Gate (Mountain pass)
- Stella Montis (Research facility)

**Aesthetic:**
- NASA-Punk
- Retro-futuristic decay
- 70s space age + western
- Nature reclaiming technology
- Hope amid desolation

**Resources:**
- Pre-collapse technology
- Salvageable materials
- Medical supplies
- Weapons and gear
- Memories of old world

---

**Raiders: The Player's Role**

**What is a Raider?**
- Volunteer from Speranza
- Ventures "Topside" to Rust Belt
- Scavenges for community
- High risk, high reward
- Respected for bravery

**Raider Culture:**
- "Boldness and bravado"
- Individualistic but communal
- Competitive yet cooperative
- Stories shared in bars
- Legends emerge

**Motivation:**
- Help Speranza thrive
- Personal profit
- Thrill-seeking
- Purpose in dangerous world
- Different for each Raider

**The Choice:**
- Fight other Raiders?
- Cooperate with strangers?
- Kill or spare?
- Hoard or share?
- Your story to write

---

**Mysteries to Uncover:**

**The Exodus:**
- What happened to the shuttles?
- Did anyone escape Earth?
- Why is Spaceport abandoned?

**ARC Origin:**
- Where did they come from?
- Quest chain explores this
- Pieces of puzzle scattered
- Truth may be shocking

**Lance's Memory:**
- Who was he before?
- Why amnesia?
- What will he remember?

**Apollo's Past:**
- Why so cryptic?
- "Not his first rodeo"
- Where was he before?

**Stella Montis:**
- What was researched there?
- Why so well-preserved?
- Connection to ARC?

**The Matriarch:**
- New, advanced ARC type
- More intelligent?
- Evolution or design?

---

**The Game's Message:**

**Themes:**
- Hope in hopelessness
- Community in isolation
- Choice in chaos
- Humanity vs machines
- Cooperation vs competition

**Tone:**
- Not grimdark
- Post-post-apocalyptic
- "Hope amid ruins"
- Vibrant despite danger
- Players make the story

**Philosophy:**
- "What kind of Raider are you?"
- Moral choices matter
- Emergent storytelling
- Your legacy in Speranza
- The future you build

---

## SHARED CSS FILE (css/style.css)

Include all the styling from the previous single-page website, organized into sections:
- Reset & Base Styles
- Color Variables
- Typography
- Navigation (fixed header)
- Footer
- Cards & Grids
- Tables
- Buttons & Interactive Elements
- Animations
- Accordions
- Tier Badges
- Rarity Colors
- Scanner Indicators
- Responsive Design
- Utility Classes

## SHARED JS FILE (js/main.js)
```javascript
// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordion = header.parentElement;
        const isActive = accordion.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion').forEach(acc => {
            acc.classList.remove('active');
        });

        // Open clicked accordion if it wasn't active
        if (!isActive) {
            accordion.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and animated elements
document.querySelectorAll('.card, .weapon-card, .enemy-card, .trader-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Table search/filter (optional enhancement)
function filterTable(input, tableId) {
    const filter = input.value.toUpperCase();
    const table = document.getElementById(tableId);
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let display = false;
        const td = tr[i].getElementsByTagName('td');

        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                const txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    display = true;
                    break;
                }
            }
        }

        tr[i].style.display = display ? '' : 'none';
    }
}
```

## BUILD INSTRUCTIONS

1. Create the directory structure exactly as shown
2. Build css/style.css with all shared styles
3. Build js/main.js with all shared scripts
4. Create each HTML page with:
   - Proper `<!DOCTYPE html>` and meta tags
   - Links to shared CSS and JS files
   - Consistent navigation (with active state)
   - Consistent footer
   - Page-specific content as detailed above
   - Proper internal linking between pages
5. Ensure all navigation links point to correct files
6. Test all pages work independently
7. Verify navigation works between all pages
8. Check responsive design on mobile/tablet/desktop

## QUALITY REQUIREMENTS
- Production-ready code
- Clean, semantic HTML
- Organized CSS with comments
- Well-structured JavaScript
- Fast loading (optimized)
- Fully responsive
- Cross-browser compatible
- Accessible (ARIA labels where needed)
- Professional polish

This is a COMPLETE, PROFESSIONAL website ready for deployment.
