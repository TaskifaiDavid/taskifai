# TaskifAI — Stripe‑Inspired Style Guide & Website Redesign Plan

> A clean, Stripe‑inspired design system + implementation plan you can drop into Claude to generate consistent UI and copy.

---

## 0) Goals & Constraints

- **Aesthetic:** Modern, polished, slightly futuristic. Bold typography, strong contrast, gradient accents, smooth motion.
- **Function:** Fast to ship in **Next.js + Tailwind**; component‑driven design for scalability.
- **Brand fit:** Professional, premium, tech‑forward SaaS. Clear emphasis on trust, innovation, and growth.
- **Inspiration cues:** Stripe’s clarity, heavy use of white space, bold headlines, clean cards, subtle gradients, elegant motion.

---

## 1) Phased Approach (Execution Plan)

**Phase 1 — Audit & Fundamentals (1–2 days)**

- Inventory current pages, URLs, analytics, and top jobs‑to‑be‑done.
- Define messaging pillars (automation, trust, speed, intelligence) and primary actions (book demo, contact, case study).

**Phase 2 — Design Tokens & Voice (1 day)**

- Lock color palette, typography, spacing, radii, shadows, gradients.
- Approve brand voice rules and microcopy patterns.

**Phase 3 — Core Components (2–3 days)**

- Build AppShell, Navbar, Hero, Section, Button, Card, CTA, Pricing tiers, Footer.

**Phase 4 — Page Templates (2–3 days)**

- Home, Product, Pricing, Case Study, About, Docs, Legal.

**Phase 5 — Content & SEO (1–2 days)**

- Rewrite hero, proof blocks, case studies; add schema; performance pass.

**Phase 6 — QA & Launch (½–1 day)**

- A11y checks, responsive polish, motion refinements, analytics.

---

## 2) Brand Voice & Messaging

**Positioning (one‑liner):** Reseller data transformed into instant, reliable insights—powered by automation and AI.

**Messaging pillars:**

1. **Automation** (hours → seconds)  2) **Trust** (accurate, compliant)  3) **Scale** (from 5 to 50+ resellers)  4) **Clarity** (dashboards + AI chat)

**Voice:** Confident, concise, tech‑forward. Mix of aspirational and concrete. Use strong verbs.

**Microcopy patterns:**

- Buttons: “Book a demo”, “Explore pricing”, “See it in action”.
- Error/empty: “No reports yet. Upload a reseller file to get started.”

---

## 3) Design Tokens

```css
:root {
  /* Palette */
  --black: #0A0A0A;   /* primary text */
  --gray-900: #1A1A1A; /* body text */
  --gray-600: #52525B; /* muted text */
  --gray-200: #E5E7EB; /* borders */
  --gray-50:  #F9FAFB; /* background */

  --primary-500: #635BFF; /* Stripe purple */
  --primary-600: #5A50E8; /* hover state */
  --gradient-1: linear-gradient(135deg, #635BFF 0%, #22D3EE 100%);

  --success: #16A34A; --warning: #D97706; --error: #DC2626;

  /* Typography */
  --font-sans: "Inter", ui-sans-serif, system-ui;
  --font-display: "Sora", Inter, sans-serif;

  --fs-hero: clamp(2.5rem, 5vw, 4rem);
  --fs-h1: 2.25rem; --fs-h2: 1.75rem; --fs-h3: 1.25rem; --fs-body: 1rem;

  /* Spacing */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-10: 40px; --space-16: 64px;

  /* Radius & shadows */
  --radius-md: 12px; --radius-lg: 16px;
  --shadow-card: 0 8px 20px rgba(0,0,0,0.06);

  /* Container */
  --container: 1200px;
}
```

**Iconography:** Simple line icons, thin stroke, minimal fill.

**Imagery:** High‑quality mockups, gradient backgrounds, abstract 3D shapes when needed.

---

## 4) Layout System

