import { basalpayConfig } from "./basalpay";
import type { WalletProviderConfig } from "./types";

export type { WalletProviderConfig, WalletProviderTranslations } from "./types";

export const walletProviders: WalletProviderConfig[] = [
  basalpayConfig,
  // Ajoutez d'autres wallet providers ici
];

export function getWalletProvider(
  id: string
): WalletProviderConfig | undefined {
  return walletProviders.find((wp) => wp.id === id && wp.isActive);
}

export function getActiveWalletProviders(): WalletProviderConfig[] {
  return walletProviders
    .filter((wp) => wp.isActive)
    .sort((a, b) => a.order - b.order);
}
