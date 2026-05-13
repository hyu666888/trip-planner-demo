export interface Destination {
  id: string
  name: string
  country: string
  emoji: string
  draw: string
  packingItems: string[]
}

export const destinations: Destination[] = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    emoji: '🌸',
    draw: 'Cherry blossoms and neon-lit alleys',
    packingItems: ['JR Pass for the bullet train', 'IC card (Suica/Pasmo)', 'Portable Wi-Fi or SIM card'],
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    emoji: '🛸',
    draw: 'Pastel tiles and Atlantic sunsets',
    packingItems: ['Comfortable walking shoes for the hills', 'Light layers for sea breeze', 'Reusable water bottle'],
  },
  {
    id: 'reykjavik',
    name: 'Reykjavík',
    country: 'Iceland',
    emoji: '🌌',
    draw: 'Northern lights over volcanic lava fields',
    packingItems: ['Thermal base layers', 'Waterproof shell jacket', 'Sturdy waterproof boots'],
  },
  {
    id: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    emoji: '🐪',
    draw: 'Pharaohs, spice souks, and the Nile at dusk',
    packingItems: ['Sunscreen SPF 50+', 'Modest cover-up clothing', 'Cash in Egyptian pounds'],
  },
  {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    emoji: '💃',
    draw: 'Tango, steak, and grand Belle Époque boulevards',
    packingItems: ['Smart-casual clothes for milongas', 'Universal power adapter', 'A good appetite'],
  },
  {
    id: 'banff',
    name: 'Banff',
    country: 'Canada',
    emoji: '🏔️',
    draw: 'Turquoise glacial lakes framed by the Rockies',
    packingItems: ['National Parks pass', 'Bear spray (rent locally)', 'Merino wool socks'],
  },
]
