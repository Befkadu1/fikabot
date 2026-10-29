import emporiaWalk from '../../assets/gallery-emporia-walk.mp4';
import emporiaKiosk from '../../assets/gallery-emporia-kiosk.jpg';
import festivalCrowd from '../../assets/gallery-festival-crowd.jpg';
import festivalPhotographer from '../../assets/gallery-festival-photographer.jpg';
import festivalQueue from '../../assets/gallery-festival-queue.jpg';
import festivalBanner from '../../assets/gallery-festival-banner.jpg';
import cupIcedCaramel from '../../assets/cup-iced-caramel.jpeg';
import cupBranded from '../../assets/cup-branded.jpeg';
import cupMalmo from '../../assets/cup-malmo.jpeg';
import { useLazyVideo } from '@hooks/useLazyVideo';
import { useT } from '../../i18n';
import './gallery.scss';

// Matches the order of `gallery.items` in messages.ts.
const media: { src: string; video?: boolean }[] = [
  { src: emporiaWalk, video: true },
  { src: emporiaKiosk },
  { src: festivalCrowd },
  { src: festivalPhotographer },
  { src: festivalQueue },
  { src: festivalBanner },
  { src: cupIcedCaramel },
  { src: cupBranded },
  { src: cupMalmo },
];

export function Gallery() {
  const t = useT().gallery;
  const videoRef = useLazyVideo();
  return (
    <section id="gallery" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div class="gallery-grid">
          {t.items.map((s, i) => (
            <figure key={s.title} class="gallery-card reveal">
              {media[i].video ? (
                <video ref={videoRef} src={media[i].src} loop muted playsinline preload="none" aria-label={s.alt} />
              ) : (
                <img src={media[i].src} alt={s.alt} loading="lazy" />
              )}
              <figcaption>
                <strong>{s.title}</strong>
                <span>{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
