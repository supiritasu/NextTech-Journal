---
title: "Next.jsのApp Routerを使用したZennスタイルのMarkdownサポート"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
tags: ['next.js','zenn']
---


Next.jsのApp Routerを使用しているプロジェクトにzenn-markdown-html，zenn-content-css，zenn-embed-elementsを導入する手順を説明します．これらのライブラリを使うことで，ZennスタイルのMarkdownをHTMLに変換し，適切なスタイリングと埋め込み要素をサポートできます．







## はじめに

Zenn Markdownの導入に関する記事を読み進めていたところ，ブログのサンプルコードを実装しようとした際に，提供されているコードと実際のファイル構成が異なっていることに気付きました．「ブログサンプルの変更点」のセクションで_app.tsxと_document_.tsxのファイルが見つからず，躓きました．
同じ問題に直面している方のために，正しいファイル構成や修正方法について説明していきます．

:::message
「ブログサンプルの変更点の pages/posts/[slug].tsx まで作業が進んでいる前提で話を進めていきます．
:::


@[card](https://zenn.dev/team_zenn/articles/intro-zenn-markdown)

## 原因
Next.jsの新しい`App Router`を使用している場合，`_app.tsx`と`_document.tsx`の代わりに，`app/layout.tsx`を使用してアプリケーション全体のレイアウトを定義しているようです．
ただし，従来のPages Routerを使用している場合は，`_app.tsx`と`_document.tsx`を`src/pages`ディレクトリに配置する必要があります．
## 必要なライブラリのインストール

まず，必要なライブラリをインストールします．

```bash
yarn add zenn-markdown-html zenn-content-css zenn-embed-elements
```

## バージョン情報
| 利用ツール             | バージョン |
|----------------------|--------|
| Next.js              | 13.0.0 |
| zenn-markdown-html   | 0.1.81 |
| zenn-content-css     | 0.1.81 |
| zenn-embed-elements  | 0.1.81 |



## 1. blog-starterテンプレートでプロジェクトを作成


```bash
npx create-next-app@latest blog-starter --example blog-starter
cd blog-starter
```




## 2. markdownToHtml.tsの設定

src/lib/markdownToHtml.tsファイルを編集し，zenn-markdown-htmlを使用してMarkdownをHTMLに変換する関数を実装します．

```ts:markdownToHtml.tsx
import m2h from 'zenn-markdown-html';

export default async function markdownToHtml(markdown: string): Promise<string> {
  return m2h(markdown);
}
```

## 3. layout.tsxの設定
src/app/layout.tsxファイルを編集し，zenn-content-cssとzenn-embed-elementsをインポートします．

```ts:layout.tsx
    ・・・
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('zenn-embed-elements');
  }, []);

  return (
    ・・・
```


以上の手順に従って設定することで，Next.jsのApp RouterプロジェクトにZennスタイルのMarkdownを導入できます．

