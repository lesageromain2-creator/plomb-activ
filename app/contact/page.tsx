import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { brand, pages, zone } from "@/lib/siteCopy";

export const metadata = {
  title: "Contact — PLOMB'ACTIV | Plombier Caluire-et-Cuire",
  description: "Contactez PLOMB'ACTIV, plombier à Caluire-et-Cuire. Devis gratuit, 130 Grande rue de Saint Clair.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`;

  return (
    <div className="min-h-screen">
      <PageHero
        title="Contact"
        subtitle={`${pages.contactIntro} ${brand.address} — ${brand.hours}.`}
        kicker="À votre écoute"
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
              <Image src="/images/about.jpg" alt="Intervention plomberie" fill className="object-cover" />
            </div>
            <div className="rounded-2xl bg-white border border-primary/10 p-6 shadow-sm">
              <h2 className="font-heading text-xl text-primary mb-4">Coordonnées</h2>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong> {brand.address}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Zone :</strong> rayon ~{zone.radiusKm} km
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Horaires :</strong> {brand.hours}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>SIRET :</strong> {brand.siret}
              </p>
              <p className="text-gray-700 mb-2">
                <a href={brand.phoneHref} className="text-primary font-bold text-lg">
                  {brand.phone}
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Artisan local — un interlocuteur, du premier appel à la fin des travaux.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl text-primary mb-4">Envoyer un message</h2>
            <ContactForm />
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 h-72 md:h-96 rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte PLOMB'ACTIV Caluire-et-Cuire"
          />
        </div>
      </section>
    </div>
  );
}
