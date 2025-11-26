/**
 * ARC Raiders Wiki - Core JavaScript
 * Handles: sidebar, navigation, accordions, back-to-top, modals
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================================
  // NAVIGATION ACTIVE STATE
  // ============================================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ============================================================
  // MOBILE SIDEBAR
  // ============================================================
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Close sidebar when clicking a nav link on mobile
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // ============================================================
  // ACCORDIONS
  // ============================================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      const isActive = accordion.classList.contains('active');

      // Optional: close other accordions (uncomment for single-open behavior)
      // document.querySelectorAll('.accordion').forEach(acc => {
      //   acc.classList.remove('active');
      // });

      if (isActive) {
        accordion.classList.remove('active');
      } else {
        accordion.classList.add('active');
      }
    });

    // Keyboard accessibility
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // ============================================================
  // BACK TO TOP BUTTON
  // ============================================================
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ============================================================
  // MODAL HANDLING
  // ============================================================
  const modals = document.querySelectorAll('.modal-overlay');

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');

    // Close on X button
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close on overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });

  // ============================================================
  // SORTABLE TABLES
  // ============================================================
  const sortableTables = document.querySelectorAll('table');

  sortableTables.forEach(table => {
    const headers = table.querySelectorAll('th');

    headers.forEach((header, index) => {
      header.addEventListener('click', () => {
        sortTable(table, index, header);
      });
    });
  });

  function sortTable(table, columnIndex, header) {
    const tbody = table.querySelector('tbody') || table;
    const rows = Array.from(tbody.querySelectorAll('tr')).filter(row => row.querySelector('td'));
    const isAsc = header.classList.contains('sorted-asc');

    // Remove sort classes from all headers
    table.querySelectorAll('th').forEach(th => {
      th.classList.remove('sorted-asc', 'sorted-desc');
    });

    // Sort rows
    rows.sort((a, b) => {
      const aValue = a.cells[columnIndex]?.textContent.trim() || '';
      const bValue = b.cells[columnIndex]?.textContent.trim() || '';

      // Try numeric sort first
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return isAsc ? bNum - aNum : aNum - bNum;
      }

      // Fallback to string sort
      return isAsc
        ? bValue.localeCompare(aValue)
        : aValue.localeCompare(bValue);
    });

    // Apply new sort class
    header.classList.add(isAsc ? 'sorted-desc' : 'sorted-asc');

    // Re-append sorted rows
    rows.forEach(row => tbody.appendChild(row));
  }

  // ============================================================
  // STICKY SECTION HEADERS
  // ============================================================
  const stickyHeaders = document.querySelectorAll('.sticky-header');

  if (stickyHeaders.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('stuck', !entry.isIntersecting);
        });
      },
      { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
    );

    stickyHeaders.forEach(header => observer.observe(header));
  }

  // ============================================================
  // SCROLL-TRIGGERED REVEALS (subtle)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  }
});

// ============================================================
// UTILITY FUNCTIONS (globally available)
// ============================================================

/**
 * Open a modal by ID
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close a modal by ID
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch (e) {
      document.body.removeChild(textarea);
      return false;
    }
  }
}

/**
 * Show a temporary toast notification
 */
function showToast(message, duration = 2000) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-elevated);
    border: 1px solid var(--border-medium);
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius-sm);
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.9rem;
    color: var(--text-primary);
    z-index: 9999;
    animation: toast-in 0.3s ease;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Add toast animations to head
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes toast-in {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes toast-out {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(20px); }
  }
`;
document.head.appendChild(toastStyles);
