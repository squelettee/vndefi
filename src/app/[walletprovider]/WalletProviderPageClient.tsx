"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Info, Timer, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { WalletProviderConfig } from "@/lib/wallet-providers";

const translations = {
  en: {
    language: "Language",
    langEnglish: "English",
    langFrench: "Français",
    langVietnamese: "Tiếng Việt",
    badge: "Independent project",
    heroTitle: "Your guide to crypto payments in Vietnam",
    heroDesc:
      "Learn how to pay with crypto in Vietnam using VietQR — explore step-by-step guides, supported wallets, and local crypto-friendly shops.",
    brandBy: "by VNDeFi",
    appStore: "App Store",
    googlePlay: "Google Play",
    learnMore: "Learn more",
    b1Title: "Instant & Local",
    b1Desc:
      "Pay Vietnamese shops instantly through VietQR. Your wallet handles the VND conversion and transfer.",
    b2Title: "Works Almost Everywhere",
    b2Desc:
      "Most cafés, hotels, and stores already display a VietQR code. Crypto users can pay through it, too.",
    b3Title: "No Hidden Fees",
    b3Desc:
      "Avoid card conversion charges or ATM withdrawals. You pay exactly the amount shown in VND.",
    b4Title: "Perfect for Travelers & Nomads",
    b4Desc:
      "Skip currency exchange lines and card issues. Just scan, confirm, and pay with crypto.",
    stepsTitle: "How It Works",
    stepsDesc: "A quick overview of the flow",
    stepLabel: "STEP",
    finalTitle: "Ready to Try Crypto Payments in Vietnam?",
    finalDesc:
      "Get started in minutes — download a supported wallet and try your first crypto-to-VND payment today.",
    merchantsTitle: "For Local Merchants",
    merchantsDesc:
      "Have a café or shop? Join VNDeFi's pilot to learn how to welcome crypto-using customers — with no cost or system change.",
    merchantsCta: "Become a Local Partner →",
    comingTitle: "Coming Soon — Crypto Adoption Snapshot",
    comingDesc:
      "VNDeFi is preparing Vietnam's first Crypto Payments Index, tracking real-world engagement from cities like Da Nang, HCMC, and Hanoi. Stay tuned for updates.",
    footerTagline: "Independent guide to paying with crypto in Vietnam",
    disclaimer:
      "Disclaimer: VNDeFi is an independent informational platform. We are not affiliated with or endorsed by any exchange, wallet provider, or financial institution. We do not offer financial, legal, or investment advice, and are not a licensed payment service. Use of cryptocurrency involves risks, and users are responsible for ensuring compliance with local laws and regulations.",
    whyTitle: "Why Pay in Crypto in Vietnam?",
    whyB1: "Many local shops don't accept international cards.",
    whyB2: "Crypto payments work instantly and locally.",
    whyB3: "No hidden fees or conversion surprises.",
    about: "About VNDeFi",
    privacy: "Privacy",
    terms: "Terms",
    support: "Support",
    legal: "Legal",
  },
  fr: {
    language: "Langue",
    langEnglish: "English",
    langFrench: "Français",
    langVietnamese: "Tiếng Việt",
    badge: "Projet indépendant",
    heroTitle: "Votre guide des paiements crypto au Vietnam",
    heroDesc:
      "Apprenez à payer en crypto au Vietnam via VietQR — découvrez des guides pas à pas, les portefeuilles compatibles et des commerces locaux crypto‑friendly.",
    brandBy: "par VNDeFi",
    appStore: "App Store",
    googlePlay: "Google Play",
    learnMore: "En savoir plus",
    b1Title: "Instantané et local",
    b1Desc:
      "Payez instantanément les commerces vietnamiens via VietQR. Votre wallet gère la conversion et le virement en VND.",
    b2Title: "Fonctionne presque partout",
    b2Desc:
      "La plupart des cafés, hôtels et boutiques affichent déjà un QR VietQR. Les utilisateurs crypto peuvent aussi payer via celui‑ci.",
    b3Title: "Sans frais cachés",
    b3Desc:
      "Évitez les frais de conversion carte ou les retraits DAB. Vous payez exactement le montant affiché en VND.",
    b4Title: "Idéal pour voyageurs et nomades",
    b4Desc:
      "Évitez le change et les problèmes de carte. Scannez, confirmez, payez en crypto.",
    stepsTitle: "Comment Ça Marche",
    stepsDesc: "Un aperçu rapide du parcours",
    stepLabel: "ÉTAPE",
    finalTitle: "Prêt à essayer les paiements crypto au Vietnam ?",
    finalDesc:
      "Démarrez en quelques minutes — téléchargez un portefeuille compatible et réalisez votre premier paiement crypto→VND.",
    merchantsTitle: "Pour les commerçants locaux",
    merchantsDesc:
      "Vous avez un café ou une boutique ? Rejoignez le pilote VNDeFi pour accueillir les clients utilisateurs de crypto — sans coût ni changement de système.",
    merchantsCta: "Devenir partenaire local →",
    comingTitle: "Bientôt — Panorama de l'adoption crypto",
    comingDesc:
      "VNDeFi prépare le premier Crypto Payments Index du Vietnam, suivant l'usage réel dans des villes comme Da Nang, HCMC et Hanoï. Restez informés.",
    footerTagline: "Guide indépendant pour payer en crypto au Vietnam",
    disclaimer:
      "Clause de non-responsabilité : VNDeFi est une plateforme d'information indépendante. Nous ne sommes affiliés ni approuvés par aucune plateforme d'échange, fournisseur de wallet ou institution financière. Nous ne proposons aucun conseil financier, juridique ou en investissement et ne sommes pas un prestataire de services de paiement agréé. L'utilisation des crypto‑monnaies comporte des risques et il appartient aux utilisateurs de s'assurer du respect des lois et réglementations locales.",
    whyTitle: "Pourquoi payer en crypto au Vietnam ?",
    whyB1: "Beaucoup de commerces n'acceptent pas les cartes internationales.",
    whyB2: "Les paiements crypto sont instantanés et locaux.",
    whyB3: "Pas de frais cachés ni de surprises de conversion.",
    about: "À propos de VNDeFi",
    privacy: "Confidentialité",
    terms: "Conditions",
    support: "Support",
    legal: "Mentions légales",
  },
  vi: {
    language: "Ngôn ngữ",
    langEnglish: "English",
    langFrench: "Français",
    langVietnamese: "Tiếng Việt",
    badge: "Dự án độc lập",
    heroTitle: "Cẩm nang thanh toán bằng crypto tại Việt Nam",
    heroDesc:
      "Tìm hiểu cách thanh toán bằng crypto tại Việt Nam qua VietQR — khám phá hướng dẫn từng bước, ví hỗ trợ và các cửa hàng thân thiện với crypto.",
    brandBy: "bởi VNDeFi",
    appStore: "App Store",
    googlePlay: "Google Play",
    learnMore: "Tìm hiểu thêm",
    b1Title: "Tức thì và nội địa",
    b1Desc:
      "Thanh toán cửa hàng Việt Nam ngay qua VietQR. Ví của bạn xử lý quy đổi và chuyển khoản VND.",
    b2Title: "Hoạt động gần như ở mọi nơi",
    b2Desc:
      "Phần lớn quán cà phê, khách sạn, cửa hàng đã có VietQR. Người dùng crypto cũng có thể thanh toán qua đó.",
    b3Title: "Không phí ẩn",
    b3Desc:
      "Tránh phí quy đổi thẻ hoặc rút ATM. Bạn trả đúng số tiền VND hiển thị.",
    b4Title: "Hoàn hảo cho khách du lịch & nomad",
    b4Desc:
      "Không cần đổi tiền hay lo lỗi thẻ. Chỉ cần quét, xác nhận và thanh toán bằng crypto.",
    stepsTitle: "Cách Hoạt Động",
    stepsDesc: "Tóm tắt nhanh quy trình",
    stepLabel: "BƯỚC",
    finalTitle: "Sẵn sàng thử thanh toán crypto tại Việt Nam?",
    finalDesc:
      "Bắt đầu trong vài phút — tải ví phù hợp và thử thanh toán crypto→VND đầu tiên của bạn.",
    merchantsTitle: "Dành cho chủ cửa hàng",
    merchantsDesc:
      "Có quán cà phê hay cửa hàng? Tham gia chương trình thí điểm của VNDeFi để đón khách dùng crypto — không tốn phí, không cần đổi hệ thống.",
    merchantsCta: "Trở thành đối tác địa phương →",
    comingTitle: "Sắp ra mắt — Bức tranh chấp nhận crypto",
    comingDesc:
      "VNDeFi đang chuẩn bị Crypto Payments Index đầu tiên của Việt Nam, theo dõi mức độ sử dụng thực tế tại Đà Nẵng, TP.HCM, Hà Nội. Hãy đón chờ.",
    footerTagline: "Hướng dẫn độc lập thanh toán crypto tại Việt Nam",
    disclaimer:
      "Miễn trừ trách nhiệm: VNDeFi là nền tảng thông tin độc lập. Chúng tôi không liên kết hoặc được bảo trợ bởi bất kỳ sàn giao dịch, nhà cung cấp ví hoặc tổ chức tài chính nào. Chúng tôi không cung cấp tư vấn tài chính, pháp lý hoặc đầu tư và không phải là đơn vị cung cấp dịch vụ thanh toán được cấp phép. Việc sử dụng tiền mã hoá tiềm ẩn rủi ro; người dùng tự chịu trách nhiệm tuân thủ luật pháp và quy định địa phương.",
    whyTitle: "Vì sao trả bằng crypto tại Việt Nam?",
    whyB1: "Nhiều cửa hàng không chấp nhận thẻ quốc tế.",
    whyB2: "Thanh toán crypto diễn ra tức thì và nội địa.",
    whyB3: "Không phí ẩn hay bất ngờ khi quy đổi.",
    about: "Giới thiệu VNDeFi",
    privacy: "Bảo mật",
    terms: "Điều khoản",
    support: "Hỗ trợ",
    legal: "Thông tin pháp lý",
  },
} as const;

