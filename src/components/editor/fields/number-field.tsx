"use client";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import type { FieldDescriptor } from "@/lib/schema-introspect";

interface Props {
  field: FieldDescriptor;
  value: number;
  onChange: (value: number) => void;
}

export function NumberField({ field, value, onChange }: Props) {
  const hasRange =
    field.min !== undefined && field.max !== undefined;
  const current = value ?? field.defaultValue ?? 0;

  if (hasRange) {
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-medium text-gray-500">
            {field.label}
          </Label>
          <span className="text-xs font-mono text-gray-400">
            {current}
          </span>
        </div>
        <Slider
          value={[Number(current)]}
          onValueChange={([v]) => onChange(v)}
          min={field.min}
          max={field.max}
          step={1}
          className="py-1"
        />
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-500">
        {field.label}
      </Label>
      <Input
        type="number"
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        min={field.min}
        max={field.max}
        className="h-9 text-sm"
      />
    </div>
  );
}
