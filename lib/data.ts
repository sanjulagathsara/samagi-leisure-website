/**
 * SAMPLE CONTENT
 * Everything in this file is fictional placeholder data for the Samagi Leisure
 * marketing site. Swap names, rates, photographs, and copy here when going live.
 * Images are from Unsplash and used as stand-ins for original photography.
 */

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

export const properties: Property[] = [
  {
    slug: "samagi-bentota",
    name: "Samagi Bentota",
    location: "Bentota",
    region: "Southern Province",
    type: "beach",
    typeLabel: "Beach resort",
    tagline: "Where the river meets the Indian Ocean.",
    shortDescription:
      "A low-slung beach house on the Bentota estuary, with lagoon light, a long pool, and seafood at dusk.",
    description:
      "Samagi Bentota sits where the river slows into the sea. Cinnamon-scented gardens open onto a pale stretch of sand, and the house itself is built for gathering: shaded verandas, a pavilion over the water, and rooms that keep the shutters open to the monsoon breeze. Days here are unhurried — a swim, a boat along the lagoon, a table that fills as the sky turns copper.",
    startingRate: 220,
    heroImage: unsplash("photo-1520250497591-112f2f40a3f4"),
    heroAlt: "Palm-lined resort pool at a tropical beach hotel",
    gallery: [
      {
        src: unsplash("photo-1520250497591-112f2f40a3f4"),
        alt: "Resort pool framed by palms",
        category: "stays",
        propertySlug: "samagi-bentota",
      },
      {
        src: unsplash("photo-1507525428034-b723cf961d3e"),
        alt: "Bentota-style tropical beach at golden hour",
        category: "landscape",
        propertySlug: "samagi-bentota",
      },
      {
        src: unsplash("photo-1582719478250-c89cae4dc85b"),
        alt: "Luxury pool villa at dusk",
        category: "stays",
        propertySlug: "samagi-bentota",
      },
      {
        src: unsplash("photo-1414235077428-338989a2e8c0"),
        alt: "Fine dining table with candlelight",
        category: "dining",
        propertySlug: "samagi-bentota",
      },
      {
        src: unsplash("photo-1544161515-4ab6ce6db874"),
        alt: "Spa treatment room with warm lighting",
        category: "wellness",
        propertySlug: "samagi-bentota",
      },
      {
        src: unsplash("photo-1519741497674-611481863552"),
        alt: "Wedding ceremony flowers and aisle",
        category: "events",
        propertySlug: "samagi-bentota",
      },
    ],
    amenities: [
      "Infinity pool overlooking the estuary",
      "Ayurvedic spa pavilion",
      "Private beach access",
      "Lagoon boat at sunrise",
      "In-room dining until midnight",
      "Complimentary bicycles",
      "Yoga shala on the lawn",
      "Library and board games",
    ],
    rooms: [
      {
        id: "ocean-deluxe",
        name: "Ocean Deluxe",
        description:
          "A light-filled room with a deep balcony, teak shutters, and a direct line to the sound of the surf.",
        occupancy: { adults: 2 },
        sizeSqm: 42,
        amenities: ["King bed", "Rain shower", "Ocean balcony", "Nespresso"],
        nightlyRate: 220,
        image: unsplash("photo-1611892440504-42a792e24d32"),
        imageAlt: "Bright luxury hotel bedroom with white linens",
      },
      {
        id: "river-suite",
        name: "River Suite",
        description:
          "A sitting room and bedroom looking onto the Bentota River, with a soaking tub and a private sala.",
        occupancy: { adults: 2, children: 1 },
        sizeSqm: 68,
        amenities: ["King bed", "Soaking tub", "River sala", "Stocked bar"],
        nightlyRate: 310,
        image: unsplash("photo-1590490360182-c33d57733427"),
        imageAlt: "Hotel suite with seating area and warm wood tones",
      },
      {
        id: "beach-villa",
        name: "Beach Villa",
        description:
          "A freestanding villa on the sand for families and friends who want their own garden, plunge pool, and table.",
        occupancy: { adults: 4, children: 2 },
        sizeSqm: 120,
        amenities: ["Two bedrooms", "Plunge pool", "Kitchenette", "Private garden"],
        nightlyRate: 480,
        image: unsplash("photo-1571896349842-33c89424de2d"),
        imageAlt: "Tropical villa pool surrounded by loungers",
      },
    ],
    dining: [
      {
        name: "The Pavilion",
        description:
          "Open-air seafood and island produce: grilled amberjack, hoppers at breakfast, and a short list of Ceylon arrack cocktails.",
        hours: "Breakfast 7–11 · Lunch 12–15 · Dinner 18–22",
      },
      {
        name: "Lagoon Bar",
        description:
          "A quiet counter over the water for sunset drinks, fresh king coconut, and small plates to share.",
        hours: "12–23",
      },
    ],
    address: "Galle Road, Bentota 80500, Sri Lanka",
    mapEmbedQuery: "Bentota Beach, Sri Lanka",
  },
  {
    slug: "samagi-ella",
    name: "Samagi Ella",
    location: "Ella",
    region: "Uva Province",
    type: "hill",
    typeLabel: "Hill-country lodge",
    tagline: "Mist, tea gardens, and a fire at dusk.",
    shortDescription:
      "A hillside lodge above Ella’s tea country, made for slow mornings, long walks, and tables that linger.",
    description:
      "Samagi Ella looks out over a fold of tea and cloud. The lodge is timber and stone, with deep eaves and windows that catch Little Adam’s Peak at first light. Guests come for the air, the walks, and the feeling of being gathered in — a library with a hearth, an Ayurvedic room scented with sandalwood, and dinners that taste of the estate: pumpkin, gotukola, and bread baked before dawn.",
    startingRate: 185,
    heroImage: unsplash("photo-1593693397690-362cb9666fc2"),
    heroAlt: "Tea plantations rolling across Sri Lankan hill country",
    gallery: [
      {
        src: unsplash("photo-1593693397690-362cb9666fc2"),
        alt: "Green tea terraces in the Sri Lankan highlands",
        category: "landscape",
        propertySlug: "samagi-ella",
      },
      {
        src: unsplash("photo-1506905925346-21bda4d32df4"),
        alt: "Mountain landscape above the clouds",
        category: "landscape",
        propertySlug: "samagi-ella",
      },
      {
        src: unsplash("photo-1542314831-068cd1dbfeeb"),
        alt: "Warm hotel lobby with timber and lantern light",
        category: "stays",
        propertySlug: "samagi-ella",
      },
      {
        src: unsplash("photo-1551882547-ff40c63fe5fa"),
        alt: "Boutique hotel exterior at twilight",
        category: "stays",
        propertySlug: "samagi-ella",
      },
      {
        src: unsplash("photo-1540555700478-4be289fbecef"),
        alt: "Spa stones and candles",
        category: "wellness",
        propertySlug: "samagi-ella",
      },
      {
        src: unsplash("photo-1559339352-11d035aa65de"),
        alt: "Plated seasonal dish in a restaurant",
        category: "dining",
        propertySlug: "samagi-ella",
      },
    ],
    amenities: [
      "Estate walks with a resident guide",
      "Wood-fired sitting room",
      "Ayurvedic treatment suite",
      "Dawn yoga on the ridge",
      "Picnic hampers for Ella Rock",
      "In-house laundry",
      "Telescope on the terrace",
      "Children’s nature trail",
    ],
    rooms: [
      {
        id: "garden-room",
        name: "Garden Room",
        description:
          "A quiet room opening onto ferns and camellia, with a writing desk and a deep window seat.",
        occupancy: { adults: 2 },
        sizeSqm: 36,
        amenities: ["Queen or twin", "Window seat", "Tea tray", "Heated blanket"],
        nightlyRate: 185,
        image: unsplash("photo-1631049307264-da0ec9d70304"),
        imageAlt: "Cozy hotel room with garden outlook",
      },
      {
        id: "peak-suite",
        name: "Peak Suite",
        description:
          "A corner suite with a panoramic view toward Ella Rock, a freestanding tub, and a private veranda.",
        occupancy: { adults: 2 },
        sizeSqm: 58,
        amenities: ["King bed", "Freestanding tub", "Veranda", "Fireplace"],
        nightlyRate: 265,
        image: unsplash("photo-1618773928121-c32242e63f39"),
        imageAlt: "Luxury suite bedroom with layered textiles",
      },
      {
        id: "estate-cottage",
        name: "Estate Cottage",
        description:
          "A two-bedroom cottage in the tea for families who want a kitchen, a garden, and their own pace.",
        occupancy: { adults: 4, children: 2 },
        sizeSqm: 95,
        amenities: ["Two bedrooms", "Kitchen", "Garden", "Outdoor dining"],
        nightlyRate: 390,
        image: unsplash("photo-1566073771259-6a8506099945"),
        imageAlt: "Hillside lodge building among trees",
      },
    ],
    dining: [
      {
        name: "Hearth",
        description:
          "A single-sitting dining room. Menus follow the garden and the market in Bandarawela — slow-cooked meats, hill greens, and estate-grown tea.",
        hours: "Breakfast 7–10 · Dinner 19–21 (one sitting)",
      },
      {
        name: "The Ridge",
        description:
          "Afternoon tea and light lunch on the terrace when the cloud lifts.",
        hours: "11–17",
      },
    ],
    address: "Passara Road, Ella 90090, Sri Lanka",
    mapEmbedQuery: "Ella, Sri Lanka",
  },
  {
    slug: "samagi-colombo",
    name: "Samagi Colombo",
    location: "Colombo 07",
    region: "Western Province",
    type: "city",
    typeLabel: "City boutique hotel",
    tagline: "A quiet townhouse in Cinnamon Gardens.",
    shortDescription:
      "A restored Colombo house with a courtyard pool, rooftop kitchen, and rooms for travellers who want the city close — but not too close.",
    description:
      "Samagi Colombo is a white-walled townhouse on a tree-lined street in Cinnamon Gardens. Inside: a courtyard of frangipani, a small pool, and rooms that feel more like a private home than a hotel. Guests use it as a pause between the airport and the coast, a wedding-party base, or a few days of galleries, Galle Face walks, and long lunches. The rooftop kitchen cooks a short, confident menu — crab, hopper nights, and a proper Ceylon breakfast.",
    startingRate: 165,
    heroImage: unsplash("photo-1542314831-068cd1dbfeeb", 2000),
    heroAlt: "Elegant hotel lobby with warm lighting",
    gallery: [
      {
        src: unsplash("photo-1542314831-068cd1dbfeeb"),
        alt: "Boutique hotel lobby with lanterns",
        category: "stays",
        propertySlug: "samagi-colombo",
      },
      {
        src: unsplash("photo-1566073771259-6a8506099945"),
        alt: "Hotel building reflected in a still pool",
        category: "stays",
        propertySlug: "samagi-colombo",
      },
      {
        src: unsplash("photo-1551882547-ff40c63fe5fa"),
        alt: "City hotel exterior in evening light",
        category: "stays",
        propertySlug: "samagi-colombo",
      },
      {
        src: unsplash("photo-1414235077428-338989a2e8c0"),
        alt: "Rooftop-style dining table",
        category: "dining",
        propertySlug: "samagi-colombo",
      },
      {
        src: unsplash("photo-1544161515-4ab6ce6db874"),
        alt: "Massage table in a calm spa room",
        category: "wellness",
        propertySlug: "samagi-colombo",
      },
      {
        src: unsplash("photo-1465495976277-4387d4b0b4c6"),
        alt: "Courtyard gathering with floral décor",
        category: "events",
        propertySlug: "samagi-colombo",
      },
    ],
    amenities: [
      "Courtyard pool",
      "Rooftop kitchen and bar",
      "Airport transfers",
      "24-hour concierge",
      "In-room yoga mats",
      "Library of Sri Lankan writing",
      "Meeting salon for eight",
      "Complimentary city bicycles",
    ],
    rooms: [
      {
        id: "courtyard-king",
        name: "Courtyard King",
        description:
          "A calm room on the courtyard, with linen drapes, a writing table, and the sound of water from the pool.",
        occupancy: { adults: 2 },
        sizeSqm: 32,
        amenities: ["King bed", "Rain shower", "Courtyard view", "Work desk"],
        nightlyRate: 165,
        image: unsplash("photo-1611892440504-42a792e24d32"),
        imageAlt: "Contemporary boutique hotel bedroom",
      },
      {
        id: "garden-suite",
        name: "Garden Suite",
        description:
          "A suite with a sitting room and a small terrace onto the side garden — suited to longer stays.",
        occupancy: { adults: 2, children: 1 },
        sizeSqm: 52,
        amenities: ["King bed", "Sitting room", "Terrace", "Bathtub"],
        nightlyRate: 230,
        image: unsplash("photo-1590490360182-c33d57733427"),
        imageAlt: "Hotel suite with sofa and garden light",
      },
      {
        id: "residence-suite",
        name: "Residence Suite",
        description:
          "Our largest rooms, with a dining table for four and a dressing room. Often booked for wedding parties and family visits.",
        occupancy: { adults: 3 },
        sizeSqm: 74,
        amenities: ["King bed + daybed", "Dining table", "Dressing room", "Soak tub"],
        nightlyRate: 295,
        image: unsplash("photo-1631049307264-da0ec9d70304"),
        imageAlt: "Spacious residence-style hotel suite",
      },
    ],
    dining: [
      {
        name: "Rooftop Kitchen",
        description:
          "A short menu that changes with the market in Pettah and Negombo: hoppers, crab, grilled vegetables, and a serious wine list for a small house.",
        hours: "Breakfast 7–10:30 · Dinner 18–22",
      },
      {
        name: "Courtyard",
        description:
          "All-day coffee, lime juice, and light plates under the frangipani.",
        hours: "7–21",
      },
    ],
    address: "Horton Place, Cinnamon Gardens, Colombo 07, Sri Lanka",
    mapEmbedQuery: "Cinnamon Gardens, Colombo",
  },
];

