import { MetadataRoute } from "next";
import { brand } from "@/lib/siteCopy";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const paths = [
    "",
    "/plombier-caluire-et-cuire",
    "/plombier-lyon",
    "/urgences",
    "/fuite-eau",
    "/debouchage",
    "/chauffe-eau",
    "/chauffage",
    "/climatisation",
    "/services",
    "/aides-etat",
    "/devis",
    "/realisations",
    "/tarifs",
    "/avis",
    "/contact",
    "/zone-intervention",
    "/a-propos",
    "/conseils",
    "/conseils/que-faire-en-cas-de-fuite",
    "/conseils/couper-eau-urgence",
    "/conseils/wc-bouche",
    "/conseils/chauffe-eau-ne-chauffe-plus",
  ];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date("2026-09-22"),
    changeFrequency: p === "" || p === "/urgences" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/urgences" || p === "/services" ? 0.9 : 0.7,
  }));
}
