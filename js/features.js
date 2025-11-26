/**
 * ARC Raiders Wiki - Features
 * Handles: favorites, recently visited, loadout builder
 */

// ============================================================
// FAVORITES SYSTEM
// ============================================================
const FAVORITES_KEY = 'arcwiki_favorites';

const favorites = {
  get() {
    try {
      return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    } catch {
      return [];
    }
  },

  add(id, title, page) {
    const favs = this.get();
    if (!favs.find(f => f.id === id)) {
      favs.push({ id, title, page });
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
      this.render();
      return true;
    }
    return false;
  },

  remove(id) {
    const favs = this.get().filter(f => f.id !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    this.render();
  },

  toggle(id, title, page) {
    if (this.has(id)) {
      this.remove(id);
      return false;
    } else {
      this.add(id, title, page);
      return true;
    }
  },

  has(id) {
    return this.get().some(f => f.id === id);
  },

  render() {
    const list = document.querySelector('.favorites-list');
    const count = document.querySelector('.favorites-count');
    if (!list) return;

    const favs = this.get();
    count.textContent = favs.length;

    if (favs.length === 0) {
      list.innerHTML = '<li class="favorites-empty">No favorites yet</li>';
      return;
    }

    list.innerHTML = favs.map(f => `
      <li>
        <a href="${f.page}#${f.id}" class="nav-link" style="padding: 0.3rem 0;">
          <span class="nav-link-icon text-amber">★</span>
          ${f.title}
        </a>
      </li>
    `).join('');
  }
};

// ============================================================
// RECENTLY VISITED
// ============================================================
const RECENT_KEY = 'arcwiki_recent';
const MAX_RECENT = 5;

const recentPages = {
  get() {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    } catch {
      return [];
    }
  },

  add(page, title) {
    let recent = this.get().filter(r => r.page !== page);
    recent.unshift({ page, title });
    recent = recent.slice(0, MAX_RECENT);
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    this.render();
  },

  render() {
    const list = document.getElementById('recent-pages-list');
    if (!list) return;

    const recent = this.get();

    if (recent.length === 0) {
      list.innerHTML = '<li><span class="text-dim">—</span></li>';
      return;
    }

    list.innerHTML = recent.map(r => `
      <li>
        <a href="${r.page}" class="recent-link">${r.title}</a>
      </li>
    `).join('');
  }
};

// ============================================================
// LOADOUT BUILDER
// ============================================================
const weaponData = {
  // Primary weapons
  ferro: { name: 'Ferro', ammo: 'Heavy', damage: 40, weight: 3.2 },
  bettina: { name: 'Bettina', ammo: 'Heavy', damage: 28, weight: 4.1 },
  osprey: { name: 'Osprey', ammo: 'Medium', damage: 24, weight: 3.5 },
  tempest: { name: 'Tempest', ammo: 'Light', damage: 18, weight: 2.8 },
  vulcano: { name: 'Vulcano', ammo: 'Shotgun', damage: 55, weight: 4.5 },
  rattler: { name: 'Rattler', ammo: 'Light', damage: 15, weight: 2.2 },
  hullcracker: { name: 'Hullcracker', ammo: 'Launcher', damage: 100, weight: 6.0 },

  // Secondary weapons
  anvil: { name: 'Anvil', ammo: 'Heavy', damage: 45, weight: 1.8 },
  venator: { name: 'Venator', ammo: 'Medium', damage: 36, weight: 1.5 },
  stitcher: { name: 'Stitcher', ammo: 'Light', damage: 12, weight: 1.2 },
  burletta: { name: 'Burletta', ammo: 'Light', damage: 14, weight: 1.0 },
  hairpin: { name: 'Hairpin', ammo: 'Light', damage: 16, weight: 1.3 },
};

const shieldData = {
  light: { name: 'Light Shield', hp: 50, weight: 1.5 },
  medium: { name: 'Medium Shield', hp: 100, weight: 3.0 },
  heavy: { name: 'Heavy Shield', hp: 150, weight: 5.0 },
};

