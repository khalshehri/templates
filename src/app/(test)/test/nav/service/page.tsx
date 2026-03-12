"use client";
import Link from "next/link";

const templates = [
  { id: "nav-service-warm", name: "Warm Colors", description: "Warm orange/amber gradient bar. Rounded elements, logo + links + Book Now CTA." },
  { id: "nav-service-booking", name: "Booking Focus", description: "White bar with prominent green Book Appointment button and phone icon." },
  { id: "nav-service-local", name: "Local Business", description: "Bar with location pin icon, area name, and visible phone number. Earth tones." },
  { id: "nav-service-clean", name: "Clean Accent", description: "Clean white bar with single teal accent. Logo, links, CTA. Subtle shadow." },
  { id: "nav-service-card", name: "Floating Card", description: "Floating card-style nav, centered with rounded corners and shadow." },
  { id: "nav-service-friendly", name: "Friendly Pills", description: "Rounded pill-shaped navigation links, soft pastel colors, gentle shadows." },
  { id: "nav-service-phone", name: "Phone Prominent", description: "Phone number prominently displayed (large, clickable), alongside logo and minimal links." },
  { id: "nav-service-hours", name: "Operating Hours", description: "Operating hours badge visible in navbar with green dot indicator." },
  { id: "nav-service-map", name: "Map Location", description: "Small map icon with address text visible. Location-focused navbar." },
  { id: "nav-service-trust", name: "Trust Badges", description: "Trust badges and certifications displayed in navbar (rating, licensed, insured)." },
];

export default function ServiceNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Service & Local Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Warm, approachable navbar designs for service businesses.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/service/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-orange-500/50 transition-colors"
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
