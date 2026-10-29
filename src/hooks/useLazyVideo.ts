import { useCallback, useEffect, useRef } from 'preact/hooks';

/**
 * Lazy-loads a muted showcase video: with preload="none" and no autoplay,
 * nothing downloads until the element nears the viewport. rootMargin starts it
 * a bit early so it's ready on screen; it pauses when scrolled away.
 *
 * Returns a callback ref rather than a ref object so it keeps working when the
 * video is remounted (e.g. a keyed list re-rendering on language switch).
 */
export function useLazyVideo() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => () => observer.current?.disconnect(), []);

  return useCallback((el: HTMLVideoElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.play().catch(() => {});
      return;
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { rootMargin: '300px 0px', threshold: 0.01 },
    );
    observer.current.observe(el);
  }, []);
}
