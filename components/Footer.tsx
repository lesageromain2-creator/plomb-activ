import Link from "next/link";
import LsdevFooterCredit from "@/components/LsdevFooterCredit";
import { brand, zone } from "@/lib/siteCopy";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">{brand.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            <strong>{brand.owner}</strong>, plombier chauffagiste à Caluire-et-Cuire ({brand.plusCode}). Urgence et
            dépannage sur Lyon : plomberie, chauffage, clim, chaudière.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Interventions</h3>
          <ul className="space-y-1 text-sm text-white/90">
            <li>
              <Link href="/urgences" className="hover:text-white">
                Urgence &amp; dépannage
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Plomberie
              </Link>
            </li>
            <li>
              <Link href="/entretien" className="hover:text-white">
                Chauffage &amp; chaudière
              </Link>
            </li>
            <li>
              <Link href="/pac-clim" className="hover:text-white">
                Climatisation
              </Link>
            </li>
            <li>
              <Link href="/zone-intervention" className="hover:text-white">
                Zone Lyon
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Contact</h3>
          <p className="text-white/90 text-sm">{brand.owner}</p>
          <p className="text-white/90 text-sm">{brand.address}</p>
          <p className="text-white/90 text-sm">{brand.plusCode}</p>
          <a href={brand.phoneHref} className="block text-white font-semibold mt-2">
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="block text-white/90 hover:text-white text-sm">
            {brand.email}
          </a>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Grand Lyon</h3>
          <p className="text-white/80 text-xs leading-relaxed">{zone.cities.slice(0, 12).join(" · ")}…</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <p className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
          © {brand.name} — {brand.owner} · Plombier Caluire · Lyon · SIRET {brand.siret}
        </p>
        <LsdevFooterCredit />
      </div>
    </footer>
  );
}
