"use client";

import { useEditorStore } from "@/lib/editor-store";
import { getBlock, getAllBlocks } from "@/config/block-registry";
import {
  ChevronDown,
  Plus,
  GripVertical,
  Trash2,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  type LucideIcon,
  Menu as MenuIcon,
  LayoutGrid,
  PanelBottom,
  Pencil,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  menu: MenuIcon,
  monitor: LayoutGrid,
  "layout-grid": LayoutGrid,
  "panel-bottom": PanelBottom,
};

export function SectionList() {
  const sections = useEditorStore((s) => s.sections);
  const selectedSectionId = useEditorStore((s) => s.selectedSectionId);
  const addPanelOpen = useEditorStore((s) => s.addPanelOpen);
  const {
    addSection,
    removeSection,
    moveSection,
    toggleVisibility,
    selectSection,
    setAddPanelOpen,
  } = useEditorStore();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">Components</h2>
        <button
          onClick={() => setAddPanelOpen(!addPanelOpen)}
          className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={12} />
          Add
        </button>
      </div>

      {/* Add Component Panel */}
      {addPanelOpen && (
        <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-xs font-medium text-gray-500 mb-2">
            Add Component
          </p>
          <div className="space-y-1 max-h-64 overflow-y-auto">
            {getAllBlocks().map((block) => {
              const Icon = iconMap[block.icon] || LayoutGrid;
              return (
                <div key={block.type}>
                  <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 font-medium">
                    <Icon size={14} className="text-gray-400" />
                    {block.label}
                  </div>
                  <div className="ml-6 space-y-0.5">
                    {block.templates.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => addSection(block.type, t.id)}
                        className="block w-full text-left px-2 py-1.5 text-xs text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg transition-colors"
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Section List */}
      <div className="space-y-1.5">
        {sections.map((section, idx) => {
          const block = getBlock(section.blockType);
          const Icon = iconMap[block.icon] || LayoutGrid;
          const template = block.templates.find(
            (t) => t.id === section.templateId
          );
          const isSelected = selectedSectionId === section.id;

          return (
            <div
              key={section.id}
              className={`group rounded-xl border transition-all ${
                isSelected
                  ? "border-blue-200 bg-blue-50/50 shadow-sm"
                  : "border-gray-100 bg-white hover:border-gray-200"
              } ${!section.isVisible ? "opacity-50" : ""}`}
            >
              <div
                className="flex items-center gap-2 px-3 py-2.5 cursor-pointer"
                onClick={() =>
                  selectSection(isSelected ? null : section.id)
                }
              >
                <GripVertical
                  size={14}
                  className="text-gray-300 shrink-0"
                />
                <Icon size={14} className="text-gray-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {block.label}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {template?.name}
                  </p>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-gray-300 transition-transform ${
                    isSelected ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isSelected && (
                <div className="px-3 pb-3 border-t border-gray-100 mt-0 pt-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        selectSection(section.id);
                        useEditorStore.getState().setEditorTab("content");
                      }}
                      className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Pencil size={12} />
                      Edit Content
                    </button>
                    <div className="flex-1" />
                    <button
                      onClick={() => moveSection(section.id, "up")}
                      disabled={idx === 0}
                      className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 disabled:opacity-30 transition-colors"
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      onClick={() => moveSection(section.id, "down")}
                      disabled={idx === sections.length - 1}
                      className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 disabled:opacity-30 transition-colors"
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button
                      onClick={() => toggleVisibility(section.id)}
                      className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {section.isVisible ? (
                        <Eye size={14} />
                      ) : (
                        <EyeOff size={14} />
                      )}
                    </button>
                    <button
                      onClick={() => removeSection(section.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
