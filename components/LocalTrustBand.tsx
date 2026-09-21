import Image from "next/image";
import { gallery } from "@/lib/photos";
import { equipeConfiance } from "@/lib/siteCopy";

export default function LocalTrustBand() {
  return (
    <div className="border-t border-black/10 bg-cream">
      <section className="py-14 px-4" aria-labelledby="sec-chantiers">
        <div className="max-w-6xl mx-auto">
          <h2 id="sec-chantiers" className="font-heading text-2xl md:text-3xl text-primary text-center mb-3 font-bold">
            {equipeConfiance.title}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">{equipeConfiance.intro}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {gallery.slice(0, 8).map((img) => (
              <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
