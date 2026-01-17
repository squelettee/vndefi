import { redirect } from "next/navigation";
import { getActiveWalletProviders } from "@/lib/wallet-providers/index";

export default function Home() {
  const providers = getActiveWalletProviders();
  
  if (providers.length === 0) {
    return <div>No wallet providers available</div>;
  }

  // Rediriger vers le premier wallet provider actif
  redirect(`/${providers[0].id}`);
}
