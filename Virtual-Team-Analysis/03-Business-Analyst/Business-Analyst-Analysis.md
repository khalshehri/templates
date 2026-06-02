# Phase 03 — Business Analyst (BA)

> **Role focus.** The Business Analyst turns vision (Phase 01) and market needs
> (Phase 02) into **precise, testable specifications**: functional requirements,
> user stories with acceptance criteria, process flows, business rules, a data
> dictionary, and non-functional requirements. Engineering builds against this;
> QA verifies against this. Everything here is reconciled with the **as-built**
> codebase.

---

## 1. Scope

**In scope:** account/auth, site lifecycle, section/content editing, the bilingual
content model, public rendering, and the requirements for the P0/P1 gaps
(subdomains, billing, data-integrity) identified upstream.

**Out of scope (this pass):** detailed UI/visual specs (Phase 04), infra runbooks
(Phase 08).

---

## 2. Actors & roles

| Actor | Description | System interactions |
|---|---|---|
| **Visitor** | Unauthenticated person | Views published public sites; views marketing/auth pages |
| **Site Owner** | Registered, authenticated user | Creates/edits/publishes sites; edits sections; previews drafts |
| **System** | The platform itself | Routing, rendering, persistence, auth enforcement |
| **(Planned) Admin** | Platform operator | Tenant/plan management — *not implemented* |

---

## 3. Functional requirements (FR)

> Status legend: ✅ implemented · ⚠️ partial · 🔲 planned.

### 3.1 Account & authentication
- **FR-A1** ✅ A visitor can register with name, email, password. Email is unique;
  password is stored only as a bcrypt hash.
- **FR-A2** ✅ A registered user can log in with email + password (NextAuth v5).
- **FR-A3** ✅ Unauthenticated access to `/dashboard*` redirects to
  `/login?callbackUrl=…`.
- **FR-A4** 🔲 Email verification on registration *(planned — EPIC-5)*.
- **FR-A5** 🔲 Password reset *(planned — EPIC-5)*.
- **FR-A6** 🔲 Google OAuth sign-in *(planned — EPIC-5)*.

### 3.2 Site lifecycle
- **FR-S1** ✅ An owner can create a site by choosing an **industry preset** (one of
  13); the system seeds default sections from the preset.
- **FR-S2** ✅ A site has: name, **unique slug**, industry, theme, language
  (default `en`), status (default `draft`), timestamps.
- **FR-S3** ✅ An owner can list and open only **their own** sites.
- **FR-S4** ✅ An owner can update site-level fields and toggle status
  draft ↔ published.
- **FR-S5** ✅ A published site is publicly readable at `/sites/[slug]`.
- **FR-S6** ⚠️ An owner can preview a **draft** at `/sites/[slug]?preview=true`
  (ownership-gated).
- **FR-S7** 🔲 A site is reachable at `slug.safahati.com` *(planned — EPIC-1)*.
- **FR-S8** 🔲 An owner can map a custom domain *(planned — EPIC-4)*.

### 3.3 Sections & content
- **FR-C1** ✅ A site is an **ordered list of sections**; each section = block type
  + template id + JSON config + sort order + visibility flag.
- **FR-C2** ✅ The editor **auto-generates a form** from each block's Zod schema
  (`schema-introspect.ts`), including nested/array fields.
- **FR-C3** ✅ Bilingual fields are auto-detected as `field` / `fieldAr` pairs and
  presented as Arabic + English inputs.
- **FR-C4** ✅ An owner can add, remove, reorder (`sortOrder`), and show/hide
  (`isVisible`) sections.
- **FR-C5** ✅ Saving sections replaces the site's section set (PUT
  `/api/sites/[siteId]/sections`).
- **FR-C6** ⚠️ An owner can upload an image for image fields (`/api/upload` —
  basic).
- **FR-C7** 🔲 AI-assisted bilingual copy generation *(planned — EPIC-6)*.

### 3.4 Rendering
- **FR-R1** ✅ The public renderer fetches the published site by slug and renders
  visible sections in `sortOrder`.
- **FR-R2** ✅ Each section renders via the registry: `getBlock(type)` →
  `getTemplate(templateId)`.
- **FR-R3** ✅ Rendering is resilient: a failing block is caught by
  `BlockRenderer`'s fallback rather than crashing the page.
- **FR-R4** ✅ The page renders with correct direction (RTL for Arabic, LTR for
  English) per the site's language.

### 3.5 Monetization *(all planned — EPIC-2)*
- **FR-M1** 🔲 A visitor can view plans/pricing.
- **FR-M2** 🔲 An owner can subscribe via Stripe Checkout.
- **FR-M3** 🔲 The system enforces plan limits (site count, custom domain,
  watermark, AI quota).
- **FR-M4** 🔲 Publish / custom-domain are gated by an active subscription.

---

## 4. User stories with acceptance criteria

> Written in Given/When/Then so QA (Phase 07) can verify directly. Sample of the
> highest-value stories; the same format applies to the rest of the backlog.

