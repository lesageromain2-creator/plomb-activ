import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "PAC & Climatisation — PLOMB'ACTIV | Caluire-et-Cuire",
  description: "Installation d'eau et de gaz à Caluire-et-Cuire. PAC et clim sur devis. PLOMB'ACTIV.",
};

export default function PacClimPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="PAC & Climatisation"
        subtitle="Pompe à chaleur et clim : à étudier sur devis. Activité déclarée : installation d&apos;eau et de gaz (NAF 4322G)."
        kicker="Sur devis"
        imageSrc="/images/metier/heater.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Pompe à chaleur (PAC)</h2>
              <p className="text-gray-700 leading-relaxed">
                Air/air ou air/eau — étude de dimensionnement sur devis. {pages.pacExtra}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Climatisation</h2>
              <p className="text-gray-700 leading-relaxed">
                Mono ou multi-split. Pose discrète, réseaux soignés. Frais l&apos;été, aide au chauffage l&apos;hiver selon modèle.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Aides et financement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                MaPrimeRénov&apos;, CEE, TVA 5,5 % — nous vous accompagnons pour monter votre dossier.
              </p>
              <Link href="/aides-etat" className="text-secondary font-semibold hover:underline">
                En savoir plus sur les aides →
              </Link>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/devis" className="rounded-xl bg-primary text-white px-8 py-3 font-semibold hover:opacity-90 inline-block shadow-card">
                Devis gratuit PAC / Clim
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10 order-1 lg:order-2">
            <Image src="/images/metier/bathroom.jpg" alt="Équipements confort" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
