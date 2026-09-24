import { photos } from "./photos";

export type VillePage = {
  slug: string;
  name: string;
  driveMin: string;
  housing: string;
  localIssue: string;
  extra: string;
  image: string;
  imageAlt: string;
};

export const villes: VillePage[] = [
  {
    slug: "villeurbanne",
    name: "Villeurbanne",
    driveMin: "15 à 25 min selon le trafic (Gratte-Ciel, Cusset, Charpennes)",
    housing: "Beaucoup d'immeubles des années 60-80, colonnes collectives, salles de bains compactes.",
    localIssue: "Colonnes qui s'essoufflent, siphons lents, ballons en fin de vie dans les copros.",
    extra: "Villeurbanne est collée à Lyon 3e et 6e : on y passe souvent le même jour qu'un chantier caluirard.",
    image: photos.reseaux,
    imageAlt: "Réseaux plomberie type copropriété, intervention PLOMB'ACTIV vers Villeurbanne",
  },
  {
    slug: "rillieux-la-pape",
    name: "Rillieux-la-Pape",
    driveMin: "10 à 20 min depuis Saint Clair, par la montée ou le périphérique nord",
    housing: "Mix pavillons et collectifs, beaucoup de chaudières gaz individuelles.",
    localIssue: "Groupes de sécurité qui gouttent, cumulus tartre, fuites sous évier dans les maisons des années 70.",
    extra: "Rillieux est au nord de Caluire : c'est une des communes les plus rapides à joindre depuis l'atelier.",
    image: photos.cumulus,
    imageAlt: "Ballon d'eau chaude sanitaire, type d'intervention fréquente à Rillieux-la-Pape",
  },
  {
    slug: "vaulx-en-velin",
    name: "Vaulx-en-Velin",
    driveMin: "20 à 35 min selon le pont et l'heure",
    housing: "Collectifs, logements sociaux, salles d'eau rénovées par vagues.",
    localIssue: "Évacuations PVC fatiguées, WC qui bouchent, fuites en pied de colonne.",
    extra: "On confirme le déplacement au téléphone si le chantier est tout au bout de la commune.",
    image: photos.wc,
    imageAlt: "Sanitaire et évacuation, débouchage et remplacement WC",
  },
  {
    slug: "neuville-sur-saone",
    name: "Neuville-sur-Saône",
    driveMin: "15 à 25 min le long de la Saône",
    housing: "Maisons de village, caves humides, réseaux parfois encore en cuivre ancien.",
    localIssue: "Caves, regards, fuites sur arrivée, chaudières en sous-sol.",
    extra: "Neuville est sur l'axe nord : même tournée possible qu'Albigny ou Rochetaillée.",
    image: photos.chalumeau,
    imageAlt: "Brasage cuivre sur chantier, typique des maisons de Neuville-sur-Saône",
  },
  {
    slug: "miribel",
    name: "Miribel",
    driveMin: "20 à 30 min vers l'Ain, selon le pont de Miribel",
    housing: "Pavillonnaire, lotissements, cuisines ouvertes, ballons dans garage.",
    localIssue: "Calcaire, groupes de sécurité, canalisations en vide sanitaire.",
    extra: "Miribel n'est plus le Grand Lyon stricto sensu, mais le trajet depuis Caluire reste réaliste en journée.",
    image: photos.ballonMural,
    imageAlt: "Chauffe-eau mural, pose fréquente en pavillon type Miribel",
  },
  {
    slug: "decines-charpieu",
    name: "Décines-Charpieu",
    driveMin: "25 à 40 min par le boulevard urbain est",
    housing: "Mix pavillons et collectifs, rénovations de salles de bains fréquentes.",
    localIssue: "Remplacement de WC, collecteurs PER, chaudières murales.",
    extra: "Décines se couple souvent avec Meyzieu sur une même après-midi si les deux chantiers sont confirmés.",
    image: photos.wcAvantApres,
    imageAlt: "Remplacement de WC, chantier PLOMB'ACTIV",
  },
  {
    slug: "meyzieu",
    name: "Meyzieu",
    driveMin: "30 à 45 min selon l'est lyonnais",
    housing: "Maisons individuelles, garages avec ballon, jardins et regards.",
    localIssue: "Ballons, arrosage / hors gel, chaudières gaz.",
    extra: "On dit clairement au téléphone si le créneau du jour tient, plutôt que de promettre une heure d'arrivée.",
    image: photos.chaudiere,
    imageAlt: "Chaudière gaz, dépannage et entretien",
  },
  {
    slug: "saint-priest",
    name: "Saint-Priest",
    driveMin: "30 à 45 min par le sud-est",
    housing: "Collectifs et lots pavillonnaires, salles de bains des années 90 à rénover.",
    localIssue: "Évacuations, mitigeurs, fuites sous baignoire.",
    extra: "Saint-Priest est en limite de tournée : on y va, on confirme juste le délai réel au 06 67 44 79 29.",
    image: photos.degatEaux,
    imageAlt: "Recherche de fuite et dégât des eaux",
  },
];

export function villeBySlug(slug: string) {
  return villes.find((v) => v.slug === slug);
}
