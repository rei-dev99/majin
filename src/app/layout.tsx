import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "🧀🐮魔神クエスト",
  description:
    "このアプリは魔神が独断と偏見で仲良しメンバーをクイズで紹介するプラットフォームです。",
  openGraph: {
    title: "🧀🐮魔神クエスト",
    description:
      "このアプリは魔神が独断と偏見で仲良しメンバーをクイズで紹介するプラットフォームです。",
    url: "https://majin-r821.vercel.app/",
    siteName: "🧀🐮魔神クエスト",
    images: [
      {
        url: "https://github.com/user-attachments/assets/5b449d42-42bb-437b-84e4-a6b95df8bf7f",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
