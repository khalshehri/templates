import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is required. Set it in your environment variables."
  );
}

console.log("[DB] Initializing Neon PostgreSQL...");

// Create Neon client
const sql = neon(process.env.DATABASE_URL);

// Create Drizzle instance
export const db = drizzle(sql, { schema });

// Initialize schema on first use
let schemaInitialized = false;

export async function ensureSchema() {
  if (schemaInitialized) return;

  try {
    console.log("[DB] Ensuring schema exists...");

    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at BIGINT NOT NULL
      )
    `;
    console.log("[DB] ✓ users table");

    // Create sites table
    await sql`
      CREATE TABLE IF NOT EXISTS sites (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        name TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        industry TEXT NOT NULL,
        theme TEXT NOT NULL,
        language TEXT NOT NULL DEFAULT 'en',
        status TEXT NOT NULL DEFAULT 'draft',
        created_at BIGINT NOT NULL,
        updated_at BIGINT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;
    console.log("[DB] ✓ sites table");

    // Create sections table
    await sql`
      CREATE TABLE IF NOT EXISTS sections (
        id TEXT PRIMARY KEY,
        site_id TEXT NOT NULL,
        block_type TEXT NOT NULL,
        template_id TEXT NOT NULL,
        config TEXT NOT NULL,
        sort_order INTEGER NOT NULL,
        is_visible BOOLEAN NOT NULL DEFAULT true,
        FOREIGN KEY (site_id) REFERENCES sites(id) ON DELETE CASCADE
      )
    `;
    console.log("[DB] ✓ sections table");

    schemaInitialized = true;
    console.log("[DB] Schema initialized successfully ✓");
  } catch (error) {
    console.error("[DB] Error initializing schema:", error);
    throw error;
  }
}

export { schema };
