import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & book",
  description:
    "Enquire about a Samagi Leisure stay in Bentota, Ella, or Colombo. Phone, email, WhatsApp, and a booking form.",
};

type ContactPageProps = {
  searchParams: Promise<{ property?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { property } = await searchParams;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent("Cinnamon Gardens, Colombo")}&z=13&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Write to the house."
        description="Share dates, who is travelling, and which landscape you want. This form is a sample enquiry — no payment is taken and nothing is stored."
        compact
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl text-forest">Reach us</h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-stone">
                <li>
                  <p className="text-[0.65rem] tracking-[0.2em] text-gold-deep uppercase">
                    Phone
                  </p>
                  <a href={site.phoneHref} className="text-forest hover:text-gold-deep">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <p className="text-[0.65rem] tracking-[0.2em] text-gold-deep uppercase">
                    Email
                  </p>
                  <a href={`mailto:${site.email}`} className="text-forest hover:text-gold-deep">
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-[0.65rem] tracking-[0.2em] text-gold-deep uppercase">
                    WhatsApp
                  </p>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest hover:text-gold-deep"
                  >
                    {site.whatsapp}
                  </a>
                </li>
                <li>
                  <p className="text-[0.65rem] tracking-[0.2em] text-gold-deep uppercase">
                    Office
                  </p>
                  <p>{site.address}</p>
                </li>
              </ul>
              <SampleNotice className="mt-8 text-xs text-stone/80" />
            </div>
            <div className="lg:col-span-8">
              <BookingForm defaultProperty={property ?? ""} />
            </div>
          </div>
          <div className="mt-16">
            <iframe
              title="Map of Samagi Leisure Colombo office"
              src={mapSrc}
              className="h-80 w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
