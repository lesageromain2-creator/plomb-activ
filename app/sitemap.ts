import { MetadataRoute } from "next";
import { brand } from "@/lib/siteCopy";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const paths = [
    "",
    "/services",
    "/urgences",
    "/entretien",
    "/pac-clim",
    "/aides-etat",
    "/devis",
    "/realisations",
    "/tarifs",
    "/avis",
    "/contact",
    "/zone-intervention",
  ];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" || p === "/urgences" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/urgences" || p === "/services" ? 0.9 : 0.7,
  }));
}
