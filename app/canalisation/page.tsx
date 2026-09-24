import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { canalisation } from "@/lib/commercialPages";

export const metadata = commercialMetadata(canalisation);

export default function Page() {
  return <CommercialPage content={canalisation} />;
}
