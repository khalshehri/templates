"use client";
import Link from "next/link";

const templates = [
  { id: "nav-photo-gallery", name: "Gallery Style", description: "Nav as a visual strip, hover reveals photo-frame effect on links." },
  { id: "nav-photo-dark", name: "Dark Room", description: "Very dark bg (#0a0a0a), red accent (#8b0000), minimal exposure feel." },
  { id: "nav-photo-minimal", name: "Ultra Minimal", description: "Just name + Portfolio/About/Contact. No bg, pure typography." },
  { id: "nav-photo-film", name: "Film Strip", description: "Repeating film perforation CSS pattern as border decoration." },
  { id: "nav-photo-aperture", name: "Aperture / Lens", description: "Aperture/lens CSS icon as logo element. f/1.8 badge style." },
  { id: "nav-photo-lightbox", name: "Lightbox Frame", description: "Slight vignette effect on edges, focus on center content." },
  { id: "nav-photo-viewfinder", name: "Viewfinder", description: "Viewfinder overlay corners at edges of navbar. Camera UI aesthetic." },
  { id: "nav-photo-polaroid", name: "Polaroid Style", description: "White bottom padding, slight rotation on brand. Instant photo feel." },
  { id: "nav-photo-exposure", name: "Exposure Meter", description: "Exposure meter/slider-like element as decorative. Technical photography." },
  { id: "nav-photo-lens", name: "Lens Focus", description: "Circular gradient on hover, depth-of-field blur accents." },
];

export default function PhotographyNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Photography Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Visual, artistic navbar designs for photographers and visual artists.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/photography/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-pink-500/50 transition-colors"
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
