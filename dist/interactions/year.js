import { qs } from '../utils/dom.js';
export function initYear() {
    qs('#year').textContent = String(new Date().getFullYear());
}
//# sourceMappingURL=year.js.map