"use client";

import { getTemplate } from "@/lib/registry";
import type { SectionData } from "@/types/blocks";

interface Props {
  section: SectionData;
  language: "en" | "ar";
}

export function BlockRenderer({ section, language }: Props) {
  if (!section.isVisible) return null;

  try {
    const template = getTemplate(section.blockType, section.templateId);
    if (!template || !template.component) {
      console.warn(
        `[BlockRenderer] Template not found or invalid: ${section.blockType}/${section.templateId}`
      );
      return null;
    }

    const Component = template.component;

    // Safety wrapper to catch component rendering errors
    try {
      return (
        <section
          id={`section-${section.id}`}
          data-block={section.blockType}
          data-template={section.templateId}
        >
          <Component config={section.config || {}} language={language} />
        </section>
      );
    } catch (renderError) {
      console.error(
        `[BlockRenderer] Error rendering component for ${section.blockType}/${section.templateId}:`,
        renderError
      );
      // Return a fallback error boundary instead of crashing
      return (
        <section
          id={`section-${section.id}`}
          className="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700"
        >
          <p>
            <strong>Component Error:</strong> Failed to render{" "}
            {section.blockType}/{section.templateId}
          </p>
          <p className="text-xs text-red-600 mt-1">
            {renderError instanceof Error ? renderError.message : "Unknown error"}
          </p>
        </section>
      );
    }
  } catch (error) {
    console.error(
      `[BlockRenderer] Error rendering ${section.blockType}/${section.templateId}:`,
      error
    );
    return null;
  }
}
