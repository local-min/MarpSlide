---
marp: true
math: katex
paginate: true
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

<!-- _paginate: false -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-4xl font-bold text-navy mb-6">Layout Pattern Catalog</h1>
  <p class="text-lg text-slate">10 Categories / 63 Patterns</p>
  <p class="text-sm text-gray-400 mt-8">Marp + Tailwind CSS + KaTeX</p>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 1</p>
  <h1 class="text-4xl font-bold">Title and Section Layouts</h1>
  <p class="text-gray-300 mt-4">6 patterns</p>
</div>

---

<!-- Pattern 1: Title Slide - Centered -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->
<!-- _paginate: false -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-5xl font-bold mb-6">Presentation Title</h1>
  <p class="text-xl text-gray-300 mb-8">Subtitle describing the topic</p>
  <p class="text-sm text-gray-400">Author Name -- 2026.02.27</p>
</div>

---

<!-- Pattern 2: Title Slide - Left-aligned with accent bar -->
<!-- _paginate: false -->

<div class="flex flex-col justify-center h-full pl-4 border-l-4 border-teal">
  <h1 class="text-4xl font-bold text-navy mb-4">Presentation Title</h1>
  <p class="text-lg text-slate mb-8">A concise subtitle for the presentation</p>
  <div>
    <p class="text-sm text-gray-400">Author Name</p>
    <p class="text-sm text-gray-400">2026.02.27</p>
  </div>
</div>

---

<!-- Pattern 3: Section Divider - Navy -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-6xl font-bold text-teal-light mb-4">01</p>
  <h1 class="text-4xl font-bold">Section Title</h1>
  <p class="text-gray-300 mt-4">Brief description of the section content</p>
</div>

---

<!-- Pattern 4: Section Divider - Minimal -->

<div class="flex flex-col justify-center h-full">
  <h1 class="text-4xl font-bold text-navy mb-4">Section Title</h1>
  <div class="w-24 h-1 bg-teal"></div>
  <p class="text-slate mt-4">Minimal divider with accent rule</p>
</div>

---

<!-- Pattern 5: Agenda / Table of Contents -->

## Agenda

<div class="space-y-3 mt-4">
  <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">1</span>
    <span class="text-navy font-medium">Background and Motivation</span>
  </div>
  <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">2</span>
    <span class="text-navy font-medium">Proposed Approach</span>
  </div>
  <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">3</span>
    <span class="text-navy font-medium">Experimental Results</span>
  </div>
  <div class="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">4</span>
    <span class="text-navy font-medium">Conclusion and Future Work</span>
  </div>
</div>

---

<!-- Pattern 6: Subtitle Title -->
<!-- _paginate: false -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <p class="text-sm font-semibold text-teal uppercase tracking-widest mb-4">Workshop Series 2026</p>
  <h1 class="text-4xl font-bold text-navy mb-4">Main Presentation Title</h1>
  <p class="text-lg text-slate">Supporting context for the audience</p>
  <div class="mt-8 flex gap-6 text-sm text-gray-400">
    <span>Author A</span>
    <span>Author B</span>
    <span>Organization</span>
  </div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 2</p>
  <h1 class="text-4xl font-bold">Column Arrangements</h1>
  <p class="text-gray-300 mt-4">8 patterns</p>
</div>

---

<!-- Pattern 7: Two Columns - Equal -->

## Approach A offers simplicity while Approach B delivers scalability

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### Approach A

- Simpler implementation
- Lower resource usage
- Mature ecosystem

</div>
<div>

### Approach B

- Higher throughput
- Better scalability
- Modern architecture

</div>
</div>

---

<!-- Pattern 8: Two Columns - Asymmetric (2:1) -->

## The system supports rich formatting with a compact reference sidebar

<div class="grid grid-cols-3 gap-6 mt-4">
<div class="col-span-2">

### Main Content Area

This wider column holds the primary explanation. Use it for detailed descriptions, code blocks, or longer text content that needs more horizontal space.

- Supports rich formatting
- Enough room for code snippets
- Accommodates longer explanations

</div>
<div class="bg-gray-warm rounded-lg p-5">

### Key Facts

- **Version** 3.2
- **License** MIT
- **Size** 12KB

</div>
</div>

---

<!-- Pattern 9: Two Columns - Asymmetric (1:2) -->

## The model converged in 45 epochs with batch normalization reducing training time by 35%

<div class="grid grid-cols-3 gap-6 mt-4">
<div class="bg-gray-warm rounded-lg p-5">

### Parameters

- $\alpha = 0.01$
- $\beta = 0.9$
- $\epsilon = 10^{-8}$
- Epochs: 100

</div>
<div class="col-span-2">

### Observations

The model converged after approximately 45 epochs with a final loss of $0.023$. The learning rate schedule proved effective in avoiding local minima.

Performance improved significantly when batch normalization was applied to the hidden layers, reducing training time by approximately 35%.

</div>
</div>

---

<!-- Pattern 10: Three Columns -->

## Three foundational pillars underpin the system architecture

<div class="grid grid-cols-3 gap-6 mt-4">
<div class="text-center">
  <div class="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">A</div>
  <h3 class="font-semibold text-navy mb-2">Performance</h3>
  <p class="text-sm text-slate">Optimized for low latency and high throughput</p>
</div>
<div class="text-center">
  <div class="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">B</div>
  <h3 class="font-semibold text-navy mb-2">Reliability</h3>
  <p class="text-sm text-slate">Built-in redundancy and automatic failover</p>
</div>
<div class="text-center">
  <div class="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">C</div>
  <h3 class="font-semibold text-navy mb-2">Security</h3>
  <p class="text-sm text-slate">End-to-end encryption and access controls</p>
</div>
</div>

---

<!-- Pattern 11: Four Columns - Compact -->

## The stack combines four proven technologies for production readiness

<div class="grid grid-cols-4 gap-4 mt-4">
  <div class="text-center p-5 bg-gray-warm rounded-lg">
    <div class="w-10 h-10 rounded bg-navy text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">FE</div>
    <p class="font-semibold text-navy text-sm">Frontend</p>
    <p class="text-xs text-slate mt-2">React / Next.js</p>
  </div>
  <div class="text-center p-5 bg-gray-warm rounded-lg">
    <div class="w-10 h-10 rounded bg-navy text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">BE</div>
    <p class="font-semibold text-navy text-sm">Backend</p>
    <p class="text-xs text-slate mt-2">Node.js / Go</p>
  </div>
  <div class="text-center p-5 bg-gray-warm rounded-lg">
    <div class="w-10 h-10 rounded bg-navy text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">DB</div>
    <p class="font-semibold text-navy text-sm">Database</p>
    <p class="text-xs text-slate mt-2">PostgreSQL</p>
  </div>
  <div class="text-center p-5 bg-gray-warm rounded-lg">
    <div class="w-10 h-10 rounded bg-navy text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">CL</div>
    <p class="font-semibold text-navy text-sm">Cloud</p>
    <p class="text-xs text-slate mt-2">AWS / GCP</p>
  </div>
</div>

---

<!-- Pattern 12: 2x2 Grid -->

## Impact-effort mapping reveals quick wins in the top-left quadrant

<div class="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
  <div class="bg-gray-warm rounded-lg p-5">
    <h3 class="font-semibold text-navy mb-2">High Impact / Low Effort</h3>
    <p class="text-sm text-slate">Quick wins that deliver significant value with minimal investment</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <h3 class="font-semibold text-navy mb-2">High Impact / High Effort</h3>
    <p class="text-sm text-slate">Strategic initiatives requiring careful planning and resources</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <h3 class="font-semibold text-navy mb-2">Low Impact / Low Effort</h3>
    <p class="text-sm text-slate">Fill-in tasks suitable for spare capacity</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <h3 class="font-semibold text-navy mb-2">Low Impact / High Effort</h3>
    <p class="text-sm text-slate">Candidates for elimination or automation</p>
  </div>
</div>

---

<!-- Pattern 13: 3x2 Grid -->