### US-01 — Register an account `✅ as-built`
*As a visitor, I want to create an account so I can build sites.*
```gherkin
Given I am on /register
When I submit a unique email, a name, and a valid password
Then an account is created with a bcrypt-hashed password
And I can authenticate with those credentials
And submitting an already-registered email is rejected with a clear error
```

### US-02 — Create a site from a preset `✅ as-built`
*As an owner, I want to start from an industry template so I don't begin from blank.*
```gherkin
Given I am authenticated
When I create a site choosing industry "restaurant" with a name and slug
Then a site row is created with status "draft" and that slug (must be unique)
And default sections for "restaurant" are seeded in order
And the site appears in my dashboard list
And a duplicate slug is rejected
```

### US-03 — Edit a section bilingually `✅ as-built`
*As an owner, I want to edit content in Arabic and English so my site serves both.*
```gherkin
Given I am editing a section whose schema has a bilingual "title"/"titleAr" pair
When I open the editor
Then I see an English input and an Arabic input for the title
And saving persists both into the section's JSON config
And the English value renders in LTR and the Arabic value in RTL on the site
```

### US-04 — Reorder and hide sections `✅ as-built`
```gherkin
Given my site has multiple sections
When I reorder them and hide one
Then sortOrder is updated and the hidden section has isVisible = false
And the published page renders only visible sections in the new order
```

### US-05 — Publish and view `✅ as-built`
```gherkin
Given my site is in draft
When I set status to "published"
Then GET /sites/<slug> returns the rendered page to any visitor
And while still draft, /sites/<slug>?preview=true renders only for me (the owner)
```

### US-06 — Section save is atomic `🔲 P0 — EPIC-3 (gap)`
*As an owner, I want saving sections to be all-or-nothing so a failure can't corrupt my page.*
```gherkin
Given I save a new set of sections
When any single insert fails mid-operation
Then no sections are deleted or partially written (the operation rolls back)
And my previously saved page remains intact
# CURRENT BEHAVIOR: save is delete-all-then-reinsert in a NON-transactional loop → violates this AC.
```

### US-07 — Site on its own subdomain `🔲 P0 — EPIC-1 (gap)`
```gherkin
Given my site has slug "fatima"
When a visitor opens https://fatima.safahati.com
Then the system resolves the tenant from the host header
And renders my published site (or my preview if I am the authenticated owner)
```

### US-08 — Subscribe and enforce limits `🔲 P0 — EPIC-2 (gap)`
```gherkin
Given I am on the Free tier with 1 site
When I attempt to publish a 2nd site or attach a custom domain
Then the action is blocked with an upgrade prompt
And after subscribing to a tier that allows it (Stripe active), the action succeeds
```

---

## 5. Key process flows

### 5.1 Create-and-publish (happy path) — as-built
```
Visitor → Register (FR-A1) → Login (FR-A2)
   → Dashboard → "Add site" → choose preset (FR-S1)
   → System seeds default sections (FR-C1)
   → Editor: auto-generated forms, edit AR/EN (FR-C2/C3), reorder/hide (FR-C4)
   → Save sections (FR-C5)  ⚠️ non-atomic today (US-06)
   → Preview ?preview=true (FR-S6)
   → Set status = published (FR-S4)
   → Public renders /sites/[slug] (FR-R1..R4)
```

### 5.2 Section save (current vs required)
```
CURRENT (risk):  PUT sections → DELETE all sections for site → loop INSERT new ones
                 (no transaction → partial failure leaves page broken)
REQUIRED (US-06): wrap delete+insert in ONE transaction → commit all or roll back all
```

### 5.3 Auth guard (as-built)
```
Request /dashboard* → middleware checks session
   ├─ authenticated → continue
   └─ not authenticated → 307 redirect /login?callbackUrl=<original>
```

### 5.4 Tenant resolution (planned — EPIC-1)
```
Request → middleware reads Host header
   ├─ app/marketing host → app routes
   └─ <slug>.safahati.com → resolve site by slug → render public site
                                  └─ owner + preview flag → render draft
```

---

## 6. Business rules

