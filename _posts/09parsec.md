---
title: "#9 ラズパイとParsecとWake-on-LAN"
excerpt: "ラズパイとParsecを組み合わせたリモートアクセス環境の構築と，Wake-on-LANを使って外出先からPCを起動する方法を解説します．便利なセットアップでいつでもどこでもPC操作を可能に！"

coverImage: "/assets/blog/01/cover.jpg"
date: "2024/10/27 00:35"
ogImage:
  url: "/assets/blog/01/cover.jpg"
tags: ["ラズパイ", "コマンド"]
---

# ラズパイとParsecとwakeupコマンド

こんにちは！今回は，ラズパイを使ってParsecでリモートアクセスする環境を構築し，さらにWake-on-LANを使って外出先からPCを起動する方法について解説していきます．


## Parsecとは

Parsecは，低遅延のリモートデスクトップソフトウェアです．特にゲーミング用途で人気があり，以下の特徴があります：

- 60FPS以上の滑らかな画質
- 低遅延での操作が可能
- ゲームコントローラーのサポート
- 無料で利用可能（個人利用の場合）

:::message
Parsecは単なるリモートデスクトップツールではなく，ゲーミング体験に最適化されているため，通常の作業でも快適に使用できます．
:::



## セットアップ手順

:::message alert
Windows機は無線ではなく有線LANで接続してください！
:::

1. MACアドレスを調べる
コマンドプロンプトから
```bash
ipconfig/all
```
を実行する．
実行結果は以下のとおりである．
![Aについての画像](/assets/blog/09/ipconfig.jpg)

:::message alert
物理アドレスの「-」を「:」に置き換えてメモしてください！
:::

1. Wake On LANを有効にする

左下のwindowsボタンを右クリックし，デバイスマネージャ，ネットワークアダプターの順に開きます．そして先ほどのコマンド出力の「説明」にあるネットワークアダプターを探してください．そして右クリックでプロパティを選択し，電源の管理から以下の図のようにチェックを入れてください．
![Aについての画像](/assets/blog/09/Realtek.jpg)

Windowsの設定はこれで完了です！


## Wake-on-LANの設定

Wake-on-LAN（WoL）を使用すると，ネットワーク経由でPCを起動できます．

### BIOS設定

1. PCを起動しBIOSに入る
2. F7で「詳細」に移動
3. APMの設定を探す
4. 「PCIEによる電源ON」を「有効」にする 
5. 設定を保存して再起動

### コマンドの設定

ラズパイに`wakeonlan`コマンドをインストールします：

```bash
$ sudo apt install wakeonlan
```

使用例：
```bash
$ wakeonlan XX:XX:XX:XX:XX:XX  # PCのMACアドレスを指定
```

## 運用方法

1. ラズパイを常時起動状態で設置
2. 外出先からSSHでラズパイに接続
3. `wakeonlan`コマンドでPCを起動
4. Parsecでリモート接続


## 参考リンク
- [Parsec公式ドキュメント](https://parsec.app/downloads)
- [Hatena Blog たねやつの木](https://www.taneyats.com/entry/raspi-wake-on-lan#MAC%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%E3%82%92%E8%AA%BF%E3%81%B9%E3%82%8B)

---

この記事が皆さんのリモートアクセス環境構築の参考になれば幸いです．