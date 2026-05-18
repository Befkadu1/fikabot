export interface LocationCard {
  icon: string;
  title: string;
  text: string;
}

export const locations: LocationCard[] = [
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
