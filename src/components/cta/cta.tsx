import { useState } from 'preact/hooks';
import qrCode from '../../assets/fikabot-qr.svg';
import { useT } from '../../i18n';
import './cta.scss';

const CONTACT_EMAIL = 'stessema@fikabot.se';
const CONTACT_PHONE = '+46738954018';
const CONTACT_PHONE_LABEL = '+46 73 895 40 18';

// Web3Forms relays submissions to the FikaBot inbox. The access key is safe to
// ship publicly — it only permits sending to the verified stessema@fikabot.se
// address. Free tier covers 250 submissions/month. Manage at web3forms.com.
const WEB3FORMS_ACCESS_KEY = '568eee82-3321-4f57-983e-f6e4264d9215';
const ENDPOINT = 'https://api.web3forms.com/submit';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export function Cta() {
  const t = useT().cta;
  const f = t.form;
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const company = String(data.get('company') ?? '').trim();

    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('from_name', 'FikaBot website');
    data.append('subject', company ? `${f.subject} — ${company}` : f.subject);

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" class="section section-cta">
      <div class="container cta-inner">
        <h2>{t.title}</h2>
        <div class="cta-lede">
          {t.lede.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        {status === 'ok' ? (
          <p class="form-success" role="status">{f.success}</p>
        ) : (
          <form class="contact-form" onSubmit={handleSubmit}>
            <p class="form-required-note"><span class="req">*</span> {f.requiredNote}</p>

            {/* Honeypot — hidden from real users, catches spam bots */}
            <input type="checkbox" name="botcheck" class="sr-only" tabIndex={-1} autocomplete="off" />

            <div class="field">
              <label class="sr-only" for="cf-name">{f.name}</label>
              <input id="cf-name" name="name" type="text" autocomplete="name"
                placeholder={`${f.name} *`} required />
            </div>
            <div class="field">
              <label class="sr-only" for="cf-email">{f.email}</label>
              <input id="cf-email" name="email" type="email" autocomplete="email"
                placeholder={`${f.email} *`} required />
            </div>
            <div class="field">
              <label class="sr-only" for="cf-company">{f.company}</label>
              <input id="cf-company" name="company" type="text" autocomplete="organization"
                placeholder={`${f.company} *`} required />
            </div>
            <div class="field">
              <label class="sr-only" for="cf-website">{f.website}</label>
              <input id="cf-website" name="website" type="url" autocomplete="url"
                placeholder={`${f.website} * (https://)`} required />
            </div>
            <div class="field">
              <label class="sr-only" for="cf-phone">{f.phone}</label>
              <input id="cf-phone" name="phone" type="tel" autocomplete="tel"
                placeholder={`${f.phone} *`} required />
            </div>
            <div class="field">
              <label class="sr-only" for="cf-message">{f.message}</label>
              <textarea id="cf-message" name="message" rows={5}
                placeholder={f.message} />
            </div>

            <label class="form-consent">
              <input type="checkbox" name="consent" required />
              <span>
                {f.consentPre}
                <a href="/privacy.html" target="_blank" rel="noopener"
                  onClick={(e) => e.stopPropagation()}>{f.privacy}</a>
                {f.consentPost}
              </span>
            </label>

            <button type="submit" class="btn btn-primary btn-lg" disabled={status === 'sending'}>
              {status === 'sending' ? f.sending : f.send}
            </button>

            {status === 'error' && (
              <p class="form-note form-error" role="alert">
                {f.errorPre}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                {f.errorPost}
              </p>
            )}
          </form>
        )}

        <div class="cta-alt">
          <p>{f.orReach}</p>
          <div class="cta-actions">
            <a href={`mailto:${CONTACT_EMAIL}`} class="btn btn-primary btn-lg">{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE}`} class="btn btn-outline-dark btn-lg">{CONTACT_PHONE_LABEL}</a>
          </div>
        </div>

        <div class="cta-qr">
          <img src={qrCode} alt={t.qrAlt} width="132" height="132" />
          <span>{t.qrLabel}</span>
        </div>
      </div>
    </section>
  );
}
