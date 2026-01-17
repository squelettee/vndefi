import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About / À propos",
  description: "About VNDeFi – independent pilot by Baptiste Gresse.",
};

const copy: Record<string, { title: string; body: string[]; back: string }> = {
  fr: {
    title: "À propos de VNDeFi",
    body: [
      "À propos de VNDeFi",
      "VNDeFi est une initiative indépendante qui explore et documente comment les paiements crypto fonctionnent dans la vie quotidienne au Vietnam.",
      "Nous proposons des guides simples, étape par étape, pour montrer aux voyageurs et aux locaux comment payer dans les commerces vietnamiens avec des wallets connectés à VietQR et aux banques locales.",
      "Notre contenu se concentre sur l’usage pratique — comment payer en crypto au Vietnam via des applications déjà prises en charge par l’écosystème bancaire vietnamien.",
      "VNDeFi n’est ni un wallet, ni un exchange, ni une plateforme de paiement.",
      "Nous ne construisons pas de nouvelles apps — nous aidons les gens à comprendre et utiliser en toute confiance les outils qui existent déjà.",
      "Notre vision",
      "Nous imaginons un Vietnam où la crypto s’utilise naturellement au quotidien — où payer en USDC est aussi simple que scanner un QR bancaire, et où locaux comme voyageurs bénéficient de paiements rapides, peu coûteux et sans frontières.",
      "Alors que les wallets, les réseaux et la réglementation évoluent, VNDeFi veut garantir que l’adoption de la crypto au Vietnam reste pratique, inclusive et bénéfique aux commerçants — axée sur l’utilité réelle, pas sur le battage médiatique.",
      "Notre objectif est de relier les points :",
      "→ Entre les utilisateurs du monde entier et les commerces locaux",
      "→ Entre les wallets crypto et les besoins du réel",
      "→ Entre l’infrastructure existante et de nouvelles possibilités",
      "VNDeFi continuera à documenter et accompagner cette transition, afin de faire du Vietnam un exemple mondial d’adoption crypto simple et quotidienne.",
      "Ce que nous faisons",
      "- Former voyageurs et expatriés à l’usage de wallets compatibles pour payer en crypto dans les commerces vietnamiens.",
      "- Mettre en avant les applications et wallets connectés au système bancaire local permettant des paiements fluides crypto→VND.",
      "- Sensibiliser les commerçants en expliquant que les paiements crypto peuvent être reçus via leurs QR bancaires existants — sans nouveau matériel ni application.",
      "Ce que nous ne faisons pas",
      "- Aucun conseil financier, juridique ou en investissement.",
      "- Nous ne détenons, ne transférons ni ne traitons de paiements en crypto.",
      "- Nous ne développons ni n’exploitons de wallet, d’exchange ou d’infrastructure de paiement.",
      "- Nous ne prélevons aucun frais ni commission auprès des utilisateurs ou des commerçants.",
      "VNDeFi est un projet de communication et de sensibilisation — nous existons pour informer, simplifier et soutenir l’usage d’outils qui fonctionnent déjà.",
      "Participer",
      "Voyageur, commerçant ou bâtisseur de l’écosystème, nous serions ravis d’échanger.",
      "Nous sommes ouverts à collaborer avec des locaux, commerçants et fournisseurs de wallets partageant notre mission : rendre les paiements crypto pratiques et accessibles au Vietnam.",
      "📧 Contact : baptiste.gresse@proton.me",
    ],
    back: "← Retour à l’accueil",
  },
  en: {
    title: "About VNDeFi",
    body: [
      "About VNDeFi",
      "VNDeFi is an independent initiative helping explore and document how crypto payments work in everyday life across Vietnam.",
      "We provide simple, step-by-step guides that show travelers and locals how to pay at Vietnamese shops using crypto wallets connected to VietQR and local banks.",
      "Our content focuses on practical use — how to pay with crypto in Vietnam through applications that are already supported by the Vietnamese banking ecosystem.",
      "VNDeFi is not a wallet, exchange, or payment platform.",
      "We don’t build new apps — we help people understand and use the tools that already exist safely and confidently.",
      "Our Vision",
      "We envision a Vietnam where crypto is seamlessly used in everyday life — where paying with USDC is as simple as scanning a bank QR code, and where both locals and travelers benefit from fast, low-cost, borderless payments.",
      "As wallets, networks, and regulations evolve, VNDeFi aims to ensure that Vietnam’s crypto adoption remains practical, inclusive, and merchant-friendly — focused on real utility, not hype or speculation.",
      "Our goal is to connect the dots:",
      "→ Between global users and local shops",
      "→ Between crypto wallets and real-world needs",
      "→ Between existing infrastructure and new possibilities",
      "VNDeFi will continue to document and support this transition, helping make Vietnam a global example of simple, everyday crypto adoption.",
      "What We Do",
      "- Educate travelers and expats on how to use supported wallets to pay at Vietnamese shops using crypto.",
      "- Showcase apps and wallets that connect to the local banking system and enable seamless crypto-to-VND payments.",
      "- Support merchant awareness by explaining that crypto payments can be received through their existing bank QR codes — no new hardware or apps needed.",
      "What We Don’t Do",
      "- We do not offer financial, legal, or investment advice.",
      "- We do not hold, transfer, or process crypto payments.",
      "- We do not build or maintain any wallet, exchange, or payment infrastructure.",
      "- We do not take fees or commissions from users or merchants.",
      "VNDeFi is a communication and awareness project — we exist to inform, simplify, and support the use of tools that already work.",
      "Get Involved",
      "Whether you’re a traveler, shop owner, or builder in the crypto space, we’d love to connect.",
      "We’re always open to collaborating with locals, merchants, and wallet providers who share our mission to make crypto payments practical and accessible in Vietnam.",
      "📧 Contact us: baptiste.gresse@proton.me",
    ],
    back: "← Back to home",
  },
  vi: {
    title: "Giới thiệu VNDeFi",
    body: [
      "Giới thiệu VNDeFi",
      "VNDeFi là sáng kiến độc lập giúp khám phá và ghi nhận cách thanh toán bằng crypto diễn ra trong đời sống hằng ngày tại Việt Nam.",
      "Chúng tôi cung cấp hướng dẫn đơn giản, từng bước cho du khách và người dân về cách thanh toán tại cửa hàng Việt Nam bằng ví crypto được kết nối với VietQR và ngân hàng nội địa.",
      "Nội dung tập trung vào tính thực tiễn — cách trả bằng crypto tại Việt Nam thông qua các ứng dụng vốn đã được hệ sinh thái ngân hàng Việt Nam hỗ trợ.",
      "VNDeFi không phải ví, sàn giao dịch hay nền tảng thanh toán.",
      "Chúng tôi không xây app mới — chúng tôi giúp mọi người hiểu và sử dụng an toàn, tự tin những công cụ đã tồn tại.",
      "Tầm nhìn",
      "Chúng tôi hình dung một Việt Nam nơi crypto được dùng liền mạch mỗi ngày — nơi trả bằng USDC đơn giản như quét mã QR ngân hàng, và cả người dân lẫn du khách đều hưởng lợi từ thanh toán nhanh, chi phí thấp, không biên giới.",
      "Khi ví, mạng lưới và quy định phát triển, VNDeFi hướng tới việc đảm bảo quá trình ứng dụng crypto tại Việt Nam luôn thực tế, bao trùm và thân thiện với người bán — tập trung vào giá trị sử dụng thật, không chạy theo trào lưu.",
      "Mục tiêu của chúng tôi là kết nối các mảnh ghép:",
      "→ Giữa người dùng toàn cầu và cửa hàng địa phương",
      "→ Giữa ví crypto và nhu cầu đời thực",
      "→ Giữa hạ tầng sẵn có và các khả năng mới",
      "VNDeFi sẽ tiếp tục ghi nhận và hỗ trợ hành trình này, góp phần đưa Việt Nam trở thành ví dụ toàn cầu về ứng dụng crypto đơn giản, hằng ngày.",
      "Chúng tôi làm gì",
      "- Hướng dẫn du khách và expat cách dùng ví được hỗ trợ để thanh toán bằng crypto tại cửa hàng Việt Nam.",
      "- Giới thiệu các ứng dụng và ví kết nối ngân hàng nội địa, cho phép luồng thanh toán crypto→VND mượt mà.",
      "- Nâng cao nhận thức cho chủ cửa hàng rằng có thể nhận thanh toán crypto qua mã QR ngân hàng sẵn có — không cần thiết bị hay app mới.",
      "Chúng tôi không làm gì",
      "- Không cung cấp tư vấn tài chính, pháp lý hoặc đầu tư.",
      "- Không lưu giữ, chuyển hay xử lý các khoản thanh toán crypto.",
      "- Không xây dựng hay vận hành ví, sàn giao dịch hoặc hạ tầng thanh toán.",
      "- Không thu phí hay hoa hồng từ người dùng hoặc người bán.",
      "VNDeFi là dự án truyền thông/nâng cao nhận thức — tồn tại để cung cấp thông tin, đơn giản hóa và hỗ trợ việc dùng các công cụ đã hoạt động.",
      "Tham gia",
      "Dù là du khách, chủ cửa hàng hay người xây dựng trong lĩnh vực crypto, chúng tôi rất mong được kết nối.",
      "Chúng tôi luôn sẵn sàng hợp tác với cộng đồng địa phương, cửa hàng và nhà cung cấp ví có chung mục tiêu: biến thanh toán crypto trở nên thực tế và dễ tiếp cận tại Việt Nam.",
      "📧 Liên hệ: baptiste.gresse@proton.me",
    ],
    back: "← Quay về trang chủ",
  },
};