## Six security capabilities provide enterprise-grade protection

<div class="grid grid-cols-3 grid-rows-2 gap-4 mt-4">
  <div class="bg-gray-warm rounded-lg p-4 text-center">
    <p class="font-semibold text-navy text-sm">Authentication</p>
    <p class="text-xs text-slate mt-2">OAuth 2.0 + SAML</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4 text-center">
    <p class="font-semibold text-navy text-sm">Authorization</p>
    <p class="text-xs text-slate mt-2">RBAC + ABAC</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4 text-center">
    <p class="font-semibold text-navy text-sm">Encryption</p>
    <p class="text-xs text-slate mt-2">AES-256 at rest</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4 text-center">
    <p class="font-semibold text-navy text-sm">Audit Logging</p>
    <p class="text-xs text-slate mt-2">Immutable event stream</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4 text-center">
    <p class="font-semibold text-navy text-sm">Rate Limiting</p>
    <p class="text-xs text-slate mt-2">Token bucket algorithm</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4 text-center">
    <p class="font-semibold text-navy text-sm">Compliance</p>
    <p class="text-xs text-slate mt-2">SOC 2 Type II</p>
  </div>
</div>

---

<!-- Pattern 14: Code Block with Column -->

## Gradient descent converges in O(1/T) with proper learning rate scheduling

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### Algorithm

1. Initialize parameters $\theta_0$
2. Compute gradient $\nabla J(\theta)$
3. Update: $\theta \leftarrow \theta - \alpha \nabla J$
4. Repeat until convergence

The learning rate $\alpha$ controls step size.

</div>
<div>

```python
def gradient_descent(f, grad_f, x0, lr=0.01):
    x = x0
    for _ in range(1000):
        g = grad_f(x)
        x = x - lr * g
        if np.linalg.norm(g) < 1e-6:
            break
    return x
```

</div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 3</p>
  <h1 class="text-4xl font-bold">Lists and Processes</h1>
  <p class="text-gray-300 mt-4">6 patterns</p>
</div>

---

<!-- Pattern 15: Numbered Steps - Vertical -->

## The implementation follows four sequential phases from analysis to deployment

<div class="space-y-3 mt-4">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">1</div>
    <div>
      <h3 class="font-semibold text-navy">Requirements Analysis</h3>
      <p class="text-sm text-slate">Gather and document functional requirements</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">2</div>
    <div>
      <h3 class="font-semibold text-navy">System Design</h3>
      <p class="text-sm text-slate">Architecture and component design</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">3</div>
    <div>
      <h3 class="font-semibold text-navy">Implementation</h3>
      <p class="text-sm text-slate">Code, test, and iterate</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-sm">4</div>
    <div>
      <h3 class="font-semibold text-navy">Deployment</h3>
      <p class="text-sm text-slate">Release and monitor in production</p>
    </div>
  </div>
</div>

---

<!-- Pattern 16: Numbered Steps - Horizontal -->

## Data flows through four stages from ingestion to delivery

<div class="flex items-start justify-between mt-4 gap-2">
  <div class="flex-1 text-center">
    <div class="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-3">1</div>
    <p class="font-semibold text-navy text-sm">Ingest</p>
    <p class="text-xs text-slate mt-2">Collect raw data from sources</p>
  </div>
  <div class="flex-shrink-0 mt-5 text-gray-300 text-lg">&#8594;</div>
  <div class="flex-1 text-center">
    <div class="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-3">2</div>
    <p class="font-semibold text-navy text-sm">Transform</p>
    <p class="text-xs text-slate mt-2">Clean and normalize</p>
  </div>
  <div class="flex-shrink-0 mt-5 text-gray-300 text-lg">&#8594;</div>
  <div class="flex-1 text-center">
    <div class="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-3">3</div>
    <p class="font-semibold text-navy text-sm">Analyze</p>
    <p class="text-xs text-slate mt-2">Apply models and rules</p>
  </div>
  <div class="flex-shrink-0 mt-5 text-gray-300 text-lg">&#8594;</div>
  <div class="flex-1 text-center">
    <div class="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center font-bold mx-auto mb-3">4</div>
    <p class="font-semibold text-navy text-sm">Deliver</p>
    <p class="text-xs text-slate mt-2">Output to dashboards</p>
  </div>
</div>

---

<!-- Pattern 17: Timeline -->

## The project timeline spans four quarters from research to production launch

<div class="mt-4 ml-6 border-l-2 border-teal space-y-4">
  <div class="relative pl-8">
    <div class="absolute -left-2 top-1 w-4 h-4 rounded-full bg-teal"></div>
    <p class="text-xs text-teal font-semibold">2026 Q1</p>
    <h3 class="font-semibold text-navy">Research Phase</h3>
    <p class="text-sm text-slate">Literature review and feasibility study</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2 top-1 w-4 h-4 rounded-full bg-teal"></div>
    <p class="text-xs text-teal font-semibold">2026 Q2</p>
    <h3 class="font-semibold text-navy">Prototype Development</h3>
    <p class="text-sm text-slate">Build and validate core components</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2 top-1 w-4 h-4 rounded-full bg-teal"></div>
    <p class="text-xs text-teal font-semibold">2026 Q3</p>
    <h3 class="font-semibold text-navy">Testing and Refinement</h3>
    <p class="text-sm text-slate">User testing and performance optimization</p>
  </div>
  <div class="relative pl-8">
    <div class="absolute -left-2 top-1 w-4 h-4 rounded-full bg-navy"></div>
    <p class="text-xs text-navy font-semibold">2026 Q4</p>
    <h3 class="font-semibold text-navy">Production Launch</h3>
    <p class="text-sm text-slate">General availability release</p>
  </div>
</div>

---

<!-- Pattern 18: Checklist -->

## Three of five release criteria have been met

<div class="space-y-4 mt-4">
  <div class="flex items-center gap-4">
    <div class="w-6 h-6 rounded border-2 border-teal bg-teal flex items-center justify-center">
      <span class="text-white text-xs font-bold">&#10003;</span>
    </div>
    <span class="text-slate">Unit tests passing with >90% coverage</span>
  </div>
  <div class="flex items-center gap-4">
    <div class="w-6 h-6 rounded border-2 border-teal bg-teal flex items-center justify-center">
      <span class="text-white text-xs font-bold">&#10003;</span>
    </div>
    <span class="text-slate">Integration tests verified on staging</span>
  </div>
  <div class="flex items-center gap-4">
    <div class="w-6 h-6 rounded border-2 border-teal bg-teal flex items-center justify-center">
      <span class="text-white text-xs font-bold">&#10003;</span>
    </div>
    <span class="text-slate">Security audit completed</span>
  </div>
  <div class="flex items-center gap-4">
    <div class="w-6 h-6 rounded border-2 border-gray-300"></div>
    <span class="text-slate">Documentation updated</span>
  </div>
  <div class="flex items-center gap-4">
    <div class="w-6 h-6 rounded border-2 border-gray-300"></div>
    <span class="text-slate">Stakeholder sign-off obtained</span>
  </div>
</div>

---

<!-- Pattern 19: Definition List -->

## Four key metrics define system health and performance targets

<div class="space-y-3 mt-4">
  <div class="border-l-3 border-teal pl-5">
    <p class="font-semibold text-navy">Latency</p>
    <p class="text-sm text-slate mt-1">The time delay between a request and the corresponding response, measured in milliseconds</p>
  </div>
  <div class="border-l-3 border-teal pl-5">
    <p class="font-semibold text-navy">Throughput</p>
    <p class="text-sm text-slate mt-1">The number of operations processed per unit of time, typically measured in requests per second</p>
  </div>
  <div class="border-l-3 border-teal pl-5">
    <p class="font-semibold text-navy">Availability</p>
    <p class="text-sm text-slate mt-1">The proportion of time a system is operational and accessible, expressed as a percentage</p>
  </div>
  <div class="border-l-3 border-teal pl-5">
    <p class="font-semibold text-navy">Durability</p>
    <p class="text-sm text-slate mt-1">The guarantee that stored data will not be lost, often measured in nines (e.g., 99.999999999%)</p>
  </div>
