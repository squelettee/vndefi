import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VNDeFi",
    template: "%s | VNDeFi",
  },
  description:
    "A simple guide to paying Vietnamese shops with crypto. Built for tourists, digital nomads and expats.",
  keywords: ["VNDeFi", "crypto", "payments", "Vietnam", "guide", "tracking"],
  icons: {
    icon: [
      { url: "/vietnam.png", rel: "icon", type: "image/png", sizes: "32x32" },
      { url: "/vietnam.png", rel: "shortcut icon", type: "image/png" },
    ],
    apple: [{ url: "/vietnam.png" }]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
