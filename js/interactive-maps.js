/**
 * ARC Raiders Wiki - Interactive Maps
 * Canvas-based map visualization with POI layers and zoom/pan controls
 */

(function() {
  'use strict';

  // ============================================================
  // MAP DATA - POIs and extraction points for each map
  // ============================================================
  const mapData = {
    'dam-battlegrounds': {
      name: 'Dam Battlegrounds',
      difficulty: 1,
      theme: 'forest',
      baseColor: '#1a2f1a',
      accentColor: '#3d5c3d',
      waterColor: '#1a3a4a',
      pois: [
        { id: 'substation1', name: 'Electrical Substation A', type: 'loot', tier: 'green', x: 0.15, y: 0.25, icon: '⚡' },
        { id: 'substation2', name: 'Electrical Substation B', type: 'loot', tier: 'green', x: 0.75, y: 0.65, icon: '⚡' },
        { id: 'hydro', name: 'Hydroponic Dome', type: 'loot', tier: 'yellow', x: 0.45, y: 0.35, icon: '🌿' },
        { id: 'power', name: 'Power Generation', type: 'loot', tier: 'yellow', x: 0.55, y: 0.55, icon: '⚙' },
        { id: 'water', name: 'Water Treatment', type: 'loot', tier: 'green', x: 0.25, y: 0.7, icon: '💧' },
        { id: 'testing', name: 'Testing Annex', type: 'loot', tier: 'yellow', x: 0.8, y: 0.3, icon: '🔬' },
        { id: 'extract1', name: 'North Elevator', type: 'extraction', x: 0.2, y: 0.1, icon: '↑' },
        { id: 'extract2', name: 'East Elevator', type: 'extraction', x: 0.9, y: 0.5, icon: '↑' },
        { id: 'extract3', name: 'South Elevator', type: 'extraction', x: 0.5, y: 0.9, icon: '↑' }
      ],
      zones: [
        { x: 0.1, y: 0.2, w: 0.2, h: 0.2, tier: 'green' },
        { x: 0.4, y: 0.3, w: 0.25, h: 0.35, tier: 'yellow' },
        { x: 0.7, y: 0.2, w: 0.2, h: 0.25, tier: 'yellow' },
        { x: 0.2, y: 0.6, w: 0.2, h: 0.25, tier: 'green' },
        { x: 0.65, y: 0.55, w: 0.25, h: 0.25, tier: 'green' }
      ]
    },
    'buried-city': {
      name: 'Buried City',
      difficulty: 3,
      theme: 'desert',
      baseColor: '#3d3020',
      accentColor: '#5a4a30',
      waterColor: '#2a2520',
      pois: [
        { id: 'hospital', name: 'Hospital', type: 'loot', tier: 'red', x: 0.5, y: 0.3, icon: '🏥' },
        { id: 'townhall', name: 'Town Hall', type: 'loot', tier: 'yellow', x: 0.35, y: 0.5, icon: '🏛' },
        { id: 'plaza', name: 'Plaza Rosa', type: 'loot', tier: 'yellow', x: 0.65, y: 0.55, icon: '🌹' },
        { id: 'houses', name: 'Santa Maria Houses', type: 'loot', tier: 'green', x: 0.2, y: 0.35, icon: '🏠' },
        { id: 'galleria', name: 'Galleria', type: 'loot', tier: 'yellow', x: 0.75, y: 0.4, icon: '🛍' },
        { id: 'metro1', name: 'Metro Station A', type: 'extraction', x: 0.15, y: 0.8, icon: '🚇' },
        { id: 'metro2', name: 'Metro Station B', type: 'extraction', x: 0.85, y: 0.75, icon: '🚇' },
        { id: 'metro3', name: 'Metro Station C', type: 'extraction', x: 0.5, y: 0.1, icon: '🚇' }
      ],
      zones: [
        { x: 0.15, y: 0.3, w: 0.15, h: 0.2, tier: 'green' },
        { x: 0.3, y: 0.45, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.45, y: 0.25, w: 0.15, h: 0.15, tier: 'red' },
        { x: 0.6, y: 0.5, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.7, y: 0.35, w: 0.15, h: 0.15, tier: 'yellow' }
      ]
    },
    'spaceport': {
      name: 'Spaceport',
      difficulty: 3,
      theme: 'industrial',
      baseColor: '#252530',
      accentColor: '#3a3a45',
      waterColor: '#1a1a25',
      pois: [
        { id: 'containers', name: 'Container Storage', type: 'loot', tier: 'red', x: 0.5, y: 0.5, icon: '⚠' },
        { id: 'launch1', name: 'Launch Tower A', type: 'loot', tier: 'yellow', x: 0.3, y: 0.3, icon: '🚀' },
        { id: 'launch2', name: 'Launch Tower B', type: 'loot', tier: 'yellow', x: 0.7, y: 0.3, icon: '🚀' },
        { id: 'departure', name: 'Departure Building', type: 'loot', tier: 'yellow', x: 0.25, y: 0.6, icon: '🛫' },
        { id: 'arrival', name: 'Arrival Building', type: 'loot', tier: 'yellow', x: 0.75, y: 0.6, icon: '🛬' },
        { id: 'control', name: 'Control Tower A6', type: 'loot', tier: 'yellow', x: 0.5, y: 0.2, icon: '📡' },
        { id: 'fuel', name: 'Fuel Lines', type: 'loot', tier: 'green', x: 0.15, y: 0.45, icon: '⛽' },
        { id: 'extract1', name: 'North Elevator', type: 'extraction', x: 0.5, y: 0.05, icon: '↑' },
        { id: 'extract2', name: 'East Elevator', type: 'extraction', x: 0.95, y: 0.5, icon: '↑' },
        { id: 'extract3', name: 'South Elevator', type: 'extraction', x: 0.5, y: 0.95, icon: '↑' },
        { id: 'extract4', name: 'West Elevator', type: 'extraction', x: 0.05, y: 0.5, icon: '↑' }
      ],
      zones: [
        { x: 0.45, y: 0.45, w: 0.15, h: 0.15, tier: 'red' },
        { x: 0.25, y: 0.25, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.65, y: 0.25, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.2, y: 0.55, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.7, y: 0.55, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.1, y: 0.4, w: 0.12, h: 0.12, tier: 'green' }
      ]
    },
    'blue-gate': {
      name: 'The Blue Gate',
      difficulty: 4,
      theme: 'mountain',
      baseColor: '#2a3540',
      accentColor: '#3d4a55',
      waterColor: '#1a2530',
      pois: [
        { id: 'peak', name: "Pilgrim's Peak", type: 'loot', tier: 'yellow', x: 0.5, y: 0.15, icon: '⛰' },
        { id: 'checkpoint', name: 'Checkpoint', type: 'loot', tier: 'red', x: 0.45, y: 0.45, icon: '🚧' },
        { id: 'glade', name: "Trapper's Glade", type: 'loot', tier: 'green', x: 0.25, y: 0.35, icon: '🌲' },
        { id: 'tunnel1', name: 'Tunnel Entrance A', type: 'loot', tier: 'yellow', x: 0.7, y: 0.4, icon: '🕳' },
        { id: 'tunnel2', name: 'Tunnel Exit B', type: 'loot', tier: 'yellow', x: 0.3, y: 0.7, icon: '🕳' },
        { id: 'extract1', name: 'Mountain Elevator', type: 'extraction', x: 0.15, y: 0.1, icon: '↑' },
        { id: 'extract2', name: 'Valley Elevator', type: 'extraction', x: 0.85, y: 0.85, icon: '↑' },
        { id: 'hatch1', name: 'Raider Hatch A', type: 'hatch', x: 0.6, y: 0.6, icon: '🚪' },
        { id: 'hatch2', name: 'Raider Hatch B', type: 'hatch', x: 0.35, y: 0.55, icon: '🚪' }
      ],
      zones: [
        { x: 0.4, y: 0.4, w: 0.15, h: 0.15, tier: 'red' },
        { x: 0.45, y: 0.1, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.65, y: 0.35, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.25, y: 0.65, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.2, y: 0.3, w: 0.15, h: 0.15, tier: 'green' }
      ]
    },
    'stella-montis': {
      name: 'Stella Montis',
      difficulty: 5,
      theme: 'underground',
      baseColor: '#1a1a25',
      accentColor: '#2a2a35',
      waterColor: '#15151f',
      pois: [
        { id: 'medical', name: 'Medical Research', type: 'loot', tier: 'red', x: 0.5, y: 0.35, icon: '⚠' },
        { id: 'seedvault', name: 'Seed Vault', type: 'loot', tier: 'yellow', x: 0.3, y: 0.45, icon: '🌱' },
        { id: 'assembly', name: 'Assembly Workshops', type: 'loot', tier: 'yellow', x: 0.7, y: 0.45, icon: '⚙' },
        { id: 'lobby', name: 'Lobby', type: 'loot', tier: 'yellow', x: 0.5, y: 0.6, icon: '🏢' },
        { id: 'sandbox1', name: 'Sandbox A', type: 'loot', tier: 'yellow', x: 0.25, y: 0.65, icon: '📦' },
        { id: 'sandbox2', name: 'Sandbox B', type: 'loot', tier: 'yellow', x: 0.75, y: 0.65, icon: '📦' },
        { id: 'loading', name: 'Loading Bay', type: 'loot', tier: 'red', x: 0.5, y: 0.8, icon: '🚚' },
        { id: 'airshaft', name: 'Airshaft', type: 'extraction', x: 0.5, y: 0.1, icon: '💨' },
        { id: 'metro1', name: 'Metro Station A', type: 'extraction', x: 0.1, y: 0.9, icon: '🚇' },
        { id: 'metro2', name: 'Metro Station B', type: 'extraction', x: 0.9, y: 0.9, icon: '🚇' }
      ],
      zones: [
        { x: 0.45, y: 0.3, w: 0.15, h: 0.15, tier: 'red' },
        { x: 0.45, y: 0.75, w: 0.15, h: 0.12, tier: 'red' },
        { x: 0.25, y: 0.4, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.65, y: 0.4, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.45, y: 0.55, w: 0.15, h: 0.12, tier: 'yellow' },
        { x: 0.2, y: 0.6, w: 0.15, h: 0.15, tier: 'yellow' },
        { x: 0.7, y: 0.6, w: 0.15, h: 0.15, tier: 'yellow' }
      ]
    }
  };

  // ============================================================
  // INTERACTIVE MAP CLASS
  // ============================================================
  class InteractiveMap {
    constructor(containerId, mapId) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.mapId = mapId;
      this.data = mapData[mapId];
      if (!this.data) return;

      this.canvas = null;
      this.ctx = null;
      this.width = 0;
      this.height = 0;

      // View state
      this.zoom = 1;
      this.offsetX = 0;
      this.offsetY = 0;
      this.isDragging = false;
      this.lastMouseX = 0;
      this.lastMouseY = 0;

      // Layer visibility
      this.layers = {
        zones: true,
        loot: true,
        extraction: true,
        hatch: true
      };

      // Hover state
      this.hoveredPoi = null;

      this.init();
    }

    init() {
      this.createDOM();
      this.setupCanvas();
      this.setupEventListeners();
      this.render();
    }

    createDOM() {
      this.container.innerHTML = `
        <div class="interactive-map-wrapper">
          <div class="map-controls">
            <div class="map-zoom-controls">
              <button class="map-btn zoom-in" title="Zoom In">+</button>
              <button class="map-btn zoom-out" title="Zoom Out">−</button>
              <button class="map-btn zoom-reset" title="Reset View">⌂</button>
            </div>
            <div class="map-layer-controls">
              <label class="layer-toggle">
                <input type="checkbox" data-layer="zones" checked>
                <span class="toggle-label">Loot Zones</span>
              </label>
              <label class="layer-toggle">
                <input type="checkbox" data-layer="loot" checked>
                <span class="toggle-label">POIs</span>
              </label>
              <label class="layer-toggle">
                <input type="checkbox" data-layer="extraction" checked>
                <span class="toggle-label">Extractions</span>
              </label>
              <label class="layer-toggle">
                <input type="checkbox" data-layer="hatch" checked>
                <span class="toggle-label">Hatches</span>
              </label>
            </div>
          </div>
          <canvas class="interactive-map-canvas"></canvas>
          <div class="map-tooltip"></div>
          <div class="map-legend">
            <div class="legend-item"><span class="legend-dot green"></span> Safe Zone</div>
            <div class="legend-item"><span class="legend-dot yellow"></span> Moderate</div>
            <div class="legend-item"><span class="legend-dot red"></span> High Risk</div>
            <div class="legend-item"><span class="legend-icon">↑</span> Extraction</div>
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('.interactive-map-canvas');
      this.tooltip = this.container.querySelector('.map-tooltip');
    }

    setupCanvas() {
      const wrapper = this.container.querySelector('.interactive-map-wrapper');
      this.width = wrapper.clientWidth || 800;
      this.height = 450;

      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext('2d');
    }

    setupEventListeners() {
      // Zoom buttons
      this.container.querySelector('.zoom-in').addEventListener('click', () => this.setZoom(this.zoom + 0.2));
      this.container.querySelector('.zoom-out').addEventListener('click', () => this.setZoom(this.zoom - 0.2));
      this.container.querySelector('.zoom-reset').addEventListener('click', () => this.resetView());

      // Layer toggles
      this.container.querySelectorAll('[data-layer]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
          this.layers[e.target.dataset.layer] = e.target.checked;
          this.render();
        });
      });

      // Mouse events for pan and hover
      this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
      this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
      this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
      this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
      this.canvas.addEventListener('wheel', (e) => this.handleWheel(e));

      // Touch events for mobile
      this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
      this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
      this.canvas.addEventListener('touchend', () => this.handleMouseUp());

      // Window resize
      window.addEventListener('resize', () => {
        this.setupCanvas();
        this.render();
      });
    }

    handleMouseDown(e) {
      this.isDragging = true;
      const rect = this.canvas.getBoundingClientRect();
      this.lastMouseX = e.clientX - rect.left;
      this.lastMouseY = e.clientY - rect.top;
      this.canvas.style.cursor = 'grabbing';
    }

    handleMouseMove(e) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (this.isDragging) {
        const dx = mouseX - this.lastMouseX;
        const dy = mouseY - this.lastMouseY;
        this.offsetX += dx;
        this.offsetY += dy;
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
        this.render();
      } else {
        // Check for POI hover
        this.checkPoiHover(mouseX, mouseY);
      }
    }

    handleMouseUp() {
      this.isDragging = false;
      this.canvas.style.cursor = 'grab';
    }

    handleMouseLeave() {
      this.isDragging = false;
      this.hoveredPoi = null;
      this.tooltip.style.display = 'none';
      this.render();
    }

    handleWheel(e) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      this.setZoom(this.zoom + delta);
    }

    handleTouchStart(e) {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        this.isDragging = true;
        this.lastMouseX = touch.clientX - rect.left;
        this.lastMouseY = touch.clientY - rect.top;
      }
    }

    handleTouchMove(e) {
      if (e.touches.length === 1 && this.isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;

        const dx = mouseX - this.lastMouseX;
        const dy = mouseY - this.lastMouseY;
        this.offsetX += dx;
        this.offsetY += dy;
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
        this.render();
      }
    }

    checkPoiHover(mouseX, mouseY) {
      const padding = 40;
      const mapWidth = this.width - padding * 2;
      const mapHeight = this.height - padding * 2;

      let foundPoi = null;

      for (const poi of this.data.pois) {
        // Check if layer is visible
        if (!this.layers[poi.type]) continue;

        const px = padding + poi.x * mapWidth * this.zoom + this.offsetX;
        const py = padding + poi.y * mapHeight * this.zoom + this.offsetY;
        const radius = 18;

        const dist = Math.sqrt((mouseX - px) ** 2 + (mouseY - py) ** 2);
        if (dist < radius) {
          foundPoi = { ...poi, screenX: px, screenY: py };
          break;
        }
      }

      if (foundPoi !== this.hoveredPoi) {
        this.hoveredPoi = foundPoi;
        this.updateTooltip(foundPoi, mouseX, mouseY);
        this.render();
      }
    }

    updateTooltip(poi, mouseX, mouseY) {
      if (!poi) {
        this.tooltip.style.display = 'none';
        return;
      }

      const tierLabels = {
        'green': 'Safe Zone',
        'yellow': 'Moderate Risk',
        'red': 'High Risk / PvP Hotspot'
      };

      const typeLabels = {
        'loot': 'Loot Location',
        'extraction': 'Extraction Point',
        'hatch': 'Raider Hatch'
      };

      this.tooltip.innerHTML = `
        <div class="tooltip-name">${poi.icon} ${poi.name}</div>
        <div class="tooltip-type">${typeLabels[poi.type] || poi.type}</div>
        ${poi.tier ? `<div class="tooltip-tier tier-${poi.tier}">${tierLabels[poi.tier]}</div>` : ''}
      `;

      const rect = this.canvas.getBoundingClientRect();
      this.tooltip.style.left = (mouseX + 15) + 'px';
      this.tooltip.style.top = (mouseY + 15) + 'px';
      this.tooltip.style.display = 'block';
    }

    setZoom(newZoom) {
      this.zoom = Math.max(0.5, Math.min(3, newZoom));
      this.render();
    }

    resetView() {
      this.zoom = 1;
      this.offsetX = 0;
      this.offsetY = 0;
      this.render();
    }

    // ============================================================
    // RENDERING
    // ============================================================
    render() {
      const ctx = this.ctx;
      const padding = 40;
      const mapWidth = this.width - padding * 2;
      const mapHeight = this.height - padding * 2;

      // Clear canvas
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, this.width, this.height);

      // Draw map border
      ctx.strokeStyle = '#30363d';
      ctx.lineWidth = 2;
      ctx.strokeRect(padding - 5, padding - 5, mapWidth + 10, mapHeight + 10);

      // Save context for clipping
      ctx.save();
      ctx.beginPath();
      ctx.rect(padding, padding, mapWidth, mapHeight);
      ctx.clip();

      // Draw terrain
      this.drawTerrain(ctx, padding, mapWidth, mapHeight);

      // Draw zones if layer enabled
      if (this.layers.zones) {
        this.drawZones(ctx, padding, mapWidth, mapHeight);
      }

      // Draw grid
      this.drawGrid(ctx, padding, mapWidth, mapHeight);

      // Draw POIs
      this.drawPois(ctx, padding, mapWidth, mapHeight);

      ctx.restore();

      // Draw map title
      ctx.fillStyle = '#c9d1d9';
      ctx.font = 'bold 14px "Courier New", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(this.data.name.toUpperCase(), padding, 25);

      // Draw difficulty
      ctx.fillStyle = '#6e7681';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'right';
      const stars = '★'.repeat(this.data.difficulty) + '☆'.repeat(5 - this.data.difficulty);
      ctx.fillText(stars, this.width - padding, 25);
    }

    drawTerrain(ctx, padding, mapWidth, mapHeight) {
      const data = this.data;

      // Base terrain color
      ctx.fillStyle = data.baseColor;
      ctx.fillRect(
        padding + this.offsetX,
        padding + this.offsetY,
        mapWidth * this.zoom,
        mapHeight * this.zoom
      );

      // Draw procedural terrain features based on theme
      ctx.fillStyle = data.accentColor;

      // Seeded random for consistent terrain
      const seed = this.mapId.length * 1000;
      const random = (i) => {
        const x = Math.sin(seed + i) * 10000;
        return x - Math.floor(x);
      };

      // Draw terrain patches
      for (let i = 0; i < 20; i++) {
        const x = padding + random(i * 3) * mapWidth * this.zoom + this.offsetX;
        const y = padding + random(i * 3 + 1) * mapHeight * this.zoom + this.offsetY;
        const size = 20 + random(i * 3 + 2) * 60;

        ctx.beginPath();
        ctx.arc(x, y, size * this.zoom, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw some water/paths if forest or mountain theme
      if (data.theme === 'forest' || data.theme === 'mountain') {
        ctx.fillStyle = data.waterColor;
        ctx.beginPath();
        ctx.moveTo(padding + this.offsetX, padding + 0.4 * mapHeight * this.zoom + this.offsetY);
        ctx.quadraticCurveTo(
          padding + 0.3 * mapWidth * this.zoom + this.offsetX,
          padding + 0.5 * mapHeight * this.zoom + this.offsetY,
          padding + 0.5 * mapWidth * this.zoom + this.offsetX,
          padding + 0.45 * mapHeight * this.zoom + this.offsetY
        );
        ctx.quadraticCurveTo(
          padding + 0.7 * mapWidth * this.zoom + this.offsetX,
          padding + 0.4 * mapHeight * this.zoom + this.offsetY,
          padding + mapWidth * this.zoom + this.offsetX,
          padding + 0.5 * mapHeight * this.zoom + this.offsetY
        );
        ctx.lineTo(padding + mapWidth * this.zoom + this.offsetX, padding + 0.55 * mapHeight * this.zoom + this.offsetY);
        ctx.quadraticCurveTo(
          padding + 0.7 * mapWidth * this.zoom + this.offsetX,
          padding + 0.45 * mapHeight * this.zoom + this.offsetY,
          padding + 0.5 * mapWidth * this.zoom + this.offsetX,
          padding + 0.5 * mapHeight * this.zoom + this.offsetY
        );
        ctx.quadraticCurveTo(
          padding + 0.3 * mapWidth * this.zoom + this.offsetX,
          padding + 0.55 * mapHeight * this.zoom + this.offsetY,
          padding + this.offsetX,
          padding + 0.45 * mapHeight * this.zoom + this.offsetY
        );
        ctx.closePath();
        ctx.fill();
      }
    }

    drawZones(ctx, padding, mapWidth, mapHeight) {
      const zoneColors = {
        'green': 'rgba(46, 160, 67, 0.25)',
        'yellow': 'rgba(210, 153, 34, 0.25)',
        'red': 'rgba(248, 81, 73, 0.25)'
      };

      const zoneBorders = {
        'green': '#2ea043',
        'yellow': '#d29922',
        'red': '#f85149'
      };

      for (const zone of this.data.zones) {
        const x = padding + zone.x * mapWidth * this.zoom + this.offsetX;
        const y = padding + zone.y * mapHeight * this.zoom + this.offsetY;
        const w = zone.w * mapWidth * this.zoom;
        const h = zone.h * mapHeight * this.zoom;

        // Fill
        ctx.fillStyle = zoneColors[zone.tier];
        ctx.beginPath();
        this.roundRect(ctx, x, y, w, h, 8);
        ctx.fill();

        // Border
        ctx.strokeStyle = zoneBorders[zone.tier];
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    drawGrid(ctx, padding, mapWidth, mapHeight) {
      ctx.strokeStyle = '#21262d';
      ctx.lineWidth = 1;

      const gridSize = 50 * this.zoom;

      // Vertical lines
      for (let x = this.offsetX % gridSize; x < mapWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(padding + x, padding);
        ctx.lineTo(padding + x, padding + mapHeight);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = this.offsetY % gridSize; y < mapHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(padding, padding + y);
        ctx.lineTo(padding + mapWidth, padding + y);
        ctx.stroke();
      }
    }

    drawPois(ctx, padding, mapWidth, mapHeight) {
      const poiColors = {
        'loot': {
          'green': '#2ea043',
          'yellow': '#d29922',
          'red': '#f85149'
        },
        'extraction': '#58a6ff',
        'hatch': '#a371f7'
      };

      for (const poi of this.data.pois) {
        // Check if layer is visible
        if (!this.layers[poi.type]) continue;

        const x = padding + poi.x * mapWidth * this.zoom + this.offsetX;
        const y = padding + poi.y * mapHeight * this.zoom + this.offsetY;

        const isHovered = this.hoveredPoi && this.hoveredPoi.id === poi.id;
        const radius = isHovered ? 22 : 18;

        // Get color based on type and tier
        let color;
        if (poi.type === 'loot') {
          color = poiColors.loot[poi.tier] || poiColors.loot.yellow;
        } else {
          color = poiColors[poi.type] || '#6e7681';
        }

        // Draw POI marker background
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? color : color + '80';
        ctx.fill();

        // Draw border
        ctx.strokeStyle = color;
        ctx.lineWidth = isHovered ? 3 : 2;
        ctx.stroke();

        // Draw icon
        ctx.fillStyle = '#fff';
        ctx.font = `${isHovered ? 16 : 14}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(poi.icon, x, y);
      }
    }

    roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================
  function initMaps() {
    // Find all map cards with placeholders and add interactive maps
    const mapCards = document.querySelectorAll('.map-card');

    mapCards.forEach(card => {
      const mapId = card.id;
      if (!mapData[mapId]) return;

      const placeholder = card.querySelector('.map-image-placeholder');
      if (!placeholder) return;

      // Create container for interactive map
      const container = document.createElement('div');
      container.className = 'interactive-map-container';
      container.id = `map-${mapId}`;

      // Replace placeholder with interactive map container
      placeholder.parentNode.replaceChild(container, placeholder);

      // Initialize interactive map
      new InteractiveMap(`map-${mapId}`, mapId);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaps);
  } else {
    initMaps();
  }

  // Export for external use
  window.InteractiveMap = InteractiveMap;
  window.mapData = mapData;
})();
