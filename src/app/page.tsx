"use client"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Banknote, Globe, Info, QrCode, Timer, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const translations = {
  en: {
    language: "Language",
    langEnglish: "English",
    langFrench: "Français",
    langVietnamese: "Tiếng Việt",
    badge: "Independent project",
    heroTitle: "Pay in Crypto When in Vietnam",
    heroDesc:
      "A simple guide to paying Vietnamese shops with crypto — even when they don’t accept international cards. Built for tourists, digital nomads and expats.",
    ctaTry: "essayer l'app",
    ctaDownload: "Download Bitget App (iOS / Android)",
    ctaLearn: "Learn how to pay using Bitget",
    brandBy: "by VNDefi",
    appStore: "App Store",
    googlePlay: "Google Play",
    learnMore: "Learn more",
    heroVideoTitle: "Add a demo video here",
    heroVideoSubtitle: "(QR scan + stablecoin payment)",
    b1Title: "Fast payments",
    b1Desc: "Instant QR payments with automatic VND settlement.",
    b2Title: "Convenient everywhere",
    b2Desc: "Pay at local shops using bank QR, no international card needed.",
    b3Title: "No card limits",
    b3Desc: "Avoid foreign card limits and declines while traveling.",
    b4Title: "Seamless with Bitget",
    b4Desc: "Designed to broaden wallet support as the ecosystem grows.",
    stepsTitle: "How it works",
    stepsDesc: "A quick overview of the flow.",
    stepLabel: "STEP",
    s1Title: "Download the Bitget app",
    s1Desc: "Available on iOS and Android.",
    s2Title: "Your wallet is created",
    s2Desc: "Add crypto funds in seconds.",
    s3Title: "Scan a bank QR at checkout",
    s3Desc: "Most shops in Vietnam display bank QR codes.",
    s4Title: "Enter the amount due in VND",
    s4Desc: "We auto-convert your crypto to VND.",
    s5Title: "Choose your stablecoin",
    s5Desc: "Pay with the stablecoin you prefer.",
    s6Title: "Confirm and pay",
    s6Desc: "The merchant receives a local VND transfer.",
    noteTitle: "Neutral note",
    noteDesc:
      "Some wallets, like Bitget, already support instant crypto‑to‑VND transfers directly to Vietnamese bank accounts. We do not represent or promote any company.",
    videoTitle: "Video demos",
    videoDesc: "Insert videos here to showcase the user journey.",
    video1: "In-store QR scan",
    video2: "Enter VND amount and pay",
    finalTitle: "Ready to try?",
    finalDesc:
      "Get set up in minutes and start paying Vietnamese shops with crypto.",
    footerTagline: "Independent guide to paying with crypto in Vietnam",
    disclaimer:
      "This website is an independent educational resource. We are not affiliated with or endorsed by any exchange or financial institution.",
    whyTitle: "Why Pay in Crypto in Vietnam?",
    whyB1: "Many local shops don’t accept international cards.",
    whyB2: "Crypto payments work instantly and locally.",
    whyB3: "No hidden fees or conversion surprises.",
    about: "About VNDefi",
    privacy: "Privacy",
    terms: "Terms",
    support: "Support",
  },
  fr: {
    language: "Langue",
    langEnglish: "English",
    langFrench: "Français",
    langVietnamese: "Tiếng Việt",
    badge: "Projet indépendant",
    heroTitle: "Payez en crypto lors de votre séjour au Vietnam",
    heroDesc:
      "Un guide simple pour payer les commerces vietnamiens en crypto — même s’ils n’acceptent pas les cartes internationales. Pensé pour les touristes, nomades et expatriés.",
    ctaTry: "essayer l'app",
    ctaDownload: "Télécharger l’app Bitget (iOS / Android)",
    ctaLearn: "Découvrir comment payer avec Bitget",
    brandBy: "par VNDefi",
    appStore: "App Store",
    googlePlay: "Google Play",
    learnMore: "En savoir plus",
    heroVideoTitle: "Ajoutez ici une vidéo de démo",
    heroVideoSubtitle: "(scan QR + paiement en stablecoin)",
    b1Title: "Paiements rapides",
    b1Desc: "Paiement QR instantané avec règlement automatique en VND.",
    b2Title: "Pratique partout",
    b2Desc: "Payez dans les commerces via QR bancaire, sans carte internationale.",
    b3Title: "Sans limites de carte",
    b3Desc: "Évitez les plafonds et refus de cartes à l’étranger.",
    b4Title: "Intégration fluide avec Bitget",
    b4Desc: "Pensé pour élargir le support d’autres wallets au fil du temps.",
    stepsTitle: "Comment ça marche",
    stepsDesc: "Un aperçu rapide du parcours.",
    stepLabel: "ÉTAPE",
    s1Title: "Téléchargez l’app Bitget",
    s1Desc: "Disponible sur iOS et Android.",
    s2Title: "Votre wallet est créé",
    s2Desc: "Ajoutez des fonds en crypto en quelques instants.",
    s3Title: "Scannez un QR bancaire au comptoir",
    s3Desc: "La plupart des commerces affichent des QR bancaires.",
    s4Title: "Entrez le montant dû en VND",
    s4Desc: "Conversion automatique de vos cryptos en VND.",
    s5Title: "Choisissez votre stablecoin",
    s5Desc: "Payez avec le stablecoin de votre choix.",
    s6Title: "Validez et payez",
    s6Desc: "Le commerçant reçoit un virement local en VND.",
    noteTitle: "Note neutre",
    noteDesc:
      "Certains wallets, comme Bitget, prennent déjà en charge les virements instantanés crypto‑vers‑VND vers des comptes bancaires vietnamiens. Nous ne représentons ni ne promouvons aucune entreprise.",
    videoTitle: "Démonstrations vidéo",
    videoDesc: "Ajoutez des vidéos pour montrer le parcours utilisateur.",
    video1: "Scan du QR en magasin",
    video2: "Saisie du montant en VND et paiement",
    finalTitle: "Prêt à essayer ?",
    finalDesc:
      "Installez-vous en quelques minutes et payez les commerces vietnamiens en crypto.",
    footerTagline: "Guide indépendant pour payer en crypto au Vietnam",
    disclaimer:
      "Ce site est une ressource éducative indépendante. Nous ne sommes affiliés ni approuvés par aucune plateforme ou institution financière.",
    whyTitle: "Pourquoi payer en crypto au Vietnam ?",
    whyB1: "Beaucoup de commerces n’acceptent pas les cartes internationales.",
    whyB2: "Les paiements crypto sont instantanés et locaux.",
    whyB3: "Pas de frais cachés ni de surprises de conversion.",
    about: "À propos de VNDefi",
    privacy: "Confidentialité",
    terms: "Conditions",
    support: "Support",
  },
  vi: {
    language: "Ngôn ngữ",
    langEnglish: "English",
    langFrench: "Français",
    langVietnamese: "Tiếng Việt",
    badge: "Dự án độc lập",
    heroTitle: "Thanh toán bằng crypto khi ở Việt Nam",
    heroDesc:
      "Hướng dẫn đơn giản để thanh toán tại cửa hàng Việt Nam bằng crypto — ngay cả khi họ không chấp nhận thẻ quốc tế. Dành cho khách du lịch, nomad và expat.",
    ctaTry: "essayer l'app",
    ctaDownload: "Tải ứng dụng Bitget (iOS / Android)",
    ctaLearn: "Tìm hiểu cách thanh toán với Bitget",
    brandBy: "bởi VNDefi",
    appStore: "App Store",
    googlePlay: "Google Play",
    learnMore: "Tìm hiểu thêm",
    heroVideoTitle: "Thêm video demo tại đây",
    heroVideoSubtitle: "(Quét QR + thanh toán bằng stablecoin)",
    b1Title: "Thanh toán nhanh",
    b1Desc: "QR tức thì với tất toán tự động bằng VND.",
    b2Title: "Tiện lợi ở mọi nơi",
    b2Desc: "Trả tại cửa hàng bằng mã QR ngân hàng, không cần thẻ quốc tế.",
    b3Title: "Không giới hạn thẻ",
    b3Desc: "Tránh giới hạn và từ chối thẻ khi đi du lịch.",
    b4Title: "Trải nghiệm mượt mà với Bitget",
    b4Desc: "Hướng tới hỗ trợ thêm nhiều ví khi hệ sinh thái phát triển.",
    stepsTitle: "Cách hoạt động",
    stepsDesc: "Tóm tắt nhanh quy trình.",
    stepLabel: "BƯỚC",
    s1Title: "Tải ứng dụng Bitget",
    s1Desc: "Có trên iOS và Android.",
    s2Title: "Ví của bạn được tạo",
    s2Desc: "Nạp crypto trong vài giây.",
    s3Title: "Quét mã QR ngân hàng khi thanh toán",
    s3Desc: "Hầu hết cửa hàng tại Việt Nam đều có mã QR ngân hàng.",
    s4Title: "Nhập số tiền VND cần trả",
    s4Desc: "Tự động quy đổi crypto sang VND.",
    s5Title: "Chọn stablecoin của bạn",
    s5Desc: "Thanh toán bằng stablecoin bạn thích.",
    s6Title: "Xác nhận và thanh toán",
    s6Desc: "Người bán nhận chuyển khoản VND nội địa.",
    noteTitle: "Ghi chú trung lập",
    noteDesc:
      "Một số ví, như Bitget, đã hỗ trợ chuyển đổi crypto‑sang‑VND tức thì trực tiếp vào tài khoản ngân hàng Việt Nam. Chúng tôi không đại diện hay quảng bá bất kỳ công ty nào.",
    videoTitle: "Video demo",
    videoDesc: "Thêm video để minh hoạ hành trình người dùng.",
    video1: "Quét QR tại cửa hàng",
    video2: "Nhập số tiền VND và thanh toán",
    finalTitle: "Sẵn sàng thử?",
    finalDesc:
      "Thiết lập trong vài phút và bắt đầu thanh toán cửa hàng Việt Nam bằng crypto.",
    footerTagline: "Hướng dẫn độc lập thanh toán crypto tại Việt Nam",
    disclaimer:
      "Trang web này là tài nguyên giáo dục độc lập. Chúng tôi không liên kết hay được bảo trợ bởi bất kỳ sàn hay tổ chức tài chính nào.",
    whyTitle: "Vì sao trả bằng crypto tại Việt Nam?",
    whyB1: "Nhiều cửa hàng không chấp nhận thẻ quốc tế.",
    whyB2: "Thanh toán crypto diễn ra tức thì và nội địa.",
    whyB3: "Không phí ẩn hay bất ngờ khi quy đổi.",
    about: "Giới thiệu VNDefi",
    privacy: "Bảo mật",
    terms: "Điều khoản",
    support: "Hỗ trợ",
  },
} as const

