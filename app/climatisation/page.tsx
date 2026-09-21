import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { climatisation } from "@/lib/commercialPages";

export const metadata = commercialMetadata(climatisation);
export default function Page() {
  return <CommercialPage content={climatisation} />;
}
