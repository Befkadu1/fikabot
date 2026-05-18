import { locations } from '@data/locations';
import './Locations.scss';

export function Locations() {
  return (
    <section id="locations" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Location Solutions</span>
          <h2>Where FikaBot Thrives</h2>
          <p>Built for the spaces where every second counts.</p>
        </div>
        <div class="locations-grid">
          {locations.map((l) => (
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