- **BR-1** Email is globally unique; passwords are never stored in plaintext.
- **BR-2** Site **slug is globally unique** (it's the public address).
- **BR-3** An owner may read/modify **only their own** sites and sections
  (ownership check on every mutating API).
- **BR-4** Only **published** sites are publicly visible; drafts are owner-only via
  the preview flag.
- **BR-5** Sections render in ascending `sortOrder`; `isVisible = false` sections
  are persisted but not rendered.
- **BR-6** Every user-facing text field has an Arabic and an English value;
  rendering direction follows the field's language.
- **BR-7** Deleting a site cascades to its sections (`onDelete: cascade`).
- **BR-8 (required, EPIC-3)** Multi-row writes to `sections` MUST be transactional.
- **BR-9 (required, EPIC-2)** Plan limits gate publish, site count, custom domain,
  and AI quota.

---

## 7. Data dictionary (as-built)

> Source: `src/lib/db/schema.ts`. Config is stored as a **TEXT** column holding
> JSON (not JSONB) — a noted constraint (no DB-level JSON querying/validation).

### `users`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | text | PK | |
| `name` | text | not null | |
| `email` | text | not null, **unique** | login identity (BR-1) |
| `passwordHash` | text | not null | bcrypt; never plaintext |
| `createdAt` | bigint | not null | epoch ms |

### `sites`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | text | PK | |
| `userId` | text | not null, FK → `users.id` | ownership (BR-3) |
| `name` | text | not null | display name |
| `slug` | text | not null, **unique** | public address (BR-2) |
| `industry` | text | not null | one of 13 presets |
| `theme` | text | not null | theme identifier |
| `language` | text | not null, default `en` | drives RTL/LTR |
| `status` | text | not null, default `draft` | `draft` \| `published` (BR-4) |
| `createdAt` / `updatedAt` | bigint | not null | epoch ms |

### `sections`
| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | text | PK | |
| `siteId` | text | not null, FK → `sites.id` (**cascade delete**) | BR-7 |
| `blockType` | text | not null | one of 14 block types |
| `templateId` | text | not null | one of that type's templates |
| `config` | text | not null | **JSON-as-text** (bilingual content) |
| `sortOrder` | integer | not null | render order (BR-5) |
| `isVisible` | boolean | not null, default true | render gate (BR-5) |

**Reference data — block types (14):** navbar, hero, about, services, features,
testimonials, clients, stats, team, pricing, cta, faq, contact, footer.
**Templates:** 173 total (hero ×17, each other ×12).
**Industry presets (13):** company, agency, freelancer, resume, restaurant, clinic,
realestate, saas, ecommerce, event, photography, lawfirm, gym.

**Planned schema additions (for EPIC-2/4):** `plans`/`subscriptions`,
`domains` (custom-domain mapping + verification status).

---

## 8. Non-functional requirements (NFR)

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | **Bilingual** | Full RTL/LTR parity on every surface; no untranslated user-facing strings; correct numerals/dates per locale. |
| NFR-2 | **Data integrity** | No code path may destroy tenant data; all multi-row writes transactional (BR-8). |
| NFR-3 | **Performance** | Published-site TTFB suitable for marketing pages; caching planned (EPIC-7). |
| NFR-4 | **Security** | Ownership enforced server-side on all mutations; passwords hashed; secrets in env, not code. |
| NFR-5 | **Resilience** | A bad section config must not crash the page (BlockRenderer fallback — FR-R3). |
| NFR-6 | **Availability** | Health endpoint (`/api/health/db`) for monitoring; rollback path on deploy. |
| NFR-7 | **Maintainability** | Schema changes via versioned migrations, never request-path DDL (see risk RR-1). |

---

## 9. Risk register (BA view — feeds PO EPIC-3)

| ID | Risk | Severity | Evidence | Required mitigation |
|---|---|---|---|---|
| **RR-1** | `ensureSchema()` runs DDL on the request path and **DROPs all tables** on a detected column-type mismatch → **catastrophic data loss** | **Critical** | `src/lib/db/index.ts` | Move to versioned Drizzle migrations; remove destructive runtime DDL (NFR-7, EPIC-3) |
| **RR-2** | Section save is **delete-all-then-reinsert, non-transactional** → partial failure corrupts a page | **High** | `PUT /api/sites/[siteId]/sections` | Wrap in a single transaction (BR-8, US-06) |
| **RR-3** | `config` is **TEXT not JSONB** → no DB-level validation/indexing; malformed JSON only caught at render | Medium | `schema.ts` | App-layer Zod validation on write; consider JSONB later |
| **RR-4** | Schema introspection reads Zod **private internals** (`_zod.def`) → fragile across Zod upgrades | Medium | `schema-introspect.ts` | Pin Zod; add regression tests on form generation |
| **RR-5** | Docs/marketing state **31 types/112 templates** & Next 15; reality is **14/173** & Next 16 | Low (trust) | README vs repo | Correct docs (PO CHORE) |
| **RR-6** | **No revenue mechanism** (no billing/limits) | High (commercial) | no Stripe/plan code | EPIC-2 |

---

## 10. Traceability (FR/US → Phase 01 epics)

| Requirement | Epic | Priority |
|---|---|---|
| FR-S7 / US-07 (subdomains) | EPIC-1 | P0 |
| FR-M1..M4 / US-08 (billing) | EPIC-2 | P0 |
| BR-8 / US-06 + RR-1, RR-2 (integrity) | EPIC-3 | P0 |
| FR-S8 (custom domains) | EPIC-4 | P1 |
| FR-A4..A6 (auth completeness) | EPIC-5 | P1 |
| FR-C7 (AI copy) | EPIC-6 | P2 |
| NFR-3 (perf/media) | EPIC-7 | P2 |

---

*Hands off to → Phase 04 (UI/UX), 05/06 (Engineering), 07 (QA), which design,
build, and verify against the FRs, ACs, and NFRs above.*
