import './about.scss';

const certs = [
  'EU safety, hygiene & electrical certifications',
  'Nayax cloud payment telemetry (Swish, Apple Pay, Google Pay, cards)',
  'UV-C sterilization + automatic steam-flush after every cup',
  'Daily restock & deep-clean handled locally by FikaBot AB',
  'Zero operational liability for venue owners',
];

export function About() {
  return (
    <section id="about" class="section section-dark">
      <div class="container about-grid">
        <div>
          <span class="eyebrow light">About FikaBot AB</span>
          <h2>The Future of Hospitality, Rooted in Sweden.</h2>
          <p>
            Founded in Skåne, FikaBot AB was born out of a simple vision: to
            revolutionize the traditional Swedish fika by merging world-class
            automated robotics with premium, everyday hospitality.
          </p>
          <p>
            We don't just operate vending machines — we deploy fully autonomous,
            unmanned robotic cafés that serve barista-quality specialty coffee
            24/7. FikaBot AB takes care of 100% of logistics, technical
            maintenance and sourcing, so property owners, municipalities and
            institutions can effortlessly monetize their foot traffic.
          </p>
          <h3>Our Global Tech Partner: Hi-Dolphin Technology</h3>
          <p>
            Our kiosks represent the <strong>6th Generation</strong> of the
            internationally acclaimed Cofe+ Robot Barista — developed by an
            elite team of automation engineers, software developers and coffee
            experts. Hi-Dolphin's technology is covered by dozens of global
            patents and is fully certified to meet strict European safety,
            hygiene and electrical standards.
          </p>
        </div>
        <div class="about-card">
          <h4>Certified & Compliant</h4>
          <ul>
            {certs.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