</div>

---

<!-- Pattern 20: Flowchart-style Process -->

## Request routing follows a three-path decision tree based on complexity

<div class="flex flex-col items-center mt-4 space-y-3">
  <div class="bg-navy text-white rounded-lg px-8 py-3 font-semibold text-sm">Start</div>
  <div class="text-gray-300">&#8595;</div>
  <div class="bg-gray-warm border-2 border-teal rounded-lg px-8 py-3 text-sm text-navy font-medium">Evaluate request type</div>
  <div class="flex items-center gap-10 mt-2">
    <div class="text-center">
      <p class="text-xs text-teal font-semibold mb-2">Simple</p>
      <div class="text-gray-300">&#8595;</div>
      <div class="bg-gray-warm rounded-lg px-5 py-3 text-sm text-navy mt-1">Auto-approve</div>
    </div>
    <div class="text-center">
      <p class="text-xs text-teal font-semibold mb-2">Complex</p>
      <div class="text-gray-300">&#8595;</div>
      <div class="bg-gray-warm rounded-lg px-5 py-3 text-sm text-navy mt-1">Manual review</div>
    </div>
    <div class="text-center">
      <p class="text-xs text-teal font-semibold mb-2">Critical</p>
      <div class="text-gray-300">&#8595;</div>
      <div class="bg-gray-warm rounded-lg px-5 py-3 text-sm text-navy mt-1">Committee review</div>
    </div>
  </div>
  <div class="text-gray-300 mt-2">&#8595;</div>
  <div class="bg-navy text-white rounded-lg px-8 py-3 font-semibold text-sm">Complete</div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 4</p>
  <h1 class="text-4xl font-bold">Panel and Card Designs</h1>
  <p class="text-gray-300 mt-4">6 patterns</p>
</div>

---

<!-- Pattern 21: Info Card Panel -->

## Three microservices form the core of the distributed architecture

<div class="grid grid-cols-3 gap-6 mt-4">
  <div class="bg-white border border-gray-200 rounded-lg p-5">
    <div class="w-10 h-10 rounded bg-teal text-white flex items-center justify-center mb-4 font-bold">A</div>
    <h3 class="font-semibold text-navy mb-2">API Gateway</h3>
    <p class="text-sm text-slate">Routes requests, handles authentication, applies rate limiting</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-5">
    <div class="w-10 h-10 rounded bg-teal text-white flex items-center justify-center mb-4 font-bold">B</div>
    <h3 class="font-semibold text-navy mb-2">Service Mesh</h3>
    <p class="text-sm text-slate">Manages service-to-service communication and observability</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-5">
    <div class="w-10 h-10 rounded bg-teal text-white flex items-center justify-center mb-4 font-bold">C</div>
    <h3 class="font-semibold text-navy mb-2">Data Store</h3>
    <p class="text-sm text-slate">Persistent storage with automatic replication and backups</p>
  </div>
</div>

---

<!-- Pattern 22: Metric Cards - 3 columns -->

## All three SLA targets were exceeded in the latest quarter

<div class="grid grid-cols-3 gap-6 mt-4">
  <div class="bg-white rounded-lg shadow-sm p-5 text-center border border-gray-100">
    <p class="text-4xl font-bold text-teal">98.5%</p>
    <p class="text-sm text-slate mt-3">Uptime SLA</p>
  </div>
  <div class="bg-white rounded-lg shadow-sm p-5 text-center border border-gray-100">
    <p class="text-4xl font-bold text-teal">2.3ms</p>
    <p class="text-sm text-slate mt-3">Average Latency</p>
  </div>
  <div class="bg-white rounded-lg shadow-sm p-5 text-center border border-gray-100">
    <p class="text-4xl font-bold text-teal">1.2M</p>
    <p class="text-sm text-slate mt-3">Daily Requests</p>
  </div>
</div>

---

<!-- Pattern 23: Metric Cards - 4 columns -->

## P50 and P95 latencies remain well within target thresholds

<div class="grid grid-cols-4 gap-4 mt-4">
  <div class="bg-gray-warm rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-navy">47ms</p>
    <p class="text-xs text-slate mt-2">P50 Latency</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-navy">124ms</p>
    <p class="text-xs text-slate mt-2">P95 Latency</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-teal">99.97%</p>
    <p class="text-xs text-slate mt-2">Success Rate</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5 text-center">
    <p class="text-3xl font-bold text-teal">3.2K</p>
    <p class="text-xs text-slate mt-2">RPS Peak</p>
  </div>
</div>

---

<!-- Pattern 24: Quote / Callout Panel -->

## Engineering philosophy prioritizes correctness before optimization

<div class="mt-4 border-l-4 border-teal bg-gray-warm rounded-r-lg p-5">
  <p class="text-lg text-navy italic leading-relaxed">"Make it work, make it right, make it fast -- in that order."</p>
  <p class="text-sm text-slate mt-4">-- Kent Beck</p>
</div>

<div class="mt-6">

This principle guides our engineering decisions. We prioritize correctness over premature optimization, building on a foundation that we can refine incrementally.

</div>

---

<!-- Pattern 25: Warning / Note Box -->

## Three types of callouts highlight critical information for developers

<div class="mt-4 space-y-4">
  <div class="bg-blue-50 border-l-4 border-navy rounded-r-lg p-5">
    <p class="font-semibold text-navy text-sm">Note</p>
    <p class="text-sm text-slate mt-1">This feature requires API version 3.0 or later. Earlier versions are not supported.</p>
  </div>
  <div class="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5">
    <p class="font-semibold text-amber-700 text-sm">Warning</p>
    <p class="text-sm text-slate mt-1">Running this migration on production databases will cause temporary downtime. Schedule during a maintenance window.</p>
  </div>
  <div class="bg-teal-50 border-l-4 border-teal rounded-r-lg p-5">
    <p class="font-semibold text-teal text-sm">Tip</p>
    <p class="text-sm text-slate mt-1">Use the <code>--dry-run</code> flag to preview changes before applying them.</p>
  </div>
</div>

---

<!-- Pattern 26: Comparison Table -->

## Enterprise tier provides unlimited resources and dedicated support

<div class="mt-4">
<table class="w-full text-sm">
  <thead>
    <tr class="bg-navy text-white">
      <th class="px-4 py-3 text-left font-semibold">Feature</th>
      <th class="px-4 py-3 text-center font-semibold">Free</th>
      <th class="px-4 py-3 text-center font-semibold">Pro</th>
      <th class="px-4 py-3 text-center font-semibold">Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white border-b border-gray-100">
      <td class="px-4 py-3 text-navy font-medium">Storage</td>
      <td class="px-4 py-3 text-center text-slate">5 GB</td>
      <td class="px-4 py-3 text-center text-slate">100 GB</td>
      <td class="px-4 py-3 text-center text-slate">Unlimited</td>
    </tr>
    <tr class="bg-gray-warm border-b border-gray-100">
      <td class="px-4 py-3 text-navy font-medium">API Calls</td>
      <td class="px-4 py-3 text-center text-slate">1K/day</td>
      <td class="px-4 py-3 text-center text-slate">100K/day</td>
      <td class="px-4 py-3 text-center text-slate">Unlimited</td>
    </tr>
    <tr class="bg-white border-b border-gray-100">
      <td class="px-4 py-3 text-navy font-medium">Support</td>
      <td class="px-4 py-3 text-center text-slate">Community</td>
      <td class="px-4 py-3 text-center text-slate">Email</td>
      <td class="px-4 py-3 text-center text-slate">Dedicated</td>
    </tr>
    <tr class="bg-gray-warm">
      <td class="px-4 py-3 text-navy font-medium">SSO</td>
      <td class="px-4 py-3 text-center text-slate">--</td>
      <td class="px-4 py-3 text-center text-teal font-bold">&#10003;</td>
      <td class="px-4 py-3 text-center text-teal font-bold">&#10003;</td>
    </tr>
  </tbody>
