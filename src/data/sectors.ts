export interface Sector {
  emoji: string;
  title: string;
  challenge: string;
  solution: string;
  benefit: string;
}

export const sectors: Sector[] = [
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
