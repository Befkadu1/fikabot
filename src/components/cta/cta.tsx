import qrCode from '../../assets/fikabot-qr.svg';
import './cta.scss';

export function Cta() {
  return (
    <section id="contact" class="section section-cta">
      <div class="container cta-inner">
        <h2>Bring FikaBot to your space.</h2>
        <p>Zero cost, zero operational hassle. We handle everything — you host the future.</p>
        <div class="cta-actions">
          <a href="mailto:stessema@fikabot.se" class="btn btn-primary btn-lg">stessema@fikabot.se</a>
          <a href="tel:+46738954018" class="btn btn-outline-dark btn-lg">+46 73 895 40 18</a>
        </div>
        <div class="cta-qr">
          <img src={qrCode} alt="QR code linking to fikabot.se" width="132" height="132" />
          <span>Scan to open fikabot.se</span>
        </div>
      </div>
    </section>
  );
}