export const experiences: Experience[] = [
  {
    slug: "ayurveda-spa",
    name: "Samagi Ayurveda",
    category: "spa",
    summary: "Oil, steam, and quiet rooms guided by a resident physician.",
    description:
      "Treatments follow classical Ayurveda rather than a spa menu of trends. Consultations, abhyanga, shirodhara, and herbal steam are offered in Bentota and Ella, with shorter restorative sessions in Colombo.",
    duration: "60–120 minutes",
    availableAt: ["samagi-bentota", "samagi-ella", "samagi-colombo"],
    image: unsplash("photo-1544161515-4ab6ce6db874"),
    imageAlt: "Calm spa room prepared for an oil treatment",
  },
  {
    slug: "coastal-table",
    name: "The coastal table",
    category: "dining",
    summary: "Seafood, hoppers, and a long table by the estuary.",
    description:
      "At Bentota, dinner can be a private table on the pavilion: grilled fish, mallung, and hoppers made to order. In Colombo, the rooftop kitchen runs hopper nights on Thursdays. Ella’s hearth is a single sitting — slower, warmer, built for conversation.",
    duration: "Evening",
    availableAt: ["samagi-bentota", "samagi-colombo", "samagi-ella"],
    image: unsplash("photo-1414235077428-338989a2e8c0"),
    imageAlt: "Candlelit dining table set for a gathering",
  },
  {
    slug: "tea-country-walks",
    name: "Tea country walks",
    category: "tours",
    summary: "Guided walks through estate paths above Ella.",
    description:
      "A resident guide leads guests along tea lines, through a small factory visit, and up toward Ella Rock or Little Adam’s Peak at a pace that leaves room for photographs and tea. Picnics can be packed by the kitchen.",
    duration: "Half day",
    availableAt: ["samagi-ella"],
    image: unsplash("photo-1593693397690-362cb9666fc2"),
    imageAlt: "Walking paths through tea plantations",
  },
  {
    slug: "dawn-yoga",
    name: "Dawn yoga",
    category: "wellness",
    summary: "Unhurried asana facing water or the ridge.",
    description:
      "Small-group yoga at first light — on the Bentota lawn, the Ella ridge, or the Colombo rooftop. Mats, tea, and a quiet half hour afterward are part of the hour. Private sessions can be arranged.",
    duration: "60 minutes",
    availableAt: ["samagi-bentota", "samagi-ella", "samagi-colombo"],
    image: unsplash("photo-1544367567-0f2fcb009e0b"),
    imageAlt: "Sunrise yoga overlooking a tropical view",
  },
  {
    slug: "lagoon-boat",
    name: "Lagoon at sunrise",
    category: "activities",
    summary: "A quiet boat along the Bentota River before the day begins.",
    description:
      "A simple wooden boat, a flask of tea, and the chance of water monitors, kingfishers, and the river still as glass. Returns in time for breakfast at the Pavilion.",
    duration: "90 minutes",
    availableAt: ["samagi-bentota"],
    image: unsplash("photo-1476514525535-07fb3b4ae5f1"),
    imageAlt: "Small boat on calm tropical water at sunrise",
  },
  {
    slug: "kitchen-hours",
    name: "Hours in the kitchen",
    category: "dining",
    summary: "Cook hoppers, sambols, and a curry with our chefs.",
    description:
      "A hands-on morning in the kitchen: market herbs, a coconut scraped by hand, and a meal you sit down to eat. Offered at all three houses, with a coastal or hill-country emphasis depending on where you stay.",
    duration: "3 hours",
    availableAt: ["samagi-bentota", "samagi-ella", "samagi-colombo"],
    image: unsplash("photo-1559339352-11d035aa65de"),
    imageAlt: "Chef-plated Sri Lankan inspired dish",
  },
];

