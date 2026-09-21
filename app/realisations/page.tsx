import Image from "next/image";
import PageHero from "@/components/PageHero";
import { gallery, photos } from "@/lib/photos";

export const metadata = {
  title: "Réalisations plomberie Caluire Lyon | Chantiers PLOMB'ACTIV",
  description:
    "Photos de chantiers : réseaux PER/cuivre, WC suspendu, ballon ECS, chaudière, clim split. PLOMB'ACTIV, Caluire-et-Cuire.",
};

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Chantiers réalisés"
        subtitle="Installations, rénovations et dépannages, photos prises sur site."
        kicker="Galerie"
        imageSrc={photos.reseaux}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((img) => (
            <figure key={img.src} className="bg-white rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <figcaption className="p-4 text-gray-800 text-sm">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
