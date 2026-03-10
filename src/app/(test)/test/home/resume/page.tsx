"use client";

import Link from "next/link";

const templates = [
  { id: "resume-paper", name: "Floating Paper", description: "Floating A4 paper sheet with typed content appearing letter by letter." },
  { id: "resume-timeline", name: "Career Timeline", description: "Vertical career timeline with expanding milestone cards and connecting lines." },
  { id: "resume-terminal", name: "Terminal", description: "CLI/terminal showing resume as `cat resume.json` command output." },
  { id: "resume-card", name: "Business Card", description: "3D floating business card with flip animation, front=name, back=skills." },
  { id: "resume-dashboard", name: "Dashboard", description: "Analytics dashboard with career stats, skill meters & growth chart." },
  { id: "resume-book", name: "Open Book", description: "Open book spread with experience on left page, skills on right." },
  { id: "resume-blueprint", name: "Blueprint", description: "Architectural blueprint with dimension lines and technical annotations." },
  { id: "resume-spotlight", name: "Spotlight", description: "Dark stage with dramatic spotlight revealing name and skills from shadows." },
  { id: "resume-mosaic", name: "Mosaic", description: "Asymmetric grid tiles assembling career highlights piece by piece." },
  { id: "resume-scroll", name: "Ancient Scroll", description: "Parchment scroll with wooden handles unrolling professional history." },
];

export default function ResumeIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">Resume / CV</h1>
        <p className="text-gray-400 text-sm mt-1">Professional, personal, creative. For job seekers, freelancers, and professionals.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/resume/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
