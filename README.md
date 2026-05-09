# Safahati — Multi-Tenant Website Platform

A modern, config-driven website platform designed for SMEs, freelancers, and agencies. One codebase, one deployment, multiple clients via subdomain routing. Fully bilingual (Arabic RTL + English LTR).

## Overview

Safahati is **not** a drag-and-drop builder. It's a **config-driven** platform where each client's website is defined by backend configuration (template, components, content, theme). The admin dashboard provides a form-based interface to manage website configuration without any visual editor complexity.

**Key Features:**
- 31 component types with 112 templates
- 13 industry-specific pre-built templates
- Multi-tenant architecture with subdomain routing
- Bilingual support (Arabic/English)
- Dynamic form generation for content management
- Theme customization via CSS variables
- Real-time preview in the editor

## Tech Stack

### Frontend
- **Next.js 15** — React framework with App Router
- **TypeScript 5** — Type-safe development
- **Tailwind CSS 4** — Utility-first styling
- **shadcn/ui** — Component library
- **Zustand** — State management
- **Framer Motion** — Animations

### Backend
- **PostgreSQL 16** (via Neon) — Database
- **Drizzle ORM** — Type-safe database access
- **Redis 7** — Caching
- **MinIO** — S3-compatible object storage
- **Next.js API Routes** — Backend endpoints

### Authentication & Services
- **NextAuth.js v5** — Email/password + Google OAuth
- **Vercel AI SDK** — AI integration
- **Claude API** — LLM capabilities
- **Resend** — Transactional email
- **Stripe** — Payment processing

### Infrastructure
- **Vercel** — Hosting and deployment
- **Neon** — Managed PostgreSQL
- **Cloudflare** — DNS and CDN
- **Docker** — Containerization (for local development)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm 9+** or **pnpm 8+** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **PostgreSQL 14+** (for local development, or use Neon cloud version)

### Optional
- **Docker** — For containerized development
- **VS Code** — Recommended editor

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/khalshehri/safahati.git
cd safahati
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local  # if .env.example exists
# Otherwise, create .env.local manually
```

Add the following environment variables:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/safahati

# Authentication
AUTH_SECRET=your-secret-key-here-min-32-chars
AUTH_TRUST_HOST=true

# NextAuth (for OAuth)
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Vercel AI SDK
OPENAI_API_KEY=your-openai-key  # or ANTHROPIC_API_KEY for Claude

# Email Service (Resend)
RESEND_API_KEY=your-resend-api-key

# Payment Processing (Stripe)
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key

# Storage (MinIO/S3)
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY_ID=minioadmin
S3_SECRET_ACCESS_KEY=minioadmin
S3_BUCKET=safahati
S3_REGION=us-east-1
```

**Important:** For local development, you can use simplified values. For production (Vercel deployment), use actual API keys.

## Database Setup

### Option A: Local PostgreSQL

1. **Install PostgreSQL:**
   ```bash
   # macOS with Homebrew
   brew install postgresql@16
   brew services start postgresql@16
   
   # Or download from https://www.postgresql.org/download/
   ```

2. **Create Database:**
   ```bash
   createdb safahati
   ```

3. **Update `.env.local`:**
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/safahati
   ```

4. **Run Migrations:**
   ```bash
   npm run db:push
   # or
   npx drizzle-kit push:pg
   ```

### Option B: Neon Cloud (Recommended)

1. **Sign up at [Neon](https://neon.tech/)** (free tier available)

2. **Create a PostgreSQL database**

3. **Copy the connection string to `.env.local`:**
   ```env
   DATABASE_URL=postgresql://neon_owner:password@endpoint.neon.tech/safahati
   ```

4. **Run Migrations:**
   ```bash
   npm run db:push
   ```

## Running the Application Locally

### Start the Development Server

```bash
npm run dev
```

The application will be available at:
- **Main app (dashboard):** http://localhost:3000
- **Site preview:** http://localhost:3000 (subdomain routing in development)

### In Another Terminal (Optional)

#### Start Database GUI (Drizzle Studio)
```bash
npm run db:studio
```
Access at http://localhost:5555

## Development Workflow

### Project Structure

```
safahati/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Admin dashboard routes
│   │   ├── (site)/            # Public site routes
│   │   ├── api/               # API endpoints
│   │   └── middleware.ts       # Subdomain routing
│   ├── components/
│   │   ├── blocks/            # 31 block types (hero, footer, etc.)
│   │   └── ui/                # shadcn/ui components
│   ├── lib/
│   │   ├── registry.ts        # Block registration system
│   │   ├── db/                # Database setup and schema
│   │   └── utils.ts           # Utility functions
│   ├── styles/                # Global CSS
│   └── types/                 # TypeScript types
├── public/                     # Static assets
├── .env.local                  # Local environment variables
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── tailwind.config.ts         # Tailwind CSS configuration
```

### Key Features to Explore

#### 1. **Block Registry**
   - File: `src/lib/registry.ts`
   - Manages 31 component types and 112 templates
   - Example: Hero block with 17 templates

#### 2. **Dashboard**
   - Route: `/dashboard` (requires login)
   - Add/edit websites
   - Configure sections and content
   - Manage theme colors

#### 3. **Live Editor**
   - Route: `/dashboard/[siteId]/update`
   - Dynamic form generation based on block config
   - Real-time preview
   - Bilingual support (Arabic/English toggle)

#### 4. **Public Site Rendering**
   - Route: `[subdomain].localhost:3000`
   - Reads config from database
   - Renders appropriate template
   - Supports all 112 templates

### Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Database migrations
npm run db:push          # Apply migrations
npm run db:studio       # Open Drizzle Studio GUI

# Linting
npm run lint

# Format code
npm run format
```

