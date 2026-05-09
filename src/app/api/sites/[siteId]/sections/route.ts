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
  const sites = await db
    .select()
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, session.user.id))
    );

  if (!sites || sites.length === 0) {
    return NextResponse.json({ error: "Site not found" }, { status: 404 });
  }

  const sections = await db
    .select()
    .from(schema.sections)
    .where(eq(schema.sections.siteId, siteId))
    .orderBy(schema.sections.sortOrder);

  return NextResponse.json({
    sections: (sections || []).map((s) => ({
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
  const sites = await db
    .select()
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, session.user.id))
    );

  if (!sites || sites.length === 0) {
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

    // Delete old sections
    await db.delete(schema.sections)
      .where(eq(schema.sections.siteId, siteId));

    // Insert new sections
    for (const section of sections) {
      await db.insert(schema.sections)
        .values({
          id: section.id || crypto.randomUUID(),
          siteId,
          blockType: section.blockType,
          templateId: section.templateId,
          config: JSON.stringify(section.config),
          sortOrder: section.sortOrder,
          isVisible: section.isVisible ?? true,
        });
    }

    // Update site's updatedAt
    await db.update(schema.sites)
      .set({ updatedAt: Date.now() })
      .where(eq(schema.sites.id, siteId));

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[PUT sections]", e);
    return NextResponse.json(
      { error: "Failed to save sections" },
      { status: 500 }
    );
  }
}
