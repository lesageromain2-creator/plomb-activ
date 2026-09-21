import PageHero from "@/components/PageHero";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import { pages } from "@/lib/siteCopy";

export const metadata = {
  title: "Avis Google PLOMB'ACTIV | 5,0/5 plombier Caluire Lyon",
  description:
    "Avis Google 5,0/5 — 8 avis. Chauffe-eau, chaudière Vaillant, plomberie, fuite en commerce. GHOULI Foued, Caluire-et-Cuire.",
};

export default function AvisPage() {
  return (
    <div className="min-h-screen">
      <PageHero title="Avis Google Business" subtitle={pages.avisIntro} kicker="5,0 / 5 · 8 avis" imageSrc="/images/chantier/cumulus.jpg" />
      <GoogleReviewsCarousel />
    </div>
  );
}
