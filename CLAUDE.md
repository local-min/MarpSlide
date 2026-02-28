# MarpSlide Project

Marp + Tailwind CSS (v3 CDN) + KaTeX によるスライド作成ワークフロー。

## コマンド

- `npm run preview` — slides/ 以下のプレビューサーバー起動
- `npm run preview:file -- <file>` — 単一ファイルのプレビュー
- `npm run example` — レイアウトパターンカタログのプレビュー
- `npm run watch` — ファイル変更の自動検出
- `npm run build:pdf` — slides/ 全体をPDF出力
- `npm run build:html` — slides/ 全体をHTML出力
- `npm run export:pdf -- <file> -o <output>` — 単一ファイルPDF出力

## スライド作成ルール

1. 新規スライドは `slides/template.md` をコピーして作成する
2. frontmatter に `marp: true` と `math: katex` を必ず設定する
3. Tailwind CDN のスクリプトブロック（`preflight: false` + カスタムカラー）を必ず含める
4. `docs/style-guide.md` のカラーパレット・タイポグラフィ・スペーシングルールに従う
5. `slides/example.md` の63パターン（10カテゴリ）からレイアウトを選択して使用する
6. `<div>` 内に Markdown を書く場合、開始タグ直後と終了タグ直前に空行を入れる
7. 1スライドあたりアクセントカラーは最大2色（通常 Navy + Teal）
8. タイトルにコロン（:）を使わない
9. 感嘆符（!）を使わない
10. 装飾的な絵文字を使わない
11. 箇条書きは1スライド最大5個
12. SVG図表は `assets/svg/` に保存、最大 600x400px、プロジェクトカラーパレット使用
13. インライン数式は `$...$`、ブロック数式は `$$...$$`、永続マクロは `\gdef`
14. HTMLタグ（`<p>`, `<td>`, `<div>` 等）の内部では `$...$` 数式が処理されない。数式を含む場合は `<div>` 後に空行を入れてMarkdown段落として記述するか、Markdownテーブルを使用する
15. ドキュメント→スライド変換時は `docs/pattern-guide.md` のマッピングに従いパターンを選択する
16. SVG イラスト/ビジネス図表は `image-creator` スキルの仕様で生成する（技術図表は `svg-creator`）
17. 1プレゼンテーション 12-20枚目安、1スライド = 1メッセージ
18. プレゼン目的（research / business / technical / educational）に応じた構成テンプレートに従う
19. `/doc-to-slide` は入力ドキュメントの情報充足度を診断し、不足情報を対話で補完する（ユーザーはスキップ可能）
20. h2 見出しはアクションタイトル（結論・示唆を完全な文で記す）にする。ラベル型見出しは避ける
21. h2 見出し直後のコンテンツは `mt-4`（16px）の間隔を標準とする
22. テーブルは Navy ヘッダー + Warm Gray ストライプ + 薄いボーダー（`border-b border-gray-100`）スタイルを使う
23. 数値データを示すスライドには出典を明記する（`text-xs text-gray-400`）
24. カード内パディングは `p-4` または `p-5` を標準とする

## カラーパレット

| 名前 | HEX |
|------|-----|
| Navy | `#1B4565` |
| Navy Light | `#2A5F8F` |
| Teal | `#3E9BA4` |
| Teal Light | `#5BC0C8` |
| Slate | `#64748B` |
| Dark Gray | `#334155` |
| Light Gray | `#94A3B8` |
| Warm Gray | `#F5F5F0` |

## 技術的注意点

- `marp.config.mjs` で `html: true` と `math: 'katex'` をグローバル設定済み
- Tailwind CDN は `<script>` タグ経由。`--html` フラグが必須（npm scripts に設定済み）
- PDF出力時に Tailwind が効かない場合は HTML 出力 → ブラウザ印刷で代替
- frontmatter の `math: katex` は VS Code Marp 拡張との互換性のため重複宣言している

## ディレクトリ構造

```
slides/       — スライドファイル (.md)
docs/         — スタイルガイド、パターンガイド、ドキュメント
themes/       — カスタム Marp テーマ (.css)
assets/svg/   — SVG 図表
output/       — ビルド成果物（gitignore 対象）
.claude/commands/ — Claude Code スキル
```
