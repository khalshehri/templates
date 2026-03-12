"use client";
import Link from "next/link";

const templates = [
  { id: "nav-law-classic", name: "Classic Legal", description: "Navy bg, gold text, serif font, 'Free Consultation' CTA. Traditional." },
  { id: "nav-law-column", name: "Greek Column", description: "Greek column CSS accents flanking logo. White bg, marble feel." },
  { id: "nav-law-scales", name: "Scales of Justice", description: "Scales of justice CSS icon as logo element. Dark theme, authoritative." },
  { id: "nav-law-dark", name: "Dark Authoritative", description: "Very dark bg, white serif text, thin gold border bottom. Power." },
  { id: "nav-law-gold", name: "Gold Serif", description: "Gold serif typography on white/cream bg. Gold accents on links." },
  { id: "nav-law-library", name: "Library / Books", description: "Wood-toned bg, book-spine styling on links. Scholarly feel." },
  { id: "nav-law-document", name: "Legal Document", description: "Formal, stamp-like elements, document border styling." },
  { id: "nav-law-emblem", name: "Crest / Emblem", description: "Crest/emblem centered as logo. Links split on sides. Shield branding." },
  { id: "nav-law-marble", name: "Marble Texture", description: "Marble texture CSS gradient bg. Dark text, gold accents. Courthouse." },
  { id: "nav-law-gavel", name: "Gavel", description: "Gavel CSS icon accent. Bold, decisive design. Dark bg with wood tones." },
];

export default function LawFirmNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Law Firm Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Authoritative, trustworthy navbar designs for legal practices.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/law-firm/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors"
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
