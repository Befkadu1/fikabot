import { useT } from '../../i18n';
import './about.scss';

export function About() {
  const t = useT().about;
  return (
    <section id="about" class="section section-dark">
      <div class="container about-grid">
        <div>
          <span class="eyebrow light">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <h3>{t.h3}</h3>
          <p>
            {t.p3pre}<strong>{t.p3strong}</strong>{t.p3post}
          </p>
        </div>
        <div class="about-card">
          <h4>{t.cardTitle}</h4>
          <ul>
            {t.certs.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
