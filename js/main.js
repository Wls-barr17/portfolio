/* ============================================
   WILSON BARR — main.js
   ============================================ */

/* ── Navbar: scroll & active section ──────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'journey', 'contact'];

  window.addEventListener('scroll', () => {
    // Scrolled state
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Active link
    let current = 'hero';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= 100) current = id;
    }
    navLinks.forEach(a => {
      const href = a.getAttribute('href').slice(1);
      a.classList.toggle('active', href === current);
    });
  }, { passive: true });

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('open');
    });
    // Close on link click
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobile.classList.remove('open'));
    });
  }
})();


/* ── About toggle (desktop) ────────────────── */
let aboutOpen = false;

window.toggleAbout = function () {
  aboutOpen = !aboutOpen;

  const btn       = document.getElementById('aboutBtn');
  const panel     = document.getElementById('aboutPanel');
  const photoR    = document.getElementById('heroPhotoRight');
  const photoLI   = document.getElementById('heroPhotoLeftInner');
  const status    = document.getElementById('heroStatus');
  const textInner = document.getElementById('heroTextInner');

  if (aboutOpen) {
    // Show about panel
    panel.classList.add('visible');
    // Hide right photo, show left photo
    if (photoR) { photoR.style.opacity = '0'; photoR.style.transform = 'translateX(-40px)'; photoR.style.pointerEvents = 'none'; }
    if (photoLI) { photoLI.style.opacity = '1'; photoLI.style.transform = 'translateX(0)'; photoLI.style.pointerEvents = 'all'; }
    if (status) status.style.opacity = '0';
    if (btn) btn.innerHTML = `
      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      Close About`;
    if (textInner) textInner.style.transform = 'translateX(-16px)';
  } else {
    // Hide about panel
    panel.classList.remove('visible');
    if (photoR) { photoR.style.opacity = '1'; photoR.style.transform = 'translateX(0)'; photoR.style.pointerEvents = 'all'; }
    if (photoLI) { photoLI.style.opacity = '0'; photoLI.style.transform = 'translateX(-40px)'; photoLI.style.pointerEvents = 'none'; }
    if (status) status.style.opacity = '1';
    if (btn) btn.innerHTML = `
      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      About Me`;
    if (textInner) textInner.style.transform = '';
  }
};


/* ── About toggle (mobile) ─────────────────── */
let aboutMobileOpen = false;

window.toggleAboutMobile = function () {
  aboutMobileOpen = !aboutMobileOpen;
  const wrap = document.getElementById('heroMobileAbout');
  const btn  = document.getElementById('aboutBtnMobile');
  if (wrap) wrap.classList.toggle('open', aboutMobileOpen);
  if (btn) btn.innerHTML = aboutMobileOpen
    ? `<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> Close About`
    : `<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> About Me`;
};


/* ── Scroll Reveal ─────────────────────────── */
(function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-children');
  if (!targets.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => obs.observe(el));
})();


/* ── Contact form ──────────────────────────── */
(function initForm() {
  const form = document.getElementById('contactForm');
  const btn  = document.getElementById('formSubmit');
  if (!form || !btn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.innerHTML = '<span style="opacity:.6;font-style:italic;">Sending…</span>';
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1200));
    btn.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      Sent!`;
    btn.style.background = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    setTimeout(() => {
      form.reset();
      btn.innerHTML = `
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        Send Message`;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 2500);
  });
})();


/* ── Footer year ───────────────────────────── */
const yr = document.getElementById('footerYear');
if (yr) yr.textContent = new Date().getFullYear();


/* ── Smooth scroll offset (fixed navbar) ───── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});