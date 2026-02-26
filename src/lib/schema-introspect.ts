/* eslint-disable @typescript-eslint/no-explicit-any */
import type { z } from "zod";

// ── Field Descriptor Types ──────────────────────────────────────────

export type FieldKind =
  | "text"
  | "textarea"
  | "url"
  | "number"
  | "boolean"
  | "enum"
  | "object"
  | "array";

export interface FieldDescriptor {
  key: string;
  kind: FieldKind;
  label: string;
  isOptional: boolean;
  defaultValue: unknown;
  bilingualPair?: string;
  enumValues?: string[];
  min?: number;
  max?: number;
  children?: FieldDescriptor[];
  itemFields?: FieldDescriptor[];
}

// ── Helpers ─────────────────────────────────────────────────────────

function humanize(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/\bCta\b/g, "CTA")
    .replace(/\bUrl\b/g, "URL")
    .trim();
}

const URL_PATTERNS = [
  "url",
  "image",
  "photo",
  "logo",
  "avatar",
  "backgroundimage",
  "mapembed",
  "coverimage",
  "thumbnail",
  "favicon",
];

const TEXTAREA_KEYS = [
  "content",
  "description",
  "bio",
  "answer",
  "text",
  "excerpt",
  "message",
  "copyright",
];

function isUrlField(key: string): boolean {
  const lower = key.toLowerCase();
  return URL_PATTERNS.some((p) => lower.includes(p));
}

function isTextareaField(key: string, defaultValue: unknown): boolean {
  const lower = key.toLowerCase();
  if (TEXTAREA_KEYS.some((k) => lower === k || lower.endsWith(k))) return true;
  if (typeof defaultValue === "string" && defaultValue.length > 80) return true;
  return false;
}

// ── Zod v4 Internals ───────────────────────────────────────────────

interface ZodDef {
  type: string;
  shape?: Record<string, z.ZodType>;
  innerType?: z.ZodType;
  element?: z.ZodType;
  entries?: Record<string, string>;
  defaultValue?: unknown;
  checks?: any[];
}

function getDef(schema: z.ZodType): ZodDef {
  return (schema as any)._zod.def;
}

function getBag(schema: z.ZodType): Record<string, any> {
  return (schema as any)._zod?.bag || {};
}

function unwrap(schema: z.ZodType): {
  inner: z.ZodType;
  isOptional: boolean;
  defaultValue: unknown;
} {
  let current = schema;
  let isOptional = false;
  let defaultValue: unknown = undefined;

  for (let i = 0; i < 10; i++) {
    const def = getDef(current);
    if (def.type === "default") {
      defaultValue = def.defaultValue;
      current = def.innerType!;
      continue;
    }
    if (def.type === "optional" || def.type === "nullable") {
      isOptional = true;
      current = def.innerType!;
      continue;
    }
    break;
  }

  return { inner: current, isOptional, defaultValue };
}

// ── Introspect a single field ───────────────────────────────────────

function introspectField(key: string, schema: z.ZodType): FieldDescriptor {
  const { inner, isOptional, defaultValue } = unwrap(schema);
  const def = getDef(inner);
  const label = humanize(key);

  const base = { key, label, isOptional, defaultValue };

  switch (def.type) {
    case "string": {
      const kind: FieldKind = isUrlField(key)
        ? "url"
        : isTextareaField(key, defaultValue)
          ? "textarea"
          : "text";
      return { ...base, kind };
    }

    case "number": {
      const bag = getBag(inner);
      return {
        ...base,
        kind: "number",
        min: bag.minimum,
        max: bag.maximum,
      };
    }

    case "boolean":
      return { ...base, kind: "boolean" };

    case "enum": {
      const entries = def.entries || {};
      return {
        ...base,
        kind: "enum",
        enumValues: Object.values(entries),
      };
    }

    case "object": {
      const shape = def.shape || {};
      const children = Object.keys(shape).map((k) =>
        introspectField(k, shape[k])
      );
      return { ...base, kind: "object", children };
    }

    case "array": {
      const element = def.element;
      if (!element) return { ...base, kind: "array", itemFields: [] };

      const { inner: elementInner } = unwrap(element);
      const elementDef = getDef(elementInner);

      if (elementDef.type === "object" && elementDef.shape) {
        const itemFields = Object.keys(elementDef.shape).map((k) =>
          introspectField(k, elementDef.shape![k])
        );
        return { ...base, kind: "array", itemFields };
      }

      // Simple array (e.g. z.array(z.string()))
      return {
        ...base,
        kind: "array",
        itemFields: [
          {
            key: "value",
            kind: "text",
            label: "Value",
            isOptional: false,
            defaultValue: "",
          },
        ],
      };
    }

    default:
      return { ...base, kind: "text" };
  }
}

// ── Main: Introspect a full schema ──────────────────────────────────

export function introspectSchema(schema: z.ZodType): FieldDescriptor[] {
  const { inner } = unwrap(schema);
  const def = getDef(inner);

  if (def.type !== "object" || !def.shape) return [];

  const shape = def.shape;
  const keys = Object.keys(shape);
  const arKeys = new Set(keys.filter((k) => k.endsWith("Ar")));
  const fields: FieldDescriptor[] = [];

  for (const key of keys) {
    // Skip Arabic counterpart keys — handled as bilingual pairs
    if (key.endsWith("Ar")) {
      const baseKey = key.slice(0, -2);
      if (keys.includes(baseKey)) continue;
    }

    const descriptor = introspectField(key, shape[key]);

    // Detect bilingual pair
    const arKey = key + "Ar";
    if (arKeys.has(arKey)) {
      descriptor.bilingualPair = arKey;
    }

    fields.push(descriptor);
  }

  return fields;
}

// ── Utility: Get default value for an array item ────────────────────

export function getArrayItemDefault(
  itemFields: FieldDescriptor[]
): Record<string, unknown> {
  const item: Record<string, unknown> = {};
  for (const field of itemFields) {
    item[field.key] = field.defaultValue ?? (field.kind === "text" || field.kind === "textarea" || field.kind === "url" ? "" : field.kind === "number" ? 0 : field.kind === "boolean" ? false : undefined);
  }
  return item;
}
