"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { SampleNotice } from "@/components/ui/SampleNotice";
import type { Property, PropertyType } from "@/lib/types";

const locations = ["All", "Bentota", "Ella", "Colombo 07"] as const;
const types: Array<{ value: "all" | PropertyType; label: string }> = [
  { value: "all", label: "All types" },
  { value: "beach", label: "Beach" },
  { value: "hill", label: "Hill country" },
  { value: "city", label: "City" },
];

export function PropertyExplorer({ properties }: { properties: Property[] }) {
  const [location, setLocation] = useState<(typeof locations)[number]>("All");
  const [type, setType] = useState<(typeof types)[number]["value"]>("all");

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const locationMatch = location === "All" || property.location === location;
      const typeMatch = type === "all" || property.type === type;
      return locationMatch && typeMatch;
    });
  }, [location, properties, type]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by location">
          {locations.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLocation(item)}
              className={`px-4 py-2 text-[0.68rem] tracking-[0.18em] uppercase ${
                location === item
                  ? "bg-forest text-cream"
                  : "border border-line text-forest hover:border-gold"
              }`}
            >
              {item === "Colombo 07" ? "Colombo" : item}
            </button>
          ))}
        </div>
        <label className="text-[0.68rem] tracking-[0.18em] text-stone uppercase">
          Type
          <select
            className="ml-3 border-b border-line bg-transparent py-1 text-sm tracking-normal text-forest normal-case focus:border-gold focus:outline-none"
            value={type}
            onChange={(event) =>
              setType(event.target.value as (typeof types)[number]["value"])
            }
          >
            {types.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <SampleNotice className="mt-6 text-xs text-stone/80" />
      {filtered.length === 0 ? (
        <p className="mt-10 text-stone">No houses match those filters. Try another combination.</p>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {filtered.map((property, index) => (
            <PropertyCard
              key={property.slug}
              property={property}
              featured={filtered.length > 1 && index === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
