import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DevisForm from "@/components/DevisForm";
import { brand, equipeConfiance } from "@/lib/siteCopy";

export const metadata = {
  title: "Devis gratuit — PLOMB'ACTIV | Plombier Caluire",
  description: "Demande de devis plomberie à Caluire-et-Cuire. Réponse rapide, artisan local.",
};

export default function DevisPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Demander un devis gratuit"
        subtitle="Décrivez votre projet : réponse sous 24 h ouvrées. Pour une urgence, appelez pendant les horaires d&apos;ouverture."
        kicker="Sans engagement"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card mb-8 ring-1 ring-primary/10">
              <Image src="/images/metier/tools.jpg" alt="Plomberie professionnelle" fill className="object-cover" />
            </div>
            <h2 className="font-heading text-xl text-primary mb-3">Pourquoi nous faire confiance ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{equipeConfiance.intro}</p>
            <ul className="space-y-3 text-gray-700 text-sm">
              {equipeConfiance.bullets.map((b) => (
                <li key={b.title}>
                  <strong className="text-primary">{b.title}</strong> — {b.text}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Urgence ? <a href={brand.phoneHref} className="text-secondary font-semibold">{brand.phone}</a> — {brand.hours}.
            </p>
          </div>
          <div className="max-w-xl mx-auto w-full lg:mx-0">
            <DevisForm />
            <p className="mt-6 text-center text-sm text-gray-600">
              Prix indicatifs — devis gratuit.{" "}
              <Link href="/tarifs" className="text-secondary font-medium hover:underline">
                Voir la grille tarifaire
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
