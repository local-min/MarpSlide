---
marp: true
math: katex
paginate: true
header: "リモートワーク生産性調査"
footer: "2026"
---

<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        navy: '#1B4565',
        'navy-light': '#2A5F8F',
        teal: '#3E9BA4',
        'teal-light': '#5BC0C8',
        slate: '#64748B',
        'gray-warm': '#F5F5F0',
      }
    }
  }
}
</script>

<!-- Slide 1: Title (Pattern 1) -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->
<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-5xl font-bold mb-4">リモートワークの生産性に関する調査報告</h1>
  <p class="text-xl text-gray-300 mb-8">IT企業50社・2,000名を対象とした実態調査</p>
  <p class="text-sm text-gray-400">2026.02.26</p>
</div>

---

<!-- Slide 2: Background (Pattern 8 - Asymmetric 2:1) -->

## 調査の背景

<div class="grid grid-cols-3 gap-6 mt-4">
<div class="col-span-2">

2020年以降、リモートワークが急速に普及し、現在では恒常的な働き方として定着しつつある。

しかし、リモートワークが生産性に与える影響については**肯定的な見解と否定的な見解の両方**が存在しており、統一的な結論は得られていない。

本調査では、国内 IT 企業 50 社・従業員 2,000 名を対象にリモートワークと生産性の関係を多角的に分析した。

</div>
<div class="bg-gray-warm rounded-lg p-4">

### 調査の問い

リモートワークは本当に生産性を向上させるのか、それとも低下させるのか

</div>
</div>

---

<!-- Slide 3: Survey Overview (Pattern 49 - Experimental Setup) -->

## 調査概要

<div class="grid grid-cols-3 gap-4 mt-4">
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="font-semibold text-navy text-sm mb-3 border-b border-gray-300 pb-2">調査設計</p>
    <div class="space-y-1 text-xs text-slate">
      <p>期間: 2025年6月 -- 9月</p>
      <p>対象: IT企業 50社</p>
      <p>回答者: 2,000名</p>
      <p>方法: 混合研究法</p>
    </div>
  </div>
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="font-semibold text-navy text-sm mb-3 border-b border-gray-300 pb-2">データ収集</p>
    <div class="space-y-1 text-xs text-slate">
      <p>オンラインアンケート</p>
      <p>半構造化インタビュー</p>
      <p>インタビュー: 30名</p>
      <p>自由記述あり</p>
    </div>
  </div>
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="font-semibold text-navy text-sm mb-3 border-b border-gray-300 pb-2">測定指標</p>
    <div class="space-y-1 text-xs text-slate">
      <p>タスク完了率</p>
      <p>1日あたり集中時間</p>
      <p>会議時間</p>
      <p>主観的満足度</p>
    </div>
  </div>
</div>

---

<!-- Slide 4: Section Divider (Pattern 3) -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-6xl font-bold text-teal-light mb-4">01</p>
  <h1 class="text-4xl font-bold">調査結果</h1>
  <p class="text-gray-300 mt-4">生産性指標の変化と職種別の差異</p>
</div>

---

<!-- Slide 5: Productivity Metrics (Pattern 26 - Comparison Table) -->

## 生産性指標の変化

<div class="mt-4">
<table class="w-full text-sm">
  <thead>
    <tr class="bg-navy text-white">
      <th class="p-3 text-left rounded-tl-lg">指標</th>
      <th class="p-3 text-center">オフィス勤務</th>
      <th class="p-3 text-center">リモートワーク</th>
      <th class="p-3 text-center rounded-tr-lg">変化</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white">
      <td class="p-3 text-navy font-medium">タスク完了率</td>
      <td class="p-3 text-center text-slate">78%</td>
      <td class="p-3 text-center text-slate">85%</td>
      <td class="p-3 text-center text-teal font-bold">+7pt</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="p-3 text-navy font-medium">1日あたり集中時間</td>
      <td class="p-3 text-center text-slate">3.2h</td>
      <td class="p-3 text-center text-slate">4.1h</td>
      <td class="p-3 text-center text-teal font-bold">+0.9h</td>
    </tr>
    <tr class="bg-white">
      <td class="p-3 text-navy font-medium">会議時間</td>
      <td class="p-3 text-center text-slate">2.5h</td>
      <td class="p-3 text-center text-slate">3.0h</td>
      <td class="p-3 text-center text-gray-500">+0.5h</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="p-3 text-navy font-medium rounded-bl-lg">主観的満足度</td>
      <td class="p-3 text-center text-slate">3.4/5</td>
      <td class="p-3 text-center text-slate">4.0/5</td>
      <td class="p-3 text-center text-teal font-bold rounded-br-lg">+0.6</td>
    </tr>
  </tbody>