type Lang = keyof typeof translations;

type Props = {
  provider: WalletProviderConfig;
};

export default function WalletProviderPageClient({ provider }: Props) {
  const [lang, setLang] = useState<Lang>("en");
  const shopId = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const url = new URL(window.location.href);
    return url.searchParams.get("shopId") ?? undefined;
  }, []);
  const t = translations[lang];
  const providerTranslations = provider.translations[lang];

  useEffect(() => {
    if (!shopId) return;
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shopId, event: "page_view" }),
    }).catch(() => {});
  }, [shopId]);

  return (
    <main className="font-sans">
      {/* Top bar with language selector */}
      <div className="max-w-screen-xl mx-auto px-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span>VNDeFi x {provider.displayName}</span>
          </div>
          <div className="flex items-center gap-2">
            <AnimatedThemeToggler />
            <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
              <SelectTrigger size="sm" aria-label={t.language}>
                <SelectValue placeholder={t.language} />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="en">🇬🇧 {t.langEnglish}</SelectItem>
                <SelectItem value="fr">🇫🇷 {t.langFrench}</SelectItem>
                <SelectItem value="vi">🇻🇳 {t.langVietnamese}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-4 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              {t.heroTitle}
            </h1>
            <div className="text-sm text-muted-foreground">{t.brandBy}</div>
            <p className="text-muted-foreground text-base sm:text-lg">
              {t.heroDesc}
            </p>
            {providerTranslations.description && (
              <p className="text-muted-foreground text-sm mt-2">
                {providerTranslations.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3">
              {provider.appStoreUrl && (
                <Link
                  href={provider.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={t.appStore}
                  onClick={() => {
                    if (!shopId) return;
                    fetch("/api/track", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        shopId,
                        event: "click_app_store",
                      }),
                    }).catch(() => {});
                  }}
                >
                  <Image
                    src="/apple-logo-svgrepo-com.svg"
                    alt="Apple"
                    width={16}
                    height={16}
                    className="dark:invert"
                  />{" "}
                  {t.appStore}
                </Link>
              )}
              {provider.googlePlayUrl && (
                <Link
                  href={provider.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={t.googlePlay}
                  onClick={() => {
                    if (!shopId) return;
                    fetch("/api/track", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        shopId,
                        event: "click_google_play",
                      }),
                    }).catch(() => {});
                  }}
                >
                  <Image
                    src="/play-store-svgrepo-com.svg"
                    alt="Google Play"
                    width={16}
                    height={16}
                    className="dark:invert"
                  />{" "}
                  {t.googlePlay}
                </Link>
              )}
              {provider.learnMoreUrl && (
                <Link
                  href={provider.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                  onClick={() => {
                    if (!shopId) return;
                    fetch("/api/track", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        shopId,
                        event: "click_learn_more",
                      }),
                    }).catch(() => {});
                  }}
                >
                  {t.learnMore}
                </Link>
              )}
            </div>
          </div>
          <div className="relative">
            {/* Mobile: 3/4 */}
            {provider.videoUrl && (
              <>
                <div className="sm:hidden">
                  <AspectRatio ratio={3 / 4}>
                    <div className="h-full w-full rounded-xl border bg-muted/50 flex items-center justify-center">
                      <video
                        className="h-full w-full rounded-xl object-cover"
                        src={provider.videoUrl}
                        controls
                        playsInline
                        muted
                        loop
                        autoPlay
                      />
                    </div>
                  </AspectRatio>
                </div>
                {/* Desktop: 16/9 */}
                <div className="hidden sm:block">
                  <AspectRatio ratio={16 / 9}>
                    <div className="h-full w-full rounded-xl border bg-muted/50 flex items-center justify-center">
                      <video
                        className="h-full w-full rounded-xl object-cover"
                        src={provider.videoUrl}
                        controls
                        playsInline
                        muted
                        loop
                        autoPlay
                      />
                    </div>
                  </AspectRatio>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Pay with Crypto / Benefits */}
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4 flex items-center gap-2">
          <Info className="size-5" /> {t.whyTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Wallet className="size-4" />{" "}
                {providerTranslations.benefits.b1Title}
              </CardTitle>
              <CardDescription>
                {providerTranslations.benefits.b1Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Timer className="size-4" />{" "}
                {providerTranslations.benefits.b2Title}
              </CardTitle>
              <CardDescription>
                {providerTranslations.benefits.b2Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="size-4" />{" "}
                {providerTranslations.benefits.b3Title}
              </CardTitle>
              <CardDescription>
                {providerTranslations.benefits.b3Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Info className="size-4" />{" "}
                {providerTranslations.benefits.b4Title}
              </CardTitle>
              <CardDescription>
                {providerTranslations.benefits.b4Desc}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {t.stepsTitle}
          </h2>
          <p className="text-muted-foreground mt-2">{t.stepsDesc}</p>
          {providerTranslations.tip && (
            <div className="mt-3 text-xs sm:text-sm inline-flex items-start gap-2 rounded-md border px-3 py-2 bg-muted/40">
              <Info className="size-4 mt-0.5" />
              <span>{providerTranslations.tip}</span>
            </div>
          )}
        </div>
        <ol className="grid sm:grid-cols-3 gap-6">
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">
              {t.stepLabel} 1
            </div>
            <div className="mt-2 text-base font-medium">
              {providerTranslations.steps.s1Title}
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              {providerTranslations.steps.s1Desc}
            </div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">
              {t.stepLabel} 2
            </div>
            <div className="mt-2 text-base font-medium">
              {providerTranslations.steps.s2Title}
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              {providerTranslations.steps.s2Desc}
            </div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">
              {t.stepLabel} 3
            </div>
            <div className="mt-2 text-base font-medium">
              {providerTranslations.steps.s3Title}
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              {providerTranslations.steps.s3Desc}
            </div>
          </li>
        </ol>
      </section>

      {/* For Local Merchants */}
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <Card>
          <CardContent className="py-8">
            <div className="flex flex-col items-center text-center gap-4">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {t.merchantsTitle}
              </h3>
              <p className="text-muted-foreground max-w-3xl">
                {t.merchantsDesc}
              </p>
              <Link
                href={`/localpartners?lang=${lang}`}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {t.merchantsCta}
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Coming Soon */}
      <section className="max-w-screen-xl mx-auto px-4 py-4 sm:py-8">
        <div className="rounded-xl border p-6 sm:p-8 bg-card">
          <h3 className="text-lg sm:text-xl font-semibold">{t.comingTitle}</h3>
          <p className="text-muted-foreground mt-2">{t.comingDesc}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-screen-xl mx-auto px-4 py-12 sm:py-16">
        <Card className="border-dashed">
          <CardContent className="py-10">
            <div className="flex flex-col items-center text-center gap-5">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {t.finalTitle}
              </h3>
              <p className="text-muted-foreground max-w-2xl">{t.finalDesc}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {provider.appStoreUrl && (
                  <Link
                    href={provider.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={t.appStore}
                    onClick={() => {
                      if (!shopId) return;
                      fetch("/api/track", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          shopId,
                          event: "click_app_store",
                        }),
                      }).catch(() => {});
                    }}
                  >
                    <Image
                      src="/apple-logo-svgrepo-com.svg"
                      alt="Apple"
                      width={16}
                      height={16}
                      className="dark:invert"
                    />{" "}
                    {t.appStore}
                  </Link>
                )}
                {provider.googlePlayUrl && (
                  <Link
                    href={provider.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={t.googlePlay}
                    onClick={() => {
                      if (!shopId) return;
                      fetch("/api/track", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          shopId,
                          event: "click_google_play",
                        }),
                      }).catch(() => {});
                    }}
                  >
                    <Image
                      src="/play-store-svgrepo-com.svg"
                      alt="Google Play"
                      width={16}
                      height={16}
                      className="dark:invert"
                    />{" "}
                    {t.googlePlay}
                  </Link>
                )}
                {provider.learnMoreUrl && (
                  <Link
                    href={provider.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                    onClick={() => {
                      if (!shopId) return;
                      fetch("/api/track", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          shopId,
                          event: "click_learn_more",
                        }),
                      }).catch(() => {});
                    }}
                  >
                    {t.learnMore}
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center sm:text-left text-muted-foreground">
              © {new Date().getFullYear()} VNDeFi — {t.footerTagline}
              <div className="mt-2 text-xs max-w-3xl">{t.disclaimer}</div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link
                href={`/about?lang=${lang}`}
                className="hover:text-foreground transition-colors"
              >
                {t.about}
              </Link>
              <Link
                href={`/privacy?lang=${lang}`}
                className="hover:text-foreground transition-colors"
              >
                {t.privacy}
              </Link>
              <Link
                href={`/terms?lang=${lang}`}
                className="hover:text-foreground transition-colors"
              >
                {t.terms}
              </Link>
              <Link
                href={`/support?lang=${lang}`}
                className="hover:text-foreground transition-colors"
              >
                {t.support}
              </Link>
              <Link
                href={`/mentions-legales?lang=${lang}`}
                className="hover:text-foreground transition-colors"
              >
                {t.legal}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
