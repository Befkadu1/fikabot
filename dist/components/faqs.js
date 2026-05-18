import { qs, qsa } from '../utils/dom.js';
import { faqs } from '../data/faqs.js';
export function renderFaqs() {
    qs('#faqList').innerHTML = faqs
        .map((f, i) => `
    <div class="faq-item reveal" data-index="${i}">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${f.q}</span>
        <span class="chev" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `)
        .join('');
    qsa('.faq-item').forEach((item) => {
        const btn = item.querySelector('.faq-q');
        const panel = item.querySelector('.faq-a');
        if (!btn || !panel)
            return;
        btn.addEventListener('click', () => {
            const open = item.classList.toggle('open');
            btn.setAttribute('aria-expanded', String(open));
            panel.style.maxHeight = open ? `${panel.scrollHeight}px` : '0px';
        });
    });
}
//# sourceMappingURL=faqs.js.map