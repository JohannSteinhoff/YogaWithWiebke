// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const closeNav = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  // Close when tapping outside the header
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !e.target.closest('.site-header')) closeNav();
  });
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
