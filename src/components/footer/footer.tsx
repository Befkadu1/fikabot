import logoMark from '../../assets/logo-mark.jpeg';
import { useT } from '../../i18n';
import './footer.scss';

export function Footer() {
  const t = useT().footer;
  const year = new Date().getFullYear();
  return (
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <img src={logoMark} alt={t.logoAlt} />
          <p>
            {t.brandLine1}
            <br />
            {t.brandLine2}
            <br />
            <a href="mailto:stessema@fikabot.se">stessema@fikabot.se</a>
            {' · '}
            <a href="tel:+46738954018">+46 73 895 40 18</a>
          </p>
        </div>
        <div class="footer-links">
          {t.links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="/privacy.html">{t.privacy}</a>
        </div>
        <p class="footer-copy">© {year} FikaBot AB. {t.rights}</p>
      </div>
    </footer>
  );
}
