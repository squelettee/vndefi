import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Legal",
  description: "Terms, disclaimer, risk notice, privacy, and contact for VNDeFi.",
};

const copy: Record<string, { title: string; body: string[]; back: string }> = {
  en: {
    title: "Terms & Legal",
    body: [
      "Last updated: October 25, 2025",
      "1. Terms of Use",
      "By accessing and using this website (vndefi.asia), you agree to the following terms:",
      "- You may use the information provided for personal, non-commercial purposes.",
      "- You are responsible for how you choose to use any tools, platforms, or services mentioned on this site.",
      "- We reserve the right to update or modify these terms at any time without notice.",
      "If you do not agree with any part of these terms, please do not use the website.",
      "---",
      "2. Disclaimer",
      "VNDeFi is an independent, informational platform.",
      "We are not affiliated with, endorsed by, or partnered with any exchange, wallet provider, financial institution, or payment service.",
      "All content provided on this website — including guides, tutorials, and recommendations — is for general information and educational purposes only. Nothing on this site constitutes financial, legal, or investment advice.",
      "We do not process transactions, hold user funds, or offer any custodial services.",
      "---",
      "3. Risk Notice",
      "Cryptocurrency use involves financial risk. Prices can be volatile, and local regulations may change without notice.",
      "VNDeFi does not guarantee the accuracy, reliability, or legality of any third-party apps or services mentioned. You are solely responsible for doing your own research and ensuring compliance with local laws when using crypto in Vietnam or elsewhere.",
      "We are not liable for any loss or damage resulting from the use of any information or services linked from this website.",
      "---",
      "4. Privacy Policy",
      "VNDeFi does not collect personal data from users.",
      "We do not require signups, logins, or payment details. Basic, anonymous analytics (such as website traffic) may be used to improve content and site performance, but no identifiable information is tracked or stored.",
      "---",
      "5. Contact",
      "If you have questions about these terms or anything on the site, you can reach us at contact@vndefi.asia.",
    ],
    back: "← Back to home",
  },
  fr: {
    title: "Conditions & Mentions légales",
    body: [
      "Dernière mise à jour : 25 octobre 2025",
      "1. Conditions d’utilisation",
      "En accédant à ce site (vndefi.asia), vous acceptez les conditions suivantes :",
      "- Vous pouvez utiliser les informations fournies à des fins personnelles et non commerciales.",
      "- Vous êtes responsable de l’usage que vous faites des outils, plateformes ou services mentionnés.",
      "- Nous pouvons mettre à jour/modifier ces conditions à tout moment sans préavis.",
      "Si vous n’acceptez pas une partie de ces conditions, veuillez ne pas utiliser le site.",
      "---",
      "2. Avertissement / Disclaimer",
      "VNDeFi est une plateforme indépendante et informative.",
      "Nous ne sommes affiliés, approuvés ni partenaires d’aucun exchange, fournisseur de wallet, établissement financier ou service de paiement.",
      "Tout le contenu du site — guides, tutoriels, recommandations — est fourni à titre d’information/éducation. Rien ne constitue un conseil financier, juridique ou en investissement.",
      "Nous ne traitons pas de transactions, ne détenons pas de fonds utilisateurs et n’offrons aucun service de conservation.",
      "---",
      "3. Avertissement sur les risques",
      "L’usage des cryptomonnaies comporte des risques financiers (volatilité, changements réglementaires).",
      "VNDeFi ne garantit ni l’exactitude, ni la fiabilité, ni la légalité des services/logiciels tiers mentionnés. Vous devez faire vos propres vérifications et respecter les lois locales.",
      "Nous déclinons toute responsabilité pour toute perte ou dommage lié à l’utilisation d’informations ou de services référencés par ce site.",
      "---",
      "4. Confidentialité",
      "VNDeFi ne collecte aucune donnée personnelle.",
      "Aucune inscription/connexion ni données de paiement ne sont requises. Des statistiques anonymes (trafic) peuvent être utilisées pour améliorer le site, sans collecte de données identifiantes.",
      "---",
      "5. Contact",
      "Pour toute question sur ces conditions, contactez-nous à contact@vndefi.asia.",
    ],
    back: "← Retour à l’accueil",
  },
  vi: {
    title: "Điều khoản & Pháp lý",
    body: [
      "Cập nhật lần cuối: 25/10/2025",
      "1. Điều khoản sử dụng",
      "Khi truy cập và sử dụng website (vndefi.asia), bạn đồng ý với các điều khoản sau:",
      "- Bạn chỉ sử dụng thông tin cho mục đích cá nhân, phi thương mại.",
      "- Bạn tự chịu trách nhiệm khi sử dụng bất kỳ công cụ/nền tảng/dịch vụ nào được nhắc đến.",
      "- Chúng tôi có quyền cập nhật/chỉnh sửa điều khoản bất kỳ lúc nào mà không cần thông báo.",
      "Nếu bạn không đồng ý với bất kỳ phần nào, vui lòng không sử dụng website.",
      "---",
      "2. Tuyên bố miễn trừ trách nhiệm",
      "VNDeFi là nền tảng thông tin độc lập.",
      "Chúng tôi không liên kết/được bảo trợ/bắt tay với bất kỳ sàn giao dịch, nhà cung cấp ví, tổ chức tài chính hay dịch vụ thanh toán nào.",
      "Mọi nội dung — hướng dẫn, tài liệu, gợi ý — chỉ nhằm mục đích cung cấp thông tin/giáo dục; không phải tư vấn tài chính, pháp lý hay đầu tư.",
      "Chúng tôi không xử lý giao dịch, không giữ tiền người dùng, không cung cấp dịch vụ lưu ký.",
      "---",
      "3. Cảnh báo rủi ro",
      "Việc sử dụng crypto có rủi ro tài chính (biến động giá, thay đổi quy định).",
      "VNDeFi không đảm bảo tính chính xác, độ tin cậy hay tính pháp lý của dịch vụ/ứng dụng bên thứ ba được nhắc tới. Bạn tự chịu trách nhiệm tìm hiểu và tuân thủ pháp luật địa phương.",
      "Chúng tôi không chịu trách nhiệm cho bất kỳ mất mát/thiệt hại nào phát sinh từ việc sử dụng thông tin hoặc dịch vụ liên kết từ website này.",
      "---",
      "4. Quyền riêng tư",
      "VNDeFi không thu thập dữ liệu cá nhân người dùng.",
      "Chúng tôi không yêu cầu đăng ký/đăng nhập hay thông tin thanh toán. Có thể dùng thống kê ẩn danh (lưu lượng truy cập) để cải thiện nội dung & hiệu năng, nhưng không lưu dữ liệu nhận dạng.",
      "---",
      "5. Liên hệ",
      "Nếu có câu hỏi về điều khoản, hãy liên hệ: contact@vndefi.asia.",
    ],
    back: "← Quay về trang chủ",
  },
};