const augmentData = {
  combat1: { name: 'Combat Mk.1', bonus: '+5% Shield Efficiency' },
  combat2: { name: 'Combat Mk.2', bonus: '+10% Shield Efficiency' },
  combat3: { name: 'Combat Mk.3', bonus: '+15% Shield Efficiency' },
  looting1: { name: 'Looting Mk.1', bonus: '+2 Bag Slots' },
  looting2: { name: 'Looting Mk.2', bonus: '+4 Bag Slots' },
  looting3: { name: 'Looting Mk.3', bonus: '+6 Bag Slots' },
  tactical1: { name: 'Tactical Mk.1', bonus: '+1 Gadget Slot' },
  tactical2: { name: 'Tactical Mk.2', bonus: '+2 Gadget Slots' },
  tactical3: { name: 'Tactical Mk.3', bonus: '+3 Gadget Slots' },
};

const loadoutBuilder = {
  init() {
    const btn = document.getElementById('loadout-builder-btn');
    const modal = document.getElementById('loadout-modal');
    const clearBtn = document.getElementById('loadout-clear');
    const copyBtn = document.getElementById('loadout-copy');
    const selects = ['loadout-primary', 'loadout-secondary', 'loadout-shield', 'loadout-augment'];

    if (!btn || !modal) return;

    // Open modal
    btn.addEventListener('click', () => {
      openModal('loadout-modal');
    });

    // Update stats on change
    selects.forEach(id => {
      const select = document.getElementById(id);
      if (select) {
        select.addEventListener('change', () => this.updateStats());
      }
    });

    // Clear loadout
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        selects.forEach(id => {
          const select = document.getElementById(id);
          if (select) select.value = '';
        });
        this.updateStats();
      });
    }

    // Copy loadout
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyLoadout());
    }
  },

  updateStats() {
    const primary = document.getElementById('loadout-primary')?.value;
    const secondary = document.getElementById('loadout-secondary')?.value;
    const shield = document.getElementById('loadout-shield')?.value;
    const augment = document.getElementById('loadout-augment')?.value;

    const statsDiv = document.getElementById('loadout-stats');
    const summaryP = document.getElementById('loadout-summary');

    if (!statsDiv || !summaryP) return;

    // Check if anything is selected
    if (!primary && !secondary && !shield && !augment) {
      statsDiv.style.display = 'none';
      return;
    }

    // Calculate totals
    let totalWeight = 0;
    const ammoTypes = new Set();

    if (primary && weaponData[primary]) {
      totalWeight += weaponData[primary].weight;
      ammoTypes.add(weaponData[primary].ammo);
    }

    if (secondary && weaponData[secondary]) {
      totalWeight += weaponData[secondary].weight;
      ammoTypes.add(weaponData[secondary].ammo);
    }

    if (shield && shieldData[shield]) {
      totalWeight += shieldData[shield].weight;
    }

    // Build summary
    const parts = [];
    parts.push(`Weight: ${totalWeight.toFixed(1)} kg`);

    if (ammoTypes.size > 0) {
      parts.push(`Ammo: ${Array.from(ammoTypes).join(', ')}`);
    }

    if (shield && shieldData[shield]) {
      parts.push(`Shield HP: ${shieldData[shield].hp}`);
    }

    if (augment && augmentData[augment]) {
      parts.push(augmentData[augment].bonus);
    }

    summaryP.textContent = parts.join(' | ');
    statsDiv.style.display = 'block';
  },

  copyLoadout() {
    const primary = document.getElementById('loadout-primary')?.value;
    const secondary = document.getElementById('loadout-secondary')?.value;
    const shield = document.getElementById('loadout-shield')?.value;
    const augment = document.getElementById('loadout-augment')?.value;

    const parts = ['ARC Raiders Loadout:'];

    if (primary && weaponData[primary]) {
      parts.push(`Primary: ${weaponData[primary].name}`);
    }

    if (secondary && weaponData[secondary]) {
      parts.push(`Secondary: ${weaponData[secondary].name}`);
    }

    if (shield && shieldData[shield]) {
      parts.push(`Shield: ${shieldData[shield].name}`);
    }

    if (augment && augmentData[augment]) {
      parts.push(`Augment: ${augmentData[augment].name}`);
    }

    if (parts.length === 1) {
      showToast('Select items first');
      return;
    }

    copyToClipboard(parts.join('\n')).then(success => {
      showToast(success ? 'Loadout copied!' : 'Failed to copy');
    });
  }
};

