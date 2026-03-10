"use client";
import Link from "next/link";

const templates = [
  { id: "agency-palette", name: "Paint Palette", description: "Paint palette with color splashes bursting outward" },
  { id: "agency-canvas", name: "Living Canvas", description: "Blank canvas that paints itself with brush strokes" },
  { id: "agency-collage", name: "Mixed Media Collage", description: "Mixed media collage with overlapping torn paper pieces" },
  { id: "agency-spray", name: "Spray Paint", description: "Street art spray paint stencil effect with urban graffiti aesthetic" },
  { id: "agency-film", name: "Film Strip", description: "Film strip with animated frames sliding through, cinema production aesthetic" },
  { id: "agency-drip", name: "Paint Drip", description: "Paint dripping from top with vivid color streams, abstract expressionist" },
  { id: "agency-scissors", name: "Cut & Paste", description: "Magazine ransom note style typography with mixed fonts and collage layout" },
  { id: "agency-studio", name: "Creative Studio", description: "Bird's eye view of creative workspace with desk, tools, and screens" },
  { id: "agency-neon", name: "Neon Sign", description: "Neon tube art sign flickering on dark brick wall texture" },
  { id: "agency-mosaic", name: "Pixel Mosaic", description: "Pixel/tile mosaic that assembles to reveal content with colorful tiles" },
];

export default function AgencyCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Creative Agency</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/agency/${t.id}`} className="bg-gray-900 border border-pink-500/30 hover:border-pink-500/50 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
