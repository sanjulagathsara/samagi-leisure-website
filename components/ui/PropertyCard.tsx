import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/types";
import { formatRate } from "@/lib/utils";

type PropertyCardProps = {
  property: Property;
  featured?: boolean;
};

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  return (
    <article className={featured ? "lg:col-span-2" : ""}>
      <Link
        href={`/properties/${property.slug}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <div
          className={`image-zoom relative overflow-hidden ${featured ? "aspect-[16/10] sm:aspect-[21/9]" : "aspect-[4/3]"}`}
        >
          <Image
            src={property.heroImage}
            alt={property.heroAlt}
            fill
            sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-forest/70 via-transparent to-transparent" />
          <p className="absolute top-4 left-4 bg-ivory/90 px-3 py-1 text-[0.62rem] tracking-[0.22em] text-forest uppercase">
            {property.typeLabel}
          </p>
        </div>
        <div className="flex flex-col gap-3 border border-t-0 border-line bg-ivory px-5 py-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.68rem] tracking-[0.28em] text-gold-deep uppercase">
              {property.location} · {property.region}
            </p>
            <h3 className="mt-2 font-serif text-3xl text-forest">{property.name}</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-stone">
              {property.shortDescription}
            </p>
          </div>
          <p className="shrink-0 text-sm text-forest">
            From {formatRate(property.startingRate)}
            <span className="block text-[0.65rem] tracking-[0.18em] text-stone uppercase">
              per night
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