export default function TermsPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const raw = searchParams?.lang ?? "fr";
  const lang = (Array.isArray(raw) ? raw[0] : raw) as "fr" | "en" | "vi";
  const t = copy[lang] ?? copy.fr;

  type Block = { type: "heading" | "paragraph" | "list" | "hr"; text?: string; items?: string[] };
  const headingLabels = new Set<string>([
    // EN
    "1. Terms of Use", "2. Disclaimer", "3. Risk Notice", "4. Privacy Policy", "5. Contact",
    // FR
    "1. Conditions d’utilisation", "2. Avertissement / Disclaimer", "3. Avertissement sur les risques", "4. Confidentialité", "5. Contact",
    // VI
    "1. Điều khoản sử dụng", "2. Tuyên bố miễn trừ trách nhiệm", "3. Cảnh báo rủi ro", "4. Quyền riêng tư", "5. Liên hệ",
  ]);

  function parseBodyToBlocks(lines: string[]): Block[] {
    const blocks: Block[] = [];
    let currentList: string[] | null = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed === "---") {
        if (currentList && currentList.length) {
          blocks.push({ type: "list", items: currentList });
          currentList = null;
        }
        blocks.push({ type: "hr" });
        continue;
      }
      const isBullet = trimmed.startsWith("- ") || trimmed.startsWith("→ ");
      if (headingLabels.has(trimmed)) {
        if (currentList && currentList.length) {
          blocks.push({ type: "list", items: currentList });
          currentList = null;
        }
        blocks.push({ type: "heading", text: trimmed });
        continue;
      }
      if (isBullet) {
        if (!currentList) currentList = [];
        currentList.push(trimmed.replace(/^(-|→)\s+/, ""));
        continue;
      }
      if (currentList && currentList.length) {
        blocks.push({ type: "list", items: currentList });
        currentList = null;
      }
      blocks.push({ type: "paragraph", text: line });
    }
    if (currentList && currentList.length) {
      blocks.push({ type: "list", items: currentList });
    }
    return blocks;
  }

  const blocks = parseBodyToBlocks(t.body);

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
        {blocks.map((b, i) => (
          b.type === "heading" ? (
            <h2 key={i} className="text-base sm:text-lg font-medium text-foreground mt-6">{b.text}</h2>
          ) : b.type === "list" ? (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {(b.items ?? []).map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : b.type === "hr" ? (
            <hr key={i} className="my-6 border-border/60" />
          ) : (
            <p key={i}>{b.text}</p>
          )
        ))}
        <div className="pt-6">
          <Link href="/" className="text-sm underline underline-offset-4">{t.back}</Link>
        </div>
      </div>
    </main>
  );
}


