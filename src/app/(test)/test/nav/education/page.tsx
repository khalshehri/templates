"use client";
import Link from "next/link";

const templates = [
  { id: "nav-edu-classic", name: "Academic Classic", description: "University style: crest/shield icon, serif brand, navy/gold theme." },
  { id: "nav-edu-modern", name: "Modern E-Learning", description: "Clean white platform with bright accent, search icon, 'Start Learning' CTA." },
  { id: "nav-edu-book", name: "Book / Library", description: "Open book CSS icon, warm paper-like background, serif typography." },
  { id: "nav-edu-chalk", name: "Chalkboard", description: "Dark green chalkboard background, white chalk-like text, dashed underlines." },
  { id: "nav-edu-campus", name: "Campus Map", description: "Location pins for sections, horizontal scrollable campus areas as nav." },
  { id: "nav-edu-course", name: "Course Catalog", description: "Browse Courses dropdown with categories, badge showing '200+ courses'." },
  { id: "nav-edu-bright", name: "Bright & Colorful", description: "Youth-friendly, multiple accent colors for each nav link. Fun, engaging." },
  { id: "nav-edu-lab", name: "Science Lab", description: "Molecule-like CSS dots connected with lines as decorative accent. Clean." },
  { id: "nav-edu-library", name: "Library Card Catalog", description: "Index-card style nav items with tab-like appearance. Warm tones." },
  { id: "nav-edu-minimal", name: "Clean Minimal", description: "Just logo + 4 links + Apply button. Light bg, single accent color." },
];

export default function EducationNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Education &amp; Academy Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Inspiring, structured navbar designs for educational institutions and e-learning platforms.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/education/${t.id}`}
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
