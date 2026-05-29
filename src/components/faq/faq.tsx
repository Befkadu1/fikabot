import { useState } from 'preact/hooks';
import { useT } from '../../i18n';
import './faq.scss';

export function Faq() {
  const t = useT().faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section id="faq" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.lede}</p>
        </div>
        <div class="faq-list">
          {t.items.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} class="faq-item reveal">
                <div class={`faq-box ${open ? 'open' : ''}`}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
