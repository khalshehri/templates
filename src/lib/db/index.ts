import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "path";
import fs from "fs";
import os from "os";

// Use /tmp on Vercel/serverless, local data directory locally
const dbPath = process.env.VERCEL
  ? path.join("/tmp", "safahati.db")
  : path.join(process.cwd(), "data", "safahati.db");

// Create directory if it doesn't exist (for local development)
const dataDir = path.dirname(dbPath);
if (!process.env.VERCEL && !fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const sqlite = new Database(dbPath);

// Enable WAL mode for better concurrent read performance
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });
export { schema };
