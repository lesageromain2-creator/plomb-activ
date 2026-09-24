import { MetadataRoute } from "next";
import { brand } from "@/lib/siteCopy";
import { SITE_URLS } from "@/lib/siteUrls";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  return SITE_URLS.map((u) => ({
    url: `${base}${u.path === "/" ? "" : u.path}`,
    lastModified: u.lastmod,
    changeFrequency: u.changefreq,
    priority: u.priority,
  }));
}
