import { useT } from '../../i18n';
import './benefits.scss';

export function Benefits() {
  const t = useT().benefits;
  return (
    <section id="benefits" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div class="benefits-grid">
          {t.items.map((b) => (
            <article key={b.title} class="benefit-card reveal">
              <span class="stat">{b.stat}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
