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

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = villeBySlug(params.ville);
  if (!v) return {};
  return pageMeta(
    `/plombier/${v.slug}`,
    `Plombier ${v.name} | Dépannage depuis Caluire`,
    `Plombier à ${v.name} : fuite, débouchage, chauffe-eau, chaudière. PLOMB'ACTIV se déplace depuis Caluire-et-Cuire (${v.driveMin}). ${brand.phone}.`
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
        name: `PLOMB'ACTIV intervient-il à ${v.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oui. L'atelier est au 130 Grande rue de Saint Clair, Caluire-et-Cuire. Trajet vers ${v.name} : ${v.driveMin}. On confirme le créneau au ${brand.phone}.`,
        },
      },
      {
        "@type": "Question",
        name: `Quels dépannages à ${v.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Fuite, recherche de fuite, débouchage, WC, ballon ECS, chaudière gaz, split. Typique à ${v.name} : ${v.localIssue}`,
        },
      },
    ],
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
      <PageHero
        title={`Plombier à ${v.name}`}
        subtitle={`Déplacement depuis Caluire-et-Cuire. ${v.driveMin}. Ligne directe ${brand.phone}.`}
        kicker="Zone d'intervention"
        imageSrc={v.image}
      />
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={v.image} alt={v.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-heading text-2xl text-primary mb-3 font-bold">Pourquoi cette page n'est pas un clone</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{v.extra}</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Habitat local : {v.housing} Ce qu'on croise souvent : {v.localIssue}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              PLOMB&apos;ACTIV n'a pas d'agence à {v.name}. L'établissement est à {brand.address}. NAP identique à
              la fiche Google. Devis gratuit hors urgence, pas de délai magique affiché.
            </p>
            <CtaRow showUrgence />
            <RelatedLinks
              items={[
                { href: "/fuite-eau", label: "Fuite d'eau" },
                { href: "/debouchage", label: "Débouchage" },
                { href: "/recherche-de-fuite", label: "Recherche de fuite" },
                { href: "/plombier-caluire-et-cuire", label: "Atelier Caluire" },
              ]}
            />
            <p className="mt-6 text-sm">
              <Link href="/zone-intervention" className="text-secondary font-semibold">
                Toutes les communes
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
