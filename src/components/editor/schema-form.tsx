"use client";

import type { FieldDescriptor } from "@/lib/schema-introspect";
import { FieldRenderer } from "./fields";
import { BilingualFieldWrapper } from "./fields/bilingual-field-wrapper";

interface Props {
  fields: FieldDescriptor[];
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
  language: "en" | "ar";
}

export function SchemaForm({ fields, values, onChange, language }: Props) {
  return (
    <div className="space-y-3">
      {fields.map((field) => {
        // Bilingual field — render EN/AR tabs
        if (field.bilingualPair) {
          return (
            <BilingualFieldWrapper
              key={field.key}
              field={field}
              language={language}
              enValue={values[field.key]}
              arValue={values[field.bilingualPair]}
              onEnChange={(v) => onChange(field.key, v)}
              onArChange={(v) => onChange(field.bilingualPair!, v)}
            />
          );
        }

        return (
          <FieldRenderer
            key={field.key}
            field={field}
            value={values[field.key]}
            onChange={(v) => onChange(field.key, v)}
            language={language}
          />
        );
      })}
    </div>
  );
}
