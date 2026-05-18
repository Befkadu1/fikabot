import robotCafe from '../../assets/robot-cafe.jpeg';
import './Hero.scss';

const stats = [
  { value: '50s',    label: 'per cup' },
  { value: '24/7',   label: 'unattended' },
  { value: '2.5 m²', label: 'footprint' },
];

export function Hero() {
  return (
    <section id="home" class="hero">
      <div class="hero-bg" aria-hidden="true" />
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Made in Skåne · Powered by Hi-Dolphin</span>
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
            <a href="#contact" class="btn btn-primary">Host a FikaBot</a>
            <a href="#benefits" class="btn btn-ghost">See how it works →</a>
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
        <div class="hero-visual">
          <img src={robotCafe} alt="FikaBot Robot Café kiosk" />
        </div>
      </div>
    </section>
  );
}
