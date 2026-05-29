import qrCode from '../../assets/fikabot-qr.svg';
import { useT } from '../../i18n';
import './cta.scss';

export function Cta() {
  const t = useT().cta;
  return (
    <section id="contact" class="section section-cta">
      <div class="container cta-inner">
        <h2>{t.title}</h2>
        <p>{t.lede}</p>
        <div class="cta-actions">
          <a href="mailto:stessema@fikabot.se" class="btn btn-primary btn-lg">stessema@fikabot.se</a>
          <a href="tel:+46738954018" class="btn btn-outline-dark btn-lg">+46 73 895 40 18</a>
        </div>
        <div class="cta-qr">
          <img src={qrCode} alt={t.qrAlt} width="132" height="132" />
          <span>{t.qrLabel}</span>
        </div>
      </div>
    </section>
  );
}