## Authentication Setup

### 1. Create a Test User

```bash
# Via the dashboard:
# 1. Go to http://localhost:3000
# 2. Click "Sign up" or "Register"
# 3. Enter email and password
# 4. Verify email (check terminal/email service logs)
```

### 2. Google OAuth (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Set redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

## Testing the Application

### 1. **Register a User**
   ```
   Email: testuser@example.com
   Password: TestPassword123!
   ```

### 2. **Add a Website**
   - Click "Add New Site" in the dashboard
   - Select an industry template (e.g., "Freelancer")
   - Fill in the basic information

### 3. **Edit the Site**
   - Click "Edit" or "Update" on your site
   - Click "Open Editor"
   - Test editing sections and content
   - Toggle between Arabic/English

### 4. **Preview the Site**
   - Click "View Site" or "Preview"
   - See your site rendered with all components

### 5. **Test Database Connection**
   ```bash
   curl http://localhost:3000/api/health/db
   # Expected response: {"status":"ok"}
   ```

## Common Issues & Troubleshooting

### Issue: "Cannot read properties of undefined" (React #130)

**Cause:** Unsafe property access in template files

**Solution:** Update to the latest code
```bash
git pull origin main
npm install
npm run dev
```

### Issue: Database Connection Failed

**Check:**
```bash
# 1. Is Postgres running?
psql -U postgres -d safahati

# 2. Is DATABASE_URL correct in .env.local?
echo $DATABASE_URL

# 3. Test the connection
node -e "console.log(process.env.DATABASE_URL)"
```

### Issue: Port 3000 Already in Use

**Solution:**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Module Not Found

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Issue: Environment Variables Not Loading

**Check:**
1. File is named `.env.local` (not `.env`)
2. Restart dev server after changes
3. Use `echo $VARIABLE_NAME` to verify

### Issue: Subdomain Routing Not Working Locally

**Solution:** Use local tunneling for testing subdomains
```bash
# Install ngrok
npm install -g ngrok

# Start ngrok
ngrok http 3000

# Use the ngrok URL with subdomains
https://subdomain.abc.ngrok.io
```

## Deployment to Vercel

### 1. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

### 2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the `safahati` project

### 3. **Add Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.local`:
     - `DATABASE_URL` (use Neon connection string)
     - `AUTH_SECRET` (generate new secure key)
     - `NEXTAUTH_SECRET`
     - All other API keys

### 4. **Deploy**
   - Vercel auto-deploys on `git push`
   - Or manually trigger via dashboard

### 5. **Test Production**
   - Dashboard: `app.safahati.com`
   - Client sites: `client-slug.safahati.com`

## Performance Tips

1. **Use Redis Caching:**
   - Configure Redis connection in `src/lib/db/cache.ts`
   - Speeds up database queries

2. **Image Optimization:**
   - Use Next.js Image component
   - Set proper sizes and alt text

3. **Database Indexing:**
   - Check `src/lib/db/schema.ts` for indexes
   - Add more for frequently queried columns

4. **Code Splitting:**
   - Next.js does this automatically
   - Monitor bundle size: `npm run build`

## Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test locally: `npm run dev`
4. Commit: `git commit -m "Add my feature"`
5. Push: `git push origin feature/my-feature`
6. Create a Pull Request

## Support & Documentation

- **Project Plan:** See `.claude/plans/mighty-yawning-candy.md`
- **GitHub Issues:** Report bugs via GitHub Issues
- **Email:** kh.m.alshehri@gmail.com

## License

This project is private and owned by Khalid Alshehri.

---

**Last Updated:** May 2026
