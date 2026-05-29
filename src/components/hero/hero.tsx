import fikabotVideo from '../../assets/fikabot.mp4';
import { useT } from '../../i18n';
import './hero.scss';

export function Hero() {
  const t = useT().hero;
  return (
    <section id="home" class="hero">
      <video
        class="hero-video"
        src={fikabotVideo}
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        aria-hidden="true"
      />
      <div class="hero-overlay" aria-hidden="true" />

      <div class="container hero-content">
        <span class="eyebrow light">{t.eyebrow}</span>
        <h1>
          {t.h1pre}
          <span class="accent">{t.h1accent}</span>
        </h1>
        <p class="lede">{t.lede}</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary btn-lg">{t.ctaPrimary}</a>
          <a href="#benefits" class="btn btn-ghost btn-lg">{t.ctaSecondary}</a>
        </div>
        <ul class="hero-mini">
          {t.stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
