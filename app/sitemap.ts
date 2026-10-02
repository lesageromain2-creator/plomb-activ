import { MetadataRoute } from "next";
import { brand } from "@/lib/siteCopy";
import { SITE_URLS } from "@/lib/siteUrls";

const skip = new Set(["/mentions-legales", "/confidentialite", "/services"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl.replace(/\/$/, "");
  return SITE_URLS.filter((u) => !skip.has(u.path)).map((u) => ({
    url: u.path === "/" ? `${base}/` : `${base}${u.path}`,
    lastModified: new Date("2026-10-02"),
    changeFrequency: u.changefreq,
    priority: u.priority,
  }));
}
