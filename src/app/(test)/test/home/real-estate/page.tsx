"use client";
import Link from "next/link";

const templates = [
  { id: "realestate-skyline", name: "Skyline", description: "Luxury city skyline panorama with golden hour gradient" },
  { id: "realestate-key", name: "Key", description: "Oversized golden key with turning/unlocking animation" },
  { id: "realestate-floor", name: "Floor Plan", description: "Animated floor plan line drawing that draws itself" },
  { id: "realestate-door", name: "Door", description: "Front door slowly opening to reveal bright interior" },
  { id: "realestate-compass", name: "Compass", description: "Spinning compass indicating location/direction" },
];

export default function RealEstateCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">&larr; Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Real Estate</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/real-estate/${t.id}`} className="bg-gray-900 border border-amber-500/30 hover:border-amber-500/50 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
