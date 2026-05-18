import { qs } from '../utils/dom.js';

export function initYear(): void {
  qs('#year').textContent = String(new Date().getFullYear());
}
