import { useEffect, useRef } from 'preact/hooks';
import menuLatte from '../../assets/menu-latte.jpg';
import menuAmericano from '../../assets/menu-americano.jpg';
import menuIcedLatte from '../../assets/menu-iced-latte.jpg';
import menuCappuccino from '../../assets/menu-cappuccino.jpg';
import menuMatcha from '../../assets/menu-matcha-latte.jpg';
import menuIcedMatcha from '../../assets/menu-iced-matcha-latte.jpg';
import menuVideo from '../../assets/menu.mp4';
import { useT } from '../../i18n';
import './menu.scss';

const images = [menuLatte, menuAmericano, menuIcedLatte, menuCappuccino, menuMatcha, menuIcedMatcha];

export function Menu() {
  const t = useT().menu;
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lazy-load the showcase video: with preload="none" and no autoplay, nothing
  // downloads until the section nears the viewport. rootMargin starts it a bit
  // early so it's ready on screen; it pauses when scrolled away.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.play().catch(() => {});
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { rootMargin: '300px 0px', threshold: 0.01 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="menu" class="section section-menu">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>

        <div class="menu-video reveal">
          <video ref={videoRef} src={menuVideo} loop muted playsinline preload="none" aria-hidden="true" />
        </div>

        <div class="menu-grid">
          {t.items.map((item, i) => (
            <figure key={item.name} class="menu-card reveal">
              <div class="menu-thumb">
                <img src={images[i]} alt={item.alt} loading="lazy" width="600" height="520" />
                <span class={`menu-tag menu-tag-${item.tag}`}>{t.tags[item.tag]}</span>
              </div>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>

        <p class="menu-note">{t.note}</p>
      </div>
    </section>
  );
}
