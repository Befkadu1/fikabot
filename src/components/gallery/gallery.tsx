import cupIcedCaramel from '../../assets/cup-iced-caramel.jpeg';
import cupBranded from '../../assets/cup-branded.jpeg';
import cupMalmo from '../../assets/cup-malmo.jpeg';
import './gallery.scss';

const shots = [
  {
    src: cupIcedCaramel,
    alt: 'Iced caramel FikaBot coffee held in a bright café',
    title: 'Signature iced caramel',
    caption: 'Barista-quality, poured in under a minute.',
  },
  {
    src: cupBranded,
    alt: 'FikaBot Precision Coffee Co. branded cup with robotic-arm logo',
    title: 'On brand, every cup',
    caption: 'Fully branded servings — your venue, our craft.',
  },
  {
    src: cupMalmo,
    alt: 'FikaBot Brown Sugar Oat Latte at a café in Malmö',
    title: 'Brown sugar oat latte',
    caption: 'Spotted in the wild — Malmö Café.',
  },
];

export function Gallery() {
  return (
    <section id="gallery" class="section section-alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">FikaBot in the Wild</span>
          <h2>Premium Cups, Served Around Sweden</h2>
          <p>Real servings from FikaBot kiosks — specialty coffee, on demand, 24/7.</p>
        </div>
        <div class="gallery-grid">
          {shots.map((s) => (
            <figure key={s.title} class="gallery-card reveal">
              <img src={s.src} alt={s.alt} loading="lazy" />
              <figcaption>
                <strong>{s.title}</strong>
                <span>{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
