import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Urgence plombier Lyon Caluire | Fuite, dégât des eaux 7j/7",
  description:
    "Dépannage plomberie à Caluire et Lyon : fuite, dégât des eaux, WC, chaudière en sécurité. PLOMB'ACTIV — 06 67 44 79 29.",
};

export default function UrgencesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        variant="urgent"
        title="Urgence & dégât des eaux"
        subtitle="Fuite, inondation, WC, plus d'ECS, chaudière en sécurité : isolation du réseau et réparation."
        kicker={brand.phone}
        imageSrc={photos.degatEaux}
      />
      <section className="py-8 px-4 bg-secondary text-white text-center">
        <a href={brand.phoneHref} className="font-heading text-3xl md:text-4xl font-extrabold">
          {brand.phone}
        </a>
        <p className="mt-2 text-sm text-white/90">
          {brand.name} · {brand.address}
        </p>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={photos.degatEaux} alt="Dégât des eaux — plafond, recherche de fuite" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-2xl text-primary mb-4 font-bold">Recherche de fuite et isolation</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{pages.urgencesBody}</p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>— Fuite apparente ou encastrée, vanne d&apos;arrêt</li>
              <li>— Dégât des eaux, plafond, colonne</li>
              <li>— WC / évacuation bouchée</li>
              <li>— Ballon ECS, chaudière gaz, split</li>
              <li>— Commerce en service (intervention discrète)</li>
            </ul>
            <a href={brand.phoneHref} className="inline-block rounded-lg bg-secondary text-white px-8 py-4 text-lg font-bold">
              Appeler maintenant
            </a>
            <p className="mt-6 text-sm text-gray-600">
              Travaux programmés :{" "}
              <Link href="/devis" className="text-secondary font-semibold">
                devis gratuit
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
