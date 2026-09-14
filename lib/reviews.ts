export type GoogleReview = {
  name: string;
  initials: string;
  meta: string;
  visited: string;
  text: string;
  stars: 5;
  photo: string;
  photoAlt: string;
  url: string;
  tag?: string;
};

export const googleRating = {
  value: 5,
  count: 8,
  label: "5,0",
};

/** Avis Google Maps PLOMB'ACTIV — textes clients, 5 étoiles. */
export const googleReviews: GoogleReview[] = [
  {
    name: "sam Sam",
    initials: "SS",
    meta: "6 avis · 3 photos",
    visited: "Visité en juin 2025",
    tag: "chauffe-eau",
    text: "Un immense merci à la société plombactiv pour son intervention sur mon chauffe-eau ! Un travail d'une qualité irréprochable, réalisé avec professionnalisme, rigueur et efficacité. Il a su diagnostiquer et résoudre le problème rapidement, avec une grande disponibilité et une réactivité exemplaire. C'est rare de croiser des artisans aussi sérieux et compétents. Je le recommande les yeux fermés : c'est un vrai pro, passionné par ce qu'il fait, et surtout digne de confiance. Rien à redire, tout est parfait. Encore merci !",
    stars: 5,
    photo: "/images/about.jpg",
    photoAlt: "Intervention chauffe-eau — avis sam Sam",
    url: "https://share.google/1UWLNE1lIQ3kB7nPL",
  },
  {
    name: "mustafa ceylan",
    initials: "MC",
    meta: "2 avis",
    visited: "Visité en avril 2025",
    tag: "chauffe-eau",
    text: "J'ai fait appel à la société PLOMB'ACTIV pour un problème avec mon chauffe-eau, et je suis extrêmement satisfait du service ! Le plombier est intervenu rapidement, a identifié la panne en quelques minutes et a effectué la réparation dans la foulée. Travail propre, professionnel et avec des explications claires. Le tarif était tout à fait raisonnable. Je recommande vivement !",
    stars: 5,
    photo: "/images/metier/heater.jpg",
    photoAlt: "Réparation chauffe-eau — avis mustafa ceylan",
    url: "https://share.google/HLcjDnSKU9Pwpgx7r",
  },
  {
    name: "Koray Cinbas",
    initials: "KC",
    meta: "3 avis",
    visited: "Visité en mars 2025",
    text: "Je recommande fortement ! Très professionnel dans leur domaine et très appliquée ! Il m'ont fait toute la plomberie de mon garage et je suis très satisfait du boulot ! Merci à l'équipe !",
    stars: 5,
    photo: "/images/metier/pipes.jpg",
    photoAlt: "Plomberie de garage — avis Koray Cinbas",
    url: "https://share.google/13BEOTESCvxkYvT4T",
  },
  {
    name: "monica tu",
    initials: "MT",
    meta: "9 avis",
    visited: "Visité en mars 2025",
    text: "Service de qualité et professionnalisme au rendez-vous lors d'une intervention à mon domicile, je recommande Plomb'Activ.",
    stars: 5,
    photo: "/images/metier/bathroom.jpg",
    photoAlt: "Intervention à domicile — avis monica tu",
    url: "https://share.google/TRwCE4CHEeK9N2Ij4",
  },
  {
    name: "NUAGE CAFE",
    initials: "NC",
    meta: "11 avis",
    visited: "Visité en février 2025",
    text: "Le techniciens est intervenu, alors que nous étions en plein service. Un client nous a fait savoir qu'il y avait de l'eau dans nos WC. Effectivement nous avions constaté qu'il y avait une fuite. Le problème a été résolu sans déranger notre clientèle… Merci d'avoir été rapide et très efficace. Je recommande la société Plombactiv.",
    stars: 5,
    photo: "/images/gallery-1.jpg",
    photoAlt: "Dépannage fuite WC en commerce — avis NUAGE CAFE",
    url: "https://share.google/bU7xOLutGjws721hM",
  },
  {
    name: "Nadir B",
    initials: "NB",
    meta: "Local Guide · 24 avis",
    visited: "Visité en janvier 2025",
    text: "Ce monsieur m'a sauvé en changeant ma chaudière Vaillant un 3/01, quelques jours après les fêtes à un prix abordable. Sa disponibilité, son écoute et son savoir ont été déterminants! Merci encore",
    stars: 5,
    photo: "/images/metier/workshop.jpg",
    photoAlt: "Remplacement chaudière Vaillant — avis Nadir B",
    url: "https://share.google/nSUX6EDHyS2iAbOHI",
  },
  {
    name: "Sofian M'hamedi",
    initials: "SM",
    meta: "6 avis",
    visited: "Visité en mars 2025",
    text: "Société réactive et prestations efficaces, je recommande fortement !!",
    stars: 5,
    photo: "/images/metier/tools.jpg",
    photoAlt: "Prestation PLOMB'ACTIV — avis Sofian M'hamedi",
    url: "https://share.google/jDxwLfLOVgTCOQDl0",
  },
];
