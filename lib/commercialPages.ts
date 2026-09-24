import { photos } from "@/lib/photos";
import { brand } from "@/lib/siteCopy";
import type { CommercialContent } from "@/components/CommercialPage";

const phone = brand.phone;

export const fuiteEau: CommercialContent = {
  title: "Fuite d'eau Lyon | Recherche et réparation",
  description: `Recherche et réparation de fuite d'eau à Lyon et Caluire-et-Cuire. Appelez ${phone}. Isolation du réseau, diagnostic, remise en eau.`,
  h1: "Fuite d'eau à Lyon et Caluire",
  kicker: "Recherche de fuite",
  lead: "Fuite apparente, encastrée ou dégât des eaux : PLOMB'ACTIV isole le réseau, localise l'origine et répare. Ligne directe, pas de plateforme.",
  image: photos.degatEaux,
  imageAlt: "Dégât des eaux sur plafond, recherche de fuite à Caluire-et-Cuire",
  showUrgence: true,
  delayNote: "Urgence joignable 7j/7. On confirme le créneau au téléphone, sans délai affiché en minutes.",
  priceNote: "Diagnostic et réparation sur devis. Hors urgence, devis gratuit avant ouverture du chantier. Ordres de grandeur sur la page tarifs.",
  crumbs: [{ name: "Fuite d'eau", path: "/fuite-eau" }],
  related: [
    { href: "/recherche-de-fuite", label: "Recherche de fuite" },
    { href: "/degat-des-eaux", label: "Dégât des eaux" },
    { href: "/plombier-lyon", label: "Plombier Lyon" },
  ],
  sections: [
    {
      h2: "Quand appeler pour une fuite",
      body: "Compteur qui tourne, tache au plafond, humidité au sol, vanne qui goutte, radiateur qui suinte : plus on attend, plus le dégât s'étend. Coupez l'arrivée générale si vous la trouvez, puis appelez l'atelier.",
      bullets: ["Fuite sous évier ou sous baignoire", "Fuite encastrée (PER, cuivre)", "Colonne, plafond, joint de chasse", "Dégât des eaux en logement ou commerce"],
    },
    {
      h2: "Comment on intervient",
      body: "Diagnostic visuel, isolation du réseau, recherche du point de fuite, réparation (joint, collier, brasage, remplacement de vanne ou de tronçon). Hors urgence vitale, le devis est expliqué avant ouverture du chantier.",
    },
    {
      h2: "Zone",
      body: "Base à Caluire-et-Cuire (130 Grande rue de Saint Clair). Déplacements Lyon, Villeurbanne, Rillieux et communes limitrophes. Un avis Google décrit une intervention discrète en commerce en service.",
    },
  ],
  faqs: [
    { q: "Que faire avant l'arrivée du plombier ?", a: "Coupez l'eau au compteur ou à la vanne d'arrêt si vous y avez accès. Éloignez les meubles, photographiez les dégâts pour l'assurance." },
    { q: "Intervenez-vous le week-end ?", a: "PLOMB'ACTIV est joignable 7j/7 pour les urgences. L'atelier est ouvert du lundi au vendredi, 8h à 18h, pour les travaux programmés." },
  ],
};

