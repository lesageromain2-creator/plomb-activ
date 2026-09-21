import Link from "next/link";
import LsdevFooterCredit from "@/components/LsdevFooterCredit";
import { brand, zone } from "@/lib/siteCopy";
import { footerServices } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">{brand.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Plombier chauffagiste à Caluire-et-Cuire. Recherche de fuite, débouchage,
            ballon ECS, chaudière gaz, climatisation.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Prestations</h3>
          <ul className="space-y-1 text-sm text-white/90">
            {footerServices.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/conseils" className="hover:text-white">
                Conseils
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-white">
                À propos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Fiche Google</h3>
          <p className="text-white/90 text-sm">{brand.name}</p>
          <p className="text-white/90 text-sm">{brand.address}</p>
          <a href={brand.phoneHref} className="block text-secondary font-bold mt-2">
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="block text-white/90 hover:text-white text-sm">
            {brand.email}
          </a>
          <a
            href={brand.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold text-secondary"
          >
            Fiche Google Business →
          </a>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Grand Lyon</h3>
          <p className="text-white/80 text-xs leading-relaxed">{zone.cities.slice(0, 12).join(" · ")}…</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <p className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
          © {brand.name} · {brand.address} · SIRET {brand.siret}
        </p>
        <LsdevFooterCredit />
      </div>
    </footer>
  );
}