export const eventVenues: EventVenue[] = [
  {
    name: "Estuary lawn & pavilion",
    propertySlug: "samagi-bentota",
    setting: "Beach and river",
    capacity: "Up to 180 guests",
    description:
      "Ceremonies on the lawn at golden hour, dinner under the pavilion, and dancing as the tide comes in. A natural aisle of temple flowers, and rooms held for the wedding party.",
    image: unsplash("photo-1519741497674-611481863552"),
    imageAlt: "Outdoor wedding ceremony aisle with flowers",
  },
  {
    name: "Ridge garden",
    propertySlug: "samagi-ella",
    setting: "Hill country",
    capacity: "Up to 80 guests",
    description:
      "An intimate garden above the tea, suited to blessings, lunches, and evenings by the hearth. Cloud and birdsong do most of the decorating.",
    image: unsplash("photo-1465495976277-4387d4b0b4c6"),
    imageAlt: "Garden wedding table in natural light",
  },
  {
    name: "Courtyard & rooftop",
    propertySlug: "samagi-colombo",
    setting: "City townhouse",
    capacity: "Up to 40 guests",
    description:
      "Small weddings, rehearsal dinners, and family gatherings in the courtyard, with the rooftop kitchen cooking for the table. A refined city option before or after a coastal celebration.",
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
    guests: "Up to 120",
    summary: "The classic Samagi wedding: lawn, pavilion, and a night that stretches.",
    inclusions: [
      "Full garden and pavilion access",
      "Coordinated catering and bar",
      "Bridal suite the night before",
      "Preferred room rates for guests",
    ],
  },
  {
    name: "Grand gathering",
    guests: "Up to 180",
    summary: "A larger celebration at Bentota, with space for dance, dinner, and an extended family stay.",
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
    summary: "Quieter days, fuller spa hours, and a slower Bentota.",
    description:
      "When the southwest monsoon arrives, the beach empties and the house becomes a retreat. This stay includes daily Ayurveda, breakfast, and a lagoon boat when the river allows. Sample seasonal package — dates and inclusions will change.",
    validThrough: "30 September 2026",
    perks: ["Daily breakfast", "One 90-minute treatment each", "Lagoon boat", "Late checkout"],
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
      "A quiet add-on for couples marrying with us: three nights in a suite, a private dinner, and a morning treatment. Can be taken at a different Samagi house from the wedding — many couples marry in Bentota and recover in Ella.",
    validThrough: "Open dates",
    perks: ["Three nights in a suite", "Private dinner", "Couple’s treatment", "Airport or house transfer"],
    image: unsplash("photo-1519741497674-611481863552"),
    imageAlt: "Wedding floral arch at dusk",
  },
  {
    slug: "family-table",
    name: "Family table",
    season: "School holidays",
    summary: "Connecting rooms, a children’s nature hour, and a table that fits everyone.",
    description:
      "Designed for multi-generational stays at Ella or Bentota. Includes a cottage or connecting rooms, a guided walk for younger guests, and a family-style dinner one evening.",
    validThrough: "Selected holiday dates in 2026",
    perks: ["Connecting or cottage stay", "Children’s activity hour", "Family dinner", "Extra beds at no charge"],
    image: unsplash("photo-1571896349842-33c89424de2d"),
    imageAlt: "Family-friendly villa pool",
  },
  {
    slug: "weekday-pause",
    name: "Weekday pause",
    season: "Sunday – Thursday",
    summary: "Two nights in Colombo between meetings, with breakfast on the rooftop.",
    description:
      "A simple midweek stay at Samagi Colombo: courtyard king or garden suite, breakfast, and a late checkout on Thursday. Sample urban offer for demonstration.",
    validThrough: "Ongoing, excluding public holidays",
    perks: ["Breakfast daily", "Late checkout", "Airport transfer one way"],
    image: unsplash("photo-1551882547-ff40c63fe5fa"),
    imageAlt: "City boutique hotel at night",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We married on the Bentota lawn at five o’clock. The light, the river, and the way the staff moved — nothing felt staged. Our families still talk about the hoppers at midnight.",
    name: "Amelia & Sahan",
    origin: "London & Colombo",
    stay: "Wedding at Samagi Bentota",
  },
  {
    quote:
      "Ella was the pause we needed. Mist on the tea, a fire in the sitting room, and a walk that left the children quietly proud of themselves. It felt like staying with someone who knows the land.",
    name: "The Wijesinghe family",
    origin: "Melbourne",
    stay: "Four nights at Samagi Ella",
  },
  {
    quote:
      "Colombo is usually a layover. This time I stayed three nights and barely left the courtyard. The rooftop crab and a concierge who actually listened — I’ll book it again between the airport and Galle.",
    name: "Priya Menon",
    origin: "Mumbai",
    stay: "Samagi Colombo",
  },
  {
    quote:
      "We brought a small leadership group to Ella. The lodge held us without feeling like a conference. Conversations happened on the ridge, not in a ballroom.",
    name: "James Okonkwo",
    origin: "Singapore",
    stay: "Retreat at Samagi Ella",
  },
];

