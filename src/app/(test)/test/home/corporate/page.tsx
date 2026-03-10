"use client";

import Link from "next/link";

const templates = [
  { id: "corporate-tower", name: "Vertical Authority", description: "Full-height split with bold heading and CSS skyscraper illustration. Trust logos row." },
  { id: "corporate-metrics", name: "Data-Driven Trust", description: "Centered heading with animated counter stats and glass value-proposition cards." },
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
