// ------- TYPES -------
interface Benefit {
  stat: string;
  title: string;
  text: string;
}

interface LocationCard {
  icon: string;
  title: string;
  text: string;
}

interface Sector {
  emoji: string;
  title: string;
  challenge: string;
  solution: string;
  benefit: string;
}

interface Faq {
  q: string;
  a: string;
}

// ------- DATA -------
const benefits: Benefit[] = [
  { stat: '50s',    title: 'Cup speed',        text: 'FikaBot is designed for ultimate convenience, making freshly brewed coffee in an average of 50 seconds per cup.' },
  { stat: '2.5 m²', title: 'Tiny footprint',   text: 'Occupying less than 2.5 m², FikaBot seamlessly elevates any space with elegant design and perfect coffee artistry.' },
  { stat: '24/7',   title: 'Always on',        text: 'The robot barista operates non-stop, 24/7, all year round, providing stable automatic service all day.' },
  { stat: '300+',   title: 'Cups per refill',  text: 'With a high materials utilization rate, FikaBot makes 300+ cups on a single refill.' },
  { stat: '70+',    title: 'Flavor menu',      text: 'Freshly ground coffee plus customizable mocha, chocolate, matcha latte and more — 70+ recipes.' },
  { stat: '100%',   title: 'Transparent',      text: 'A fully visible production process — built to meet strict hygiene standards and prevent contamination.' },
];

const locations: LocationCard[] = [
  {
    icon: '🚉',
    title: 'Commuter Hubs & Train Stations',
    text: 'Relieve pressure on high-frequency transit lines. Commuters tap their card, blipp Swish and walk away with a fresh specialty coffee in under 50 seconds — no queue, no missed train.',
  },
  {
    icon: '🛍️',
    title: 'Shopping Malls & Retail Centers',
    text: 'Revitalize dead retail zones. Turn low-traffic square meters into premium, viral tech anchors that boost dwell-time and attract families and digital-native shoppers.',
  },
  {
    icon: '🎓',
    title: 'Universities, Offices & Hospitals',
    text: 'Caffeine on demand, 24/7. When campus cafeterias lock up for the night, FikaBot keeps students, late visitors and night-shift workers energized — with zero overhead for facility management.',
  },
];

const sectors: Sector[] = [
  {
    emoji: '🛍️',
    title: 'Shopping Malls & Retail',
    challenge: 'Vacant square meters, low-traffic corridors and rising costs for traditional tenants.',
    solution: 'Turn underutilized floor space into a high-revenue tech anchor in under 2.5 m² — breathes life into secondary corridors and parking entrances.',
    benefit: 'Increases dwell-time, drives viral social traffic, and operates during all mall hours without competing with sit-down cafés.',
  },
  {
    emoji: '🎓',
    title: 'Universities & Higher Education',
    challenge: 'Students studying around the clock with limited access to quality food and drink when campus cafeterias close.',
    solution: 'A 24/7 robotic barista — perfect for tech-forward environments like LTH. Engineering students celebrate the automation as much as the coffee.',
    benefit: 'Safe, enclosed, hygienic operations that run unattended through late-night study sessions and exam season.',
  },
  {
    emoji: '🚉',
    title: 'Train Stations & Transit Hubs',
    challenge: 'Morning and afternoon rushes where commuters have under 60 seconds to grab a coffee before the train leaves.',
    solution: 'Built for pure transit speed — fresh-ground beans, frothed milk, perfect specialty coffee in under 50 seconds, every time.',
    benefit: 'Integrates with Swish and Nayax blipp. Eliminates queues and keeps trains on schedule.',
  },
  {
    emoji: '🏢',
    title: 'Corporate Offices & Business Parks',
    challenge: 'Staffed canteens are expensive and hybrid workforces make food-service traffic unpredictable.',
    solution: 'A premium, zero-maintenance office perk. Configurable for corporate subsidy tokens or custom employee discount codes.',
    benefit: 'Boosts employee satisfaction, impresses visiting clients and requires zero oversight from facility management.',
  },
  {
    emoji: '🎪',
    title: 'Festivals, Exhibitions & Events',
    challenge: 'Serving thousands rapidly in peak hours without sacrificing quality or wrangling temporary catering staff.',
    solution: 'Debuting officially at the Malmö Festival — engineered to thrive under pressure. Flawless portion control, 100+ gourmet drinks per hour.',
    benefit: 'A high-volume crowd magnet that doubles as entertainment, driving massive engagement and organic social impressions.',
  },
  {
    emoji: '🏥',
    title: 'Hospitals & Public Institutions',
    challenge: 'Visitors, patients and night-shift staff need quality refreshment when cafés are closed.',
    solution: 'A self-contained, food-safe kiosk with UV-C sterilization and steam flushing — runs unattended all night, every night.',
    benefit: 'Improves visitor experience and staff welfare without adding staffing burden or operational risk.',
  },
];

