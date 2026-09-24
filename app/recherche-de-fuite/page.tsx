import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { rechercheDeFuite } from "@/lib/commercialPages";

export const metadata = commercialMetadata(rechercheDeFuite);

export default function Page() {
  return <CommercialPage content={rechercheDeFuite} />;
}
