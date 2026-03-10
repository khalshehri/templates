"use client";

import Link from "next/link";

const templates = [
  { id: "luxury-reveal", name: "Curtain Reveal", description: "Ultra-minimal dark bg. Letter-by-letter heading, expanding gold line, pure whitespace." },
  { id: "luxury-editorial", name: "Magazine Cover", description: "Full-screen image bg with magazine-style serif typography overlay." },
];

export default function LuxuryIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Luxury & Premium</h1>
        <p className="text-gray-400 text-sm mt-1">Elegant, minimal, exclusive. For high-end brands, jewelry, hotels, fashion houses.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/luxury/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
