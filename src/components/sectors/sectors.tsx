import { useT } from '../../i18n';
import './sectors.scss';

export function Sectors() {
  const t = useT().sectors;
  return (
    <section id="sectors" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div class="sectors-grid">
          {t.items.map((s) => (
            <article key={s.title} class="sector-card reveal">
              <div class="emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <div class="row"><strong>{t.labels.challenge}</strong><p>{s.challenge}</p></div>
              <div class="row"><strong>{t.labels.solution}</strong><p>{s.solution}</p></div>
              <div class="row"><strong>{t.labels.benefit}</strong><p>{s.benefit}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
