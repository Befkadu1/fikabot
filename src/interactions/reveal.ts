import { qsa } from '../utils/dom.js';

export function initReveal(): void {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  qsa<HTMLElement>('.reveal').forEach((el) => obs.observe(el));
}
