import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

let dbInstance: ReturnType<typeof drizzle> | null = null;
let sqlClient: ReturnType<typeof neon> | null = null;

function initDb() {
  if (dbInstance) return { db: dbInstance, sql: sqlClient! };

  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is required. Set it in your environment variables."
    );
  }

  console.log("[DB] Initializing Neon PostgreSQL...");
  sqlClient = neon(process.env.DATABASE_URL);
  dbInstance = drizzle(sqlClient, { schema });
  return { db: dbInstance, sql: sqlClient };
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get: (_, prop) => {
    const { db: dbInst } = initDb();
    return dbInst[prop as keyof typeof dbInst];
  },
}) as ReturnType<typeof drizzle>;

// Initialize schema on first use
let schemaInitialized = false;

export async function ensureSchema() {
  if (schemaInitialized) return;

  try {
    const { sql } = initDb();
    console.log("[DB] Ensuring schema exists...");

    // Check if tables exist and have correct schema
    const tableCheck = await sql`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name IN ('users', 'sites', 'sections')
    `;

    // If any tables exist, drop and recreate to ensure correct schema
    if (Array.isArray(tableCheck) && tableCheck.length > 0) {
      console.log("[DB] Recreating tables with correct schema...");
      await sql`DROP TABLE IF EXISTS sections CASCADE`;
      await sql`DROP TABLE IF EXISTS sites CASCADE`;
      await sql`DROP TABLE IF EXISTS users CASCADE`;
    }

    // Create users table with BIGINT for timestamps
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at BIGINT NOT NULL
      )
    `;
    console.log("[DB] ✓ users table (BIGINT timestamps)");

    // Create sites table with BIGINT for timestamps
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
    console.log("[DB] ✓ sites table (BIGINT timestamps)");

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
