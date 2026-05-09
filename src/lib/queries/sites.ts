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

export async function getPublishedSiteBySlug(slug: string): Promise<PublicSiteData | null> {
  const sites = await db
    .select()
    .from(schema.sites)
    .where(
      and(
        eq(schema.sites.slug, slug),
        eq(schema.sites.status, "published")
      )
    );

  if (!sites || sites.length === 0) return null;
  
  return buildSiteData(sites[0]);
}

export async function getSiteBySlug(slug: string): Promise<PublicSiteData | null> {
  const sites = await db
    .select()
    .from(schema.sites)
    .where(eq(schema.sites.slug, slug));

  if (!sites || sites.length === 0) return null;
  
  return buildSiteData(sites[0]);
}

export async function isOwner(siteId: string, userId: string): Promise<boolean> {
  const sites = await db
    .select({ id: schema.sites.id })
    .from(schema.sites)
    .where(
      and(eq(schema.sites.id, siteId), eq(schema.sites.userId, userId))
    );

  return sites && sites.length > 0;
}

async function buildSiteData(site: typeof schema.sites.$inferSelect): Promise<PublicSiteData> {
  try {
    const sections = await db
      .select()
      .from(schema.sections)
      .where(eq(schema.sections.siteId, site.id))
      .orderBy(schema.sections.sortOrder);

    const parsedTheme = (() => {
      try {
        return JSON.parse(site.theme);
      } catch (e) {
        console.warn("[buildSiteData] Failed to parse theme for site", site.id, e);
        return {};
      }
    })();

    return {
      site: {
        id: site.id,
        name: site.name,
        slug: site.slug,
        industry: site.industry,
        theme: parsedTheme as SiteTheme,
        language: site.language as "en" | "ar",
        status: site.status as "draft" | "published",
      },
      sections: (sections || [])
        .filter((s): s is typeof schema.sections.$inferSelect => s !== null && s !== undefined)
        .map((s) => {
          try {
            return {
              ...s,
              config: JSON.parse(s.config),
              blockType: s.blockType as SectionData["blockType"],
            };
          } catch (e) {
            console.warn("[buildSiteData] Failed to parse config for section", s.id, e);
            return {
              ...s,
              config: {},
              blockType: s.blockType as SectionData["blockType"],
            };
          }
        }),
    };
  } catch (error) {
    console.error("[buildSiteData] Error building site data for", site.id, error);
    throw error;
  }
}
