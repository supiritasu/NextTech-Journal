---
title: "#8 ReactとNext.jsで動的な目次を実装する方法"
excerpt: "正しく設定したはずなのにGTAGが認識されなかったので解決策を共有したいと思います．"
coverImage: "/assets/blog/01/cover.jpg"
date: "2024/06/24 16:35"
ogImage:
  url: "/assets/blog/01/cover.jpg"
tags: ["react", "nextjs", "typescript", "tailwindcss"]
---


:::message
この記事では，Reactを使用した動的な目次の作成方法について解説します．フレームワークやライブラリの基本的な知識があることを前提としています．
:::

# 目次の作成方法：Reactで動的な目次を実装しよう

こんにちは！今回は，Reactを使って動的な目次を作成する方法をご紹介します．目次は読者がコンテンツを把握しやすくするための重要な要素です．それでは，実装方法を見ていきましょう．



## はじめに

動的な目次を作成することで，以下のような利点があります：

- ユーザーが記事の構造を素早く把握できる
- 長い記事でも簡単に目的の箇所にジャンプできる
- 現在読んでいる箇所がハイライトされる


最終的なコードのこのようになっています
:::details TableOfContents.tsxのコード全体
```ts
"use client";

import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('article');
    if (article) {
      const headings = article.querySelectorAll('h1, h2, h3, h4');
      const tocItems: TOCItem[] = Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      }));
      setToc(tocItems);
    }

    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4');
      const scrollPosition = window.scrollY;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement;
        if (heading.offsetTop <= scrollPosition + 100) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="table-of-contents bg-white p-6 rounded-lg shadow-md mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">目次</h2>
      <ul className="space-y-2">
        {toc.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginLeft: `${(item.level - 2) * 16}px` }}
          >
            <ScrollLink
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              href={`#${item.id}`}
              className={`flex items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 ${
                activeId === item.id ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              <ChevronRight
                className={`mr-2 transition-transform duration-200 ${
                  activeId === item.id ? 'text-blue-500 transform rotate-90' : ''
                }`}
                size={16}
              />
              {item.text}
            </ScrollLink>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default TableOfContents;
```
:::

それでは，実装の詳細について解説していきます．

:::message
全て書くと長すぎるので2記事に分けてます．ご了承ください😔
:::
## 必要なライブラリ

まず，以下のライブラリをインストールします：

```bash
npm install react-scroll framer-motion lucide-react
```

- `react-scroll`: スムーズなスクロール機能を提供
- `framer-motion`: アニメーション効果を追加
- `lucide-react`: アイコンを使用

## コンポーネントの作成

次に，`TableOfContents`コンポーネントを作成します．

```typescript:TableOfContents.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // 以下，useEffectの実装など
  // ...

  return (
    // JSXの実装
    // ...
  );
};

export default TableOfContents;
```


このコンポーネントは以下の主要な機能を持っています：

1. ページ内のヘッダー要素（h1, h2, h3など）を検出し、目次項目として保存
2. 現在表示されているセクションを追跡し、対応する目次項目をハイライト
3. 目次項目をクリックすると、対応するセクションにスムーズにスクロール

では、各部分について詳しく見ていきましょう。

## 使用しているライブラリ

このコンポーネントでは、以下のライブラリを使用しています：

- `react-scroll`: ページ内のスムーズなスクロールを実現するためのライブラリ
- `framer-motion`: アニメーション効果を追加するためのライブラリ
- `lucide-react`: アイコンを表示するためのライブラリ

これらのライブラリを使用することで、より洗練された UI とインタラクションを実現しています。

## 型定義

目次の各項目の型を `TOCItem` インターフェースで定義しています：

```typescript
interface TOCItem {
  id: string;    // ヘッダー要素のid
  text: string;  // ヘッダーのテキスト内容
  level: number; // ヘッダーのレベル（h1 = 1, h2 = 2, ...）
}
```

## 状態管理

コンポーネント内で2つの状態を管理しています：

```typescript
const [toc, setToc] = useState<TOCItem[]>([]);
const [activeId, setActiveId] = useState<string>('');
```

- `toc`: 検出されたヘッダー要素から生成された目次項目の配列
- `activeId`: 現在表示されているセクションのID


## 目次アイテムの取得

まず最初に，記事内の見出しを取得し，目次アイテムを生成する方法を見ていきましょう．この処理には`useEffect`フックを使用します．

```typescript
import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [toc, setToc] = useState<TOCItem[]>([]);

  useEffect(() => {
    const article = document.querySelector('article');
    if (article) {
      const headings = article.querySelectorAll('h1, h2, h3, h4');
      const tocItems: TOCItem[] = Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      }));
      setToc(tocItems);
    }
  }, []);

  // ...
}
```

このコードでは以下のことを行っています：

1. `article`要素を取得します．これは記事の本文を含む要素です．
2. `querySelectorAll`を使って，`article`内のすべての`h1`，`h2`，`h3`，`h4`要素を取得します．
3. 取得した見出し要素を`Array.from`でリストに変換し，`map`関数で各見出しの情報を抽出します．
4. 各見出しについて，以下の情報を含むオブジェクトを作成します：
   - `id`: 見出しのID（後でリンクに使用）
   - `text`: 見出しのテキスト内容
   - `level`: 見出しのレベル（h1なら1，h2なら2，など）
5. 作成した目次アイテムのリストを`setToc`関数でステートに保存します．

この方法により，記事の構造が変更されても，目次が自動的に更新されるようになります．


## スクロール位置の監視

スクロール位置を監視し，現在のセクションをハイライトします．

```typescript
useEffect(() => {
  // ...

  const handleScroll = () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4');
    const scrollPosition = window.scrollY;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i] as HTMLElement;
      if (heading.offsetTop <= scrollPosition + 100) {
        setActiveId(heading.id);
        break;
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## スタイリングとアニメーション

Tailwind CSSとFramer Motionを使用して，目次をスタイリングし，アニメーション効果を追加します．

```tsx
return (
  <motion.nav
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="table-of-contents bg-white p-6 rounded-lg shadow-md mt-10"
  >
    <h2 className="text-2xl font-bold mb-4 text-gray-800">目次</h2>
    <ul className="space-y-2">
      {toc.map((item) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginLeft: `${(item.level - 2) * 16}px` }}
        >
          <ScrollLink
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70}
            href={`#${item.id}`}
            className={`flex items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 ${
              activeId === item.id ? 'text-blue-500 font-semibold' : ''
            }`}
          >
            <ChevronRight
              className={`mr-2 transition-transform duration-200 ${
                activeId === item.id ? 'text-blue-500 transform rotate-90' : ''
              }`}
              size={16}
            />
            {item.text}
          </ScrollLink>
        </motion.li>
      ))}
    </ul>
  </motion.nav>
);
```






## まとめ

以上が，Reactを使用した動的な目次の作成方法です．この実装により，以下の機能を持つ目次が作成できます：

- 記事内の見出しを自動的に取得
- スムーズなスクロール機能
- 現在のセクションのハイライト
- アニメーション効果

:::message alert
この実装は，クライアントサイドでのみ動作します．SSRやSSGを使用する場合は，適切な対応が必要です．
:::

目次を実装することで，読者の記事理解度とユーザーエクスペリエンスを向上させることができます．ぜひ，自分のブログやウェブサイトに取り入れてみてください！


















