"use client";
import Link from "next/link";

const templates = [
  { id: "chalkboard", name: "Chalkboard", description: "Classic chalkboard with chalk writing, formulas & doodles" },
  { id: "education-library", name: "Library", description: "Bookshelf rows perspective with content on an open book" },
  { id: "education-globe", name: "Globe", description: "Spinning globe with connection dots, global learning theme" },
  { id: "education-lab", name: "Science Lab", description: "CSS beakers & flasks with bubbling animations, STEM aesthetic" },
  { id: "education-notebook", name: "Notebook", description: "Spiral notebook with ruled lines and handwritten font feel" },
  { id: "education-tree", name: "Knowledge Tree", description: "Growing tree with topic badges on branches, organic growth" },
  { id: "education-podium", name: "Podium", description: "Lecture stage with podium, curtains & audience silhouettes" },
  { id: "education-puzzle", name: "Puzzle", description: "Interlocking puzzle pieces, each representing a skill or course" },
  { id: "education-lighthouse", name: "Lighthouse", description: "Beacon sweeping with ocean waves, guiding light metaphor" },
  { id: "education-steps", name: "Steps", description: "Ascending stairs with milestones representing learning progression" },
];

export default function EducationCategory() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back to Home Experiments</Link>
        <h1 className="text-2xl font-bold mt-4 mb-6">Education & Academy</h1>
        <div className="grid gap-3">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/education/${t.id}`} className="bg-gray-900 border border-green-500/30 hover:border-green-500/60 rounded-xl p-4 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
