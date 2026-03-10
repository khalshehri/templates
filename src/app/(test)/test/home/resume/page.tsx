"use client";

import Link from "next/link";

const templates = [
  { id: "resume-paper", name: "Floating Paper", description: "Floating A4 paper sheet with typed content appearing letter by letter." },
  { id: "resume-timeline", name: "Career Timeline", description: "Vertical career timeline with expanding milestone cards and connecting lines." },
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
