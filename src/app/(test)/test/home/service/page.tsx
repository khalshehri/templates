"use client";

import Link from "next/link";

const templates = [
  { id: "service-card", name: "Booking Card", description: "Warm heading with a floating appointment booking card UI on the right." },
  { id: "service-location", name: "Map Pinpoint", description: "Split layout with heading and an abstract CSS city-grid map with pulsing pin." },
  { id: "warm-welcome", name: "Warm Welcome", description: "Door panels sliding open to reveal a warm golden interior with inviting glow." },
];

export default function ServiceIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Service & Local</h1>
        <p className="text-gray-400 text-sm mt-1">Warm, approachable, action-oriented. For clinics, salons, restaurants, local services.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/service/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-orange-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
