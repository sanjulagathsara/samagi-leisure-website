import type { Metadata } from "next";
import Image from "next/image";
import { EventsForm } from "@/components/forms/EventsForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { eventPackages, eventVenues, getPropertyName } from "@/lib/data";
import { site } from "@/lib/site";
import { unsplash } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events & Weddings",
  description:
    "Garden, beach, and courtyard weddings at Samagi Leisure in Bentota, Ella, and Colombo.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrations"
        title="Weddings that feel like a gathering, not a production."
        description="Lawns on the estuary, a ridge garden in Ella, a Colombo courtyard for the night before. Sample venues and packages — rewrite with real capacities before launch."
        image={unsplash("photo-1519741497674-611481863552")}
        imageAlt="Outdoor wedding ceremony with floral aisle"
      />
      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <SampleNotice className="mb-10" />
          <h2 className="font-serif text-4xl text-forest">Venues</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {eventVenues.map((venue) => (
              <article key={venue.name}>
                <div className="image-zoom relative aspect-4/3">
                  <Image
                    src={venue.image}
                    alt={venue.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-[0.65rem] tracking-[0.22em] text-gold-deep uppercase">
                  {getPropertyName(venue.propertySlug)} · {venue.setting}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-forest">{venue.name}</h3>
                <p className="mt-2 text-sm text-stone">{venue.capacity}</p>
                <p className="mt-3 text-sm leading-6 text-stone">{venue.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-forest">Packages</h2>
          <p className="mt-3 max-w-xl text-sm text-stone">
            Starting shapes, not contracts. A live celebrations team would tailor
            menus, florals, and room blocks to the family in front of them.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {eventPackages.map((item) => (
              <article key={item.name} className="border border-line bg-ivory px-6 py-8">
                <h3 className="font-serif text-3xl text-forest">{item.name}</h3>
                <p className="mt-2 text-[0.68rem] tracking-[0.2em] text-gold-deep uppercase">
                  {item.guests}
                </p>
                <p className="mt-4 text-sm leading-6 text-stone">{item.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-stone">
                  {item.inclusions.map((inclusion) => (
                    <li key={inclusion} className="border-t border-line pt-2">
                      {inclusion}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-24" id="enquire">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl text-forest">Plan with us</h2>
              <p className="mt-4 text-sm leading-7 text-stone">
                Share a date, a headcount, and which landscape you imagine.
                Email{" "}
                <a className="text-forest underline decoration-gold" href={`mailto:${site.eventsEmail}`}>
                  {site.eventsEmail}
                </a>{" "}
                or use the form — sample only, nothing is stored.
              </p>
            </div>
            <div className="lg:col-span-8">
              <EventsForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
