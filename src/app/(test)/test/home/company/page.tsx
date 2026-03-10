"use client";
import Link from "next/link";

const templates = [
  { id: "company-skyline", name: "City Skyline", description: "Parallax city skyline layers with glass reflection effect" },
  { id: "company-tower", name: "Glass Tower", description: "Rising glass tower with animated window lights" },
  { id: "company-globe", name: "Global Network", description: "Spinning globe with connected office location dots" },
  { id: "company-metrics", name: "Business Metrics", description: "Animated counter stats with professional data visualization" },
  { id: "company-timeline", name: "Milestone Timeline", description: "Horizontal scrolling company milestone timeline" },
  { id: "company-network", name: "Office Network", description: "Connected nodes showing global office network" },
];

export default function CompanyIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Company</h1>
        <p className="text-gray-400 text-sm mt-1">Professional, trustworthy, corporate. For companies and enterprises.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/company/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
