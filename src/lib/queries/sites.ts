import { db, schema } from "@/lib/db";
import { eq, and } from "drizzle-orm";
import type { SectionData } from "@/types/blocks";
import type { SiteTheme } from "@/types/theme";

export interface PublicSiteData {
  site: {
    id: string;
    name: string;
    slug: string;
    industry: string;
    theme: SiteTheme;
    language: "en" | "ar";
    status: "draft" | "published";
  };
  sections: SectionData[];
}

/** Fetch a published site by slug. Returns null if not found or not published. */
export function getPublishedSiteBySlug(slug: string): PublicSiteData | null {
  const site = db
    .select()
    .from(schema.sites)
    .where(
      and(
        eq(schema.sites.slug, slug),
        eq(schema.sites.status, "published")
      )
    )
    .get();

  if (!site) return null;

  return buildSiteData(site);
}

/** Fetch any site by slug (regardless of status). Used for owner preview. */
export function getSiteBySlug(slug: string): PublicSiteData | null {
  const site = db
    .select()
    .from(schema.sites)
    .where(eq(schema.sites.slug, slug))
    .get();

  if (!site) return null;

  return buildSiteData(site);
}

/** Check if a user owns a specific site. */
export function isOwner(siteId: string, userId: string): boolean {
  const site = db
    .select({ id: schema.sites.id })
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, userId))
    )
    .get();

  return !!site;
}

function buildSiteData(site: typeof schema.sites.$inferSelect): PublicSiteData {
  const sections = db
    .select()
    .from(schema.sections)
    .where(eq(schema.sections.siteId, site.id))
    .orderBy(schema.sections.sortOrder)
    .all();

  return {
    site: {
      id: site.id,
      name: site.name,
      slug: site.slug,
      industry: site.industry,
      theme: JSON.parse(site.theme),
      language: site.language as "en" | "ar",
      status: site.status as "draft" | "published",
    },
    sections: sections.map((s: typeof schema.sections.$inferSelect) => ({
      ...s,
      config: JSON.parse(s.config),
      blockType: s.blockType as SectionData["blockType"],
    })),
  };
}
