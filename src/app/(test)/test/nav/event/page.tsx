"use client";
import Link from "next/link";

const templates = [
  { id: "nav-event-countdown", name: "Countdown Timer", description: "Navbar with embedded countdown timer (Days:Hrs:Mins:Secs). Dark cinematic." },
  { id: "nav-event-ticket", name: "Ticket CTA", description: "Get Tickets as large prominent CTA. Logo + event name + date badge." },
  { id: "nav-event-festive", name: "Festive Party", description: "Festive/celebratory with confetti-like colored dots animation. Party feel." },
  { id: "nav-event-dark", name: "Dark Cinematic", description: "Dark cinematic navbar with red accent. Movie premiere / launch feel." },
  { id: "nav-event-badge", name: "Conference Badge", description: "Conference badge style: event logo + attendee name + schedule/speakers links." },
  { id: "nav-event-stage", name: "Stage Curtain", description: "Stage curtain inspired: dark red velvet bg, gold text, theatrical." },
  { id: "nav-event-schedule", name: "Schedule Tabs", description: "Quick schedule section links: Day 1 | Day 2 | Day 3 tab-style navigation." },
  { id: "nav-event-live", name: "Live Indicator", description: "LIVE NOW pulsing red indicator in navbar. Streaming/webinar event feel." },
  { id: "nav-event-speaker", name: "Speaker Ticker", description: "Speaker names auto-scrolling ticker below main nav. Conference style." },
  { id: "nav-event-neon", name: "Neon Party", description: "Neon party style: dark bg, neon pink/cyan glowing text, club/nightlife." },
];

export default function EventNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Event & Launch Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Exciting, urgent, high-energy navbar designs for events.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/event/${t.id}`}
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
