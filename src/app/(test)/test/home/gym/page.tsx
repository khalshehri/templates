"use client";
import Link from "next/link";

const templates = [
  { id: "gym-pulse", name: "Gym Pulse", description: "Heart rate monitor ECG line pulsing across dark background" },
  { id: "gym-weights", name: "Gym Weights", description: "Animated barbell/dumbbell with loading plates" },
  { id: "gym-energy", name: "Gym Energy", description: "Energy burst explosion with radial particles" },
  { id: "gym-timer", name: "Workout Timer", description: "Large countdown timer with circular ring progress bar" },
  { id: "gym-track", name: "Running Track", description: "Running track lanes in perspective with speed lines" },
  { id: "gym-flame", name: "Calorie Flame", description: "Calorie burning flame meter filling up from bottom" },
  { id: "gym-rings", name: "Olympic Rings", description: "Olympic rings with spotlight beams and competition feel" },
  { id: "gym-stats", name: "Fitness Stats", description: "Fitness dashboard with animated progress circles for metrics" },
  { id: "gym-power", name: "Power Meter", description: "Speedometer-style power gauge with needle swinging to max" },
  { id: "gym-champion", name: "Champion Podium", description: "Trophy pedestal center stage with medal ceremony feel" },
];

export default function GymCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">&larr; Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Gym / Fitness</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/gym/${t.id}`} className="bg-gray-900 border border-red-500/30 hover:border-red-500/50 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
