import Link from "next/link";
import { brand } from "@/lib/siteCopy";

export default function CtaRow({ showUrgence = true }: { showUrgence?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={brand.phoneHref}
        data-cta="tel"
        className="inline-flex rounded-lg bg-secondary text-white px-6 py-3 font-bold"
      >
        Appeler {brand.phone}
      </a>
      <Link href="/devis" data-cta="devis" className="inline-flex rounded-lg bg-primary text-white px-6 py-3 font-bold">
        Demander un devis
      </Link>
      {showUrgence && (
        <Link href="/urgences" className="inline-flex rounded-lg border border-secondary text-secondary px-6 py-3 font-semibold">
          Urgence plomberie
        </Link>
      )}
    </div>
  );
}
