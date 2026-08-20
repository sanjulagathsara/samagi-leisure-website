import Image from "next/image";
import type { Room } from "@/lib/types";
import { formatRate, occupancyLabel } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type RoomCardProps = {
  room: Room;
  propertySlug: string;
};

export function RoomCard({ room, propertySlug }: RoomCardProps) {
  return (
    <article className="flex h-full flex-col border border-line bg-ivory">
      <div className="image-zoom relative aspect-4/3">
        <Image
          src={room.image}
          alt={room.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-forest">{room.name}</h3>
          <p className="text-right text-sm text-forest">
            {formatRate(room.nightlyRate)}
            <span className="block text-[0.62rem] tracking-[0.16em] text-stone uppercase">
              / night
            </span>
          </p>
        </div>
        <p className="mt-3 text-sm leading-6 text-stone">{room.description}</p>
        <p className="mt-4 text-[0.68rem] tracking-[0.16em] text-gold-deep uppercase">
          {occupancyLabel(room.occupancy)} · {room.sizeSqm} m²
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {room.amenities.map((item) => (
            <li
              key={item}
              className="border border-line px-2.5 py-1 text-[0.68rem] tracking-wide text-stone"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href={`/contact?property=${propertySlug}`} variant="outline" className="w-full">
            Enquire
          </Button>
        </div>
      </div>
    </article>
  );
}
