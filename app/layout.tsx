import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Samagi Leisure | Sri Lankan Hotels, Weddings & Stays",
    template: "%s | Samagi Leisure",
  },
  description: site.description,
  keywords: [
    "Samagi Leisure",
    "Sri Lanka hotels",
    "Bentota resort",
    "Ella lodge",
    "Colombo boutique hotel",
    "Sri Lanka weddings",
    "Ayurveda spa",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: site.url,
    siteName: site.name,
    title: "Samagi Leisure | Sri Lankan Hotels, Weddings & Stays",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Samagi Leisure | Sri Lankan Hotels, Weddings & Stays",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="paper-texture min-h-full flex flex-col font-sans text-ink">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
