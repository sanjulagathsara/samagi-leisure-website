import { properties } from "@/lib/data";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/properties",
    "/experiences",
    "/events",
    "/offers",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",
    ...properties.map((property) => `/properties/${property.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
