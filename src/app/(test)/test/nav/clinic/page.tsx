"use client";
import Link from "next/link";

const templates = [
  { id: "nav-clinic-clean", name: "Clean Medical", description: "White bg, teal accent, medical cross icon, Book Appointment CTA." },
  { id: "nav-clinic-pulse", name: "Pulse Line", description: "Animated heartbeat/pulse line CSS animation across the bottom border." },
  { id: "nav-clinic-trust", name: "Trust Badges", description: "4.9 Rating + Board Certified + 15+ Years visible in navbar." },
  { id: "nav-clinic-booking", name: "Booking Focus", description: "Large Book Now button with calendar icon. Phone number visible." },
  { id: "nav-clinic-emergency", name: "Emergency Contact", description: "Red Emergency: 911 badge + regular nav. Safety-first." },
  { id: "nav-clinic-modern", name: "Modern Healthcare", description: "Clean gradients (teal to blue), rounded elements, contemporary." },
  { id: "nav-clinic-care", name: "Patient Care", description: "Heart icon, warm colors, Patient Portal link, caring feel." },
  { id: "nav-clinic-dna", name: "DNA Helix", description: "Animated double helix CSS pattern as decorative element. Scientific." },
  { id: "nav-clinic-shield", name: "Health Shield", description: "Shield icon as logo placeholder. Protection/safety theme. Green/blue." },
  { id: "nav-clinic-green", name: "Nature Healing", description: "Green leaf accents, natural/organic feel, holistic health aesthetic." },
];

export default function ClinicNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Medical Clinic Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Clean, trustworthy, caring navbar designs for healthcare and medical practices.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/clinic/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors"
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
