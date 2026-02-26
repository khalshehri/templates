"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import type { FieldDescriptor } from "@/lib/schema-introspect";
import { FieldRenderer } from "./index";

interface Props {
  field: FieldDescriptor;
  language: "en" | "ar";
  enValue: unknown;
  arValue: unknown;
  onEnChange: (value: unknown) => void;
  onArChange: (value: unknown) => void;
}

export function BilingualFieldWrapper({
  field,
  language,
  enValue,
  arValue,
  onEnChange,
  onArChange,
}: Props) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-gray-500">
        {field.label}
      </Label>
      <Tabs defaultValue={language} className="w-full">
        <TabsList className="h-7 w-full grid grid-cols-2">
          <TabsTrigger value="en" className="text-[10px]">
            EN
          </TabsTrigger>
          <TabsTrigger value="ar" className="text-[10px]">
            AR
          </TabsTrigger>
        </TabsList>
        <TabsContent value="en" className="mt-1.5">
          <FieldRenderer
            field={{ ...field, label: "", bilingualPair: undefined }}
            value={enValue}
            onChange={onEnChange}
          />
        </TabsContent>
        <TabsContent value="ar" className="mt-1.5">
          <FieldRenderer
            field={{ ...field, label: "", bilingualPair: undefined }}
            value={arValue}
            onChange={onArChange}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
