import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, zone } from "@/lib/siteCopy";

export const metadata = {
  title: "Plombier Lyon Villeurbanne Caluire | Zone PLOMB'ACTIV",
  description:
    "GHOULI Foued intervient à Caluire-et-Cuire, Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d'Or, Bron, Vénissieux. Urgence plomberie chauffage clim.",
};

export default function ZonePage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Zone d'intervention — Grand Lyon"
        subtitle={`Basé ${brand.plusCode}. Dépannage et travaux sur ${zone.cities.length} communes.`}
        kicker="SEO local"
        imageSrc="/images/lyon/lyon-1.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">
            PLOMB&apos;ACTIV — {brand.owner} — se déplace depuis Caluire-et-Cuire pour la plomberie, le chauffage, la
            climatisation et les urgences. Appelez le {brand.phone}.
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {zone.cities.map((c) => (
              <li key={c} className="rounded-xl bg-white border border-primary/10 px-4 py-3 text-sm text-gray-800">
                Plombier {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link href="/urgences" className="rounded-xl bg-red-600 text-white px-8 py-3 font-semibold inline-block">
              Urgence {brand.phone}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
