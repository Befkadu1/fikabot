import { qs } from '../utils/dom.js';
import { benefits } from '../data/benefits.js';

export function renderBenefits(): void {
  qs('#benefitsGrid').innerHTML = benefits
    .map(
      (b) => `
    <article class="benefit-card reveal">
      <span class="stat">${b.stat}</span>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
    </article>
  `,
    )
    .join('');
}
