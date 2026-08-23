import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { properties } from "@/lib/data";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  const quickLinks = footerLinks.filter(
    (link) => !["/privacy", "/terms"].includes(link.href),
  );

  return (
    <footer className="bg-forest text-cream">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light size="footer" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/70">
              {site.tagline} Southern Riviera Resort Mirissa — for stays,
              weddings, and gatherings that feel like they belong to you.
            </p>
            <p className="mt-6 text-xs leading-5 text-cream/45">{site.sampleNotice}</p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
              Stay
            </p>
            <ul className="mt-4 space-y-2">
              {properties.map((property) => (
                <li key={property.slug}>
                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {property.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
              Visit
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              <li className="max-w-xs pt-2 text-cream/60">{site.address}</li>
            </ul>
            <div className="mt-8">
              <p className="mb-3 text-[0.68rem] tracking-[0.28em] text-gold uppercase">
                Newsletter
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                {social.label}
              </a>
            ))}
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
