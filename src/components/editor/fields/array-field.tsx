"use client";

import { useState } from "react";
import { Plus, Trash2, ArrowUp, ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getArrayItemDefault } from "@/lib/schema-introspect";
import type { FieldDescriptor } from "@/lib/schema-introspect";
import { FieldRenderer } from "./index";

interface Props {
  field: FieldDescriptor;
  value: unknown[];
  onChange: (value: unknown[]) => void;
  language: "en" | "ar";
}

export function ArrayField({ field, value, onChange, language }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const items = (value ?? []) as Record<string, unknown>[];
  const itemFields = field.itemFields || [];

  // Simple string array (e.g. typedTexts, marqueeWords)
  const isSimpleArray =
    itemFields.length === 1 && itemFields[0].key === "value";

  const addItem = () => {
    if (isSimpleArray) {
      onChange([...items, ""]);
    } else {
      const newItem = getArrayItemDefault(itemFields);
      onChange([...items, newItem]);
    }
    setExpandedIndex(items.length);
  };

  const removeItem = (index: number) => {
    const copy = [...items];
    copy.splice(index, 1);
    onChange(copy);
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const moveItem = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;
    const copy = [...items];
    [copy[index], copy[newIndex]] = [copy[newIndex], copy[index]];
    onChange(copy);
    setExpandedIndex(newIndex);
  };

  const updateItem = (index: number, newValue: unknown) => {
    const copy = [...items];
    copy[index] = newValue as Record<string, unknown>;
    onChange(copy);
  };

  const updateItemField = (
    index: number,
    childKey: string,
    childValue: unknown
  ) => {
    const copy = [...items];
    copy[index] = { ...(copy[index] as Record<string, unknown>), [childKey]: childValue };
    onChange(copy);
  };

  // Get a preview label for a collapsed item
  const getItemLabel = (item: unknown, index: number): string => {
    if (isSimpleArray) return String(item || `Item ${index + 1}`);
    const obj = item as Record<string, unknown>;
    const nameField = obj.title || obj.name || obj.label || obj.question || obj.text || obj.heading;
    if (nameField) return String(nameField).slice(0, 40);
    return `Item ${index + 1}`;
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-xs font-medium text-gray-500">
          {field.label}
          <span className="text-gray-300 ml-1">({items.length})</span>
        </Label>
        <Button
          variant="outline"
          size="sm"
          onClick={addItem}
          className="h-7 text-xs px-2 gap-1"
        >
          <Plus size={12} />
          Add
        </Button>
      </div>

      <div className="space-y-1.5">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;

          // Simple string array — inline input
          if (isSimpleArray) {
            return (
              <div key={index} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={String(item ?? "")}
                  onChange={(e) => updateItem(index, e.target.value)}
                  className="flex-1 h-8 px-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300"
                  placeholder={`Item ${index + 1}`}
                />
                <button
                  onClick={() => removeItem(index)}
                  className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors shrink-0"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            );
          }

          // Object array — collapsible cards
          return (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              {/* Card header */}
              <div
                className="flex items-center gap-2 px-3 py-2 bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <span className="text-[10px] font-mono text-gray-300 w-5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-xs text-gray-600 truncate">
                  {getItemLabel(item, index)}
                </span>
                <div className="flex items-center gap-0.5 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveItem(index, "up");
                    }}
                    disabled={index === 0}
                    className="p-1 rounded hover:bg-gray-200 text-gray-400 disabled:opacity-30 transition-colors"
                  >
                    <ArrowUp size={10} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      moveItem(index, "down");
                    }}
                    disabled={index === items.length - 1}
                    className="p-1 rounded hover:bg-gray-200 text-gray-400 disabled:opacity-30 transition-colors"
                  >
                    <ArrowDown size={10} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                    className="p-1 rounded hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={10} />
                  </button>
                  <ChevronDown
                    size={12}
                    className={`text-gray-300 transition-transform ml-1 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </div>
              </div>

              {/* Card body */}
              {isExpanded && (
                <div className="p-3 space-y-3 border-t border-gray-100">
                  {itemFields.map((child) => {
                    const itemObj = item as Record<string, unknown>;

                    // Handle bilingual pairs within array items
                    if (child.bilingualPair) {
                      const { BilingualFieldWrapper } = require("./bilingual-field-wrapper");
                      return (
                        <BilingualFieldWrapper
                          key={child.key}
                          field={child}
                          language={language}
                          enValue={itemObj[child.key]}
                          arValue={itemObj[child.bilingualPair]}
                          onEnChange={(v: unknown) =>
                            updateItemField(index, child.key, v)
                          }
                          onArChange={(v: unknown) =>
                            updateItemField(index, child.bilingualPair!, v)
                          }
                        />
                      );
                    }

                    return (
                      <FieldRenderer
                        key={child.key}
                        field={child}
                        value={itemObj[child.key]}
                        onChange={(v) => updateItemField(index, child.key, v)}
                        language={language}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
