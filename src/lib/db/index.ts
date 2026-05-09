import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

let dbInstance: ReturnType<typeof drizzle> | null = null;
let sqlClient: ReturnType<typeof neon> | null = null;

function initDb() {
  if (dbInstance && sqlClient) {
    return { db: dbInstance, sql: sqlClient };
  }

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

// Lazy initialize with Proxy that properly delegates all operations
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get: (target, prop, receiver) => {
    const { db: instance } = initDb();
    return Reflect.get(instance, prop, instance);
  }
}) as ReturnType<typeof drizzle>;

// Initialize schema on first use
let schemaInitialized = false;

export async function ensureSchema() {
  if (schemaInitialized) return;

  try {
    const { sql } = initDb();
    console.log("[DB] Ensuring schema exists...");

    // Check if users table has correct column types
    const columnsCheck = await sql`
      SELECT column_name, data_type FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'users'
    `;

    // If users table exists and has wrong data types, drop and recreate
    let shouldRecreate = false;
    if (
      Array.isArray(columnsCheck) &&
      columnsCheck.length > 0 &&
      typeof columnsCheck[0] === "object"
    ) {
      const columns = columnsCheck as Array<{
        column_name: string;
        data_type: string;
      }>;
      const createdAtCol = columns.find(
        (col) => col.column_name === "created_at"
      );
      // If created_at is INTEGER (wrong) instead of BIGINT, we need to recreate
      if (createdAtCol && createdAtCol.data_type === "integer") {
        console.log(
          "[DB] Schema mismatch detected: created_at is INTEGER, should be BIGINT"
        );
        shouldRecreate = true;
      }
    }

    // Only drop tables if there's a schema mismatch
    if (shouldRecreate) {
      console.log(
        "[DB] Dropping tables due to schema mismatch (will recreate with correct schema)..."
      );
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
