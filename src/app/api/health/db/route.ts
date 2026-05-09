import { NextResponse } from "next/server";
import { db, schema, ensureSchema } from "@/lib/db";

export async function GET() {
  try {
    // Ensure schema exists
    await ensureSchema();

    // Test database connection by querying users table
    const users = await db.select().from(schema.users).limit(1);

    return NextResponse.json({
      status: "ok",
      database: "connected",
      schemaInitialized: true,
      tablesAccessible: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Health Check] Database error:", error);
    return NextResponse.json(
      {
        status: "error",
        database: "error",
        schemaInitialized: false,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
