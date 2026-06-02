# Phase 01 — Product Owner (PO)

> **Role focus.** The Product Owner owns *what we build, for whom, and in what
> order*. This document captures the product vision, the personas, the value
> proposition, the roadmap, the prioritized backlog (epics → stories), and the
> release/acceptance criteria. It is grounded in the **as-built** product and
> treats every gap to the vision as backlog.

---

## 1. Product vision

**Vision statement.** *Enable any SME, freelancer, or agency in the Arab world to
launch a professional, fully bilingual (Arabic + English) website in minutes — by
choosing, not by designing — at a price an SME can afford.*

**Why this, why now.**
- Most SME website tools are English-first; Arabic RTL is an afterthought.
  Safahati treats Arabic and English as **equally weighted, first-class** from the
  data model up.
- Drag-and-drop builders overwhelm non-technical owners. Safahati's bet is that
  **curated templates + a form** beat a blank canvas for this audience.
- One codebase serves all tenants, keeping operating cost low — a deliberate
  choice aligned with a lean, VPS-friendly cost model.

**Product principles.**
1. **Choose, don't design.** Owners pick from pre-built, professionally designed
   templates and fill in content.
2. **Bilingual by construction.** Every content field has an Arabic and English
   counterpart (`xAr` pairs auto-detected by the schema introspector).
3. **One platform, many sites.** Multi-tenant by configuration, not by code fork.
4. **Form over canvas.** The admin is a generated form, not a visual editor.

---

## 2. Target users (personas)

| Persona | Who | Primary job-to-be-done | Tech comfort |
|---|---|---|---|
| **Freelancer Fatima** | Designer/consultant needing a personal/portfolio site | "Show my work and let clients contact me" | Low–medium |
| **SME-owner Saad** | Restaurant / clinic / gym owner | "Have a credible web presence with hours, services, location" | Low |
| **Agency Amal** | Small agency building sites for clients | "Spin up client sites fast without bespoke dev" | Medium–high |

The **13 industry presets** map directly onto these personas (restaurant, clinic,
gym, freelancer, resume, agency, company, lawfirm, realestate, saas, ecommerce,
event, photography).

---

## 3. Value proposition & differentiation

- **Speed:** site live in minutes via wizard + presets.
- **Bilingual-first:** true RTL/LTR parity, not a translation bolt-on.
- **Affordable:** lean single-deployment architecture → SME-friendly pricing.
- **Curated quality:** 173 designer-built templates remove the "blank page" risk.

**What we are deliberately *not*:** a Wix/Webflow-style freeform builder, a CMS for
large enterprises, or a code-export tool.

---

## 4. As-built capability inventory (the "Done" column)

What a Product Owner can demonstrate **today**:

| Capability | State | Evidence in repo |
|---|---|---|
| User registration & email/password login | ✅ Done | `api/auth/register`, NextAuth v5, `users` table |
| Create a site from an industry preset | ✅ Done | `api/sites` (POST), `config/industry-templates.ts` (13) |
| Form-based section editor (auto-generated) | ✅ Done | `components/editor`, `lib/schema-introspect.ts` |
| 14 block types / 173 bilingual templates | ✅ Done | `components/blocks/*`, `lib/registry.ts` |
| Reorder / show-hide / configure sections | ✅ Done | `sections` table (`sortOrder`, `isVisible`, `config`) |
| Draft vs published status + owner preview | ✅ Done | `sites.status`, `/sites/[slug]?preview=true` |
| Public site rendering at a path | ✅ Done | `app/(site)/sites/[slug]/page.tsx` |
| Image upload | ✅ Done (basic) | `api/upload` |
| DB health check | ✅ Done | `api/health/db` |

---

## 5. Vision-to-build gap (the source of the backlog)

| Promised (README/vision) | Reality | Backlog implication |
|---|---|---|
| Subdomain multi-tenancy (`client.safahati.com`) | Path-based `/sites/[slug]`; middleware is auth-only | **EPIC-1** Subdomain routing |
| Google OAuth | Email/password only | **EPIC-5** OAuth sign-in |
| Stripe billing / plans | None | **EPIC-2** Monetization |
| AI content assist (Claude) | None | **EPIC-6** AI copy generation |
| Redis cache / MinIO storage | Neon only; upload basic | **EPIC-7** Perf & media hardening |
| Resend transactional email | None | **EPIC-5** (verification/reset) |
| "31 types / 112 templates" (README) | Actually **14 / 173** | **CHORE** Fix docs to match reality |

---

## 6. Product roadmap (proposed)

