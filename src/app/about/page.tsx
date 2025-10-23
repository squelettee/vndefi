import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About / À propos",
  description: "About VNDefi – independent pilot by Baptiste Gresse.",
};

const copy: Record<string, { title: string; body: string[]; back: string }> = {
  fr: {
    title: "À propos de VNDefi",
    body: [
      "VNDefi est un projet indépendant initié par Baptiste Gresse pour explorer l’adoption des paiements crypto au Vietnam.",
      "VNDefi met à disposition, via des tutoriels vidéo et textuels, l’utilisation de certaines applications qui permettent de payer en crypto.",
      "VNDefi a pour but de faciliter l’adoption en présentant les outils disponibles et en expliquant aux commerçants que des applications existent et permettent aux utilisateurs de payer en crypto.",
      "Ces applications sont soutenues par l’écosystème bancaire vietnamien.",
      "VNDefi n’est pas une technologie : c’est un dispositif de communication et de sensibilisation pour accélérer l’adoption et montrer au plus grand nombre que le Vietnam est en pointe sur la crypto, avec des solutions déjà existantes pour dépenser ses crypto dans tout type de commerce.",
    ],
    back: "← Retour à l’accueil",
  },
  en: {
    title: "About VNDefi",
    body: [
      "VNDefi is an independent project initiated by Baptiste Gresse to explore the adoption of crypto payments in Vietnam.",
      "VNDefi provides video and written tutorials explaining how to use certain applications that enable paying with crypto.",
      "VNDefi aims to facilitate adoption by showcasing available tools and explaining to merchants that applications exist which allow users to pay with crypto.",
      "These applications are backed by the Vietnamese banking ecosystem.",
      "VNDefi is not a technology product: it is a communication and awareness initiative to accelerate adoption and show that Vietnam is at the forefront of crypto, with existing solutions enabling people to spend their crypto in all types of shops.",
    ],
    back: "← Back to home",
  },
  vi: {
    title: "Giới thiệu VNDefi",
    body: [
      "VNDefi là dự án độc lập do Baptiste Gresse khởi xướng nhằm khám phá việc chấp nhận thanh toán bằng crypto tại Việt Nam.",
      "VNDefi cung cấp hướng dẫn dạng video và bài viết giải thích cách sử dụng một số ứng dụng cho phép thanh toán bằng crypto.",
      "VNDefi hướng tới thúc đẩy việc chấp nhận bằng cách giới thiệu các công cụ sẵn có và giải thích cho chủ cửa hàng rằng đã có ứng dụng cho phép người dùng thanh toán bằng crypto.",
      "Những ứng dụng này được hậu thuẫn bởi hệ sinh thái ngân hàng Việt Nam.",
      "VNDefi không phải là một sản phẩm công nghệ: đây là hoạt động truyền thông và nâng cao nhận thức nhằm đẩy nhanh sự chấp nhận và cho thấy Việt Nam đang đi đầu về crypto, với các giải pháp đã tồn tại để mọi người có thể chi tiêu crypto ở mọi loại cửa hàng.",
    ],
    back: "← Quay về trang chủ",
  },
};

export default function AboutPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
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


