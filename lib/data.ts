/**
 * SAMPLE CONTENT
 * Room types, rates, and photography below are placeholders for Southern
 * Riviera Resort Mirissa. Swap details in this file when going live.
 * Images are from Unsplash unless noted otherwise.
 */

import { site } from "./site";
import type {
  EventPackage,
  EventVenue,
  Experience,
  GalleryImage,
  Offer,
  Property,
  TeamMember,
  Testimonial,
} from "./types";
import { unsplash } from "./utils";

export const MIRISSA_SLUG = "southern-riviera-resort-mirissa";

export const properties: Property[] = [
  {
    slug: MIRISSA_SLUG,
    name: "Southern Riviera Resort Mirissa",
    location: "Mirissa",
    region: "Southern Province",
    type: "beach",
    typeLabel: "Beach resort",
    tagline: "The south coast, gathered under one roof.",
    shortDescription:
      "Samagi Leisure’s house on the Mirissa shore — a beach resort for unhurried stays, whale-season mornings, and celebrations by the Indian Ocean.",
    description:
      "Southern Riviera Resort Mirissa is the first house of Samagi Leisure: a south-coast resort set between coconut grove and sea, a short walk from Mirissa’s bay. Days here follow the tide — breakfast facing the water, a swim before the heat, whale boats leaving the harbour at first light, and a table that fills as the sky turns copper. The house is built for gathering: families, wedding parties, friends returning to the island. Rooms keep the shutters open to the monsoon breeze. The kitchen cooks from the nearest market. Nothing is staged; the welcome is Sri Lankan, and personal.",
    startingRate: 180,
    heroImage: site.heroImage,
    heroAlt: site.heroImageAlt,
    gallery: [
      {
        src: site.heroImage,
        alt: site.heroImageAlt,
        category: "stays",
        propertySlug: MIRISSA_SLUG,
      },
      {
        src: unsplash("photo-1507525428034-b723cf961d3e"),
        alt: "Mirissa-style tropical beach at golden hour",
        category: "landscape",
        propertySlug: MIRISSA_SLUG,
      },
      {
        src: unsplash("photo-1582719478250-c89cae4dc85b"),
        alt: "Luxury pool at dusk",
        category: "stays",
        propertySlug: MIRISSA_SLUG,
      },
      {
        src: unsplash("photo-1414235077428-338989a2e8c0"),
        alt: "Fine dining table with candlelight",
        category: "dining",
        propertySlug: MIRISSA_SLUG,
      },
      {
        src: unsplash("photo-1544161515-4ab6ce6db874"),
        alt: "Spa treatment room with warm lighting",
        category: "wellness",
        propertySlug: MIRISSA_SLUG,
      },
      {
        src: unsplash("photo-1519741497674-611481863552"),
        alt: "Wedding ceremony flowers and aisle",
        category: "events",
        propertySlug: MIRISSA_SLUG,
      },
    ],
    amenities: [
      "Swimming pool and sun lawn",
      "Ayurvedic spa treatments",
      "Walk to Mirissa Beach",
      "Whale-watching boat desk in season",
      "In-room dining until midnight",
      "Complimentary bicycles",
      "Yoga on the lawn at dawn",
      "Airport and Galle transfers",
    ],
    rooms: [
      {
        id: "ocean-deluxe",
        name: "Ocean Deluxe",
        description:
          "A light-filled room with a deep balcony, teak shutters, and a direct line to the sound of the surf.",
        occupancy: { adults: 2 },
        sizeSqm: 38,
        amenities: ["King bed", "Rain shower", "Ocean balcony", "Air conditioning"],
        nightlyRate: 180,
        image: unsplash("photo-1611892440504-42a792e24d32"),
        imageAlt: "Bright luxury hotel bedroom with white linens",
      },
      {
        id: "garden-suite",
        name: "Garden Suite",
        description:
          "A sitting room and bedroom opening onto the coconut garden, with a soaking tub and space to linger after the beach.",
        occupancy: { adults: 2, children: 1 },
        sizeSqm: 58,
        amenities: ["King bed", "Soaking tub", "Garden sala", "Stocked minibar"],
        nightlyRate: 245,
        image: unsplash("photo-1590490360182-c33d57733427"),
        imageAlt: "Hotel suite with seating area and warm wood tones",
      },
      {
        id: "family-villa",
        name: "Family Villa",
        description:
          "A two-bedroom villa for families and friends who want their own garden, a plunge of shade, and a table of their own.",
        occupancy: { adults: 4, children: 2 },
        sizeSqm: 95,
        amenities: ["Two bedrooms", "Private garden", "Kitchenette", "Outdoor shower"],
        nightlyRate: 390,
        image: unsplash("photo-1571896349842-33c89424de2d"),
        imageAlt: "Tropical villa pool surrounded by loungers",
      },
    ],
    dining: [
      {
        name: "The Riviera Table",
        description:
          "Open-air seafood and island produce: grilled fish from the harbour, hoppers at breakfast, mallung, and a short list of Ceylon arrack cocktails.",
        hours: "Breakfast 7–11 · Lunch 12–15 · Dinner 18–22",
      },
      {
        name: "Pool Bar",
        description:
          "A quiet counter for sunset drinks, fresh king coconut, and small plates to share between swims.",
        hours: "11–23",
      },
    ],
    address: "Harbour Road, Mirissa 81740, Sri Lanka",
    mapEmbedQuery: "Mirissa Beach, Sri Lanka",
  },
];

