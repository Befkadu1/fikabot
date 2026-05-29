import logo from '../../assets/logo.jpeg';
import './footer.scss';

const links = [
  { href: '#benefits',  label: 'Benefits'  },
  { href: '#locations', label: 'Locations' },
  { href: '#sectors',   label: 'Sectors'   },
  { href: '#about',     label: 'About'     },
  { href: '#faq',       label: 'FAQ'       },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <img src={logo} alt="FikaBot logo" />
          <p>
            FikaBot AB · Precision Coffee Co.
            <br />
            Skåne, Sweden
            <br />
            <a href="mailto:stessema@fikabot.se">stessema@fikabot.se</a>
            {' · '}
            <a href="tel:+46738954018">+46 73 895 40 18</a>
          </p>
        </div>
        <div class="footer-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="/privacy.html">Privacy</a>
        </div>
        <p class="footer-copy">© {year} FikaBot AB. All rights reserved.</p>
      </div>
    </footer>
  );
}
