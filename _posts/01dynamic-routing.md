---
title: "#1 Treeコマンドの使い方とオプション一覧"
excerpt: "ファイル構成を視覚的に表示するtreeコマンドの使い方と各種オプションを徹底解説します．効率的なファイル管理に役立つツールとして，オプション設定でツリー表示をカスタマイズしてみましょう．"
coverImage: "/assets/blog/01/cover.jpg"
date: "2024/06/18 12:21"
ogImage:
  url: "/assets/blog/01/cover.jpg"
tags: ['Next.js','typescript', 'JavaScript', 'マークダウン']
---

# treeコマンドとは

treeコマンドはファイル構成をツリー構造で視覚的に分かりやすく表示してくれるコマンドです．

## インストール

macユーザの方は`brew`でtreeコマンドをインストールしてください．

```bash
brew install tree
```


## オプション

以下の表はtreeコマンドのオプションです．

| オプション       | 説明 |
|:----------------:|:------:|
| -a             | 隠しファイルも表示します． |
| -d             | ディレクトリのみを表示します． |
| -L             | 表示するディレクトリの深さを指定します（例: -L 2 は2レベルの深さまで表示）． |
| -P             | 指定したパターンに一致するファイルのみを表示します（例: -P "*.py" はPythonファイルのみを表示）． |
| -I             | 指定したパターンに一致するファイルを除外して表示します（例: -I "*.py" はPythonファイルを除外）． |
| -f             | ファイルのフルパスを表示します． |
| -i             | インデントにパイプ文字（|）を使用せず，スペースのみを使用します． |
| -C             | 色付けを有効にします（端末が対応している場合）． |
| --charset      | 出力に使用する文字セットを指定します（例: --charset ASCII）． |
| -Q             | ファイル名を引用符で囲みます． |
| --noreport     | ディレクトリとファイルの合計を表示しないようにします． |
| -r             | ディレクトリを逆順に表示します． |
| -t             | ファイル/ディレクトリを最終修正時刻でソートして表示します． |

## 使い方

次のコマンドを実行すると，指定した条件でファイル構成がツリー状に表示されます．

```bash
tree -L 4 -P "*.py|*.html"                                
```


- `-L 4` は，現在のディレクトリから4レベルの深さまでのファイルとディレクトリを表示します．
- `-P "*.py|*.html"` は，表示するファイルが.pyまたは.html拡張子を持つものに限定されることを指定します．

上記のコマンドを実行すると以下のようにツリー状にファイル構成が表示されます．


::::details　ツリーコマンドの結果
```

        .
        ├── blogapp
        │   ├── __init__.py
        │   ├── __pycache__
        │   ├── admin.py
        │   ├── apps.py
        │   ├── forms.py
        │   ├── management
        │   │   └── commands
        │   │       └── superuser.py
        │   ├── migrations
        │   │   ├── 0001_initial.py
        │   │   ├── 0002_alter_post_posted_commnt.py
        │   │   ├── 0003_rename_commnt_comment.py
        │   │   ├── 0004_alter_post_image.py
        │   │   ├── 0005_alter_post_image_alter_post_posted.py
        │   │   ├── 0006_contact_alter_post_image.py
        │   │   ├── 0007_blog.py
        │   │   ├── __init__.py
        │   │   └── __pycache__
        │   ├── models.py
        │   ├── static
        │   │   ├── css
        │   │   └── js
        │   ├── templates
        │   │   ├── blogapp
        │   │   │   ├── base.html
        │   │   │   ├── edit_post.html
        │   │   │   ├── frontpage.html
        │   │   │   ├── post-01.html
        │   │   │   ├── post-02.html
        │   │   │   ├── post-03.html
        │   │   │   ├── post-04.html
        │   │   │   └── post-05.html
        │   │   └── google
        │   │       └── googled6cb1cfdea5ad30b.html
        │   ├── tests.py
        │   ├── urls.py
        │   └── views.py
        ├── manage.py
        ├── media
        │   └── post_images
        └── microblog
            ├── __init__.py
            ├── __pycache__
            ├── asgi.py
            ├── local_settings.py
            ├── settings.py
            ├── urls.py
            └── wsgi.py
        
        23 directories, 33 files

```
::::