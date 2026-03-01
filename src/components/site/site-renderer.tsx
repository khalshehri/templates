"use client";

import "@/config/block-registry";
import { BlockRenderer } from "@/components/blocks/renderer";
import { themeToCSS } from "@/types/theme";
import type { SiteTheme } from "@/types/theme";
import type { SectionData } from "@/types/blocks";

interface SiteRendererProps {
  site: {
    name: string;
    theme: SiteTheme;
    language: "en" | "ar";
  };
  sections: SectionData[];
  showPreviewBanner: boolean;
}

export function SiteRenderer({
  site,
  sections,
  showPreviewBanner,
}: SiteRendererProps) {
  return (
    <>
      {showPreviewBanner && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-500 text-amber-950 text-center py-2 text-sm font-medium shadow-md">
          Preview Mode — This site is not published yet. Only you can see this.
        </div>
      )}
      <div
        data-theme-preview
        className={`min-h-screen ${showPreviewBanner ? "mt-10" : ""}`}
        dir={site.language === "ar" ? "rtl" : "ltr"}
        style={themeToCSS(site.theme)}
      >
        {sections
          .filter((s) => s.isVisible)
          .map((section) => (
            <BlockRenderer
              key={section.id}
              section={section}
              language={site.language}
            />
          ))}
      </div>
    </>
  );
}