const faqs: Faq[] = [
  {
    q: 'How are cleaning and refilling organized?',
    a: 'Daily maintenance takes less than 30 minutes. FikaBot AB manages the supply chain, restocking and deep-cleaning protocols locally — meaning venue owners have absolutely zero operational liabilities.',
  },
  {
    q: 'What are the technical prerequisites for installation?',
    a: 'FikaBot is a true plug-and-play unit. We only require a standard 2.5 m² floor space and a 16A/32A power outlet.',
  },
  {
    q: 'How secure are payments?',
    a: 'Extremely secure. FikaBot runs on cloud-managed Nayax payment telemetry, fully optimized for the Swedish market. It flawlessly accepts all international credit cards, Apple Pay, Google Pay and localized instant Swish QR-payments.',
  },
  {
    q: 'Does the robot handle hygiene safely?',
    a: 'Yes. The kiosk operates a completely enclosed food-safe chamber utilizing smart UV-C sterilization modules and automated internal steam-flushing cycles after every single cup.',
  },
  {
    q: 'How does the coffee quality compare to a traditional café?',
    a: "Stable quality is our core promise. FikaBot replicates the finesse of a champion barista 100% automatically. Unlike human baristas — who might vary grind, temperature or milk frothing day to day — the robot's mechanical precision guarantees the 300th cup tastes exactly as perfect as the very first.",
  },
  {
    q: 'What kind of ingredients does FikaBot use?',
    a: 'Premium only: 100% freshly ground Arabica beans, fresh liquid milk (never powdered), oats and top-tier syrups — crafting everything from intense espressos to custom iced lattes.',
  },
  {
    q: 'Can customers customize their drinks?',
    a: 'Yes. Through the intuitive touch screen, customers customize sweetness, milk preference and coffee strength. The robot adjusts its parameters instantly — a tailor-made champion barista experience in under 50 seconds.',
  },
  {
    q: 'What is the environmental impact of hosting a FikaBot?',
    a: 'FikaBot operates with a zero-pollution footprint. The system is digitally optimized and completely enclosed — it grinds only the exact amount of beans and uses the exact milliliters of water required per cup, meaning zero product waste.',
  },
  {
    q: 'How energy-efficient is the robotic kiosk?',
    a: 'FikaBot uses an intelligent standby power matrix, consuming a fraction of the energy of a brick-and-mortar storefront. It only draws peak power when actively brewing a drink — a highly sustainable choice for modern eco-conscious facilities.',
  },
  {
    q: 'How is waste and garbage managed?',
    a: "FikaBot stores its organic coffee waste internally in a compressed, dry compartment. Our local team empties and cleans this compartment daily, recycling 100% of the organic waste responsibly — with zero burden on your venue's public trash systems.",
  },
  {
    q: 'Will FikaBot compete with our existing café tenants?',
    a: 'No. FikaBot serves a fundamentally different consumer segment — high-speed commuters, impulse buyers and tech enthusiasts looking for a 50-second grab-and-go. We offer no seating or food, capture "dead hours" outside traditional café hours, sit in secondary high-traffic transition zones, and act as a tech anchor that draws younger digital-native shoppers into the venue — ultimately benefiting all tenants.',
  },
];

// ------- HELPERS -------
function qs<T extends HTMLElement = HTMLElement>(sel: string): T {
  const el = document.querySelector(sel) as T | null;
  if (!el) throw new Error(`Element not found: ${sel}`);
  return el;
}

// ------- RENDER -------
function renderBenefits(): void {
  qs('#benefitsGrid').innerHTML = benefits
    .map(
      (b) => `
    <article class="benefit-card reveal">
      <span class="stat">${b.stat}</span>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
    </article>
  `,
    )
    .join('');
}

function renderLocations(): void {
  qs('#locationsGrid').innerHTML = locations
    .map(
      (l) => `
    <article class="location-card reveal">
      <div class="icon">${l.icon}</div>
      <h3>${l.title}</h3>
      <p>${l.text}</p>
    </article>
  `,
    )
    .join('');
}

function renderSectors(): void {
  qs('#sectorsGrid').innerHTML = sectors
    .map(
      (s) => `
    <article class="sector-card reveal">
      <div class="emoji">${s.emoji}</div>
      <h3>${s.title}</h3>
      <div class="row"><strong>Challenge</strong><p>${s.challenge}</p></div>
      <div class="row"><strong>Solution</strong><p>${s.solution}</p></div>
      <div class="row"><strong>Benefit</strong><p>${s.benefit}</p></div>
    </article>
  `,
    )
    .join('');
}

function renderFaqs(): void {
  qs('#faqList').innerHTML = faqs
    .map(
      (f, i) => `
    <div class="faq-item reveal" data-index="${i}">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${f.q}</span>
        <span class="chev" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `,
    )
    .join('');

  document.querySelectorAll<HTMLDivElement>('.faq-item').forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('.faq-q');
    const panel = item.querySelector<HTMLDivElement>('.faq-a');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      panel.style.maxHeight = open ? `${panel.scrollHeight}px` : '0px';
    });
  });
}

// ------- INTERACTIONS -------
function initNav(): void {
  const nav = qs('#nav');
  const toggle = qs<HTMLButtonElement>('.nav-toggle');
  const links = qs('#navLinks');

  window.addEventListener(
    'scroll',
    () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    },
    { passive: true },
  );

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initReveal(): void {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => obs.observe(el));
}

function initYear(): void {
  qs('#year').textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  renderBenefits();
  renderLocations();
  renderSectors();
  renderFaqs();
  initNav();
  initReveal();
  initYear();
});
