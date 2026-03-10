"use client";

import Link from "next/link";

const templates = [
  { id: "corporate-tower", name: "Vertical Authority", description: "Full-height split with bold heading and CSS skyscraper illustration. Trust logos row." },
  { id: "corporate-metrics", name: "Data-Driven Trust", description: "Centered heading with animated counter stats and glass value-proposition cards." },
  { id: "hologram-board", name: "Hologram Board", description: "Holographic data panels floating over a conference table with scan-line effects." },
  { id: "corporate-pillars", name: "Corporate Pillars", description: "Three tall CSS column pillars with content between them. Heading floats above, stats at base. Vertical emphasis." },
  { id: "corporate-wave", name: "Corporate Wave", description: "Flowing sine wave SVG separating top content from bottom stats. Left-aligned content above, trust badges below." },
  { id: "corporate-grid", name: "Corporate Grid", description: "Bento-style 2x3 grid with mixed content cells: stats, icons, testimonial quote, CTA. Non-traditional layout." },
  { id: "corporate-horizon", name: "Corporate Horizon", description: "Minimal architectural feel with horizontal line animation at center. Heading splits above/below. Light theme, thin serif." },
  { id: "corporate-shield", name: "Corporate Shield", description: "Large shield emblem center with certification badges orbiting it. Heading and CTA flanking on sides." },
  { id: "corporate-stairs", name: "Corporate Stairs", description: "Stepped staircase layout revealing content progressively from top-left to bottom-right diagonal." },
  { id: "corporate-lens", name: "Corporate Lens", description: "Circular aperture in center with abstract gradient. Content items arranged in arc around it. Radial layout." },
];

export default function CorporateIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Corporate & Trust</h1>
        <p className="text-gray-400 text-sm mt-1">Professional, stable, trustworthy. For companies, enterprises, consulting firms.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/corporate/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
