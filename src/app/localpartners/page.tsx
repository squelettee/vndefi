import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ContactDialog } from "./parts/ContactDialog";
// import { MediaPreview } from "./parts/MediaPreview";

export const metadata: Metadata = {
  title: "Local Partners",
  description: "Partner with VNDeFi and attract tourists & expats with crypto payments.",
};

type Copy = {
  title: string;
  topBody: string[];
  howTitle: string;
  stepsTitles: string[];
  stepsBodies: string[];
  back: string;
  guideLabel: string;
  flyerPreviewLabel: string;
  dialogTrigger: string;
  dialogTitle: string;
  companyLabel: string;
  addressLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  dialogConsent: string;
  contactNote: string;
  contactSubmit: string;
  whatTitle: string;
  whatBody: string[];
  whatEmphasis: string;
  whyTitle: string;
  whyBullets: string[];
  faqTitle: string;
  faqQuestions: string[];
  faqAnswers: string[];
};

const copy: Record<string, Copy> = {
  en: {
    title: "Become a Local Partner",
    topBody: [
      "Accept crypto payments using your existing VietQR code — and still receive VND.",
      "Reach more customers with zero changes to how you already get paid.",
    ],
    howTitle: "How It Works",
    stepsTitles: [
      "Sign up as a local partner.",
      "Receive the VNDeFi QR.",
      "Customer scans the VNDeFi QR.",
      "Customer pays using crypto.",
      "You receive VND instantly.",
    ],
    stepsBodies: [
      "Confirm your interest. You just need a working bank QR code (like VietQR) to get started.",
      "We’ll deliver a small QR code to display at your shop.",
      "When a customer scans the VNDeFi QR, they’re guided to download a supported wallet and follow the payment instructions.",
      "They scan your VietQR code, enter the amount in VND, and pay in crypto using their wallet. The wallet converts automatically.",
      "You receive a normal VND bank transfer, just like any other QR payment.",
    ],
    back: "← Back to home",
    guideLabel: "See the customer guide",
    flyerPreviewLabel: "Flyer preview (QR)",
    dialogTrigger: "Register as a Partner",
    dialogTitle: "I’m Interested in becoming a VNDeFi local partner",
    companyLabel: "Business Name",
    addressLabel: "Business Address",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp / Zalo",
    dialogConsent: "I’d like to receive a free VNDeFi QR display for my shop.",
    contactNote: "You’ll receive a quarterly update with insights on crypto-paying customers, affiliated wallet activity, and potential future rewards (if available).",
    contactSubmit: "Register as a Partner",
    whatTitle: "What is VNDeFi?",
    whatBody: [
      "VNDeFi is an independent initiative that helps shops and cafés in Vietnam learn how to accept crypto payments safely without changing how you already get paid.",
      "Many travelers, expats, and digital nomads use crypto for daily spending in Vietnam.",
      "If your business already uses a national bank QR code such as VietQR, you can receive VND from crypto users through the same system. We simply make that easy, clear, and visible.",
    ],
    whatEmphasis: "We don’t touch your payments. We just help the right people find you.",
    whyTitle: "Why Partner with VNDeFi",
    whyBullets: [
      "Free visibility — your shop appears on VNDeFi and social pages visited by crypto‑using travelers and expats.",
      "Modern image — display a small VNDeFi QR to show you welcome a crypto payment method.",
      "No setup required — keep using your VietQR/bank QR; VNDeFi simply helps crypto users understand how to pay you.",
      "Early access to potential affiliate rewards — be first to know about future merchant incentives.",
    ],
    faqTitle: "Frequently Asked Questions",
    faqQuestions: [
      "Do I need to understand crypto to join?",
      "Will I receive crypto?",
      "Is there any cost?",
      "What if I have questions or need help?",
    ],
    faqAnswers: [
      "No. You just keep using your existing VietQR code. The customer handles everything on their phone.",
      "No. You receive the payment in VND via bank transfer, just like any QR payment you accept today.",
      "No. It’s completely free to join the pilot.",
      "Our team is available to assist you and answer any questions in Vietnamese or English.",
    ],
  },
  fr: {
    title: "Devenez partenaire local",
    topBody: [
      "Acceptez les paiements en crypto avec votre QR VietQR existant — et recevez toujours en VND.",
      "Touchez plus de clients sans changer votre façon d’être payé.",
    ],
    howTitle: "Comment ça marche",
    stepsTitles: [
      "Inscrivez‑vous comme partenaire local.",
      "Recevez le QR VNDeFi.",
      "Le client scanne le QR VNDeFi.",
      "Le client paie en crypto.",
      "Vous recevez instantanément du VND.",
    ],
    stepsBodies: [
      "Confirmez votre intérêt. Il vous suffit d’un QR bancaire fonctionnel (VietQR, par exemple).",
      "Nous vous livrons un petit QR à afficher dans votre établissement.",
      "Quand un client scanne le QR VNDeFi, il est guidé pour télécharger un portefeuille compatible et suivre les étapes de paiement.",
      "Il scanne votre VietQR, saisit le montant en VND et paie en crypto via son portefeuille. La conversion est automatique.",
      "Vous recevez un virement bancaire VND normal, comme pour tout paiement par QR.",
    ],
    back: "← Retour à l’accueil",
    guideLabel: "Voir le guide client",
    flyerPreviewLabel: "Aperçu du flyer (QR)",
    dialogTrigger: "S’inscrire comme partenaire",
    dialogTitle: "Je souhaite devenir partenaire local VNDeFi",
    companyLabel: "Nom de l’établissement",
    addressLabel: "Adresse de l’établissement",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp / Zalo",
    dialogConsent: "Je souhaite recevoir gratuitement un présentoir QR VNDeFi pour mon établissement.",
    contactNote: "Vous recevrez un point trimestriel : clients payant en crypto, activité des portefeuilles affiliés et d’éventuelles futures récompenses (si disponibles).",
    contactSubmit: "S’inscrire comme partenaire",
    whatTitle: "Qu’est‑ce que VNDeFi ?",
    whatBody: [
      "VNDeFi est une initiative indépendante aidant les commerces et cafés au Vietnam à accepter des paiements en crypto en toute sécurité, sans changer votre mode d’encaissement.",
      "De nombreux voyageurs, expatriés et nomades digitaux utilisent la crypto au quotidien au Vietnam.",
      "Si votre commerce utilise déjà un QR bancaire national (VietQR, par exemple), vous pouvez recevoir des paiements en VND de la part d’utilisateurs crypto via le même système. Nous rendons cela simple, clair et visible.",
    ],
    whatEmphasis: "Nous ne touchons pas à vos paiements. Nous aidons simplement les bonnes personnes à vous trouver.",
    whyTitle: "Pourquoi devenir partenaire VNDeFi",
    whyBullets: [
      "Visibilité gratuite — votre établissement apparaît sur le site VNDeFi et nos réseaux consultés par les voyageurs et expats utilisateurs de crypto.",
      "Image moderne — affichez un petit QR VNDeFi pour montrer que vous acceptez un mode de paiement crypto.",
      "Aucune mise en place — continuez à utiliser votre VietQR/QR bancaire ; VNDeFi aide simplement les utilisateurs crypto à comprendre comment vous payer.",
      "Accès anticipé à d’éventuelles récompenses d’affiliation — soyez parmi les premiers informés des futurs programmes d’incitation.",
    ],
    faqTitle: "Foire aux questions",
    faqQuestions: [
      "Dois‑je comprendre la crypto pour participer ?",
      "Vais‑je recevoir de la crypto ?",
      "Y a‑t‑il un coût ?",
      "Et si j’ai des questions ou besoin d’aide ?",
    ],
    faqAnswers: [
      "Non. Continuez d’utiliser votre QR VietQR existant. Le client gère tout depuis son téléphone.",
      "Non. Vous recevez un virement en VND, comme pour vos paiements QR habituels.",
      "Non. Rejoindre le pilote est entièrement gratuit.",
      "Notre équipe est disponible pour vous assister et répondre en vietnamien ou en anglais.",
    ],
  },
  vi: {
    title: "Trở thành đối tác địa phương",
    topBody: [
      "Chấp nhận thanh toán crypto bằng chính mã VietQR hiện có — và vẫn nhận VND.",
      "Tiếp cận nhiều khách hàng hơn mà không cần thay đổi cách nhận tiền hiện tại.",
    ],
    howTitle: "Cách hoạt động",
    stepsTitles: [
      "Đăng ký làm đối tác địa phương.",
      "Nhận mã QR của VNDeFi.",
      "Khách quét QR của VNDeFi.",
      "Khách thanh toán bằng crypto.",
      "Bạn nhận VND ngay lập tức.",
    ],
    stepsBodies: [
      "Xác nhận quan tâm. Chỉ cần có mã QR ngân hàng hoạt động (như VietQR) là có thể bắt đầu.",
      "Chúng tôi sẽ gửi QR nhỏ để bạn trưng bày tại cửa hàng.",
      "Khi khách quét QR VNDeFi, họ được hướng dẫn tải ví hỗ trợ và làm theo chỉ dẫn thanh toán.",
      "Khách quét VietQR của bạn, nhập số tiền VND và thanh toán bằng crypto qua ví. Ví sẽ tự động quy đổi.",
      "Bạn nhận chuyển khoản ngân hàng VND bình thường, như mọi thanh toán QR khác.",
    ],
    back: "← Quay về trang chủ",
    guideLabel: "Xem hướng dẫn khách hàng",
    flyerPreviewLabel: "Xem trước tờ rơi (QR)",
    dialogTrigger: "Đăng ký làm đối tác",
    dialogTitle: "Tôi quan tâm trở thành đối tác địa phương của VNDeFi",
    companyLabel: "Tên cửa hàng/đơn vị",
    addressLabel: "Địa chỉ cửa hàng",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp / Zalo",
    dialogConsent: "Tôi muốn nhận miễn phí kệ trưng bày QR VNDeFi cho cửa hàng.",
    contactNote: "Bạn sẽ nhận cập nhật hàng quý: khách thanh toán bằng crypto, hoạt động ví affiliate và các phần thưởng tiềm năng (nếu có).",
    contactSubmit: "Đăng ký làm đối tác",
    whatTitle: "VNDeFi là gì?",
    whatBody: [
      "VNDeFi là sáng kiến độc lập giúp cửa hàng/quán cà phê tại Việt Nam chấp nhận thanh toán crypto an toàn, không cần thay đổi cách nhận tiền hiện tại.",
      "Nhiều khách du lịch, người nước ngoài và nomad dùng crypto để chi tiêu hàng ngày ở Việt Nam.",
      "Nếu cửa hàng của bạn đã dùng QR ngân hàng quốc gia như VietQR, bạn có thể nhận VND từ người dùng crypto qua chính hệ thống đó. Chúng tôi chỉ giúp việc này trở nên dễ hiểu và hiển thị rõ ràng.",
    ],
    whatEmphasis: "Chúng tôi không can thiệp vào dòng tiền của bạn. Chỉ giúp khách phù hợp tìm thấy bạn.",
    whyTitle: "Vì sao hợp tác với VNDeFi",
    whyBullets: [
      "Hiển thị miễn phí — cửa hàng xuất hiện trên website VNDeFi và mạng xã hội được khách dùng crypto ghé thăm.",
      "Hình ảnh hiện đại — trưng bày QR VNDeFi nhỏ để thể hiện bạn chấp nhận phương thức thanh toán crypto.",
      "Không cần cài đặt — tiếp tục dùng VietQR/QR ngân hàng; VNDeFi chỉ giúp người dùng crypto hiểu cách trả tiền cho bạn.",
      "Tiếp cận sớm các phần thưởng affiliate tiềm năng — là những người đầu tiên được thông báo về ưu đãi cho cửa hàng.",
    ],
    faqTitle: "Câu hỏi thường gặp",
    faqQuestions: [
      "Có cần hiểu về crypto để tham gia không?",
      "Tôi có nhận crypto không?",
      "Có tốn chi phí không?",
      "Nếu có thắc mắc thì sao?",
    ],
    faqAnswers: [
      "Không. Bạn chỉ cần dùng VietQR hiện có. Khách hàng thao tác tất cả trên điện thoại.",
      "Không. Bạn nhận tiền bằng VND qua chuyển khoản, như các thanh toán QR hiện nay.",
      "Không. Tham gia chương trình thí điểm hoàn toàn miễn phí.",
      "Đội ngũ VNDeFi luôn sẵn sàng hỗ trợ bằng tiếng Việt hoặc tiếng Anh.",
    ],
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
                <p key={i}>{i === 0 ? (<strong>{p}</strong>) : p}</p>
              ))}
              <div className="pt-3">
                <ContactDialog
                  triggerLabel={t.dialogTrigger}
                  title={t.dialogTitle}
                  note={t.contactNote}
                  consentLabel={t.dialogConsent}
                  submitLabel={t.contactSubmit}
                  companyLabel={t.companyLabel}
                  addressLabel={t.addressLabel}
                  emailLabel={t.emailLabel}
                  whatsappLabel={t.whatsappLabel}
                />
              </div>
            </div>
            <AnimatedThemeToggler className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md border border-border" />
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-medium text-foreground">{t.whatTitle}</h2>
          {t.whatBody.map((p, i) => (<p key={i}>{p}</p>))}
          <p><strong>{t.whatEmphasis}</strong></p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-medium text-foreground">{t.howTitle}</h2>

          <Carousel className="w-full mt-4">
            <CarouselContent className="-mx-2">
              {t.stepsTitles.map((title, i) => (
                <CarouselItem key={i} className="px-2 basis-3/4 sm:basis-2/5 md:basis-1/3 lg:basis-1/5">
                  <AspectRatio ratio={4 / 5}>
                    <Card className="h-full">
                      <CardContent className="p-3 h-full flex flex-col">
                        <div className="h-7 w-7 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">{i + 1}</div>
                        <p className="mt-2 font-medium text-foreground">{title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{t.stepsBodies[i]}</p>
                        <div className="mt-auto space-y-2">
                          {i === 2 ? (
                            <div className="pt-1 text-xs">
                              <Link href="/" className="underline underline-offset-4">{t.guideLabel}</Link>
                            </div>
                          ) : null}
                          {i === 1 ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button type="button" className="text-xs underline underline-offset-4 text-foreground/80 hover:text-foreground">
                                  {t.flyerPreviewLabel}
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl p-0">
                                <DialogTitle className="sr-only">{t.flyerPreviewLabel}</DialogTitle>
                                <AspectRatio ratio={4 / 3}>
                                  <div className="relative h-full w-full">
                                    <Image src="/qrcode.svg" alt={t.flyerPreviewLabel} fill className="object-contain" sizes="(max-width: 768px) 90vw, 768px" />
                                  </div>
                                </AspectRatio>
                              </DialogContent>
                            </Dialog>
                          ) : null}
                          {i === 3 ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button type="button" className="text-xs underline underline-offset-4 text-foreground/80 hover:text-foreground">
                                  {videoTitle}
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl p-0">
                                <DialogTitle className="sr-only">{videoTitle}</DialogTitle>
                                <AspectRatio ratio={16 / 9}>
                                  <video src="/video_demo.mp4" controls playsInline className="h-full w-full object-cover" />
                                </AspectRatio>
                              </DialogContent>
                            </Dialog>
                          ) : null}
                        </div>
                      </CardContent>
                    </Card>
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="space-y-2">
          <h2 className="text-base sm:text-lg font-medium text-foreground">{t.whyTitle}</h2>
          <ul className="list-disc pl-5 space-y-1">
            {t.whyBullets.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-medium text-foreground">{t.faqTitle}</h2>
          <Accordion type="single" collapsible>
            {t.faqQuestions.map((q, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{t.faqAnswers[i]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

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
