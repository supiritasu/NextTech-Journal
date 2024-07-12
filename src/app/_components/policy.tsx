import React, { ReactNode } from 'react';
import { CMS_NAME } from "@/lib/constants";

export function Policy() {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
      
      <div className="space-y-6">
        <PolicySection title="個人情報の利用目的">
          <p>
            当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </p>
        </PolicySection>

        <PolicySection title="広告について">
          <p>
            当ブログでは、第三者配信の広告サービス（Googleアドセンス、A8.net）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
          </p>
          <p className="mt-2">
            Cookieを無効にする方法やGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご確認ください。
          </p>
          <p className="mt-2">
            また、{CMS_NAME}は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
          </p>
        </PolicySection>

        <PolicySection title="アクセス解析ツールについて">
          <p>
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。
            トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </PolicySection>

        <PolicySection title="コメントについて">
          <p>
            当ブログへのコメントを残す際に、IP アドレスを収集しています。
            これはブログの標準機能としてサポートされている機能で、スパムや荒らしへの対応以外にこのIPアドレスを使用することはありません。
            なお、全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となります。あらかじめご了承ください。
          </p>
        </PolicySection>
      </div>
    </section>
  );
}

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}