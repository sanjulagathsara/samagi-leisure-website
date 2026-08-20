export type PropertyType = "beach" | "hill" | "city";

export type Room = {
  id: string;
  name: string;
  description: string;
  occupancy: { adults: number; children?: number };
  sizeSqm: number;
  amenities: string[];
  nightlyRate: number;
  image: string;
  imageAlt: string;
};

export type DiningVenue = {
  name: string;
  description: string;
  hours: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: "stays" | "dining" | "wellness" | "events" | "landscape";
  propertySlug?: string;
};

export type Property = {
  slug: string;
  name: string;
  location: string;
  region: string;
  type: PropertyType;
  typeLabel: string;
  tagline: string;
  shortDescription: string;
  description: string;
  startingRate: number;
  heroImage: string;
  heroAlt: string;
  gallery: GalleryImage[];
  amenities: string[];
  rooms: Room[];
  dining: DiningVenue[];
  address: string;
  mapEmbedQuery: string;
};

export type Experience = {
  slug: string;
  name: string;
  category: "spa" | "dining" | "tours" | "wellness" | "activities";
  summary: string;
  description: string;
  duration: string;
  availableAt: string[];
  image: string;
  imageAlt: string;
};

export type EventVenue = {
  name: string;
  propertySlug: string;
  setting: string;
  capacity: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type EventPackage = {
  name: string;
  guests: string;
  summary: string;
  inclusions: string[];
};

export type Offer = {
  slug: string;
  name: string;
  season: string;
  summary: string;
  description: string;
  validThrough: string;
  perks: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
  stay: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type LocaleOption = {
  code: string;
  label: string;
  enabled: boolean;
};
