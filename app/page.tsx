import Link from "next/link";
import Image from "next/image";
import { brand, home, localLyon, zone } from "@/lib/siteCopy";

export default function HomePage() {
  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Plomberie — installation sanitaire" },
    { src: "/images/gallery-2.jpg", alt: "Salle de bain — rénovation" },
    { src: "/images/gallery-3.jpg", alt: "Robinetterie — finitions" },
    { src: "/images/gallery-4.jpg", alt: "Chantier plomberie" },
    { src: "/images/gallery-5.jpg", alt: "Dépannage — tuyauterie" },
    { src: "/images/gallery-6.jpg", alt: "Outillage professionnel" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#023a5c] text-white py-24 px-4 md:py-32 text-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Réseaux de plomberie — PLOMB'ACTIV à Caluire-et-Cuire"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,58,92,0.62)_0%,rgba(3,105,161,0.48)_55%,rgba(2,58,92,0.28)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{home.heroKicker}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight">
            Plomberie de proximité — {brand.name}
          </h1>
          <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
            Votre plombier à <strong>Caluire-et-Cuire</strong>, rayon d&apos;environ {zone.radiusKm} km. Dépannage, réseaux
            neufs ou vétustes, sanitaires, salle de bain, détartrage. <strong>Devis gratuit</strong>, sans engagement.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis"
              className="rounded-xl bg-white text-primary px-8 py-3.5 font-semibold shadow-lg hover:bg-accent transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/services"
              className="rounded-xl border-2 border-white text-white px-8 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              Nos interventions
            </Link>
            <a
              href={brand.phoneHref}
              className="rounded-xl bg-secondary text-white px-8 py-3.5 font-semibold hover:opacity-90 transition-opacity md:hidden"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-b border-primary/10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {home.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-accent/90 border border-primary/10 p-5 text-center shadow-sm">
              <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
              <p className="font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-sm text-gray-600 mt-1">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-primary/10">
            <Image src="/images/about.jpg" alt="Intervention plomberie — PLOMB'ACTIV" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">{localLyon.badge}</p>
            <h2 className="font-heading text-3xl text-primary mb-4">Un plombier à votre écoute</h2>
            <p className="text-gray-700 leading-relaxed">
              {brand.name} intervient pour vos travaux de plomberie d&apos;urgence ou programmés : fuites, sanitaires,
              installation de tuyauteries neuves, remplacement des réseaux vétustes, détartrage des équipements.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Artisan local, <strong>devis gratuit et détaillé</strong>, entreprise immatriculée. Zone :{" "}
              <strong>{brand.city}</strong> et environ {zone.radiusKm} km.
            </p>
            <Link href="/contact" className="inline-block mt-6 text-primary font-semibold hover:underline">
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-primary text-center mb-2">Nos domaines d&apos;intervention</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            De la petite réparation au remplacement de réseau — pour votre logement à Caluire, Lyon ou dans les Monts d&apos;Or.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {home.serviceCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-2xl border border-primary/15 bg-accent/40 p-6 hover:border-secondary hover:shadow-card transition-all"
              >
                <h3 className="font-heading text-xl text-primary font-semibold group-hover:text-secondary transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{c.desc}</p>
                <span className="inline-block mt-4 text-secondary text-sm font-semibold">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-primary mb-2 text-center">Exemples de chantiers</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Photos de métier (banque d&apos;images) — à remplacer par les réalisations anonymisées de {brand.name}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-primary/10"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-[1.02] transition-transform duration-300" />
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/realisations" className="text-primary font-semibold hover:underline">
              Voir toutes les réalisations
            </Link>
          </p>
        </div>
      </section>

      <section id="prestations" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-primary mb-6">Prestations détaillées</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>
                <strong>Plomberie sanitaire</strong> : fuites, robinetterie, WC, évacuations
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>
                <strong>Réseaux</strong> : tuyauteries neuves, remplacement des réseaux vétustes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>
                <strong>Salle de bain</strong> : rénovation, douche, baignoire
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>
                <strong>Dépannage</strong> : fuite, pas d&apos;eau chaude — {brand.hours}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-secondary font-bold">✓</span>
              <span>
                <strong>Détartrage</strong> et entretien des équipements
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="engagements" className="py-16 px-4 bg-accent/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl text-primary mb-6">Pourquoi faire appel à {brand.name} ?</h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-primary">●</span> Artisan local, intervention de proximité.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">●</span> Devis gratuit et détaillé, sans engagement.
            </li>
            <li className="flex gap-2">
              <span className="text-primary">●</span> Entreprise immatriculée (SIRET {brand.siret}).
            </li>
            <li className="flex gap-2">
              <span className="text-primary">●</span> Plomberie et dépannage, du neuf à l&apos;ancien.
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="font-heading text-2xl md:text-3xl mb-2">Besoin d&apos;un plombier à Caluire-et-Cuire ?</h2>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          Devis gratuit. {brand.hours}. Artisan local et réactif.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-block rounded-xl bg-white text-primary px-8 py-3 font-semibold hover:bg-accent transition-colors">
            Nous contacter
          </Link>
          <a href={brand.phoneHref} className="inline-block rounded-xl bg-secondary text-white px-8 py-3 font-semibold hover:opacity-90">
            {brand.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
