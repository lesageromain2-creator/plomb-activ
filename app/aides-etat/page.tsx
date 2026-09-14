import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Aides de l'État — PLOMB'ACTIV | Caluire-et-Cuire",
  description: "Repères MaPrimeRénov', CEE, TVA 5,5% pour un projet plomberie / rénovation à Caluire-et-Cuire.",
};

export default function AidesEtatPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Aides de l&apos;État"
        subtitle="MaPrimeRénov', CEE, TVA 5,5 % — financez votre projet chauffage et rénovation énergétique."
        kicker="Accompagnement"
        imageSrc="/images/lyon/lyon-1.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
            <Image src="/images/lyon/lyon-4.jpg" alt="Caluire et métropole lyonnaise" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">MaPrimeRénov&apos;</h2>
              <p className="text-gray-700 leading-relaxed">
                Aide pour le remplacement de chaudière, l&apos;installation de PAC ou de travaux d&apos;isolation. Montant selon vos
                revenus et la performance du projet.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">CEE (Certificats d&apos;Économies d&apos;Énergie)</h2>
              <p className="text-gray-700 leading-relaxed">
                Prime versée par les fournisseurs d&apos;énergie pour les travaux éligibles. Cumulable avec MaPrimeRénov&apos; sous
                conditions.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">TVA 5,5 %</h2>
              <p className="text-gray-700 leading-relaxed">
                Taux réduit applicable aux travaux de rénovation énergétique dans les logements de plus de 2 ans.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Notre accompagnement</h2>
              <p className="text-gray-700 leading-relaxed">{pages.aidesExtra}</p>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/devis" className="rounded-xl bg-primary text-white px-8 py-3 font-semibold hover:opacity-90 inline-block shadow-card">
                Demander un devis et étudier les aides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
