"use client";
import Link from "next/link";

const templates = [
  { id: "freelancer-desk", name: "Freelancer Desk", description: "Minimal desk setup with laptop, coffee, plant illustration (CSS shapes)" },
  { id: "freelancer-coffee", name: "Freelancer Coffee", description: "Coffee cup with rising steam morphing into creative ideas" },
  { id: "freelancer-notebook", name: "Freelancer Notebook", description: "Hand-drawn notebook with sketchy borders and doodles" },
  { id: "freelancer-badge", name: "Freelancer Badge", description: "Oversized business card / ID badge floating with 3D tilt" },
  { id: "freelancer-tools", name: "Freelancer Tools", description: "Floating tool/skill icons orbiting around a central avatar" },
];

export default function FreelancerCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">&larr; Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Freelancer</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/freelancer/${t.id}`} className="bg-gray-900 border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
