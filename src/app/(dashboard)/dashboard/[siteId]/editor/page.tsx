import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db, schema } from "@/lib/db";
import { eq, and } from "drizzle-orm";
import { EditorClient } from "@/components/editor/editor-client";
import type { SectionData } from "@/types/blocks";

export default async function EditorPage({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
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
    redirect("/dashboard");
  }

  const sections = await db
    .select()
    .from(schema.sections)
    .where(eq(schema.sections.siteId, siteId))
    .orderBy(schema.sections.sortOrder);

  const parsedTheme = JSON.parse(site.theme);
  const parsedSections: SectionData[] = (sections || []).map((s: typeof schema.sections.$inferSelect) => ({
    ...s,
    config: JSON.parse(s.config),
    blockType: s.blockType as SectionData["blockType"],
  }));

  return (
    <EditorClient
      siteId={site.id}
      siteName={site.name}
      siteSlug={site.slug}
      initialStatus={site.status as "draft" | "published"}
      initialTheme={parsedTheme}
      initialSections={parsedSections}
    />
  );
}
