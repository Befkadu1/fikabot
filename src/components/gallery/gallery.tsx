import cupIcedCaramel from '../../assets/cup-iced-caramel.jpeg';
import cupBranded from '../../assets/cup-branded.jpeg';
import cupMalmo from '../../assets/cup-malmo.jpeg';
import { useT } from '../../i18n';
import './gallery.scss';

const images = [cupIcedCaramel, cupBranded, cupMalmo];

export function Gallery() {
  const t = useT().gallery;
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
              <img src={images[i]} alt={s.alt} loading="lazy" />
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
