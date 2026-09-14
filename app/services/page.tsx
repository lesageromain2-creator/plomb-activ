import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Plombier chauffagiste Lyon Caluire | Services PLOMB'ACTIV",
  description:
    "Plomberie, chauffage, climatisation, chaudière, pose et entretien de clim, dépannage à Caluire-et-Cuire et Lyon. Devis gratuit GHOULI Foued.",
};

const prestations = [
  { nom: "Urgence fuite d'eau", prix: "Sur devis", duree: "Intervention rapide", urgence: true, desc: "Détection et réparation. Particuliers et commerces (intervention discrète en service)." },
  { nom: "Débouchage & WC", prix: "Sur devis", duree: "1-2h", urgence: true, desc: "Canalisations, WC, évacuations — comme au Nuage Café, sans déranger la clientèle." },
  { nom: "Chauffe-eau", prix: "Sur devis", duree: "Demi-journée", urgence: true, desc: "Diagnostic en quelques minutes, réparation ou remplacement. Avis 5 étoiles sur ce geste." },
  { nom: "Chaudière", prix: "Sur devis", duree: "Selon modèle", urgence: true, desc: "Pose, remplacement (Vaillant et autres), dépannage, entretien." },
  { nom: "Climatisation", prix: "Sur devis", duree: "1-2j", urgence: false, desc: "Pose de clim, entretien annuel, dépannage." },
  { nom: "Plomberie complète", prix: "Sur devis", duree: "Selon chantier", urgence: false, desc: "Réseaux, garage, sanitaires, salle de bain — du neuf à l'ancien." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Services — plomberie, chauffage, clim"
        subtitle="GHOULI Foued à Caluire : urgence, dépannage, chaudière, pose et entretien de clim."
        kicker="Grand Lyon"
        imageSrc="/images/metier/pipes.jpg"
      />
      <section className="py-12 px-4 bg-white border-b border-primary/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-card shrink-0">
            <Image src="/images/metier/kit.jpg" alt="Outils plomberie chauffage climatisation" fill className="object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">{pages.servicesIntro}</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-center mb-10">Devis gratuit avant travaux — appelez le 07 65 26 65 26.</p>
          <div className="space-y-5">
            {prestations.map((p) => (
              <div key={p.nom} className="bg-white rounded-2xl p-6 shadow-card border border-primary/10">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="font-heading text-xl text-primary">{p.nom}</h2>
                  <span className="text-secondary font-bold">{p.prix}</span>
                </div>
                <p className="text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-500">{p.duree}</span>
                  {p.urgence && <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full font-medium">Urgence</span>}
                </div>
                <Link href="/devis" className="mt-4 inline-block text-secondary font-semibold hover:underline">
                  Demander un devis →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
