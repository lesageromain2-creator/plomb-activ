import Link from "next/link";
import { pageMeta } from "@/lib/pageMeta";
import { SITE_URLS } from "@/lib/siteUrls";

export const metadata = pageMeta(
  "/plan-du-site",
  "Plan du site",
  "Toutes les pages indexables de PLOMB'ACTIV : métiers, communes, conseils, contact."
);

export default function PlanDuSitePage() {
  return (
    <article className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-primary mb-8">Plan du site</h1>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {SITE_URLS.map((u) => (
            <li key={u.path}>
              <Link href={u.path} className="text-secondary hover:underline">
                {u.path === "/" ? "Accueil" : u.path}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
