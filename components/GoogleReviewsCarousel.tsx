"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { googleRating, googleReviews, type GoogleReview } from "@/lib/reviews";

function Stars() {
  return (
    <span className="text-amber-500 tracking-tight" aria-label="5 étoiles">
      ★★★★★
    </span>
  );
}

function ReviewCard({ r }: { r: GoogleReview }) {
  const [open, setOpen] = useState(false);
  const short = r.text.length > 160;
  const shown = open || !short ? r.text : `${r.text.slice(0, 160).trimEnd()}…`;

  return (
    <article className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl overflow-hidden shadow-card border border-primary/10 flex flex-col">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image src={r.photo} alt={r.photoAlt} fill className="object-cover" sizes="340px" />
        {r.tag && (
          <span className="absolute left-3 bottom-3 text-xs font-medium bg-white/90 text-primary px-2 py-1 rounded-full">
            {r.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold shrink-0">
            {r.initials}
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 truncate">{r.name}</p>
            <p className="text-xs text-gray-500">{r.meta}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Stars />
          <span className="text-xs text-gray-400">il y a un an</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed flex-1">
          {shown}
          {short && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="ml-1 align-middle text-gray-500 hover:text-primary font-bold tracking-widest"
              aria-label={open ? "Réduire l'avis" : "Lire la suite de l'avis"}
            >
              {open ? "Réduire" : "⋯"}
            </button>
          )}
        </p>
        <p className="mt-3 text-xs text-gray-400">{r.visited}</p>
        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs font-semibold text-secondary hover:underline"
        >
          Voir l&apos;avis Google →
        </a>
      </div>
    </article>
  );
}

export default function GoogleReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: d * 320, behavior: "smooth" });
  };

  return (
    <section id="avis" className="py-16 px-4 bg-white" aria-labelledby="avis-title">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Avis</p>
        <h2 id="avis-title" className="font-heading text-3xl text-primary text-center mb-6">
          Plomb&apos;activ
        </h2>
        <div className="max-w-md mx-auto mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-medium text-gray-800 mb-3">Résumé des avis Google</p>
          <div className="flex items-center gap-6">
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-3">{n}</span>
                  <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: n === 5 ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center shrink-0">
              <p className="text-4xl font-semibold text-gray-900 leading-none">{googleRating.label}</p>
              <p className="text-amber-500 text-sm mt-1">★★★★★</p>
              <p className="text-sm text-gray-500">({googleRating.count})</p>
            </div>
          </div>
        </div>
        <div
          ref={ref}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
        >
          {googleReviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
        <div className="flex gap-3 justify-center mt-4">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Avis précédent"
            className="w-11 h-11 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Avis suivant"
            className="w-11 h-11 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
