import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Urgence plombier Lyon Caluire | Dépannage 7j/7 PLOMB'ACTIV",
  description:
    "Urgence plomberie, chauffage, clim à Lyon et Caluire. Fuite, chaudière, chauffe-eau, WC. GHOULI Foued au 07 65 26 65 26.",
};

export default function UrgencesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        variant="urgent"
        title="Urgence & dépannage — Lyon, Caluire"
        subtitle="Fuite, WC, chauffe-eau, chaudière, clim : GHOULI Foued se déplace. Prêt à tout moment."
        kicker="07 65 26 65 26"
      />
      <section className="py-8 px-4 bg-red-50 border-b border-red-100">
        <div className="max-w-2xl mx-auto text-center">
          <a href={brand.phoneHref} className="inline-block font-heading text-3xl md:text-4xl font-bold text-red-700 hover:underline">
            {brand.phone}
          </a>
          <p className="mt-2 text-red-800/90 text-sm">{brand.owner} · {brand.plusCode} · {brand.email}</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
            <Image src="/images/metier/pipes.jpg" alt="Dépannage urgence plomberie Lyon" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-2xl text-primary mb-4">Fuite, plus d&apos;eau chaude, chaudière à l&apos;arrêt ?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{pages.urgencesBody}</p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>✓ Fuite d&apos;eau, recherche de fuite, WC</li>
              <li>✓ Chauffe-eau, chaudière (dont Vaillant)</li>
              <li>✓ Climatisation en panne</li>
              <li>✓ Commerce en service — intervention discrète</li>
            </ul>
            <a href={brand.phoneHref} className="inline-block rounded-xl bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:opacity-90 shadow-card">
              Appeler maintenant
            </a>
            <p className="mt-6 text-sm text-gray-600">
              Travaux programmés :{" "}
              <Link href="/devis" className="text-secondary font-semibold hover:underline">
                devis gratuit
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
