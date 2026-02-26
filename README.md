# MarpSlide

Markdown ドキュメントからプレゼンテーションスライドを自動生成するワークフローです。
原稿となる Markdown ファイルを用意し、Claude Code に渡すだけでスライドが完成します。

## 全体の流れ

```
原稿 Markdown を書く → Claude Code でスライド生成 → プレビュー → PDF 等にエクスポート
```

1. プレゼンしたい内容を**普通の Markdown ファイル**として書く
2. Claude Code の `/doc-to-slide` スキルにそのファイルを渡す
3. 63種類のレイアウトパターンとスタイルガイドに基づいてスライドが自動生成される
4. ブラウザでプレビューし、必要に応じて微調整する
5. PDF / HTML / PPTX にエクスポートする

> Marp + Tailwind CSS + KaTeX を内部で使用しています。
> スライドの構文やレイアウトの知識がなくても、原稿さえ書ければスライドを作成できます。

---

## 前提条件

| ツール | バージョン | 確認コマンド | 用途 |
|--------|-----------|-------------|------|
| [Node.js](https://nodejs.org/) | 18 以上 | `node -v` | Marp の実行環境 |
| npm | Node.js に同梱 | `npm -v` | パッケージ管理 |
| [Claude Code](https://claude.com/claude-code) | 最新版 | `claude --version` | スライド自動生成 |

> Node.js がない場合は [公式サイト](https://nodejs.org/) から LTS 版をダウンロードしてください。

---

## セットアップ

```bash
# 1. リポジトリをクローン（またはダウンロード）
git clone <repository-url>
cd MarpSlide

# 2. 依存パッケージをインストール
npm install
```

インストールが完了したら、動作確認をしましょう。

```bash
# レイアウトパターンカタログをブラウザでプレビュー
npm run example
```

ブラウザが自動で開き、63種類のレイアウトパターンが一覧で表示されます。
これが自動生成の際に使われるレイアウトのサンプル集です。

---

## はじめてのスライド作成（チュートリアル）

サンプル原稿を使って一連の流れを体験してみましょう。

### ステップ 1 --- 原稿を確認する

プロジェクトにはサンプル原稿 `docs/sample-source.md` が同梱されています。
中身は「リモートワークの生産性に関する調査報告」という普通の Markdown ドキュメントです。

```bash
# エディタで開いて中身を確認
code docs/sample-source.md    # VS Code の場合
open docs/sample-source.md    # macOS のデフォルトアプリで開く場合
```

原稿には見出し、箇条書き、表、本文テキストなどが含まれています。
Marp の構文や Tailwind CSS のクラスは一切書かれていない、**ごく普通の Markdown** です。

### ステップ 2 --- Claude Code でスライドを生成する

Claude Code を起動し、`/doc-to-slide` スキルにファイルパスを渡します。

```
claude

> /doc-to-slide docs/sample-source.md
```

Claude Code が原稿を読み取り、以下を自動的に行います。

- 内容を分析してプレゼンの目的（研究 / ビジネス / 技術 / 教育）を判定
- 目的に応じたスライド構成（12-20枚）を設計
- 各スライドに最適なレイアウトパターンを選択
- 必要に応じて SVG 図表を自動生成
- スタイルガイドに準拠したスライドファイルを `slides/` に出力

生成完了後、ファイルパスとプレビューコマンドが表示されます。

### ステップ 3 --- プレビューで確認する

生成されたスライドをブラウザでプレビューします。

```bash
# 表示されたコマンドを実行（ファイル名は生成結果に応じて変わります）
npm run preview:file -- slides/remote-work-productivity.md
```

ブラウザが開き、スライドが表示されます。
ファイルを編集して保存すると、プレビューがリアルタイムで更新されます。

### ステップ 4 --- 必要に応じて調整する

生成されたスライドを微調整したい場合は、Claude Code のスキルが使えます。

```
# スタイルガイドへの準拠をチェック・自動修正
> /slide-style-rector slides/remote-work-productivity.md

# レイアウトの溢れを検出・修正
> /layout-fix slides/remote-work-productivity.md
```

もちろん、テキストエディタで直接編集することもできます。

### ステップ 5 --- エクスポートする

```bash
# PDF に出力
npm run export:pdf -- slides/remote-work-productivity.md -o output/remote-work-productivity.pdf

# HTML に出力
npm run export:html -- slides/remote-work-productivity.md -o output/remote-work-productivity.html
```

---

## 原稿の書き方

`/doc-to-slide` に渡す原稿は**普通の Markdown**で構いません。
特別な書式は不要ですが、以下を意識するとより良いスライドが生成されます。

### 良い原稿の特徴

- **見出し（`#`, `##`, `###`）で構造が明確になっている** --- 見出しがスライドの区切りや構成の基礎になります
- **1セクションに1つの主張がある** --- 各セクションが1枚のスライドに対応しやすくなります
- **数値データが表形式になっている** --- KPI カードや比較表パターンが自動選択されます
- **手順やプロセスが番号付きリストになっている** --- ステップやタイムラインパターンが適用されます
- **箇条書きが適度に使われている** --- リストパターンとして整理されます

### 原稿のサンプル構造

```markdown
# プレゼンテーションのタイトル

## 背景
なぜこのテーマが重要なのかを説明する段落...

## 現状分析

| 指標 | 値 | 前年比 |
|------|-----|--------|
| 売上 | 120M | +15% |
| 顧客 | 3400 | +22% |

## 提案

1. 第一の提案 --- 詳細説明
2. 第二の提案 --- 詳細説明
3. 第三の提案 --- 詳細説明

## まとめ
要点を簡潔にまとめた段落...
```

### 対応するファイル形式

| 形式 | 説明 |
|------|------|
| `.md` | Markdown ファイル（推奨） |
| `.txt` | テキストファイル |

---

## Claude Code スキル一覧

このプロジェクトでは 5 つの Claude Code スキルが利用できます。

### /doc-to-slide --- スライド自動生成（メインスキル）

原稿ファイルを読み取り、スライドを自動生成します。

```
# ファイルを指定して生成
> /doc-to-slide docs/sample-source.md
> /doc-to-slide path/to/my-document.md

# トピックだけ指定して生成することも可能
> /doc-to-slide 機械学習の基礎と応用事例
```

**処理の流れ:**

1. 原稿を読み込んで内容を分析
2. プレゼンの目的を自動判定（research / business / technical / educational）
3. 目的に応じたスライド構成を設計（12-20枚）
4. 各スライドに最適なレイアウトパターン（63種類から）を選択
5. 必要に応じて SVG 図表を自動生成
6. `slides/` ディレクトリにスライドファイルを出力

**プレゼン目的ごとのスライド構成例:**

| 目的 | 枚数目安 | 構成 |
|------|---------|------|
| research | 12-18枚 | タイトル → 背景 → 研究課題 → 手法 → 結果 → 考察 → 貢献 → 参考文献 |
| business | 10-16枚 | タイトル → 課題 → 提案 → 市場 → 指標 → 事例 → 価格 → ロードマップ |
| technical | 12-20枚 | タイトル → 概要 → アーキテクチャ → コンポーネント → 性能 → デプロイ |
| educational | 10-16枚 | タイトル → 学習目標 → 背景 → 概念説明 → 演習 → まとめ |

### /slide-style-rector --- スタイルチェックと修正

生成されたスライドがスタイルガイドに準拠しているかチェックし、違反箇所を自動修正します。

```
> /slide-style-rector slides/my-slide.md
```

**チェック項目:** カラーパレット、タイトルのコロン、感嘆符、装飾絵文字、アクセントカラー数、箇条書き数、Tailwind CDN、数式設定、見出し階層、div 内空行ルール

### /layout-fix --- レイアウト修正

コンテンツが溢れるなどのレイアウト問題を検出し、修正します。

```
> /layout-fix slides/my-slide.md
```

**修正対象:** コンテンツの高さ超過、画像サイズ、グリッドの隙間不足、テキスト折り返し、カラム数過多

### /svg-creator --- 技術系 SVG 図表の生成

アーキテクチャ図やフローチャートなどの技術系図表を SVG で生成します。

```
> /svg-creator マイクロサービスのアーキテクチャ図
> /svg-creator ユーザー登録フローのシーケンス図
```

### /image-creator --- ビジネス図表の生成

SWOT 分析やファネル図などのビジネス図表を SVG で生成します。

```
> /image-creator SWOT分析
> /image-creator 売上推移の棒グラフ
> /image-creator 組織図
```

---

## npm Scripts 一覧

### プレビュー

```bash
# slides/ 以下のすべてのスライドをプレビュー
npm run preview

# 特定のファイルだけプレビュー（生成後の確認に使う）
npm run preview:file -- slides/my-slide.md

# レイアウトパターンカタログをプレビュー
npm run example

# ファイル変更を監視して自動リビルド
npm run watch
```

### エクスポート

```bash
# --- 一括出力（slides/ 以下すべて） ---
npm run build:html     # HTML → output/
npm run build:pdf      # PDF  → output/
npm run build:pptx     # PPTX → output/

# --- 個別出力 ---
npm run export:pdf -- slides/my-slide.md -o output/my-slide.pdf
npm run export:html -- slides/my-slide.md -o output/my-slide.html
```

---

## ディレクトリ構造

```
MarpSlide/
├── slides/              # 生成されたスライドファイル (.md)
│   ├── template.md      #   生成時に参照されるテンプレート
│   └── example.md       #   63パターンのレイアウトカタログ
├── docs/                # ドキュメント・原稿
│   ├── sample-source.md #   サンプル原稿（チュートリアル用）
│   ├── style-guide.md   #   デザインルール・カラーパレット
│   └── pattern-guide.md #   パターン選択ガイド
├── themes/              # カスタム Marp テーマ
│   └── custom.css       #   プロジェクト共通テーマ
├── assets/svg/          # 自動生成された SVG 図表
├── output/              # エクスポート成果物（gitignore 対象）
├── .claude/commands/    # Claude Code スキル定義
├── marp.config.mjs      # Marp 設定ファイル
└── package.json         # npm 設定・スクリプト
```

---

## レイアウトパターン（リファレンス）

`/doc-to-slide` はスライドの内容に応じて、以下の 63 パターンから最適なレイアウトを自動で選択します。
どのようなパターンがあるかは `npm run example` で確認できます。

| # | カテゴリ | パターン数 | 用途 |
|---|---------|-----------|------|
| 1 | タイトル・セクション | 6 | 表紙、セクション区切り、目次 |
| 2 | カラム配置 | 8 | 2列・3列・4列、グリッドレイアウト |
| 3 | リスト・プロセス | 6 | 手順、タイムライン、チェックリスト |
| 4 | パネル・カード | 6 | KPI表示、引用、警告、比較表 |
| 5 | 背景・画像 | 5 | 画像+テキスト、アイコングリッド |
| 6 | 数式・強調 | 6 | 数式、Before/After、大文字メッセージ |
| 7 | コード・技術系 | 4 | コードブロック、ターミナル、API仕様 |
| 8 | 上級・組み合わせ | 5 | ダッシュボード、Q&A、参考文献 |
| 9 | 研究・学術 | 6 | リサーチクエスチョン、実験設定、結果 |
| 10 | ビジネス・営業 | 11 | ファネル、SWOT、価格表、ロードマップ |

パターン選択の判断基準は [docs/pattern-guide.md](docs/pattern-guide.md) を参照してください。

---

## カラーパレット

すべてのスライドで統一的に使用されるカラーパレットです。

| 名前 | HEX | Tailwind クラス | 用途 |
|------|------|----------------|------|
| Navy | `#1B4565` | `text-navy` / `bg-navy` | 見出し、主要アクセント |
| Navy Light | `#2A5F8F` | `text-navy-light` / `bg-navy-light` | 副次的要素 |
| Teal | `#3E9BA4` | `text-teal` / `bg-teal` | ハイライト、データ |
| Teal Light | `#5BC0C8` | `text-teal-light` / `bg-teal-light` | バッジ、軽いアクセント |
| Slate | `#64748B` | `text-slate` / `bg-slate` | ラベル、補助テキスト |
| Dark Gray | `#334155` | `text-gray-700` | 本文テキスト |
| Light Gray | `#94A3B8` | `text-gray-400` | キャプション、罫線 |
| Warm Gray | `#F5F5F0` | `bg-gray-warm` | パネル背景 |

---

## スライドを手動で編集する場合

自動生成されたスライドを手動で調整したい場合のために、基本的な構文をまとめます。

### スライドの区切り

`---`（水平線）でスライドを区切ります。

```markdown
## スライド 1

ここは最初のスライドの内容

---

## スライド 2

ここは次のスライドの内容
```

### frontmatter（先頭の設定ブロック）

```yaml
---
marp: true          # Marp を有効化（必須）
math: katex         # 数式レンダリングを有効化（必須）
paginate: true      # ページ番号を表示
header: "タイトル"   # 全スライド共通のヘッダー
footer: "著者 -- 日付" # 全スライド共通のフッター
---
```

### 個別スライドのディレクティブ

HTML コメントで個別スライドのスタイルを制御できます。
先頭に `_` を付けるとそのスライドだけに適用されます。

```markdown
<!-- _backgroundColor: #1B4565 -->  <!-- 背景色を Navy に -->
<!-- _color: #ffffff -->            <!-- 文字色を白に -->
<!-- _paginate: false -->           <!-- ページ番号を非表示 -->
<!-- _header: "" -->                <!-- ヘッダーを非表示 -->
<!-- _footer: "" -->                <!-- フッターを非表示 -->
```

### div 内の Markdown --- 空行ルール

`<div>` の中に Markdown を書く場合、**開始タグの直後と終了タグの直前に空行**を入れてください。
空行がないと Markdown が正しく処理されません。

```markdown
<!-- 正しい書き方 -->
<div class="bg-gray-warm p-4">

- リスト項目 1
- リスト項目 2

</div>

<!-- 間違い --- Markdown が処理されない -->
<div class="bg-gray-warm p-4">
- リスト項目 1
- リスト項目 2
</div>
```

### 数式（KaTeX）

```markdown
<!-- インライン数式 -->
エネルギーは $E = mc^2$ で表される。

<!-- ブロック数式 -->
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

> HTML タグ（`<div>`, `<p>`, `<td>` など）の内部では `$...$` が処理されません。
> 数式を含む内容は `<div>` タグの後に空行を入れて Markdown 段落として記述してください。

---

## スタイルルール一覧

自動生成時に適用されるルールの一覧です。手動編集の際もこれらに従ってください。

| ルール | 内容 |
|--------|------|
| アクセント色 | 1スライドに最大2色（通常 Navy + Teal） |
| タイトル | コロン（`:`）を使わない |
| 文体 | 感嘆符（`!`）を使わない |
| 絵文字 | 装飾的な絵文字を使わない |
| 箇条書き | 1スライドあたり最大5個 |
| スライド枚数 | 1プレゼンにつき 12-20枚が目安 |
| SVG | `assets/svg/` に保存、最大 600x400px |
| div + Markdown | 開始/終了タグ前後に空行を入れる |

詳細は [docs/style-guide.md](docs/style-guide.md) を参照してください。

---

## トラブルシューティング

### プレビューが開かない

```bash
# ポートが使用中の場合はプロセスを確認
lsof -i :8080
```

### Tailwind CSS のスタイルが効かない

- `<script src="https://cdn.tailwindcss.com"></script>` がスライドファイルに含まれているか確認
- `preflight: false` が設定されているか確認
- インターネット接続があるか確認（CDN のため）

### 数式が表示されない

- frontmatter に `math: katex` があるか確認
- `<div>` の中に直接 `$...$` を書いていないか確認（空行で区切る）

### PDF で Tailwind のスタイルが崩れる

Tailwind CDN は PDF 出力時に効かない場合があります。
その場合は HTML 出力してブラウザの印刷機能で PDF 化してください。

```bash
npm run export:html -- slides/my-slide.md -o output/my-slide.html
# ブラウザで開いて Ctrl+P (Cmd+P) → PDF として保存
```

---

## 技術スタック

- [Marp](https://marp.app/) --- Markdown からスライド生成
- [Tailwind CSS v3](https://tailwindcss.com/) --- ユーティリティファースト CSS（CDN）
- [KaTeX](https://katex.org/) --- 数式レンダリング
- [Claude Code](https://claude.com/claude-code) --- スライド自動生成
