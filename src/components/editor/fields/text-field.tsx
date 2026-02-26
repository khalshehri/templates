"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import type { FieldDescriptor } from "@/lib/schema-introspect";

interface Props {
  field: FieldDescriptor;
  value: string;
  onChange: (value: string) => void;
}

export function TextField({ field, value, onChange }: Props) {
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
      <Input
        value={local}
        onChange={(e) => {
          setLocal(e.target.value);
          debouncedChange(e.target.value);
        }}
        placeholder={field.label}
        className="h-9 text-sm"
      />
    </div>
  );
}
