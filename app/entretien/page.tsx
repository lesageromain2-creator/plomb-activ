import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Chaudière & chauffage Lyon Caluire | Entretien PLOMB'ACTIV",
  description:
    "Remplacement chaudière Vaillant, entretien chauffage et chauffe-eau à Caluire et Lyon. GHOULI Foued — 07 65 26 65 26.",
};

export default function EntretienPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Chauffage, chaudière, entretien"
        subtitle="Pose, remplacement et entretien de chaudière. Chauffe-eau. Détartrage. Caluire & Lyon."
        kicker="Chauffagiste"
        imageSrc="/images/metier/heater.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
            <Image src="/images/about.jpg" alt="Chaudière et chauffe-eau — GHOULI Foued" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Chaudière</h2>
              <p className="text-gray-700 leading-relaxed">
                Installation, remplacement (Vaillant et autres marques) et dépannage. Un client Google : chaudière Vaillant
                changée le 3 janvier, juste après les fêtes, à un prix abordable.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Chauffe-eau</h2>
              <p className="text-gray-700 leading-relaxed">
                Diagnostic rapide, réparation ou remplacement. Plusieurs avis 5 étoiles portent exactement sur ce geste.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Entretien</h2>
              <p className="text-gray-700 leading-relaxed">{pages.entretienExtra}</p>
            </div>
            <a href={brand.phoneHref} className="inline-block rounded-xl bg-primary text-white px-8 py-3 font-semibold">
              {brand.phone}
            </a>
            <Link href="/devis" className="ml-3 text-secondary font-semibold hover:underline">
              Devis →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
