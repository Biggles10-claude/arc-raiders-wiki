/**
 * ARC Raiders Wiki - Cross-Site Search
 * Provides search across all pages with instant results
 */

// ============================================================
// SEARCH INDEX
// Contains all searchable content across the wiki
// ============================================================
const searchIndex = [
  // Homepage
  { page: 'index.html', section: '', title: 'Home', keywords: ['home', 'start', 'guide', 'raider'] },

  // Overview
  { page: 'overview.html', section: '', title: 'Overview', keywords: ['overview', 'basics', 'what is', 'embark', 'pvpve', 'extraction shooter'] },
  { page: 'overview.html', section: 'speranza', title: 'Speranza', keywords: ['speranza', 'home base', 'underground', 'hub'] },
  { page: 'overview.html', section: 'rust-belt', title: 'The Rust Belt', keywords: ['rust belt', 'surface', 'topside', 'maps'] },

  // Maps
  { page: 'maps.html', section: '', title: 'Maps', keywords: ['maps', 'locations', 'poi', 'extraction points'] },
  { page: 'maps.html', section: 'dam-battlegrounds', title: 'Dam Battlegrounds', keywords: ['dam', 'battlegrounds', 'beginner', 'alcantara', 'power plant', 'batteries'] },
  { page: 'maps.html', section: 'buried-city', title: 'Buried City', keywords: ['buried city', 'sand', 'hospital', 'fabric', 'cat beds', 'plaza rosa'] },
  { page: 'maps.html', section: 'spaceport', title: 'Spaceport', keywords: ['spaceport', 'acerra', 'exodus', 'container storage', 'electronics', 'arc circuitry'] },
  { page: 'maps.html', section: 'blue-gate', title: 'The Blue Gate', keywords: ['blue gate', 'mountain', 'tunnels', 'puzzles', 'advanced'] },
  { page: 'maps.html', section: 'stella-montis', title: 'Stella Montis', keywords: ['stella montis', 'underground', 'facility', 'expert', 'shredder', 'matriarch'] },

  // Weapons - S Tier
  { page: 'weapons.html', section: 's-tier', title: 'Weapons', keywords: ['weapons', 'guns', 'arsenal', 'loadout', 'tier list'] },
  { page: 'weapons.html', section: 'ferro', title: 'Ferro', keywords: ['ferro', 'rifle', 'heavy', 'break action', 'arc killer', 'pve', 's-tier'] },
  { page: 'weapons.html', section: 'bettina', title: 'Bettina', keywords: ['bettina', 'assault rifle', 'heavy', 'full auto', 'best weapon', 's-tier'] },
  { page: 'weapons.html', section: 'anvil', title: 'Anvil', keywords: ['anvil', 'hand cannon', 'heavy', 'sidearm', 'one tap', 's-tier'] },
  { page: 'weapons.html', section: 'vulcano', title: 'Vulcano', keywords: ['vulcano', 'shotgun', 'semi auto', 'pvp', 'close range', 's-tier'] },
  { page: 'weapons.html', section: 'venator', title: 'Venator', keywords: ['venator', 'pistol', 'double shot', 'medium', 'nerfed', 's-tier'] },
  { page: 'weapons.html', section: 'hullcracker', title: 'Hullcracker', keywords: ['hullcracker', 'grenade launcher', 'explosive', 'boss killer', 'queen', 's-tier'] },

  // Weapons - A Tier
  { page: 'weapons.html', section: 'a-tier', title: 'A-Tier Weapons', keywords: ['osprey', 'renegade', 'tempest', 'il toro', 'jupiter', 'bobcat', 'a-tier'] },

  // Weapons - Other
  { page: 'weapons.html', section: 'b-tier', title: 'B-Tier Weapons', keywords: ['rattler', 'stitcher', 'burletta', 'budget', 'starter', 'b-tier'] },
  { page: 'weapons.html', section: 'loadouts', title: 'Recommended Loadouts', keywords: ['loadout', 'build', 'budget beast', 'all rounder', 'pvp hunter', 'boss killer'] },

  // Enemies - Low Threat
  { page: 'enemies.html', section: '', title: 'Enemies', keywords: ['enemies', 'arc', 'threats', 'scanner', 'weak points'] },
  { page: 'enemies.html', section: 'tick', title: 'Tick', keywords: ['tick', 'ambusher', 'walls', 'melee', 'fly swatter', 'low threat'] },
  { page: 'enemies.html', section: 'pop', title: 'Pop', keywords: ['pop', 'rolling bomb', 'explode', 'low threat'] },
  { page: 'enemies.html', section: 'snitch', title: 'Snitch', keywords: ['snitch', 'scout', 'drone', 'alarm', 'reinforcements', 'low threat'] },
  { page: 'enemies.html', section: 'wasp', title: 'Wasp', keywords: ['wasp', 'flying', 'drone', 'propellers', 'low threat'] },
  { page: 'enemies.html', section: 'fireball', title: 'Fireball', keywords: ['fireball', 'flamethrower', 'burner', 'low threat'] },

  // Enemies - Medium Threat
  { page: 'enemies.html', section: 'hornet', title: 'Hornet', keywords: ['hornet', 'drone', 'stun', 'rear thrusters', 'medium threat'] },
  { page: 'enemies.html', section: 'turret', title: 'Turret', keywords: ['turret', 'stationary', 'wall mounted', 'melee', 'medium threat'] },
  { page: 'enemies.html', section: 'bison', title: 'Bison', keywords: ['bison', 'quadruped', 'jump', 'wave blast', 'medium threat'] },
  { page: 'enemies.html', section: 'leaper', title: 'Leaper', keywords: ['leaper', 'ambush', 'pounce', 'mines', 'medium threat'] },

  // Enemies - High Threat
  { page: 'enemies.html', section: 'rocketeer', title: 'Rocketeer', keywords: ['rocketeer', 'aerial', 'rockets', 'missiles', 'player killer', 'high threat'] },
  { page: 'enemies.html', section: 'bastion', title: 'Bastion', keywords: ['bastion', 'walker', 'minigun', 'kneecaps', 'flank', 'high threat'] },
  { page: 'enemies.html', section: 'bombardier', title: 'Bombardier', keywords: ['bombardier', 'artillery', 'mortar', 'spotter', 'high threat'] },
  { page: 'enemies.html', section: 'shredder', title: 'Shredder', keywords: ['shredder', 'close combat', 'shotgun', 'stella montis', 'high threat'] },

  // Enemies - Boss
  { page: 'enemies.html', section: 'queen', title: 'The Queen', keywords: ['queen', 'harvester', 'boss', 'mortar', 'laser', 'gigantic'] },
  { page: 'enemies.html', section: 'matriarch', title: 'Matriarch', keywords: ['matriarch', 'boss', 'flashbang', 'gas', 'summons', 'blue shield'] },

  // Skills
  { page: 'skills.html', section: '', title: 'Skills', keywords: ['skills', 'tree', 'build', 'points', 'progression'] },
  { page: 'skills.html', section: 'mobility', title: 'Mobility Tree', keywords: ['mobility', 'speed', 'stamina', 'sprint', 'dodge', 'marathon runner'] },
  { page: 'skills.html', section: 'conditioning', title: 'Conditioning Tree', keywords: ['conditioning', 'toughness', 'weight', 'shield', 'recovery'] },
  { page: 'skills.html', section: 'survival', title: 'Survival Tree', keywords: ['survival', 'looting', 'stealth', 'crafting', 'in-round crafting'] },
  { page: 'skills.html', section: 'builds', title: 'Recommended Builds', keywords: ['build', 'solo survivor', 'team support', 'pvp hunter', 'speed looter'] },

  // Crafting
  { page: 'crafting.html', section: '', title: 'Crafting', keywords: ['crafting', 'workshop', 'stations', 'blueprints', 'materials'] },
  { page: 'crafting.html', section: 'gunsmith', title: 'Gunsmith', keywords: ['gunsmith', 'weapons', 'mods', 'ammo'] },
  { page: 'crafting.html', section: 'gear-bench', title: 'Gear Bench', keywords: ['gear bench', 'shields', 'augments', 'armor'] },
  { page: 'crafting.html', section: 'medical-lab', title: 'Medical Lab', keywords: ['medical', 'bandages', 'medkits', 'healing'] },
  { page: 'crafting.html', section: 'explosives', title: 'Explosives Station', keywords: ['explosives', 'grenades', 'mines', 'c4'] },
  { page: 'crafting.html', section: 'scrappy', title: 'Scrappy', keywords: ['scrappy', 'rooster', 'pet', 'passive', 'offline'] },
  { page: 'crafting.html', section: 'blueprints', title: 'Blueprints', keywords: ['blueprints', 'recipes', 'permanent', 'unlock'] },
  { page: 'crafting.html', section: 'materials', title: 'Material Farming', keywords: ['materials', 'metal parts', 'fabric', 'chemicals', 'farming'] },

  // Traders
  { page: 'traders.html', section: '', title: 'Traders', keywords: ['traders', 'quests', 'npc', 'vendors'] },
  { page: 'traders.html', section: 'celeste', title: 'Celeste', keywords: ['celeste', 'leader', 'speranza', 'story', 'quests'] },
  { page: 'traders.html', section: 'tian-wen', title: 'Tian Wen', keywords: ['tian wen', 'gunsmith', 'weapons', 'blueprints'] },
  { page: 'traders.html', section: 'apollo', title: 'Apollo', keywords: ['apollo', 'mechanic', 'explosives', 'grenades'] },
  { page: 'traders.html', section: 'lance', title: 'Lance', keywords: ['lance', 'android', 'medic', 'medical', 'augments', 'trade'] },
  { page: 'traders.html', section: 'shani', title: 'Shani', keywords: ['shani', 'security', 'hatch keys', 'utility', 'intel'] },

  // Extraction
  { page: 'extraction.html', section: '', title: 'Extraction', keywords: ['extraction', 'extract', 'escape', 'survive'] },
  { page: 'extraction.html', section: 'elevator', title: 'Elevator Extraction', keywords: ['elevator', 'metro', 'alarm', 'loud', '90 seconds'] },
  { page: 'extraction.html', section: 'hatch', title: 'Raider Hatch', keywords: ['hatch', 'silent', 'key', 'instant'] },
  { page: 'extraction.html', section: 'safe-pocket', title: 'Safe Pocket', keywords: ['safe pocket', 'insurance', 'keep', 'die', 'blueprints'] },
  { page: 'extraction.html', section: 'tactics', title: 'Extraction Tactics', keywords: ['tactics', 'decoy', 'camping', 'ambush'] },

  // Tips
  { page: 'tips.html', section: '', title: 'Tips', keywords: ['tips', 'tricks', 'advice', 'guide'] },
  { page: 'tips.html', section: 'beginner', title: 'Beginner Tips', keywords: ['beginner', 'new player', 'free loadout', 'recycle'] },
  { page: 'tips.html', section: 'combat', title: 'Combat Tips', keywords: ['combat', 'fighting', 'melee', 'headshots'] },
  { page: 'tips.html', section: 'looting', title: 'Looting Tips', keywords: ['looting', 'watchlist', 'in-round crafting'] },

  // Lore
  { page: 'lore.html', section: '', title: 'Lore', keywords: ['lore', 'story', 'background', 'history'] },
  { page: 'lore.html', section: 'arc-mystery', title: 'The ARC Mystery', keywords: ['arc', 'origin', 'mystery', 'machines'] },
  { page: 'lore.html', section: 'speranza-lore', title: 'Speranza', keywords: ['speranza', 'underground', 'city', 'toledo'] },
  { page: 'lore.html', section: 'traders-lore', title: 'Trader Backstories', keywords: ['celeste', 'tian wen', 'apollo', 'lance', 'shani', 'backstory'] },
];

