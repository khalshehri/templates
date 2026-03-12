"use client";
import Link from "next/link";

const templates = [
  { id: "nav-freelancer-simple", name: "Simple Clean", description: "Name as text logo, About/Work/Contact links, Hire Me CTA. White, minimal." },
  { id: "nav-freelancer-code", name: "Code Editor", description: "Monospace font, dark bg (#1e1e1e), syntax-highlighted links (green/orange/blue)." },
  { id: "nav-freelancer-coffee", name: "Coffee Shop", description: "Warm brown/cream palette, coffee cup CSS icon, cozy relaxed feel." },
  { id: "nav-freelancer-desk", name: "Desktop Workspace", description: "Toolbar style, icon-based nav items, work-in-progress status badge." },
  { id: "nav-freelancer-badge", name: "ID Badge", description: "Small photo placeholder + name/title in a badge-like layout at left." },
  { id: "nav-freelancer-tools", name: "Tool Belt", description: "Each nav link has a small CSS tool icon (pen, code, brush). Creative tools theme." },
  { id: "nav-freelancer-calendar", name: "Calendar Availability", description: "Available for hire status with calendar icon and green dot. Availability-focused." },
  { id: "nav-freelancer-connect", name: "Let's Connect", description: "Let's Connect as primary CTA. Social proof: 50+ projects badge visible." },
  { id: "nav-freelancer-portfolio", name: "Portfolio Focus", description: "View Work prominent with project count. Gallery-style nav accent." },
  { id: "nav-freelancer-quotes", name: "Client Quotes", description: "Client quote ticker: small scrolling testimonial text strip in navbar." },
];

export default function FreelancerNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Freelancer Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Personal, authentic, skill-focused navbar designs for independent professionals.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/freelancer/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/50 transition-colors"
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
