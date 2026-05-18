import { useEffect } from 'preact/hooks';

export function useReveal(selector = '.reveal', threshold = 0.12): void {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(selector);
    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('in'));
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
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, threshold]);
}
