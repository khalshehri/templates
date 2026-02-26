import { z } from "zod";

export type BlockType =
  | "navbar"
  | "hero"
  | "about"
  | "services"
  | "features"
  | "testimonials"
  | "clients"
  | "stats"
  | "team"
  | "pricing"
  | "cta"
  | "faq"
  | "contact"
  | "footer";

export type BlockCategory =
  | "navigation"
  | "header"
  | "content"
  | "social-proof"
  | "conversion"
  | "informational"
  | "utility";

export interface BlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: Record<string, any>;
  language: "en" | "ar";
}

export interface TemplateEntry {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  component: React.ComponentType<BlockProps>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultConfig: Record<string, any>;
}

export interface BlockDefinition {
  type: BlockType;
  label: string;
  labelAr: string;
  category: BlockCategory;
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  configSchema: z.ZodSchema<any>;
  templates: TemplateEntry[];
}

export interface SectionData {
  id: string;
  blockType: BlockType;
  templateId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: Record<string, any>;
  sortOrder: number;
  isVisible: boolean;
}
