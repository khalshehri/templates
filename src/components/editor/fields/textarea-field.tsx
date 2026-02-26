"use client";

import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import type { FieldDescriptor } from "@/lib/schema-introspect";

interface Props {
  field: FieldDescriptor;
  value: string;
  onChange: (value: string) => void;
}

export function TextareaField({ field, value, onChange }: Props) {
  const [local, setLocal] = useState(value ?? "");

  useEffect(() => {
    setLocal(value ?? "");
  }, [value]);

  const debouncedChange = useDebouncedCallback((v: string) => {
    onChange(v);
  }, 300);

  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-500">
        {field.label}
      </Label>
      <Textarea
        value={local}
        onChange={(e) => {
          setLocal(e.target.value);
          debouncedChange(e.target.value);
        }}
        placeholder={field.label}
        rows={3}
        className="text-sm resize-none"
      />
    </div>
  );
}
