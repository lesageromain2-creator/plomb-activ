import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { brand, home, pages } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "/services",
  "Prestations plombier Caluire Lyon | Fuite, ECS, chaudière, clim",
  "Recherche de fuite, débouchage, ballon ECS, chaudière gaz, réseaux PER/cuivre, climatisation split. PLOMB'ACTIV, Caluire-et-Cuire."
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Plomberie, chauffage, climatisation"
        subtitle={pages.servicesIntro}
        kicker="Grand Lyon"
        imageSrc={photos.reseaux}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {home.serviceCards.map((c) => (
            <Link key={c.title} href={c.href} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <span className="absolute top-3 left-3 text-[11px] font-bold uppercase bg-secondary text-white px-2 py-1 rounded">
                {c.tag}
              </span>
              <div className="absolute bottom-0 p-5 text-white">
                <h2 className="font-heading text-xl font-bold">{c.title}</h2>
                <p className="mt-1 text-sm text-white/85">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center mt-10">
          <a href={brand.phoneHref} className="inline-block rounded-lg bg-secondary text-white px-8 py-3 font-bold">
            {brand.phone}
          </a>
        </p>
      </section>
    </div>
  );
}
