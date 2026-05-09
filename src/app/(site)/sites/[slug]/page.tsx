import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { ensureSchema } from "@/lib/db";
import {
  getPublishedSiteBySlug,
  getSiteBySlug,
  isOwner,
} from "@/lib/queries/sites";
import { SiteRenderer } from "@/components/site/site-renderer";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    await ensureSchema();
    const { slug } = await params;
    const data = (await getPublishedSiteBySlug(slug)) ?? (await getSiteBySlug(slug));

    if (!data) {
      return { title: "Site Not Found" };
    }

    const heroSection = data.sections?.find((s) => s.blockType === "hero");
    const cfg = heroSection?.config as Record<string, unknown> | undefined;
    const description =
      data.site.language === "ar"
        ? (cfg?.subheadingAr as string)
        : (cfg?.subheading as string);

    const isPublished = data.site.status === "published";

    return {
      title: data.site.name,
      description: description || `${data.site.name} — Built with Safahati`,
      robots: isPublished ? "index, follow" : "noindex, nofollow",
      openGraph: {
        title: data.site.name,
        description: description || `${data.site.name} — Built with Safahati`,
        type: "website",
      },
    };
  } catch (error) {
    console.error("[generateMetadata] Error:", error);
    return { title: "Site Not Found" };
  }
}

export default async function PublicSitePage({
  params,
  searchParams,
}: PageProps) {
  try {
    await ensureSchema();

    const { slug } = await params;
    const { preview } = await searchParams;
    const isPreview = preview === "true";

    console.log(`[Site Renderer] Loading slug: ${slug}, preview: ${isPreview}`);

    // Try published site first
    let data = await getPublishedSiteBySlug(slug);
    console.log(`[Site Renderer] Published site found:`, !!data);

    let showPreviewBanner = false;

    // If not published but preview mode requested, check ownership
    if (!data && isPreview) {
      console.log(`[Site Renderer] Attempting preview access`);
      const session = await auth();
      const fullData = await getSiteBySlug(slug);
      console.log(`[Site Renderer] Full data found:`, !!fullData);
      console.log(`[Site Renderer] Session user:`, session?.user?.id);

      if (fullData && session?.user?.id) {
        const owns = await isOwner(fullData.site.id, session.user.id);
        console.log(`[Site Renderer] User owns site:`, owns);

        if (owns) {
          data = fullData;
          showPreviewBanner = true;
        }
      }
    }

    if (!data || !data.sections) {
      console.log(`[Site Renderer] No data found, returning 404`);
      notFound();
    }

    return (
      <SiteRenderer
        site={data.site}
        sections={data.sections}
        showPreviewBanner={showPreviewBanner}
      />
    );
  } catch (error) {
    console.error("[PublicSitePage] Error:", error);
    notFound();
  }
}