</table>
</div>

<p class="text-xs text-gray-400 mt-4">全体としてタスク完了率と集中時間が向上。一方、会議時間も増加</p>

---

<!-- Slide 6: By Job Type (Pattern 33 - Before/After + SVG) -->

## 職種別タスク完了率の変化

<div class="grid grid-cols-2 gap-6 mt-2">
  <div>

![職種別タスク完了率の変化 w:520](./assets/svg/job-type-productivity.svg)

  </div>
  <div class="space-y-3 mt-2">
    <div class="border-t-4 border-navy pt-3">
      <h3 class="font-semibold text-navy text-sm">エンジニア職 +12pt</h3>
      <p class="text-xs text-slate">集中を要するコーディング作業で効果が顕著</p>
    </div>
    <div class="border-t-4 border-teal pt-3">
      <h3 class="font-semibold text-teal text-sm">営業職 +5pt</h3>
      <p class="text-xs text-slate">移動時間の削減が主因</p>
    </div>
    <div class="border-t-4 border-teal-light pt-3">
      <h3 class="font-semibold text-slate text-sm">企画・マーケティング職 +3pt</h3>
      <p class="text-xs text-slate">ブレインストーミングの質低下を指摘する声あり</p>
    </div>
    <div class="border-t-4 border-gray-400 pt-3">
      <h3 class="font-semibold text-gray-500 text-sm">管理職 -2pt</h3>
      <p class="text-xs text-slate">部下の状況把握が困難に</p>
    </div>
  </div>
</div>

---

<!-- Slide 7: Challenges (Pattern 15 - Numbered Steps Vertical) -->

## リモートワークの課題

<div class="space-y-4 mt-4">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">1</div>
    <div>
      <h3 class="font-semibold text-navy">情報共有の不足</h3>
      <p class="text-sm text-slate">雑談や偶発的な会話の減少により、非公式な情報伝達が困難に</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">2</div>
    <div>
      <h3 class="font-semibold text-navy">オンボーディングの困難</h3>
      <p class="text-sm text-slate">新入社員や若手社員が組織文化を学ぶ機会の減少</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">3</div>
    <div>
      <h3 class="font-semibold text-navy">チーム一体感の希薄化</h3>
      <p class="text-sm text-slate">帰属意識の低下と組織への愛着の減退</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">4</div>
    <div>
      <h3 class="font-semibold text-navy">ワークライフバランスの境界</h3>
      <p class="text-sm text-slate">仕事とプライベートの曖昧さ、長時間労働の傾向</p>
    </div>
  </div>
</div>

---

<!-- Slide 8: Section Divider (Pattern 4 - Minimal) -->

<div class="flex flex-col justify-center h-full">
  <h1 class="text-4xl font-bold text-navy mb-4">考察と提言</h1>
  <div class="w-24 h-1 bg-teal"></div>
  <p class="text-slate mt-6">調査結果から導かれる示唆</p>
</div>

---

<!-- Slide 9: Discussion - Individual vs Team (Pattern 7 - Two Columns) -->

## 個人作業 vs チーム協働

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 個人の集中作業

リモートワークは**生産性を向上**させる

- タスク完了率が全体で +7pt
- 集中時間が +0.9h/日 増加
- 通勤時間の削減による余裕

</div>
<div>

### チームの協働作業

リモートワークは**課題を抱える**

- 会議時間が +0.5h/日 増加
- 暗黙知の共有が困難
- 偶発的なアイデア創出の減少

</div>
</div>

<div class="bg-gray-warm rounded-lg p-4 mt-4">

**結論** --- 一律のリモートワーク方針ではなく、職種や業務特性に応じたハイブリッド型が最も効果的

</div>

---

<!-- Slide 10: Job Type Insights (Pattern 22 - Metric Cards 3-col) -->