export const debouchage: CommercialContent = {
  title: "Débouchage canalisation Lyon | WC, évier, douche",
  description: `Débouchage WC, évier et colonnes à Lyon et Caluire. Appelez ${phone}. Diagnostic, intervention, conseils pour éviter la récidive.`,
  h1: "Débouchage à Lyon et Caluire",
  kicker: "Sanitaires",
  lead: "WC qui reflue, siphon lent, colonne qui sent : on diagnostique avant de forcer. Pose et remplacement de WC à poser ou suspendu si le sanitaire est en cause.",
  image: photos.wc,
  imageAlt: "Pose de WC et raccordement d'évacuation, chantier PLOMB'ACTIV",
  delayNote: "Souvent le jour même en semaine si l'accès est clair. Week-end : astreinte, on dit si on peut passer.",
  priceNote: "Pas de forfait unique : accès, colonne ou siphon changent le geste. Devis avant de forcer si ce n'est pas une urgence vitale.",
  crumbs: [{ name: "Débouchage", path: "/debouchage" }],
  related: [
    { href: "/fuite-eau", label: "Fuite d'eau" },
    { href: "/urgences", label: "Urgence" },
    { href: "/devis", label: "Devis" },
  ],
  sections: [
    {
      h2: "Symptômes",
      body: "Eau qui descend mal, glouglou, odeur, chasse qui remonte : souvent un siphon, un bouchon local, parfois une colonne. On n'ouvre pas au hasard.",
      bullets: ["WC bouché", "Évier, douche, baignoire", "Colonne d'évacuation", "Remplacement de WC (photos avant / après sur le site)"],
    },
    {
      h2: "Méthode",
      body: "Inspection, débouchage mécanique adapté, contrôle de l'écoulement. Si le WC est fatigué ou mal raccordé, remplacement (à poser ou suspendu) avec évacuation propre.",
    },
  ],
  faqs: [
    { q: "Faites-vous les débouchages ?", a: "Oui, WC, siphons et colonnes accessibles. Si le bouchon est trop loin ou structurel, on vous le dit avant de poursuivre." },
    { q: "Combien ça coûte ?", a: "Pas de forfait unique : ça dépend de l'accès et du geste. Devis gratuit hors urgence. Ordres de grandeur sur la page tarifs." },
  ],
};

export const chauffeEau: CommercialContent = {
  title: "Remplacement chauffe-eau Lyon | Ballon ECS Caluire",
  description: `Pose et remplacement de chauffe-eau (cumulus Atlantic et équivalents) à Caluire et Lyon. Groupe de sécurité, raccord PER ou cuivre. ${phone}.`,
  h1: "Chauffe-eau et ballon ECS",
  kicker: "Eau chaude",
  lead: "Plus d'eau chaude, groupe de sécurité qui fuit, ballon en fin de vie : diagnostic, remplacement mural ou au sol, brasage et mise en eau.",
  image: photos.cumulus,
  imageAlt: "Pose de ballon d'eau chaude sanitaire Atlantic sur support, Caluire",
  delayNote: "Chantier programmé en semaine (atelier 8h-18h). Panne d'eau chaude : on voit si un créneau d'astreinte tient.",
  priceNote: "Le marché public cite souvent 800 à 2 500 € fourniture + pose selon capacité et accès. Devis PLOMB'ACTIV, gratuit hors urgence.",
  crumbs: [{ name: "Chauffe-eau", path: "/chauffe-eau" }],
  related: [
    { href: "/chauffage", label: "Chaudière gaz" },
    { href: "/fuite-eau", label: "Fuite" },
    { href: "/avis", label: "Avis Google" },
  ],
  sections: [
    {
      h2: "Ce qu'on voit sur chantier",
      body: "Cumulus Atlantic sur support, chauffe-eau mural, colonne d'alimentation, groupe de sécurité. Plusieurs avis Google 5 étoiles portent précisément sur un chauffe-eau.",
      bullets: ["Diagnostic (thermostat, résistance, groupe, arrivée)", "Remplacement mural ou au sol", "Raccordement PER ou cuivre, brasage", "Mise en eau et contrôle d'étanchéité"],
    },
    {
      h2: "Déroulement",
      body: "Coupure, vidange, dépose, pose du neuf, raccordements, groupe de sécurité, essai. Chantier propre. Devis avant travaux hors urgence.",
    },
  ],
  faqs: [
    { q: "Pourquoi mon chauffe-eau ne chauffe plus ?", a: "Souvent le thermostat, la résistance, le groupe de sécurité ou une arrivée coupée. Un diagnostic sur place évite de changer l'appareil pour rien." },
    { q: "Quelle fourchette de prix ?", a: "Le marché public cite souvent 800 à 2 500 € fourniture et pose selon capacité et accès. PLOMB'ACTIV établit son propre devis, gratuit." },
  ],
};

