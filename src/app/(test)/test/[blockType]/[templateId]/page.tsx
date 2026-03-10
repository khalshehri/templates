"use client";

import { use } from "react";
import { getBlock, getTemplate } from "@/config/block-registry";
import type { BlockType } from "@/types/blocks";
import Link from "next/link";
import { useState } from "react";

export default function TemplateTestPage({
  params,
}: {
  params: Promise<{ blockType: string; templateId: string }>;
}) {
  const { blockType, templateId } = use(params);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [showConfig, setShowConfig] = useState(false);

  let block;
  let template;
  try {
    block = getBlock(blockType as BlockType);
    template = getTemplate(blockType as BlockType, templateId);
  } catch {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Template Not Found</h1>
          <p className="text-gray-400 mb-4">
            &quot;{blockType}/{templateId}&quot; does not exist.
          </p>
          <Link href="/test" className="text-blue-400 hover:underline">
            ← Back to Test Lab
          </Link>
        </div>
      </div>
    );
  }

  const Component = template.component;

  // Find prev/next template for navigation
  const templates = block.templates;
  const currentIndex = templates.findIndex((t) => t.id === templateId);
  const prevTemplate = currentIndex > 0 ? templates[currentIndex - 1] : null;
  const nextTemplate =
    currentIndex < templates.length - 1 ? templates[currentIndex + 1] : null;

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Sticky toolbar */}
      <div className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href={`/test/${blockType}`}
            className="text-gray-400 hover:text-white text-sm"
          >
            ← {block.label}
          </Link>
          <span className="text-white font-semibold">{template.id}</span>
          <span className="text-gray-500 text-sm">
            {template.name} / {template.nameAr}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Prev/Next */}
          <div className="flex gap-1">
            {prevTemplate ? (
              <Link
                href={`/test/${blockType}/${prevTemplate.id}`}
                className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors"
              >
                ← Prev
              </Link>
            ) : (
              <span className="px-2 py-1 bg-gray-900 rounded text-sm text-gray-600">
                ← Prev
              </span>
            )}
            {nextTemplate ? (
              <Link
                href={`/test/${blockType}/${nextTemplate.id}`}
                className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors"
              >
                Next →
              </Link>
            ) : (
              <span className="px-2 py-1 bg-gray-900 rounded text-sm text-gray-600">
                Next →
              </span>
            )}
          </div>

          {/* Config toggle */}
          <button
            onClick={() => setShowConfig(!showConfig)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              showConfig
                ? "bg-yellow-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {showConfig ? "Hide Config" : "Config"}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ar")}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              language === "ar"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            AR
          </button>
        </div>
      </div>

      {/* Config panel */}
      {showConfig && (
        <div className="bg-gray-900 border-b border-gray-800 p-6 max-h-80 overflow-auto">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            defaultConfig
          </h3>
          <pre className="text-xs text-green-400 whitespace-pre-wrap font-mono">
            {JSON.stringify(template.defaultConfig, null, 2)}
          </pre>
        </div>
      )}

      {/* Component render */}
      <Component config={template.defaultConfig} language={language} />
    </div>
  );
}
