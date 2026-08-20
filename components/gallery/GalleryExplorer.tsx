"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryImage } from "@/lib/types";

const categories = [
  { value: "all", label: "All" },
  { value: "stays", label: "Stays" },
  { value: "dining", label: "Dining" },
  { value: "wellness", label: "Wellness" },
  { value: "events", label: "Events" },
  { value: "landscape", label: "Landscape" },
] as const;

export function GalleryExplorer({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]["value"]>("all");
  const unique = useMemo(() => {
    const seen = new Set<string>();
    return images.filter((image) => {
      if (seen.has(image.src)) return false;
      seen.add(image.src);
      return true;
    });
  }, [images]);

  const filtered =
    category === "all" ? unique : unique.filter((image) => image.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        {categories.map((item) => (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={category === item.value}
            onClick={() => setCategory(item.value)}
            className={`px-4 py-2 text-[0.68rem] tracking-[0.18em] uppercase ${
              category === item.value
                ? "bg-forest text-cream"
                : "border border-line text-forest hover:border-gold"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image) => (
          <li key={image.src} className="mb-4 break-inside-avoid">
            <figure className="image-zoom relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={700}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="mt-2 text-xs tracking-wide text-stone">
                {image.alt}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
