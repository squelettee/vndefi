export type WalletProviderTranslations = {
  description?: string;
  tip?: string;
  benefits: {
    b1Title: string;
    b1Desc: string;
    b2Title: string;
    b2Desc: string;
    b3Title: string;
    b3Desc: string;
    b4Title: string;
    b4Desc: string;
  };
  steps: {
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
  };
};

export type WalletProviderConfig = {
  id: string;
  name: string;
  displayName: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  learnMoreUrl?: string;
  logoUrl?: string;
  videoUrl?: string;
  translations: {
    en: WalletProviderTranslations;
    fr: WalletProviderTranslations;
    vi: WalletProviderTranslations;
  };
  isActive: boolean;
  order: number;
};
