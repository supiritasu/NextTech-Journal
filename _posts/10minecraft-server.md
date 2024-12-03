---
title: "#10 Minecraftサーバをラズパイで建てよう！！"
excerpt: "Minecraftサーバをラズパイで建てて，マルチプレイをする方法を紹介します！"
coverImage: "/assets/blog/01/cover.jpg"
date: "2024/11/02 19:15"
ogImage:
  url: "/assets/blog/01/cover.jpg"
tags: ["ラズパイ", "コマンド","サーバ"]
---


# Java版Minecraftサーバーのセットアップ

Java版Minecraftサーバーのセットアップ方法を説明します．

## 1. 準備

まずはMinecraft用の専用ディレクトリを作成します．

```bash
mkdir minecraft_java
cd minecraft_java
```

## 2. Minecraft ServerのPaperMCをダウンロード

papermc公式URL : https://papermc.io/downloads/paper からサーバーのJARファイルをダウンロードします．

```bash
wget https://launcher.mojang.com/v1/objects/125e5adf40c659fd3bce3e66e67a16bb49ecc1b9/server.jar
```

## 3. 初回起動

サーバーを初回起動して、必要なファイルを生成します．

```bash
java -Xmx2G -Xms2G -jar server.jar nogui
```

### メモリ設定について
- `-Xmx2G`: 最大メモリ割り当て
- `-Xms2G`: 初期メモリ割り当て
  
:::message
今回私が使っているRaspberry Piのメモリは4GBなのですが，3GB割り当てるとクラッシュしてしまいました．2GBくらいがちょうど良さそうです
:::


## 4. EULAの同意

生成された`eula.txt`を編集して、利用規約に同意します：

```bash
nano eula.txt
```

ファイル内の`eula=false`を`eula=true`に変更します．

## 5. サーバー設定（オプション）

`server.properties`ファイルで以下のような設定をカスタマイズできます：
- ゲームモード
- 難易度
- 最大プレイヤー数
- ポート番号
- etc...

## 6. サーバーの起動

すべての設定が完了したら、サーバーを起動します．

```bash
java -Xms2G -Xmx2G -Dlog4j.skipJansi=true -jar paper-1.20.4-496.jar nogui
```

これでMinecraftサーバーが起動し、プレイヤーの接続を待ち受け状態になります．

## 注意事項
- メモリ設定は使用する環境に応じて適切な値に調整してください
- 定期的なバックアップを推奨します


