# Safahati — Virtual Team Analysis: Overview & Roles

> **Purpose.** This folder documents Safahati as if it were being delivered by a
> full virtual product team. Each role contributes one *phase* (or discipline) of
> analysis, and the phases hand off to one another. This overview defines the
> team, what each role owns, and how the phases connect.
>
> **Grounding.** All analysis is grounded in the **as-built** codebase (verified
> 2026-06-02), not the aspirational README. Where the product vision and the
> current build diverge, that gap is called out explicitly — that gap *is* the
> backlog.

---

## 1. What Safahati actually is (one paragraph)

Safahati is a **multi-tenant, config-driven website platform** for the MENA/Saudi
SME market. It is **not** a drag-and-drop builder. A client's website is a row in
a database plus a set of ordered "section" records, each pointing at a pre-built,
bilingual (Arabic RTL / English LTR) React template and carrying its content as
JSON config. A form-based admin dashboard lets owners pick templates and fill in
content; the public renderer assembles the page from the section records.

**As-built snapshot (verified):**

| Dimension | Reality today |
|---|---|
| Framework | Next.js **16.1.6** (App Router, Turbopack), React 19, TypeScript 5, Tailwind 4 |
| Component library | **14 block types**, **173 templates** (hero ×17, all others ×12) |
| Industry presets | **13** (company, agency, freelancer, resume, restaurant, clinic, realestate, saas, ecommerce, event, photography, lawfirm, gym) |
| Data model | 3 tables — `users`, `sites`, `sections` (config stored as **text**, not JSONB) |
| Auth | NextAuth v5, **email/password only** (Google OAuth planned, not wired) |
| Database | Neon serverless Postgres via Drizzle (`neon-http`) |
| Routing | Sites served at **`/sites/[slug]`** — subdomain routing is **planned, not built** |
| Middleware | **Auth guard only** (`/dashboard`, `/login`, `/register`) |
| API surface | 7 routes: auth (×2), health/db, sites (list/create), site (get/update), sections (replace), upload |

**Planned but not yet in the codebase:** subdomain/multi-tenant routing, Redis
cache, MinIO/S3 storage, Google OAuth, Vercel AI SDK + Claude, Stripe billing,
Resend email, Hetzner/Docker/Nginx infra.

---

## 2. The virtual team — roles needed

The analysis is organized into the eight roles below plus a collaboration layer.
Folders `01`–`03` (the **business/discovery phases**) are documented in detail in
this pass; `04`–`08` are the **delivery/run phases** and are scaffolded for the
next pass.

| # | Role | Phase / discipline | Core question it answers | Status |
|---|------|--------------------|--------------------------|--------|
| 01 | **Product Owner (PO)** | Vision & prioritization | *What are we building, for whom, and in what order?* | ✅ Documented |
| 02 | **Business Development (BD)** | Market & monetization | *Is there a viable, profitable market — and how do we win it?* | ✅ Documented |
| 03 | **Business Analyst (BA)** | Requirements & process | *Exactly how must each capability behave?* | ✅ Documented |
| 04 | **UI/UX Designer** | Experience & visual design | *How does it look and feel, in both LTR and RTL?* | 🔲 Scaffolded |
| 05 | **Frontend Engineer** | Client implementation | *How is the UI and renderer built?* | 🔲 Scaffolded |
| 06 | **Backend Engineer** | Data, API, infra | *How is data stored, served, and secured?* | 🔲 Scaffolded |
| 07 | **QA Engineer** | Quality & verification | *How do we know it works and stays working?* | 🔲 Scaffolded |
| 08 | **Application Support** | Run & operate | *How do we keep it healthy in production?* | 🔲 Scaffolded |
| — | **Team Collaboration** | Cross-cutting rituals | *How do the roles coordinate and hand off?* | 🔲 Scaffolded |

### Role responsibilities (RACI-style summary)

- **Product Owner** — owns the *why* and the *what-next*. Maintains the vision,
  the roadmap, the prioritized backlog, and the definition of "done enough to
  ship." Accepts or rejects delivered increments.
- **Business Development** — owns the *market case*. Sizing, segments, competitors,
  pricing/packaging, go-to-market, and the unit economics that make (or break)
  the business. Feeds the PO's prioritization with commercial reality.
- **Business Analyst** — owns the *precise behavior*. Translates vision and market
  needs into testable requirements, user stories, acceptance criteria, process
  flows, and a data dictionary that engineering and QA can build/verify against.
- **UI/UX, Frontend, Backend** — own *how it's built and experienced*.
- **QA** — owns *evidence it works*.
- **Application Support** — owns *it keeps working*.

---

## 3. How the phases hand off

```
        ┌───────────────┐   vision, roadmap,    ┌───────────────────────┐
        │ 02 Business    │   target segments     │ 01 Product Owner      │
        │ Development     ├──────────────────────►│ (prioritized backlog) │
        │ (market case)   │◄──────────────────────┤                       │
        └───────────────┘   feasibility/cost     └──────────┬────────────┘
                                                              │ epics + priorities
                                                              ▼
                                                  ┌───────────────────────┐
                                                  │ 03 Business Analyst   │
                                                  │ user stories, AC,     │
                                                  │ process flows, data   │
                                                  │ dictionary            │
                                                  └──────────┬────────────┘
                                                              │ buildable specs
                                ┌─────────────────────────────┼─────────────────────────────┐
                                ▼                             ▼                             ▼
                       04 UI/UX Designer            05/06 Engineering              07 QA Engineer
                       (designs to AC)              (builds to AC)                 (verifies AC)
                                                              │
                                                              ▼
                                                    08 Application Support
                                                    (operates & monitors)
```

The three documented phases form the **discovery funnel**: BD establishes the
market is worth serving, the PO decides what to build and in what order, and the
BA specifies each item precisely enough to design, build, and test.

---

## 4. How to read this folder

1. Start with **02 — Business Development** for the market and commercial case.
2. Read **01 — Product Owner** for the vision, roadmap, and backlog that the
   market case justifies.
3. Read **03 — Business Analyst** for the requirement-level detail that turns the
   backlog into something the delivery roles can act on.

Each document distinguishes **As-built** (verifiable in the repo today) from
**Planned / Proposed** (where the product is headed). Treat every "Planned" item
as a candidate backlog entry.

---

*Last updated: 2026-06-02 · Grounded against `safahati` @ branch `main`.*
