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
    return (
      <section
        id={`section-${section.id}`}
        data-block={section.blockType}
        data-template={section.templateId}
      >
        <Component config={section.config} language={language} />
      </section>
    );
  } catch (error) {
    console.error(
      `[BlockRenderer] Error rendering ${section.blockType}/${section.templateId}:`,
      error
    );
    return null;
  }
}
