import { pageMeta } from "@/lib/pageMeta";
import { brand } from "@/lib/siteCopy";

export const metadata = pageMeta(
  "/confidentialite",
  "Politique de confidentialité",
  `Données personnelles collectées par ${brand.name} via plombactiv.com (devis, contact, appels).`
);

export default function ConfidentialitePage() {
  return (
    <article className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
        <h1 className="font-heading text-3xl font-bold text-primary">Politique de confidentialité</h1>
        <p>
          PLOMB&apos;ACTIV traite les données que vous envoyez via les formulaires (nom, téléphone, e-mail, message,
          adresse de chantier) uniquement pour répondre à une demande de devis ou de dépannage.
        </p>
        <p>
          Base : intérêt légitime et exécution de mesures précontractuelles. Pas de revente de fichiers. Conservation :
          le temps du suivi commercial, puis suppression ou archivage limité aux obligations comptables.
        </p>
        <p>
          Destinataire : l&apos;atelier {brand.name} ({brand.email}, {brand.phone}). Hébergeur du site : Vercel.
        </p>
        <p>
          Aucun cookie publicitaire n&apos;est déposé par nos soins pour du reciblage. Les journaux techniques de
          l&apos;hébergeur peuvent contenir une adresse IP.
        </p>
        <p>
          Droits d&apos;accès, rectification, opposition, effacement : écrivez à {brand.email} ou au {brand.phone}.
          Réclamation : CNIL.
        </p>
      </div>
    </article>
  );
}
