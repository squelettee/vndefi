"use client";

import * as React from "react";
import {
  getActiveWalletProviders,
  getWalletProvider,
  type WalletProviderConfig,
} from "@/lib/wallet-providers/index";

type WalletProviderContextType = {
  walletProviders: WalletProviderConfig[];
  getProvider: (id: string) => WalletProviderConfig | undefined;
};

const WalletProviderContext = React.createContext<
  WalletProviderContextType | undefined
>(undefined);

export function useWalletProviders() {
  const context = React.useContext(WalletProviderContext);
  if (context === undefined) {
    throw new Error("useWalletProviders must be used within a WalletProvider");
  }
  return context;
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const activeProviders = React.useMemo(() => getActiveWalletProviders(), []);

  const value: WalletProviderContextType = {
    walletProviders: activeProviders,
    getProvider: getWalletProvider,
  };

  return (
    <WalletProviderContext.Provider value={value}>
      {children}
    </WalletProviderContext.Provider>
  );
}
