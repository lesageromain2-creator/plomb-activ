import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { remplacementWc } from "@/lib/commercialPages";

export const metadata = commercialMetadata(remplacementWc);

export default function Page() {
  return <CommercialPage content={remplacementWc} />;
}
