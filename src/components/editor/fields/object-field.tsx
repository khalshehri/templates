"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import type { FieldDescriptor } from "@/lib/schema-introspect";
import { FieldRenderer } from "./index";

interface Props {
  field: FieldDescriptor;
  value: Record<string, unknown>;
  onChange: (value: Record<string, unknown>) => void;
  language: "en" | "ar";
}

export function ObjectField({ field, value, onChange, language }: Props) {
  const [open, setOpen] = useState(true);
  const current = (value ?? {}) as Record<string, unknown>;

  const handleChildChange = (childKey: string, childValue: unknown) => {
    onChange({ ...current, [childKey]: childValue });
  };

  if (!field.children || field.children.length === 0) return null;

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 bg-gray-50/50 hover:bg-gray-50 transition-colors"
      >
        <Label className="text-xs font-medium text-gray-600 cursor-pointer">
          {field.label}
        </Label>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="p-3 space-y-3">
          {field.children.map((child) => {
            // Handle bilingual pairs within nested objects
            if (child.bilingualPair) {
              const { BilingualFieldWrapper } = require("./bilingual-field-wrapper");
              return (
                <BilingualFieldWrapper
                  key={child.key}
                  field={child}
                  language={language}
                  enValue={current[child.key]}
                  arValue={current[child.bilingualPair]}
                  onEnChange={(v: unknown) => handleChildChange(child.key, v)}
                  onArChange={(v: unknown) =>
                    handleChildChange(child.bilingualPair!, v)
                  }
                />
              );
            }

            return (
              <FieldRenderer
                key={child.key}
                field={child}
                value={current[child.key]}
                onChange={(v) => handleChildChange(child.key, v)}
                language={language}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
