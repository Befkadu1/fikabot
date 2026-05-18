import { qs, qsa } from '../utils/dom.js';
export function initNav() {
    const nav = qs('#nav');
    const toggle = qs('.nav-toggle');
    const links = qs('#navLinks');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });
    qsa('a', links).forEach((a) => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}
//# sourceMappingURL=nav.js.map