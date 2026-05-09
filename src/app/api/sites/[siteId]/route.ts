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

  const sites = await db
    .select()
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, session.user.id))
    );

  const site = sites?.[0];

  if (!site) {
    return NextResponse.json({ error: "Site not found" }, { status: 404 });
  }

  const sections = await db
    .select()
    .from(schema.sections)
    .where(eq(schema.sections.siteId, siteId))
    .orderBy(schema.sections.sortOrder);

  return NextResponse.json({
    site: {
      ...site,
      theme: JSON.parse(site.theme),
    },
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
    const body = await request.json();
    const updates: Record<string, unknown> = { updatedAt: Date.now() };

    if (body.theme) updates.theme = JSON.stringify(body.theme);
    if (body.status) updates.status = body.status;
    if (body.language) updates.language = body.language;

    await db
      .update(schema.sites)
      .set(updates)
      .where(eq(schema.sites.id, siteId));

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[PUT /api/sites/[siteId]]", e);
    return NextResponse.json(
      { error: "Failed to update site" },
      { status: 500 }
    );
  }
}

export async function DELETE(
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

  try {
    await db.delete(schema.sites).where(eq(schema.sites.id, siteId));
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[DELETE /api/sites/[siteId]]", e);
    return NextResponse.json(
      { error: "Failed to delete site" },
      { status: 500 }
    );
  }
}
