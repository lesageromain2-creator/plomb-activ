import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaRow from "@/components/CtaRow";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { photos } from "@/lib/photos";
import { conseils } from "@/lib/conseils";

export function generateStaticParams() {
  return conseils.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = conseils.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: c.title, description: c.description };
}

export default function ConseilPage({ params }: { params: { slug: string } }) {
  const c = conseils.find((x) => x.slug === params.slug);
  if (!c) notFound();
  return (
    <div className="min-h-screen bg-cream">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Conseils", path: "/conseils" },
          { name: c.h1, path: `/conseils/${c.slug}` },
        ]}
      />
      <PageHero title={c.h1} subtitle={c.description} kicker="Conseil" imageSrc={photos.heroWork} />
      <article className="py-16 px-4">
        <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          {c.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <CtaRow />
          <p className="text-sm">
            <Link href="/conseils" className="text-secondary font-semibold">
              Tous les conseils
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