## 職種特性による最適な勤務形態

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-white rounded-lg shadow p-6 text-center border border-gray-200">
    <p class="text-4xl font-bold text-teal">+12pt</p>
    <p class="text-sm text-navy font-semibold mt-2">エンジニア職</p>
    <p class="text-xs text-slate mt-2">リモート中心が効果的。集中作業の質が大幅に向上</p>
  </div>
  <div class="bg-white rounded-lg shadow p-6 text-center border border-gray-200">
    <p class="text-4xl font-bold text-teal">+5pt</p>
    <p class="text-sm text-navy font-semibold mt-2">営業職</p>
    <p class="text-xs text-slate mt-2">移動削減の恩恵大。対面商談との組み合わせが理想</p>
  </div>
  <div class="bg-white rounded-lg shadow p-6 text-center border border-gray-200">
    <p class="text-4xl font-bold text-gray-500">-2pt</p>
    <p class="text-sm text-navy font-semibold mt-2">管理職</p>
    <p class="text-xs text-slate mt-2">オフィス中心が望ましい。対面での状況把握が重要</p>
  </div>
</div>

---

<!-- Slide 11: Recommendations (Pattern 16 - Numbered Steps Horizontal) -->

## 3つの提言

<div class="flex items-start justify-between mt-8 gap-2">
  <div class="flex-1 text-center">
    <div class="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-2">1</div>
    <p class="font-semibold text-navy text-sm">職種別ハイブリッド制度</p>
    <p class="text-xs text-slate mt-1">職種特性に応じた出社頻度を設定する</p>
  </div>
  <div class="flex-shrink-0 mt-4 text-gray-300">→</div>
  <div class="flex-1 text-center">
    <div class="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-2">2</div>
    <p class="font-semibold text-navy text-sm">意図的な交流機会</p>
    <p class="text-xs text-slate mt-1">チームビルディングデーやバーチャルコーヒーチャット</p>
  </div>
  <div class="flex-shrink-0 mt-4 text-gray-300">→</div>
  <div class="flex-1 text-center">
    <div class="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-2">3</div>
    <p class="font-semibold text-navy text-sm">成果ベースの評価</p>
    <p class="text-xs text-slate mt-1">勤務場所に依存しない公平な評価基準</p>
  </div>
</div>

---

<!-- Slide 12: Takeaway (Pattern 43) -->

## まとめ

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="border-2 border-teal rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-teal mb-2">1</p>
    <p class="text-sm text-navy font-semibold">個人作業は向上</p>
    <p class="text-xs text-slate mt-2">タスク完了率 +7pt、集中時間 +0.9h。リモートワークは個人の生産性を高める</p>
  </div>
  <div class="border-2 border-teal rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-teal mb-2">2</p>
    <p class="text-sm text-navy font-semibold">職種で異なる影響</p>
    <p class="text-xs text-slate mt-2">エンジニア +12pt vs 管理職 -2pt。一律の方針は最適ではない</p>
  </div>
  <div class="border-2 border-teal rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-teal mb-2">3</p>
    <p class="text-sm text-navy font-semibold">ハイブリッドが最適</p>
    <p class="text-xs text-slate mt-2">職種別制度・交流設計・成果評価の3本柱で組織全体の生産性を最大化</p>
  </div>
</div>

---

<!-- Slide 13: References (Pattern 45) -->

## 参考情報

<div class="space-y-3 mt-6 text-sm">
  <div class="flex gap-3">
    <span class="text-teal font-bold flex-shrink-0">[1]</span>
    <span class="text-slate">本調査データ: 国内IT企業50社・従業員2,000名対象アンケート, 2025年6月-9月実施</span>
  </div>
  <div class="flex gap-3">
    <span class="text-teal font-bold flex-shrink-0">[2]</span>
    <span class="text-slate">半構造化インタビュー: 30名（エンジニア・企画・管理職・営業各職種より選出）</span>
  </div>
  <div class="flex gap-3">
    <span class="text-teal font-bold flex-shrink-0">[3]</span>
    <span class="text-slate">測定指標: タスク完了率, 1日あたり集中時間, 会議時間, 主観的満足度（5段階）</span>
  </div>
</div>

---

<!-- Slide 14: Thank You (Pattern 46) -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->
<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-4xl font-bold mb-8">Thank You</h1>
  <div class="w-16 h-1 bg-teal-light mb-8"></div>
  <p class="text-gray-300">Questions and Discussion</p>
</div>
