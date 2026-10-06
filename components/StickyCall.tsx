import { brand } from "@/lib/siteCopy";

export default function StickyCall() {
  return (
    <a
      href={brand.phoneHref}
      aria-label={`Appeler ${brand.phone}`}
      className="fixed bottom-4 right-4 z-50 md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h2.6a1 1 0 01.96.73l.7 2.6a1 1 0 01-.27.98l-1.2 1.2a16 16 0 006.7 6.7l1.2-1.2a1 1 0 01.98-.27l2.6.7a1 1 0 01.73.96V19a2 2 0 01-2 2h-.5C9.5 21 3 14.5 3 6.5V5z"
        />
      </svg>
    </a>
  );
}
