import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { chauffage } from "@/lib/commercialPages";

export const metadata = commercialMetadata(chauffage);
export default function Page() {
  return <CommercialPage content={chauffage} />;
}
