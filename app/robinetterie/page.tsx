import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { robinetterie } from "@/lib/commercialPages";

export const metadata = commercialMetadata(robinetterie);

export default function Page() {
  return <CommercialPage content={robinetterie} />;
}
