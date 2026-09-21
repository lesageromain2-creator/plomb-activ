import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Tarifs — PLOMB'ACTIV | Prix indicatifs plomberie Caluire",
  description:
    "Fourchettes de marché pour un plombier à Caluire-et-Cuire. Devis gratuit PLOMB'ACTIV selon votre chantier.",
};

const tarifs = [
  { service: "Tarif horaire (marché)", prix: "45 – 65 €/h", inclus: "Moyenne constatée, hors fournitures" },
  { service: "Remplacement chauffe-eau", prix: "800 – 2 500 €", inclus: "Fourchette marché, fourniture + pose" },
  { service: "Refonte plomberie T3", prix: "3 000 – 8 000 €", inclus: "Réseaux, selon configuration" },
  { service: "Rénovation salle de bains complète", prix: "8 000 – 15 000 €", inclus: "Fourchette marché, projet complet" },
  { service: "Dépannage fuite / débouchage", prix: "Sur devis", inclus: "Diagnostic + intervention" },
  { service: "Détartrage équipements", prix: "Sur devis", inclus: "Selon accessibilité et état" },
];

const faq = [
  {
    q: "Ces prix sont-ils ceux de PLOMB'ACTIV ?",
    r: "Non. Ce sont des moyennes indicatives du marché local. PLOMB'ACTIV établit son propre devis selon votre projet, gratuitement et sans engagement.",
  },
  {
    q: "Y a-t-il des frais de déplacement ?",
    r: "L'entreprise est basée à Caluire-et-Cuire et intervient dans un rayon d'environ 10 km. Le déplacement est précisé dès le premier contact.",
  },
  {
    q: "Puis-je avoir un devis par téléphone ?",
    r: "Pour une estimation, oui. Pour un devis ferme, une visite ou l'envoi de photos est souvent nécessaire.",
  },
];

export default function TarifsPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Nos tarifs" subtitle={pages.tarifsIntro} kicker="Transparence" />
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card order-2 md:order-1">
            <Image src="/images/chantier/reseaux.jpg" alt="Réseaux cuivre et PER — PLOMB'ACTIV" fill className="object-cover" />
          </div>
          <p className="text-gray-700 leading-relaxed order-1 md:order-2">
            Chez PLOMB&apos;ACTIV, pas de surprise : le devis décrit ce qui est inclus avant de commencer. Artisan{" "}
            <strong>local à Caluire-et-Cuire</strong>, qui connaît les logements du nord lyonnais et des Monts d&apos;Or.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto rounded-2xl shadow-card border border-primary/10">
            <table className="w-full bg-white">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left p-4 font-heading">Prestation</th>
                  <th className="text-left p-4 font-heading">Fourchette marché</th>
                  <th className="text-left p-4 font-heading">Précision</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t) => (
                  <tr key={t.service} className="border-t border-gray-100">
                    <td className="p-4 font-medium text-gray-800">{t.service}</td>
                    <td className="p-4 text-secondary font-bold">{t.prix}</td>
                    <td className="p-4 text-gray-600 text-sm">{t.inclus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Sources : fourchettes publiques de marché (Omizi). Elles ne représentent pas les tarifs de PLOMB&apos;ACTIV.
          </p>
          <div className="mt-12">
            <h2 className="font-heading text-2xl text-primary mb-4">FAQ — Prix</h2>
            <div className="space-y-4">
              {faq.map((f) => (
                <div key={f.q} className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm">
                  <h3 className="font-medium text-gray-900">{f.q}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{f.r}</p>
                </div>
              ))}
            </div>
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
