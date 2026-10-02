export interface BusinessInfo {
  name: string;
  brandName: string;
  subtitle: string;
  type: string;
  rating: number;
  reviewsCount: number;
  priceRange: string;
  address: {
    line1: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    plusCode: string;
    full: string;
  };
  hours: {
    listed: string;
    note: string;
  };
  googleMapsUrl: string;
  plusCodeUrl: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Sip and Smoke",
  brandName: "Sip & Smoke",
  subtitle: "The Resto Bar",
  type: "Resto Bar",
  rating: 4.6,
  reviewsCount: 434,
  priceRange: "₹200–₹1,200 per person",
  address: {
    line1: "94, Ramakrishna Rd",
    landmark: "near Balram Enclave Apartment",
    locality: "Seerangapalayam",
    city: "Salem",
    state: "Tamil Nadu",
    pincode: "636007",
    country: "India",
    plusCode: "M5C2+6GJ",
    full: "94, Ramakrishna Rd, near Balram Enclave Apartment, Seerangapalayam, Salem, Tamil Nadu 636007",
  },
  hours: {
    listed: "Open · Closes 11:30 PM",
    note: "Listed hours: Until 11:30 PM (Holiday hours may vary)",
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sip+and+Smoke+The+Resto+Bar+Ramakrishna+Rd+Seerangapalayam+Salem",
  plusCodeUrl: "https://www.google.com/maps?q=M5C2%2B6GJ+Salem,+Tamil+Nadu",
};

export interface ReviewTheme {
  id: string;
  title: string;
  summary: string;
  tag: string;
}

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: "food",
    title: "Delicious Food",
    summary: "Customers highlight the flavorful food and unlimited side dishes accompanied with dining.",
    tag: "Dining",
  },
  {
    id: "cocktails",
    title: "Craft Cocktails",
    summary: "Diners frequently mention a well-curated cocktail menu featuring favorites like Cosmopolitan and Long Island Iced Tea.",
    tag: "Bar & Drinks",
  },
  {
    id: "sunday-dj",
    title: "Sunday Night DJ",
    summary: "Sunday nights with DJ music and lively dance-worthy energy are consistently highlighted by guests.",
    tag: "Nightlife",
  },
  {
    id: "ambience",
    title: "Lively Ambience",
    summary: "Visitors praise the energetic nightlife atmosphere, moody lighting, and weekend music vibes.",
    tag: "Atmosphere",
  },
  {
    id: "service",
    title: "Attentive Staff",
    summary: "Attentive hospitality and proactive staff response are highlighted across dining reviews.",
    tag: "Hospitality",
  },
];

export interface ExperiencePillar {
  id: string;
  title: string;
  description: string;
  tagline: string;
}

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: "food",
    title: "FOOD",
    tagline: "Flavorful Pairings",
    description: "Delicious food designed for a relaxed night out, paired with complimentary sides that elevate every drink.",
  },
  {
    id: "cocktails",
    title: "COCKTAILS",
    tagline: "Curated Mixology",
    description: "A well-curated cocktail experience crafted by passionate bartenders for high-spirited celebrations.",
  },
  {
    id: "music",
    title: "MUSIC",
    tagline: "Weekend Energy",
    description: "A lively atmosphere with upbeat tracks and high-energy Sunday DJ nights highlighted by customer reviews.",
  },
  {
    id: "ambience",
    title: "AMBIENCE",
    tagline: "Moody & Cinematic",
    description: "A moody and energetic resto-bar environment with warm amber glows, subtle smoke, and deep velvet shadows.",
  },
];

export interface WhyReason {
  num: string;
  title: string;
  description: string;
}

export const WHY_REASONS: WhyReason[] = [
  {
    num: "01",
    title: "Resto Bar Experience",
    description: "A seamless fusion of gourmet dining and evening lounge culture in Salem.",
  },
  {
    num: "02",
    title: "Cocktail Selection",
    description: "Celebrated concoctions like the Cosmopolitan and Long Island Iced Tea that anchor memorable evenings.",
  },
  {
    num: "03",
    title: "Lively Ambience",
    description: "Intimate warm-glow interiors engineered for conversation, celebrations, and late-night unwinding.",
  },
  {
    num: "04",
    title: "Sunday DJ Nights",
    description: "High-octane weekend sessions with DJ beats that transform the venue into Salem's nightlife destination.",
  },
  {
    num: "05",
    title: "Food & Side Dishes",
    description: "Generous culinary offerings and unlimited side dishes noted by enthusiastic diners.",
  },
  {
    num: "06",
    title: "Salem Nightlife",
    description: "Centrally positioned on Ramakrishna Road, bringing metropolitan resto-bar energy to Tamil Nadu.",
  },
];
