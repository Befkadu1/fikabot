import { benefits } from '@data/benefits';
import './Benefits.scss';

export function Benefits() {
  return (
    <section id="benefits" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Benefits</span>
          <h2>The Future of Coffee</h2>
          <p>Specialty coffee, brewed by a champion-grade robotic arm — built for speed, hygiene and scale.</p>
        </div>
        <div class="benefits-grid">
          {benefits.map((b) => (
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