export const experiences: Experience[] = [
  {
    slug: "ayurveda-spa",
    name: "Samagi Ayurveda",
    category: "spa",
    summary: "Oil, steam, and quiet rooms guided by a resident physician.",
    description:
      "Treatments follow classical Ayurveda rather than a spa menu of trends. Consultations, abhyanga, shirodhara, and herbal steam are offered at Southern Riviera Resort Mirissa — prescribed, not upsold.",
    duration: "60–120 minutes",
    availableAt: [MIRISSA_SLUG],
    image: unsplash("photo-1544161515-4ab6ce6db874"),
    imageAlt: "Calm spa room prepared for an oil treatment",
  },
  {
    slug: "coastal-table",
    name: "The coastal table",
    category: "dining",
    summary: "Seafood, hoppers, and a long table facing the south coast.",
    description:
      "Dinner can be a private table in the garden or on the lawn: grilled fish from Mirissa harbour, mallung, and hoppers made to order. Hopper nights run when the house is full of family.",
    duration: "Evening",
    availableAt: [MIRISSA_SLUG],
    image: unsplash("photo-1414235077428-338989a2e8c0"),
    imageAlt: "Candlelit dining table set for a gathering",
  },
  {
    slug: "whale-watching",
    name: "Whale morning",
    category: "tours",
    summary: "A harbour departure at first light, in season, with tea on the way back.",
    description:
      "Mirissa is one of the island’s whale-watching harbours. We hold a quiet boat with a trusted skipper — blue whales when the season allows, dolphins more often — and return in time for a late breakfast. Sample seasonal offering; dates follow the sea.",
    duration: "Half day, November – April",
    availableAt: [MIRISSA_SLUG],
    image: unsplash("photo-1476514525535-07fb3b4ae5f1"),
    imageAlt: "Boat on calm tropical water at sunrise",
  },
  {
    slug: "dawn-yoga",
    name: "Dawn yoga",
    category: "wellness",
    summary: "Unhurried asana on the lawn before the heat.",
    description:
      "Small-group yoga at first light, facing the coconut line. Mats, tea, and a quiet half hour afterward are part of the hour. Private sessions can be arranged.",
    duration: "60 minutes",
    availableAt: [MIRISSA_SLUG],
    image: unsplash("photo-1544367567-0f2fcb009e0b"),
    imageAlt: "Sunrise yoga overlooking a tropical view",
  },
  {
    slug: "coast-walk",
    name: "Bay and secret beach",
    category: "activities",
    summary: "A guided walk to Parrot Rock, the bay, and a quieter stretch of sand.",
    description:
      "A resident host leads a slow morning along Mirissa’s shore: the fishing harbour, Parrot Rock at low tide, and a swim where the water is still. Returns before lunch.",
    duration: "2–3 hours",
    availableAt: [MIRISSA_SLUG],
    image: unsplash("photo-1507525428034-b723cf961d3e"),
    imageAlt: "Tropical shoreline at golden hour",
  },
  {
    slug: "kitchen-hours",
    name: "Hours in the kitchen",
    category: "dining",
    summary: "Cook hoppers, sambols, and a south-coast curry with our chefs.",
    description:
      "A hands-on morning in the kitchen: market herbs, a coconut scraped by hand, and a meal you sit down to eat. Coastal cooking — fish, mallung, and a proper hopper.",
    duration: "3 hours",
    availableAt: [MIRISSA_SLUG],
    image: unsplash("photo-1559339352-11d035aa65de"),
    imageAlt: "Chef-plated Sri Lankan inspired dish",
  },
];

