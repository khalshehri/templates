"use client";
import Link from "next/link";

const templates = [
  { id: "nav-agency-creative", name: "Creative Bold", description: "Bright gradient bg (pink to orange), white bold text, playful hover animations." },
  { id: "nav-agency-neon", name: "Neon Accent", description: "Dark bg, one neon color (cyan/pink) for accents and hover glow effects." },
  { id: "nav-agency-film", name: "Film / Cinema", description: "Dark bg, film strip CSS pattern accent, reel numbering style links." },
  { id: "nav-agency-grid", name: "Grid-Based", description: "Links in a visible grid with thin borders, hover fills the cell. Modern, structured." },
  { id: "nav-agency-paint", name: "Paint / Art", description: "Colorful paint-drip CSS decorations, each link has a different accent color." },
  { id: "nav-agency-minimal", name: "Art Minimal", description: "Tons of whitespace, tiny text links, oversized brand name. Less is more." },
  { id: "nav-agency-bold", name: "Oversized Type", description: "All links in text-3xl or larger, stacked or horizontal. Typography-forward." },
  { id: "nav-agency-dark", name: "Dark Moody", description: "Very dark bg, low-contrast gray text, moody atmospheric feel. Artistic." },
  { id: "nav-agency-color", name: "Color Block", description: "Each nav item in its own color block section. Rainbow-like segmented bar." },
  { id: "nav-agency-studio", name: "Studio Workspace", description: "Toolbar-like nav with icon buttons, workspace aesthetic. Creative tools feel." },
];

export default function AgencyNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Creative Agency Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Bold, creative, and artistic navbar designs for agencies and studios.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/agency/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition-colors"
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
