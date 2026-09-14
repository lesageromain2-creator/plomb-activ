import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Pose clim Lyon Caluire | Entretien climatisation PLOMB'ACTIV",
  description:
    "Pose de climatisation, entretien et dépannage clim à Caluire-et-Cuire et Lyon. GHOULI Foued — devis gratuit.",
};

export default function PacClimPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Climatisation — pose & entretien"
        subtitle="Pose de clim, entretien annuel, dépannage. Confort sur Lyon et Caluire."
        kicker="Clim"
        imageSrc="/images/metier/heater.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Pose de clim</h2>
              <p className="text-gray-700 leading-relaxed">{pages.pacExtra}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-primary mb-3">Entretien & dépannage</h2>
              <p className="text-gray-700 leading-relaxed">
                Entretien pour garder le rendement. Panne en pleine chaleur : appelez le {brand.phone}.
              </p>
            </div>
            <div>
              <Link href="/aides-etat" className="text-secondary font-semibold hover:underline">
                Aides possibles (PAC) →
              </Link>
            </div>
            <a href={brand.phoneHref} className="inline-block rounded-xl bg-primary text-white px-8 py-3 font-semibold">
              {brand.phone}
            </a>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10 order-1 lg:order-2">
            <Image src="/images/metier/bathroom.jpg" alt="Pose et entretien climatisation Lyon" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
