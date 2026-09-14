import Image from "next/image";
import PageHero from "@/components/PageHero";
import { metierGallery } from "@/lib/visual-assets";

export const metadata = {
  title: "Réalisations — PLOMB'ACTIV | Chantiers plomberie Caluire",
  description: "Galerie de chantiers types en plomberie et sanitaire autour de Caluire-et-Cuire.",
};

export default function RealisationsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Nos chantiers"
        subtitle="Installations, rénovations et dépannages — exemples de métier autour de Caluire-et-Cuire (10 km)."
        kicker="Galerie"
        imageSrc="/images/metier/bathroom.jpg"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Photos de métier (banque d&apos;images) en attendant les réalisations anonymisées de PLOMB&apos;ACTIV. Salles de
            bain, réseaux, sanitaires, dépannage.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metierGallery.map((img, i) => (
              <div key={img.src} className="bg-white rounded-2xl overflow-hidden shadow-card border border-primary/10 group">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="p-4 text-gray-800 font-medium text-sm">Exemple {i + 1} — Caluire &amp; environs</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
