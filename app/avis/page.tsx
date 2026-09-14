import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Avis clients — PLOMB'ACTIV | Plombier Caluire",
  description: "Avis clients PLOMB'ACTIV, plombier à Caluire-et-Cuire. Pas encore d'avis publics recensés.",
};

export default function AvisPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Avis clients" subtitle={pages.avisIntro} kicker="Témoignages" />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-10 rounded-2xl shadow-card border border-primary/10">
            <p className="font-heading text-2xl text-primary mb-3">Pas encore d&apos;avis public</p>
            <p className="text-gray-600 leading-relaxed">
              La fiche Omizi de {brand.name} n&apos;a pas encore de recommandation. Après une intervention, un retour honnête
              aide les habitants de Caluire-et-Cuire à choisir.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/devis" className="rounded-xl bg-primary text-white px-8 py-3 font-semibold hover:opacity-90">
                Demander un devis
              </Link>
              <a href={brand.phoneHref} className="rounded-xl border border-primary text-primary px-8 py-3 font-semibold hover:bg-accent">
                {brand.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
