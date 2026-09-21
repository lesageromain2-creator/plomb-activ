import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Chaudière gaz & ballon ECS Lyon Caluire | PLOMB'ACTIV",
  description:
    "Remplacement chaudière gaz (Vaillant…), entretien, ballon ECS Atlantic. GHOULI Foued — Caluire-et-Cuire. 06 67 44 79 29.",
};

export default function EntretienPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Chaudière gaz & eau chaude sanitaire"
        subtitle="Dépannage, entretien, remplacement de chaudière. Pose de ballon ECS, groupe de sécurité."
        kicker="Chauffage"
        imageSrc={photos.chaudiere}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={photos.chaudiere} alt="Chaudière gaz — brûleur, vase d'expansion" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={photos.cumulus} alt="Ballon ECS Atlantic sur support" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3 font-bold">Chaudière gaz</h2>
              <p className="text-gray-700 leading-relaxed">
                Corps de chauffe, brûleur, organe gaz, vase d&apos;expansion, carte. Dépannage, entretien, remplacement
                (Vaillant et autres). Un avis Google : chaudière Vaillant changée le 3 janvier, juste après les fêtes.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3 font-bold">Ballon ECS</h2>
              <p className="text-gray-700 leading-relaxed">
                Cumulus mural ou au sol, groupe de sécurité, brasage cuivre, raccordement PER. Pose Atlantic et équivalents.
                Diagnostic rapide — plusieurs avis 5 étoiles sur ce geste.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3 font-bold">Entretien</h2>
              <p className="text-gray-700 leading-relaxed">{pages.entretienExtra}</p>
            </div>
            <a href={brand.phoneHref} className="inline-block rounded-lg bg-secondary text-white px-8 py-3 font-bold">
              {brand.phone}
            </a>
            <Link href="/devis" className="ml-3 text-secondary font-semibold">
              Devis →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
