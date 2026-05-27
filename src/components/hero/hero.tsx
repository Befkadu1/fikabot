import fikabotVideo from '../../assets/fikabot.mp4';
import './hero.scss';

const stats = [
  { value: '50s',    label: 'per cup' },
  { value: '24/7',   label: 'unattended' },
  { value: '2.5 m²', label: 'footprint' },
];

export function Hero() {
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
        <span class="eyebrow light">Made in Skåne, Sweden</span>
        <h1>
          Upgrade Your Space with the{' '}
          <span class="accent">Future of Automated Coffee</span>
        </h1>
        <p class="lede">
          FikaBot AB brings premium, 24/7 robotic barista experiences to
          high-traffic locations across Sweden. Zero cost or operational
          hassle for you. Pure innovation for your visitors.
        </p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary btn-lg">Host a FikaBot</a>
          <a href="#benefits" class="btn btn-ghost btn-lg">See how it works →</a>
        </div>
        <ul class="hero-mini">
          {stats.map((s) => (
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