</table>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 5</p>
  <h1 class="text-4xl font-bold">Background and Image Integration</h1>
  <p class="text-gray-300 mt-4">5 patterns</p>
</div>

---

<!-- Pattern 27: Text Overlay on Dark Background -->
<!-- _backgroundColor: #334155 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-end h-full pb-8">
  <div class="bg-black bg-opacity-40 rounded-lg p-5 max-w-lg">
    <h2 class="text-2xl font-bold mb-3">Transforming Data Infrastructure</h2>
    <p class="text-sm text-gray-300">A modern approach to building scalable, resilient data pipelines for real-time analytics</p>
  </div>
</div>

---

<!-- Pattern 28: Image + Text Side-by-side (image left) -->

## The architecture uses four independent layers that scale horizontally

<div class="grid grid-cols-2 gap-6 mt-4 items-center">
<div class="bg-gray-warm rounded-lg p-5 flex items-center justify-center h-64">
  <p class="text-slate text-sm italic">[Architecture Diagram Placeholder]</p>
</div>
<div>

### Components

- **API Gateway** handles routing and auth
- **Service Mesh** provides observability
- **Data Layer** with read replicas
- **Cache** for frequently accessed data

Each component scales independently based on load patterns.

</div>
</div>

---

<!-- Pattern 29: Image + Text Side-by-side (image right) -->

## Optimization improved processing speed by 23% while maintaining O(n) memory

<div class="grid grid-cols-2 gap-6 mt-4 items-center">
<div>

### Key Findings

The experiment demonstrated a $23\%$ improvement in processing speed compared to the baseline.

Memory usage remained stable at $O(n)$ with peak consumption of 2.4GB across all test scenarios.

Error rates dropped below $0.1\%$ after the optimization pass.

</div>
<div class="bg-gray-warm rounded-lg p-5 flex items-center justify-center h-64">
  <p class="text-slate text-sm italic">[Chart Placeholder]</p>
</div>
</div>

---

<!-- Pattern 30: Icon Grid (3x2) -->

## Six core capabilities address the full operational lifecycle

<div class="grid grid-cols-3 grid-rows-2 gap-5 mt-4">
  <div class="flex items-start gap-4 p-4">
    <div class="w-10 h-10 rounded bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal font-bold text-sm">SR</span>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm">Search</p>
      <p class="text-xs text-slate mt-1">Full-text search with fuzzy matching</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4">
    <div class="w-10 h-10 rounded bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal font-bold text-sm">AN</span>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm">Analytics</p>
      <p class="text-xs text-slate mt-1">Real-time dashboards and reports</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4">
    <div class="w-10 h-10 rounded bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal font-bold text-sm">AL</span>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm">Alerts</p>
      <p class="text-xs text-slate mt-1">Configurable threshold notifications</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4">
    <div class="w-10 h-10 rounded bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal font-bold text-sm">IN</span>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm">Integrations</p>
      <p class="text-xs text-slate mt-1">200+ pre-built connectors</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4">
    <div class="w-10 h-10 rounded bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal font-bold text-sm">SC</span>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm">Security</p>
      <p class="text-xs text-slate mt-1">End-to-end encryption</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4">
    <div class="w-10 h-10 rounded bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal font-bold text-sm">PF</span>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm">Performance</p>
      <p class="text-xs text-slate mt-1">Sub-millisecond response times</p>
    </div>
  </div>
</div>

---

<!-- Pattern 31: Full-bleed Image + Caption -->

<div class="flex flex-col h-full">
  <div class="flex-1 bg-gray-warm rounded-lg flex items-center justify-center">
    <p class="text-slate italic">[Full-width Image Placeholder -- 1280x540px recommended]</p>
  </div>
  <div class="mt-4">
    <p class="text-sm text-navy font-semibold">Figure 1</p>
    <p class="text-xs text-slate">System topology showing the distribution of services across three availability zones</p>
  </div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 6</p>
  <h1 class="text-4xl font-bold">Math and Emphasis</h1>
  <p class="text-gray-300 mt-4">6 patterns</p>
</div>

---

<!-- Pattern 32: Large Centered Statement -->

<div class="flex flex-col items-center justify-center h-full text-center px-16">
  <h1 class="text-3xl font-bold text-navy leading-relaxed">
    Simplicity is the ultimate<br>
    <span class="text-teal">sophistication</span>
  </h1>
  <p class="text-slate mt-10 text-sm">The guiding principle behind every design decision in this system</p>
</div>

---

<!-- Pattern 33: Before / After Comparison -->

## Optimization reduced response time by 86% and error rate by 98%

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="border-t-4 border-gray-400 pt-5">
    <h3 class="font-semibold text-gray-500 mb-4">Before</h3>
    <div class="space-y-3">
      <div class="flex justify-between text-sm">
        <span class="text-slate">Response time</span>
        <span class="text-gray-500 font-mono">850ms</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-slate">Memory usage</span>
        <span class="text-gray-500 font-mono">4.2GB</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-slate">Error rate</span>
        <span class="text-gray-500 font-mono">2.3%</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-slate">Throughput</span>
        <span class="text-gray-500 font-mono">500 rps</span>
      </div>
    </div>
  </div>
  <div class="border-t-4 border-teal pt-5">
    <h3 class="font-semibold text-teal mb-4">After</h3>
    <div class="space-y-3">
      <div class="flex justify-between text-sm">
        <span class="text-slate">Response time</span>
        <span class="text-teal font-mono font-bold">120ms</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-slate">Memory usage</span>
        <span class="text-teal font-mono font-bold">1.1GB</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-slate">Error rate</span>
        <span class="text-teal font-mono font-bold">0.05%</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-slate">Throughput</span>
        <span class="text-teal font-mono font-bold">3,200 rps</span>
      </div>
    </div>
  </div>
</div>

---

<!-- Pattern 34: Math Formula Showcase -->

## Gradient descent minimizes loss by iteratively stepping in the negative gradient direction

The parameter update at each step follows

$$\theta_{t+1} = \theta_t - \alpha \nabla_\theta J(\theta_t)$$

<div class="grid grid-cols-3 gap-6 mt-4 text-sm">
<div class="bg-gray-warm rounded-lg p-4">

**$\theta$**
<span class="text-slate text-xs">Model parameters</span>

</div>
<div class="bg-gray-warm rounded-lg p-4">

**$\alpha$**
<span class="text-slate text-xs">Learning rate</span>

</div>
<div class="bg-gray-warm rounded-lg p-4">

**$\nabla_\theta J$**
<span class="text-slate text-xs">Gradient of the loss function</span>

</div>
</div>

---

<!-- Pattern 35: Inline Math in Context -->

## Sorting dominates the overall time complexity at O(n log n)

The algorithm runs in $O(n \log n)$ time for the sorting phase, followed by a linear scan in $O(n)$. The overall space complexity is $O(n)$ due to the auxiliary array.

For inputs where $n > 10^6$, consider the streaming variant which achieves $O(\sqrt{n})$ space at the cost of $O(n \log^2 n)$ time.

| Operation | Time | Space |
|-----------|------|-------|
| Sort | $O(n \log n)$ | $O(n)$ |
| Scan | $O(n)$ | $O(1)$ |
| Merge | $O(n)$ | $O(n)$ |
| **Total** | $O(n \log n)$ | $O(n)$ |

---

<!-- Pattern 36: Math + Diagram Combo -->

## Backpropagation computes gradients layer by layer from output to input

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### Forward Pass

$$z^{(l)} = W^{(l)} a^{(l-1)} + b^{(l)}$$
$$a^{(l)} = \sigma(z^{(l)})$$

### Backward Pass

$$\delta^{(L)} = \nabla_a J \odot \sigma'(z^{(L)})$$
$$\delta^{(l)} = (W^{(l+1)})^T \delta^{(l+1)} \odot \sigma'(z^{(l)})$$

### Weight Update

$$W^{(l)} \leftarrow W^{(l)} - \alpha \, \delta^{(l)} (a^{(l-1)})^T$$

