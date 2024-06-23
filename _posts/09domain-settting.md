---
title: "#9 独自ドメインでNetlify上にデプロイしたい！"
excerpt: "今回は独自ドメインでNetlify上にデプロイしたのでその方法について分かりやすく解説していきたいと思います！"
coverImage: "/assets/blog/01/cover.jpg"
date: "2024/06/24 00:10"
ogImage:
  url: "/assets/blog/01/cover.jpg"
tags: ['next.js', 'Netlify']
---

## はじめに
Next.jsで作成したブログサイトをVercelにデプロイしたのですが，商用利用したいためNetlifyに移行しました．その過程で独自ドメインの設定を行ったのでその方法について解説したいと思います．
Netlifyに独自ドメインを設定する手順については他記事もたくさんあるのですが，古い記事も多いので最新の情報を発信したいと思います．

## 1. 独自ドメインの入手
今回私は`Value-domain`でドメインを購入しました．`nexttech.tokyo`という120円のドメインを購入しました．
https://www.value-domain.com/

こちらから登録したい文字列を入力することで購入可能なドメインを確認することができます．購入できたら次はNetlifyの設定です．

:::message alert
今なら独自ドメイン0円！！というものも多くありますが，1年ごとに契約更新料として2000〜3000円ほど必要になるのでご注意ください．
:::
## 2. Netlifyの設定
Netlifyへのドメイン追加とValue-domainでの設定手順
### 2-1. Netlifyにドメインを追加する

1. Netlifyの管理画面から，独自ドメインを設定したいサイトを選択
2. サイドメニューから「Domain management」に移動
3. 「Production domains」パネルで，`Add a domain`をクリック
4. Value-domainで取得したドメイン名を入力し，`Verify`をクリック
5. ドメインの所有者確認画面で`Yes, add domain`をクリック

### 2-2. DNS設定を確認する

1. 「Production domains」パネルで，追加したドメインの横に表示される`Awaiting External DNS`をクリックします（※Primary domainの方）・
2. `Set up Netlify DNS for yourdomain.com`をクリック
3. DNS設定画面で`Verify`をクリック
4. 画面下部の`Add domain`をクリック
5. レコード追加のオプション設定画面で`Continue`をクリック
6. 表示される4件のネームサーバーをコピーしてください（後で使用します）．

## 3. Value-domainでの設定

### 3-1. Value-domainについて
Value-domainは，ドメイン取得やレンタルサーバーなどのサービスを提供しています．

### 3-2. ネームサーバーを変更する
1. Value-domainの管理画面にログイン
2. ユーザーコントロールパネル左ナビの`ドメイン`をクリック
3. `ドメインの設定操作`にある`ネームサーバーの設定`をクリック
4. `ネームサーバー情報を入力`の箇所に，Netlifyでコピーした4件のネームサーバーを入力


以上でValue-domainでの設定は完了です．ただし，設定の反映には24〜72時間程度かかる場合があるので，しばらくお待ちください．(私の場合は15分ほどで完了しました．)


:::message
ドメインの設定は重要な作業です．各手順を慎重に行い，不明点がある場合は各サービスのサポートに問い合わせることをおすすめします．
:::

## 4.反映確認
Netlifyの管理画面から、設定を行ったサイトの設定画面を開きます。
サイドメニューから`Domain management`をクリックし、設定したドメインの横に`Netlify DNS`と表示されていれば反映は成功になります。


