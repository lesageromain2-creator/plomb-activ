import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import BrandCard from "@/components/BrandCard";
import { brand, pages, zone } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";

export const metadata = {
  title: "Contact plombier Caluire | PLOMB'ACTIV 06 67 44 79 29",
  description:
    "Appelez directement nos experts chez PLOMB'ACTIV au 06 67 44 79 29. 130 Grande rue de Saint Clair, 69300 Caluire-et-Cuire. Fiche Google Business.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`;

  return (
    <div className="min-h-screen bg-cream">
      <PageHero title="Contact" subtitle={pages.contactIntro} kicker={brand.name} imageSrc={photos.interventionLyon} />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <BrandCard variant="panel" />
            <div className="rounded-2xl bg-white border border-black/5 p-6">
              <h2 className="font-heading text-xl text-primary mb-4 font-bold">{brand.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Adresse (NAP) :</strong> {brand.address}
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
                <a href={brand.phoneHref} className="text-secondary font-bold text-xl">
                  {brand.phone}
                </a>
              </p>
              <p className="text-gray-700">
                <a href={`mailto:${brand.email}`} className="font-medium hover:underline">
                  {brand.email}
                </a>
              </p>
              <a
                href={brand.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-secondary font-semibold"
              >
                Ouvrir la fiche Google Business →
              </a>
              <p className="mt-4 text-sm text-gray-600">SIRET {brand.siret}</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl text-primary mb-4 font-bold">Écrire à l&apos;atelier</h2>
            <ContactForm />
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 h-72 md:h-96 rounded-2xl overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Google PLOMB'ACTIV Caluire-et-Cuire"
          />
        </div>
      </section>
    </div>
  );
}