type Lang = keyof typeof translations

export default function Home() {
  const [lang, setLang] = useState<Lang>("en")
  const t = translations[lang]

  return (
    <main className="font-sans">
      {/* Top bar with language selector */}
      <div className="max-w-screen-xl mx-auto px-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span>VNDefi</span>
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
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://apps.apple.com/us/app/bitget-wallet-bitcoin-crypto/id1395301115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={t.appStore}
              >
                <Image src="/apple-logo-svgrepo-com.svg" alt="Apple" width={16} height={16} className="dark:invert" /> {t.appStore}
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={t.googlePlay}
              >
                <Image src="/play-store-svgrepo-com.svg" alt="Google Play" width={16} height={16} className="dark:invert" /> {t.googlePlay}
              </Link>
              <Link
                href="https://web3.bitget.com/en/wallet-download?type=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
              >
                {t.learnMore}
              </Link>
            </div>
          </div>
          <div className="relative">
            <AspectRatio ratio={16 / 9}>
              <div className="h-full w-full rounded-xl border bg-muted/50 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm text-muted-foreground">{t.heroVideoTitle}</p>
                  <p className="text-xs text-muted-foreground">{t.heroVideoSubtitle}</p>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Wallet className="size-4" /> {t.b1Title}
              </CardTitle>
              <CardDescription>
                {t.b1Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Timer className="size-4" /> {t.b2Title}
              </CardTitle>
              <CardDescription>
                {t.b2Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="size-4" /> {t.b3Title}
              </CardTitle>
              <CardDescription>
                {t.b3Desc}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Info className="size-4" /> {t.b4Title}
              </CardTitle>
              <CardDescription>
                {t.b4Desc}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Why Pay in Crypto */}
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="rounded-xl border p-6 sm:p-8 bg-card">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4 flex items-center gap-2">
            <Info className="size-5" /> {t.whyTitle}
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>{t.whyB1}</li>
            <li>{t.whyB2}</li>
            <li>{t.whyB3}</li>
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.stepsTitle}</h2>
          <p className="text-muted-foreground mt-2">{t.stepsDesc}</p>
        </div>
        <ol className="grid sm:grid-cols-3 gap-6">
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">{t.stepLabel} 1</div>
            <div className="mt-2 text-base font-medium">{t.s1Title}</div>
            <div className="text-muted-foreground text-sm mt-1">{t.s1Desc}</div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">{t.stepLabel} 2</div>
            <div className="mt-2 text-base font-medium">{t.s2Title}</div>
            <div className="text-muted-foreground text-sm mt-1">{t.s2Desc}</div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">{t.stepLabel} 3</div>
            <div className="mt-2 text-base font-medium">{t.s3Title}</div>
            <div className="text-muted-foreground text-sm mt-1">{t.s3Desc}</div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">{t.stepLabel} 4</div>
            <div className="mt-2 text-base font-medium">{t.s4Title}</div>
            <div className="text-muted-foreground text-sm mt-1">{t.s4Desc}</div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">{t.stepLabel} 5</div>
            <div className="mt-2 text-base font-medium">{t.s5Title}</div>
            <div className="text-muted-foreground text-sm mt-1">{t.s5Desc}</div>
          </li>
          <li className="rounded-xl border p-5 sm:p-6">
            <div className="text-xs font-semibold text-primary tracking-wider">{t.stepLabel} 6</div>
            <div className="mt-2 text-base font-medium">{t.s6Title}</div>
            <div className="text-muted-foreground text-sm mt-1">{t.s6Desc}</div>
          </li>
        </ol>
        {/* Neutral informational note */}
        <Card className="mt-6">
          <CardContent className="py-6">
            <div className="flex items-start gap-3">
              <Info className="size-5 text-muted-foreground mt-0.5" />
              <div>
                <div className="text-muted-foreground text-sm">{t.noteDesc}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Video placeholders */}
      <section className="max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.videoTitle}</h2>
          <p className="text-muted-foreground mt-2">{t.videoDesc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <AspectRatio ratio={16 / 9}>
            <div className="h-full w-full rounded-xl border bg-muted/50 flex items-center justify-center">
              <div className="text-center px-6">
                <QrCode className="mx-auto mb-2 size-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{t.video1}</p>
              </div>
            </div>
          </AspectRatio>
          <AspectRatio ratio={16 / 9}>
            <div className="h-full w-full rounded-xl border bg-muted/50 flex items-center justify-center">
              <div className="text-center px-6">
                <Banknote className="mx-auto mb-2 size-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{t.video2}</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-screen-xl mx-auto px-4 py-12 sm:py-16">
        <Card className="border-dashed">
          <CardContent className="py-10">
            <div className="flex flex-col items-center text-center gap-5">
              <h3 className="text-xl sm:text-2xl font-semibold">{t.finalTitle}</h3>
              <p className="text-muted-foreground max-w-2xl">
                {t.finalDesc}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="https://apps.apple.com/us/app/bitget-wallet-bitcoin-crypto/id1395301115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={t.appStore}
                >
                  <Image src="/apple-logo-svgrepo-com.svg" alt="Apple" width={16} height={16} className="dark:invert" /> {t.appStore}
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.bitkeep.wallet&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={t.googlePlay}
                >
                  <Image src="/play-store-svgrepo-com.svg" alt="Google Play" width={16} height={16} className="dark:invert" /> {t.googlePlay}
                </Link>
                <Link
                  href="https://web3.bitget.com/en/wallet-download?type=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                >
                  {t.learnMore}
                </Link>
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
              © {new Date().getFullYear()} VNDefi — {t.footerTagline}
              <div className="mt-2 text-xs max-w-3xl">{t.disclaimer}</div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#about" className="hover:text-foreground transition-colors">{t.about}</Link>
              <Link href="#privacy" className="hover:text-foreground transition-colors">{t.privacy}</Link>
              <Link href="#terms" className="hover:text-foreground transition-colors">{t.terms}</Link>
              <Link href="#support" className="hover:text-foreground transition-colors">{t.support}</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
