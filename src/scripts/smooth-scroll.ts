/**
 * Native smooth-scroll + IntersectionObserver reveals.
 * Replaces GSAP ScrollSmoother/ScrollTrigger (~110KB) with a ~1KB script.
 *
 * - Anchor links scroll smoothly via the browser, respecting prefers-reduced-motion.
 * - Reveal animations are CSS-driven (.is-revealed). JS only adds the class when
 *   the element enters the viewport — no per-frame work, no layout thrash.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const HEADER_OFFSET = 80;

/* ---------------------------------------------------------------
   Anchor link navigation — uses native scrollIntoView with smooth.
   --------------------------------------------------------------- */

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href.length <= 1) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    history.pushState(null, '', href);
  });
});

/* ---------------------------------------------------------------
   IntersectionObserver reveals — one-shot fade-in on viewport entry.
   With reduced-motion: skip entirely (CSS keeps content visible).
   --------------------------------------------------------------- */

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const REVEAL_SELECTORS = [
    '[data-reveal]',
    '.bento__head',
    '.services__head',
    '.customers__head',
    '.tile',
    '.row',
  ].join(',');

  const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);
  if (targets.length > 0) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    targets.forEach((el, idx) => {
      // Stagger reveal-delay across siblings inside the same parent.
      const sameParent = el.parentElement?.children;
      if (sameParent && sameParent.length > 1) {
        const i = Array.prototype.indexOf.call(sameParent, el);
        if (i >= 0) el.style.setProperty('--reveal-index', String(i));
      } else {
        el.style.setProperty('--reveal-index', String(idx));
      }
      el.classList.add('reveal-on-scroll');
      io.observe(el);
    });
  }
}
