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
      "VNDeFi est une initiative indépendante qui explore l’adoption concrète des paiements crypto au Vietnam.",
      "Nous proposons des guides simples, étape par étape, pour aider voyageurs et locaux à payer dans les commerces vietnamiens avec des cryptomonnaies et des wallets compatibles. Notre contenu se concentre sur l’usage pratique : comment payer en crypto via des applications adossées à l’écosystème bancaire vietnamien.",
      "VNDeFi n’est ni un wallet, ni un exchange, ni un service de paiement. Nous ne développons pas de nouvelles applications — nous aidons les gens à comprendre et utiliser les outils qui existent déjà.",
      "Notre vision",
      "Nous imaginons un Vietnam où la crypto s’utilise naturellement au quotidien — où payer en USDC est aussi simple que scanner un QR bancaire, et où locaux comme voyageurs bénéficient de paiements rapides, peu coûteux et sans frontières.",
      "À mesure que les wallets, les réseaux et la réglementation évoluent, nous voulons que l’adoption de la crypto au Vietnam reste pratique, inclusive et favorable aux commerçants — et non dictée par le battage médiatique ou la spéculation.",
      "Notre objectif est de relier les points :",
      "→ Entre les utilisateurs du monde entier et les commerces locaux",
      "→ Entre les wallets crypto et les besoins du réel",
      "→ Entre l’infrastructure existante et de nouvelles possibilités",
      "VNDeFi continuera à documenter et accompagner cette transition, pour faire du Vietnam un exemple mondial d’adoption crypto simple et quotidienne.",
      "Ce que nous faisons",
      "Former voyageurs et expatriés à l’usage de wallets compatibles pour payer en crypto dans les commerces vietnamiens.",
      "Mettre en avant les applications connectées au système bancaire vietnamien qui permettent des paiements crypto‑vers‑VND fluides.",
      "Sensibiliser les commerçants en expliquant que les paiements crypto peuvent être reçus via leurs QR bancaires existants — sans nouveau matériel ni application.",
      "Ce que nous ne faisons pas",
      "Nous ne fournissons aucun conseil financier, juridique ou en investissement.",
      "Nous ne détenons, ne transférons ni ne traitons de paiements en crypto.",
      "Nous ne développons ni n’exploitons de wallet, d’exchange ou d’infrastructure de paiement.",
      "Nous ne prélevons aucun frais ni commission auprès des utilisateurs ou des commerçants.",
      "VNDeFi est un projet de communication et de sensibilisation — nous existons pour informer, simplifier et soutenir l’usage d’outils qui fonctionnent déjà.",
      "Comment participer",
      "Voyageur, commerçant ou bâtisseur de l’écosystème, nous serions ravis d’échanger.",
      "Contactez‑nous à contact@vndefi.asia pour en savoir plus.",
    ],
    back: "← Retour à l’accueil",
  },
  en: {
    title: "About VNDeFi",
    body: [
      "VNDeFi is an independent initiative exploring the real-world adoption of crypto payments in Vietnam.",
      "We offer simple, step-by-step guides to help travelers and locals pay at Vietnamese shops using cryptocurrencies and supported wallets. Our content focuses on practical use: how to pay with crypto using applications that are backed by the Vietnamese banking ecosystem.",
      "VNDeFi is not a wallet, exchange, or payment service. We don’t build new apps — instead, we help people understand and use the tools that already exist.",
      "Our Vision",
      "We envision a Vietnam where crypto is seamlessly used in everyday life — where paying with USDC is as simple as scanning a bank QR code, and where both locals and travelers benefit from fast, low-cost, borderless payments.",
      "As wallets, networks, and regulations evolve, we want to ensure that crypto adoption in Vietnam stays practical, inclusive, and merchant-friendly — not just driven by hype or speculation.",
      "Our goal is to connect the dots:",
      "→ Between global users and local shops",
      "→ Between crypto wallets and real-world needs",
      "→ Between existing infrastructure and new possibilities",
      "VNDeFi will continue to document and support this transition, helping make Vietnam a global example of simple, everyday crypto adoption.",
      "What We Do",
      "Educate travelers and expats on how to use supported wallets to pay in Vietnamese shops using crypto.",
      "Showcase apps that connect to the Vietnamese banking system and enable seamless crypto-to-VND payments.",
      "Support merchant awareness by explaining that crypto payments can be received through their existing bank QR codes — no new hardware or apps needed.",
      "What We Don’t Do",
      "We do not offer financial, legal, or investment advice.",
      "We do not hold, transfer, or process crypto payments.",
      "We do not build or maintain any wallet, exchange, or payment infrastructure.",
      "We do not take fees or commissions from users or merchants.",
      "VNDeFi is a communication and awareness project — we exist to inform, simplify, and support the use of tools that already work.",
      "Get Involved",
      "Whether you’re a traveler, shop owner, or builder in the crypto space, we’d love to connect.",
      "Contact us at contact@vndefi.asia for more information.",
    ],
    back: "← Back to home",
  },
  vi: {
    title: "Giới thiệu VNDeFi",
    body: [
      "VNDeFi là một sáng kiến độc lập nhằm khám phá việc ứng dụng thanh toán bằng crypto trong đời sống thực tại Việt Nam.",
      "Chúng tôi cung cấp các hướng dẫn đơn giản, từng bước một để giúp du khách và người dân thanh toán tại các cửa hàng ở Việt Nam bằng tiền mã hóa và các ví được hỗ trợ. Nội dung tập trung vào tính thực tiễn: cách trả bằng crypto thông qua các ứng dụng được kết nối với hệ sinh thái ngân hàng Việt Nam.",
      "VNDeFi không phải là ví, sàn giao dịch hay dịch vụ thanh toán. Chúng tôi không xây dựng ứng dụng mới — thay vào đó, chúng tôi giúp mọi người hiểu và sử dụng những công cụ đã sẵn có.",
      "Tầm nhìn của chúng tôi",
      "Chúng tôi hình dung một Việt Nam nơi crypto được dùng liền mạch trong đời sống hằng ngày — nơi việc trả bằng USDC đơn giản như quét mã QR ngân hàng, và cả người dân lẫn du khách đều hưởng lợi từ các khoản thanh toán nhanh, chi phí thấp và không biên giới.",
      "Khi ví, mạng lưới và quy định tiếp tục phát triển, chúng tôi muốn việc ứng dụng crypto tại Việt Nam luôn thực tế, bao trùm và thân thiện với người bán — không chỉ được dẫn dắt bởi làn sóng thổi phồng hay đầu cơ.",
      "Mục tiêu của chúng tôi là kết nối các mảnh ghép:",
      "→ Giữa người dùng toàn cầu và các cửa hàng địa phương",
      "→ Giữa các ví crypto và nhu cầu đời thực",
      "→ Giữa hạ tầng sẵn có và những khả năng mới",
      "VNDeFi sẽ tiếp tục ghi nhận và hỗ trợ quá trình chuyển đổi này, giúp Việt Nam trở thành ví dụ toàn cầu về việc ứng dụng crypto đơn giản trong đời sống hằng ngày.",
      "Chúng tôi làm gì",
      "Hướng dẫn du khách và người nước ngoài sinh sống (expat) cách dùng các ví được hỗ trợ để thanh toán bằng crypto tại cửa hàng ở Việt Nam.",
      "Giới thiệu các ứng dụng kết nối hệ thống ngân hàng Việt Nam, cho phép dòng tiền crypto‑sang‑VND diễn ra mượt mà.",
      "Nâng cao nhận thức của chủ cửa hàng rằng họ có thể nhận thanh toán crypto qua mã QR ngân hàng hiện có — không cần thiết bị hay ứng dụng mới.",
      "Chúng tôi không làm gì",
      "Chúng tôi không cung cấp tư vấn tài chính, pháp lý hoặc đầu tư.",
      "Chúng tôi không lưu giữ, chuyển hoặc xử lý các khoản thanh toán crypto.",
      "Chúng tôi không xây dựng hay vận hành bất kỳ ví, sàn giao dịch hoặc hạ tầng thanh toán nào.",
      "Chúng tôi không thu phí hay hoa hồng từ người dùng hoặc người bán.",
      "VNDeFi là dự án truyền thông và nâng cao nhận thức — chúng tôi tồn tại để cung cấp thông tin, đơn giản hóa và hỗ trợ việc sử dụng các công cụ đã hoạt động.",
      "Tham gia cùng chúng tôi",
      "Dù bạn là du khách, chủ cửa hàng hay người xây dựng trong lĩnh vực crypto, chúng tôi rất mong được kết nối.",
      "Liên hệ tại contact@vndefi.asia để biết thêm thông tin.",
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