// ============================================================
// FAVORITE STARS ON PAGE
// ============================================================
function initFavoriteStars() {
  const stars = document.querySelectorAll('.favorite-star');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  stars.forEach(star => {
    const id = star.dataset.favoriteId;
    const title = star.dataset.favoriteTitle;

    if (!id || !title) return;

    // Set initial state
    if (favorites.has(id)) {
      star.classList.add('active');
      star.textContent = '★';
    } else {
      star.classList.remove('active');
      star.textContent = '☆';
    }

    // Toggle on click
    star.addEventListener('click', () => {
      const isNowFavorite = favorites.toggle(id, title, currentPage);
      star.classList.toggle('active', isNowFavorite);
      star.textContent = isNowFavorite ? '★' : '☆';
      showToast(isNowFavorite ? 'Added to favorites' : 'Removed from favorites');
    });
  });
}

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  // Track page visit
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const pageTitle = document.title.split(' - ')[0] || 'Home';
  recentPages.add(currentPage, pageTitle.replace('ARC Raiders Wiki', 'Home').trim());

  // Render favorites
  favorites.render();

  // Render recent pages
  recentPages.render();

  // Initialize favorite stars
  initFavoriteStars();

  // Initialize loadout builder
  loadoutBuilder.init();
});

// ============================================================
// SKILL TREE (will be expanded on skills.html)
// ============================================================
const skillTreeData = {
  mobility: {
    name: 'Mobility',
    description: 'Speed, stamina efficiency, traversal',
    skills: [
      { id: 'nimble-climber', name: 'Nimble Climber', tier: 1, cost: 1, prereq: null, essential: false, desc: 'Faster climb/vault' },
      { id: 'marathon-runner', name: 'Marathon Runner', tier: 2, cost: 2, prereq: 'nimble-climber', essential: true, desc: 'Movement costs less stamina' },
      { id: 'youthful-lungs', name: 'Youthful Lungs', tier: 2, cost: 2, prereq: 'nimble-climber', essential: true, desc: 'Max stamina increase' },
      { id: 'proper-breathing', name: 'Proper Breathing', tier: 2, cost: 2, prereq: 'nimble-climber', essential: false, desc: 'Faster stamina regen' },
      { id: 'effortless-roll', name: 'Effortless Roll', tier: 3, cost: 3, prereq: 'marathon-runner', essential: true, desc: 'Cheaper dodge rolls' },
      { id: 'calming-stroll', name: 'Calming Stroll', tier: 3, cost: 3, prereq: 'youthful-lungs', essential: false, desc: 'Stamina regen while walking' },
      { id: 'carry-momentum', name: 'Carry the Momentum', tier: 3, cost: 3, prereq: 'proper-breathing', essential: false, desc: 'Speed boost after dodging' },
      { id: 'vault-on-vaults', name: 'Vault on Vaults', tier: 4, cost: 4, prereq: 'effortless-roll', essential: false, desc: 'Zero stamina vaulting' },
      { id: 'light-feet', name: 'Light Feet', tier: 4, cost: 4, prereq: 'calming-stroll', essential: false, desc: 'Faster sprint speed' },
      { id: 'nimble-recovery', name: 'Nimble Recovery', tier: 4, cost: 4, prereq: 'carry-momentum', essential: false, desc: 'Faster stamina recovery' },
    ]
  },
  conditioning: {
    name: 'Conditioning',
    description: 'Toughness, recovery, weight management',
    skills: [
      { id: 'used-to-weight', name: 'Used to the Weight', tier: 1, cost: 1, prereq: null, essential: true, desc: 'Less shield speed penalty' },
      { id: 'gentle-pressure', name: 'Gentle Pressure', tier: 2, cost: 2, prereq: 'used-to-weight', essential: false, desc: 'Quieter breaching' },
      { id: 'proficient-pryer', name: 'Proficient Pryer', tier: 2, cost: 2, prereq: 'used-to-weight', essential: false, desc: 'Faster breaching' },
      { id: 'heavier-hitter', name: 'Heavier Hitter', tier: 2, cost: 2, prereq: 'used-to-weight', essential: false, desc: 'Melee damage increase' },
      { id: 'survivors-stamina', name: "Survivor's Stamina", tier: 3, cost: 3, prereq: 'gentle-pressure', essential: true, desc: 'Faster regen when hurt' },
      { id: 'fight-or-flight', name: 'Fight or Flight', tier: 3, cost: 3, prereq: 'proficient-pryer', essential: false, desc: 'Auto stamina regen at low HP' },
      { id: 'unburdened-roll', name: 'Unburdened Roll', tier: 3, cost: 3, prereq: 'heavier-hitter', essential: false, desc: 'Free dodge when shield breaks' },
      { id: 'downed-determined', name: 'Downed but Determined', tier: 4, cost: 4, prereq: 'survivors-stamina', essential: false, desc: 'Longer bleed-out' },
      { id: 'fly-swatter', name: 'Fly Swatter', tier: 4, cost: 4, prereq: 'fight-or-flight', essential: false, desc: 'One-hit melee on Ticks/Wasps' },
    ]
  },
  survival: {
    name: 'Survival',
    description: 'Scavenging, stealth, field crafting',
    skills: [
      { id: 'agile-croucher', name: 'Agile Croucher', tier: 1, cost: 1, prereq: null, essential: false, desc: 'Faster crouch movement' },
      { id: 'looters-instincts', name: "Looter's Instincts", tier: 2, cost: 2, prereq: 'agile-croucher', essential: true, desc: 'Faster item identification' },
      { id: 'silent-scavenger', name: 'Silent Scavenger', tier: 2, cost: 2, prereq: 'agile-croucher', essential: true, desc: 'Quieter looting' },
      { id: 'broad-shoulders', name: 'Broad Shoulders', tier: 2, cost: 2, prereq: 'agile-croucher', essential: false, desc: 'Increased carry capacity' },
      { id: 'just-another-plant', name: 'Just Another Plant', tier: 3, cost: 3, prereq: 'looters-instincts', essential: false, desc: 'Harder for ARC to spot' },
      { id: 'revitalizing-squat', name: 'Revitalizing Squat', tier: 3, cost: 3, prereq: 'silent-scavenger', essential: false, desc: 'Stamina regen while crouching' },
      { id: 'good-as-new', name: 'Good as New', tier: 3, cost: 3, prereq: 'broad-shoulders', essential: false, desc: 'Repair gear in-field' },
      { id: 'in-round-crafting', name: 'In-Round Crafting', tier: 4, cost: 5, prereq: 'just-another-plant', essential: true, desc: 'Craft during raids' },
      { id: 'security-breach', name: 'Security Breach', tier: 4, cost: 4, prereq: 'revitalizing-squat', essential: true, desc: 'Access Security Lockers' },
      { id: 'traveling-tinkerer', name: 'Traveling Tinkerer', tier: 4, cost: 4, prereq: 'good-as-new', essential: false, desc: 'Expanded field crafting' },
    ]
  }
};

