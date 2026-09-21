import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { fuiteEau } from "@/lib/commercialPages";

export const metadata = commercialMetadata(fuiteEau);
export default function Page() {
  return <CommercialPage content={fuiteEau} />;
}
