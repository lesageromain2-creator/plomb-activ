import { brand, zone } from "./siteCopy";
import { googleRating, googleReviews } from "./reviews";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
    "@id": `${brand.siteUrl}/#business`,
    name: brand.name,
    alternateName: ["Plomb'activ", "Plombactiv", "GHOULI Foued"],
    description:
      "GHOULI Foued, plombier chauffagiste à Caluire-et-Cuire. Urgence et dépannage sur Lyon : plomberie, chauffage, climatisation, chaudière, pose et entretien de clim.",
    url: brand.siteUrl,
    telephone: "+33765266526",
    email: brand.email,
    image: `${brand.siteUrl}/images/logo.png`,
    logo: `${brand.siteUrl}/images/logo.png`,
    founder: { "@type": "Person", name: brand.owner },
    employee: { "@type": "Person", name: brand.owner, jobTitle: "Plombier chauffagiste" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 Grande rue de Saint Clair",
      addressLocality: "Caluire-et-Cuire",
      postalCode: "69300",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: brand.geo.lat,
      longitude: brand.geo.lng,
    },
    hasMap: brand.mapsUrl,
    areaServed: zone.cities.map((c) => ({ "@type": "City", name: c })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33765266526",
      email: brand.email,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(googleRating.value),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(googleRating.count),
    },
    review: googleReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
    sameAs: [brand.mapsUrl],
    knowsAbout: [
      "plombier Lyon",
      "dépannage plomberie",
      "chauffagiste Caluire",
      "chaudière",
      "climatisation",
      "urgence fuite d'eau",
    ],
  };
}

export function faqJsonLd() {
  const faqs = [
    {
      q: "Quel est le numéro d'urgence de PLOMB'ACTIV à Lyon ?",
      a: "Appelez GHOULI Foued au 07 65 26 65 26. Plombier basé à Caluire-et-Cuire (QVR5+49), prêt pour les urgences sur Lyon, Villeurbanne et le Grand Lyon.",
    },
    {
      q: "PLOMB'ACTIV intervient-il pour le chauffage et la climatisation ?",
      a: "Oui. Plomberie, chauffage, chaudière (dont Vaillant), pose et entretien de clim, dépannage. Un artisan, un interlocuteur.",
    },
    {
      q: "Où est basé GHOULI Foued ?",
      a: "À Caluire-et-Cuire, 130 Grande rue de Saint Clair, Plus Code QVR5+49. Zone : Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d'Or, Bron, Vénissieux.",
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
