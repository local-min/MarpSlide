# Marp + Tailwind CSS スライド作成ワークフロー構築計画

## Context

Qiita記事（hirokidaichi氏）で紹介されている「Marp + Tailwind CSS + Claude Codeスキル」によるスライド作成ワークフローを再現する。追加要件として、KaTeX数式サポートを含める。プロジェクトは空の状態からスタートする。

## ディレクトリ構成

```
MarpSlide/
├── .claude/
│   ├── settings.local.json       (既存)
│   ├── launch.json               (dev serverプレビュー用)
│   └── commands/
│       ├── slide-style-rector.md (スタイル整合性チェック)
│       ├── layout-fix.md         (レイアウト修正)
│       └── svg-creator.md        (SVG図表生成)
├── docs/
│   ├── style-guide.md            (カラーパレット・タイポグラフィ・ルール)
│   └── implementation-plan.md    (この実装プラン)
├── slides/
│   ├── example.md                (レイアウトパターンカタログ 40種以上)
│   └── template.md               (新規プレゼン用テンプレート)
├── themes/
│   └── custom.css                (カスタムMarpテーマ / Tailwind CDNフォールバック)
├── assets/svg/                   (SVG図表格納)
├── output/                       (ビルド成果物、gitignore対象)
├── CLAUDE.md
├── README.md                     (プロジェクト説明・クイックスタート)
├── package.json
├── marp.config.mjs
└── .gitignore
```

## 実装ステップ

### Step 1: package.json 作成

`/Users/taka/Documents/Project/MarpSlide/package.json`

- 依存: `@marp-team/marp-cli`, `@marp-team/marp-core`
- scripts:
  - `preview`: `marp -p --html slides/` (ブラウザプレビュー、ポート8080)
  - `preview:file`: `marp -p --html` (単一ファイル指定)
  - `watch`: `marp -w --html slides/`
  - `build:pdf`: `marp --html --pdf --allow-local-files -o output/ slides/`
  - `build:html`: `marp --html -o output/ slides/`
  - `build:pptx`: `marp --html --pptx --allow-local-files -o output/ slides/`
  - `example`: `marp -p --html slides/example.md`

### Step 2: npm install 実行

### Step 3: marp.config.mjs 作成

`/Users/taka/Documents/Project/MarpSlide/marp.config.mjs`

- engine: `@marp-team/marp-core` (KaTeX/emoji/auto-scaling対応)
- `html: true` (Tailwind CDNスクリプトタグに必要)
- `options.math: 'katex'` (デフォルト数式エンジン)

### Step 4: .gitignore, output/.gitkeep 作成

### Step 5: themes/custom.css 作成

Marpカスタムテーマ。プロジェクトカラー変数とTailwind CDNが使えない環境用のユーティリティクラスを定義。

### Step 6: docs/style-guide.md 作成

