import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactDialog } from "./parts/ContactDialog";
import { MediaPreview } from "./parts/MediaPreview";

export const metadata: Metadata = {
  title: "Local Partners",
  description: "Partner with VNDeFi and attract tourists & expats with crypto payments.",
};

const copy: Record<string, {
  title: string;
  topBody: string[];
  topBullets: string[];
  howTitle: string;
  stepsTitles: string[];
  stepsBodies: string[];
  back: string;
  guideLabel: string;
  moreAff: string;
  providerNote: string;
  flyerPreviewLabel: string;
  dialogTrigger: string;
  dialogConsent: string;
  companyLabel: string;
  contactNote: string;
  contactSubmit: string;
}> = {
  fr: {
    title: "Devenez partenaire local",
    topBody: [
      "VNDeFi permet à vos clients (touristes et expats) de payer en crypto — et vous recevez en VND.",
      "Notre objectif est aussi d’apporter un revenu additionnel via l’affiliation déclenchée depuis votre QR.",
    ],
    topBullets: [
      "Aucune app ni inscription pour vous",
      "Aucun changement de votre caisse",
      "Aucun coût pour votre établissement",
    ],
    howTitle: "Comment ça marche",
    stepsTitles: [
      "Je confirme mon intérêt",
      "Pose du QR code",
      "Le client scanne et installe l’app",
      "Paiement en crypto",
      "Vous recevez du cashback (affiliation)",
    ],
    stepsBodies: [
      "Appuyez sur le bouton pour confirmer que vous êtes prêt à placer notre QR.",
      "Nous venons poser un petit flyer avec QR code dans votre établissement.",
      "Le client scanne le QR, installe l’app via votre lien d’affiliation (guide disponible).",
      "Le client paie en crypto, vous recevez en VND.",
      "Grâce à l’affiliation, vous captez un revenu additionnel lorsque vos clients utilisent l’app.",
    ],
    back: "← Retour à l’accueil",
    guideLabel: "Voir le guide client",
    moreAff: "Plus vos clients téléchargent et utilisent l’app via votre QR, plus vos revenus d’affiliation augmentent.",
    providerNote: "Nous échangeons avec plusieurs fournisseurs pour maximiser les bénéfices pour les commerçants et minimiser les frais pour les utilisateurs.",
    flyerPreviewLabel: "Aperçu du flyer (QR)",
    dialogTrigger: "Je suis intéressé",
    dialogConsent: "J’accepte de recevoir un présentoir avec un QR code.",
    companyLabel: "Nom de l’établissement",
    contactNote: "Nous enverrons un récap trimestriel: affiliés générés, gains potentiels et cashout possible.",
    contactSubmit: "Envoyer mon contact",
  },
  en: {
    title: "Become a local partner",
    topBody: [
      "VNDeFi lets tourists and expats pay in crypto — while you receive VND.",
      "Our goal is also to bring an additional revenue stream via affiliation triggered from your QR.",
    ],
    topBullets: [
      "No app or registration needed",
      "No changes to your checkout",
      "No cost to your business",
    ],
    howTitle: "How it works",
    stepsTitles: [
      "Confirm your interest",
      "We place the QR code",
      "Customer scans and installs the app",
      "Customer pays in crypto",
      "You earn cashback (affiliation)",
    ],
    stepsBodies: [
      "Press the button to confirm you’re ready to place our QR.",
      "We’ll place a small QR flyer at your venue.",
      "Customers scan the QR and install the app via your affiliate link (guide available).",
      "Customers pay in crypto; you receive VND.",
      "With affiliation, you earn an additional revenue stream when customers use the app.",
    ],
    back: "← Back to home",
    guideLabel: "See the customer guide",
    moreAff: "The more people download and use the app via your QR, the more affiliate revenue you can earn.",
    providerNote: "We’re working with technology providers to maximize merchant benefits and minimize end‑user fees.",
    flyerPreviewLabel: "Flyer preview (QR)",
    dialogTrigger: "I’m interested",
    dialogConsent: "I accept to receive a QR flyer stand for my venue.",
    companyLabel: "Business name",
    contactNote: "We’ll send a quarterly summary: affiliated users, potential earnings and possible cashout.",
    contactSubmit: "Send my contact",
  },
  vi: {
    title: "Trở thành đối tác địa phương",
    topBody: [
      "VNDeFi giúp khách du lịch và người nước ngoài thanh toán bằng crypto — bạn nhận tiền VND.",
      "Mục tiêu là tạo thêm nguồn thu qua affiliate kích hoạt từ mã QR của cửa hàng.",
    ],
    topBullets: [
      "Không cần ứng dụng hay đăng ký",
      "Không thay đổi quy trình thanh toán",
      "Không tốn chi phí",
    ],
    howTitle: "Cách hoạt động",
    stepsTitles: [
      "Xác nhận quan tâm",
      "Đặt mã QR",
      "Khách quét và cài ứng dụng",
      "Thanh toán bằng crypto",
      "Nhận cashback (affiliate)",
    ],
    stepsBodies: [
      "Nhấn nút để xác nhận bạn sẵn sàng đặt mã QR.",
      "Chúng tôi sẽ đến đặt tờ rơi nhỏ có mã QR tại cửa hàng.",
      "Khách quét QR và cài ứng dụng qua liên kết affiliate của cửa hàng (có hướng dẫn).",
      "Khách thanh toán bằng crypto; bạn nhận VND.",
      "Với affiliate, cửa hàng có thêm nguồn thu khi khách sử dụng ứng dụng.",
    ],
    back: "← Quay về trang chủ",
    guideLabel: "Xem hướng dẫn khách hàng",
    moreAff: "Càng nhiều người tải và sử dụng app qua QR của bạn, thu nhập affiliate càng tăng.",
    providerNote: "Chúng tôi đang làm việc với các nhà cung cấp công nghệ để tối ưu lợi ích cho cửa hàng và giảm phí cho người dùng.",
    flyerPreviewLabel: "Xem trước tờ rơi (QR)",
    dialogTrigger: "Tôi quan tâm",
    dialogConsent: "Tôi đồng ý nhận kệ trưng bày với mã QR cho cửa hàng.",
    companyLabel: "Tên cửa hàng",
    contactNote: "Chúng tôi sẽ gửi báo cáo hàng quý: người affiliate, thu nhập tiềm năng và cashout.",
    contactSubmit: "Gửi liên hệ",
  },
};

