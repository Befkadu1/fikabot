import { useState } from 'preact/hooks';
import { useScrolled } from '@hooks/useScrolled';
import logo from '../../assets/logo.jpeg';
import './nav.scss';

const links = [
  { href: '#benefits',  label: 'Benefits'  },
  { href: '#locations', label: 'Locations' },
  { href: '#gallery',   label: 'Gallery'   },
  { href: '#sectors',   label: 'Sectors'   },
  { href: '#about',     label: 'About'     },
  { href: '#faq',       label: 'FAQ'       },
];

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header id="nav" class={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div class="nav-inner">
        <a href="#home" class="brand" onClick={close}>
          <img src={logo} alt="FikaBot logo" class="brand-logo" />
          <span class="brand-text">
            FikaBot<small>Precision Coffee Co.</small>
          </span>
        </a>

        <button
          class="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav class={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" class="btn btn-primary btn-sm" onClick={close}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
