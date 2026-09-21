import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Pose clim split Lyon Caluire | Mise en service PLOMB'ACTIV",
  description:
    "Pose, charge frigorifique et mise en service de climatisation split (Fujitsu, Atlantic). Entretien et dépannage. GHOULI Foued, Caluire.",
};

export default function PacClimPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Climatisation split — pose & mise en service"
        subtitle="Liaisons frigorifiques, tirage au vide, charge, mise en service. Entretien et dépannage."
        kicker="Clim"
        imageSrc={photos.clim}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3 font-bold">Pose de split</h2>
              <p className="text-gray-700 leading-relaxed">{pages.pacExtra}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3 font-bold">Entretien &amp; dépannage</h2>
              <p className="text-gray-700 leading-relaxed">
                Contrôle d&apos;étanchéité, filtres, pressions. Panne en saison : {brand.phone}.
              </p>
            </div>
            <Link href="/aides-etat" className="text-secondary font-semibold">
              Aides possibles (PAC) →
            </Link>
            <div>
              <a href={brand.phoneHref} className="inline-block rounded-lg bg-secondary text-white px-8 py-3 font-bold">
                {brand.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image src={photos.clim} alt="Mise en service split Fujitsu Atlantic — manomètres" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
