import Footer from "@/app/_components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import 'zenn-content-css';
import Header from './_components/header';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next';
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NextTechへようこそ！プログラミング、旅行、留学、雑談の記事を投稿',
  description: 'NextTechでは、一般大学生がプログラミング、旅行、留学、雑談に関する記事を不定期に投稿しています。プログラミングの解説、留学体験記、おすすめの旅行先、実用的な雑談記事などをご覧いただけます。',
  keywords: 'プログラミング,旅行,留学,雑談,大学生ブログ',
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-M26PC82Q');
            `,
          }}
        />
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
        <Header/>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-KMQDB224Q6" />
    </html>
  );
}