"use client";

import { useMemo } from "react";
import { useEditorStore } from "@/lib/editor-store";
import { getBlock } from "@/config/block-registry";
import { introspectSchema } from "@/lib/schema-introspect";
import { SchemaForm } from "./schema-form";
import {
  ArrowLeft,
  type LucideIcon,
  Menu as MenuIcon,
  LayoutGrid,
  PanelBottom,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  menu: MenuIcon,
  monitor: LayoutGrid,
  "layout-grid": LayoutGrid,
  "panel-bottom": PanelBottom,
};

export function ContentEditorPanel() {
  const selectedSectionId = useEditorStore((s) => s.selectedSectionId);
  const sections = useEditorStore((s) => s.sections);
  const language = useEditorStore((s) => s.language);
  const { selectSection, updateSectionConfig, changeTemplate } =
    useEditorStore();

  const section = sections.find((s) => s.id === selectedSectionId);

  const block = useMemo(
    () => (section ? getBlock(section.blockType) : null),
    [section]
  );

  const allFields = useMemo(
    () => (block ? introspectSchema(block.configSchema) : []),
    [block]
  );

  const currentTemplate = useMemo(
    () =>
      block && section
        ? block.templates.find((t) => t.id === section.templateId)
        : null,
    [block, section]
  );

  // Filter fields to only show those relevant to the selected template.
  // A field is relevant if its key has a defined value in the template's defaultConfig.
  const fields = useMemo(() => {
    if (!currentTemplate) return allFields;
    const defaults = currentTemplate.defaultConfig;
    return allFields.filter((field) => defaults[field.key] !== undefined);
  }, [allFields, currentTemplate]);

  if (!section || !block) {
    return (
      <div className="p-4 text-center text-sm text-gray-400 mt-8">
        Select a section to edit its content
      </div>
    );
  }

  const Icon = iconMap[block.icon] || LayoutGrid;

  const handleFieldChange = (key: string, value: unknown) => {
    updateSectionConfig(section.id, [key], value);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 shrink-0">
        <button
          onClick={() => selectSection(null)}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 mb-2 transition-colors"
        >
          <ArrowLeft size={12} />
          Back to sections
        </button>
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-gray-400" />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {block.label}
            </h3>
            <p className="text-xs text-gray-400">{currentTemplate?.name}</p>
          </div>
        </div>
      </div>

      {/* Template Picker */}
      <div className="px-4 py-3 border-b border-gray-100 shrink-0">
        <p className="text-xs font-medium text-gray-500 mb-2">Template</p>
        <div className="grid grid-cols-2 gap-1.5">
          {block.templates.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTemplate(section.id, t.id)}
              className={`px-2.5 py-1.5 text-xs rounded-lg border transition-all text-left ${
                section.templateId === t.id
                  ? "border-blue-300 bg-blue-50 text-blue-700 font-medium"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Schema-Driven Form */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <p className="text-xs font-medium text-gray-500 mb-3">Content</p>
        <SchemaForm
          fields={fields}
          values={section.config}
          onChange={handleFieldChange}
          language={language}
        />
      </div>
    </div>
  );
}
