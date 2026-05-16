import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HEADER_OFFSET = 64; // px — matches --header-h in global.css

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  console.info('[smooth-scroll] disabled — prefers-reduced-motion');
} else {
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
  });

  if (!smoother) {
    console.warn('[smooth-scroll] ScrollSmoother.create returned no instance');
  } else {
    console.info('[smooth-scroll] ScrollSmoother active');

    /* ---------------------------------------------------------------
       Anchor link smooth navigation
       --------------------------------------------------------------- */

    const animateScrollTo = (target: Element) => {
      // Resolve the absolute Y in the smoothed-document, then tween smoother's
      // own scrollTop so the duration + easing are fully ours (not the constant
      // 1.5s smoothing factor). Feels intentional and unhurried.
      const targetY = smoother.offset(target as HTMLElement, `top top+=${HEADER_OFFSET}`);

      gsap.to(smoother, {
        scrollTop: targetY,
        duration: 1.6,
        ease: 'power3.inOut',
        overwrite: true,
      });
    };

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (!href || href.length <= 1) return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        animateScrollTo(target);

        // Reflect navigation in URL without triggering the browser's own jump
        history.pushState(null, '', href);
      });
    });

    /* ---------------------------------------------------------------
       Section reveals — content fades in as each section enters viewport
       --------------------------------------------------------------- */

    const REVEAL_SELECTORS = [
      '.heading',
      '.persona',
      '.step',
      '.row',
      '.tile',
      '.layer',
      '.item',
      '.metric',
      '.chip',
    ].join(',');

    gsap.utils.toArray<HTMLElement>('main > section').forEach((section) => {
      if (section.id === 'top') return; // hero animates via CSS on load

      const items = section.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);
      if (items.length === 0) return;

      gsap.from(items, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 32,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
      });
    });

    const ctaCard = document.querySelector<HTMLElement>('.cta .card');
    if (ctaCard) {
      gsap.from(ctaCard, {
        scrollTrigger: {
          trigger: ctaCard,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: 'power2.out',
      });
    }
  }
}