</div>
<div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center">
  <div class="text-center space-y-4">
    <div class="flex items-center justify-center gap-6">
      <div class="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-xs font-italic">x</div>
      <span class="text-slate">&#8594;</span>
      <div class="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-xs">h&#8321;</div>
      <span class="text-slate">&#8594;</span>
      <div class="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-xs">h&#8322;</div>
      <span class="text-slate">&#8594;</span>
      <div class="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-xs font-italic">y</div>
    </div>
    <p class="text-xs text-slate">Neural Network Forward Flow</p>
  </div>
</div>
</div>

---

<!-- Pattern 37: Math Variable Table -->

## Standard notation follows linear algebra conventions throughout this work

| Symbol | Name | Description |
|--------|------|-------------|
| $\mathbf{X} \in \mathbb{R}^{n \times d}$ | Input matrix | $n$ samples with $d$ features |
| $\mathbf{W} \in \mathbb{R}^{d \times k}$ | Weight matrix | Maps $d$-dim input to $k$-dim output |
| $\sigma(\cdot)$ | Activation function | Non-linear transformation (ReLU, sigmoid, etc.) |
| $\mathcal{L}(\theta)$ | Loss function | Measures model prediction error |
| $\eta$ | Learning rate | Controls gradient descent step size |

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 7</p>
  <h1 class="text-4xl font-bold">Code and Technical</h1>
  <p class="text-gray-300 mt-4">4 patterns</p>
</div>

---

<!-- Pattern 38: Syntax-highlighted Code -->

## Server configuration uses YAML with separate sections for database and cache

```yaml
server:
  host: 0.0.0.0
  port: 8080
  workers: 4

database:
  url: postgres://localhost:5432/app
  pool_size: 20
  timeout: 30s

cache:
  backend: redis
  url: redis://localhost:6379
  ttl: 3600
```

---

<!-- Pattern 39: Code + Explanation Side-by-side -->

## Recursive Fibonacci has O(2^n) complexity -- use memoization for O(n)

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

```rust
fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1)
             + fibonacci(n - 2),
    }
}
```

</div>
<div>

### Explanation

The recursive Fibonacci implementation uses pattern matching to handle three cases:

- **Base case 1** returns $F(0) = 0$
- **Base case 2** returns $F(1) = 1$
- **Recursive case** computes $F(n) = F(n-1) + F(n-2)$

Time complexity is $O(2^n)$ -- use memoization for $O(n)$.

</div>
</div>

---

<!-- Pattern 40: Terminal Output Style -->

## All three pods deployed successfully with zero-downtime rollout

<div class="bg-gray-900 rounded-lg p-6 mt-4 font-mono text-sm">
  <p class="text-green-400">$ kubectl apply -f deployment.yaml</p>
  <p class="text-gray-400 mt-2">deployment.apps/api-server configured</p>
  <p class="text-gray-400">service/api-server unchanged</p>
  <p class="text-gray-400">configmap/api-config configured</p>
  <p class="text-green-400 mt-4">$ kubectl rollout status deployment/api-server</p>
  <p class="text-gray-400 mt-2">Waiting for deployment "api-server" rollout to finish:</p>
  <p class="text-gray-400">  2 of 3 updated replicas are available...</p>
  <p class="text-green-400">  deployment "api-server" successfully rolled out</p>
  <p class="text-green-400 mt-4">$ kubectl get pods -l app=api-server</p>
  <p class="text-gray-400 mt-2">NAME                          READY   STATUS    RESTARTS   AGE</p>
  <p class="text-gray-400">api-server-7d4f8b9c6-x2k9m   1/1     Running   0          45s</p>
  <p class="text-gray-400">api-server-7d4f8b9c6-p8n3q   1/1     Running   0          38s</p>
  <p class="text-gray-400">api-server-7d4f8b9c6-j5v7w   1/1     Running   0          31s</p>
</div>

---

<!-- Pattern 41: API Specification Card -->

## The predictions endpoint accepts model configuration and returns structured output

<div class="mt-4 border border-gray-200 rounded-lg overflow-hidden">
  <div class="bg-navy text-white px-5 py-3 flex items-center gap-3">
    <span class="bg-teal text-white text-xs font-bold px-2 py-1 rounded">POST</span>
    <code class="text-sm">/api/v2/predictions</code>
  </div>
  <div class="p-5 space-y-3">
    <div>
      <p class="font-semibold text-navy text-sm mb-2">Request Body</p>
      <div class="bg-gray-50 rounded p-4 font-mono text-xs text-slate">
        {<br>
        &nbsp;&nbsp;"model": "gpt-4",<br>
        &nbsp;&nbsp;"input": "string",<br>
        &nbsp;&nbsp;"parameters": { "temperature": 0.7 }<br>
        }
      </div>
    </div>
    <div>
      <p class="font-semibold text-navy text-sm mb-2">Response (200)</p>
      <div class="bg-gray-50 rounded p-4 font-mono text-xs text-slate">
        {<br>
        &nbsp;&nbsp;"id": "pred_abc123",<br>
        &nbsp;&nbsp;"output": "string",<br>
        &nbsp;&nbsp;"usage": { "tokens": 150 }<br>
        }
      </div>
    </div>
  </div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 8</p>
  <h1 class="text-4xl font-bold">Advanced and Combination</h1>
  <p class="text-gray-300 mt-4">5 patterns</p>
</div>

---

<!-- Pattern 42: Dashboard Layout (4-quadrant) -->

## System throughput increased 12% week-over-week with stable error rates

<div class="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="text-xs font-semibold text-navy mb-3">Throughput (rps)</p>
    <p class="text-3xl font-bold text-teal">2,847</p>
    <p class="text-xs text-green-600 mt-2">&#8593; 12% from last week</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="text-xs font-semibold text-navy mb-3">Error Rate</p>
    <p class="text-3xl font-bold text-navy">0.03%</p>
    <p class="text-xs text-green-600 mt-2">&#8595; 0.02pp from last week</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="text-xs font-semibold text-navy mb-3">Active Connections</p>
    <div class="flex items-end gap-1 mt-3">
      <div class="w-4 bg-teal rounded-t" style="height:20px"></div>
      <div class="w-4 bg-teal rounded-t" style="height:35px"></div>
      <div class="w-4 bg-teal rounded-t" style="height:28px"></div>
      <div class="w-4 bg-teal rounded-t" style="height:42px"></div>
      <div class="w-4 bg-teal rounded-t" style="height:38px"></div>
      <div class="w-4 bg-teal rounded-t" style="height:50px"></div>
      <div class="w-4 bg-navy rounded-t" style="height:45px"></div>
    </div>
  </div>
  <div class="bg-gray-warm rounded-lg p-4">
    <p class="text-xs font-semibold text-navy mb-3">Top Services</p>
    <div class="space-y-2 text-xs">
      <div class="flex justify-between"><span class="text-slate">auth-service</span><span class="text-teal font-mono">842 rps</span></div>
      <div class="flex justify-between"><span class="text-slate">user-api</span><span class="text-teal font-mono">634 rps</span></div>
      <div class="flex justify-between"><span class="text-slate">data-pipeline</span><span class="text-teal font-mono">521 rps</span></div>
      <div class="flex justify-between"><span class="text-slate">notification</span><span class="text-teal font-mono">418 rps</span></div>
    </div>
  </div>
</div>

---

<!-- Pattern 43: Summary / Takeaway Slide -->

## Three principles guided this initiative to a successful outcome