export const chauffage: CommercialContent = {
  title: "Chauffagiste Lyon | Dépannage et chaudière gaz Caluire",
  description: `Dépannage, entretien et remplacement de chaudière gaz à Lyon et Caluire (dont Vaillant). Appelez ${phone}. Devis gratuit.`,
  h1: "Chauffage et chaudière gaz",
  kicker: "Chauffagiste",
  lead: "Chaudière en sécurité, plus de chauffage, vase d'expansion, brûleur : dépannage, entretien ou remplacement. Un avis Google raconte un changement Vaillant un 3 janvier.",
  image: photos.chaudiere,
  imageAlt: "Chaudière gaz ouverte, brûleur et vase d'expansion, intervention PLOMB'ACTIV",
  crumbs: [{ name: "Chauffage", path: "/chauffage" }],
  related: [
    { href: "/chauffe-eau", label: "Chauffe-eau" },
    { href: "/climatisation", label: "Climatisation" },
    { href: "/aides-etat", label: "Aides possibles" },
  ],
  sections: [
    {
      h2: "Dépannage chaudière",
      body: "Corps de chauffe, brûleur, organe gaz, vase d'expansion, carte. On identifie la panne sur site. Pas de promesse de délai miracle : on se déplace depuis Caluire sur Lyon et alentours.",
    },
    {
      h2: "Entretien et remplacement",
      body: "Entretien (brûleur, vase, organe gaz) et remplacement, Vaillant ou autre. Pour un projet de rénovation énergétique, orientation MaPrimeRénov' et CEE au cas par cas, sans garantie d'éligibilité.",
      bullets: ["Dépannage", "Entretien", "Remplacement", "Lien avec ballon ECS si besoin"],
    },
  ],
  faqs: [
    { q: "Faites-vous le chauffage ?", a: "Oui, chaudière gaz : dépannage, entretien, remplacement. Radiateurs et réseaux associés selon le chantier." },
    { q: "Êtes-vous RGE ?", a: "Aucune mention RGE n'est affichée ici. Pour les aides, on oriente le dossier ; l'éligibilité se vérifie au cas par cas." },
  ],
};

export const climatisation: CommercialContent = {
  title: "Climatisation Lyon | Pose et dépannage split Caluire",
  description: `Pose, charge frigorifique et mise en service de split (Fujitsu, Atlantic) à Lyon et Caluire. Entretien et dépannage. ${phone}.`,
  h1: "Climatisation split",
  kicker: "Clim",
  lead: "Pose de split, liaisons, tirage au vide, charge, mise en service. Entretien (filtres, étanchéité, pressions) et dépannage en saison.",
  image: photos.clim,
  imageAlt: "Mise en service climatisation split, manomètres et charge frigorifique",
  crumbs: [{ name: "Climatisation", path: "/climatisation" }],
  related: [
    { href: "/chauffage", label: "Chauffage" },
    { href: "/aides-etat", label: "Aides PAC" },
    { href: "/devis", label: "Devis" },
  ],
  sections: [
    {
      h2: "Installation",
      body: "Split mono ou multi, liaisons frigorifiques, mise sous azote, tirage au vide, charge, mise en service. Photos de chantier avec manomètres Fujitsu / Atlantic.",
    },
    {
      h2: "Entretien et panne",
      body: "Filtres, étanchéité, pressions. Split à l'arrêt en pleine chaleur : appelez la ligne directe. On ne promet pas une arrivée en 30 minutes.",
    },
  ],
  faqs: [
    { q: "Faites-vous la climatisation ?", a: "Oui : pose de split, mise en service, entretien et dépannage. PAC : orientation aides si le projet le justifie." },
    { q: "Intervenez-vous à Caluire ?", a: "Oui. L'atelier est à Caluire-et-Cuire. Lyon et communes limitrophes aussi." },
  ],
};

