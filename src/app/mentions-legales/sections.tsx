"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Lang = "fr" | "en" | "vi";

const content: Record<Lang, { title: string; updated: string; blocks: Array<{ h: string; p: string[] }>; back: string }> = {
  fr: {
    title: "Mentions légales",
    updated: "Dernière mise à jour : 23 octobre 2025",
    back: "← Retour à l’accueil",
    blocks: [
      {
        h: "Éditeur du site", p: [
          "Le site VNDeFi.asia est un projet indépendant en développement, initié et édité par Baptiste Gresse, développeur web freelance.",
          "Adresse e‑mail : contact@vndefi.asia",
        ]
      },
      {
        h: "Statut", p: [
          "VNDeFi n’est pas encore constitué en société. Il s’agit d’un projet personnel de recherche et de développement visant à explorer les solutions de paiement en crypto‑monnaie au Vietnam.",
        ]
      },
      {
        h: "Origine du projet", p: [
          "Le concept, le design des QR codes déployés en boutique, ainsi que la majorité des QR codes actuellement installés ont été conçus et mis en place à l’initiative de Baptiste Gresse.",
        ]
      },
      {
        h: "Objectif du projet pilote", p: [
          "Ce projet a pour but d’évaluer la traction autour de l’adoption et de l’utilisation concrète des paiements en crypto au Vietnam. Il s’agit d’identifier, via des tests sur le terrain et des retours utilisateurs, si des parcours simples (ex. scan d’un QR bancaire, règlement en stablecoin, conversion en VND) peuvent réellement faciliter les paiements du quotidien pour les touristes, nomades et expatriés.",
        ]
      },
      {
        h: "Hébergement", p: [
          "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États‑Unis. Site web : https://vercel.com",
        ]
      },
      {
        h: "Propriété intellectuelle", p: [
          "L’ensemble du contenu du site (textes, code, images, vidéos, graphismes, logos, QR codes) est la propriété exclusive de Baptiste Gresse, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est interdite.",
        ]
      },
      {
        h: "Responsabilité", p: [
          "Le site VNDeFi.asia a pour unique objectif de fournir des informations éducatives sur les paiements en crypto‑monnaie au Vietnam. Il ne constitue ni un service financier, ni une plateforme d’échange, ni une entreprise liée à une entité financière. VNDeFi n’est ni affilié, ni approuvé par Bitget ou toute autre société mentionnée. Les informations présentées sont fournies à titre indicatif et peuvent être modifiées à tout moment.",
        ]
      },
      {
        h: "Protection des données personnelles", p: [
          "Aucune donnée personnelle n’est collectée sans consentement explicite. Des outils d’analyse anonymes peuvent être utilisés pour améliorer l’expérience utilisateur. Pour toute question ou demande de suppression de données, contactez : contact@vndefi.asia.",
        ]
      },
      {
        h: "Crédits", p: [
          "Création, développement et design : Baptiste Gresse.",
        ]
      },
      {
        h: "Contact", p: [
          "Pour toute demande concernant le site ou le projet pilote, vous pouvez écrire à contact@vndefi.asia.",
        ]
      },
    ],
  },
  en: {
    title: "Legal",
    updated: "Last updated: October 23, 2025",
    back: "← Back to home",
    blocks: [
      {
        h: "Publisher", p: [
          "VNDeFi.asia is an independent project in development, initiated and published by Baptiste Gresse, a freelance web developer.",
          "Email address: contact@vndefi.asia",
        ]
      },
      {
        h: "Status", p: [
          "VNDeFi is not yet incorporated as a company. It is a personal R&D project exploring crypto payment solutions in Vietnam.",
        ]
      },
      {
        h: "Project Origin", p: [
          "The concept, the design of in‑store QR codes, and the majority of QR codes currently deployed were created and implemented at the initiative of Baptiste Gresse.",
        ]
      },
      {
        h: "Pilot Objective", p: [
          "This pilot aims to assess traction around adoption and real‑world use of crypto payments in Vietnam, identifying whether simple flows (e.g., scanning a bank QR, paying with a stablecoin, settling in VND) can genuinely help tourists, nomads and expats.",
        ]
      },
      {
        h: "Hosting", p: [
          "The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Website: https://vercel.com",
        ]
      },
      {
        h: "Intellectual Property", p: [
          "All site content (text, code, images, videos, graphics, logos, QR codes) is the exclusive property of Baptiste Gresse unless otherwise stated. Any reproduction, distribution, modification or use without prior written authorization is prohibited.",
        ]
      },
      {
        h: "Liability", p: [
          "VNDeFi.asia provides educational information about crypto payments in Vietnam. It is not a financial service, an exchange platform, or a company affiliated with any financial entity. VNDeFi is neither affiliated with nor endorsed by Bitget or any other mentioned company. Information is provided for guidance only and may change at any time.",
        ]
      },
      {
        h: "Personal Data", p: [
          "No personal data is collected without explicit consent. Anonymous analytics tools may be used to improve user experience. For any request or data deletion, contact: contact@vndefi.asia.",
        ]
      },
      {
        h: "Credits", p: [
          "Creation, development and design: Baptiste Gresse.",
        ]
      },
      {
        h: "Contact", p: [
          "For any inquiries regarding the site or the pilot project, email contact@vndefi.asia.",
        ]
      },
    ],
  },
  vi: {
    title: "Thông tin pháp lý",
    updated: "Cập nhật lần cuối: 23 tháng 10, 2025",
    back: "← Quay về trang chủ",
    blocks: [
      {
        h: "Nhà xuất bản", p: [
          "VNDeFi.asia là dự án độc lập đang phát triển, được khởi xướng và xuất bản bởi Baptiste Gresse, lập trình viên web tự do.",
          "Email: contact@vndefi.asia",
        ]
      },
      {
        h: "Trạng thái", p: [
          "VNDeFi hiện chưa thành lập công ty. Đây là dự án nghiên cứu & phát triển cá nhân nhằm khám phá giải pháp thanh toán bằng crypto tại Việt Nam.",
        ]
      },
      {
        h: "Nguồn gốc dự án", p: [
          "Ý tưởng, thiết kế mã QR triển khai tại cửa hàng và phần lớn các QR hiện có được thiết kế và triển khai theo sáng kiến của Baptiste Gresse.",
        ]
      },
      {
        h: "Mục tiêu thử nghiệm", p: [
          "Dự án nhằm đánh giá mức độ đón nhận và việc sử dụng thực tế thanh toán bằng crypto tại Việt Nam, xem liệu các quy trình đơn giản (quét QR ngân hàng, thanh toán bằng stablecoin, tất toán VND) có thực sự hữu ích cho khách du lịch, nomad và expat.",
        ]
      },
      {
        h: "Lưu trữ", p: [
          "Trang web được lưu trữ bởi Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Hoa Kỳ. Website: https://vercel.com",
        ]
      },
      {
        h: "Sở hữu trí tuệ", p: [
          "Toàn bộ nội dung (văn bản, mã, hình ảnh, video, đồ hoạ, logo, mã QR) thuộc sở hữu độc quyền của Baptiste Gresse trừ khi có ghi chú khác. Mọi sao chép, phân phối, sửa đổi hoặc sử dụng khi chưa có sự cho phép bằng văn bản đều bị cấm.",
        ]
      },
      {
        h: "Trách nhiệm", p: [
          "VNDeFi.asia chỉ cung cấp thông tin giáo dục về thanh toán crypto tại Việt Nam. Đây không phải dịch vụ tài chính, sàn giao dịch hay công ty liên kết với bất kỳ tổ chức tài chính nào. VNDeFi không liên kết hoặc được bảo trợ bởi Bitget hay bất kỳ công ty nào được nhắc đến. Thông tin chỉ mang tính tham khảo và có thể thay đổi bất cứ lúc nào.",
        ]
      },
      {
        h: "Dữ liệu cá nhân", p: [
          "Không thu thập dữ liệu cá nhân nếu không có sự đồng ý rõ ràng. Có thể sử dụng công cụ phân tích ẩn danh để cải thiện trải nghiệm người dùng. Mọi yêu cầu hoặc xoá dữ liệu, vui lòng liên hệ: contact@vndefi.asia.",
        ]
      },
      {
        h: "Ghi công", p: [
          "Thiết kế, phát triển: Baptiste Gresse.",
        ]
      },
      {
        h: "Liên hệ", p: [
          "Mọi thắc mắc về trang web hoặc dự án thử nghiệm, vui lòng gửi email tới contact@vndefi.asia.",
        ]
      },
    ],
  },
};