// Preset builds
const presetBuilds = {
  'solo-survivor': {
    name: 'Solo Survivor',
    skills: ['nimble-climber', 'marathon-runner', 'youthful-lungs', 'effortless-roll', 'used-to-weight', 'gentle-pressure', 'survivors-stamina', 'agile-croucher', 'silent-scavenger', 'just-another-plant', 'in-round-crafting']
  },
  'team-support': {
    name: 'Team Support',
    skills: ['nimble-climber', 'marathon-runner', 'youthful-lungs', 'used-to-weight', 'proficient-pryer', 'downed-determined', 'agile-croucher', 'broad-shoulders', 'good-as-new', 'traveling-tinkerer']
  },
  'pvp-hunter': {
    name: 'PvP Hunter',
    skills: ['nimble-climber', 'marathon-runner', 'youthful-lungs', 'effortless-roll', 'vault-on-vaults', 'used-to-weight', 'heavier-hitter', 'fight-or-flight', 'unburdened-roll']
  },
  'speed-looter': {
    name: 'Speed Looter',
    skills: ['nimble-climber', 'marathon-runner', 'youthful-lungs', 'effortless-roll', 'calming-stroll', 'light-feet', 'agile-croucher', 'looters-instincts', 'silent-scavenger', 'broad-shoulders']
  }
};

// Export for use on skills.html
window.skillTreeData = skillTreeData;
window.presetBuilds = presetBuilds;