// ============================================================
// SEARCH FUNCTIONALITY
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (!searchInput || !searchResults) return;

  let selectedIndex = -1;
  let currentResults = [];

  // Search on input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.classList.remove('active');
      currentResults = [];
      return;
    }

    // Search the index
    currentResults = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const keywordMatch = item.keywords.some(kw => kw.includes(query));
      return titleMatch || keywordMatch;
    }).slice(0, 10); // Limit to 10 results

    if (currentResults.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item"><span class="text-dim">No results found</span></div>';
      searchResults.classList.add('active');
      return;
    }

    // Render results
    searchResults.innerHTML = currentResults.map((item, index) => {
      const section = item.section ? ` (${formatSection(item.section)})` : '';
      const page = formatPage(item.page);
      return `
        <div class="search-result-item" data-index="${index}" role="option">
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-meta">${page}${section}</div>
        </div>
      `;
    }).join('');

    searchResults.classList.add('active');
    selectedIndex = -1;
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', (e) => {
    if (!searchResults.classList.contains('active')) return;

    const items = searchResults.querySelectorAll('.search-result-item[data-index]');

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        updateSelection(items);
        break;

      case 'ArrowUp':
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelection(items);
        break;

      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && currentResults[selectedIndex]) {
          navigateToResult(currentResults[selectedIndex]);
        }
        break;

      case 'Escape':
        searchResults.classList.remove('active');
        searchInput.blur();
        break;
    }
  });

  // Click on result
  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item[data-index]');
    if (item) {
      const index = parseInt(item.dataset.index, 10);
      if (currentResults[index]) {
        navigateToResult(currentResults[index]);
      }
    }
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar-search')) {
      searchResults.classList.remove('active');
    }
  });

  // Focus search on / key
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Helper functions
  function updateSelection(items) {
    items.forEach((item, i) => {
      item.classList.toggle('selected', i === selectedIndex);
    });

    if (selectedIndex >= 0) {
      items[selectedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  function navigateToResult(result) {
    let url = result.page;
    if (result.section) {
      url += '#' + result.section;
    }
    window.location.href = url;
  }

  function formatPage(page) {
    return page.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  function formatSection(section) {
    return section.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
});
