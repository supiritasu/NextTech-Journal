---
title: "#5 アプリケーションエラー：クライアント側の例外が発生しました"
excerpt: "「アプリケーションエラー：クライアント側の例外が発生しました」というメッセージが表示されることがあります．これは特にGoogleChromeを使用している時によく発生するようです．このエラーの原因と対処法について，詳しく見ていきましょう．"
coverImage: "/assets/blog/01/cover.jpg"
date: "2024/06/23 16:20"
ogImage:
  url: "/assets/blog/01/cover.jpg"
tags: ['Next.js']
---

## はじめに
当ブログをローカル環境で作成してデプロイ出来た！と思ったら下図のようなアプリケーションエラーが発生してしまいました．あまりこのようなエラーに遭遇する方はいないかと思いますが，解決策を共有したいと思います．
![](/assets/blog/08/error.jpg)

## クライアント側の例外とは？
「クライアント側」とは，ユーザー側のことを指します．つまり，このエラーは私たちユーザーの環境や操作に関連して発生している可能性が高いということです．


## 主な原因と対処法
- クライアント側の例外が発生する主な原因は，以下の3つです：
 1. ネットワーク接続の問題
     - 原因：Wi-Fi接続が切れている，または電波が弱い
     - 対処法：インターネット接続を確認し，必要に応じて再接続してください
 2. ブラウザの設定の問題
     - 原因：GoogleChromeの翻訳機能がオンになっている
     - 対処法：ChatGPTは自動で日本語に対応しているため，ブラウザの翻訳機能をオフにしてから再ログインしてみましょう
 3. 無効なデータの入力
     - 原因：入力欄が空白，または不適切なデータ形式での入力
     - 対処法：入力内容を確認し，適切なデータを入力しているか確認してください
  
## 解決策
今回うまく動作しなかった原因は，2番目に挙げたGoogle Chromeの翻訳機能がオンになっていたことでした．正確には，HTMLの言語設定が `en`になっていたことが原因です．言語設定が英語になっていることで自動的に翻訳機能がオンになり，アプリケーションエラーを引き起こしていたようです．
```html:html
<html lang="jp">
```

