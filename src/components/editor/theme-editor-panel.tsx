"use client";

import { useEditorStore } from "@/lib/editor-store";
import { themePresets, availableFonts } from "@/config/theme-presets";
import type { SiteTheme } from "@/types/theme";
import { Check } from "lucide-react";

interface ColorGroup {
  title: string;
  colors: { key: keyof SiteTheme["colors"]; label: string }[];
}

const COLOR_GROUPS: ColorGroup[] = [
  {
    title: "Brand",
    colors: [
      { key: "primary", label: "Primary" },
      { key: "primaryForeground", label: "Primary Text" },
      { key: "secondary", label: "Secondary" },
      { key: "secondaryForeground", label: "Secondary Text" },
      { key: "accent", label: "Accent" },
      { key: "accentForeground", label: "Accent Text" },
    ],
  },
  {
    title: "Base",
    colors: [
      { key: "background", label: "Background" },
      { key: "foreground", label: "Text" },
      { key: "card", label: "Card" },
      { key: "cardForeground", label: "Card Text" },
      { key: "muted", label: "Muted" },
      { key: "mutedForeground", label: "Muted Text" },
    ],
  },
  {
    title: "Utility",
    colors: [
      { key: "border", label: "Border" },
      { key: "ring", label: "Focus Ring" },
      { key: "success", label: "Success" },
      { key: "warning", label: "Warning" },
      { key: "destructive", label: "Destructive" },
    ],
  },
];

const RADIUS_OPTIONS: { value: SiteTheme["borderRadius"]; label: string }[] = [
  { value: "none", label: "None" },
  { value: "sm", label: "SM" },
  { value: "md", label: "MD" },
  { value: "lg", label: "LG" },
  { value: "full", label: "Full" },
];

export function ThemeEditorPanel() {
  const theme = useEditorStore((s) => s.theme);
  const language = useEditorStore((s) => s.language);
  const sections = useEditorStore((s) => s.sections);
  const {
    updateThemeColor,
    updateThemeFont,
    updateBorderRadius,
    applyThemePreset,
  } = useEditorStore();

  return (
    <div className="p-4 space-y-6">
      {/* Presets */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2.5">Presets</p>
        <div className="grid grid-cols-2 gap-2">
          {themePresets.map((preset) => {
            const isActive =
              theme.colors.primary === preset.theme.colors.primary &&
              theme.colors.secondary === preset.theme.colors.secondary;
            return (
              <button
                key={preset.name}
                onClick={() => applyThemePreset(preset.theme)}
                className={`relative flex items-center gap-2 px-2.5 py-2 rounded-xl border text-left transition-all ${
                  isActive
                    ? "border-blue-300 bg-blue-50/50 shadow-sm"
                    : "border-gray-100 hover:border-gray-200 bg-white"
                }`}
              >
                <div className="flex gap-0.5 shrink-0">
                  {[
                    preset.theme.colors.primary,
                    preset.theme.colors.secondary,
                    preset.theme.colors.accent,
                    preset.theme.colors.background,
                  ].map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full border border-gray-200/50"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-gray-700 truncate">
                  {language === "ar" ? preset.nameAr : preset.name}
                </span>
                {isActive && (
                  <Check
                    size={12}
                    className="absolute top-1 right-1 text-blue-500"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Colors — Grouped */}
      {COLOR_GROUPS.map((group) => (
        <div key={group.title}>
          <p className="text-xs font-medium text-gray-500 mb-2.5">
            {group.title} Colors
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {group.colors.map(({ key, label }) => (
              <label
                key={key}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-gray-100 hover:border-gray-200 cursor-pointer transition-colors"
              >
                <div className="relative w-5 h-5 shrink-0">
                  <div
                    className="w-5 h-5 rounded-md border border-gray-200"
                    style={{ backgroundColor: theme.colors[key] }}
                  />
                  <input
                    type="color"
                    value={theme.colors[key]}
                    onChange={(e) => updateThemeColor(key, e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-600 truncate leading-tight">
                    {label}
                  </p>
                  <p className="text-[9px] text-gray-400 font-mono leading-tight">
                    {theme.colors[key]}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Fonts */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2.5">Fonts</p>
        <div className="space-y-3">
          {(
            [
              { key: "heading", label: "Heading Font", labelAr: "خط العناوين" },
              { key: "body", label: "Body Font", labelAr: "خط النص" },
            ] as const
          ).map(({ key, label }) => (
            <div key={key}>
              <p className="text-[10px] text-gray-400 mb-1.5">{label}</p>
              <div className="space-y-1">
                {availableFonts.map((font) => {
                  const isActive = theme.fonts[key] === font.value;
                  return (
                    <button
                      key={font.value}
                      onClick={() => updateThemeFont(key, font.value)}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg border text-left transition-all ${
                        isActive
                          ? "border-blue-300 bg-blue-50/50 shadow-sm"
                          : "border-gray-100 hover:border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm text-gray-800 truncate"
                          style={{ fontFamily: font.value }}
                        >
                          {font.label}
                        </p>
                        <p
                          className="text-[10px] text-gray-400 truncate"
                          style={{ fontFamily: font.value }}
                          dir="rtl"
                        >
                          {font.labelAr} — بسم الله الرحمن
                        </p>
                      </div>
                      <span className="text-[9px] text-gray-300 shrink-0">
                        {font.category}
                      </span>
                      {isActive && (
                        <Check
                          size={12}
                          className="text-blue-500 shrink-0"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2.5">
          Border Radius
        </p>
        <div className="flex gap-1">
          {RADIUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateBorderRadius(opt.value)}
              className={`flex-1 py-1.5 text-[10px] font-medium rounded-lg border transition-all ${
                theme.borderRadius === opt.value
                  ? "border-blue-300 bg-blue-50 text-blue-700"
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Site Info */}
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">Site Info</p>
        <div className="text-xs text-gray-400 space-y-1.5 bg-gray-50 rounded-lg p-3 border border-gray-100">
          <p>
            <span className="text-gray-600 font-medium">
              {sections.length}
            </span>{" "}
            components
          </p>
          <p>
            Language:{" "}
            <span className="text-gray-600 font-medium">
              {language.toUpperCase()}
            </span>
          </p>
          <p>
            Direction:{" "}
            <span className="text-gray-600 font-medium">
              {language === "ar" ? "RTL" : "LTR"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
