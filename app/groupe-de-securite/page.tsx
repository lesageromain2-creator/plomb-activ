import CommercialPage, { commercialMetadata } from "@/components/CommercialPage";
import { groupeDeSecurite } from "@/lib/commercialPages";

export const metadata = commercialMetadata(groupeDeSecurite);

export default function Page() {
  return <CommercialPage content={groupeDeSecurite} />;
}
