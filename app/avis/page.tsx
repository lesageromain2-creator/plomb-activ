import PageHero from "@/components/PageHero";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import { pages } from "@/lib/siteCopy";

import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta(
  "/avis",
  "Avis Google | 5,0/5 plombier Caluire Lyon",
  "Avis Google 5,0/5, 8 extraits publiés. Chauffe-eau, chaudière Vaillant, plomberie, fuite en commerce. PLOMB'ACTIV, Caluire-et-Cuire."
);

export default function AvisPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Avis Google Business" subtitle={pages.avisIntro} kicker="5,0 / 5 · 8 avis" imageSrc="/images/chantier/cumulus.jpg" />
      <GoogleReviewsCarousel />
    </div>
  );
}
