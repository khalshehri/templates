# Business Requirements Document (BRD) — Safahati

> **Document type:** Business Requirements Document (the *what the business needs
> and why*), as distinct from the requirement-level functional analysis in
> [Business-Analyst-Analysis.md](./Business-Analyst-Analysis.md) (the *how each
> capability must behave*). This BRD states business objectives, scope,
> stakeholders, and numbered business requirements that downstream specs trace to.
>
> **Status:** Draft v1 · Grounded against `safahati` @ `main` (2026-06-02).

---

## 1. Document purpose & audience

This BRD defines, at the business level, what Safahati must deliver to be a viable
product and why. It is the shared reference for the Product Owner (prioritization),
Business Development (commercial case), engineering (build target), and QA
(verification). Each business requirement (BR-#) is testable and traces forward to
functional requirements and epics.

---

## 2. Business background & problem statement

SMEs, freelancers, and agencies in the MENA/Saudi market need a credible web
presence but are underserved:

- Mainstream builders (Wix, Squarespace, WordPress, GoDaddy) are **English-first**;
  Arabic RTL and bilingual content management are weak or manual.
- **Freeform builders overwhelm** non-technical owners; bespoke agency sites are
  **expensive and slow**.
- Many SMEs default to an Instagram/WhatsApp-only presence — not a real, owned,
  discoverable website.

**Problem statement.** *There is no affordable, self-serve, bilingual-native way
for a regional SME to launch a professional website in minutes by choosing from
curated templates rather than designing from scratch.*

---

## 3. Business vision & objectives

**Vision.** Enable any SME, freelancer, or agency in the Arab world to launch a
professional, fully bilingual website in minutes — by choosing, not designing — at
a price an SME can afford.

**Business objectives (measurable):**

| # | Objective | Target indicator |
|---|---|---|
| OBJ-1 | Deliver a credible bilingual website fast | Median time-to-first-published-site < 15 min |
| OBJ-2 | Convert interest into activated owners | Registered → published activation > 40% |
| OBJ-3 | Establish a sustainable revenue model | Free → paid conversion > 5%; LTV:CAC ≥ 3 |
| OBJ-4 | Retain site owners | 3-month owner retention > 70% |
| OBJ-5 | Operate at low marginal cost per tenant | High gross margin via single-deployment, multi-tenant design |

---

## 4. Scope

### In scope (product)
- Account creation and authentication for site owners.
- Self-serve site creation from curated, industry-specific templates.
- Form-based, bilingual (Arabic/English) content editing — no visual canvas.
- Draft/preview/publish lifecycle.
- Public, multi-tenant website rendering.
- Subscription-based monetization with plan-based limits *(target state)*.

### Out of scope (current product intent)
- Freeform drag-and-drop page building.
- Enterprise CMS / large-team workflows and approvals.
- Code export / self-hosting by the customer.
- Native mobile apps (web-responsive only).
- E-commerce checkout/cart engine (marketing/landing presence only).

---

## 5. Stakeholders

| Stakeholder | Interest |
|---|---|
| **Site owners** (freelancers, SMEs, agencies) | Fast, affordable, bilingual website |
| **Visitors** to client sites | Find information; contact the business |
| **Business / product owner (Safahati)** | Revenue, growth, low operating cost |
| **Engineering & QA** | Clear, buildable, testable requirements |
| **Application support** | A reliable, monitorable, recoverable system |
| **(Future) agency resellers** | Manage many client sites efficiently |

---

## 6. Business requirements

> Priority: **P0** = required for a sellable product · **P1** = important ·
> **P2** = differentiator/later. Each requirement traces to functional detail and
> epics in the analysis doc.

### 6.1 Account & access
- **BRQ-1 (P0)** The business requires owners to self-register and securely sign in,
  with credentials protected to industry standard. *(→ FR-A1..A3)*
- **BRQ-2 (P1)** The business requires low-friction sign-in and account recovery
  (social sign-in, email verification, password reset) to maximize conversion.
  *(→ FR-A4..A6, EPIC-5)*

### 6.2 Site creation & content
- **BRQ-3 (P0)** Owners must create a website by selecting from **curated,
  industry-specific templates** that seed sensible default content — not from a
  blank page. *(→ FR-S1, 13 presets)*
- **BRQ-4 (P0)** All website content must be manageable through **simple forms**,
  with **no requirement for design or coding skill**. *(→ FR-C2)*
- **BRQ-5 (P0)** Every piece of customer-facing content must support **both Arabic
  and English**, rendered with correct direction (RTL/LTR) and parity between
  languages. *(→ FR-C3, FR-R4, NFR-1)*
- **BRQ-6 (P0)** Owners must be able to **add, remove, reorder, and show/hide**
  page sections to compose their site. *(→ FR-C4)*
- **BRQ-7 (P1)** Owners must be able to **upload and use their own images**.
  *(→ FR-C6)*
- **BRQ-8 (P2)** The business wants **AI-assisted bilingual copywriting** so owners
  can generate quality content from a short prompt — a paid differentiator.
  *(→ FR-C7, EPIC-6)*

### 6.3 Publishing & presence
- **BRQ-9 (P0)** Owners must be able to **preview a draft privately** and **publish**
  when ready; only published sites are publicly visible. *(→ FR-S4..S6, BR-4)*
- **BRQ-10 (P0)** Each published site must be reachable at its **own branded
  subdomain** (`slug.safahati.com`) to feel like the owner's real site.
  *(→ FR-S7, EPIC-1 — currently path-based, gap)*
- **BRQ-11 (P1)** Paid owners must be able to connect a **custom domain**.
  *(→ FR-S8, EPIC-4)*

### 6.4 Commercial
- **BRQ-12 (P0)** The business requires a **subscription model with tiered plans**,
  paid online, with **plan limits enforced in-product** (number of sites, custom
  domain availability, branding/watermark, AI quota). *(→ FR-M1..M4, EPIC-2)*
- **BRQ-13 (P1)** The business requires **owner-facing analytics** (site visits,
  contact submissions) to demonstrate value and support retention. *(→ EPIC-8)*

### 6.5 Trust, integrity & operations
- **BRQ-14 (P0)** The system must **never lose or corrupt a customer's data**; all
  content saves must be **all-or-nothing**, and schema changes must never run
  destructively in production. *(→ NFR-2, NFR-7, BR-8; mitigates RR-1, RR-2)*
- **BRQ-15 (P0)** Owners must be able to access and modify **only their own** sites
  and content. *(→ BR-3, NFR-4)*
- **BRQ-16 (P1)** A faulty piece of content must **never crash a published site**;
  the page degrades gracefully. *(→ FR-R3, NFR-5)*
- **BRQ-17 (P1)** The platform must be **monitorable and recoverable** (health
  checks, deploy rollback). *(→ NFR-6)*
- **BRQ-18 (P0)** The platform must serve **all tenants from a single deployment**
  to keep marginal cost per tenant low. *(→ OBJ-5)*

---

## 7. Business rules (policy level)

- **POL-1** A site's public address (slug/subdomain) is **globally unique**.
- **POL-2** Customer passwords are never stored or transmitted in plaintext.
- **POL-3** Draft content is private to its owner until explicitly published.
- **POL-4** Plan entitlements gate publishing, site count, custom domains, and AI
  usage *(target state)*.
- **POL-5** Arabic and English are treated as **equally weighted**; no language is a
  second-class afterthought.

---

## 8. Assumptions

- ASM-1 The target audience prefers **curated templates over a freeform builder**.
- ASM-2 Regional SMEs **will pay a monthly SaaS fee** for a quality bilingual site
  (to be validated via BD design-partner interviews — Phase 02).
- ASM-3 A **subdomain-per-tenant** model is acceptable as the baseline "real site"
  before custom domains.
- ASM-4 Online card payment (incl. local methods such as mada/Apple Pay) is
  available and acceptable to the audience.

---

## 9. Constraints

- CON-1 **Single codebase / single deployment**, multi-tenant by configuration
  (cost discipline — OBJ-5).
- CON-2 **Cost-sensitive infrastructure** (VPS-friendly / serverless) preferred,
  especially early.
- CON-3 **Bilingual Arabic + English** is mandatory, not optional, across the
  entire product.
- CON-4 Admin is **form-based**, not a visual editor (deliberate product choice).

---

## 10. Current state vs target (business readiness)

| Business requirement | Today | Gap to close |
|---|---|---|
| BRQ-1, 3–7, 9 (core create/edit/publish) | ✅ Working | — |
| BRQ-5 (bilingual) | ✅ Working | Ongoing QA for parity |
| BRQ-10 (branded subdomain) | ⚠️ Path-based only | EPIC-1 (P0) |
| BRQ-12 (monetization) | ❌ None | EPIC-2 (P0) — **no revenue path today** |
| BRQ-14 (data integrity) | ❌ At risk | EPIC-3 (P0) — destructive DDL + non-atomic saves |
| BRQ-2, 11, 13 (auth/domains/analytics) | ❌ Not built | EPIC-4/5/8 (P1) |
| BRQ-8 (AI copy) | ❌ Not built | EPIC-6 (P2) |

**Business readiness conclusion.** The product **delivers its core promise**
(fast, bilingual, curated site creation) but is **not yet sellable or safe to scale**
until three P0 business requirements are met: **branded subdomains (BRQ-10),
monetization (BRQ-12), and data-integrity guarantees (BRQ-14).**

---

## 11. Success criteria (acceptance of the BRD)

The product satisfies this BRD when:
1. All **P0** business requirements (BRQ-1, 3–6, 9, 10, 12, 14, 15, 18) are met and
   demonstrable end-to-end.
2. The business objectives (OBJ-1..5) are **measurable in production** (instrumented).
3. No open **critical/high** integrity risk remains (RR-1, RR-2 resolved).
4. A paying customer can complete the full journey: register → build → publish on a
   branded subdomain → subscribe → stay within enforced plan limits.

---

*Traceability: each BRQ maps to functional requirements (FR-*), business rules
(BR-*), NFRs, and risks in
[Business-Analyst-Analysis.md](./Business-Analyst-Analysis.md), and to epics in
[../01-Product-Owner/Product-Owner-Analysis.md](../01-Product-Owner/Product-Owner-Analysis.md).*