> Sequenced by *commercial unlock* (see Phase 02) and *technical dependency*.

### Now — "Make it a real product" (0–1 quarter)
- **EPIC-1 — Subdomain multi-tenancy.** The headline promise. Without it, every
  tenant lives under one domain/path — not a credible "your website."
- **EPIC-2 — Monetization (Stripe + plans).** No revenue path exists today.
- **CHORE — Docs/marketing truth-up** (counts, Next version, routing).

### Next — "Reduce friction & risk" (1–2 quarters)
- **EPIC-3 — Data-integrity hardening.** Replace destructive `ensureSchema()` and
  non-transactional section replace (see Phase 03 risks) with safe migrations and
  transactional writes.
- **EPIC-4 — Custom domain mapping** (`www.client-brand.com`).
- **EPIC-5 — Auth completeness** (Google OAuth, email verification, password
  reset via Resend).

### Later — "Differentiate" (2+ quarters)
- **EPIC-6 — AI content assist** (Claude-generated bilingual copy from a prompt).
- **EPIC-7 — Performance & media** (Redis cache, S3/MinIO, image optimization).
- **EPIC-8 — Analytics for site owners** (visits, contact submissions).

---

## 7. Prioritized backlog (epics → representative stories)

> Full requirement detail (acceptance criteria, flows) lives in **Phase 03 — BA**.
> Priority: **P0** = required for a sellable product, **P1** = important, **P2** = later.

### EPIC-1 — Subdomain multi-tenancy `P0`
- As an owner, I want my site at `myslug.safahati.com` so it feels like *my* site.
- As the platform, I want middleware to resolve the tenant from the host header
  and route to the right site renderer.
- As an owner, I want my draft preview gated to me even on the subdomain.

### EPIC-2 — Monetization `P0`
- As a visitor, I want to see plans/pricing so I can choose a tier.
- As an owner, I want to subscribe (Stripe Checkout) and have plan limits enforced
  (e.g., # of sites, custom domain availability).
- As the platform, I want to gate publish/custom-domain behind an active plan.

### EPIC-3 — Data-integrity hardening `P0`
- As the platform, I want schema changes via versioned migrations, never via a
  request-path `DROP`.
- As an owner, I want a section save to be all-or-nothing (transactional), so a
  partial failure never corrupts my page.

### EPIC-4 — Custom domains `P1`
- As an owner on a paid plan, I want to map my own domain with verification.

### EPIC-5 — Auth completeness `P1`
- Google OAuth; email verification; password reset.

### EPIC-6 — AI content assist `P2`
- As an owner, I want to generate bilingual section copy from a short prompt.

### EPIC-7 — Performance & media `P2`
- Caching, object storage, responsive images.

### EPIC-8 — Owner analytics `P2`
- Visit counts and contact-form submissions per site.

---

## 8. Release & acceptance criteria (PO definition of done)

A release is acceptable when:
1. **Functional** — every story in the release meets its BA acceptance criteria
   (Phase 03) and is demoable end-to-end by the PO.
2. **Bilingual** — every user-facing surface renders correctly in both Arabic
   (RTL) and English (LTR); no untranslated strings, no layout breakage.
3. **Non-destructive** — no code path can drop tenant data; section saves are
   atomic.
4. **Quality gate** — QA (Phase 07) signs off; no open P0/P1 defects.
5. **Operable** — health check green; rollback path exists.

---

## 9. Success metrics (what the PO watches)

| Metric | Why it matters | Target (illustrative) |
|---|---|---|
| Time-to-first-published-site | Core promise ("in minutes") | < 15 min median |
| Activation rate (registered → published) | Funnel health | > 40% |
| Free → paid conversion | Business viability | > 5% |
| Site-owner retention (3-month) | Product stickiness | > 70% |
| Template adoption breadth | Catalog value | All 13 industries used |

---

## 10. Key risks & assumptions (PO view)

- **Assumption:** SMEs prefer curated templates over a freeform builder. *Validate
  via Phase 02 interviews / early funnel data.*
- **Risk (technical → product):** the destructive `ensureSchema()` and
  non-transactional section save are **launch-blocking** — a single bad write can
  destroy tenant data. Elevated to **EPIC-3 / P0**.
- **Risk (commercial):** without subdomains + billing, the product cannot be sold;
  these gate the entire roadmap.
- **Dependency:** custom domains (EPIC-4) depend on subdomain routing (EPIC-1).

---

*Hands off to → Phase 03 (BA) for requirement-level detail, and consumes ← Phase
02 (BD) for prioritization inputs.*
