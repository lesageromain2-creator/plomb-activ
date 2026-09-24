import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaRow from "@/components/CtaRow";
import RelatedLinks from "@/components/RelatedLinks";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { brand } from "@/lib/siteCopy";
import { pageMeta } from "@/lib/pageMeta";
import { villeBySlug, villes } from "@/lib/villes";

const metiers = [
  { href: "/urgences", label: "Urgence plomberie" },
  { href: "/fuite-eau", label: "Fuite d'eau" },
  { href: "/recherche-de-fuite", label: "Recherche de fuite" },
  { href: "/degat-des-eaux", label: "Dégât des eaux" },
  { href: "/debouchage", label: "Débouchage canalisation" },
  { href: "/canalisation", label: "Canalisation bouchée" },
  { href: "/remplacement-wc", label: "Remplacement WC" },
  { href: "/robinetterie", label: "Robinetterie / mitigeur" },
  { href: "/chauffe-eau", label: "Chauffe-eau" },
  { href: "/groupe-de-securite", label: "Groupe de sécurité" },
  { href: "/chauffage", label: "Chaudière gaz" },
  { href: "/climatisation", label: "Climatisation split" },
];

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = villeBySlug(params.ville);
  if (!v) return {};
  return pageMeta(
    `/plombier/${v.slug}`,
    `Plombier ${v.name} (${v.cp}) | Fuite, débouchage, chauffe-eau`,
    `Plombier à ${v.name} (${v.cp}) : fuite, débouchage, WC, chauffe-eau, chaudière. PLOMB'ACTIV, atelier Caluire-et-Cuire. ${v.driveMin}. ${brand.phone}.`
  );
}

export default function VillePage({ params }: { params: { ville: string } }) {
  const v = villeBySlug(params.ville);
  if (!v) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Quel plombier appeler à ${v.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `PLOMB'ACTIV au ${brand.phone}. Atelier 130 Grande rue de Saint Clair, 69300 Caluire-et-Cuire. Intervention à ${v.name} (${v.cp}). ${v.driveMin}.`,
        },
      },
      {
        "@type": "Question",
        name: `Faites-vous le débouchage et les fuites à ${v.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oui : fuite, recherche de fuite, dégât des eaux, débouchage WC / évier / colonne, remplacement WC, mitigeur, chauffe-eau, chaudière gaz, split. À ${v.name} on voit surtout : ${v.localIssue}`,
        },
      },
      {
        "@type": "Question",
        name: `Intervenez-vous 24h/24 à ${v.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Joignable 7j/7 pour les urgences. Atelier du lundi au vendredi, 8h-18h. On ne promet pas 30 minutes ni un standard 24h/24 : on dit si on peut passer.",
        },
      },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Plombier à ${v.name}`,
    provider: { "@id": `${brand.siteUrl}/#business` },
    areaServed: { "@type": "City", name: v.name },
    url: `${brand.siteUrl}/plombier/${v.slug}`,
  };

  return (
    <div className="min-h-screen bg-cream">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Zone", path: "/zone-intervention" },
          { name: `Plombier ${v.name}`, path: `/plombier/${v.slug}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <PageHero
        title={`Plombier à ${v.name}`}
        subtitle={`${v.cp}. Depuis Caluire-et-Cuire. ${v.driveMin}. ${brand.phone}.`}
        kicker="Zone d'intervention"
        imageSrc={v.image}
      />
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={v.image} alt={v.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-heading text-2xl text-primary mb-3 font-bold">
              Dépannage à {v.name}, pas une page clone
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{v.extra}</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Habitat : {v.housing} Ce qu&apos;on croise : {v.localIssue}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Les sites nationaux saturent « plombier {v.name} » avec 24h/24 et 30 minutes. PLOMB&apos;ACTIV est à{" "}
              {brand.address}. Photos de chantiers réels, devis hors urgence, ligne directe.
            </p>
            <h3 className="font-heading text-xl text-primary font-bold mb-2">Quartiers et secteurs</h3>
            <p className="text-gray-700 text-sm mb-6">{v.quartiers.join(" · ")}</p>
            <CtaRow showUrgence />
            <RelatedLinks items={metiers.slice(0, 6)} />
            <div className="mt-8">
              <h3 className="font-heading text-lg text-primary font-bold mb-2">Autres recherches</h3>
              <ul className="flex flex-wrap gap-2 text-sm">
                {v.neighbors.map((n) => (
                  <li key={n.slug}>
                    <Link href={`/plombier/${n.slug}`} className="rounded-full bg-white border border-black/10 px-3 py-1 text-secondary">
                      Plombier {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/plombier-caluire-et-cuire" className="rounded-full bg-white border border-black/10 px-3 py-1 text-secondary">
                    Atelier Caluire
                  </Link>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm">
              <Link href="/zone-intervention" className="text-secondary font-semibold">
                Toutes les communes
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl text-primary font-bold mb-4 text-center">
            Mots-clés : ce qu&apos;on fait à {v.name}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {metiers.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="block rounded-xl border border-black/5 px-4 py-3 hover:border-secondary">
                  {m.label} {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
