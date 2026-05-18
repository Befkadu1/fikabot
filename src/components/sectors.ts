import { qs } from '../utils/dom.js';
import { sectors } from '../data/sectors.js';

export function renderSectors(): void {
  qs('#sectorsGrid').innerHTML = sectors
    .map(
      (s) => `
    <article class="sector-card reveal">
      <div class="emoji">${s.emoji}</div>
      <h3>${s.title}</h3>
      <div class="row"><strong>Challenge</strong><p>${s.challenge}</p></div>
      <div class="row"><strong>Solution</strong><p>${s.solution}</p></div>
      <div class="row"><strong>Benefit</strong><p>${s.benefit}</p></div>
    </article>
  `,
    )
    .join('');
}