function Content({ params }: { params?: { [key: string]: string | string[] | undefined } }) {
  const raw = params?.lang ?? "fr";
  const lang = (Array.isArray(raw) ? raw[0] : raw) as "fr" | "en" | "vi";
  const t = copy[lang] ?? copy.fr;

  const videoTitle = t.howTitle;

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
      <div className="mt-0 space-y-8 text-sm sm:text-base text-muted-foreground">
        <div className="flex items-center gap-2 text-xs">
          <span>Lang:</span>
          <Link href={`?lang=fr`} className={`underline underline-offset-4 ${lang === "fr" ? "text-foreground" : ""}`}>FR</Link>
          <span>·</span>
          <Link href={`?lang=en`} className={`underline underline-offset-4 ${lang === "en" ? "text-foreground" : ""}`}>EN</Link>
          <span>·</span>
          <Link href={`?lang=vi`} className={`underline underline-offset-4 ${lang === "vi" ? "text-foreground" : ""}`}>VI</Link>
        </div>

        <section className="overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-background to-muted/30 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">{t.title}</h1>
              {t.topBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {t.topBullets.map((b, i) => (
                  <Badge key={i} variant="secondary" className="text-foreground">{b}</Badge>
                ))}
              </div>
              <div className="pt-3">
                <ContactDialog
                  triggerLabel={t.dialogTrigger}
                  note={t.contactNote}
                  consentLabel={t.dialogConsent}
                  submitLabel={t.contactSubmit}
                  companyLabel={t.companyLabel}
                />
                <p className="mt-1 text-xs text-muted-foreground">{t.companyLabel} — merci d’indiquer l’intitulé exact.</p>
              </div>
            </div>
            <AnimatedThemeToggler className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md border border-border" />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-medium text-foreground">{t.howTitle}</h2>

          <div className="sm:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <MediaPreview type="image" src="/qrcode.svg" label={t.flyerPreviewLabel} />
                </CarouselItem>
                <CarouselItem>
                  <MediaPreview type="video" src="/video_demo.mp4" label={videoTitle} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <ol className="space-y-4">
            {t.stepsTitles.map((title, i) => (
              <li key={i} className="rounded-xl border border-border/60 p-4">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">{i + 1}</div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="mt-1">{t.stepsBodies[i]}</p>
                    {i === 2 ? (
                      <div className="pt-2 text-sm">
                        <Link href="/" className="underline underline-offset-4">{t.guideLabel}</Link>
                      </div>
                    ) : null}
                  </div>
                  <div className="hidden sm:block w-[220px] shrink-0">
                    {i === 1 ? (
                      <MediaPreview type="image" src="/qrcode.svg" label={t.flyerPreviewLabel} />
                    ) : null}
                    {i === 3 ? (
                      <MediaPreview type="video" src="/video_demo.mp4" label={videoTitle} />
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="rounded-md border border-yellow-300/50 bg-yellow-50 p-4 dark:border-yellow-700/50 dark:bg-yellow-950/30">
          <p className="text-sm sm:text-base"><strong>{t.moreAff}</strong></p>
          <p className="mt-1 text-xs text-muted-foreground">{t.providerNote}</p>
        </div>

        <div className="pt-6">
          <Link href="/" className="text-sm underline underline-offset-4">{t.back}</Link>
        </div>
      </div>
    </main>
  );
}

export default async function LocalPartnersPage({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = searchParams ? await searchParams : undefined;
  return (
    <Suspense>
      <Content params={params} />
    </Suspense>
  );
}
