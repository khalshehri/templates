"use client";
import Link from "next/link";

const templates = [
  { id: "nav-resume-paper", name: "Paper Document", description: "White bg with slight paper texture, typed font, document header feel." },
  { id: "nav-resume-timeline", name: "Timeline Nav", description: "Links arranged on a horizontal timeline line with dots/nodes." },
  { id: "nav-resume-tab", name: "Tab Sections", description: "Experience | Skills | Education | Projects as tab UI in navbar." },
  { id: "nav-resume-minimal", name: "Minimal Clean", description: "Name in bold + small title below, section links right. Clean, ATS-friendly." },
  { id: "nav-resume-card", name: "Business Card", description: "Name, title, email in a card-like top bar. Professional." },
  { id: "nav-resume-dashboard", name: "Skills Dashboard", description: "Progress bars or skill indicators alongside section links." },
  { id: "nav-resume-terminal", name: "Terminal CLI", description: "Dark bg, monospace, user@portfolio:~$ prompt style. Developer resume." },
  { id: "nav-resume-scroll", name: "Scroll Parchment", description: "Slightly aged paper bg, elegant serif typography, vintage CV feel." },
  { id: "nav-resume-blueprint", name: "Blueprint Grid", description: "Blue bg (#1e3a5f), white gridline pattern, technical/architect resume." },
  { id: "nav-resume-spotlight", name: "Stage Spotlight", description: "Dark bg with spotlight-like radial gradient on active section." },
];

export default function ResumeNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Resume / CV Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Professional, personal, creative navbar designs for CV and portfolio sites.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/resume/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors"
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
