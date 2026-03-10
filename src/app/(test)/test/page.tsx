"use client";

import { getAllBlocks } from "@/config/block-registry";
import Link from "next/link";

export default function TestIndexPage() {
  const blocks = getAllBlocks();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Component Test Lab</h1>
          <p className="text-gray-400">
            Preview all block templates in isolation. This page is for
            development only — delete the{" "}
            <code className="bg-gray-800 px-2 py-0.5 rounded text-sm">
              src/app/(test)
            </code>{" "}
            folder before launch.
          </p>
        </div>

        <div className="grid gap-6">
          {blocks.map((block) => (
            <div
              key={block.type}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold capitalize">
                    {block.label}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {block.type} · {block.category} ·{" "}
                    {block.templates.length} templates
                  </p>
                </div>
                <Link
                  href={`/test/${block.type}`}
                  className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  View All →
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {block.templates.map((t) => (
                  <Link
                    key={t.id}
                    href={`/test/${block.type}/${t.id}`}
                    className="text-sm bg-gray-800 hover:bg-blue-600 px-3 py-1.5 rounded-md transition-colors"
                  >
                    {t.id}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-600 text-sm">
          Total: {blocks.length} blocks ·{" "}
          {blocks.reduce((sum, b) => sum + b.templates.length, 0)} templates
        </div>
      </div>
    </div>
  );
}
