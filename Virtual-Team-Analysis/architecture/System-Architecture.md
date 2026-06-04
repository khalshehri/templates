# Safahati — High-Level System Architecture

> Monolith: **one Next.js application** serves both the management **portal** and
> the **published sites** (`/{templateId}`). Three layers — Frontend, Backend,
> Database. Diagrams below show the structure and the tech stack at each layer.

---

## 1. High-level diagram (with tech stack)

```mermaid
flowchart TB
    subgraph Users
      OWNER["👤 Site Owner<br/>(logs into portal)"]
      VISITOR["🌐 Visitor<br/>(views published site)"]
    end

    subgraph APP["🧩 MONOLITH — One Next.js 16 App (TypeScript)"]
      direction TB

      subgraph FE["FRONTEND — Next.js (React 19) + Tailwind CSS 4 · Arabic RTL / English LTR"]
        PORTAL["🛠️ Portal / Dashboard<br/>form-based editor<br/>(pick template + fill content)"]
        SITE["📄 Published Site<br/>rendered at /{templateId}"]
      end

      subgraph BE["BACKEND — Next.js API Routes (same app)"]
        AUTH["🔐 Auth<br/>NextAuth v5 (email/password, bcrypt)"]
        API["⚙️ Site & Section APIs<br/>create / edit / save / publish"]
        REG["🧱 Template Registry<br/>14 block types · 173 templates"]
        VAL["✅ Validation<br/>Zod schemas"]
        UPLOAD["🖼️ Image Upload"]
      end
    end

    subgraph DATA["DATABASE"]
      DB[("🗄️ PostgreSQL (Neon)<br/>via Drizzle ORM<br/>users · sites · sections")]
    end

    OWNER -->|manage & publish| PORTAL
    VISITOR -->|GET /{templateId}| SITE

    PORTAL --> AUTH
    PORTAL --> API
    API --> VAL
    API --> REG
    SITE --> REG
    API --> UPLOAD

    AUTH --> DB
    API --> DB
    SITE -->|read published config| DB
```

---

## 2. Same picture in ASCII (if Mermaid doesn't render)

```
        👤 Owner                                   🌐 Visitor
   (manages template)                          (views site)
           │                                        │
           │ login + edit + publish                 │ GET /{templateId}
           ▼                                        ▼
 ╔════════════════════════════════════════════════════════════════════╗
 ║                MONOLITH — ONE NEXT.JS 16 APP (TypeScript)           ║
 ║                                                                    ║
 ║   FRONTEND  (React 19 + Tailwind 4, Arabic RTL / English LTR)      ║
 ║   ┌──────────────────────────┐   ┌──────────────────────────────┐  ║
 ║   │  Portal / Dashboard      │   │  Published Site              │  ║
 ║   │  - form-based editor     │   │  - rendered at /{templateId} │  ║
 ║   └────────────┬─────────────┘   └───────────────┬──────────────┘  ║
 ║                │                                  │                 ║
 ║   BACKEND  (Next.js API routes — same app)        │                 ║
 ║   ┌────────────▼──────────────────────────────────▼──────────────┐ ║
 ║   │  Auth (NextAuth v5) │ Site/Section APIs │ Template Registry   │ ║
 ║   │  Zod validation     │ Image upload      │ (14 types/173 tmpl) │ ║
 ║   └───────────────────────────────┬───────────────────────────────┘ ║
 ╚═══════════════════════════════════│════════════════════════════════╝
                                     │  Drizzle ORM
                                     ▼
                        ┌────────────────────────────┐
                        │   DATABASE — PostgreSQL    │
                        │        (Neon)              │
                        │  users · sites · sections  │
                        └────────────────────────────┘
```

---

## 3. Layers & tech stack at a glance

| Layer | What it is | Technology |
|---|---|---|
| **Frontend** | Portal (form-based editor) **+** the published site at `/{templateId}` | Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Framer Motion, Zustand |
| **Backend** | API routes inside the same app: auth, site/section save & publish, template registry, image upload | Next.js API routes, NextAuth v5 (bcrypt), Zod |
| **Database** | One relational DB: `users`, `sites`, `sections` (content as JSON) | PostgreSQL (Neon) + Drizzle ORM |
| **Deployment** | Single deployable unit (monolith) serving portal + all sites | One Next.js build/deploy |

---

## 4. The two flows in one line each

- **Manage & publish:** Owner → Portal (form) → Backend API → save to DB → set status *published*.
- **View:** Visitor → `GET /{templateId}` → Backend reads config from DB → Template Registry renders the page.

---

*Monolith model: frontend, backend, and database are layers of one Next.js
application — not separate services. (Note: in the current code the public path is
`/sites/[slug]`; `/{templateId}` is the same idea, simplified.)*