export const plombierCaluire: CommercialContent = {
  title: "Plombier Caluire-et-Cuire | Dépannage local",
  description: `Plombier à Caluire-et-Cuire, 130 Grande rue de Saint Clair. Fuite, débouchage, chauffe-eau, chaudière, clim. Appelez ${phone}.`,
  h1: "Plombier à Caluire-et-Cuire",
  kicker: "Artisan local",
  lead: "Établissement au 130 Grande rue de Saint Clair (QVR5+49). Vous joignez l'atelier qui se déplace, pas un standard national.",
  image: photos.interventionLyon,
  imageAlt: "Matériel PLOMB'ACTIV prêt pour une intervention depuis Caluire-et-Cuire",
  crumbs: [{ name: "Plombier Caluire-et-Cuire", path: "/plombier-caluire-et-cuire" }],
  related: [
    { href: "/plombier-lyon", label: "Plombier Lyon" },
    { href: "/urgences", label: "Urgence" },
    { href: "/zone-intervention", label: "Toutes les communes" },
  ],
  sections: [
    {
      h2: "Un atelier dans la commune",
      body: "PLOMB'ACTIV est basé à Caluire, pas « quelque part en France ». NAP identique à la fiche Google Business validée. SIRET 939 379 699 00019.",
      bullets: ["Caluire-et-Cuire", "Sathonay, Fontaines-sur-Saône, Monts d'Or proches", "Lyon accessible rapidement depuis Saint Clair"],
    },
    {
      h2: "Prestations depuis Caluire",
      body: "Urgence, fuite, débouchage, ballon ECS, chaudière gaz, split. Photos de chantiers réels (brasage, cumulus Atlantic, WC, clim).",
    },
  ],
  faqs: [
    { q: "Intervenez-vous à Caluire ?", a: "Oui, c'est la base. 130 Grande rue de Saint Clair, 69300." },
    { q: "Comment obtenir un devis ?", a: "Appelez ou passez par la page devis. Gratuit, sans engagement." },
  ],
};

export const plombierLyon: CommercialContent = {
  title: "Plombier Lyon | Dépannage, chauffage, clim",
  description: `Plombier à Lyon depuis Caluire-et-Cuire. Urgence, fuite, débouchage, chaudière, clim. Ligne directe ${phone}. Devis gratuit.`,
  h1: "Plombier à Lyon",
  kicker: "Grand Lyon",
  lead: "Intervention sur Lyon 1er à 9e depuis Caluire. Même artisan, même numéro, mêmes photos de chantier. Pas de sous-traitance plateforme.",
  image: photos.reseaux,
  imageAlt: "Réseaux cuivre et PER installés par PLOMB'ACTIV sur un chantier lyonnais",
  crumbs: [{ name: "Plombier Lyon", path: "/plombier-lyon" }],
  related: [
    { href: "/plombier-caluire-et-cuire", label: "Plombier Caluire" },
    { href: "/urgences", label: "Urgence Lyon" },
    { href: "/fuite-eau", label: "Fuite d'eau Lyon" },
  ],
  sections: [
    {
      h2: "Pourquoi un plombier basé à Caluire pour Lyon",
      body: "Saint Clair est au nord de Lyon : les 4e, 1er, 6e, Villeurbanne et la Croix-Rousse sont des trajets de proximité. On ne crée pas une page par arrondissement avec le même texte : si vous êtes dans le 3e ou le 8e, appelez, on vous dit si le déplacement tient.",
      bullets: ["Lyon 1er à 9e selon trajet", "Villeurbanne, Rillieux, Bron", "Urgence joignable 7j/7"],
    },
    {
      h2: "Ce que les avis décrivent à Lyon",
      body: "Chauffe-eau, plomberie de garage, fuite WC en commerce, chaudière Vaillant. Textes clients sur la page avis, note 5,0/5 sur la fiche Google (avis que nous avons publiés : 8 extraits).",
    },
  ],
  faqs: [
    { q: "Quels quartiers de Lyon ?", a: "On se déplace depuis Caluire. Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d'Or. Pour un chantier loin au sud, on confirme au téléphone." },
    { q: "Urgence le dimanche ?", a: "Ligne joignable 7j/7. On ne garantit pas un délai en minutes." },
  ],
};

