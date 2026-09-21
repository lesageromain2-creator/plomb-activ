import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DevisForm from "@/components/DevisForm";
import { brand, equipeConfiance } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Devis gratuit plombier Caluire Lyon | PLOMB'ACTIV",
  description:
    "Devis gratuit plomberie, recherche de fuite, chaudière, ballon ECS, clim à Caluire et Lyon. GHOULI Foued — 06 67 44 79 29.",
};

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Devis gratuit — sans engagement"
        subtitle="Décrivez le désordre ou le chantier. Pour une urgence, appelez le 06 67 44 79 29."
        kicker="Devis"
        imageSrc={photos.reseaux}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8">
              <Image src={photos.wcAvantApres} alt="Avant / après WC suspendu — PLOMB'ACTIV" fill className="object-cover" />
            </div>
            <h2 className="font-heading text-xl text-primary mb-3 font-bold">Pourquoi PLOMB&apos;ACTIV</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{equipeConfiance.intro}</p>
            <ul className="space-y-3 text-gray-700 text-sm">
              {equipeConfiance.bullets.map((b) => (
                <li key={b.title}>
                  <strong className="text-primary">{b.title}</strong> — {b.text}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Urgence ?{" "}
              <a href={brand.phoneHref} className="text-secondary font-semibold">
                {brand.phone}
              </a>
            </p>
          </div>
          <div className="w-full rounded-2xl bg-white p-6 border border-black/5">
            <DevisForm />
            <p className="mt-6 text-center text-sm text-gray-600">
              <Link href="/tarifs" className="text-secondary font-medium">
                Voir les ordres de grandeur
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
