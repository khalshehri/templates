"use client";
import Link from "next/link";

const templates = [
  { id: "nav-luxury-minimal", name: "Ultra Minimal", description: "Thin serif font, wide letter-spacing, few links, white bg, black text. Generous whitespace." },
  { id: "nav-luxury-gold", name: "Gold Accent", description: "Dark bg with gold text and accents. Thin gold border bottom. Serif font." },
  { id: "nav-luxury-editorial", name: "Editorial", description: "Magazine-style: small category label above, large brand name, thin horizontal rules." },
  { id: "nav-luxury-serif", name: "Serif Typography", description: "All serif typography, generous letter-spacing (0.3em), thin-weight links." },
  { id: "nav-luxury-noir", name: "Noir", description: "All black: black bg, slightly lighter gray text, minimal. Ultra-clean." },
  { id: "nav-luxury-marble", name: "Marble", description: "Light marble-texture CSS gradient bg. Dark text, gold accents, premium feel." },
  { id: "nav-luxury-silk", name: "Silk", description: "Smooth flowing design: soft gradient, cursive accent on brand, gentle transitions." },
  { id: "nav-luxury-monogram", name: "Monogram", description: "Centered monogram/initials in circle, links split on sides. Thin borders." },
  { id: "nav-luxury-curtain", name: "Curtain", description: "Dark gradient bg like curtain drape. Centered gold brand, soft glow effects." },
  { id: "nav-luxury-diamond", name: "Diamond", description: "Diamond/gem pattern accent: small repeating diamond CSS pattern border. Dark, premium." },
];

export default function LuxuryNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Luxury &amp; Premium Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Elegant, minimal, exclusive navbar designs.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/luxury/${t.id}`}
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
