import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy / Confidentialité",
  description: "Privacy statement for VNDefi.",
};

const copy: Record<string, { title: string; body: string[]; back: string }> = {
  fr: {
    title: "Confidentialité",
    body: [
      "Ce site utilise uniquement des mesures analytiques anonymisées pour :",
      "— compter les vues par commerce (shopId) sur la page d’accueil ;",
      "— mesurer les clics sur les liens de téléchargement App Store et Google Play ;",
      "— mesurer les clics vers la documentation officielle des technologies mentionnées.",
      "Aucune donnée personnelle n’est collectée ni stockée.",
      "L’objectif de ces mesures est d’évaluer si le dispositif facilite l’adoption des paiements crypto au Vietnam.",
      "Ces données anonymisées peuvent également, le cas échéant, être utilisées pour présenter ces résultats aux détenteurs/provideurs des technologies concernées afin d’encourager leur soutien et accélérer l’adoption.",
    ],
    back: "← Retour à l’accueil",
  },
  en: {
    title: "Privacy",
    body: [
      "This site uses only anonymized analytics to:",
      "— count shop views (shopId) on the homepage;",
      "— measure clicks on the App Store and Google Play download links;",
      "— measure clicks to official documentation of the mentioned technologies.",
      "No personal data is collected or stored.",
      "The purpose of this data is to assess whether the system helps drive crypto adoption in Vietnam.",
      "Where appropriate, these anonymized results may also be used to present insights to the relevant technology providers in order to encourage their support and accelerate adoption.",
    ],
    back: "← Back to home",
  },
  vi: {
    title: "Bảo mật",
    body: [
      "Trang web chỉ sử dụng phân tích ẩn danh để:",
      "— đếm lượt xem theo cửa hàng (shopId) trên trang chủ;",
      "— đo lường lượt nhấp vào liên kết tải App Store và Google Play;",
      "— đo lường lượt nhấp tới tài liệu chính thức của các công nghệ được nhắc đến.",
      "Không thu thập hoặc lưu trữ dữ liệu cá nhân.",
      "Mục tiêu là đánh giá liệu hệ thống này có giúp thúc đẩy việc chấp nhận crypto tại Việt Nam hay không.",
      "Khi phù hợp, các số liệu ẩn danh này cũng có thể được dùng để trình bày kết quả với các nhà cung cấp công nghệ liên quan nhằm khuyến khích họ hỗ trợ và đẩy nhanh việc chấp nhận.",
    ],
    back: "← Quay về trang chủ",
  },
};

export default async function PrivacyPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const raw = await (searchParams?.lang ?? "en");
  const lang = (Array.isArray(raw) ? raw[0] : raw) as "fr" | "en" | "vi";
  const t = copy[lang] ?? copy.fr;

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
      <div className="mt-0 space-y-6 text-sm sm:text-base text-muted-foreground">
        <div className="flex items-center gap-2 text-xs">
          <span>Lang:</span>
          <Link href={`?lang=fr`} className={`underline underline-offset-4 ${lang === "fr" ? "text-foreground" : ""}`}>FR</Link>
          <span>·</span>
          <Link href={`?lang=en`} className={`underline underline-offset-4 ${lang === "en" ? "text-foreground" : ""}`}>EN</Link>
          <span>·</span>
          <Link href={`?lang=vi`} className={`underline underline-offset-4 ${lang === "vi" ? "text-foreground" : ""}`}>VI</Link>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">{t.title}</h1>
        {t.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="pt-6">
          <Link href="/" className="text-sm underline underline-offset-4">{t.back}</Link>
        </div>
      </div>
    </main>
  );
}