export const team: TeamMember[] = [
  {
    name: "Anjali Perera",
    role: "Founder & host",
    bio: "Anjali grew up between Colombo and a family bungalow near Bentota. Samagi began as a wish to offer Sri Lankan hospitality without the stiffness of a resort chain — houses that feel gathered, not staged.",
    image: unsplash("photo-1573496359142-b8d87734a5a2", 800),
    imageAlt: "Portrait of Anjali Perera, founder of Samagi Leisure",
  },
  {
    name: "Dinesh Jayawardena",
    role: "General manager",
    bio: "Dinesh oversees the three houses and the quiet logistics that make a stay feel effortless: transfers, timings, and the particular way a room is left before you arrive.",
    image: unsplash("photo-1560250097-0b93528c311a", 800),
    imageAlt: "Portrait of Dinesh Jayawardena, general manager",
  },
  {
    name: "Chef Nimali Fernando",
    role: "Culinary director",
    bio: "Nimali trained in Colombo and Copenhagen, then came home to cook food that tastes of the island: hoppers, grilled fish, estate vegetables, and a breakfast worth getting up for.",
    image: unsplash("photo-1580489944761-15a19d654956", 800),
    imageAlt: "Portrait of Chef Nimali Fernando",
  },
  {
    name: "Dr. Kavindi Silva",
    role: "Wellness lead",
    bio: "An Ayurvedic physician who shapes the spa at Bentota and Ella. Treatments are prescribed, not upsold — oil, rest, and the right silence.",
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
    text: "Each house is sited to live with its landscape — estuary light in Bentota, tea mist in Ella, a courtyard of frangipani in the city. We keep the buildings low and the gardens generous.",
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getPropertyName(slug: string) {
  return getProperty(slug)?.name ?? slug;
}