export function MentionsContent() {
  const search = useSearchParams();
  const lang = (search.get("lang") as Lang) || "fr";
  const t = content[lang];

  return (
    <div className="mt-6 space-y-8 text-sm sm:text-base leading-7 text-muted-foreground">
      <div className="flex items-center gap-2 text-xs">
        <span>Lang:</span>
        <Link href={`?lang=fr`} className={`underline underline-offset-4 ${lang === "fr" ? "text-foreground" : ""}`}>FR</Link>
        <span>·</span>
        <Link href={`?lang=en`} className={`underline underline-offset-4 ${lang === "en" ? "text-foreground" : ""}`}>EN</Link>
        <span>·</span>
        <Link href={`?lang=vi`} className={`underline underline-offset-4 ${lang === "vi" ? "text-foreground" : ""}`}>VI</Link>
      </div>

      {t.blocks.map((b, i) => (
        <section key={i} className="space-y-2">
          <h2 className="text-base sm:text-lg font-semibold text-foreground">{b.h}</h2>
          {b.p.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </section>
      ))}

      <section className="pt-2 text-xs sm:text-sm text-muted-foreground">
        <p>{t.updated}</p>
      </section>

      <div className="pt-6">
        <Link href="/" className="text-sm underline underline-offset-4">{t.back}</Link>
      </div>
    </div>
  );
}


