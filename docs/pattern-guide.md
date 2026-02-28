# パターン選択ガイド

slides/example.md に収録されている63パターンを、用途・目的別に分類したガイド。
スライド作成時やドキュメント変換時にどのパターンを選ぶべきかの判断基準を示す。

## 0. スライドデザイン原則

パターンを使う前に、以下の原則を理解しておく。

### アクションタイトルの原則

すべてのコンテンツスライドの h2 見出しは**アクションタイトル**（結論・示唆を完全な文で記したもの）とする。

| NG（ラベル型） | OK（アクションタイトル型） |
|:---|:---|
| 調査結果 | リモートワークは個人作業の生産性を7pt向上させた |
| パフォーマンス比較 | 最適化によりレスポンスタイムが86%短縮された |
| 市場分析 | 自社製品は高品質・大衆市場の象限を占めている |

聴衆がアクションタイトルだけを通し読みしてもストーリー全体が伝わるようにする。

### スペーシングの原則

- h2 見出し直後のコンテンツ: `mt-4`（16px）を標準とする
- カード内パディング: `p-4` または `p-5`（16-20px）を標準とする
- カラム間ガター: 2列は `gap-6`（24px）、3-4列は `gap-4`（16px）
- 要素間の垂直スペース: `space-y-3` ～ `space-y-4`（12-16px）

### パターン組み合わせのルール

- 同じパターンを連続 2 回以上使わない
- セクション区切り（Pattern 3/4）を論理的な区切りに必ず挿入する
- データ重視スライドの後にはテキスト系スライドを置き、視覚的リズムをつける

## 1. コンテンツの種類からパターンを選ぶ

### テキスト中心

| コンテンツ | 推奨パターン | # |
|-----------|-------------|---|
| 単一メッセージ/主張 | Large Centered Statement | 32 |
| 定義や用語説明 | Definition List | 19 |
| 箇条書き（5項目以内） | 通常Markdown / Two Column | 7 |
| 長い説明+補足 | Asymmetric Column (2:1) | 8 |
| 引用/名言 | Quote Panel | 24 |
| 注意事項/警告 | Warning/Note Box | 25 |
| 価値提案 | Value Proposition | 63 |

### 数値・データ中心

| コンテンツ | 推奨パターン | # |
|-----------|-------------|---|
| KPI 3つ | Metric Cards 3-col | 22 |
| KPI 4つ | Metric Cards 4-col | 23 |
| Before/After比較 | Before/After | 33 |
| 多項目比較 | Comparison Table | 26 |
| ダッシュボード風 | Dashboard Layout | 42 |
| ROI/財務要約 | Financial Summary | 56 |
| 統計結果（p値付き） | Results Table | 50 |

### プロセス・フロー

| コンテンツ | 推奨パターン | # |
|-----------|-------------|---|
| 段階的手順（4以下） | Numbered Steps Vertical | 15 |
| パイプライン/水平フロー | Numbered Steps Horizontal | 16 |
| 時系列（4ポイント） | Timeline | 17 |
| 分岐プロセス | Flowchart Process | 20 |
| 横方向ロードマップ | Horizontal Roadmap | 59 |
| 進捗チェック | Checklist | 18 |
| セールスファネル | Sales Funnel | 53 |

### 画像・図表統合

| コンテンツ | 推奨パターン | # |
|-----------|-------------|---|
| 図+説明（図左） | Image+Text Left | 28 |
| 図+説明（図右） | Image+Text Right | 29 |
| 全幅画像 | Full-bleed Image | 31 |
| 数式+図 | Math+Diagram Combo | 36 |
| アイコン一覧 | Icon Grid | 30 |
| ロゴ/パートナー | Logo Grid | 62 |

### コード・技術系

| コンテンツ | 推奨パターン | # |
|-----------|-------------|---|
| 設定ファイル例示 | Syntax Code | 38 |
| コード+解説 | Code+Explanation | 39 |
| ターミナル操作 | Terminal Output | 40 |
| API仕様 | API Card | 41 |
| アルゴリズム+コード | Code Block Column | 14 |

### 構造・分析

| コンテンツ | 推奨パターン | # |
|-----------|-------------|---|
| SWOT分析 | SWOT Analysis | 58 |
| 市場ポジショニング | Market Matrix | 57 |
| チーム紹介 | Team Grid | 60 |
| 研究課題/仮説 | Research Question | 47 |
| 実験手法 | Methodology Overview | 48 |

## 2. プレゼン目的からスライド構成を選ぶ

### Research / 学術発表 (推奨12-18枚)

