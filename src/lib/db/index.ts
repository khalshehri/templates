import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn(
    "DATABASE_URL not set. Using SQLite fallback for development.",
    "Set DATABASE_URL to use PostgreSQL."
  );
}

// Use PostgreSQL if DATABASE_URL is set, otherwise fallback to SQLite for local development
let db: any;

if (connectionString) {
  // PostgreSQL with Neon
  const sql = neon(connectionString);
  db = drizzle(sql, { schema });

  // Initialize schema
  sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at BIGINT NOT NULL
    );

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
    );

    CREATE TABLE IF NOT EXISTS sections (
      id TEXT PRIMARY KEY,
      site_id TEXT NOT NULL,
      block_type TEXT NOT NULL,
      template_id TEXT NOT NULL,
      config TEXT NOT NULL,
      sort_order INTEGER NOT NULL,
      is_visible BOOLEAN NOT NULL DEFAULT true,
      FOREIGN KEY (site_id) REFERENCES sites(id) ON DELETE CASCADE
    );
  `.catch(() => {
    // Tables might already exist
  });
} else {
  // SQLite fallback for local development
  import("better-sqlite3").then((module) => {
    const Database = module.default;
    const path = require("path");
    const fs = require("fs");

    const dbPath = path.join(process.cwd(), "data", "safahati.db");
    const dataDir = path.dirname(dbPath);

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const sqlite = new Database(dbPath);
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("foreign_keys = ON");

    db = require("drizzle-orm/better-sqlite3").drizzle(sqlite, { schema });

    try {
      sqlite.exec(`
        CREATE TABLE IF NOT EXISTS users (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password_hash TEXT NOT NULL,
          created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS sites (
          id TEXT PRIMARY KEY,
          user_id TEXT NOT NULL,
          name TEXT NOT NULL,
          slug TEXT NOT NULL UNIQUE,
          industry TEXT NOT NULL,
          theme TEXT NOT NULL,
          language TEXT NOT NULL DEFAULT 'en',
          status TEXT NOT NULL DEFAULT 'draft',
          created_at INTEGER NOT NULL,
          updated_at INTEGER NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS sections (
          id TEXT PRIMARY KEY,
          site_id TEXT NOT NULL,
          block_type TEXT NOT NULL,
          template_id TEXT NOT NULL,
          config TEXT NOT NULL,
          sort_order INTEGER NOT NULL,
          is_visible INTEGER NOT NULL DEFAULT 1,
          FOREIGN KEY (site_id) REFERENCES sites(id) ON DELETE CASCADE
        );
      `);
    } catch (e) {
      // Tables might already exist
    }
  });
}

export { db, schema };