<div class="grid grid-cols-3 gap-6 mt-4">
  <div class="border-2 border-teal rounded-lg p-6 text-center">
    <p class="text-3xl font-bold text-teal mb-3">1</p>
    <p class="text-sm text-navy font-semibold">Start Simple</p>
    <p class="text-xs text-slate mt-3">Build the minimal viable solution first, then iterate based on real feedback</p>
  </div>
  <div class="border-2 border-teal rounded-lg p-6 text-center">
    <p class="text-3xl font-bold text-teal mb-3">2</p>
    <p class="text-sm text-navy font-semibold">Measure Everything</p>
    <p class="text-xs text-slate mt-3">Data-driven decisions require comprehensive observability across all layers</p>
  </div>
  <div class="border-2 border-teal rounded-lg p-6 text-center">
    <p class="text-3xl font-bold text-teal mb-3">3</p>
    <p class="text-sm text-navy font-semibold">Automate Early</p>
    <p class="text-xs text-slate mt-3">Invest in CI/CD and testing automation to maintain development velocity</p>
  </div>
</div>

---

<!-- Pattern 44: Q&A Slide -->
<!-- _backgroundColor: #F5F5F0 -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <div class="w-20 h-20 rounded-full bg-teal text-white flex items-center justify-center text-4xl font-bold mb-8">?</div>
  <h1 class="text-4xl font-bold text-navy mb-4">Questions</h1>
  <p class="text-slate">Open discussion and feedback</p>
</div>

---

<!-- Pattern 45: References / Bibliography -->

## References

<div class="space-y-4 mt-4 text-sm">
  <div class="flex gap-4">
    <span class="text-teal font-bold flex-shrink-0">[1]</span>
    <span class="text-slate">Author A, Author B. "Title of the Paper." <em>Journal Name</em>, Vol. 42, pp. 123-145, 2025.</span>
  </div>
  <div class="flex gap-4">
    <span class="text-teal font-bold flex-shrink-0">[2]</span>
    <span class="text-slate">Author C. <em>Book Title Here</em>. Publisher, 2024.</span>
  </div>
  <div class="flex gap-4">
    <span class="text-teal font-bold flex-shrink-0">[3]</span>
    <span class="text-slate">Author D, Author E, Author F. "Conference Paper Title." In <em>Proc. Conference Name</em>, pp. 67-82, 2026.</span>
  </div>
  <div class="flex gap-4">
    <span class="text-teal font-bold flex-shrink-0">[4]</span>
    <span class="text-slate">Organization. "Technical Report Title." Technical Report TR-2026-01, 2026.</span>
  </div>
</div>

---

<!-- Pattern 46: Thank You / Ending -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->
<!-- _paginate: false -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-4xl font-bold mb-8">Thank You</h1>
  <div class="w-16 h-1 bg-teal-light mb-8"></div>
  <div class="space-y-2 text-gray-300">
    <p>Author Name</p>
    <p class="text-sm">author@example.com</p>
    <p class="text-sm">github.com/author</p>
  </div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 9</p>
  <h1 class="text-4xl font-bold">Research and Academic</h1>
  <p class="text-gray-300 mt-4">6 patterns</p>
</div>

---

<!-- Pattern 47: Research Question -->

## This study investigates the relationship between optimizer choice and convergence speed

<div class="flex flex-col items-center justify-center mt-4">
  <div class="border-2 border-teal rounded-lg p-5 max-w-2xl text-center">
    <p class="text-sm text-teal font-semibold uppercase tracking-widest mb-4">Research Question</p>
    <p class="text-xl text-navy font-semibold leading-relaxed">
      How does the choice of optimization algorithm affect convergence speed in non-convex loss landscapes?
    </p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5 mt-6 max-w-2xl">
    <p class="text-sm text-slate"><strong class="text-navy">Hypothesis</strong> -- Adaptive methods (Adam, AdaGrad) converge 2-3x faster than SGD in highly non-convex settings</p>
  </div>
</div>

---

<!-- Pattern 48: Methodology Overview -->

## The study uses 5-fold cross-validation across three optimizer variants on 10K samples

<div class="grid grid-cols-3 gap-6 mt-4">
<div class="col-span-2 space-y-4">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">1</div>
    <div>
      <p class="font-semibold text-navy text-sm">Data Collection</p>
      <p class="text-sm text-slate">Gathered 10,000 samples from public benchmarks (CIFAR-10, ImageNet subset)</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">2</div>
    <div>
      <p class="font-semibold text-navy text-sm">Preprocessing</p>
      <p class="text-sm text-slate">Normalization, augmentation (random crop, horizontal flip)</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">3</div>
    <div>
      <p class="font-semibold text-navy text-sm">Model Training</p>
      <p class="text-sm text-slate">ResNet-50 backbone, 5-fold cross-validation, 3 optimizer variants</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">4</div>
    <div>
      <p class="font-semibold text-navy text-sm">Evaluation</p>
      <p class="text-sm text-slate">Accuracy, F1-score, convergence epoch, wall-clock time</p>
    </div>
  </div>
</div>
<div class="bg-gray-warm rounded-lg p-5">
  <p class="font-semibold text-navy text-sm mb-4">Parameters</p>
  <div class="space-y-3 text-sm">
    <div class="flex justify-between"><span class="text-slate">Samples</span><span class="text-navy font-mono">n = 10,000</span></div>
    <div class="flex justify-between"><span class="text-slate">Epochs</span><span class="text-navy font-mono">200</span></div>
    <div class="flex justify-between"><span class="text-slate">Batch size</span><span class="text-navy font-mono">128</span></div>
    <div class="flex justify-between"><span class="text-slate">Learning rate</span><span class="text-navy font-mono">0.001</span></div>
    <div class="flex justify-between"><span class="text-slate">CV folds</span><span class="text-navy font-mono">5</span></div>
  </div>
</div>
</div>

---

<!-- Pattern 49: Experimental Setup -->

## Experiments ran on 4x A100 GPUs with PyTorch 2.1 and standard augmentation

<div class="grid grid-cols-3 gap-6 mt-4">
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="font-semibold text-navy text-sm mb-4 border-b border-gray-300 pb-2">Environment</p>
    <div class="space-y-2 text-sm text-slate">
      <p>GPU: NVIDIA A100 x4</p>
      <p>RAM: 256 GB</p>
      <p>Framework: PyTorch 2.1</p>
      <p>OS: Ubuntu 22.04</p>
    </div>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="font-semibold text-navy text-sm mb-4 border-b border-gray-300 pb-2">Datasets</p>
    <div class="space-y-2 text-sm text-slate">
      <p>CIFAR-10 (60K images)</p>
      <p>ImageNet-1K subset (100K)</p>
      <p>Train/Val/Test: 70/15/15</p>
      <p>Augmentation: standard</p>
    </div>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="font-semibold text-navy text-sm mb-4 border-b border-gray-300 pb-2">Hyperparameters</p>
    <div class="space-y-2 text-sm text-slate">

$\alpha = 0.001$, $\beta_1 = 0.9$

$\beta_2 = 0.999$, $\epsilon = 10^{-8}$

Weight decay: $10^{-4}$

    </div>
  </div>
</div>

---

<!-- Pattern 50: Results with Statistical Table -->

## Adam achieved the highest accuracy with statistically significant improvement over SGD (p < 0.01)

<div class="bg-teal bg-opacity-10 border-l-4 border-teal rounded-r-lg p-5 mb-4">

**Key Finding**

Adam achieved the highest accuracy with statistically significant improvement over SGD ($p < 0.01$)

</div>

| Method | Accuracy | F1 Score | Convergence (epoch) | p-value |
|--------|----------|----------|---------------------|---------|
| SGD | 91.2% | 0.908 | 142 | -- |
| SGD + Momentum | 93.5% | 0.931 | 98 | < 0.05 |
| AdaGrad | 94.1% | 0.938 | 67 | < 0.01 |
| **Adam** | **95.3%** | **0.951** | **52** | **< 0.01** |
| AdamW | 95.1% | 0.948 | 55 | < 0.01 |

---

<!-- Pattern 51: Literature Review -->

