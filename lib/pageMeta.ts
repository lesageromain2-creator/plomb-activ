import { brand } from "./siteCopy";

const origin = brand.siteUrl.replace(/\/$/, "");

export function absoluteUrl(path: string) {
  if (!path || path === "/") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta(
  path: string,
  title: string,
  description: string,
  opts?: { index?: boolean }
) {
  const url = absoluteUrl(path);
  const index = opts?.index !== false;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-image-preview": "large" as const,
      },
    },
    openGraph: {
      type: "website" as const,
      locale: "fr_FR",
      url,
      siteName: "PLOMB'ACTIV",
      title,
      description,
      images: [
        {
          url: `${origin}/images/chantier/hero-landing-v3.jpg`,
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}