| 順序 | スライド内容 | 推奨パターン |
|------|------------|-------------|
| 1 | タイトル | 1 (Centered) or 6 (Subtitle) |
| 2 | 研究背景/動機 | 8 (Asymmetric 2:1) or 24 (Quote) |
| 3 | 研究課題 | 47 (Research Question) |
| 4 | 関連研究 | 51 (Literature Review) |
| 5 | セクション区切り | 3 (Section Divider Navy) |
| 6 | 手法概要 | 48 (Methodology) |
| 7 | 実験設定 | 49 (Experimental Setup) |
| 8 | セクション区切り | 3 |
| 9-10 | 結果 | 50 (Results Table), 22 (Metrics), 33 (Before/After) |
| 11 | 考察 | 7 (Two Column) or 8 (Asymmetric) |
| 12 | 貢献 | 52 (Contributions) |
| 13 | まとめ | 43 (Takeaway) |
| 14 | 参考文献 | 45 (References) |
| 15 | Q&A | 44 (Q&A) |

### Business / 営業・提案 (推奨10-16枚)

| 順序 | スライド内容 | 推奨パターン |
|------|------------|-------------|
| 1 | タイトル | 1 or 2 |
| 2 | 課題提起 | 32 (Large Statement) |
| 3 | 解決策/価値提案 | 63 (Value Proposition) |
| 4 | 製品/サービス概要 | 10 (Three Columns) or 21 (Info Cards) |
| 5 | 市場ポジション | 57 (Market Matrix) |
| 6 | 実績/数値 | 22 (Metric Cards) or 56 (Financial Summary) |
| 7 | 顧客の声 | 55 (Testimonial) |
| 8 | 価格 | 54 (Pricing Table) |
| 9 | ファネル/収益 | 53 (Sales Funnel) |
| 10 | ロードマップ | 59 (Horizontal Roadmap) |
| 11 | チーム | 60 (Team Grid) |
| 12 | パートナー | 62 (Logo Grid) |
| 13 | CTA | 61 (Call to Action) |
| 14 | Thank You | 46 |

### Technical / 技術説明 (推奨12-20枚)

| 順序 | スライド内容 | 推奨パターン |
|------|------------|-------------|
| 1 | タイトル | 1 or 2 |
| 2 | アジェンダ | 5 (Agenda) |
| 3 | 概要 | 32 (Large Statement) or 8 (Asymmetric) |
| 4 | アーキテクチャ | 28 (Image+Text) with SVG |
| 5-8 | コンポーネント詳細 | 14, 38, 39, 41 |
| 9 | パフォーマンス | 23 (Metrics) or 42 (Dashboard) |
| 10 | デプロイ | 40 (Terminal) or 16 (Horizontal Steps) |
| 11 | まとめ | 43 (Takeaway) |
| 12 | Q&A | 44 |

### Educational / 教育 (推奨10-16枚)

| 順序 | スライド内容 | 推奨パターン |
|------|------------|-------------|
| 1 | タイトル | 1 or 6 |
| 2 | 学習目標 | 15 (Numbered Steps) or 18 (Checklist) |
| 3 | 背景知識 | 19 (Definition List) |
| 4-8 | 概念説明 | 7, 34, 35, 36, 28 |
| 9 | 例題 | 14 (Code Column) or 39 (Code+Explanation) |
| 10 | まとめ | 43 (Takeaway) |
| 11 | 参考資料 | 45 (References) |

## 3. SVG図表の自動生成判断基準

以下の条件に当てはまる場合、SVG図表を自動生成する。

| コンテンツの特徴 | 生成するSVG種類 | 使用スキル |
|----------------|---------------|-----------|
| アーキテクチャの説明 | アーキテクチャ図 | svg-creator |
| フロー/判定プロセス | フローチャート | svg-creator |
| 時系列のやり取り | シーケンス図 | svg-creator |
| 並列比較 | 比較図 | svg-creator |
| 階層/分類 | ツリー図 | svg-creator |
| ファネル/パイプライン数値 | ファネル図 | image-creator |
| 強み/弱み分析 | SWOT図 | image-creator |
| 2軸ポジショニング | マトリクス図 | image-creator |
| 組織/チーム構造 | 組織図 | image-creator |
| フェーズ付きロードマップ | ロードマップ図 | image-creator |
| 3点以上の数値データ | 棒グラフ/円グラフ | image-creator |
| 時系列数値データ | 折れ線グラフ | image-creator |
| 集合の重なり | ベン図 | image-creator |
| 循環プロセス | サイクル図 | image-creator |
| 段階的構造 | ピラミッド図 | image-creator |

### SVG チャートのデザインルール

SVG 図表を生成する際は以下のルールに従う:

- **推論ベースのタイトル**: 「年間売上チャート」→「売上は前年比 34% 増加」
- **グリッド線は原則削除**: データラベルで代替する
- **チャート外枠は描かない**
- **主要データ系列**: Teal (`#3E9BA4`) で強調、それ以外は Light Gray (`#94A3B8`)
- **データラベル**: バー/ポイントの近くに直接配置（凡例に頼らない）
- **横棒グラフ**: 値の大きい順にソート
- **フォント**: `'Helvetica Neue', Arial, sans-serif`
- **最大サイズ**: 600 x 400px
