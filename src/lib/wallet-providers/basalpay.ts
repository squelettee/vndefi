import type { WalletProviderConfig } from "./types";

export const basalpayConfig: WalletProviderConfig = {
  id: "basalpay",
  name: "basalpay",
  displayName: "Basal Pay",
  appStoreUrl: "https://apps.apple.com/vn/app/basal-pay/id6742171669?l=vi",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.basalpay.app&pcampaignid=web_share",
  learnMoreUrl: "https://basalpay.com/",
  logoUrl: undefined,
  videoUrl: "/video_demo.mp4",
  translations: {
    en: {
      description:
        "Basal Pay offers seamless crypto-to-fiat conversions for travelers in Southeast Asia.",
      tip: "Tip: Use the Polygon blockchain for near-zero fees and fast confirmations.",
      benefits: {
        b1Title: "Instant & Local",
        b1Desc:
          "Pay Vietnamese shops instantly through VietQR. Your wallet handles the VND conversion and transfer.",
        b2Title: "Built on VietQR",
        b2Desc:
          "Most cafés, hotels, and shops in Vietnam already display a VietQR code. VNDeFi helps you understand where supported wallets can be used today.",
        b3Title: "No Hidden Fees",
        b3Desc:
          "Avoid card conversion charges or ATM withdrawals. You pay exactly the amount shown in VND.",
        b4Title: "Perfect for Travelers & Nomads",
        b4Desc:
          "Skip currency exchange lines and card issues. Just scan, confirm, and pay with crypto.",
      },
      steps: {
        s1Title: "Download a supported wallet.",
        s1Desc: "Get Basal Pay (iOS / Android) and add funds in USDT.",
        s2Title: "Scan the shop's bank QR (VietQR).",
        s2Desc:
          "Most Vietnamese shops use it already — no special system needed.",
        s3Title: "Enter the VND amount and confirm.",
        s3Desc:
          "Your wallet converts USDT automatically, and the merchant receives VND instantly.",
      },
    },
    fr: {
      description:
        "Basal Pay offre des conversions crypto-to-fiat transparentes pour les voyageurs en Asie du Sud-Est.",
      tip: "Astuce : utilisez la blockchain Polygon pour des frais quasi nuls et une validation rapide.",
      benefits: {
        b1Title: "Instantané et local",
        b1Desc:
          "Payez instantanément les commerces vietnamiens via VietQR. Votre wallet gère la conversion et le virement en VND.",
        b2Title: "Basé sur VietQR",
        b2Desc:
          "La plupart des cafés, hôtels et boutiques au Vietnam affichent déjà un QR VietQR. VNDeFi vous aide à comprendre où les wallets compatibles peuvent être utilisés aujourd'hui.",
        b3Title: "Sans frais cachés",
        b3Desc:
          "Évitez les frais de conversion carte ou les retraits DAB. Vous payez exactement le montant affiché en VND.",
        b4Title: "Idéal pour voyageurs et nomades",
        b4Desc:
          "Évitez le change et les problèmes de carte. Scannez, confirmez, payez en crypto.",
      },
      steps: {
        s1Title: "Téléchargez un portefeuille compatible.",
        s1Desc: "Obtenez Basal Pay (iOS / Android) et ajoutez des fonds en USDT.",
        s2Title: "Scannez le QR bancaire du commerce (VietQR).",
        s2Desc:
          "La plupart des commerces vietnamiens l'utilisent déjà — aucun système spécial nécessaire.",
        s3Title: "Entrez le montant en VND et validez.",
        s3Desc:
          "Votre wallet convertit automatiquement l'USDT, et le commerçant reçoit le VND instantanément.",
      },
    },
    vi: {
      description:
        "Basal Pay cung cấp giải pháp chuyển đổi crypto-to-fiat liền mạch cho khách du lịch tại Đông Nam Á.",
      tip: "Gợi ý: sử dụng blockchain Polygon để có phí gần như bằng 0 và xác nhận nhanh.",
      benefits: {
        b1Title: "Tức thì và nội địa",
        b1Desc:
          "Thanh toán cửa hàng Việt Nam ngay qua VietQR. Ví của bạn xử lý quy đổi và chuyển khoản VND.",
        b2Title: "Xây dựng trên VietQR",
        b2Desc:
          "Hầu hết quán cà phê, khách sạn và cửa hàng tại Việt Nam đã có VietQR. VNDeFi giúp bạn hiểu nơi các ví hỗ trợ có thể được sử dụng ngày nay.",
        b3Title: "Không phí ẩn",
        b3Desc:
          "Tránh phí quy đổi thẻ hoặc rút ATM. Bạn trả đúng số tiền VND hiển thị.",
        b4Title: "Hoàn hảo cho khách du lịch & nomad",
        b4Desc:
          "Không cần đổi tiền hay lo lỗi thẻ. Chỉ cần quét, xác nhận và thanh toán bằng crypto.",
      },
      steps: {
        s1Title: "Tải một ví được hỗ trợ.",
        s1Desc: "Tải Basal Pay (iOS / Android) và nạp USDT.",
        s2Title: "Quét mã QR ngân hàng của cửa hàng (VietQR).",
        s2Desc: "Hầu hết cửa hàng Việt Nam đã dùng — không cần hệ thống đặc biệt.",
        s3Title: "Nhập số tiền VND và xác nhận.",
        s3Desc:
          "Ví của bạn tự động quy đổi USDT, và người bán nhận VND ngay lập tức.",
      },
    },
  },
  isActive: true,
  order: 1,
};
