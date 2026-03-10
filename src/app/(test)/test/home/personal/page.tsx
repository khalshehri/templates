"use client";

import Link from "next/link";

const templates = [
  { id: "personal-intro", name: "Hey, I'm...", description: "Large circular photo with gradient border, friendly intro tone, social icons." },
  { id: "personal-stack", name: "Skill Stack", description: "Centered photo, name/title, horizontal scrolling skill badges, social links." },
  { id: "polaroid-wall", name: "Polaroid Wall", description: "Scattered polaroid photos on a cork board with handwritten labels." },
  { id: "personal-handwave", name: "Hand Wave", description: "Large waving hand CSS illustration, casual 'Hey there!' intro, asymmetric layout." },
  { id: "personal-timeline", name: "Career Timeline", description: "Vertical timeline of career milestones, heading at top, scrolls through events." },
  { id: "personal-card-flip", name: "Business Card Flip", description: "3D floating business card with hover-to-flip. Front shows name, back shows details." },
  { id: "personal-social", name: "Social Profile", description: "Social media-inspired layout with profile header, bio, stats, and link grid." },
  { id: "personal-desk", name: "Workspace Desk", description: "Bird's eye desk with CSS laptop, coffee, notebook. Content below the desk." },
  { id: "personal-spotlight", name: "Stage Spotlight", description: "Theater spotlight on name, rest in shadow. Speaker/performer feel." },
  { id: "personal-pixel", name: "Pixel Art", description: "8-bit pixel art avatar, retro gaming UI, CRT scanlines. Fun and geeky." },
];

export default function PersonalIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Personal & Freelancer</h1>
        <p className="text-gray-400 text-sm mt-1">Human, authentic, personality-driven. For freelancers, consultants, coaches.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/personal/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-cyan-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
