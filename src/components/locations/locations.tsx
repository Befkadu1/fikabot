import { useT } from '../../i18n';
import './locations.scss';

export function Locations() {
  const t = useT().locations;
  return (
    <section id="locations" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div class="locations-grid">
          {t.items.map((l) => (
            <article key={l.title} class="location-card reveal">
              <div class="icon">{l.icon}</div>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
