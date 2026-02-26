/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import type { SectionData } from "@/types/blocks";
import type { SiteTheme } from "@/types/theme";
import { getBlock } from "@/config/block-registry";
import { defaultTheme } from "@/types/theme";

// ── Types ───────────────────────────────────────────────────────────

export type ViewMode = "preview" | "editor";
export type DeviceMode = "desktop" | "tablet" | "mobile";
export type EditorTab = "content" | "theme";

interface EditorState {
  // Data
  sections: SectionData[];
  theme: SiteTheme;

  // UI
  language: "en" | "ar";
  viewMode: ViewMode;
  deviceMode: DeviceMode;
  selectedSectionId: string | null;
  editorTab: EditorTab;
  addPanelOpen: boolean;
  isDirty: boolean;
  isSaving: boolean;

  // Initialization
  initializeStore: (sections: SectionData[], theme: SiteTheme) => void;
  setSaving: (saving: boolean) => void;

  // Section actions
  addSection: (blockType: string, templateId: string) => void;
  removeSection: (id: string) => void;
  moveSection: (id: string, direction: "up" | "down") => void;
  updateSectionConfig: (id: string, path: string[], value: unknown) => void;
  changeTemplate: (sectionId: string, newTemplateId: string) => void;
  toggleVisibility: (id: string) => void;

  // Theme actions
  updateThemeColor: (
    colorKey: keyof SiteTheme["colors"],
    value: string
  ) => void;
  updateThemeFont: (fontKey: keyof SiteTheme["fonts"], value: string) => void;
  updateBorderRadius: (value: SiteTheme["borderRadius"]) => void;
  applyThemePreset: (preset: Omit<SiteTheme, "direction">) => void;

  // UI actions
  setLanguage: (lang: "en" | "ar") => void;
  setViewMode: (mode: ViewMode) => void;
  setDeviceMode: (mode: DeviceMode) => void;
  selectSection: (id: string | null) => void;
  setEditorTab: (tab: EditorTab) => void;
  setAddPanelOpen: (open: boolean) => void;
}

// ── Deep nested value helpers ───────────────────────────────────────

function setNestedValue(
  obj: Record<string, any>,
  path: string[],
  value: unknown
): void {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    const nextKey = path[i + 1];
    if (!(key in current) || typeof current[key] !== "object") {
      current[key] = isNaN(Number(nextKey)) ? {} : [];
    }
    current = current[key];
  }
  current[path[path.length - 1]] = value;
}

// ── Store ───────────────────────────────────────────────────────────

export const useEditorStore = create<EditorState>((set) => ({
  // Initial state (empty — populated via initializeStore)
  sections: [],
  theme: defaultTheme,
  language: "en",
  viewMode: "preview",
  deviceMode: "desktop",
  selectedSectionId: null,
  editorTab: "content",
  addPanelOpen: false,
  isDirty: false,
  isSaving: false,

  // ── Initialization ────────────────────────────────────────────
  initializeStore: (sections, theme) =>
    set({ sections, theme, isDirty: false, selectedSectionId: null }),

  setSaving: (isSaving) => set({ isSaving }),

  // ── Section actions ─────────────────────────────────────────────

  addSection: (blockType, templateId) => {
    const block = getBlock(blockType as SectionData["blockType"]);
    const template = block.templates.find((t) => t.id === templateId);
    if (!template) return;

    const newSection: SectionData = {
      id: Date.now().toString(),
      blockType: blockType as SectionData["blockType"],
      templateId,
      config: template.defaultConfig,
      sortOrder: 0,
      isVisible: true,
    };

    set((s) => ({
      sections: [...s.sections, { ...newSection, sortOrder: s.sections.length }],
      addPanelOpen: false,
      isDirty: true,
    }));
  },

  removeSection: (id) =>
    set((s) => ({
      sections: s.sections.filter((sec) => sec.id !== id),
      selectedSectionId: s.selectedSectionId === id ? null : s.selectedSectionId,
      isDirty: true,
    })),

  moveSection: (id, direction) =>
    set((s) => {
      const idx = s.sections.findIndex((sec) => sec.id === id);
      if (idx === -1) return s;
      const newIdx = direction === "up" ? idx - 1 : idx + 1;
      if (newIdx < 0 || newIdx >= s.sections.length) return s;
      const copy = [...s.sections];
      [copy[idx], copy[newIdx]] = [copy[newIdx], copy[idx]];
      return { sections: copy, isDirty: true };
    }),

  updateSectionConfig: (id, path, value) =>
    set((s) => ({
      sections: s.sections.map((sec) => {
        if (sec.id !== id) return sec;
        const newConfig = structuredClone(sec.config);
        setNestedValue(newConfig, path, value);
        return { ...sec, config: newConfig };
      }),
      isDirty: true,
    })),

  changeTemplate: (sectionId, newTemplateId) =>
    set((s) => ({
      sections: s.sections.map((sec) => {
        if (sec.id !== sectionId) return sec;
        const block = getBlock(sec.blockType);
        const template = block.templates.find((t) => t.id === newTemplateId);
        if (!template) return sec;
        return {
          ...sec,
          templateId: newTemplateId,
          config: { ...sec.config, ...template.defaultConfig },
        };
      }),
      isDirty: true,
    })),

  toggleVisibility: (id) =>
    set((s) => ({
      sections: s.sections.map((sec) =>
        sec.id === id ? { ...sec, isVisible: !sec.isVisible } : sec
      ),
      isDirty: true,
    })),

  // ── Theme actions ───────────────────────────────────────────────

  updateThemeColor: (colorKey, value) =>
    set((s) => ({
      theme: {
        ...s.theme,
        colors: { ...s.theme.colors, [colorKey]: value },
      },
      isDirty: true,
    })),

  updateThemeFont: (fontKey, value) =>
    set((s) => ({
      theme: {
        ...s.theme,
        fonts: { ...s.theme.fonts, [fontKey]: value },
      },
      isDirty: true,
    })),

  updateBorderRadius: (value) =>
    set((s) => ({
      theme: { ...s.theme, borderRadius: value },
      isDirty: true,
    })),

  applyThemePreset: (preset) =>
    set((s) => ({
      theme: { ...preset, direction: s.theme.direction },
      isDirty: true,
    })),

  // ── UI actions ──────────────────────────────────────────────────

  setLanguage: (language) => set({ language }),
  setViewMode: (viewMode) => set({ viewMode }),
  setDeviceMode: (deviceMode) => set({ deviceMode }),
  selectSection: (id) => set({ selectedSectionId: id }),
  setEditorTab: (tab) => set({ editorTab: tab }),
  setAddPanelOpen: (open) => set({ addPanelOpen: open }),
}));
