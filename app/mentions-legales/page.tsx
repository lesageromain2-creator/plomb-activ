import { pageMeta } from "@/lib/pageMeta";
import { brand } from "@/lib/siteCopy";

export const metadata = pageMeta(
  "/mentions-legales",
  "Mentions légales",
  `Mentions légales du site ${brand.name}, plombier à Caluire-et-Cuire. SIRET ${brand.siret}.`
);

export default function MentionsLegalesPage() {
  return (
    <article className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
        <h1 className="font-heading text-3xl font-bold text-primary">Mentions légales</h1>
        <p>
          Le site <strong>plombactiv.com</strong> est édité par <strong>{brand.name}</strong>, micro-entreprise de
          travaux d&apos;installation d&apos;eau et de gaz (NAF {brand.naf}).
        </p>
        <p>
          SIRET {brand.siret}
          <br />
          {brand.address}
          <br />
          Téléphone : {brand.phone}
          <br />
          Courriel : {brand.email}
        </p>
        <p>Directeur de la publication : {brand.name}.</p>
        <p>
          Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Le site est servi via le
          réseau Vercel.
        </p>
        <p>
          Les photos publiées sont des chantiers de l&apos;atelier. Toute reproduction du contenu sans accord est
          interdite.
        </p>
      </div>
    </article>
  );
}
