# Mission SEO PLOMB'ACTIV (Caluire-et-Cuire / Lyon)

**Règle :** aucune position Google n'est garantie. Objectif : couverture sémantique, NAP, pages utiles, conversion, signaux locaux honnêtes.

**Interdit (non fait) :** faux avis, PBN, achat de liens, pages villes clones, stuffing, 24h/24 inventé, RGE inventé, 30 minutes.

## 1. Audit (état au 22 sept. 2026)

### Technique
| Point | Constat | Action |
| HTTPS | Site en prod `https://plombactiv.com` | OK |
| robots.txt | `/robots.txt` allow + sitemap | OK |
| sitemap | Mis à jour (services + geo + conseils) | Fait |
| Canonical | `metadataBase` + alternates | OK |
| Indexation | Pages publiques, pas de noindex involontaire | OK |
| Duplicate | `/entretien` → `/chauffage`, `/pac-clim` → `/climatisation` (301) | Fait |
| JSON-LD | Plumber + HVAC + LocalBusiness + WebSite + FAQ homepage + FAQ pages + Breadcrumb | Fait |
| AggregateRating | Uniquement les avis Google recopiés (8 extraits). GBP public peut afficher plus : ne pas inventer le delta | Contrôle |
| Horaires schema | Weekend n'est plus 00:00–23:59 (ce n'était pas du 24h atelier) | Corrigé |
| Images | Chantiers réels, alt descriptifs | Continuer |
| Core Web Vitals | À mesurer dans Search Console / CrUX après déploiement. AVIF/WebP activés | P1 |
| JS | App Router, contenu SSR | OK |

### On-page (cannibalisation évitée)
| Intention | URL canonique |
| Plombier Caluire | `/plombier-caluire-et-cuire` |
| Plombier Lyon | `/plombier-lyon` |
| Urgence | `/urgences` |
| Fuite | `/fuite-eau` |
| Débouchage | `/debouchage` |
| Chauffe-eau | `/chauffe-eau` |
| Chauffage / chaudière | `/chauffage` |
| Clim | `/climatisation` |
| Devis | `/devis` |
| Pas de `/plombier-lyon-1` … `/9` | Liste sur `/zone-intervention` |

### Local / NAP
- Nom : PLOMB'ACTIV (pas de keywords dans le nom GBP)
- Adresse : 130 Grande rue de Saint Clair, 69300 Caluire-et-Cuire
- Tél : 06 67 44 79 29
- Site : https://plombactiv.com
- Fiche GBP validée (avis 5,0 ; extraits site = 8 textes)
- **À faire dans GBP (humain) :** catégories Plombier + Chauffagiste + Clim si vrai ; photos véhicule ; description sans stuffing ; zones desservies ; ne pas masquer l'adresse si accueil/atelier réel

### Concurrence (lecture SERP, pas de scraping massif)
Les SERP « plombier Lyon / urgence » sont tenues par des enseignes nationales, PagesJaunes, et artisans avec beaucoup d'avis et d'historique de domaine. PLOMB'ACTIV gagne sur : NAP réel Caluire, photos chantier, avis Google, ligne directe. Il perd aujourd'hui sur : âge de domaine, volume d'avis, citations, backlinks. D'où le plan 90 jours ci-dessous, pas une promesse de n°1.

## 2. Architecture livrée

```
/ (home)
/plombier-caluire-et-cuire
/plombier-lyon
/urgences
/fuite-eau
/debouchage
/chauffe-eau
/chauffage
/climatisation
/devis /contact /avis /realisations /tarifs
/a-propos /conseils /conseils/*
/zone-intervention
```

## 3–7. Pages : implémentées (copy atelier, photos réelles, CTA tel + devis).

## 8–10. GBP / avis / photos
Checklist propriétaire (hors code) :
1. Après chaque chantier satisfait : SMS avec lien GBP, demande neutre.
2. Répondre à chaque avis (prestation + commune, sans stuffing).
3. Ajouter photos véhicule / avant-après avec noms de fichiers descriptifs.

## 11–13. Schema, titles, maillage : en prod via ce déploiement.

## 14. Calendrier contenu 12 mois (2 à 4 pièces/mois si un vrai sujet)
Mois 1 : fuite, couper l'eau, WC, chauffe-eau (en ligne).
Mois 2–3 : radiateur froid, gel canalisations, groupe de sécurité, entretien clim.
Puis : copropriété, dégât des eaux assurance, choix ballon, chaudière en sécurité.
Uniquement si l'atelier a un angle réel (photo ou cas).

## 15. Geo : Caluire + Lyon seulement. Pas d'arrondissements clones.

## 16–20. Citations et backlinks (white hat)
Priorité : GBP, PagesJaunes (fiche gratuite d'abord), Bing Places, Apple Business Connect, 118000, CAPEB 69 / CMA, association commerçants Caluire, fournisseurs (Atlantic, Fujitsu si relation réelle).
Outreach : contenu utile aux partenaires, jamais « envoyez-moi un dofollow ».
Liste type (à qualifier au téléphone, e-mails à trouver légalement) :
CAPEB Rhône, CMA Auvergne-Rhône-Alpes, ville de Caluire (annuaire entreprises), Solocal/PJ, Bing Places, Apple Business Connect, 118000, Mappy, réseaux BTP Lyon, showrooms sanitaires, syndics avec qui l'atelier a déjà travaillé.

Template A (partenaire) :
« Nous intervenons en plomberie / chauffage sur Caluire et Lyon. Si vos clients posent des questions fuites / ballon / entretien, nous pouvons fournir une fiche pratique. Si c'est utile, un lien vers la page concernée de plombactiv.com suffit. »

## 21–22. Search Console + tracking
- Propriété domaine + sitemap `https://plombactiv.com/sitemap.xml`
- Inspection URL homepage après deploy
- Liens tel : attribut `data-cta="tel"` (GA4 à brancher si `NEXT_PUBLIC_GA_ID` un jour)
- Ne pas inventer de conv. WhatsApp s'il n'est pas sur le site

## 23–26. Perf, images, E-E-A-T, FAQ : pages + `/a-propos`.

## 27. 30 / 60 / 90 jours
- J1–7 : deploy, GSC, GBP, NAP, titles (cette PR)
- J8–21 : photos GBP, PJ/Bing/Apple, 5 premiers partenaires réels
- J22–45 : avis systématiques, 2 conseils supplémentaires si cas réel
- J45–90 : presse locale seulement avec un vrai sujet (prévention gel, copro)

## Livrables code
Pages commerciales, redirects, sitemap, JSON-LD, nav/footer, homepage, conseils, à-propos, this file.
