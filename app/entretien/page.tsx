import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Entretien & détartrage — PLOMB'ACTIV | Caluire",
  description: "Détartrage et entretien des équipements de plomberie à Caluire-et-Cuire. Chauffe-eau, robinetterie.",
};

export default function EntretienPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Entretien & détartrage"
        subtitle="Détartrage des équipements pour prolonger leur durée de vie. Entretien chauffe-eau et robinetterie."
        kicker="Caluire-et-Cuire"
        imageSrc="/images/metier/heater.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
            <Image src="/images/about.jpg" alt="Entretien équipements" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Pourquoi détartrer ?</h2>
              <p className="text-gray-700 leading-relaxed">
                Le tartre use chauffe-eau, robinets et canalisations. Un détartrage régulier prolonge la durée de vie des
                équipements et limite les pannes — surtout dans les logements anciens du nord lyonnais.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Chauffe-eau</h2>
              <p className="text-gray-700 leading-relaxed">
                Remplacement, pose et entretien de chauffe-eau. Fourchette de marché souvent citée : 800 à 2 500 € — le devis
                PLOMB&apos;ACTIV reflète votre installation réelle.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Déroulement</h2>
              <p className="text-gray-700 leading-relaxed">
                {pages.entretienExtra}
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Link href="/devis" className="rounded-xl bg-primary text-white px-8 py-3 font-semibold hover:opacity-90 inline-block shadow-card">
                Demander un devis entretien
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
