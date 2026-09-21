import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { plombierLyon } from "@/lib/commercialPages";

export const metadata = commercialMetadata(plombierLyon);
export default function Page() {
  return <CommercialPage content={plombierLyon} />;
}
