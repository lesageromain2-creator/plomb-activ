import Link from "next/link";
import LsdevFooterCredit from "@/components/LsdevFooterCredit";
import { brand, zone } from "@/lib/siteCopy";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">{brand.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Plombier de proximité à <strong>Caluire-et-Cuire</strong>, rayon d&apos;environ {zone.radiusKm} km. Dépannage,
            installation, réseaux, détartrage, salle de bain. Entreprise immatriculée — SIRET {brand.siret}.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Liens utiles</h3>
          <ul className="space-y-1 text-sm text-white/90">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/urgences" className="hover:text-white">
                Urgences
              </Link>
            </li>
            <li>
              <Link href="/devis" className="hover:text-white">
                Devis gratuit
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-2">Contact</h3>
          <p className="text-white/90 text-sm">{brand.address}</p>
          <p className="text-white/90 text-sm">{brand.hours}</p>
          <a href={brand.phoneHref} className="text-white font-medium">
            {brand.phone}
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 px-4">
        <p className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
          © {brand.name} — Plombier Caluire-et-Cuire
        </p>
        <LsdevFooterCredit />
      </div>
    </footer>
  );
}
