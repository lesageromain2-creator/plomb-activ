import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaRow from "@/components/CtaRow";
import { pageMeta } from "@/lib/pageMeta";
import { brand } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = pageMeta(
  "/a-propos",
  "Atelier à Caluire-et-Cuire",
  `PLOMB'ACTIV, plombier chauffagiste à Caluire-et-Cuire. SIRET ${brand.siret}. Atelier 130 Grande rue de Saint Clair. ${brand.phone}.`
);

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="L'atelier PLOMB'ACTIV"
        subtitle="Entreprise à Caluire-et-Cuire. Plomberie, chauffage gaz, climatisation split, urgences."
        kicker="À propos"
        imageSrc={photos.artisan}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={photos.artisan}
              alt="Brasage cuivre sous ballon ECS, chantier réel PLOMB'ACTIV"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              PLOMB&apos;ACTIV est une entreprise de travaux d&apos;installation d&apos;eau et de gaz (NAF 4322G), SIRET{" "}
              {brand.siret}, basée au {brand.address}.
            </p>
            <p>
              Pas de plateforme, pas de prénom mis en avant sur le site : vous appelez l&apos;atelier. Fiche Google Business
              validée. Photos de chantiers (ballon Atlantic, chaudière, clim Fujitsu, WC, réseaux) prises sur site.
            </p>
            <p>
              Horaires atelier : du lundi au vendredi, 8h à 18h. Urgences : joignable 7j/7. On n&apos;affiche pas « 24h/24 »
              ni « 30 minutes ».
            </p>
            <CtaRow />
          </div>
        </div>
      </section>
    </div>
  );
}
