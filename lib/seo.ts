import { brand, home, zone } from "./siteCopy";
import { googleRating, googleReviews } from "./reviews";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
    "@id": `${brand.siteUrl}/#business`,
    name: brand.name,
    alternateName: ["Plomb'activ", "Plombactiv", "GHOULI Foued", "Plomb'Activ Caluire"],
    description:
      "PLOMB'ACTIV — GHOULI Foued, plombier chauffagiste à Caluire-et-Cuire. Recherche de fuite, débouchage, ballon ECS, chaudière gaz, climatisation split. Dépannage Lyon.",
    url: brand.siteUrl,
    telephone: "+33667447929",
    email: brand.email,
    image: [
      `${brand.siteUrl}/images/chantier/hero.jpg`,
      `${brand.siteUrl}/images/chantier/artisan.jpg`,
      `${brand.siteUrl}/images/logo.png`,
    ],
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
    hasMap: brand.gbpUrl,
    areaServed: zone.cities.map((c) => ({ "@type": "City", name: c })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: "Astreinte dépannage",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33667447929",
        email: brand.email,
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: "French",
      },
      {
        "@type": "ContactPoint",
        telephone: "+33667447929",
        contactType: "emergency",
        areaServed: "FR",
        availableLanguage: "French",
      },
    ],
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
    sameAs: [brand.gbpUrl, brand.mapsUrl],
    knowsAbout: [
      "plombier Lyon",
      "plombier Caluire-et-Cuire",
      "recherche de fuite",
      "débouchage canalisation",
      "ballon eau chaude sanitaire",
      "chaudière gaz",
      "climatisation split",
      "dégât des eaux",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations PLOMB'ACTIV",
      itemListElement: home.serviceCards.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.title, description: c.desc },
      })),
    },
  };
}

export function faqJsonLd() {
  const faqs = [
    {
      q: "Quel est le numéro d'un plombier d'urgence à Caluire et Lyon ?",
      a: "PLOMB'ACTIV — GHOULI Foued : 06 67 44 79 29. Établissement 130 Grande rue de Saint Clair, 69300 Caluire-et-Cuire. Fiche Google Business validée.",
    },
    {
      q: "PLOMB'ACTIV intervient-il pour chaudière et climatisation ?",
      a: "Oui. Chaudière gaz (dépannage, entretien, remplacement dont Vaillant), ballon ECS, pose et mise en service de split inverter, charge frigorifique.",
    },
    {
      q: "Où est basé GHOULI Foued ?",
      a: "À Caluire-et-Cuire, 130 Grande rue de Saint Clair (Plus Code QVR5+49). Zone : Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d'Or, Bron, Vénissieux.",
    },
    {
      q: "Le devis est-il gratuit ?",
      a: "Oui, devis gratuit et sans engagement. Hors urgence, les travaux commencent après accord du client.",
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
