import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { RoomCard } from "@/components/ui/RoomCard";
import { SampleNotice } from "@/components/ui/SampleNotice";
import { getProperty, properties } from "@/lib/data";
import { site } from "@/lib/site";
import { formatRate } from "@/lib/utils";

type PropertyPageProps = PageProps<"/properties/[slug]">;

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "House" };
  return {
    title: property.name,
    description: property.shortDescription,
    openGraph: {
      title: `${property.name} | Samagi Leisure`,
      description: property.shortDescription,
      images: [{ url: property.heroImage }],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(property.mapEmbedQuery)}&z=13&output=embed`;

  return (
    <>
      <section className="bg-forest pt-24">
        <PropertyGallery images={property.gallery} name={property.name} />
      </section>
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <SampleNotice className="mb-6 text-xs text-stone/80" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[0.68rem] tracking-[0.28em] text-gold-deep uppercase">
                {property.location} · {property.typeLabel}
              </p>
              <h1 className="mt-3 font-serif text-5xl text-forest sm:text-6xl">
                {property.name}
              </h1>
              <p className="mt-3 font-serif text-2xl text-forest/80 italic">
                {property.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone">
                {property.description}
              </p>
              <h2 className="mt-12 font-serif text-3xl text-forest">Amenities</h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {property.amenities.map((item) => (
                  <li key={item} className="border-b border-line py-2 text-sm text-stone">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="h-fit border border-line bg-cream p-6 lg:sticky lg:top-28 lg:col-span-5 lg:p-8">
              <p className="text-[0.68rem] tracking-[0.22em] text-gold-deep uppercase">
                From {formatRate(property.startingRate)} / night
              </p>
              <p className="mt-3 font-serif text-3xl text-forest">Enquire to stay</p>
              <p className="mt-2 text-sm leading-6 text-stone">
                Sample rates only. Tell us your dates and we will confirm
                availability — on a live site, within one working day.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={`/contact?property=${property.slug}`} variant="solid">
                  Book this house
                </Button>
                <Button href={site.whatsappHref} variant="outline">
                  WhatsApp {site.whatsapp}
                </Button>
              </div>
              <a
                href={site.phoneHref}
                className="mt-5 inline-block text-sm text-forest hover:text-gold-deep"
              >
                {site.phone}
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-forest">Rooms</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone">
            Occupancy, amenities, and nightly rates are sample figures for this
            marketing site.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {property.rooms.map((room) => (
              <RoomCard key={room.id} room={room} propertySlug={property.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl text-forest">Dining</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {property.dining.map((venue) => (
              <article key={venue.name} className="border border-line bg-cream px-6 py-8">
                <h3 className="font-serif text-2xl text-forest">{venue.name}</h3>
                <p className="mt-3 text-sm leading-6 text-stone">{venue.description}</p>
                <p className="mt-4 text-[0.68rem] tracking-[0.16em] text-gold-deep uppercase">
                  {venue.hours}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl text-forest">Find us</h2>
              <p className="mt-4 text-sm leading-6 text-stone">{property.address}</p>
              <Button href="/contact" variant="outline" className="mt-6">
                Book this house
              </Button>
            </div>
            <div className="lg:col-span-8">
              <iframe
                title={`Map of ${property.name}`}
                src={mapSrc}
                className="h-80 w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title={`Stay at ${property.name}.`}
        description="Share your dates and who is travelling. This is an enquiry, not a confirmed booking."
        primaryHref={`/contact?property=${property.slug}`}
      />
    </>
  );
}
