import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pageMeta } from "@/lib/pageMeta";
import { photos } from "@/lib/photos";
import { conseils } from "@/lib/conseils";

export const metadata = pageMeta(
  "/conseils",
  "Conseils plomberie Lyon et Caluire",
  "Gestes utiles avant l'arrivée du plombier : fuite, couper l'eau, WC bouché, chauffe-eau. Conseils d'atelier PLOMB'ACTIV à Caluire."
);

export default function ConseilsIndex() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHero
        title="Conseils d'atelier"
        subtitle="Des gestes concrets, sans promesse miracle. Pour le dépannage : 06 67 44 79 29."
        kicker="Guides"
        imageSrc={photos.heroWork}
      />
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {conseils.map((c) => (
            <Link
              key={c.slug}
              href={`/conseils/${c.slug}`}
              className="block rounded-2xl bg-white border border-black/5 p-5 hover:border-secondary"
            >
              <h2 className="font-heading text-xl text-primary font-bold">{c.h1}</h2>
              <p className="mt-2 text-sm text-gray-600">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
