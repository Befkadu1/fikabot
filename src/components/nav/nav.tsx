import { useState } from 'preact/hooks';
import { useScrolled } from '@hooks/useScrolled';
import { useLocale, useT } from '../../i18n';
import logoMark from '../../assets/logo-mark.jpeg';
import './nav.scss';

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = useT().nav;

  const close = () => setOpen(false);

  return (
    <header id="nav" class={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div class="nav-inner">
        <a href="#home" class="brand" onClick={close}>
          <img src={logoMark} alt="FikaBot logo" class="brand-logo" />
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
          {t.links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <div class="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              class={locale === 'en' ? 'active' : ''}
              aria-pressed={locale === 'en'}
              aria-label="English"
              onClick={() => setLocale('en')}
            >
              <span class="flag" aria-hidden="true">🇬🇧</span>EN
            </button>
            <button
              type="button"
              class={locale === 'sv' ? 'active' : ''}
              aria-pressed={locale === 'sv'}
              aria-label="Svenska"
              onClick={() => setLocale('sv')}
            >
              <span class="flag" aria-hidden="true">🇸🇪</span>SV
            </button>
          </div>
          <a href="#contact" class="btn btn-primary btn-sm" onClick={close}>{t.contact}</a>
        </nav>
      </div>
    </header>
  );
}
