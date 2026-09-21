"use client";

import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  kicker?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "default" | "urgent";
};

export default function PageHero({
  title,
  subtitle,
  kicker,
  imageSrc = "/images/chantier/hero.jpg",
  imageAlt = "PLOMB'ACTIV, plomberie à Caluire-et-Cuire",
  variant = "default",
}: Props) {
  const isUrgent = variant === "urgent";
  return (
    <section className="relative overflow-hidden py-20 md:py-24 px-4 text-white min-h-[280px]">
      <Image src={imageSrc} alt="" fill className="object-cover pointer-events-none" aria-hidden priority />
      <div
        className={`absolute inset-0 ${
          isUrgent ? "bg-black/55" : "bg-gradient-to-r from-black/80 via-black/55 to-black/25"
        }`}
        aria-hidden
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        {kicker && (
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-secondary">{kicker}</p>
        )}
        <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg max-w-2xl leading-relaxed text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
}
