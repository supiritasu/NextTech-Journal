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
    <html lang="jp">
      <head>
        <title>NextTechへようこそ！本ブログでは一般大学生がプログラミング，旅行，留学，雑談記事を暇なときに投稿します．不定期です！
            プログラミングに関する解説や留学体験記，おすすめの旅行先や実用的な雑談記事を投稿予定です！
            興味のある方はぜひご覧ください！！！</title>
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

        <GoogleTagManager gtmId={process.env.GA_ID ?? ""} />
        <GoogleAnalytics gaId={process.env.GA_ID ?? ""} />
      </head>
      <body className={inter.className}>
        <Header/>
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
