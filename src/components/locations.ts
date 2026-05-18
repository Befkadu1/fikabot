import { qs } from '../utils/dom.js';
import { locations } from '../data/locations.js';

export function renderLocations(): void {
  qs('#locationsGrid').innerHTML = locations
    .map(
      (l) => `
    <article class="location-card reveal">
      <div class="icon">${l.icon}</div>
      <h3>${l.title}</h3>
      <p>${l.text}</p>
    </article>
  `,
    )
    .join('');
}
