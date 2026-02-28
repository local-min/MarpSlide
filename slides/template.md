---
marp: true
math: katex
paginate: true
header: "Project Name"
footer: "Author -- 2026"
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

<!-- Slide 1: Title -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->
<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-5xl font-bold mb-6">Presentation Title</h1>
  <p class="text-xl text-gray-300 mb-8">Subtitle describing the topic</p>
  <p class="text-sm text-gray-400">Author Name -- 2026.02.27</p>
</div>

---

## First section has an action title as a complete sentence

Content goes here. Use the body zone to present evidence supporting the action title.

- First point with supporting detail
- Second point with supporting detail
- Third point with supporting detail

<p class="text-xs text-gray-400 mt-4">Source: Data source description, Year</p>

---

## Math Example

The quadratic formula is given by

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

where $a$, $b$, and $c$ are coefficients of $ax^2 + bx + c = 0$.

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->
<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-4xl font-bold mb-8">Thank You</h1>
  <div class="w-16 h-1 bg-teal-light mb-8"></div>
  <p class="text-lg text-gray-300">Questions and Discussion</p>
</div>
