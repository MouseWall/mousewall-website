import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { nav } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = [
    ...nav.map((n) => n.href),
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-05-29"),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
