import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for VNDeFi",
};

const copy: Record<string, { title: string; body: string[]; back: string }> = {
  fr: {
    title: "Support",
    body: [
      "Pour toute question, suggestion ou demande, écrivez à contact@vndefi.asia.",
    ],
    back: "← Retour à l’accueil",
  },
  en: {
    title: "Support",
    body: [
      "For any question, suggestion or request, email contact@vndefi.asia.",
    ],
    back: "← Back to home",
  },
  vi: {
    title: "Hỗ trợ",
    body: [
      "Mọi câu hỏi, đề xuất hoặc yêu cầu, vui lòng gửi email tới contact@vndefi.asia.",
    ],
    back: "← Quay về trang chủ",
  },
};

export default function SupportPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
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