記事のスタイルガイドに準拠:
- **カラーパレット**: Navy(#1B4565), Teal(#3E9BA4), Slate(#64748B), 各バリアント
- **タイポグラフィ**: h1 bold 1.8-2.2rem, body 1.0rem, 日本語フォント対応
- **ライティングルール**: タイトルにコロン不使用、感嘆符禁止、装飾絵文字禁止
- **レイアウトルール**: 16:9、パディング40px以上、1スライド最大5箇条書き
- **KaTeX規約**: inline `$...$`, block `$$...$$`, マクロは`\gdef`

### Step 7: slides/template.md 作成

Tailwind CDNボイラープレート + カスタムカラー設定 + KaTeX有効化を含むスターターテンプレート。新規プレゼンはこのファイルをコピーして開始。

### Step 8: 動作確認チェックポイント

`npm run preview:file -- slides/template.md` でTailwind・KaTeX・Marpの統合動作を確認。

### Step 9: slides/example.md 作成 (最大のファイル)

8カテゴリ・40種以上のレイアウトカタログ:

1. **タイトル・セクション** (6種): 中央配置タイトル、左寄せ+アクセントバー、セクション区切り(Navy背景)、セクション区切り(ミニマル)、目次/アジェンダ、サブタイトル付きタイトル
2. **カラム配置** (8種): 2列均等、2列非対称(2:1)、2列非対称(1:2)、3列均等、4列コンパクト、2x2グリッド、3x2グリッド、コードブロック付きカラム
3. **リスト・プロセス** (6種): 番号付きステップ(縦)、番号付きステップ(横)、タイムライン(左寄せ)、チェックリスト、定義リスト、フローチャート風プロセス
4. **パネル・カード** (6種): 情報カード、メトリクスカード(3列)、メトリクスカード(4列)、引用/コールアウトパネル、注意/警告ボックス、比較テーブル(styled HTML table)
5. **背景・画像** (5種): テキストオーバーレイ(暗い背景)、画像+テキスト横並び(画像左)、画像+テキスト横並び(画像右)、アイコングリッド(3x2)、フルブリード画像+キャプション
6. **数式・強調** (6種): 大型中央ステートメント、Before/After比較、数式ブロックショーケース、インライン数式+テキスト、数式+図解コンボ(2列)、数式テーブル(変数定義一覧)
7. **コード・技術系** (4種): シンタックスハイライト付きコード、コード+解説の並列表示、ターミナル出力風、API仕様カード
8. **上級・組み合わせ** (5種): ダッシュボードレイアウト(4分割)、まとめ/Takeawayスライド、Q&Aスライド、参考文献/リファレンス、Thank You / エンディング

合計: 46パターン

重要: `<div>`内のMarkdownは前後に空行が必要（Marp/Marpitの仕様）。

### Step 10: CLAUDE.md 作成

プロジェクトルール:
- 新規スライドには必ずTailwind CDNスクリプトブロックを含める
- frontmatterに`marp: true`, `math: katex`を設定
- `docs/style-guide.md`のカラーパレット・ルールに従う
- `slides/example.md`のレイアウトパターンを参照
- `<div>`内Markdownの空行ルール
- アクセントカラーは1スライド最大2色
- SVGは`assets/svg/`に保存、最大600x400px

### Step 11: Claude Codeスキル作成 (.claude/commands/)

**slide-style-rector.md**: スタイルガイドとパターンカタログを読み、対象スライドの違反（パレット外カラー、タイトルのコロン、箇条書き過多等）を検出・修正。

**layout-fix.md**: 対象スライドをHTMLエクスポートし、オーバーフロー・画像サイズ・グリッド溢れ等を検出・修正。

**svg-creator.md**: 説明文からプロジェクトカラーパレット準拠のSVG図表を生成し`assets/svg/`に保存。

### Step 12: README.md 作成

`/Users/taka/Documents/Project/MarpSlide/README.md`

- プロジェクト概要（Marp + Tailwind CSS + KaTeXスライドワークフロー）
- クイックスタート: `npm install` → `npm run example`
- 新規プレゼン作成方法: `slides/template.md` をコピー
- npm scriptsの一覧表
- `docs/style-guide.md` への参照
- Claude Codeスキル（`.claude/commands/`）の説明

### Step 13: docs/implementation-plan.md に実装プランを保存

この計画ファイルの内容を `docs/implementation-plan.md` にコピーして永続保存。

### Step 14: .claude/launch.json 作成

```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "marp-preview",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["marp", "-p", "--html", "slides/"],
      "port": 8080
    },
    {
      "name": "marp-example",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["marp", "-p", "--html", "slides/example.md"],
      "port": 8080
    }
  ]
}
```

### Step 15: 最終動作確認

`npm run example` でレイアウトパターンカタログ全体をプレビューし、Tailwind CSS・KaTeX数式・各レイアウトの描画を確認。

## 重要な技術的注意点

- **Tailwind CDN + PDF出力**: ヘッドレスChromeでのスクリプト実行タイミングの問題がありうる。問題発生時はHTMLエクスポート→ブラウザ印刷で代替。
- **`preflight: false`**: Tailwindのリセットを無効化しMarpテーマのデフォルトスタイルを保持（必須）。
- **KaTeXフォント**: jsDelivr CDNからロード。オフライン環境ではローカルフォント設定が必要。

## 検証方法

1. `npm run preview:file -- slides/template.md` → Tailwindクラス・KaTeX数式が正しく描画されるか確認
2. `npm run example` → 全46パターンが正しくレンダリングされるか確認
3. `npm run build:pdf` → PDF出力でTailwindスタイルが適用されるか確認
4. Claude Codeスキルの動作: `/slide-style-rector slides/template.md` 等で実行確認