export const rechercheDeFuite: CommercialContent = {
  title: "Recherche de fuite Lyon | Diagnostic Caluire-et-Cuire",
  description: `Recherche de fuite encastrée, compteur qui tourne, humidité plafond. PLOMB'ACTIV isole, localise, répare. ${phone}. Caluire, Lyon, Villeurbanne.`,
  h1: "Recherche de fuite à Lyon et Caluire",
  kicker: "Diagnostic",
  lead: "Fuite invisible, compteur qui tourne à vide, tache qui s'étend : on cherche avant de casser. Isolation du réseau, test, réparation ciblée.",
  image: photos.degatEaux,
  imageAlt: "Plafond dégradé, recherche de fuite et dégât des eaux",
  showUrgence: true,
  delayNote: "Fuite active : joignable 7j/7. Fuite lente : rendez-vous atelier en semaine.",
  priceNote: "Le coût dépend de l'accessibilité (encastré, dalle, colonne). Devis expliqué avant d'ouvrir un mur, hors urgence vitale.",
  crumbs: [{ name: "Recherche de fuite", path: "/recherche-de-fuite" }],
  related: [
    { href: "/fuite-eau", label: "Fuite d'eau" },
    { href: "/degat-des-eaux", label: "Dégât des eaux" },
    { href: "/urgences", label: "Urgence" },
  ],
  sections: [
    {
      h2: "Ce que ça veut dire sur place",
      body: "On démarre par l'évidence : vanne, compteur, joints, groupe de sécurité, siphon. Si le réseau est encastré, on affine (écoute, points humides, secteurs) avant de casser. L'objectif est de réparer le bon tube, pas de démolir la salle de bains.",
      bullets: ["Compteur qui tourne robinets fermés", "Humidité plafond ou plinthe", "Fuite PER / cuivre encastrée", "Joint de chasse, vanne, collier"],
    },
    {
      h2: "Après la localisation",
      body: "Réparation (brasage, collier, remplacement de tronçon, vanne). Remise en eau et contrôle. Photos du dégât utiles pour l'assurance : on vous laisse le temps de les faire.",
    },
  ],
  faqs: [
    { q: "Faut-il casser le carrelage ?", a: "Pas systématiquement. On commence par le non destructif. Si un ouverture est nécessaire, on vous le dit avant." },
    { q: "Caluire et Villeurbanne ?", a: "Oui. Base à Saint Clair. Villeurbanne, Lyon, Rillieux et communes dans un rayon réaliste depuis l'atelier." },
  ],
};