export const eventVenues: EventVenue[] = [
  {
    name: "Ocean lawn",
    propertySlug: MIRISSA_SLUG,
    setting: "Beach garden",
    capacity: "Up to 150 guests",
    description:
      "Ceremonies on the lawn at golden hour, dinner under lights, and dancing as the tide comes in. A natural aisle of temple flowers, and rooms held for the wedding party.",
    image: unsplash("photo-1519741497674-611481863552"),
    imageAlt: "Outdoor wedding ceremony aisle with flowers",
  },
  {
    name: "Pool pavilion",
    propertySlug: MIRISSA_SLUG,
    setting: "Poolside",
    capacity: "Up to 80 guests",
    description:
      "An intimate blessing or dinner beside the pool, suited to smaller families and the night before a larger celebration.",
    image: unsplash("photo-1465495976277-4387d4b0b4c6"),
    imageAlt: "Garden wedding table in natural light",
  },
  {
    name: "Garden terrace",
    propertySlug: MIRISSA_SLUG,
    setting: "Coconut grove",
    capacity: "Up to 40 guests",
    description:
      "A close table in the garden for rehearsal dinners, blessings, and gatherings that should feel like a private house.",
    image: unsplash("photo-1519225421980-715cb0215aed"),
    imageAlt: "Intimate indoor wedding reception",
  },
];

export const eventPackages: EventPackage[] = [
  {
    name: "Intimate",
    guests: "Up to 40",
    summary: "A close table, a blessing, and a house that feels like your own.",
    inclusions: [
      "Venue for ceremony and dinner",
      "Menu tasting for two",
      "Floral for the table and aisle",
      "Two complimentary rooms for the couple",
    ],
  },
  {
    name: "Garden",
    guests: "Up to 80",
    summary: "The classic Samagi wedding at Mirissa: lawn, pavilion, and a night that stretches.",
    inclusions: [
      "Lawn and pavilion access",
      "Coordinated catering and bar",
      "Bridal suite the night before",
      "Preferred room rates for guests",
    ],
  },
  {
    name: "Grand gathering",
    guests: "Up to 150",
    summary: "A larger celebration on the ocean lawn, with space for dance, dinner, and an extended family stay.",
    inclusions: [
      "Exclusive use of selected house areas",
      "Dedicated events host",
      "Stage and lighting plan",
      "Breakfast the following morning for all guests",
    ],
  },
];

export const offers: Offer[] = [
  {
    slug: "monsoon-stillness",
    name: "Monsoon stillness",
    season: "May – September",
    summary: "Quieter days, fuller spa hours, and a slower Mirissa.",
    description:
      "When the southwest monsoon arrives, the bay empties and the house becomes a retreat. This stay includes daily Ayurveda, breakfast, and late checkout. Sample seasonal package — dates and inclusions will change.",
    validThrough: "30 September 2026",
    perks: ["Daily breakfast", "One 90-minute treatment each", "Late checkout", "In-room tea tray"],
    image: unsplash("photo-1507525428034-b723cf961d3e"),
    imageAlt: "Overcast tropical beach during monsoon season",
    featured: true,
  },
  {
    slug: "wedding-moon",
    name: "Wedding moon",
    season: "Year-round",
    summary: "Three nights after the celebration, held for the couple alone.",
    description:
      "A quiet add-on for couples marrying with us at Southern Riviera: three nights in a suite, a private dinner, and a morning treatment.",
    validThrough: "Open dates",
    perks: ["Three nights in a suite", "Private dinner", "Couple’s treatment", "Airport transfer"],
    image: unsplash("photo-1519741497674-611481863552"),
    imageAlt: "Wedding floral arch at dusk",
  },
  {
    slug: "family-table",
    name: "Family table",
    season: "School holidays",
    summary: "Connecting rooms, a children’s beach hour, and a table that fits everyone.",
    description:
      "Designed for multi-generational stays at Mirissa. Includes a villa or connecting rooms, a guided shore walk for younger guests, and a family-style dinner one evening.",
    validThrough: "Selected holiday dates in 2026",
    perks: ["Connecting or villa stay", "Children’s beach hour", "Family dinner", "Extra beds at no charge"],
    image: unsplash("photo-1571896349842-33c89424de2d"),
    imageAlt: "Family-friendly villa pool",
  },
  {
    slug: "weekday-pause",
    name: "Weekday pause",
    season: "Sunday – Thursday",
    summary: "Two midweek nights on the south coast, with breakfast facing the water.",
    description:
      "A simple midweek stay at Southern Riviera Resort Mirissa: ocean deluxe or garden suite, breakfast, and a late checkout on Thursday. Sample coastal offer for demonstration.",
    validThrough: "Ongoing, excluding public holidays",
    perks: ["Breakfast daily", "Late checkout", "Airport transfer one way"],
    image: unsplash("photo-1582719478250-c89cae4dc85b"),
    imageAlt: "Resort pool at dusk",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We married on the Mirissa lawn at five o’clock. The light, the sea, and the way the staff moved — nothing felt staged. Our families still talk about the hoppers at midnight.",
    name: "Amelia & Sahan",
    origin: "London & Colombo",
    stay: "Wedding at Southern Riviera Resort Mirissa",
  },
  {
    quote:
      "Mirissa was the pause we needed. Whale boats at dawn, a swim before breakfast, and a table that held three generations without fuss. It felt like staying with someone who knows the coast.",
    name: "The Wijesinghe family",
    origin: "Melbourne",
    stay: "Four nights at Southern Riviera",
  },
  {
    quote:
      "I came for two nights after Galle and stayed five. The garden suite, the crab at dinner, and a concierge who actually listened — I’ll book it again between the harbour and the airport.",
    name: "Priya Menon",
    origin: "Mumbai",
    stay: "Southern Riviera Resort Mirissa",
  },
  {
    quote:
      "We brought a small leadership group to the south coast. The house held us without feeling like a conference. Conversations happened on the lawn, not in a ballroom.",
    name: "James Okonkwo",
    origin: "Singapore",
    stay: "Retreat at Southern Riviera",
  },
];

