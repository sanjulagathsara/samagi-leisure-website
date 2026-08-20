import type { LocaleOption, NavItem } from "./types";

export const site = {
  name: "Samagi Leisure",
  legalName: "Samagi Leisure (Pvt) Ltd",
  tagline: "Togetherness, at island pace.",
  description:
    "Samagi Leisure is a Sri Lankan hospitality house with stays in Bentota, Ella, and Colombo — for gatherings, weddings, and unhurried days by sea, hill, and city.",
  url: "https://samagileisure.com",
  email: "stay@samagileisure.com",
  eventsEmail: "gather@samagileisure.com",
  phone: "+94 11 234 5670",
  phoneHref: "tel:+94112345670",
  whatsapp: "+94 77 123 4568",
  whatsappHref: "https://wa.me/94771234568",
  address: "Horton Place, Cinnamon Gardens, Colombo 07, Sri Lanka",
  sampleNotice:
    "Sample content for demonstration. Replace properties, rates, and copy in lib/data.ts and lib/site.ts before launch.",
  socials: [
    { label: "Instagram", href: "https://instagram.com/samagileisure" },
    { label: "Facebook", href: "https://facebook.com/samagileisure" },
    { label: "Pinterest", href: "https://pinterest.com/samagileisure" },
  ],
} as const;

export const navItems: NavItem[] = [
  { href: "/properties", label: "Hotels" },
  { href: "/experiences", label: "Experiences" },
  { href: "/events", label: "Weddings" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export const footerLinks: NavItem[] = [
  { href: "/properties", label: "Hotels" },
  { href: "/experiences", label: "Experiences" },
  { href: "/events", label: "Events & Weddings" },
  { href: "/offers", label: "Offers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact & book" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const locales: LocaleOption[] = [
  { code: "en", label: "EN", enabled: true },
  { code: "si", label: "සිං", enabled: false },
  { code: "ta", label: "தமிழ்", enabled: false },
];
