import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { chauffeEau } from "@/lib/commercialPages";

export const metadata = commercialMetadata(chauffeEau);
export default function Page() {
  return <CommercialPage content={chauffeEau} />;
}