- **Page bg:** `gray-50`.
- **Content container:** `max-w-container mx-auto px-6`.
- **Grid:** 12‑col system; `gap-8`.
- **Sections:** `py-20` (desktop), `py-12` (mobile).
- **Dividers:** Use generous whitespace or subtle gradient lines.

**Hero pattern:**

- Bold H1 in display font.
- Subhead with max‑width \~700px.
- CTA group (primary gradient, secondary outline).

---

## 5) Core Components

**Navbar**

- Transparent until scrolled, then white background with shadow.
- Left: logotype. Center: Nav links. Right: CTA.
- Active link highlight with gradient underline.

**Hero**

- Headline in `--fs-hero` with gradient text option.
- Supporting subhead. CTA buttons below.

**Card**

- White background, rounded, `shadow-card`.
- Optional gradient border accent.

**Button**

- Primary: gradient background → white text → hover darker.
- Secondary: outline with `primary-500` border, text color match.
- Ghost: transparent, subtle hover.

**Pricing Table**

- Side‑by‑side cards, one emphasized with gradient border.

**Footer**

- Dark background (`gray-900`), white text.
- 3–4 columns with links, small print bottom.

---

## 6) Content Patterns

- Headlines: Bold, benefit‑driven (“From spreadsheets to instant clarity”).
- Subheads: Explain outcome, not process.
- Bullets: Short, active verbs.
- Proof blocks: Use logos, metrics, quotes with gradient accents.

**Example hero copy**

- **H1:** From reseller chaos to instant insights.
- **Subhead:** TaskifAI cleans and standardizes every file, then delivers live dashboards and AI answers—faster than ever.
- **CTA:** Book a demo • Explore pricing

---

## 7) Accessibility & Quality Checklist

- Color contrast AA+.
- Gradient text with fallback for a11y.
- Motion reduced for `prefers-reduced-motion`.
- Clear focus outlines in `primary-500`.

---

## 8) SEO & Analytics

- Titles ≤ 60 chars, descriptions 150–160 chars.
- Schema: `Product`, `Organization`, `FAQPage`.
- Track CTAs, demo conversions, pricing clicks.

---

## 9) “Claude Code” — Style Guide Prompt

```
You are my UI and copy assistant. Follow this Stripe‑inspired style guide when generating code or text.

VOICE
- Confident, premium, tech‑forward. Bold and concise.

DESIGN TOKENS
- Colors: black(#0A0A0A), gray(900:#1A1A1A,600:#52525B,200:#E5E7EB,50:#F9FAFB), primary(#635BFF), gradients (#635BFF→#22D3EE).
- Fonts: Inter (UI), Sora (Display).
- Shadows: card(0 8px 20px rgba(0,0,0,.06)).
- Radius: 12–16px. Container width: 1200px.

COMPONENT RULES
- Navbar transparent until scroll, sticky, shadow.
- Hero headline bold, gradient option, 2 CTAs.
- Cards with white bg, optional gradient border.
- Buttons: gradient primary, outlined secondary.
- Footer dark bg, white text, multi‑column.

CONTENT RULES
- Headlines strong, outcomes‑driven.
- Subheads clear, benefit‑oriented.
- Use metrics and client logos for proof.

OUTPUT
- Return clean React + Tailwind components.
- Always apply tokens; never invent new colors.
- Ensure accessibility with contrast + aria labels.
```

---

## 10) Page Templates

**Home**

- Hero → Value props → How it works → Proof/logos → Features → Pricing → FAQ → Footer

**Pricing**

- Tiered cards with gradient highlight.

**Case Study**

- Bold intro → Problem → Solution → Results → Quotes → CTA.

**Docs**

- Stripe‑like developer‑first clarity. Generous line height, mono font for code.

---

## 11) Review & Governance

- Enforce tokens, gradients, and brand fonts.
- Quarterly audits for freshness.
- No ad‑hoc styles allowed.

