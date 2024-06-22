---
title: "Treeコマンドの使い方とオプション一覧"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
#  tags: 
#    - 'tag1'
#    - 'tag2'
tags: ['next.js','typescript', 'JavaScript', 'マークダウン']
---

# treeコマンドとは

treeコマンドはファイル構成をtree構造で視覚的に分かりやすく表示してくれるコマンドです。

## インストール

macユーザの方はbrewでtreeコマンドをインストールしてください。


## オプション

以下の表はtreeコマンドのオプションです。

| オプション | 説明 |
|------------|------|
| -a         | 隠しファイルも表示します． |
| -d         | ディレクトリのみを表示します． |
| -L         | 表示するディレクトリの深さを指定します（例: -L 2 は2レベルの深さまで表示）． |
| -P         | 指定したパターンに一致するファイルのみを表示します（例: -P "*.py" はPythonファイルのみを表示）． |
| -I         | 指定したパターンに一致するファイルを除外して表示します（例: -I "*.py" はPythonファイルを除外）． |
| -f         | ファイルのフルパスを表示します． |
| -i         | インデントにパイプ文字（|）を使用せず，スペースのみを使用します． |
| -C         | 色付けを有効にします（端末が対応している場合）． |
| --charset  | 出力に使用する文字セットを指定します（例: --charset ASCII）． |
| -Q         | ファイル名を引用符で囲みます． |
| --noreport | ディレクトリとファイルの合計を表示しないようにします． |
| -r         | ディレクトリを逆順に表示します． |
| -t         | ファイル/ディレクトリを最終修正時刻でソートして表示します． |

## 使い方

次のコマンドを実行すると、指定した条件でファイル構成がtree状に表示されます。


- `-L 4` は、現在のディレクトリから4レベルの深さまでのファイルとディレクトリを表示します。
- `-P "*.py|*.html"` は、表示するファイルが.pyまたは.html拡張子を持つものに限定されることを指定します。

上記のコマンドを実行すると以下のようにツリー状にファイル構成が表示されます。

```ruby:sushi.rb
def sushi
puts 'お寿司'
end
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

このように、マークダウン形式でtreeコマンドの使い方やオプションを記述することで、簡単にファイル構成を説明できます。
