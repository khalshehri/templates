# Phase 02 — Business Development (BD)

> **Role focus.** Business Development owns the *commercial case*: is there a
> viable, profitable market, who exactly are we selling to, who are we up against,
> how do we package and price, how do we acquire customers, and do the unit
> economics work? BD's output feeds the Product Owner's prioritization (Phase 01).

---

## 1. Market opportunity

**Where Safahati plays.** The MENA / GCC small-business web-presence market —
specifically Saudi Arabia (Vision 2030 is pushing SME digitization) and the wider
Arabic-speaking region.

**The structural wedge:** the dominant builders (Wix, Squarespace, WordPress,
GoDaddy) are **English-first**. Arabic RTL is a retrofit — fonts, layout mirroring,
and bilingual content management are weak or manual. A large share of regional SMEs
either (a) have no website, (b) rely on a single Instagram/WhatsApp presence, or
(c) paid an agency for a costly bespoke site. Safahati targets the gap: **a
bilingual-native, self-serve, low-cost website in minutes.**

**Demand signals to validate (BD action items):**
- Volume of regional SMEs without a website.
- Willingness to pay a monthly SaaS fee vs one-off agency build.
- Channels where the audience already is (Instagram, TikTok, Snapchat, local
  business directories).

---

## 2. Target segments & ranking

| Segment | Pain | Fit with as-built presets | BD priority |
|---|---|---|---|
| **Freelancers & solo professionals** | Need credible personal/portfolio site cheaply | `freelancer`, `resume`, `photography` | **1 (beachhead)** |
| **Local service SMEs** | Need hours, services, location, contact | `restaurant`, `clinic`, `gym`, `lawfirm`, `realestate` | **2** |
| **Small agencies / resellers** | Build many client sites fast | `agency`, `company` | **3 (multiplier)** |
| **Small e-commerce / SaaS** | Landing/marketing presence | `ecommerce`, `saas`, `event` | **4 (later)** |

**Beachhead recommendation:** start with **freelancers** — lowest decision friction,
fastest activation, strong word-of-mouth — then expand to local service SMEs. Agencies
are a **force multiplier** (one agency = many sites) and worth a dedicated reseller
motion once the core product is stable.

---

## 3. Competitive landscape

| Competitor | Strength | Weakness Safahati exploits |
|---|---|---|
| **Wix / Squarespace** | Brand, huge template library, polish | English-first; weak Arabic RTL; price in USD; freeform = overwhelming for low-tech SMEs |
| **WordPress + themes** | Flexible, cheap hosting | Requires technical setup/maintenance; RTL varies by theme |
| **GoDaddy Website Builder** | Bundled with domains | Generic; weak Arabic; limited design quality |
| **Local web agencies** | Bespoke, hands-on, Arabic-native | Expensive, slow, no self-serve, per-project pricing |
| **Instagram/WhatsApp-only** | Free, where customers are | Not a real website; no SEO, no credibility, no owned channel |

**Safahati's defensible position:** *bilingual-native + curated-quality +
self-serve + low cost*, simultaneously. No incumbent holds all four for this
audience.

**Moat-building (longer term):** Arabic content depth (AI copy assist, Phase 01
EPIC-6), agency reseller network, and an ever-growing region-specific template
catalog.

---

## 4. Business model & packaging

**Model:** B2B SaaS subscription (monthly/annual), with an agency/reseller tier.

> **Note:** *No billing exists in the codebase today (no Stripe, no plan limits).*
> This is the single largest commercial gap and maps to **Phase 01 EPIC-2 (P0)**.
> The packaging below is the BD proposal that EPIC-2 should implement.

### Proposed tiers (illustrative — validate pricing locally)

| Tier | Price (illustrative) | What it unlocks | Target segment |
|---|---|---|---|
| **Free / Trial** | 0 | 1 site, Safahati subdomain, watermark, draft+publish | Acquisition |
| **Starter** | ~SAR 29–49 / mo | 1 site, custom subdomain, no watermark, all templates | Freelancers |
| **Business** | ~SAR 99–149 / mo | Custom domain, more sites, analytics, AI copy assist | SMEs |
| **Agency** | ~SAR 299+ / mo | Multiple sites, client management, volume pricing | Agencies/resellers |

