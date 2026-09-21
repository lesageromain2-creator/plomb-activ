import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { plombierCaluire } from "@/lib/commercialPages";

export const metadata = commercialMetadata(plombierCaluire);
export default function Page() {
  return <CommercialPage content={plombierCaluire} />;
}
