"use client";

import type { FieldDescriptor } from "@/lib/schema-introspect";
import { TextField } from "./text-field";
import { TextareaField } from "./textarea-field";
import { UrlField } from "./url-field";
import { NumberField } from "./number-field";
import { BooleanField } from "./boolean-field";
import { EnumField } from "./enum-field";
import { ObjectField } from "./object-field";
import { ArrayField } from "./array-field";

interface FieldRendererProps {
  field: FieldDescriptor;
  value: unknown;
  onChange: (value: unknown) => void;
  language?: "en" | "ar";
}

export function FieldRenderer({
  field,
  value,
  onChange,
  language = "en",
}: FieldRendererProps) {
  switch (field.kind) {
    case "text":
      return (
        <TextField
          field={field}
          value={(value as string) ?? ""}
          onChange={onChange}
        />
      );

    case "textarea":
      return (
        <TextareaField
          field={field}
          value={(value as string) ?? ""}
          onChange={onChange}
        />
      );

    case "url":
      return (
        <UrlField
          field={field}
          value={(value as string) ?? ""}
          onChange={onChange}
        />
      );

    case "number":
      return (
        <NumberField
          field={field}
          value={(value as number) ?? 0}
          onChange={onChange as (v: number) => void}
        />
      );

    case "boolean":
      return (
        <BooleanField
          field={field}
          value={(value as boolean) ?? false}
          onChange={onChange as (v: boolean) => void}
        />
      );

    case "enum":
      return (
        <EnumField
          field={field}
          value={(value as string) ?? ""}
          onChange={onChange as (v: string) => void}
        />
      );

    case "object":
      return (
        <ObjectField
          field={field}
          value={(value as Record<string, unknown>) ?? {}}
          onChange={onChange as (v: Record<string, unknown>) => void}
          language={language}
        />
      );

    case "array":
      return (
        <ArrayField
          field={field}
          value={(value as unknown[]) ?? []}
          onChange={onChange as (v: unknown[]) => void}
          language={language}
        />
      );

    default:
      return null;
  }
}
