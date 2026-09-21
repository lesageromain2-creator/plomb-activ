import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, zone } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Plombier Lyon Villeurbanne Caluire | Zone d'intervention PLOMB'ACTIV",
  description:
    "Plombier à Caluire-et-Cuire : interventions Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d'Or, Bron, Vénissieux. Dépannage, chauffage, clim.",
};

export default function ZonePage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Zone d'intervention Grand Lyon"
        subtitle={`Établissement ${brand.city}. Dépannage et travaux sur ${zone.cities.length} communes.`}
        kicker="SEO local"
        imageSrc={photos.interventionLyon}
      />
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">
            PLOMB&apos;ACTIV se déplace depuis {brand.address} pour la plomberie, le chauffage gaz, la
            climatisation split et les urgences. NAP identique à la fiche Google Business. {brand.phone}.
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {zone.cities.map((c) => (
              <li key={c} className="rounded-xl bg-white border border-black/5 px-4 py-3 text-sm text-gray-800">
                Plombier {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link href="/urgences" className="rounded-lg bg-secondary text-white px-8 py-3 font-bold inline-block">
              Urgence {brand.phone}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
