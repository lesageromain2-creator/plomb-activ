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
  imageSrc = "/images/hero.png",
  imageAlt = "PLOMB'ACTIV — plomberie à Caluire-et-Cuire",
  variant = "default",
}: Props) {
  const isUrgent = variant === "urgent";
  return (
    <section
      className={`relative overflow-hidden py-16 md:py-20 px-4 text-center ${
        isUrgent ? "bg-gradient-to-br from-red-700 to-red-900 text-white" : "bg-primary text-white"
      }`}
    >
      {!isUrgent && (
        <Image src={imageSrc} alt="" fill className="object-cover opacity-25 pointer-events-none" aria-hidden priority />
      )}
      <div className="relative z-10 max-w-4xl mx-auto">
        {kicker && (
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${isUrgent ? "text-red-100" : "text-white/80"}`}>
            {kicker}
          </p>
        )}
        <h1 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        {subtitle && (
          <p className={`mt-4 text-lg max-w-2xl mx-auto leading-relaxed ${isUrgent ? "text-red-50" : "text-white/90"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
