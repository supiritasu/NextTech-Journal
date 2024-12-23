import Footer from "@/app/_components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import 'zenn-content-css';
import Header from './_components/header';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NextTechへようこそ！プログラミング、旅行、留学、雑談の記事を投稿',
  description: 'NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。プログラミングの解説、留学体験記、おすすめの旅行先、実用的な雑談記事などをご覧いただけます。',
  keywords: 'プログラミング,旅行,留学,雑談,大学生ブログ,React,Next.js,TypeSciprt',
  authors: [{ name: 'NextTech' }],
  openGraph: {
    title: 'NextTech - プログラミング、旅行、留学、雑談の記事',
    description: 'NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。',
    url: 'https://your-domain.com',
    siteName: 'NextTech',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextTech - プログラミング、旅行、留学、雑談の記事',
    description: 'NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
      <meta name="google-adsense-account" content="ca-pub-3517714019756094"/>

      <GoogleTagManager gtmId="GTM-M26PC82Q" />
      
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M26PC82Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <UserProvider>
          <Header />
          {/* <body>{children}</body> */}
        </UserProvider>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-50Z92B2D6S" />
    </html>
  );
}

