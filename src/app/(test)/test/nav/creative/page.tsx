"use client";

import Link from "next/link";

const templates = [
  { id: "nav-creative-paint", name: "Paint Splash", desc: "Links with paint splash/drip effect on hover" },
  { id: "nav-creative-neon", name: "Neon Glow", desc: "Neon glow links with animated flickering" },
  { id: "nav-creative-torn", name: "Torn Paper", desc: "Torn/ripped paper edge bottom border" },
  { id: "nav-creative-gradient", name: "Shifting Gradient", desc: "Continuously shifting gradient background" },
  { id: "nav-creative-sticker", name: "Sticker Badge", desc: "Links styled as colorful sticker/badge shapes" },
  { id: "nav-creative-brush", name: "Brush Stroke", desc: "Brush stroke underline effect on hover" },
  { id: "nav-creative-collage", name: "Collage", desc: "Mixed media overlapping elements" },
  { id: "nav-creative-retro", name: "Retro Vintage", desc: "Retro/vintage typography, sepia scheme" },
  { id: "nav-creative-bold", name: "Bold Type", desc: "Oversized typography, asymmetric layout" },
  { id: "nav-creative-wave", name: "Wave Border", desc: "Wavy bottom border with animation" },
];

export default function CreativeNavIndexPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center gap-4">
        <Link href="/test/nav" className="text-gray-400 hover:text-white text-sm">
          &larr; Back to Nav Categories
        </Link>
        <span className="text-white font-semibold">Creative Navbars</span>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Creative Navigation Templates</h1>
        <p className="text-gray-400 mb-10">10 experimental, colorful, and visually unique navbar designs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/creative/${t.id}`}
              className="block p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 hover:bg-gray-800 transition-all group"
            >
              <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">{t.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{t.desc}</p>
              <span className="text-xs text-gray-600 mt-3 block font-mono">{t.id}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
