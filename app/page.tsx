import Link from "next/link";
import Image from "next/image";
import { brand, home, localLyon, zone } from "@/lib/siteCopy";
import { photos } from "@/lib/photos";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import DevisForm from "@/components/DevisForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="relative min-h-[92vh] text-white overflow-hidden flex items-center">
        <Image
          src={photos.hero}
          alt="Plombier PLOMB'ACTIV en intervention — réparation sous évier, Caluire Lyon"
          fill
          priority
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 w-full">
          <p className="text-secondary font-extrabold uppercase tracking-[0.18em] text-sm mb-3 drop-shadow">
            {home.heroKicker}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight max-w-3xl leading-[0.95] drop-shadow-lg">
            {home.heroTitle}
            <span className="block text-secondary">{home.heroTitleAccent}</span>
          </h1>
          <p className="mt-3 text-2xl md:text-3xl font-heading font-bold italic text-white drop-shadow">
            Artisan de proximité
          </p>
          <p className="mt-5 text-base md:text-lg text-white max-w-lg leading-relaxed bg-black/45 border-l-4 border-secondary pl-4 py-3 rounded-r-md">
            {home.heroLead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={brand.phoneHref}
              className="rounded-lg bg-secondary text-white px-8 py-4 text-lg font-extrabold shadow-lg hover:opacity-90"
            >
              {brand.phone}
            </a>
            <Link
              href="#devis-form"
              className="rounded-lg bg-white text-primary px-8 py-4 text-lg font-extrabold hover:bg-accent"
            >
              Devis gratuit →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-black/55 border border-white/25 px-3 py-1.5 font-medium">Entreprise locale</span>
            <span className="rounded-full bg-black/55 border border-white/25 px-3 py-1.5 font-medium">Urgence 7j/7</span>
            <span className="rounded-full bg-black/55 border border-white/25 px-3 py-1.5 font-medium">Devis gratuit</span>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/25">
          {home.stats.map((s) => (
            <div key={s.label} className="p-6 text-center">
              <p className="font-heading text-2xl md:text-3xl font-extrabold">{s.value}</p>
              <p className="font-semibold mt-1">{s.label}</p>
              <p className="text-sm text-white/85 mt-0.5">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-secondary mb-2">Nos prestations</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center font-bold mb-3">
            Débouchage, fuite &amp; installations
          </h2>
          <p className="text-center text-primary/70 max-w-2xl mx-auto mb-10">
            Du dépannage d&apos;urgence à la pose complète : réseaux, sanitaires, ECS, chaudière, climatisation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {home.serviceCards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card"
              >
                <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wide bg-secondary text-white px-2.5 py-1 rounded">
                  {c.tag}
                </span>
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="font-heading text-xl font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/85 leading-relaxed">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
            <Image
              src={photos.artisan}
              alt="Brasage cuivre sous ballon ECS — PLOMB'ACTIV"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-secondary uppercase tracking-wide mb-2">{localLyon.badge}</p>
            <h2 className="font-heading text-3xl text-primary mb-4 font-bold">{localLyon.title}</h2>
            <p className="text-gray-700 leading-relaxed">{localLyon.text}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{localLyon.sub}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-800">
              <li>— Recherche et réparation de fuites, dégât des eaux</li>
              <li>— Ballon ECS, groupe de sécurité, cumulus Atlantic</li>
              <li>— Chaudière gaz (dont Vaillant), entretien et remplacement</li>
              <li>— Réseaux cuivre / PER, évacuation PVC, brasage</li>
              <li>— Split inverter : pose, charge, mise en service</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={brand.phoneHref} className="rounded-lg bg-secondary text-white px-6 py-3 font-bold">
                {brand.phone}
              </a>
              <a href={brand.gbpUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-primary text-primary px-6 py-3 font-semibold">
                Fiche Google
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-secondary mb-2">Processus</p>
          <h2 className="font-heading text-3xl text-center font-bold mb-10">Votre intervention en 3 étapes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {home.steps.map((s) => (
              <div key={s.n} className="border border-white/15 rounded-2xl p-6 bg-white/5">
                <p className="font-heading text-4xl font-extrabold text-secondary">{s.n}</p>
                <h3 className="font-heading text-xl font-bold mt-3">{s.title}</h3>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsCarousel />

      <section id="gallery" className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-primary mb-2 text-center font-bold">Réalisations sur site</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Photos de chantiers PLOMB&apos;ACTIV — {zone.cities.slice(0, 5).join(", ")}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              photos.reseaux,
              photos.wcAvantApres,
              photos.cumulus,
              photos.clim,
              photos.chaudiere,
              photos.interventionLyon,
            ].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={src} alt="Chantier PLOMB'ACTIV" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devis-form" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Contact</p>
            <h2 className="font-heading text-3xl text-primary font-bold mb-4">Demandez votre devis gratuit</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sans engagement. Précisez la nature du désordre (fuite, ECS, chaudière, clim) et la commune. Pour une urgence,
              appelez le {brand.phone}.
            </p>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={photos.chalumeau} alt="Poste de brasage oxyacétylénique PLOMB'ACTIV" fill className="object-cover" />
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 p-6 bg-cream">
            <DevisForm />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-title" className="font-heading text-3xl text-primary text-center mb-8 font-bold">
            Questions fréquentes
          </h2>
          <dl className="space-y-4">
            <div className="rounded-2xl bg-white border border-black/5 p-5">
              <dt className="font-semibold text-primary">Intervenez-vous en urgence sur Lyon ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Oui. PLOMB&apos;ACTIV est joignable au {brand.phone} pour fuite, WC, ECS, chaudière et clim. Base : Caluire-et-Cuire,
                déplacements Grand Lyon.
              </dd>
            </div>
            <div className="rounded-2xl bg-white border border-black/5 p-5">
              <dt className="font-semibold text-primary">Faites-vous chaudière et climatisation ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Oui : dépannage et remplacement de chaudière gaz (dont Vaillant), pose et mise en service de split (Fujitsu,
                Atlantic…), entretien.
              </dd>
            </div>
            <div className="rounded-2xl bg-white border border-black/5 p-5">
              <dt className="font-semibold text-primary">Le devis est-il payant ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Le devis est gratuit et sans engagement. Hors urgence, les travaux démarrent après accord.
              </dd>
            </div>
            <div className="rounded-2xl bg-white border border-black/5 p-5">
              <dt className="font-semibold text-primary">Quelle zone d&apos;intervention ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Caluire-et-Cuire, Lyon 1er à 9e, Villeurbanne, Rillieux, Monts d&apos;Or, Bron, Vénissieux.{" "}
                <Link href="/zone-intervention" className="text-secondary font-semibold">
                  Toutes les communes →
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary text-white text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">Besoin d&apos;un plombier ?</h2>
        <p className="mb-6 text-white/95 max-w-xl mx-auto">
          {brand.name} · {brand.address} · fiche Google Business en ligne
        </p>
        <a href={brand.phoneHref} className="inline-block rounded-lg bg-primary text-white px-10 py-4 text-lg font-bold">
          Appeler {brand.phone}
        </a>
      </section>
    </div>
  );
}
