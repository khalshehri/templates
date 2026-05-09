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
    site: {
      ...site,
      theme: JSON.parse(site.theme),
    },
    sections: sections.map((s: typeof schema.sections.$inferSelect) => ({
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
    const body = await request.json();
    const updates: Record<string, unknown> = { updatedAt: new Date() };

    if (body.name) updates.name = body.name;
    if (body.language) updates.language = body.language;
    if (body.status) updates.status = body.status;
    if (body.theme) updates.theme = JSON.stringify(body.theme);

    db.update(schema.sites)
      .set(updates)
      .where(eq(schema.sites.id, siteId))
      .run();

    return NextResponse.json({ success: true });
  } catch {
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

  // Sections cascade-delete due to FK constraint
  db.delete(schema.sites).where(eq(schema.sites.id, siteId)).run();

  return NextResponse.json({ success: true });
}
