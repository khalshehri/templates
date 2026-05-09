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
    const userId = crypto.randomUUID();
    const now = Date.now();

    try {
      console.log("[Register] Inserting user:", { userId, name, email: email.toLowerCase(), createdAt: now });

      const result = await db.insert(schema.users).values({
        id: userId,
        name,
        email: email.toLowerCase(),
        passwordHash,
        createdAt: now,
      });

      console.log("[Register] Insert result:", result);

      // Verify user was saved
      const savedUser = await db.select().from(schema.users).where(eq(schema.users.id, userId));
      console.log("[Register] User verification:", savedUser);

      if (!savedUser || savedUser.length === 0) {
        console.error("[Register] ✗ User was not saved to database!");
        return NextResponse.json(
          { error: "User registration failed - data not persisted", userId },
          { status: 500 }
        );
      }

      console.log("[Register] ✓ User successfully saved");
    } catch (insertError) {
      console.error("[DB Insert Error]", insertError);
      throw insertError;
    }

    return NextResponse.json({ success: true, userId });
  } catch (error) {
    console.error("[POST /api/auth/register] Full error:", error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: "Registration failed", details: error instanceof Error ? error.message : undefined },
      { status: 500 }
    );
  }
}
