import Link from "next/link";
import Image from "next/image";
import { brand, home, localLyon, zone } from "@/lib/siteCopy";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";

export default function HomePage() {
  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Plomberie sanitaire Lyon" },
    { src: "/images/gallery-2.jpg", alt: "Salle de bain Caluire" },
    { src: "/images/gallery-3.jpg", alt: "Robinetterie professionnelle" },
    { src: "/images/gallery-4.jpg", alt: "Chantier plomberie" },
    { src: "/images/about.jpg", alt: "Chauffe-eau et dépannage" },
    { src: "/images/metier/heater.jpg", alt: "Chaudière et chauffage" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#023a5c] text-white py-24 px-4 md:py-32 text-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Plombier chauffagiste GHOULI Foued à Caluire — PLOMB'ACTIV Lyon"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,58,92,0.62)_0%,rgba(3,105,161,0.48)_55%,rgba(2,58,92,0.28)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-200 mb-3">{home.heroKicker}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight">{home.heroTitle}</h1>
          <p className="mt-4 text-lg text-white/95 max-w-2xl mx-auto leading-relaxed">{home.heroLead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={brand.phoneHref}
              className="rounded-xl bg-red-600 text-white px-8 py-3.5 font-semibold shadow-lg hover:opacity-90"
            >
              Urgence {brand.phone}
            </a>
            <Link
              href="/devis"
              className="rounded-xl bg-white text-primary px-8 py-3.5 font-semibold shadow-lg hover:bg-accent transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-b border-primary/10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {home.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-accent/90 border border-primary/10 p-5 text-center shadow-sm">
              <p className="font-heading text-xl md:text-2xl font-bold text-primary break-words">{s.value}</p>
              <p className="font-medium text-gray-900 mt-1">{s.label}</p>
              <p className="text-sm text-gray-600 mt-1">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-primary/10">
            <Image src="/images/about.jpg" alt="GHOULI Foued — intervention plomberie chauffage Caluire" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">{localLyon.badge}</p>
            <h2 className="font-heading text-3xl text-primary mb-4">{localLyon.title}</h2>
            <p className="text-gray-700 leading-relaxed">{localLyon.text}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{localLyon.sub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={brand.phoneHref} className="rounded-xl bg-primary text-white px-6 py-3 font-semibold hover:opacity-90">
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} className="rounded-xl border border-primary text-primary px-6 py-3 font-semibold hover:bg-accent">
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-primary text-center mb-2">Ce que fait PLOMB&apos;ACTIV</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Plomberie, chauffage, climatisation, chaudière, pose et entretien de clim, urgence et dépannage — Lyon, Caluire,
            Villeurbanne, Monts d&apos;Or.
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

      <GoogleReviewsCarousel />

      <section id="gallery" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-primary mb-2 text-center">Chantiers types</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Sanitaire, chauffage, réseaux — illustrations métier. Zone : {zone.cities.slice(0, 6).join(", ")}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-primary/10">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-[1.02] transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-title" className="font-heading text-3xl text-primary text-center mb-8">
            Questions fréquentes — plombier Lyon
          </h2>
          <dl className="space-y-6">
            <div className="rounded-2xl border border-primary/10 p-5">
              <dt className="font-semibold text-gray-900">Quel est le numéro d&apos;urgence ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Appelez GHOULI Foued au {brand.phone}. Basé à Caluire-et-Cuire ({brand.plusCode}), prêt pour les urgences
                sur Lyon, Villeurbanne et le Grand Lyon.
              </dd>
            </div>
            <div className="rounded-2xl border border-primary/10 p-5">
              <dt className="font-semibold text-gray-900">Chauffage, chaudière et climatisation ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Oui : plomberie, chauffage, chaudière (dont Vaillant), pose et entretien de clim, dépannage. Un artisan,
                un interlocuteur.
              </dd>
            </div>
            <div className="rounded-2xl border border-primary/10 p-5">
              <dt className="font-semibold text-gray-900">Quelle zone d&apos;intervention ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Caluire, Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d&apos;Or, Bron, Vénissieux et communes voisines.{" "}
                <Link href="/zone-intervention" className="text-secondary font-semibold hover:underline">
                  Voir toutes les villes →
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="font-heading text-2xl md:text-3xl mb-2">Urgence à Lyon ou Caluire ? Appelez Foued.</h2>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          {brand.owner} · {brand.plusCode} · {brand.email}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={brand.phoneHref} className="inline-block rounded-xl bg-red-600 text-white px-8 py-3 font-semibold hover:opacity-90">
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="inline-block rounded-xl bg-white text-primary px-8 py-3 font-semibold">
            Écrire un mail
          </a>
        </div>
      </section>
    </div>
  );
}
