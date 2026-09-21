import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaRow from "@/components/CtaRow";
import RelatedLinks from "@/components/RelatedLinks";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { brand } from "@/lib/siteCopy";

export type CommercialContent = {
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: { h2: string; body: string; bullets?: string[] }[];
  faqs?: { q: string; a: string }[];
  related: { href: string; label: string }[];
  crumbs: { name: string; path: string }[];
  showUrgence?: boolean;
};

export function commercialMetadata(c: Pick<CommercialContent, "title" | "description">) {
  return { title: c.title, description: c.description };
}

export default function CommercialPage({ content }: { content: CommercialContent }) {
  const faqLd =
    content.faqs && content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-cream">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, ...content.crumbs]} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <PageHero title={content.h1} subtitle={content.lead} kicker={content.kicker} imageSrc={content.image} />
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={content.image} alt={content.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            {content.sections.map((s) => (
              <div key={s.h2} className="mb-8">
                <h2 className="font-heading text-2xl text-primary mb-3 font-bold">{s.h2}</h2>
                <p className="text-gray-700 leading-relaxed">{s.body}</p>
                {s.bullets && (
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-800">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <CtaRow showUrgence={content.showUrgence !== false} />
            <p className="mt-4 text-sm text-gray-600">
              {brand.name} · {brand.address}
            </p>
            <RelatedLinks items={content.related} />
          </div>
        </div>
      </section>
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl text-primary font-bold mb-6 text-center">Questions fréquentes</h2>
            <dl className="space-y-4">
              {content.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-black/5 p-5">
                  <dt className="font-semibold text-primary">{f.q}</dt>
                  <dd className="mt-2 text-gray-700 text-sm leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </div>
  );
}
