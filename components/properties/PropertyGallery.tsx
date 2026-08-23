"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/types";

export function PropertyGallery({ images, name }: { images: GalleryImage[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-16/10 overflow-hidden bg-forest">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      </div>
      <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${name} photo ${index + 1}`}
              aria-current={index === active}
              className={`relative aspect-4/3 w-full overflow-hidden ${
                index === active ? "ring-2 ring-gold ring-offset-2" : "opacity-80 hover:opacity-100"
              }`}
            >
              <Image src={image.src} alt="" fill sizes="160px" loading="lazy" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
