import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";
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
  const { slug } = await params;
  const data = getPublishedSiteBySlug(slug) ?? getSiteBySlug(slug);

  if (!data) {
    return { title: "Site Not Found" };
  }

  const heroSection = data.sections.find((s) => s.blockType === "hero");
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
}

export default async function PublicSitePage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  // Try published site first
  let data = getPublishedSiteBySlug(slug);
  let showPreviewBanner = false;

  // If not published but preview mode requested, check ownership
  if (!data && isPreview) {
    const session = await auth();
    const fullData = getSiteBySlug(slug);

    if (
      fullData &&
      session?.user?.id &&
      isOwner(fullData.site.id, session.user.id)
    ) {
      data = fullData;
      showPreviewBanner = true;
    }
  }

  if (!data) {
    notFound();
  }

  return (
    <SiteRenderer
      site={data.site}
      sections={data.sections}
      showPreviewBanner={showPreviewBanner}
    />
  );
}
