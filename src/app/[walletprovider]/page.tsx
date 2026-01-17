import { getWalletProvider } from "@/lib/wallet-providers/index";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WalletProviderPageClient from "./WalletProviderPageClient";

// Routes statiques à exclure de la route dynamique
const STATIC_ROUTES = [
  "about",
  "privacy",
  "terms",
  "support",
  "mentions-legales",
  "localpartners",
  "api",
];

type Props = {
  params: Promise<{ walletprovider: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { walletprovider } = await params;

  if (!walletprovider || STATIC_ROUTES.includes(walletprovider)) {
    return {
      title: "VNDeFi",
    };
  }

  const provider = getWalletProvider(walletprovider);

  if (!provider) {
    return {
      title: "VNDeFi",
    };
  }

  const title = `VNDeFi x ${provider.displayName}`;
  const description = provider.translations.en.description || `Learn how to pay with crypto in Vietnam using ${provider.displayName}.`;

  return {
    title: {
      absolute: title,
    },
    description,
  };
}

export default async function WalletProviderPage({ params }: Props) {
  const { walletprovider } = await params;

  // Exclure les routes statiques et la route vide
  if (!walletprovider || STATIC_ROUTES.includes(walletprovider)) {
    notFound();
  }

  const provider = getWalletProvider(walletprovider);

  if (!provider) {
    notFound();
  }

  return <WalletProviderPageClient provider={provider} />;
}