**Plan levers that must be enforced in product (BD → PO/BA):**
- Number of sites per account.
- Custom domain availability (gated by tier).
- Subdomain branding / watermark removal.
- AI assist quota.

---

## 5. Go-to-market (GTM)

**Phase 0 — Validation (now).** 10–20 design-partner interviews with freelancers
and local SMEs; test the "choose, don't design" + bilingual value prop and price
sensitivity. Feed findings into Phase 01 prioritization.

**Phase 1 — Beachhead launch.** Freelancer-focused. Channels:
- Organic social (Instagram/TikTok/Snapchat) showing "site in minutes" in Arabic.
- Freelancer communities and marketplaces (e.g., regional gig platforms).
- SEO content in Arabic ("كيف تنشئ موقع …").

**Phase 2 — Local SME expansion.** Industry landing pages per preset
(restaurant/clinic/gym), partnerships with local business directories and
chambers of commerce.

**Phase 3 — Agency/reseller motion.** Dedicated agency tier, white-label-ish
client management, referral economics.

**Activation hook:** the wizard + 13 presets already deliver a fast "wow" — lean
on **time-to-published-site** as the headline marketing metric (ties to Phase 01
success metrics).

---

## 6. Unit economics (framework to populate)

BD must fill these in from real data; the framework matters more than the
placeholder numbers.

| Lever | Definition | Notes for Safahati |
|---|---|---|
| **CAC** | Cost to acquire a paying owner | Keep low via organic/social + product-led trial |
| **ARPU** | Avg revenue per account / mo | Mix of Starter/Business/Agency |
| **Gross margin** | After hosting/infra cost | **Structurally high** — one lean deployment serves all tenants (Neon serverless; VPS-friendly) |
| **Churn** | Monthly logo/revenue churn | Watch SME seasonality; annual plans to reduce |
| **LTV** | ARPU × gross margin ÷ churn | Target **LTV:CAC ≥ 3** |
| **Payback** | Months to recover CAC | Target < 6 months |

**Cost advantage to protect:** the single-codebase / single-deployment design (and
the explicit preference for low-cost VPS infra) keeps marginal cost per tenant very
low — this is the engine of a healthy gross margin and should be guarded in
architecture decisions (e.g., avoid per-tenant heavy infra).

---

## 7. Pricing & revenue risks

- **Willingness to pay** for SME SaaS in the region is unproven for this exact
  product — *validate before committing to tiers.*
- **Free → paid conversion** depends on tier gating that **doesn't exist yet**
  (EPIC-2). Until built, there is **no revenue mechanism at all**.
- **Custom domain** is a top upgrade trigger but depends on subdomain routing
  (EPIC-1) and domain mapping (EPIC-4).
- **Currency / payment methods** — Stripe coverage and local payment preferences
  (mada, Apple Pay) must be confirmed for KSA.

---

## 8. Commercial dependencies on the build (BD → Phase 01 backlog)

| BD need | Blocks revenue? | Maps to |
|---|---|---|
| Each tenant on its own subdomain (credible "your site") | Yes | EPIC-1 (P0) |
| Subscription + plan-limit enforcement | **Yes — no revenue without it** | EPIC-2 (P0) |
| Custom domain as upgrade trigger | Limits ARPU | EPIC-4 (P1) |
| Frictionless sign-in (Google) + email verification | Dampens conversion | EPIC-5 (P1) |
| AI copy assist as a paid differentiator | Upsell lever | EPIC-6 (P2) |
| Owner analytics (proves value → retention) | Affects churn | EPIC-8 (P2) |

**BD's single most important message to the PO:** *the product is feature-rich but
**not yet sellable** — subdomains (EPIC-1) and billing (EPIC-2) are the two gates
between "demo" and "business."*

---

## 9. KPIs (BD scorecard)

| KPI | Why |
|---|---|
| Qualified sign-ups / month | Top of funnel |
| Trial → paid conversion % | Monetization health |
| MRR & MRR growth | The number |
| CAC by channel | Channel efficiency |
| LTV:CAC ratio | Sustainability (≥ 3) |
| Agency-sourced site count | Multiplier traction |

---

*Feeds → Phase 01 (PO) prioritization. Consumes ← as-built capability inventory
(Phase 01 §4) and risk register (Phase 03).*
