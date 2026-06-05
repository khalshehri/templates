# Safahati — Implemented Features as User Stories

> **Scope:** These user stories cover **only what is built and working today**.
> Commercial gaps still on the roadmap (subdomain tenancy, billing, data-integrity
> hardening) are intentionally excluded here — they belong to EPIC-1/2/3 in the
> forward backlog.
>
> **Format:** *As a [role], I want [capability], so that [benefit]* + acceptance criteria (AC).

---

## Epic A — Accounts & Authentication

### US-A1 — Register an account
**As a** prospective site owner, **I want** to register with my email and password, **so that** I can access the platform and create sites.

- **AC1:** I can submit email + password on the registration page.
- **AC2:** My password is stored hashed (bcrypt), never in plain text.
- **AC3:** On success I'm authenticated and taken to the dashboard.
- **AC4:** Duplicate emails are rejected with a clear message.

### US-A2 — Sign in
**As a** returning site owner, **I want** to sign in with my credentials, **so that** I can manage my existing sites.

- **AC1:** Valid email/password creates an authenticated session (NextAuth v5).
- **AC2:** Invalid credentials are rejected without revealing which field was wrong.
- **AC3:** Protected routes (`/dashboard`, editor) redirect unauthenticated users to login.

---

## Epic B — Site Creation from Industry Presets

### US-B1 — Create a site from an industry template
**As a** site owner, **I want** to create a new site by picking my industry, **so that** I get a sensible starting point without designing from scratch.

- **AC1:** I can choose from 13 industry presets (company, agency, freelancer, resume, restaurant, clinic, gym, law firm, real estate, SaaS, e-commerce, event, photography).
- **AC2:** Choosing a preset auto-creates the site with pre-ordered sections and starter content.
- **AC3:** The new site is created in **draft** status.
- **AC4:** The site appears in my dashboard immediately after creation.

### US-B2 — Start with bilingual content prefilled
**As a** site owner in the Arab market, **I want** preset content to come with both Arabic and English fields, **so that** I don't have to set up bilingual structure myself.

- **AC1:** Every text field in the preset has an English value and an Arabic (`*Ar`) counterpart.
- **AC2:** Default content reflects the chosen industry.

---

## Epic C — Site Management Dashboard

### US-C1 — View all my sites
**As a** site owner, **I want** to see all my sites in one dashboard, **so that** I can manage them at a glance.

- **AC1:** Dashboard lists every site I own with its name and status badge (draft/published).
- **AC2:** Each site shows quick actions (edit, view/preview, delete).
- **AC3:** I only see sites I own (tenant isolation).

### US-C2 — Delete a site
**As a** site owner, **I want** to delete a site I no longer need, **so that** my dashboard stays relevant.

- **AC1:** I can delete a site from the dashboard.
- **AC2:** Deletion removes the site and its sections.

---

## Epic D — Form-Based Content Editor

### US-D1 — Edit section content via auto-generated forms
**As a** non-technical site owner, **I want** to edit my content through simple forms, **so that** I don't need design or coding skills.

- **AC1:** Opening a section renders a form whose fields are auto-generated from that block's schema (Zod introspection).
- **AC2:** Field types (text, number, list, etc.) match the schema definition.
- **AC3:** Saving persists changes to the database.

### US-D2 — Edit Arabic and English side by side
**As a** bilingual site owner, **I want** English and Arabic fields paired in the editor, **so that** I can keep both languages in sync.

- **AC1:** Fields with an `*Ar` counterpart are auto-detected and shown as bilingual pairs.
- **AC2:** I can edit either language independently.

### US-D3 — Manage page sections
**As a** site owner, **I want** to add, remove, reorder, and show/hide sections, **so that** I control my page structure.

- **AC1:** I can add a section by choosing a block type + template.
- **AC2:** I can reorder sections, and the new order persists.
- **AC3:** I can remove or hide/show a section.
- **AC4:** The public page reflects the saved order and visibility.

### US-D4 — Preview before publishing
**As a** site owner, **I want** to preview my site (including language toggle), **so that** I can check it before going live.

- **AC1:** I can toggle a live/preview view of my draft.
- **AC2:** I can switch between Arabic (RTL) and English (LTR) in preview.
- **AC3:** Draft preview is visible to me as owner but not to the public.

---

## Epic E — Template & Block System

### US-E1 — Choose from a rich template catalog
**As a** site owner, **I want** many ready-made block templates, **so that** my site looks professional without custom design.

- **AC1:** 14 block types available: navbar, hero, about, services, features, testimonials, clients, stats, team, pricing, cta, faq, contact, footer.
- **AC2:** 173 templates total (hero ×17, all others ×12) selectable per section.
- **AC3:** Selecting a template renders the corresponding React component with my config.

### US-E2 — Reliable rendering when fields are missing
**As a** site owner, **I want** my page to keep rendering even if a field is empty, **so that** a single gap doesn't break the whole site.

- **AC1:** Missing/optional config fields don't crash the page.
- **AC2:** The block renderer falls back gracefully (try/catch) instead of failing the whole render.

---

## Epic F — Public Site Rendering

### US-F1 — Serve a published site to visitors
**As a** visitor, **I want** to view a published Safahati site, **so that** I can learn about the business.

- **AC1:** A published site renders at `/sites/[slug]`.
- **AC2:** All sections render in their saved order.
- **AC3:** Unpublished (draft) sites are not publicly accessible.

### US-F2 — Switch site language
**As a** visitor, **I want** to switch between Arabic and English, **so that** I can read in my preferred language.

- **AC1:** A language toggle switches all content between EN and AR.
- **AC2:** Layout direction switches correctly (LTR ↔ RTL).

---

## Epic G — Theming

### US-G1 — Industry-appropriate theme
**As a** site owner, **I want** my site to carry a theme matched to my industry, **so that** it looks suitable out of the box.

- **AC1:** Each industry preset applies a color scheme and fonts.
- **AC2:** Theme colors are applied via CSS variables per site.
- **AC3:** RTL and LTR layouts both respect the theme.

---

## Epic H — Media

### US-H1 — Upload an image
**As a** site owner, **I want** to upload images for my content, **so that** my site has visuals.

- **AC1:** I can upload an image through the editor (`/api/upload`).
- **AC2:** The uploaded image is usable in section content.

> ⚠️ **Constraint:** Basic file handling only — durable object storage (S3/MinIO) is not yet implemented.

---

## Out of Scope (Not Yet Implemented)

The following are **deliberately excluded** from this document because they are not
yet built. They are tracked in the forward roadmap:

| Capability | Roadmap Epic | Priority |
|---|---|---|
| Subdomain multi-tenancy (`name.safahati.com`) | EPIC-1 | P0 |
| Subscription billing & plan limits (Stripe) | EPIC-2 | P0 |
| Data-integrity hardening (transactional saves, versioned migrations) | EPIC-3 | P0 |
| Custom domain mapping | EPIC-4 | P1 |
| Google OAuth, email verification, password reset | EPIC-5 | P1 |
| AI content assist (Claude) | EPIC-6 | P2 |
| Performance & media (Redis, S3/MinIO, responsive images) | EPIC-7 | P2 |
| Owner analytics | EPIC-8 | P2 |
