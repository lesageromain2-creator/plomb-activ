import { MetadataRoute } from "next";
import { brand } from "@/lib/siteCopy";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${brand.siteUrl}/sitemap.xml`,
    host: brand.siteUrl,
  };
}
