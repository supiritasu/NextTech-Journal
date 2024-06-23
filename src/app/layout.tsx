"use client";
import { useEffect } from 'react';
import Footer from "@/app/_components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import 'zenn-content-css';
import Header from './_components/header';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('zenn-embed-elements');
  }, []);

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NextTechへようこそ！プログラミング、旅行、留学、雑談の記事を投稿</title>
        <meta name="description" content="NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。プログラミングの解説、留学体験記、おすすめの旅行先、実用的な雑談記事などをご覧いただけます。" />
        <meta name="keywords" content="プログラミング,旅行,留学,雑談,大学生ブログ" />
        <meta name="author" content="NextTech" />
        <link rel="canonical" href="https://your-domain.com" />

        <meta property="og:title" content="NextTech - プログラミング、旅行、留学、雑談の記事" />
        <meta property="og:description" content="NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="https://your-domain.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NextTech - プログラミング、旅行、留学、雑談の記事" />
        <meta name="twitter:description" content="NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。" />
        <meta name="twitter:image" content="https://your-domain.com/twitter-image.jpg" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />


      </head>
      <body className={inter.className}>
        <Header/>
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Analytics/>
      </body>
      <GoogleTagManager gtmId="G-50Z92B2D6S"/>
      <GoogleAnalytics gaId="G-50Z92B2D6S" />
    </html>
  );
}