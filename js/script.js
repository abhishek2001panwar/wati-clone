/**
 * WATI Clone — script.js
 * Handles: Mobile nav toggle, Tab switching, Pricing toggle, Scroll header
 */
document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVBAR TOGGLE (Mobile) =====
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('navbar__nav--open');
      navToggle.classList.toggle('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close nav when a link is clicked
    navMenu.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('navbar__nav--open');
        navToggle.classList.remove('navbar__toggle--active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== NAVBAR SHADOW ON SCROLL =====
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }, { passive: true });

  // ===== FEATURE TABS =====
  const tabBtns = document.querySelectorAll('.tabs-section__tab');
  const tabPanels = document.querySelectorAll('.tabs-section__panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('tabs-section__tab--active'));
      tabPanels.forEach(p => p.classList.remove('tabs-section__panel--active'));

      // Activate clicked
      btn.classList.add('tabs-section__tab--active');
      const targetId = 'tab-' + btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('tabs-section__panel--active');
    });
  });

  // ===== PRICING TOGGLE (Annual / Monthly) =====
  const annualBtn = document.getElementById('annualBtn');
  const monthlyBtn = document.getElementById('monthlyBtn');
  const priceAmounts = document.querySelectorAll('.pricing-card__amount');

  function setPricing(period) {
    priceAmounts.forEach(el => {
      el.textContent = el.getAttribute('data-' + period);
    });
  }

  if (annualBtn && monthlyBtn) {
    annualBtn.addEventListener('click', () => {
      annualBtn.classList.add('pricing__toggle-btn--active');
      monthlyBtn.classList.remove('pricing__toggle-btn--active');
      setPricing('annual');
    });

    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('pricing__toggle-btn--active');
      annualBtn.classList.remove('pricing__toggle-btn--active');
      setPricing('monthly');
    });
  }

  // ===== SMOOTH SCROLL for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

});
