import Link from "next/link";

export default function RelatedLinks({
  items,
  title = "À consulter aussi",
}: {
  items: { href: string; label: string }[];
  title?: string;
}) {
  return (
    <nav aria-label={title} className="mt-10">
      <p className="text-sm font-semibold text-primary mb-3">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-block rounded-full bg-white border border-black/10 px-4 py-2 text-sm text-primary hover:border-secondary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