export const remplacementWc: CommercialContent = {
  title: "Remplacement WC Lyon | Pose et évacuation Caluire",
  description: `Remplacement WC à poser ou suspendu, raccordement évacuation, débouchage associé. PLOMB'ACTIV, Caluire et Lyon. ${phone}.`,
  h1: "Remplacement de WC à Lyon et Caluire",
  kicker: "Sanitaires",
  lead: "WC fissuré, chasse qui fuit, cuvette instable ou évacuation mal raccordée : dépose, pose à poser ou suspendu, joint et essai.",
  image: photos.wcAvantApres,
  imageAlt: "Remplacement WC : sanitaire ancien vers WC suspendu, chantier PLOMB'ACTIV",
  delayNote: "Travaux programmés en semaine. Fuite chasse ou débouchage : possible en astreinte selon le créneau.",
  priceNote: "Fourniture + pose selon modèle (à poser, suspendu, bâti-support). Devis avant commande du sanitaire.",
  crumbs: [{ name: "Remplacement WC", path: "/remplacement-wc" }],
  related: [
    { href: "/debouchage", label: "Débouchage" },
    { href: "/fuite-eau", label: "Fuite" },
    { href: "/realisations", label: "Photos avant / après" },
  ],
  sections: [
    {
      h2: "Quand changer plutôt que débouchager",
      body: "Si la cuvette est fêlée, le mécanisme HS, le WC se déplace ou l'évacuation est mal calée, le débouchage ne suffit pas. Photos avant / après sur le site : passage d'un ancien sanitaire à un suspendu.",
      bullets: ["WC à poser", "WC suspendu et bâti-support", "Joint à lèvre, raccord PVC", "Fuite au pied de cuvette"],
    },
    {
      h2: "Déroulement",
      body: "Protection du sol, dépose, contrôle de la sortie (sortie horizontale ou verticale), pose, silicone si besoin, essai chasse. Propre, comme sur les photos d'atelier.",
    },
  ],
  faqs: [
    { q: "Vous fournissez le WC ?", a: "Oui, ou on pose le vôtre si le modèle est compatible avec la sortie. On le dit au devis." },
    { q: "WC bouché sans remplacement ?", a: "Oui, page débouchage. On ne change pas un WC qui n'en a pas besoin." },
  ],
};

export const degatDesEaux: CommercialContent = {
  title: "Dégât des eaux Lyon | Plombier assurance Caluire",
  description: `Fuite, inondation, plafond, recherche de cause pour assurance. PLOMB'ACTIV isole et répare. Photos du dégât. ${phone}. Lyon et Caluire.`,
  h1: "Dégât des eaux à Lyon et Caluire",
  kicker: "Assurance",
  lead: "Eau au plafond, au sol, dans un commerce : on coupe, on trouve l'origine, on répare. Vous photographiez pour le dossier assurance ; on ne rédige pas l'expertise à votre place.",
  image: photos.degatEaux,
  imageAlt: "Dégât des eaux plafond, intervention plomberie PLOMB'ACTIV",
  showUrgence: true,
  delayNote: "Fuite active : ligne 7j/7. On ne promet pas 30 minutes. On dit si on peut passer.",
  priceNote: "Intervention sur devis. Le remboursement assurance dépend de votre contrat, pas de nous.",
  crumbs: [{ name: "Dégât des eaux", path: "/degat-des-eaux" }],
  related: [
    { href: "/recherche-de-fuite", label: "Recherche de fuite" },
    { href: "/fuite-eau", label: "Fuite d'eau" },
    { href: "/urgences", label: "Urgence" },
  ],
  sections: [
    {
      h2: "Ce qu'on fait (et ce qu'on ne fait pas)",
      body: "On est plombier : isolation, recherche, réparation du réseau. On n'est pas expert d'assurance ni peintre. Un avis Google décrit une fuite WC en commerce, intervention discrète pendant l'ouverture.",
      bullets: ["Couper l'eau, limiter le sinistre", "Trouver la cause (joint, tube, chasse, ballon)", "Réparer pour arrêter l'eau", "Vous laissez des photos datées pour l'assureur"],
    },
    {
      h2: "Zone",
      body: "Caluire-et-Cuire, Lyon, Villeurbanne, Rillieux et communes dans un rayon d'environ 50 km quand le trajet tient. Confirmez au 06 67 44 79 29.",
    },
  ],
  faqs: [
    { q: "Intervenez-vous pour l'assurance ?", a: "On répare la cause plomberie. Le dossier (constat, expert) reste le vôtre et celui de l'assureur." },
    { q: "Faut-il garder l'eau ouverte ?", a: "Non. Coupez si vous pouvez, photographiez, appelez." },
  ],
};

