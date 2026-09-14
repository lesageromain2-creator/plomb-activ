import Image from "next/image";
import { confianceImages, lyonImages } from "@/lib/visual-assets";
import { equipeConfiance, localLyon } from "@/lib/siteCopy";

export default function LocalTrustBand() {
  return (
    <div className="border-t border-primary/10 bg-slate-50">
      <section className="py-14 px-4" aria-labelledby="sec-local-lyon">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-secondary mb-2">{localLyon.badge}</p>
          <h2 id="sec-local-lyon" className="font-heading text-2xl md:text-3xl text-primary text-center mb-3">
            {localLyon.title}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-2 leading-relaxed">{localLyon.text}</p>
          <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-10">{localLyon.sub}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {lyonImages.map((img) => (
              <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-primary/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white border-y border-primary/10" aria-labelledby="sec-equipe">
        <div className="max-w-6xl mx-auto">
          <h2 id="sec-equipe" className="font-heading text-2xl md:text-3xl text-primary text-center mb-3">
            {equipeConfiance.title}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">{equipeConfiance.intro}</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {equipeConfiance.bullets.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-accent/80 border border-primary/10 p-6 shadow-sm hover:shadow-card transition-shadow"
              >
                <h3 className="font-heading text-lg text-primary font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <h3 className="font-heading text-xl text-primary text-center mb-6">Confiance & relation humaine</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {confianceImages.map((img) => (
              <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-accent/50 ring-1 ring-primary/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
