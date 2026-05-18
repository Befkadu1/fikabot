import { renderBenefits } from './components/benefits.js';
import { renderLocations } from './components/locations.js';
import { renderSectors } from './components/sectors.js';
import { renderFaqs } from './components/faqs.js';
import { initNav } from './interactions/nav.js';
import { initReveal } from './interactions/reveal.js';
import { initYear } from './interactions/year.js';
function bootstrap() {
    renderBenefits();
    renderLocations();
    renderSectors();
    renderFaqs();
    initNav();
    initReveal();
    initYear();
}
document.addEventListener('DOMContentLoaded', bootstrap);
//# sourceMappingURL=main.js.map