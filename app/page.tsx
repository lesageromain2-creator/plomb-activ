import Link from "next/link";
import Image from "next/image";
import { brand, home, localLyon } from "@/lib/siteCopy";
import { photos, gallery } from "@/lib/photos";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import DevisForm from "@/components/DevisForm";
import { faqJsonLd } from "@/lib/seo";
import { pageMeta } from "@/lib/pageMeta";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  ...pageMeta(
    "/",
    "Plombier Caluire-et-Cuire et Lyon | PLOMB'ACTIV",
    "Appelez directement nos experts chez PLOMB'ACTIV au 06 67 44 79 29. Dépannage plomberie, chauffage et clim à Caluire-et-Cuire, Lyon et le Grand Lyon. Devis gratuit."
  ),
  title: { absolute: "Plombier Caluire-et-Cuire et Lyon | PLOMB'ACTIV" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <JsonLd />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <section className="hero-landing relative w-full overflow-hidden text-white flex items-end md:items-stretch md:grid">
        <div className="hero-photo">
          <Image
            src={photos.hero}
            alt="Plombier PLOMB'ACTIV en train d'installer un chauffe-eau, Caluire Lyon"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-[88%_center] md:object-[90%_78%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 md:hidden" aria-hidden />
        <div className="hero-copy relative z-10 w-full px-4 pt-16 pb-10 md:flex md:flex-col md:justify-center md:px-10 lg:px-14 md:py-12 md:bg-primary">
          <p className="text-secondary font-extrabold uppercase tracking-[0.18em] text-xs sm:text-sm mb-3 drop-shadow">
            {home.heroKicker}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight max-w-lg leading-[0.98] drop-shadow-lg">
            {home.heroTitle}
            <span className="block text-secondary">{home.heroTitleAccent}</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-white max-w-lg leading-relaxed bg-black/45 md:bg-white/10 border-l-4 border-secondary pl-4 py-3 rounded-r-md">
            {home.heroLead}
          </p>
          <blockquote className="mt-5 max-w-lg text-sm md:text-base text-white/90 italic leading-relaxed">
            « {home.heroQuote} »
            <footer className="mt-1 not-italic text-xs uppercase tracking-wider text-secondary font-semibold">
              {home.heroQuoteBy}
            </footer>
          </blockquote>
          <p className="mt-4 text-sm text-white/80">{brand.address}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={brand.phoneHref}
              data-cta="tel"
              className="rounded-lg bg-secondary text-white px-8 py-4 text-lg font-extrabold shadow-lg hover:opacity-90"
            >
              {brand.phone}
            </a>
            <Link
              href="#devis-form"
              data-cta="devis"
              className="rounded-lg bg-white text-primary px-8 py-4 text-lg font-extrabold hover:bg-accent"
            >
              Devis gratuit
            </Link>
            <Link
              href="/urgences"
              className="rounded-lg border-2 border-white text-white px-8 py-4 text-lg font-extrabold hover:bg-white/10"
            >
              Urgence plomberie
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-black/55 md:bg-white/10 border border-white/25 px-3 py-1.5 font-medium">
              Atelier Saint-Clair
            </span>
            <span className="rounded-full bg-black/55 md:bg-white/10 border border-white/25 px-3 py-1.5 font-medium">
              Urgences 7j/7
            </span>
            <span className="rounded-full bg-black/55 md:bg-white/10 border border-white/25 px-3 py-1.5 font-medium">
              Devis gratuit
            </span>
            <span className="rounded-full bg-black/55 md:bg-white/10 border border-white/25 px-3 py-1.5 font-medium">
              5,0/5 Google
            </span>
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
          <p className="text-center text-xs font-bold uppercase tracking-widest text-secondary mb-2">Prestations</p>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center font-bold mb-3">
            Ce pour quoi on se déplace
          </h2>
          <p className="text-center text-primary/70 max-w-2xl mx-auto mb-10">
            Urgence le soir, ballon qui lâche, WC, chaudière, clim : chaque geste a sa page, avec des photos de chantier.
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
              alt="Brasage cuivre sous ballon ECS, PLOMB'ACTIV"
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
              <li>Fuite, recherche de fuite, dégât des eaux</li>
              <li>Débouchage, WC, robinetterie</li>
              <li>Chauffe-eau, groupe de sécurité</li>
              <li>Chaudière gaz, climatisation split</li>
              <li>Réseaux cuivre et PER, chantier propre</li>
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
          <h2 className="font-heading text-3xl text-center font-bold mb-3">Comment ça se passe</h2>
          <p className="text-center text-white/75 max-w-xl mx-auto mb-10 text-sm">
            Simple, lisible, sans forfait surprise. L&apos;atelier est à Caluire : le délai dépend du trajet, on le dit au téléphone.
          </p>
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
          <h2 className="font-heading text-3xl text-primary mb-2 text-center font-bold">Le travail, tel qu&apos;il est fait</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Pas de banque d&apos;images. Cumulus, chaudière, WC, clim, brasage : chantiers PLOMB&apos;ACTIV autour de Caluire.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gallery.slice(0, 6).map((img) => (
              <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-xs text-white leading-snug">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-700">
            <Link href="/plombier/villeurbanne" className="text-secondary font-semibold">
              Villeurbanne
            </Link>
            {" · "}
            <Link href="/plombier/rillieux-la-pape" className="text-secondary font-semibold">
              Rillieux
            </Link>
            {" · "}
            <Link href="/plombier/vaulx-en-velin" className="text-secondary font-semibold">
              Vaulx-en-Velin
            </Link>
            {" · "}
            <Link href="/zone-intervention" className="text-secondary font-semibold">
              Toutes les communes
            </Link>
          </p>
        </div>
      </section>

      <section id="devis-form" className="py-16 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Contact</p>
            <h2 className="font-heading text-3xl text-primary font-bold mb-4">Racontez-nous le chantier</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Un message suffit : commune, ce qui fuit ou ce qui est à changer. Pour une urgence, le plus simple reste d&apos;appeler
              le {brand.phone}. Devis gratuit, sans engagement.
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
              <dt className="font-semibold text-primary">Intervenez-vous à Caluire ?</dt>
              <dd className="mt-2 text-gray-700 text-sm leading-relaxed">
                Oui, l&apos;atelier est à Caluire-et-Cuire.{" "}
                <Link href="/plombier-caluire-et-cuire" className="text-secondary font-semibold">
                  Page plombier Caluire
                </Link>
                .
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

      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-primary text-center font-bold mb-3">Vous cherchez un geste précis</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-sm">
            Fuite, débouchage, Caluire, Rillieux : ouvrez la page qui correspond. Un besoin, un interlocuteur, le même atelier.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/urgences", t: "Urgence plomberie", d: "Fuite active, WC, plus d'eau" },
              { href: "/fuite-eau", t: "Fuite d'eau", d: "Réparer une fuite visible" },
              { href: "/recherche-de-fuite", t: "Recherche de fuite", d: "Compteur qui tourne, encastré" },
              { href: "/degat-des-eaux", t: "Dégât des eaux", d: "Sinistre, photos assurance" },
              { href: "/debouchage", t: "Débouchage WC / siphon", d: "WC, évier, douche" },
              { href: "/canalisation", t: "Canalisation bouchée", d: "Colonne, évacuation" },
              { href: "/remplacement-wc", t: "Remplacement WC", d: "À poser ou suspendu" },
              { href: "/robinetterie", t: "Mitigeur / robinet", d: "Goutte-à-goutte, cartouche" },
              { href: "/chauffe-eau", t: "Chauffe-eau", d: "Ballon ECS, plus d'eau chaude" },
              { href: "/groupe-de-securite", t: "Groupe de sécurité", d: "Ballon qui goutte" },
              { href: "/chauffage", t: "Chaudière gaz", d: "Dépannage et entretien" },
              { href: "/climatisation", t: "Climatisation split", d: "Pose et mise en service" },
              { href: "/plombier-caluire-et-cuire", t: "Plombier Caluire", d: "69300, Saint-Clair" },
              { href: "/plombier/rillieux-la-pape", t: "Plombier Rillieux", d: "69140, Crépieux" },
              { href: "/plombier-lyon", t: "Plombier Lyon", d: "1er à 9e depuis Caluire" },
              { href: "/zone-intervention", t: "Toute la zone", d: "Sathonay, Fontaines, Monts d'Or" },
            ].map((x) => (
              <Link key={x.href} href={x.href} className="rounded-2xl border border-black/10 p-5 hover:border-secondary bg-cream">
                <h3 className="font-heading font-bold text-primary">{x.t}</h3>
                <p className="text-sm text-gray-600 mt-1">{x.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary text-white text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-3">On est à Saint-Clair. Appelez.</h2>
        <p className="mb-6 text-white/95 max-w-xl mx-auto">
          {brand.address} · {brand.hours}
        </p>
        <a href={brand.phoneHref} className="inline-block rounded-lg bg-primary text-white px-10 py-4 text-lg font-bold">
          Appeler {brand.phone}
        </a>
      </section>
    </div>
  );
}