export const team: TeamMember[] = [
  {
    name: "Anjali Perera",
    role: "Founder & host",
    bio: "Anjali grew up between Colombo and the south coast. Samagi began as a wish to offer Sri Lankan hospitality without the stiffness of a resort chain — a house in Mirissa that feels gathered, not staged.",
    image: unsplash("photo-1573496359142-b8d87734a5a2", 800),
    imageAlt: "Portrait of Anjali Perera, founder of Samagi Leisure",
  },
  {
    name: "Dinesh Jayawardena",
    role: "General manager",
    bio: "Dinesh oversees Southern Riviera Resort Mirissa and the quiet logistics that make a stay feel effortless: transfers, timings, and the particular way a room is left before you arrive.",
    image: unsplash("photo-1560250097-0b93528c311a", 800),
    imageAlt: "Portrait of Dinesh Jayawardena, general manager",
  },
  {
    name: "Chef Nimali Fernando",
    role: "Culinary director",
    bio: "Nimali trained in Colombo and Copenhagen, then came home to cook food that tastes of the south coast: hoppers, grilled fish, garden vegetables, and a breakfast worth getting up for.",
    image: unsplash("photo-1580489944761-15a19d654956", 800),
    imageAlt: "Portrait of Chef Nimali Fernando",
  },
  {
    name: "Dr. Kavindi Silva",
    role: "Wellness lead",
    bio: "An Ayurvedic physician who shapes the spa at Mirissa. Treatments are prescribed, not upsold — oil, rest, and the right silence after a day on the water.",
    image: unsplash("photo-1559839734-2b71ea197ec2", 800),
    imageAlt: "Portrait of Dr. Kavindi Silva, wellness lead",
  },
];

export const gallery: GalleryImage[] = [
  ...properties.flatMap((property) => property.gallery),
  {
    src: unsplash("photo-1544367567-0f2fcb009e0b"),
    alt: "Dawn yoga overlooking water",
    category: "wellness",
  },
  {
    src: unsplash("photo-1476514525535-07fb3b4ae5f1"),
    alt: "Boat on still tropical water",
    category: "landscape",
  },
  {
    src: unsplash("photo-1519225421980-715cb0215aed"),
    alt: "Wedding table with candles",
    category: "events",
  },
];

export const values = [
  {
    title: "Unity",
    sinhala: "සමගි",
    text: "Samagi means togetherness. We design rooms, tables, and ceremonies so that people actually meet — families, wedding parties, friends who have been apart too long.",
  },
  {
    title: "Hospitality",
    sinhala: "ආගන්තුක සත්කාරය",
    text: "Sri Lankan welcome is not a script. It is attention: names remembered, tea at the right hour, a driver who waits without being asked.",
  },
  {
    title: "Nature",
    sinhala: "සොබාදහම",
    text: "The house lives with the south coast — coconut light, monsoon air, and the harbour at first light. We keep the buildings low and the gardens generous.",
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getPropertyName(slug: string) {
  return getProperty(slug)?.name ?? slug;
}
