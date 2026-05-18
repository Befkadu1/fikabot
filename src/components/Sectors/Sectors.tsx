import { sectors } from '@data/sectors';
import './Sectors.scss';

export function Sectors() {
  return (
    <section id="sectors" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Discover FikaBot</span>
          <h2>Tailored Hospitality for Every Sector</h2>
          <p>Designed to fit your venue — not the other way around.</p>
        </div>
        <div class="sectors-grid">
          {sectors.map((s) => (
            <article key={s.title} class="sector-card reveal">
              <div class="emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <div class="row"><strong>Challenge</strong><p>{s.challenge}</p></div>
              <div class="row"><strong>Solution</strong><p>{s.solution}</p></div>
              <div class="row"><strong>Benefit</strong><p>{s.benefit}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
