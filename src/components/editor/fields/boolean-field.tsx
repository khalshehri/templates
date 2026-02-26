"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { FieldDescriptor } from "@/lib/schema-introspect";

interface Props {
  field: FieldDescriptor;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function BooleanField({ field, value, onChange }: Props) {
  return (
    <div className="flex items-center justify-between py-1">
      <Label className="text-xs font-medium text-gray-500">
        {field.label}
      </Label>
      <Switch
        checked={value ?? false}
        onCheckedChange={onChange}
      />
    </div>
  );
}
