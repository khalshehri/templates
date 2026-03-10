"use client";

import Link from "next/link";

const templates = [
  { id: "creative-clash", name: "Color Collision", description: "Two color blocks crash diagonally. Heading at the collision point in white." },
  { id: "creative-showcase", name: "Portfolio Ribbon", description: "Auto-scrolling portfolio ribbons behind a frosted glass center panel." },
  { id: "ink-flow", name: "Ink Flow", description: "Japanese sumi ink flowing on white paper with organic brush-stroke animations." },
];

export default function CreativeIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Creative & Bold</h1>
        <p className="text-gray-400 text-sm mt-1">Expressive, experimental, rule-breaking. For design agencies, branding studios, artists.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/creative/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
