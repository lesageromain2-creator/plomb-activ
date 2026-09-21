import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { debouchage } from "@/lib/commercialPages";

export const metadata = commercialMetadata(debouchage);
export default function Page() {
  return <CommercialPage content={debouchage} />;
}
