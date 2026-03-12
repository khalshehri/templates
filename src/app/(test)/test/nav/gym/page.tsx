"use client";
import Link from "next/link";

const templates = [
  { id: "nav-gym-energy", name: "High Energy", description: "Bold red/black, thick borders, 'JOIN NOW' large CTA. Intense." },
  { id: "nav-gym-dark", name: "Dark + Red", description: "Black bg (#0a0a0a), red (#e11d48) highlight on active. Powerful." },
  { id: "nav-gym-pulse", name: "Pulse / Heartbeat", description: "Animated pulse/heartbeat line across bottom border. Fitness monitoring." },
  { id: "nav-gym-power", name: "Power / Strength", description: "Heavy bold type, red gradient CTA, strong visual weight." },
  { id: "nav-gym-neon", name: "Neon Gym", description: "Dark bg, neon green/yellow glow on text. Late-night gym aesthetic." },
  { id: "nav-gym-track", name: "Racing Track", description: "Diagonal stripe pattern accent, speed-inspired. Dynamic." },
  { id: "nav-gym-flame", name: "Fire / Flame", description: "Red-orange gradient accents, flame-like CSS shapes. Burn calories." },
  { id: "nav-gym-steel", name: "Steel / Metal", description: "Gradient simulating brushed metal, industrial feel. Weights theme." },
  { id: "nav-gym-timer", name: "Timer / Clock", description: "Workout timer display element in nav. 'Next Class: 30min' countdown." },
  { id: "nav-gym-champion", name: "Champion / Medal", description: "Gold medal CSS icon, podium-inspired layout. Victory theme." },
];

export default function GymNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Gym / Fitness Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Energetic, powerful navbar designs for gyms and fitness centers.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/gym/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition-colors"
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
