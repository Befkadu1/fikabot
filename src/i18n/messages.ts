export type Locale = 'en' | 'sv';

export interface Messages {
  langName: string;
  nav: {
    links: { href: string; label: string }[];
    contact: string;
  };
  hero: {
    eyebrow: string;
    h1pre: string;
    h1accent: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { stat: string; title: string; text: string }[];
  };
  locations: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { icon: string; title: string; text: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { title: string; caption: string; alt: string }[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    lede: string;
    labels: { challenge: string; solution: string; benefit: string };
    items: { emoji: string; title: string; challenge: string; solution: string; benefit: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    h3: string;
    p3pre: string;
    p3strong: string;
    p3post: string;
    cardTitle: string;
    certs: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    lede: string;
    qrLabel: string;
    qrAlt: string;
  };
  footer: {
    links: { href: string; label: string }[];
    privacy: string;
    brandLine1: string;
    brandLine2: string;
    rights: string;
    logoAlt: string;
  };
}

const en: Messages = {
  langName: 'English',
  nav: {
    links: [
      { href: '#benefits', label: 'Benefits' },
      { href: '#locations', label: 'Locations' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#sectors', label: 'Sectors' },
      { href: '#about', label: 'About' },
      { href: '#faq', label: 'FAQ' },
    ],
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Made in Skåne, Sweden',
    h1pre: 'Upgrade Your Space with the ',
    h1accent: 'Future of Automated Coffee',
    lede:
      'FikaBot AB brings premium, 24/7 robotic barista experiences to high-traffic locations across Sweden. Zero cost or operational hassle for you. Pure innovation for your visitors.',
    ctaPrimary: 'Host a FikaBot',
    ctaSecondary: 'See how it works →',
    stats: [
      { value: '50s', label: 'per cup' },
      { value: '24/7', label: 'unattended' },
      { value: '2.5 m²', label: 'footprint' },
    ],
  },
  benefits: {
    eyebrow: 'Benefits',
    title: 'The Future of Coffee',
    lede: 'Specialty coffee, brewed by a champion-grade robotic arm — built for speed, hygiene and scale.',
    items: [
      { stat: '50s', title: 'Cup speed', text: 'FikaBot is designed for ultimate convenience, making freshly brewed coffee in an average of 50 seconds per cup.' },
      { stat: '2.5 m²', title: 'Tiny footprint', text: 'Occupying less than 2.5 m², FikaBot seamlessly elevates any space with elegant design and perfect coffee artistry.' },
      { stat: '24/7', title: 'Always on', text: 'The robot barista operates non-stop, 24/7, all year round, providing stable automatic service all day.' },
      { stat: '300+', title: 'Cups per refill', text: 'With a high materials utilization rate, FikaBot makes 300+ cups on a single refill.' },
      { stat: '70+', title: 'Flavor menu', text: 'Freshly ground coffee plus customizable mocha, chocolate, matcha latte and more — 70+ recipes.' },
      { stat: '100%', title: 'Transparent', text: 'A fully visible production process — built to meet strict hygiene standards and prevent contamination.' },
    ],
  },
  locations: {
    eyebrow: 'Location Solutions',
    title: 'Where FikaBot Thrives',
    lede: 'Built for the spaces where every second counts.',
    items: [
      { icon: '🚉', title: 'Commuter Hubs & Train Stations', text: 'Relieve pressure on high-frequency transit lines. Commuters tap their card, blipp Swish and walk away with a fresh specialty coffee in under 50 seconds — no queue, no missed train.' },
      { icon: '🛍️', title: 'Shopping Malls & Retail Centers', text: 'Revitalize dead retail zones. Turn low-traffic square meters into premium, viral tech anchors that boost dwell-time and attract families and digital-native shoppers.' },
      { icon: '🎓', title: 'Universities, Offices & Hospitals', text: 'Caffeine on demand, 24/7. When campus cafeterias lock up for the night, FikaBot keeps students, late visitors and night-shift workers energized — with zero overhead for facility management.' },
    ],
  },
  gallery: {
    eyebrow: 'FikaBot in the Wild',
    title: 'Premium Cups, Served Around Sweden',
    lede: 'Real servings from FikaBot kiosks — specialty coffee, on demand, 24/7.',
    items: [
      { title: 'Signature iced caramel', caption: 'Barista-quality, poured in under a minute.', alt: 'Iced caramel FikaBot coffee held in a bright café' },
      { title: 'On brand, every cup', caption: 'Fully branded servings — your venue, our craft.', alt: 'FikaBot Precision Coffee Co. branded cup with robotic-arm logo' },
      { title: 'Brown sugar oat latte', caption: 'Spotted in the wild — Malmö Café.', alt: 'FikaBot Brown Sugar Oat Latte at a café in Malmö' },
    ],
  },
  sectors: {
    eyebrow: 'Discover FikaBot',
    title: 'Tailored Hospitality for Every Sector',
    lede: 'Designed to fit your venue — not the other way around.',
    labels: { challenge: 'Challenge', solution: 'Solution', benefit: 'Benefit' },
    items: [
      { emoji: '🛍️', title: 'Shopping Malls & Retail', challenge: 'Vacant square meters, low-traffic corridors and rising costs for traditional tenants.', solution: 'Turn underutilized floor space into a high-revenue tech anchor in under 2.5 m² — breathes life into secondary corridors and parking entrances.', benefit: 'Increases dwell-time, drives viral social traffic, and operates during all mall hours without competing with sit-down cafés.' },
      { emoji: '🎓', title: 'Universities & Higher Education', challenge: 'Students studying around the clock with limited access to quality food and drink when campus cafeterias close.', solution: 'A 24/7 robotic barista — perfect for tech-forward environments like LTH. Engineering students celebrate the automation as much as the coffee.', benefit: 'Safe, enclosed, hygienic operations that run unattended through late-night study sessions and exam season.' },
      { emoji: '🚉', title: 'Train Stations & Transit Hubs', challenge: 'Morning and afternoon rushes where commuters have under 60 seconds to grab a coffee before the train leaves.', solution: 'Built for pure transit speed — fresh-ground beans, frothed milk, perfect specialty coffee in under 50 seconds, every time.', benefit: 'Integrates with Swish and Nayax blipp. Eliminates queues and keeps trains on schedule.' },
      { emoji: '🏢', title: 'Corporate Offices & Business Parks', challenge: 'Staffed canteens are expensive and hybrid workforces make food-service traffic unpredictable.', solution: 'A premium, zero-maintenance office perk. Configurable for corporate subsidy tokens or custom employee discount codes.', benefit: 'Boosts employee satisfaction, impresses visiting clients and requires zero oversight from facility management.' },
      { emoji: '🎪', title: 'Festivals, Exhibitions & Events', challenge: 'Serving thousands rapidly in peak hours without sacrificing quality or wrangling temporary catering staff.', solution: 'Debuting officially at the Malmö Festival — engineered to thrive under pressure. Flawless portion control, 100+ gourmet drinks per hour.', benefit: 'A high-volume crowd magnet that doubles as entertainment, driving massive engagement and organic social impressions.' },
      { emoji: '🏥', title: 'Hospitals & Public Institutions', challenge: 'Visitors, patients and night-shift staff need quality refreshment when cafés are closed.', solution: 'A self-contained, food-safe kiosk with UV-C sterilization and steam flushing — runs unattended all night, every night.', benefit: 'Improves visitor experience and staff welfare without adding staffing burden or operational risk.' },
    ],
  },
  about: {
    eyebrow: 'About FikaBot AB',
    title: 'The Future of Hospitality, Rooted in Sweden.',
    p1: 'Founded in Skåne, FikaBot AB was born out of a simple vision: to revolutionize the traditional Swedish fika by merging world-class automated robotics with premium, everyday hospitality.',
    p2: "We don't just operate vending machines — we deploy fully autonomous, unmanned robotic cafés that serve barista-quality specialty coffee 24/7. FikaBot AB takes care of 100% of logistics, technical maintenance and sourcing, so property owners, municipalities and institutions can effortlessly monetize their foot traffic.",
    h3: 'Our Global Tech Partner: Hi-Dolphin Technology',
    p3pre: 'Our kiosks represent the ',
    p3strong: '6th Generation',
    p3post: " of the internationally acclaimed Cofe+ Robot Barista — developed by an elite team of automation engineers, software developers and coffee experts. Hi-Dolphin's technology is covered by dozens of global patents and is fully certified to meet strict European safety, hygiene and electrical standards.",
    cardTitle: 'Certified & Compliant',
    certs: [
      'EU safety, hygiene & electrical certifications',
      'Nayax cloud payment telemetry (Swish, Apple Pay, Google Pay, cards)',
      'UV-C sterilization + automatic steam-flush after every cup',
      'Daily restock & deep-clean handled locally by FikaBot AB',
      'Zero operational liability for venue owners',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Technology, Trust & Cleaning',
    lede: 'The exact questions every mall, university and kommun asks us — answered.',
    items: [
      { q: 'How are cleaning and refilling organized?', a: 'Daily maintenance takes less than 30 minutes. FikaBot AB manages the supply chain, restocking and deep-cleaning protocols locally — meaning venue owners have absolutely zero operational liabilities.' },
      { q: 'What are the technical prerequisites for installation?', a: 'FikaBot is a true plug-and-play unit. We only require a standard 2.5 m² floor space and a 16A/32A power outlet.' },
      { q: 'How secure are payments?', a: 'Extremely secure. FikaBot runs on cloud-managed Nayax payment telemetry, fully optimized for the Swedish market. It flawlessly accepts all international credit cards, Apple Pay, Google Pay and localized instant Swish QR-payments.' },
      { q: 'Does the robot handle hygiene safely?', a: 'Yes. The kiosk operates a completely enclosed food-safe chamber utilizing smart UV-C sterilization modules and automated internal steam-flushing cycles after every single cup.' },
      { q: 'How does the coffee quality compare to a traditional café?', a: "Stable quality is our core promise. FikaBot replicates the finesse of a champion barista 100% automatically. Unlike human baristas — who might vary grind, temperature or milk frothing day to day — the robot's mechanical precision guarantees the 300th cup tastes exactly as perfect as the very first." },
      { q: 'What kind of ingredients does FikaBot use?', a: 'Premium only: 100% freshly ground Arabica beans, fresh liquid milk (never powdered), oats and top-tier syrups — crafting everything from intense espressos to custom iced lattes.' },
      { q: 'Can customers customize their drinks?', a: 'Yes. Through the intuitive touch screen, customers customize sweetness, milk preference and coffee strength. The robot adjusts its parameters instantly — a tailor-made champion barista experience in under 50 seconds.' },
      { q: 'What is the environmental impact of hosting a FikaBot?', a: 'FikaBot operates with a zero-pollution footprint. The system is digitally optimized and completely enclosed — it grinds only the exact amount of beans and uses the exact milliliters of water required per cup, meaning zero product waste.' },
      { q: 'How energy-efficient is the robotic kiosk?', a: 'FikaBot uses an intelligent standby power matrix, consuming a fraction of the energy of a brick-and-mortar storefront. It only draws peak power when actively brewing a drink — a highly sustainable choice for modern eco-conscious facilities.' },
      { q: 'How is waste and garbage managed?', a: "FikaBot stores its organic coffee waste internally in a compressed, dry compartment. Our local team empties and cleans this compartment daily, recycling 100% of the organic waste responsibly — with zero burden on your venue's public trash systems." },
      { q: 'Will FikaBot compete with our existing café tenants?', a: 'No. FikaBot serves a fundamentally different consumer segment — high-speed commuters, impulse buyers and tech enthusiasts looking for a 50-second grab-and-go. We offer no seating or food, capture "dead hours" outside traditional café hours, sit in secondary high-traffic transition zones, and act as a tech anchor that draws younger digital-native shoppers into the venue — ultimately benefiting all tenants.' },
    ],
  },
  cta: {
    title: 'Bring FikaBot to your space.',
    lede: 'Zero cost, zero operational hassle. We handle everything — you host the future.',
    qrLabel: 'Scan to open fikabot.se',
    qrAlt: 'QR code linking to fikabot.se',
  },
  footer: {
    links: [
      { href: '#benefits', label: 'Benefits' },
      { href: '#locations', label: 'Locations' },
      { href: '#sectors', label: 'Sectors' },
      { href: '#about', label: 'About' },
      { href: '#faq', label: 'FAQ' },
    ],
    privacy: 'Privacy',
    brandLine1: 'FikaBot AB · Precision Coffee Co.',
    brandLine2: 'Skåne, Sweden',
    rights: 'All rights reserved.',
    logoAlt: 'FikaBot logo',
  },
};

const sv: Messages = {
  langName: 'Svenska',
  nav: {
    links: [
      { href: '#benefits', label: 'Fördelar' },
      { href: '#locations', label: 'Platser' },
      { href: '#gallery', label: 'Galleri' },
      { href: '#sectors', label: 'Branscher' },
      { href: '#about', label: 'Om oss' },
      { href: '#faq', label: 'FAQ' },
    ],
    contact: 'Kontakt',
  },
  hero: {
    eyebrow: 'Tillverkad i Skåne, Sverige',
    h1pre: 'Uppgradera din lokal med ',
    h1accent: 'framtidens automatiserade kaffe',
    lede:
      'FikaBot AB tar premium robotbarista-upplevelser dygnet runt till välbesökta platser i hela Sverige. Noll kostnad och inget operativt krångel för dig. Ren innovation för dina besökare.',
    ctaPrimary: 'Bli värd för en FikaBot',
    ctaSecondary: 'Se hur det fungerar →',
    stats: [
      { value: '50s', label: 'per kopp' },
      { value: '24/7', label: 'obemannad' },
      { value: '2,5 m²', label: 'yta' },
    ],
  },
  benefits: {
    eyebrow: 'Fördelar',
    title: 'Framtidens kaffe',
    lede: 'Specialkaffe, bryggt av en robotarm i mästarklass — byggt för fart, hygien och skala.',
    items: [
      { stat: '50s', title: 'Koppfart', text: 'FikaBot är byggd för maximal bekvämlighet och brygger nygjort kaffe på i genomsnitt 50 sekunder per kopp.' },
      { stat: '2,5 m²', title: 'Liten yta', text: 'På under 2,5 m² lyfter FikaBot elegant vilken plats som helst med stilren design och perfekt kaffekonst.' },
      { stat: '24/7', title: 'Alltid igång', text: 'Robotbaristan arbetar non-stop, dygnet runt, året om, och ger stabil automatisk service hela dagen.' },
      { stat: '300+', title: 'Koppar per påfyllning', text: 'Tack vare ett högt materialutnyttjande gör FikaBot 300+ koppar på en enda påfyllning.' },
      { stat: '70+', title: 'Smakmeny', text: 'Färskmalet kaffe plus anpassningsbar mocha, choklad, matcha latte med mera — 70+ recept.' },
      { stat: '100%', title: 'Transparent', text: 'En helt synlig tillverkningsprocess — byggd för att uppfylla strikta hygienkrav och förhindra kontaminering.' },
    ],
  },
  locations: {
    eyebrow: 'Platslösningar',
    title: 'Där FikaBot frodas',
    lede: 'Byggd för platserna där varje sekund räknas.',
    items: [
      { icon: '🚉', title: 'Pendlarnav & tågstationer', text: 'Avlasta trycket på högfrekventa kollektivtrafiklinjer. Pendlare blippar kortet eller Swishar och går därifrån med en nygjord specialkaffe på under 50 sekunder — ingen kö, inget missat tåg.' },
      { icon: '🛍️', title: 'Köpcentrum & handelsplatser', text: 'Återuppliva döda butiksytor. Förvandla lågtrafikerade kvadratmeter till virala premiumankare som ökar besökstiden och lockar familjer och digitalt infödda kunder.' },
      { icon: '🎓', title: 'Universitet, kontor & sjukhus', text: 'Koffein på begäran, dygnet runt. När campusmatsalarna stänger för natten håller FikaBot studenter, sena besökare och nattskiftsarbetare energiska — utan någon omkostnad för fastighetsförvaltningen.' },
    ],
  },
  gallery: {
    eyebrow: 'FikaBot i verkligheten',
    title: 'Premiumkoppar, serverade runt om i Sverige',
    lede: 'Riktiga serveringar från FikaBot-kiosker — specialkaffe på begäran, dygnet runt.',
    items: [
      { title: 'Signatur-iskaffe med karamell', caption: 'Baristakvalitet, serverad på under en minut.', alt: 'Iskaffe med karamell från FikaBot i ett ljust café' },
      { title: 'Varumärke på varje kopp', caption: 'Helt varumärkta serveringar — din lokal, vårt hantverk.', alt: 'FikaBot Precision Coffee Co.-mugg med robotarmslogga' },
      { title: 'Havrelatte med farinsocker', caption: 'Sedd i verkligheten — Malmö Café.', alt: 'FikaBot havrelatte med farinsocker på ett café i Malmö' },
    ],
  },
  sectors: {
    eyebrow: 'Upptäck FikaBot',
    title: 'Skräddarsydd gästfrihet för varje bransch',
    lede: 'Utformad för att passa din lokal — inte tvärtom.',
    labels: { challenge: 'Utmaning', solution: 'Lösning', benefit: 'Fördel' },
    items: [
      { emoji: '🛍️', title: 'Köpcentrum & handel', challenge: 'Tomma kvadratmeter, lågtrafikerade korridorer och stigande kostnader för traditionella hyresgäster.', solution: 'Förvandla outnyttjad golvyta till ett intäktsstarkt teknikankare på under 2,5 m² — blåser liv i sekundära korridorer och parkeringsentréer.', benefit: 'Ökar besökstiden, driver viral trafik i sociala medier och håller öppet under hela köpcentrets öppettider utan att konkurrera med sittcaféer.' },
      { emoji: '🎓', title: 'Universitet & högre utbildning', challenge: 'Studenter pluggar dygnet runt med begränsad tillgång till bra mat och dryck när campusmatsalarna stänger.', solution: 'En robotbarista dygnet runt — perfekt för teknikorienterade miljöer som LTH. Ingenjörsstudenterna hyllar automationen lika mycket som kaffet.', benefit: 'Säker, sluten och hygienisk drift som går obemannad genom sena pluggkvällar och tentaperioder.' },
      { emoji: '🚉', title: 'Tågstationer & resenav', challenge: 'Morgon- och eftermiddagsrusning där pendlare har under 60 sekunder på sig att ta en kaffe innan tåget går.', solution: 'Byggd för ren transithastighet — färskmalda bönor, skummad mjölk, perfekt specialkaffe på under 50 sekunder, varje gång.', benefit: 'Integreras med Swish och Nayax blipp. Eliminerar köer och håller tågen i tid.' },
      { emoji: '🏢', title: 'Företagskontor & företagsparker', challenge: 'Bemannade personalmatsalar är dyra och hybridarbete gör trafiken till matservering oförutsägbar.', solution: 'En premium kontorsförmån helt utan underhåll. Kan konfigureras för subventionspoletter eller egna personalrabattkoder.', benefit: 'Ökar medarbetarnöjdheten, imponerar på besökande kunder och kräver ingen tillsyn från fastighetsförvaltningen.' },
      { emoji: '🎪', title: 'Festivaler, mässor & evenemang', challenge: 'Att servera tusentals snabbt under rusningstid utan att tumma på kvaliteten eller jonglera tillfällig cateringpersonal.', solution: 'Gör officiell debut på Malmöfestivalen — konstruerad för att briljera under press. Felfri portionskontroll, 100+ gourmetdrycker i timmen.', benefit: 'En publikmagnet med hög kapacitet som dessutom blir underhållning och driver enormt engagemang och organisk räckvidd i sociala medier.' },
      { emoji: '🏥', title: 'Sjukhus & offentliga institutioner', challenge: 'Besökare, patienter och nattpersonal behöver bra förfriskningar när caféerna är stängda.', solution: 'En fristående, livsmedelssäker kiosk med UV-C-sterilisering och ångspolning — går obemannad hela natten, varje natt.', benefit: 'Förbättrar besöksupplevelsen och personalens välmående utan att öka bemanningsbördan eller den operativa risken.' },
    ],
  },
  about: {
    eyebrow: 'Om FikaBot AB',
    title: 'Framtidens gästfrihet, med rötter i Sverige.',
    p1: 'FikaBot AB grundades i Skåne ur en enkel vision: att revolutionera den traditionella svenska fikan genom att förena automationsrobotik i världsklass med premiumgästfrihet i vardagen.',
    p2: 'Vi driver inte bara varuautomater — vi sätter upp helt autonoma, obemannade robotcaféer som serverar specialkaffe av baristakvalitet dygnet runt. FikaBot AB sköter 100 % av logistik, teknisk drift och inköp, så att fastighetsägare, kommuner och institutioner enkelt kan tjäna pengar på sina besöksflöden.',
    h3: 'Vår globala teknikpartner: Hi-Dolphin Technology',
    p3pre: 'Våra kiosker representerar den ',
    p3strong: '6:e generationen',
    p3post: ' av den internationellt hyllade Cofe+ Robot Barista — utvecklad av ett elitteam av automationsingenjörer, mjukvaruutvecklare och kaffeexperter. Hi-Dolphins teknik skyddas av dussintals globala patent och är fullt certifierad för att uppfylla strikta europeiska krav på säkerhet, hygien och el.',
    cardTitle: 'Certifierad & godkänd',
    certs: [
      'EU-certifieringar för säkerhet, hygien och el',
      'Nayax molnbaserad betaltelemetri (Swish, Apple Pay, Google Pay, kort)',
      'UV-C-sterilisering + automatisk ångspolning efter varje kopp',
      'Daglig påfyllning & djuprengöring sköts lokalt av FikaBot AB',
      'Noll operativt ansvar för lokalägare',
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Teknik, trygghet & rengöring',
    lede: 'De exakta frågorna varje köpcentrum, universitet och kommun ställer till oss — besvarade.',
    items: [
      { q: 'Hur sköts rengöring och påfyllning?', a: 'Daglig skötsel tar mindre än 30 minuter. FikaBot AB hanterar leveranskedja, påfyllning och djuprengöring lokalt — vilket innebär att lokalägare har absolut noll operativt ansvar.' },
      { q: 'Vilka är de tekniska förutsättningarna för installation?', a: 'FikaBot är en äkta plug-and-play-enhet. Vi behöver bara en standardyta på 2,5 m² och ett eluttag på 16A/32A.' },
      { q: 'Hur säkra är betalningarna?', a: 'Extremt säkra. FikaBot körs på molnhanterad Nayax-betaltelemetri, fullt optimerad för den svenska marknaden. Den tar felfritt emot alla internationella kreditkort, Apple Pay, Google Pay och lokala direktbetalningar med Swish QR.' },
      { q: 'Hanterar roboten hygienen på ett säkert sätt?', a: 'Ja. Kiosken har en helt sluten livsmedelssäker kammare med smarta UV-C-steriliseringsmoduler och automatiska interna ångspolningscykler efter varje enskild kopp.' },
      { q: 'Hur står sig kaffekvaliteten mot ett traditionellt café?', a: 'Stabil kvalitet är vårt kärnlöfte. FikaBot återskapar en mästarbaristas finess 100 % automatiskt. Till skillnad från mänskliga baristor — som kan variera malning, temperatur eller mjölkskumning från dag till dag — garanterar robotens mekaniska precision att den 300:e koppen smakar precis lika perfekt som den allra första.' },
      { q: 'Vilka ingredienser använder FikaBot?', a: 'Endast premium: 100 % färskmalda Arabicabönor, färsk flytande mjölk (aldrig pulver), havre och förstklassiga siraper — allt från intensiva espresso till egna iskaffelatte.' },
      { q: 'Kan kunderna anpassa sina drycker?', a: 'Ja. Via den intuitiva pekskärmen anpassar kunderna sötma, mjölkval och kaffestyrka. Roboten justerar sina parametrar direkt — en skräddarsydd mästarbaristaupplevelse på under 50 sekunder.' },
      { q: 'Vilken miljöpåverkan har det att vara värd för en FikaBot?', a: 'FikaBot drivs med noll föroreningar. Systemet är digitalt optimerat och helt slutet — det maler exakt rätt mängd bönor och använder exakt antal milliliter vatten som krävs per kopp, vilket innebär noll produktsvinn.' },
      { q: 'Hur energieffektiv är robotkiosken?', a: 'FikaBot använder en intelligent standby-effektmatris och förbrukar en bråkdel av energin jämfört med en fysisk butik. Den drar topplast endast när den aktivt brygger en dryck — ett mycket hållbart val för moderna, miljömedvetna anläggningar.' },
      { q: 'Hur hanteras avfall och sopor?', a: 'FikaBot lagrar sitt organiska kaffeavfall internt i ett komprimerat, torrt fack. Vårt lokala team tömmer och rengör facket dagligen och återvinner 100 % av det organiska avfallet ansvarsfullt — utan någon belastning på lokalens allmänna sophantering.' },
      { q: 'Kommer FikaBot att konkurrera med våra befintliga caféhyresgäster?', a: 'Nej. FikaBot betjänar ett fundamentalt annat kundsegment — snabba pendlare, impulsköpare och teknikentusiaster som vill ha en grab-and-go på 50 sekunder. Vi erbjuder varken sittplatser eller mat, fångar ”döda timmar” utanför traditionella cafétider, står i sekundära högtrafikerade passagezoner och fungerar som ett teknikankare som lockar yngre, digitalt infödda besökare in i lokalen — vilket i slutändan gynnar alla hyresgäster.' },
    ],
  },
  cta: {
    title: 'Ta FikaBot till din lokal.',
    lede: 'Noll kostnad, noll operativt krångel. Vi sköter allt — du är värd för framtiden.',
    qrLabel: 'Skanna för att öppna fikabot.se',
    qrAlt: 'QR-kod som länkar till fikabot.se',
  },
  footer: {
    links: [
      { href: '#benefits', label: 'Fördelar' },
      { href: '#locations', label: 'Platser' },
      { href: '#sectors', label: 'Branscher' },
      { href: '#about', label: 'Om oss' },
      { href: '#faq', label: 'FAQ' },
    ],
    privacy: 'Integritetspolicy',
    brandLine1: 'FikaBot AB · Precision Coffee Co.',
    brandLine2: 'Skåne, Sverige',
    rights: 'Med ensamrätt.',
    logoAlt: 'FikaBot-logga',
  },
};

export const messages: Record<Locale, Messages> = { en, sv };
