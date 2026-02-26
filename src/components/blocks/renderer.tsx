"use client";

import { getTemplate } from "@/lib/registry";
import type { SectionData } from "@/types/blocks";

interface Props {
  section: SectionData;
  language: "en" | "ar";
}

export function BlockRenderer({ section, language }: Props) {
  if (!section.isVisible) return null;

  const template = getTemplate(section.blockType, section.templateId);
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
}
