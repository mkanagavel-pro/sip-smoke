import logoImg from '../assets/images/sip_smoke_logo_1790920700344.jpg';
import heroImg from '../assets/images/hero_bar_atmosphere_1790920711565.jpg';
import cosmopolitanImg from '../assets/images/cocktail_cosmopolitan_1790920724543.jpg';
import longIslandImg from '../assets/images/cocktail_long_island_1790920735367.jpg';
import nightlifeImg from '../assets/images/nightlife_dj_vibe_1790920748800.jpg';

export const ASSETS = {
  logo: logoImg,
  hero: heroImg,
  cosmopolitan: cosmopolitanImg,
  longIsland: longIslandImg,
  nightlife: nightlifeImg,
};

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ALL' | 'FOOD & DRINK' | 'VIBE' | 'MENU';
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Signature Cosmopolitan",
    category: "FOOD & DRINK",
    image: cosmopolitanImg,
    description: "Vibrant craft blend highlighted in customer reviews, served in chilled glassware.",
  },
  {
    id: "gal-2",
    title: "Bar Atmosphere & Glow",
    category: "VIBE",
    image: heroImg,
    description: "Warm amber lighting, dark marble surfaces, and intimate nightlife seating.",
  },
  {
    id: "gal-3",
    title: "Classic Long Island Iced Tea",
    category: "FOOD & DRINK",
    image: longIslandImg,
    description: "Layered spirits with artisanal ice, fresh citrus wheel, and rich amber finish.",
  },
  {
    id: "gal-4",
    title: "Sunday DJ Sessions",
    category: "VIBE",
    image: nightlifeImg,
    description: "Energetic DJ decks and pulsating weekend lounge ambience praised by guests.",
  },
  {
    id: "gal-5",
    title: "Sip & Smoke Neon Insignia",
    category: "MENU",
    image: logoImg,
    description: "The iconic neon circle emblem illuminating Ramakrishna Road.",
  },
];
