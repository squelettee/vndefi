import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms / Conditions",
  description: "Terms for VNDeFi",
};

const copy: Record<string, { title: string; body: string[]; back: string }> = {
  fr: {
    title: "Conditions d’utilisation",
    body: [
      "Ce site est fourni à titre informatif et éducatif. Il ne constitue pas un conseil financier, juridique ou professionnel.",
      "VNDeFi est un projet indépendant et n’est affilié ni approuvé par aucune entreprise ou institution mentionnée.",
      "Les contenus et liens externes (ex. App Store, Google Play, documentation officielle) sont fournis à titre indicatif et n’impliquent aucune approbation.",
      "Le site est fourni sans garantie d’exactitude, de disponibilité ou d’adéquation à un usage particulier.",
      "Dans la mesure permise par la loi, aucune responsabilité ne saurait être engagée pour tout dommage direct, indirect, accessoire, ou consécutif lié à l’utilisation des informations présentées.",
    ],
    back: "← Retour à l’accueil",
  },
  en: {
    title: "Terms of Use",
    body: [
      "This site is provided for informational and educational purposes only. It does not constitute financial, legal, or professional advice.",
      "VNDeFi is an independent project and is not affiliated with or endorsed by any mentioned company or institution.",
      "Content and external links (e.g., App Store, Google Play, official documentation) are provided for convenience and do not imply endorsement.",
      "The site is provided without warranties of accuracy, availability, or fitness for a particular purpose.",
      "To the extent permitted by law, no liability is assumed for any direct, indirect, incidental, or consequential damages arising from the use of the information provided.",
    ],
    back: "← Back to home",
  },
  vi: {
    title: "Điều khoản sử dụng",
    body: [
      "Trang web này chỉ nhằm mục đích cung cấp thông tin và giáo dục; không phải là tư vấn tài chính, pháp lý hay chuyên môn.",
      "VNDeFi là dự án độc lập, không liên kết và không được bảo trợ bởi bất kỳ công ty hay tổ chức nào được nhắc đến.",
      "Nội dung và liên kết bên ngoài (ví dụ App Store, Google Play, tài liệu chính thức) chỉ để tham khảo và không ngụ ý sự bảo chứng.",
      "Trang web được cung cấp mà không có bảo đảm về độ chính xác, tính sẵn sàng hay phù hợp cho mục đích cụ thể.",
      "Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho mọi thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hệ quả phát sinh từ việc sử dụng thông tin trên trang.",
    ],
    back: "← Quay về trang chủ",
  },
};

export default function TermsPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const raw = searchParams?.lang ?? "fr";
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


