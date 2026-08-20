# Samagi Leisure

Marketing website for **Samagi Leisure**, a Sri Lankan hospitality brand. Built with Next.js (App Router), TypeScript, and Tailwind CSS. There is no backend, CMS, or payment flow — stays and weddings are collected as validated enquiry forms only.

> Sample content is clearly marked. Properties, rates, team, and Unsplash photography are placeholders. Swap them before launch.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Replace sample content

All guest-facing content lives in typed local files:

| File | What to change |
| --- | --- |
| `lib/data.ts` | Hotels, rooms, experiences, weddings, offers, gallery, testimonials, team |
| `lib/site.ts` | Brand name, phone, email, WhatsApp, address, navigation, social links |
| `lib/types.ts` | Only if you add new content shapes |

Photography uses Unsplash URLs via `unsplash()` in `lib/utils.ts`. Point those fields at your own files in `/public` (or a CDN) and update `next.config.ts` image hosts if needed.

Enquiry and newsletter forms validate on the client and show a success state. They do not send email until you connect a form endpoint of your choosing.

## Stack

- Next.js App Router and React Server Components
- TypeScript
- Tailwind CSS v4
- GSAP (`useGSAP` + ScrollTrigger) for hero and scroll reveals, with `prefers-reduced-motion` respected
- `next/image` and metadata / Open Graph tags

## Routes

`/`, `/about`, `/properties`, `/properties/[slug]`, `/experiences`, `/events`, `/offers`, `/gallery`, `/contact`, `/privacy`, `/terms`
