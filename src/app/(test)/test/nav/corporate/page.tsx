"use client";
import Link from "next/link";

const templates = [
  { id: "nav-corp-classic", name: "Classic Bar", description: "Traditional horizontal navbar with centered links and CTA" },
  { id: "nav-corp-glass", name: "Glassmorphism", description: "Transparent navbar with backdrop-blur and subtle borders" },
  { id: "nav-corp-dark", name: "Dark Navy", description: "Dark navy bar with gold accent line and search icon" },
  { id: "nav-corp-split", name: "Split Layout", description: "Logo far-left, nav centered, actions far-right" },
  { id: "nav-corp-minimal", name: "Ultra Minimal", description: "Ultra-thin 40px bar with minimal styling" },
  { id: "nav-corp-mega", name: "Mega Menu", description: "Navbar with CSS-only dropdown mega-menu panel" },
  { id: "nav-corp-topbar", name: "Double Bar", description: "Top info strip with main navigation below" },
  { id: "nav-corp-sidebar", name: "Sidebar Nav", description: "Fixed vertical sidebar navigation (240px wide)" },
  { id: "nav-corp-centered", name: "Centered Logo", description: "Centered logo with links split evenly on both sides" },
  { id: "nav-corp-ribbon", name: "Ribbon Accent", description: "Wide bar with colored ribbon stripe at top edge" },
];

export default function CorporateNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Corporate &amp; Trust Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Professional, stable, trustworthy navbar designs.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/corporate/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors"
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
