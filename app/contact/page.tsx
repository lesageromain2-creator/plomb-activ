import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { brand, pages, zone } from "@/lib/siteCopy";

export const metadata = {
  title: "Contact plombier Caluire Lyon | GHOULI Foued 07 65 26 65 26",
  description:
    "Contactez GHOULI Foued — PLOMB'ACTIV, QVR5+49 Caluire-et-Cuire. Tél 07 65 26 65 26 · ghoulifoued@icloud.com. Urgence Lyon.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`;

  return (
    <div className="min-h-screen">
      <PageHero title="Contact" subtitle={`${pages.contactIntro}`} kicker={brand.owner} />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card ring-1 ring-primary/10">
              <Image src="/images/about.jpg" alt="GHOULI Foued — PLOMB'ACTIV Caluire" fill className="object-cover" />
            </div>
            <div className="rounded-2xl bg-white border border-primary/10 p-6 shadow-sm">
              <h2 className="font-heading text-xl text-primary mb-4">{brand.owner}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong> {brand.address}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Plus Code :</strong> {brand.plusCode}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Zone :</strong> Lyon, Caluire, Villeurbanne, Monts d&apos;Or ({zone.radiusKm} km)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Horaires :</strong> {brand.hours}
              </p>
              <p className="text-gray-700 mb-2">
                <a href={brand.phoneHref} className="text-primary font-bold text-xl">
                  {brand.phone}
                </a>
              </p>
              <p className="text-gray-700">
                <a href={`mailto:${brand.email}`} className="text-secondary font-medium hover:underline">
                  {brand.email}
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-600">SIRET {brand.siret}</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl text-primary mb-4">Écrire à Foued</h2>
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
            title="Carte PLOMB'ACTIV QVR5+49 Caluire-et-Cuire"
          />
        </div>
      </section>
    </div>
  );
}
