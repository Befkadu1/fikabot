import { useState } from 'preact/hooks';
import { faqs } from '@data/faqs';
import './Faq.scss';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section id="faq" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">FAQ</span>
          <h2>Technology, Trust & Cleaning</h2>
          <p>The exact questions every mall, university and kommun asks us — answered.</p>
        </div>
        <div class="faq-list">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} class={`faq-item reveal ${open ? 'open' : ''}`}>
                <button
                  class="faq-q"
                  aria-expanded={open}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span>{f.q}</span>
                  <span class="chev" aria-hidden="true">+</span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  class="faq-a"
                  style={{ maxHeight: open ? '600px' : '0px' }}
                >
                  <div class="faq-a-inner">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
