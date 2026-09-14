import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Services — PLOMB'ACTIV | Plombier Caluire-et-Cuire",
  description: "Prestations plomberie à Caluire-et-Cuire : fuite, débouchage, sanitaires, chauffe-eau, salle de bain, réseaux. Devis gratuit.",
};

const prestations = [
  { nom: "Dépannage fuite d'eau", prix: "Dès 89 €", duree: "1-3h", urgence: true, desc: "Intervention sous 2h, détection et réparation de toute fuite visible ou cachée." },
  { nom: "Débouchage canalisation", prix: "Dès 79 €", duree: "1-2h", urgence: true, desc: "Hydrocurage haute pression, furet électrique, caméra d'inspection." },
  { nom: "Installation sanitaire", prix: "Sur devis", duree: "1-2j", urgence: false, desc: "Pose de WC, lavabo, baignoire, douche, évier. Fourniture possible." },
  { nom: "Chauffe-eau / ballon", prix: "Dès 299 €", duree: "Demi-journée", urgence: false, desc: "Remplacement, installation thermodynamique, entretien annuel." },
  { nom: "Salle de bain complète", prix: "Sur devis", duree: "3-7j", urgence: false, desc: "Conception, fourniture, pose. Coordination avec carreleur si besoin." },
  { nom: "VMC et aération", prix: "Dès 149 €", duree: "Demi-journée", urgence: false, desc: "Pose, entretien, remplacement de groupe de ventilation." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Nos services"
        subtitle="Plomberie, dépannage et rénovation — un artisan à Caluire-et-Cuire pour chaque type d&apos;intervention."
        kicker="Prestations"
        imageSrc="/images/metier/pipes.jpg"
      />
      <section className="py-12 px-4 bg-white border-b border-primary/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-card shrink-0">
            <Image src="/images/metier/kit.jpg" alt="Outils plomberie professionnelle" fill className="object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">{pages.servicesIntro}</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-center mb-10">Prix indicatifs — devis gratuit avant toute intervention.</p>
          <div className="space-y-5">
            {prestations.map((p) => (
              <div key={p.nom} className="bg-white rounded-2xl p-6 shadow-card border border-primary/10 hover:border-secondary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="font-heading text-xl text-primary">{p.nom}</h2>
                  <span className="text-secondary font-bold">{p.prix}</span>
                </div>
                <p className="text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-500">{p.duree}</span>
                  {p.urgence && <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full font-medium">Urgence 24h/24</span>}
                </div>
                <Link href="/devis" className="mt-4 inline-block text-secondary font-semibold hover:underline">
                  Demander un devis →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/devis" className="rounded-xl bg-primary text-white px-8 py-3 font-semibold hover:opacity-90 inline-block shadow-card">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
