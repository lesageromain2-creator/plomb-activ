import Image from "next/image";
import { brand } from "@/lib/siteCopy";

type Props = {
  variant?: "banner" | "panel";
};

export const BRAND_CARD = {
  src: "/images/carte-plombactiv.jpg",
  width: 1024,
  height: 673,
  alt: "PLOMB'ACTIV, plomberie chauffage climatisation, 06 67 44 79 29",
} as const;

export default function BrandCard({ variant = "banner" }: Props) {
  const image = (
    <Image
      src={BRAND_CARD.src}
      alt={BRAND_CARD.alt}
      fill
      className="object-contain"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
    />
  );

  if (variant === "panel") {
    return (
      <figure className="relative w-full aspect-[1024/673] overflow-hidden rounded-2xl shadow-card ring-1 ring-black/10 bg-[#12324a]">
        {image}
      </figure>
    );
  }

  return (
    <section className="bg-[#0b1a2e] pt-8 pb-28 sm:pt-10 md:py-14 px-4" aria-label="Carte PLOMB'ACTIV">
      <div className="max-w-4xl mx-auto">
        <figure className="relative w-full aspect-[1024/673] overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10 bg-[#12324a]">
          {image}
        </figure>
        <div className="mt-5 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center justify-center rounded-lg bg-secondary text-white px-6 py-3 font-bold"
          >
            {brand.phone}
          </a>
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-6 py-3 font-semibold hover:bg-white/10"
          >
            {brand.email}
          </a>
        </div>
      </div>
    </section>
  );
}
