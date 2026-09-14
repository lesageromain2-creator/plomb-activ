import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brand, pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Urgence plomberie — PLOMB'ACTIV | Caluire-et-Cuire",
  description: "Dépannage plomberie à Caluire-et-Cuire. Fuite, canalisation, eau chaude. Appelez PLOMB'ACTIV.",
};

export default function UrgencesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        variant="urgent"
        title="Urgence plomberie"
        subtitle="Fuite, canalisation bouchée, plus d&apos;eau chaude : appelez pendant les horaires d&apos;ouverture — Lun–Ven 8h–18h."
        kicker="Caluire-et-Cuire & 10 km"
      />
      <section className="py-8 px-4 bg-red-50 border-b border-red-100">
        <div className="max-w-2xl mx-auto text-center">
          <a
            href={brand.phoneHref}
            className="inline-block font-heading text-3xl md:text-4xl font-bold text-red-700 hover:underline"
          >
            {brand.phone}
          </a>
          <p className="mt-2 text-red-800/90 text-sm">Lun–Ven 8h–18h — Caluire-et-Cuire</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
            <Image src="/images/metier/pipes.jpg" alt="Dépannage urgence" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-heading text-2xl text-primary mb-4">Fuite, pas d&apos;eau chaude, canalisation bouchée ?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{pages.urgencesBody}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Intervention depuis Caluire-et-Cuire, avec le matériel adapté — proprement, et avec des explications claires.
            </p>
            <a
              href={brand.phoneHref}
              className="inline-block rounded-xl bg-primary text-white px-8 py-4 text-lg font-semibold hover:opacity-90 shadow-card"
            >
              Appeler maintenant
            </a>
            <p className="mt-6 text-sm text-gray-600">
              Pour un rendez-vous non urgent :{" "}
              <Link href="/devis" className="text-secondary font-semibold hover:underline">
                formulaire devis
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
