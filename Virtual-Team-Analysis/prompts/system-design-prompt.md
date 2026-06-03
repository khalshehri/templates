# Prompt — Design the Safahati System & Technology Stack

> **How to use.** Paste the prompt block below into a capable model (or hand it to
> a solution architect). It is grounded in Safahati's *as-built* reality and the
> business requirements so the output is a realistic evolution of the current
> system, not a greenfield fantasy. Replace nothing unless your context changed.

---

## The prompt

```
ROLE
You are a senior software/solutions architect. Design the end-to-end system
architecture and technology stack for "Safahati," and justify every major
technology choice. Optimize for the constraints and objectives below — do not
propose technology the business cannot afford to run or operate.

PRODUCT CONTEXT
Safahati is a multi-tenant, config-driven website platform for the MENA/Saudi SME
market (freelancers, SMEs, small agencies). It is NOT a drag-and-drop builder: a
client's website is a database record plus an ordered list of "section" records,
each pointing at a pre-built, fully bilingual (Arabic RTL / English LTR) template
and carrying its content as JSON config. A form-based admin lets owners pick
templates and fill content; a public renderer assembles the page. Core promise:
"a professional bilingual website in minutes, by choosing not designing."

AS-BUILT TODAY (the starting point — evolve this, don't discard it)
- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5, Tailwind CSS 4.
- Component system: 14 block types, 173 bilingual templates (registry pattern);
  editor forms auto-generated from Zod schemas via runtime introspection.
- Data: Neon serverless Postgres via Drizzle ORM (neon-http). 3 tables:
  users, sites, sections. Section "config" is stored as TEXT holding JSON (not JSONB).
- Auth: NextAuth v5, email/password only (bcrypt).
- Routing: sites served at path /sites/[slug] (+ ?preview=true for owner drafts);
  middleware is AUTH-GUARD ONLY. Subdomain multi-tenancy is NOT built.
- API: ~7 Next.js route handlers (auth, health, sites CRUD, sections replace, upload).
- Deploy: Vercel config present; team is strong in React/Next.js.

KNOWN PROBLEMS TO SOLVE IN THE DESIGN (treat as hard requirements)
1. Subdomain (and later custom-domain) multi-tenancy: slug.safahati.com must
   resolve the correct tenant and render its published site (or owner preview).
2. Monetization: subscription billing with plan-limit enforcement (site count,
   custom domain, branding/watermark, AI quota). None exists today.
3. Data integrity: the current request-path schema bootstrap can DROP tables on a
   detected mismatch (catastrophic), and the section save is a non-transactional
   delete-all-then-reinsert (corruption risk). Design these out: versioned
   migrations only, and atomic/transactional content writes.
4. Bilingual parity (Arabic RTL + English LTR) is mandatory across every surface.

BUSINESS CONSTRAINTS (do not violate)
- Single codebase, single deployment, multi-tenant by configuration.
- Cost-sensitive infrastructure; VPS-friendly (e.g., Hetzner) / serverless
  preferred, especially early. Keep marginal cost per tenant low (high gross margin).
- Team is React/Next.js-strong; favor stack choices they can operate.
- Form-based admin (no visual canvas).
- Bilingual Arabic + English are equally weighted.

PLANNED CAPABILITIES TO ACCOMMODATE (design for, phase in)
Google OAuth + email verification/reset (Resend), Stripe billing, custom domains,
AI bilingual copy assist (Claude via Vercel AI SDK), caching (Redis), media/object
storage (S3/MinIO), and owner-facing analytics.

DELIVERABLES — produce all of the following:
1. ARCHITECTURE OVERVIEW: a high-level diagram (ASCII or Mermaid) and a narrative
   of the major components and how a request flows through them, for BOTH the admin
   app and a public tenant site.
2. MULTI-TENANCY DESIGN: how tenants are isolated and resolved (host-header routing,
   slug→tenant lookup, preview gating), and the path from subdomains to custom
   domains (incl. domain verification and TLS).
3. DATA ARCHITECTURE: the target schema (tables/columns/keys/indexes), the decision
   on TEXT-vs-JSONB for section config, how content is validated on write, the
   migration strategy (versioned, non-destructive), and the transactional model for
   section saves. Note what changes vs the 3 current tables and why.
4. TECHNOLOGY STACK TABLE: for each layer — frontend, backend/API, database,
   caching, object storage, auth, payments, email, AI, hosting/infra, DNS/CDN,
   observability, CI/CD — give the CHOICE, the ROLE it plays, the RATIONALE, and at
   least one ALTERNATIVE considered with the trade-off. Anchor to the as-built
   stack and only deviate with justification.
5. KEY CROSS-CUTTING CONCERNS: bilingual/RTL handling, security & tenant data
   isolation, performance/caching strategy, media handling, secrets management,
   and observability (logs/metrics/health/alerts).
6. SCALABILITY & COST: how the design scales from 10 to 10,000 tenants while
   protecting the low-marginal-cost goal; call out the cost drivers and how each is
   contained. Compare the serverless (Vercel/Neon) path vs a VPS (Hetzner/Docker/
   Nginx) path and recommend one for the early stage with reasoning.
7. PHASED IMPLEMENTATION ROADMAP: sequence the changes (P0 first: multi-tenancy,
   billing, data-integrity) into phases with dependencies, mapping each to the
   capabilities above.
8. RISKS & TRADE-OFFS: the top architectural risks and how the design mitigates
   them; explicitly address the three known problems.

OUTPUT FORMAT
- Markdown, with clear section headings matching the deliverables above.
- Diagrams in Mermaid or ASCII.
- The technology stack as a table (Layer | Choice | Role | Rationale | Alternative
  considered).
- Be specific and decisive: recommend, don't enumerate options endlessly. Where you
  make an assumption, state it.
- Keep recommendations consistent with the constraints — flag anything that would
  force a constraint to be relaxed (e.g., a cost or operational trade-off).
```

---

## Notes for the requester

- This prompt assumes the architect should **evolve the current system**, not start
  over — that's why the as-built stack is spelled out as the baseline.
- It encodes the three P0 problems from the BRD
  ([../03-Business-Analyst/Business-Requirements-Document.md](../03-Business-Analyst/Business-Requirements-Document.md):
  BRQ-10 subdomains, BRQ-12 monetization, BRQ-14 data integrity) as hard
  requirements so the design can't quietly skip them.
- The cost/VPS-vs-serverless deliverable (#6) reflects the documented preference for
  low-cost, VPS-friendly infrastructure early on.
- If you want the design output saved into this repo, point the architect at
  `Virtual-Team-Analysis/05-Frontend-Engineer/`, `06-Backend-Engineer/`, or a new
  `architecture/` folder.
