"use client";
import Link from "next/link";

const templates = [
  { id: "nav-personal-hello", name: "Hello Greeting", description: "\"Hi, I'm [Name]\" as logo text. Casual, friendly tone. Soft bg, rounded elements." },
  { id: "nav-personal-photo", name: "Avatar Photo", description: "Small circular avatar photo placeholder in navbar alongside name and links." },
  { id: "nav-personal-social", name: "Social Icons", description: "Social media icons (GitHub, Twitter, LinkedIn) prominent in nav. Minimal links." },
  { id: "nav-personal-minimal", name: "Super Minimal", description: "Just name on left, 3 section links on right. No bg, no borders, clean." },
  { id: "nav-personal-card", name: "Business Card", description: "Business card style header: name, title, contact in a card-like navbar." },
  { id: "nav-personal-blog", name: "Blog Style", description: "Blog-style: site name in serif, categories as links. Clean, readable." },
  { id: "nav-personal-stack", name: "Tech Stack", description: "Tech stack badges (React, TypeScript, Node.js as small pills) alongside name." },
  { id: "nav-personal-handwrite", name: "Handwritten", description: "Handwritten-style font for brand name. Casual, personal feel." },
  { id: "nav-personal-gradient", name: "Gradient Mesh", description: "Soft gradient background (pastel blue to pink). White text, rounded nav items." },
  { id: "nav-personal-dot", name: "Dot Indicators", description: "Dot indicators for active section. Small colored dots above/below links. Clean, minimal." },
];

export default function PersonalNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Personal &amp; Freelancer Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Friendly, portfolio-focused navbars for individuals and freelancers.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/personal/${t.id}`}
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
