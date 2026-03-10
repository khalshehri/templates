"use client";

import Link from "next/link";

const templates = [
  {
    id: "bento-hero",
    name: "Bento Grid Hero",
    description: "Modern asymmetric bento layout with animated gradient text and feature cards",
  },
];

export default function HomeTestIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/test" className="text-gray-500 hover:text-white text-sm">
            ← Back to Test Lab
          </Link>
          <h1 className="text-2xl font-bold mt-4">Home / Hero Experiments</h1>
          <p className="text-gray-400 text-sm mt-1">
            New hero ideas being tested before promotion to the main block registry.
          </p>
        </div>

        <div className="grid gap-4">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/home/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors"
            >
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