export default function AboutPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const raw = searchParams?.lang ?? "fr";
  const lang = (Array.isArray(raw) ? raw[0] : raw) as "fr" | "en" | "vi";
  const t = copy[lang] ?? copy.fr;

  type Block = {
    type: "heading" | "paragraph" | "list";
    text?: string;
    items?: string[];
  };
  const headingLabels = new Set<string>([
    // EN
    "About VNDeFi",
    "Our Vision",
    "What We Do",
    "What We Don’t Do",
    "Get Involved",
    // FR
    "À propos de VNDeFi",
    "Notre vision",
    "Ce que nous faisons",
    "Ce que nous ne faisons pas",
    "Participer",
    // VI
    "Giới thiệu VNDeFi",
    "Tầm nhìn",
    "Chúng tôi làm gì",
    "Chúng tôi không làm gì",
    "Tham gia",
  ]);

  function parseBodyToBlocks(lines: string[]): Block[] {
    const blocks: Block[] = [];
    let currentList: string[] | null = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
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
          <Link
            href={`?lang=fr`}
            className={`underline underline-offset-4 ${
              lang === "fr" ? "text-foreground" : ""
            }`}
          >
            FR
          </Link>
          <span>·</span>
          <Link
            href={`?lang=en`}
            className={`underline underline-offset-4 ${
              lang === "en" ? "text-foreground" : ""
            }`}
          >
            EN
          </Link>
          <span>·</span>
          <Link
            href={`?lang=vi`}
            className={`underline underline-offset-4 ${
              lang === "vi" ? "text-foreground" : ""
            }`}
          >
            VI
          </Link>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
          {t.title}
        </h1>
        {blocks.map((b, i) =>
          b.type === "heading" ? (
            <h2
              key={i}
              className="text-base sm:text-lg font-medium text-foreground mt-6"
            >
              {b.text}
            </h2>
          ) : b.type === "list" ? (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {(b.items ?? []).map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{b.text}</p>
          )
        )}
        <div className="pt-6">
          <Link href="/" className="text-sm underline underline-offset-4">
            {t.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
