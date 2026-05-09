import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "path";
import fs from "fs";
import * as schema from "./schema";

// Use /tmp on Vercel, local data directory on development
const dbPath = process.env.VERCEL
  ? path.join("/tmp", "safahati.db")
  : path.join(process.cwd(), "data", "safahati.db");

const dataDir = path.dirname(dbPath);

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });

// Initialize tables with better error handling
function initializeSchema() {
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
    console.log("[DB] Schema initialized successfully");
  } catch (e) {
    console.error("[DB] Error initializing schema:", e);
  }
}

// Initialize on module load
initializeSchema();

export { schema };
