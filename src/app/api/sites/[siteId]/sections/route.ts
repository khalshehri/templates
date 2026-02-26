import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db, schema } from "@/lib/db";
import { eq, and } from "drizzle-orm";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ siteId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { siteId } = await params;

  // Verify ownership
  const site = db
    .select()
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, session.user.id))
    )
    .get();

  if (!site) {
    return NextResponse.json({ error: "Site not found" }, { status: 404 });
  }

  const sections = db
    .select()
    .from(schema.sections)
    .where(eq(schema.sections.siteId, siteId))
    .orderBy(schema.sections.sortOrder)
    .all();

  return NextResponse.json({
    sections: sections.map((s) => ({
      ...s,
      config: JSON.parse(s.config),
    })),
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ siteId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { siteId } = await params;

  // Verify ownership
  const site = db
    .select()
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, session.user.id))
    )
    .get();

  if (!site) {
    return NextResponse.json({ error: "Site not found" }, { status: 404 });
  }

  try {
    const { sections } = await request.json();

    if (!Array.isArray(sections)) {
      return NextResponse.json(
        { error: "Sections must be an array" },
        { status: 400 }
      );
    }

    // Transaction: delete old, insert new
    db.delete(schema.sections)
      .where(eq(schema.sections.siteId, siteId))
      .run();

    for (const section of sections) {
      db.insert(schema.sections)
        .values({
          id: section.id || crypto.randomUUID(),
          siteId,
          blockType: section.blockType,
          templateId: section.templateId,
          config: JSON.stringify(section.config),
          sortOrder: section.sortOrder,
          isVisible: section.isVisible ?? true,
        })
        .run();
    }

    // Update site's updatedAt
    db.update(schema.sites)
      .set({ updatedAt: new Date() })
      .where(eq(schema.sites.id, siteId))
      .run();

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save sections" },
      { status: 500 }
    );
  }
}
