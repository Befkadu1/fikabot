import { useEffect } from 'preact/hooks';

/**
 * Fades in `.reveal` elements as they scroll into view.
 *
 * Pass a `dep` that changes when the revealable content is re-rendered
 * (e.g. the active locale). On change the effect re-runs and re-applies
 * `.in` — without this, switching language remounts the cards as fresh
 * nodes that the old observer no longer tracks, leaving them invisible.
 */
export function useReveal(dep?: unknown, selector = '.reveal', threshold = 0.12): void {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (targets.length === 0) return;

    // Anything already in (or scrolled past) the viewport is shown right away —
    // this also re-reveals elements after a re-render wiped their `.in` class.
    const viewportH = window.innerHeight;
    const pending: HTMLElement[] = [];
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < viewportH) el.classList.add('in');
      else pending.push(el);
    });

    if (!('IntersectionObserver' in window) || pending.length === 0) {
      pending.forEach((el) => el.classList.add('in'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );
    pending.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [dep, selector, threshold]);
}
