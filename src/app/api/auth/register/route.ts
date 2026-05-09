import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db, schema, ensureSchema } from "@/lib/db";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    // Ensure database schema exists
    await ensureSchema();

    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    try {
      // Check if email already exists
      const existing = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.email, email.toLowerCase()));

      if (existing && existing.length > 0) {
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 409 }
        );
      }
    } catch (dbError) {
      console.error("[DB Check Error]", dbError);
      throw dbError;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    try {
      await db.insert(schema.users).values({
        id: crypto.randomUUID(),
        name,
        email: email.toLowerCase(),
        passwordHash,
        createdAt: Date.now(),
      });
    } catch (insertError) {
      console.error("[DB Insert Error]", insertError);
      throw insertError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[POST /api/auth/register] Full error:", error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: "Registration failed", details: error instanceof Error ? error.message : undefined },
      { status: 500 }
    );
  }
}
