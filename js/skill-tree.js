/**
 * ARC Raiders Wiki - Interactive Skill Tree
 * Canvas-based skill tree visualization with selection, prerequisites, and builds
 */

(function() {
  'use strict';

  // ============================================================
  // SKILL TREE RENDERER
  // ============================================================
  const SkillTree = {
    canvas: null,
    ctx: null,
    selectedSkills: new Set(),
    hoveredSkill: null,
    skillPositions: {},
    totalPoints: 0,
    maxPoints: 75,

    // Colors
    colors: {
      background: '#0d1117',
      nodeBorder: '#30363d',
      nodeUnlocked: '#1f6feb',
      nodeSelected: '#238636',
      nodeEssential: '#f0883e',
      nodeLocked: '#21262d',
      nodeHover: '#388bfd',
      connectionActive: '#238636',
      connectionInactive: '#30363d',
      text: '#c9d1d9',
      textDim: '#6e7681',
      textBright: '#f0f6fc',
      treeMobility: '#58a6ff',
      treeConditioning: '#f78166',
      treeSurvival: '#7ee787'
    },

    // Tree positions
    treeConfig: {
      mobility: { x: 150, color: '#58a6ff' },
      conditioning: { x: 450, color: '#f78166' },
      survival: { x: 750, color: '#7ee787' }
    },

    // Node dimensions
    nodeWidth: 120,
    nodeHeight: 50,
    tierSpacing: 90,
    startY: 80,

    init(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.setupCanvas();
      this.calculatePositions();
      this.setupEventListeners();
      this.loadSavedBuild();
      this.render();
    },

    setupCanvas() {
      // Set canvas size
      const container = this.canvas.parentElement;
      this.canvas.width = 900;
      this.canvas.height = 500;

      // Enable crisp rendering
      this.ctx.imageSmoothingEnabled = true;
    },

    calculatePositions() {
      const data = window.skillTreeData;
      if (!data) return;

      Object.keys(data).forEach(treeName => {
        const tree = data[treeName];
        const treeX = this.treeConfig[treeName].x;

        tree.skills.forEach((skill, index) => {
          // Calculate position based on tier
          const tierY = this.startY + (skill.tier - 1) * this.tierSpacing;

          // Spread skills within same tier horizontally
          const sameTierSkills = tree.skills.filter(s => s.tier === skill.tier);
          const tierIndex = sameTierSkills.indexOf(skill);
          const tierWidth = (sameTierSkills.length - 1) * 130;
          const offsetX = tierIndex * 130 - tierWidth / 2;

          this.skillPositions[skill.id] = {
            x: treeX + offsetX,
            y: tierY,
            width: this.nodeWidth,
            height: this.nodeHeight,
            skill: skill,
            tree: treeName
          };
        });
      });
    },

    setupEventListeners() {
      this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
      this.canvas.addEventListener('click', (e) => this.handleClick(e));
      this.canvas.addEventListener('mouseleave', () => {
        this.hoveredSkill = null;
        this.render();
      });
    },

    getMousePos(e) {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    },

    getSkillAtPos(pos) {
      for (const [id, data] of Object.entries(this.skillPositions)) {
        if (pos.x >= data.x - data.width/2 &&
            pos.x <= data.x + data.width/2 &&
            pos.y >= data.y - data.height/2 &&
            pos.y <= data.y + data.height/2) {
          return id;
        }
      }
      return null;
    },

    handleMouseMove(e) {
      const pos = this.getMousePos(e);
      const skillId = this.getSkillAtPos(pos);

      if (skillId !== this.hoveredSkill) {
        this.hoveredSkill = skillId;
        this.canvas.style.cursor = skillId ? 'pointer' : 'default';
        this.render();
        this.updateTooltip(skillId, e);
      }
    },

    handleClick(e) {
      const pos = this.getMousePos(e);
      const skillId = this.getSkillAtPos(pos);

      if (skillId) {
        this.toggleSkill(skillId);
      }
    },

    canSelectSkill(skillId) {
      const data = this.skillPositions[skillId];
      if (!data) return false;

      const skill = data.skill;

      // Tier 1 skills have no prereq
      if (!skill.prereq) return true;

      // Check if prereq is selected
      return this.selectedSkills.has(skill.prereq);
    },

    canDeselectSkill(skillId) {
      // Check if any selected skill depends on this one
      for (const selectedId of this.selectedSkills) {
        const data = this.skillPositions[selectedId];
        if (data && data.skill.prereq === skillId) {
          return false;
        }
      }
      return true;
    },

    toggleSkill(skillId) {
      if (this.selectedSkills.has(skillId)) {
        // Try to deselect
        if (this.canDeselectSkill(skillId)) {
          this.selectedSkills.delete(skillId);
          const cost = this.skillPositions[skillId].skill.cost;
          this.totalPoints -= cost;
        } else {
          this.showMessage('Cannot deselect - other skills depend on it');
        }
      } else {
        // Try to select
        if (this.canSelectSkill(skillId)) {
          const cost = this.skillPositions[skillId].skill.cost;
          if (this.totalPoints + cost <= this.maxPoints) {
            this.selectedSkills.add(skillId);
            this.totalPoints += cost;
          } else {
            this.showMessage('Not enough skill points');
          }
        } else {
          this.showMessage('Unlock prerequisite skill first');
        }
      }

      this.updatePointsDisplay();
      this.saveBuild();
      this.render();
    },

    updateTooltip(skillId, event) {
      let tooltip = document.getElementById('skill-tooltip');

      if (!skillId) {
        if (tooltip) tooltip.style.display = 'none';
        return;
      }

      const data = this.skillPositions[skillId];
      if (!data) return;

      const skill = data.skill;

      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'skill-tooltip';
        tooltip.className = 'skill-tooltip';
        document.body.appendChild(tooltip);
      }

      const isSelected = this.selectedSkills.has(skillId);
      const canSelect = this.canSelectSkill(skillId);

      tooltip.innerHTML = `
        <div class="tooltip-title">${skill.name}</div>
        <div class="tooltip-desc">${skill.desc}</div>
        <div class="tooltip-meta">
          <span>Cost: ${skill.cost} points</span>
          <span>Tier ${skill.tier}</span>
        </div>
        <div class="tooltip-status ${isSelected ? 'selected' : canSelect ? 'available' : 'locked'}">
          ${isSelected ? '✓ Selected' : canSelect ? 'Click to unlock' : '🔒 Unlock prerequisite'}
        </div>
      `;

      const rect = this.canvas.getBoundingClientRect();
      tooltip.style.left = (event.clientX + 15) + 'px';
      tooltip.style.top = (event.clientY + 15) + 'px';
      tooltip.style.display = 'block';
    },

    showMessage(msg) {
      const existing = document.querySelector('.skill-message');
      if (existing) existing.remove();

      const msgEl = document.createElement('div');
      msgEl.className = 'skill-message';
      msgEl.textContent = msg;
      document.body.appendChild(msgEl);

      setTimeout(() => msgEl.remove(), 2000);
    },

    updatePointsDisplay() {
      const display = document.getElementById('skill-points-display');
      if (display) {
        display.innerHTML = `<span class="points-used">${this.totalPoints}</span> / ${this.maxPoints} points`;
      }
    },

    saveBuild() {
      const buildData = {
        skills: Array.from(this.selectedSkills),
        points: this.totalPoints
      };
      localStorage.setItem('arcwiki_skillbuild', JSON.stringify(buildData));
    },

    loadSavedBuild() {
      try {
        const saved = JSON.parse(localStorage.getItem('arcwiki_skillbuild'));
        if (saved && saved.skills) {
          saved.skills.forEach(id => {
            if (this.skillPositions[id]) {
              this.selectedSkills.add(id);
            }
          });
          this.totalPoints = saved.points || 0;
          this.updatePointsDisplay();
        }
      } catch (e) {
        // Ignore errors
      }
    },

    loadPreset(presetId) {
      const preset = window.presetBuilds?.[presetId];
      if (!preset) return;

      this.selectedSkills.clear();
      this.totalPoints = 0;

      preset.skills.forEach(id => {
        if (this.skillPositions[id]) {
          this.selectedSkills.add(id);
          this.totalPoints += this.skillPositions[id].skill.cost;
        }
      });

      this.updatePointsDisplay();
      this.saveBuild();
      this.render();
      this.showMessage(`Loaded: ${preset.name}`);
    },

    clearBuild() {
      this.selectedSkills.clear();
      this.totalPoints = 0;
      this.updatePointsDisplay();
      this.saveBuild();
      this.render();
      this.showMessage('Build cleared');
    },

    // ============================================================
    // RENDERING
    // ============================================================
    render() {
      const ctx = this.ctx;

      // Clear canvas
      ctx.fillStyle = this.colors.background;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw tree labels
      this.drawTreeLabels();

      // Draw connections first (behind nodes)
      this.drawConnections();

      // Draw nodes
      this.drawNodes();
    },

    drawTreeLabels() {
      const ctx = this.ctx;
      ctx.font = 'bold 16px "Courier New", monospace';
      ctx.textAlign = 'center';

      Object.entries(this.treeConfig).forEach(([name, config]) => {
        ctx.fillStyle = config.color;
        ctx.fillText(name.toUpperCase(), config.x, 30);
      });
    },

    drawConnections() {
      const ctx = this.ctx;

      Object.values(this.skillPositions).forEach(data => {
        const skill = data.skill;
        if (!skill.prereq) return;

        const prereqData = this.skillPositions[skill.prereq];
        if (!prereqData) return;

        const isActive = this.selectedSkills.has(skill.prereq) && this.selectedSkills.has(skill.id);
        const isPartial = this.selectedSkills.has(skill.prereq);

        ctx.beginPath();
        ctx.strokeStyle = isActive ? this.colors.connectionActive :
                         isPartial ? this.treeConfig[data.tree].color + '80' :
                         this.colors.connectionInactive;
        ctx.lineWidth = isActive ? 3 : 2;

        // Draw curved line
        const startX = prereqData.x;
        const startY = prereqData.y + prereqData.height/2;
        const endX = data.x;
        const endY = data.y - data.height/2;

        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(
          startX, startY + 30,
          endX, endY - 30,
          endX, endY
        );
        ctx.stroke();
      });
    },

    drawNodes() {
      const ctx = this.ctx;

      Object.entries(this.skillPositions).forEach(([id, data]) => {
        const skill = data.skill;
        const isSelected = this.selectedSkills.has(id);
        const isHovered = this.hoveredSkill === id;
        const canSelect = this.canSelectSkill(id);

        const x = data.x - data.width/2;
        const y = data.y - data.height/2;

        // Node background
        ctx.fillStyle = isSelected ? this.colors.nodeSelected :
                       isHovered ? this.colors.nodeHover :
                       canSelect ? this.treeConfig[data.tree].color + '40' :
                       this.colors.nodeLocked;

        this.roundRect(ctx, x, y, data.width, data.height, 8);
        ctx.fill();

        // Node border
        ctx.strokeStyle = isSelected ? this.colors.nodeSelected :
                         skill.essential ? this.colors.nodeEssential :
                         canSelect ? this.treeConfig[data.tree].color :
                         this.colors.nodeBorder;
        ctx.lineWidth = isHovered ? 3 : 2;
        this.roundRect(ctx, x, y, data.width, data.height, 8);
        ctx.stroke();

        // Essential indicator
        if (skill.essential && !isSelected) {
          ctx.fillStyle = this.colors.nodeEssential;
          ctx.beginPath();
          ctx.arc(x + data.width - 8, y + 8, 5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Selected checkmark
        if (isSelected) {
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 14px sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('✓', x + 6, y + 18);
        }

        // Skill name
        ctx.fillStyle = isSelected || canSelect ? this.colors.textBright : this.colors.textDim;
        ctx.font = '12px "Courier New", monospace';
        ctx.textAlign = 'center';

        // Word wrap for long names
        const words = skill.name.split(' ');
        if (words.length > 2 && skill.name.length > 14) {
          const line1 = words.slice(0, Math.ceil(words.length/2)).join(' ');
          const line2 = words.slice(Math.ceil(words.length/2)).join(' ');
          ctx.fillText(line1, data.x, data.y - 2);
          ctx.fillText(line2, data.x, data.y + 12);
        } else {
          ctx.fillText(skill.name, data.x, data.y + 5);
        }

        // Cost badge
        ctx.fillStyle = isSelected ? '#fff' : this.colors.textDim;
        ctx.font = '10px sans-serif';
        ctx.fillText(`${skill.cost}pt`, data.x, data.y + data.height/2 - 6);

        // Lock icon for locked skills
        if (!canSelect && !isSelected) {
          ctx.fillStyle = this.colors.textDim;
          ctx.font = '16px sans-serif';
          ctx.fillText('🔒', data.x, data.y - data.height/2 + 20);
        }
      });
    },

    roundRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
  };

  // ============================================================
  // INITIALIZATION
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    // Only initialize on skills.html
    if (!document.getElementById('skill-tree-canvas')) return;

    SkillTree.init('skill-tree-canvas');

    // Preset buttons
    document.querySelectorAll('[data-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        SkillTree.loadPreset(btn.dataset.preset);
      });
    });

    // Clear button
    const clearBtn = document.getElementById('skill-tree-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => SkillTree.clearBuild());
    }
  });

  // Export for external use
  window.SkillTree = SkillTree;
})();