## Four prior studies inform the theoretical and methodological foundations of this work

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="text-teal font-bold text-xs mb-2">[1] Smith et al., 2024</p>
    <p class="text-sm text-navy font-semibold mb-2">Adaptive Learning Rate Methods</p>
    <p class="text-sm text-slate mb-3">Comprehensive survey showing Adam dominates in practice for deep networks.</p>
    <p class="text-xs text-teal">Relevance: baseline comparison framework</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="text-teal font-bold text-xs mb-2">[2] Chen & Wang, 2025</p>
    <p class="text-sm text-navy font-semibold mb-2">Non-Convex Optimization Landscapes</p>
    <p class="text-sm text-slate mb-3">Theoretical analysis of saddle points in deep neural network loss surfaces.</p>
    <p class="text-xs text-teal">Relevance: theoretical motivation</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="text-teal font-bold text-xs mb-2">[3] Liu et al., 2025</p>
    <p class="text-sm text-navy font-semibold mb-2">Convergence Guarantees for Adam</p>
    <p class="text-sm text-slate mb-3">Proves convergence under relaxed assumptions with improved bound of O(1/&#8730;T).</p>
    <p class="text-xs text-teal">Relevance: convergence theory</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-5">
    <p class="text-teal font-bold text-xs mb-2">[4] Park & Kim, 2026</p>
    <p class="text-sm text-navy font-semibold mb-2">Optimizer Selection Strategies</p>
    <p class="text-sm text-slate mb-3">Proposes automated optimizer selection based on loss landscape geometry.</p>
    <p class="text-xs text-teal">Relevance: practical methodology</p>
  </div>
</div>

---

<!-- Pattern 52: Contributions / Novelty -->

## This work makes three novel contributions to the optimizer benchmarking literature

<div class="space-y-3 mt-4">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded bg-teal text-white flex items-center justify-center font-bold text-sm">1</div>
    <div class="border-l-2 border-teal pl-5">
      <p class="font-semibold text-navy">Comprehensive Empirical Benchmark</p>
      <p class="text-sm text-slate mt-1">First large-scale comparison of 5 optimizers across 2 datasets with statistical rigor</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded bg-teal text-white flex items-center justify-center font-bold text-sm">2</div>
    <div class="border-l-2 border-teal pl-5">
      <p class="font-semibold text-navy">Convergence Analysis Framework</p>
      <p class="text-sm text-slate mt-1">Novel metric combining wall-clock time and epoch count for practical convergence assessment</p>
    </div>
  </div>
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0 w-8 h-8 rounded bg-teal text-white flex items-center justify-center font-bold text-sm">3</div>
    <div class="border-l-2 border-teal pl-5">
      <p class="font-semibold text-navy">Open-source Reproducibility Toolkit</p>
      <p class="text-sm text-slate mt-1">All code, configurations, and trained models released for community verification</p>
    </div>
  </div>
</div>

---

<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col justify-center h-full">
  <p class="text-teal-light text-lg font-semibold mb-2">Category 10</p>
  <h1 class="text-4xl font-bold">Business and Sales</h1>
  <p class="text-gray-300 mt-4">11 patterns</p>
</div>

---

<!-- Pattern 53: Sales Funnel -->

## The funnel converts 3.78% of visitors with strongest drop-off at the interest stage

<div class="flex flex-col items-center mt-4 space-y-1">
  <div class="bg-navy text-white rounded-t-lg py-4 text-center" style="width:90%">
    <p class="font-semibold text-sm">Awareness</p>
    <p class="text-xs text-gray-300 mt-1">100,000 visitors</p>
  </div>
  <div class="bg-navy-light text-white py-4 text-center" style="width:72%">
    <p class="font-semibold text-sm">Interest</p>
    <p class="text-xs text-gray-300 mt-1">42,000 (42%)</p>
  </div>
  <div class="bg-teal text-white py-4 text-center" style="width:54%">
    <p class="font-semibold text-sm">Consideration</p>
    <p class="text-xs text-gray-200 mt-1">12,600 (30%)</p>
  </div>
  <div class="bg-teal-light text-white rounded-b-lg py-4 text-center" style="width:36%">
    <p class="font-semibold text-sm">Conversion</p>
    <p class="text-xs mt-1">3,780 (30%)</p>
  </div>
</div>
<p class="text-center text-xs text-slate mt-6">Overall conversion rate: 3.78%</p>

---

<!-- Pattern 54: Pricing Table -->

## The Professional plan offers the best value for growing teams

<div class="grid grid-cols-3 gap-6 mt-4">
  <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <p class="text-sm text-slate font-semibold uppercase">Starter</p>
    <p class="text-3xl font-bold text-navy mt-3">$29</p>
    <p class="text-xs text-slate mb-5">/month</p>
    <div class="space-y-2 text-sm text-slate text-left">
      <p>Up to 5 users</p>
      <p>10 GB storage</p>
      <p>Email support</p>
      <p class="text-gray-300">-- No API access</p>
      <p class="text-gray-300">-- No custom domain</p>
    </div>
  </div>
  <div class="bg-white border-2 border-teal rounded-lg p-6 text-center relative">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs px-3 py-1 rounded-full font-semibold">Recommended</div>
    <p class="text-sm text-teal font-semibold uppercase">Professional</p>
    <p class="text-3xl font-bold text-teal mt-3">$79</p>
    <p class="text-xs text-slate mb-5">/month</p>
    <div class="space-y-2 text-sm text-slate text-left">
      <p>Up to 25 users</p>
      <p>100 GB storage</p>
      <p>Priority support</p>
      <p>API access</p>
      <p class="text-gray-300">-- No custom domain</p>
    </div>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <p class="text-sm text-slate font-semibold uppercase">Enterprise</p>
    <p class="text-3xl font-bold text-navy mt-3">Custom</p>
    <p class="text-xs text-slate mb-5">contact us</p>
    <div class="space-y-2 text-sm text-slate text-left">
      <p>Unlimited users</p>
      <p>Unlimited storage</p>
      <p>Dedicated support</p>
      <p>Full API access</p>
      <p>Custom domain</p>
    </div>
  </div>
</div>

---

<!-- Pattern 55: Customer Testimonial -->

## Platform adoption reduced deployment time from 3 hours to 15 minutes

<div class="flex flex-col items-center mt-4">
  <div class="border-l-4 border-teal bg-gray-warm rounded-r-lg p-5 max-w-2xl">
    <p class="text-lg text-navy italic leading-relaxed">"Switching to this platform reduced our deployment time from 3 hours to 15 minutes. The ROI was clear within the first month."</p>
    <div class="mt-6 flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">JD</div>
      <div>
        <p class="text-sm font-semibold text-navy">Jane Doe</p>
        <p class="text-xs text-slate">VP of Engineering, TechCorp</p>
      </div>
    </div>
  </div>
</div>

---

<!-- Pattern 56: Financial Summary / ROI -->

## Revenue grew 34% YoY while operating costs decreased 12%

<div class="grid grid-cols-3 gap-6 mt-4 mb-8">
  <div class="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-100">
    <p class="text-xs text-slate uppercase tracking-wide">Annual Revenue</p>
    <p class="text-4xl font-bold text-teal mt-3">$2.4M</p>
    <p class="text-xs text-green-600 mt-2">&#8593; 34% YoY</p>
  </div>
  <div class="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-100">
    <p class="text-xs text-slate uppercase tracking-wide">Operating Cost</p>
    <p class="text-4xl font-bold text-navy mt-3">$1.1M</p>
    <p class="text-xs text-green-600 mt-2">&#8595; 12% YoY</p>
  </div>
  <div class="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-100">
    <p class="text-xs text-slate uppercase tracking-wide">ROI</p>
    <p class="text-4xl font-bold text-teal mt-3">218%</p>
    <p class="text-xs text-slate mt-2">Payback: 4.2 months</p>
  </div>
</div>

Net margin improved from 32% to 54% through operational efficiency gains and automated workflows.

---

<!-- Pattern 57: Market Positioning Matrix -->

## Our product occupies the high-quality, mass-market quadrant

<div class="relative mt-4" style="height:400px">
  <div class="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0">
    <div class="bg-gray-50 border-r border-b border-gray-200 p-5">
      <p class="text-xs text-slate">High Quality / Niche</p>
    </div>
    <div class="bg-gray-50 border-b border-gray-200 p-5">
      <p class="text-xs text-slate">High Quality / Mass Market</p>
    </div>
    <div class="bg-gray-50 border-r border-gray-200 p-5">
      <p class="text-xs text-slate">Low Quality / Niche</p>
    </div>
    <div class="bg-gray-50 border-gray-200 p-5">
      <p class="text-xs text-slate">Low Quality / Mass Market</p>
    </div>
  </div>
  <div class="absolute top-8 right-16 w-16 h-16 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold shadow-md">Us</div>
  <div class="absolute top-24 left-20 w-12 h-12 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs">A</div>
  <div class="absolute bottom-24 right-32 w-12 h-12 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs">B</div>
  <div class="absolute bottom-16 left-32 w-12 h-12 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs">C</div>
  <p class="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs text-slate">Market Size &#8594;</p>
  <p class="absolute top-1/2 -left-1 -translate-y-1/2 -rotate-90 text-xs text-slate">Quality &#8594;</p>
</div>

---

<!-- Pattern 58: SWOT Analysis -->

## Strong technology and brand offset limited international presence

<div class="grid grid-cols-2 grid-rows-2 gap-3 mt-4">
  <div class="bg-teal bg-opacity-10 border-t-4 border-teal rounded-lg p-5">
    <p class="font-semibold text-teal text-sm mb-3">Strengths</p>
    <ul class="text-sm text-slate space-y-1 list-disc ml-4">
      <li>Market-leading technology</li>
      <li>Strong brand recognition</li>
      <li>Experienced engineering team</li>
    </ul>
  </div>
  <div class="bg-slate bg-opacity-10 border-t-4 border-slate rounded-lg p-5">
    <p class="font-semibold text-slate text-sm mb-3">Weaknesses</p>
    <ul class="text-sm text-slate space-y-1 list-disc ml-4">
      <li>Limited international presence</li>
      <li>Higher price point</li>
      <li>Complex onboarding process</li>
    </ul>
  </div>
  <div class="bg-blue-50 border-t-4 border-navy-light rounded-lg p-5">
    <p class="font-semibold text-navy-light text-sm mb-3">Opportunities</p>
    <ul class="text-sm text-slate space-y-1 list-disc ml-4">
      <li>Emerging Asian markets</li>
      <li>AI integration demand</li>
      <li>Strategic partnerships</li>
    </ul>
  </div>
  <div class="bg-gray-100 border-t-4 border-gray-400 rounded-lg p-5">
    <p class="font-semibold text-gray-500 text-sm mb-3">Threats</p>
    <ul class="text-sm text-slate space-y-1 list-disc ml-4">
      <li>New market entrants</li>
      <li>Regulatory changes</li>
      <li>Economic downturn risk</li>
    </ul>
  </div>
</div>

---

<!-- Pattern 59: Horizontal Roadmap -->

## The 2026 roadmap progresses from foundation through growth to scale and optimization

<div class="mt-4">
  <div class="flex items-stretch gap-1">
    <div class="flex-1 bg-navy text-white rounded-l-lg p-4 text-center">
      <p class="font-semibold text-sm">Q1</p>
      <p class="text-xs text-gray-300 mt-1">Foundation</p>
    </div>
    <div class="flex-1 bg-navy-light text-white p-4 text-center">
      <p class="font-semibold text-sm">Q2</p>
      <p class="text-xs text-gray-300 mt-1">Growth</p>
    </div>
    <div class="flex-1 bg-teal text-white p-4 text-center">
      <p class="font-semibold text-sm">Q3</p>
      <p class="text-xs text-gray-200 mt-1">Scale</p>
    </div>
    <div class="flex-1 bg-teal-light text-white rounded-r-lg p-4 text-center">
      <p class="font-semibold text-sm">Q4</p>
      <p class="text-xs mt-1">Optimize</p>
    </div>
  </div>
  <div class="grid grid-cols-4 gap-1 mt-3 text-sm text-slate">
    <div class="space-y-1 p-3">
      <p>Core API launch</p>
      <p>Auth system</p>
      <p>Beta program</p>
    </div>
    <div class="space-y-1 p-3">
      <p>Mobile SDK</p>
      <p>Integrations</p>
      <p>10K users</p>
    </div>
    <div class="space-y-1 p-3">
      <p>Enterprise tier</p>
      <p>Multi-region</p>
      <p>SOC 2 cert</p>
    </div>
    <div class="space-y-1 p-3">
      <p>AI features</p>
      <p>Self-serve analytics</p>
      <p>100K users</p>
    </div>
  </div>
</div>

---

<!-- Pattern 60: Team Grid -->

## The leadership team brings deep SaaS, ML, and go-to-market expertise

<div class="grid grid-cols-4 gap-6 mt-4">
  <div class="text-center">
    <div class="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">AK</div>
    <p class="font-semibold text-navy text-sm">Alice Kim</p>
    <p class="text-xs text-teal mt-1">CEO</p>
    <p class="text-xs text-slate mt-2">15 years in SaaS</p>
  </div>
  <div class="text-center">
    <div class="w-16 h-16 rounded-full bg-teal text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">BT</div>
    <p class="font-semibold text-navy text-sm">Bob Tanaka</p>
    <p class="text-xs text-teal mt-1">CTO</p>
    <p class="text-xs text-slate mt-2">Ex-Google, ML expert</p>
  </div>
  <div class="text-center">
    <div class="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">CL</div>
    <p class="font-semibold text-navy text-sm">Carol Lee</p>
    <p class="text-xs text-teal mt-1">VP Sales</p>
    <p class="text-xs text-slate mt-2">$50M+ ARR track record</p>
  </div>
  <div class="text-center">
    <div class="w-16 h-16 rounded-full bg-teal text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">DM</div>
    <p class="font-semibold text-navy text-sm">David Martinez</p>
    <p class="text-xs text-teal mt-1">VP Engineering</p>
    <p class="text-xs text-slate mt-2">Scaled teams 10&#8594;200</p>
  </div>
</div>

---

<!-- Pattern 61: Call to Action -->
<!-- _backgroundColor: #1B4565 -->
<!-- _color: #ffffff -->

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-3xl font-bold mb-6">Ready to Transform Your Workflow</h1>
  <p class="text-gray-300 mb-10 max-w-lg">Join 500+ teams already using our platform to ship faster and more reliably</p>
  <div class="bg-teal text-white font-semibold px-10 py-4 rounded-lg text-lg">Start Free Trial</div>
  <p class="text-sm text-gray-400 mt-6">No credit card required. 14-day free trial.</p>
</div>

---

<!-- Pattern 62: Logo / Partner Grid -->

## Eight enterprise clients trust our platform for mission-critical workloads

<div class="grid grid-cols-4 gap-4 mt-4">
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company A</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company B</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company C</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company D</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company E</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company F</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company G</p>
  </div>
  <div class="bg-gray-warm rounded-lg p-6 flex items-center justify-center h-20">
    <p class="text-slate font-semibold text-sm">Company H</p>
  </div>
</div>

---

<!-- Pattern 63: Value Proposition -->

## Ship 10x faster with half the operational overhead

<div class="text-center mt-4 mb-8">
  <p class="text-sm text-slate">The only platform that combines deployment automation, monitoring, and incident response in one place</p>
</div>

<div class="grid grid-cols-3 gap-6">
  <div class="text-center">
    <div class="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
    <h3 class="font-semibold text-navy text-sm mb-2">Deploy in Minutes</h3>
    <p class="text-sm text-slate">Zero-config deployments with automatic rollback and health checks</p>
  </div>
  <div class="text-center">
    <div class="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
    <h3 class="font-semibold text-navy text-sm mb-2">Monitor Everything</h3>
    <p class="text-sm text-slate">Unified observability for metrics, logs, and traces across all services</p>
  </div>
  <div class="text-center">
    <div class="w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
    <h3 class="font-semibold text-navy text-sm mb-2">Resolve Instantly</h3>
    <p class="text-sm text-slate">AI-powered incident detection and automated remediation workflows</p>
  </div>
</div>
