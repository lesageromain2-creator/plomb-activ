import { brand } from "@/lib/siteCopy";

export default function StickyCall() {
  return (
    <a
      href={brand.phoneHref}
      className="fixed bottom-4 right-4 z-50 md:hidden rounded-full bg-secondary text-white px-5 py-3.5 font-bold shadow-lg"
    >
      Appeler {brand.phone}
    </a>
  );
}
