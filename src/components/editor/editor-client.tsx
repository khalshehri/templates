"use client";

import { useEffect, useCallback, useState } from "react";
import "@/config/block-registry";
import { BlockRenderer } from "@/components/blocks/renderer";
import { themeToCSS } from "@/types/theme";
import type { SiteTheme } from "@/types/theme";
import type { SectionData } from "@/types/blocks";
import { useEditorStore } from "@/lib/editor-store";
import { SectionList } from "@/components/editor/section-list";
import { ThemeEditorPanel } from "@/components/editor/theme-editor-panel";
import { ContentEditorPanel } from "@/components/editor/content-editor-panel";
import {
  Eye,
  Settings,
  Palette,
  Languages,
  Monitor,
  Tablet,
  Smartphone,
  Layout,
  Save,
  ArrowLeft,
  Loader2,
  Check,
  Globe,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface EditorClientProps {
  siteId: string;
  siteName: string;
  siteSlug: string;
  initialStatus: "draft" | "published";
  initialTheme: SiteTheme;
  initialSections: SectionData[];
}

export function EditorClient({
  siteId,
  siteName,
  siteSlug,
  initialStatus,
  initialTheme,
  initialSections,
}: EditorClientProps) {
  const sections = useEditorStore((s) => s.sections);
  const theme = useEditorStore((s) => s.theme);
  const language = useEditorStore((s) => s.language);
  const viewMode = useEditorStore((s) => s.viewMode);
  const deviceMode = useEditorStore((s) => s.deviceMode);
  const selectedSectionId = useEditorStore((s) => s.selectedSectionId);
  const editorTab = useEditorStore((s) => s.editorTab);
  const isDirty = useEditorStore((s) => s.isDirty);
  const isSaving = useEditorStore((s) => s.isSaving);
  const {
    setLanguage,
    setViewMode,
    setDeviceMode,
    selectSection,
    setEditorTab,
    initializeStore,
    setSaving,
  } = useEditorStore();

  const [siteStatus, setSiteStatus] = useState(initialStatus);
  const [isPublishing, setIsPublishing] = useState(false);

  // Initialize store with server data
  useEffect(() => {
    initializeStore(initialSections, initialTheme);
  }, [initializeStore, initialSections, initialTheme]);

  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      // Save theme
      await fetch(`/api/sites/${siteId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme }),
      });

      // Save sections
      await fetch(`/api/sites/${siteId}/sections`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sections }),
      });

      useEditorStore.setState({ isDirty: false });
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setSaving(false);
    }
  }, [siteId, theme, sections, setSaving]);

  const handlePublish = useCallback(async () => {
    const newStatus = siteStatus === "published" ? "draft" : "published";

    if (newStatus === "draft") {
      if (!confirm("Unpublish this site? It will no longer be publicly accessible."))
        return;
    }

    setIsPublishing(true);
    try {
      // Auto-save first if there are unsaved changes
      if (isDirty) await handleSave();

      await fetch(`/api/sites/${siteId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setSiteStatus(newStatus);
    } catch (err) {
      console.error("Publish failed:", err);
    } finally {
      setIsPublishing(false);
    }
  }, [siteId, siteStatus, isDirty, handleSave]);

  const deviceWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px",
  };

  const showContentEditor =
    editorTab === "content" && selectedSectionId !== null;

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft size={18} />
          </Link>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Safahati
          </span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full max-w-[120px] truncate">
            {siteName}
          </span>
        </div>

        {/* Device Toggle */}
        <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {(
            [
              { mode: "desktop", icon: Monitor },
              { mode: "tablet", icon: Tablet },
              { mode: "mobile", icon: Smartphone },
            ] as const
          ).map(({ mode, icon: Icon }) => (
            <button
              key={mode}
              onClick={() => setDeviceMode(mode)}
              className={`p-1.5 rounded-md transition-all ${
                deviceMode === mode
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={isSaving || !isDirty}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              isDirty
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {isSaving ? (
              <Loader2 size={14} className="animate-spin" />
            ) : isDirty ? (
              <Save size={14} />
            ) : (
              <Check size={14} />
            )}
            {isSaving ? "Saving..." : isDirty ? "Save" : "Saved"}
          </button>

          {/* Publish / Unpublish */}
          {siteStatus === "published" ? (
            <div className="flex items-center gap-1">
              <a
                href={`/sites/${siteSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
              >
                <Globe size={14} />
                Live
                <ExternalLink size={12} />
              </a>
              <button
                onClick={handlePublish}
                disabled={isPublishing}
                className="px-2 py-1.5 text-xs font-medium rounded-lg border border-gray-200 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                {isPublishing ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  "Unpublish"
                )}
              </button>
            </div>
          ) : (
            <button
              onClick={handlePublish}
              disabled={isPublishing}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              {isPublishing ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Globe size={14} />
              )}
              {isPublishing ? "Publishing..." : "Publish"}
            </button>
          )}

          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Languages size={14} />
            {language === "en" ? "EN" : "AR"}
          </button>

          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === "preview"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Eye size={14} />
              <span className="hidden sm:inline">Preview</span>
            </button>
            <button
              onClick={() => setViewMode("editor")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                viewMode === "editor"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Settings size={14} />
              <span className="hidden sm:inline">Editor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Sidebar */}
        {viewMode === "editor" && (
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0">
            {/* Sidebar Tabs */}
            <div className="flex border-b border-gray-100 shrink-0">
              <button
                onClick={() => setEditorTab("content")}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium transition-colors ${
                  editorTab === "content"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Layout size={14} />
                Content
              </button>
              <button
                onClick={() => setEditorTab("theme")}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium transition-colors ${
                  editorTab === "theme"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Palette size={14} />
                Theme
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              {editorTab === "theme" ? (
                <ThemeEditorPanel />
              ) : showContentEditor ? (
                <ContentEditorPanel />
              ) : (
                <SectionList />
              )}
            </div>
          </div>
        )}

        {/* Preview Canvas */}
        <div className="flex-1 overflow-y-auto flex justify-center">
          <div
            className={`transition-all duration-300 ${
              deviceMode !== "desktop" ? "py-8" : ""
            }`}
            style={{
              width: deviceWidths[deviceMode],
              maxWidth: "100%",
            }}
          >
            <div
              data-theme-preview
              className={`bg-white min-h-full ${
                deviceMode !== "desktop"
                  ? "shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
                  : ""
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
              style={themeToCSS(theme)}
            >
              {sections
                .filter((s) => s.isVisible)
                .map((section) => (
                  <div
                    key={section.id}
                    className={`relative ${
                      viewMode === "editor" ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (viewMode === "editor") {
                        selectSection(section.id);
                        setEditorTab("content");
                      }
                    }}
                  >
                    {viewMode === "editor" && (
                      <div
                        className={`absolute inset-0 z-10 pointer-events-none transition-all ${
                          selectedSectionId === section.id
                            ? "ring-2 ring-blue-500 ring-offset-2"
                            : "hover:ring-2 hover:ring-blue-200"
                        }`}
                      />
                    )}
                    <BlockRenderer section={section} language={language} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
