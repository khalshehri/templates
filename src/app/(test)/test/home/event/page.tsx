"use client";

import Link from "next/link";

const templates = [
  { id: "event-countdown", name: "The Big Day", description: "Dark cinematic bg with flip-clock countdown, confetti dots, ticket CTAs." },
  { id: "event-speakers", name: "Speaker Spotlight", description: "Centered heading with speaker avatar row and date/location strip." },
  { id: "fireworks", name: "Fireworks", description: "Night sky fireworks with radial spark bursts and celebration energy." },
];

export default function EventIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Event & Launch</h1>
        <p className="text-gray-400 text-sm mt-1">Excitement, urgency, time-bound. For conferences, webinars, product launches.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/event/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
