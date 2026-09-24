import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { degatDesEaux } from "@/lib/commercialPages";

export const metadata = commercialMetadata(degatDesEaux);

export default function Page() {
  return <CommercialPage content={degatDesEaux} />;
}
