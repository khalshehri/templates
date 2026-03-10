"use client";

import { use } from "react";
import { getBlock } from "@/config/block-registry";
import type { BlockType } from "@/types/blocks";
import Link from "next/link";
import { useState } from "react";

export default function BlockTestPage({
  params,
}: {
  params: Promise<{ blockType: string }>;
}) {
  const { blockType } = use(params);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  let block;
  try {
    block = getBlock(blockType as BlockType);
  } catch {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Block Not Found</h1>
          <p className="text-gray-400 mb-4">
            &quot;{blockType}&quot; is not a registered block type.
          </p>
          <Link href="/test" className="text-blue-400 hover:underline">
            ← Back to Test Lab
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Sticky toolbar */}
      <div className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/test"
            className="text-gray-400 hover:text-white text-sm"
          >
            ← Back
          </Link>
          <h1 className="text-white font-semibold capitalize">
            {block.label}{" "}
            <span className="text-gray-500 font-normal">
              · {block.templates.length} templates
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
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

      {/* Render all templates stacked */}
      <div>
        {block.templates.map((template) => {
          const Component = template.component;
          return (
            <div key={template.id} className="relative group">
              {/* Template label overlay */}
              <div className="absolute top-2 left-2 z-40 bg-black/70 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/test/${blockType}/${template.id}`}
                  className="hover:underline"
                >
                  {template.id}
                </Link>{" "}
                — {template.name}
              </div>
              <Component
                config={template.defaultConfig}
                language={language}
              />
              {/* Divider */}
              <div className="h-px bg-red-500/30" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
