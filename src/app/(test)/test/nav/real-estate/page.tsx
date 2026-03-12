"use client";
import Link from "next/link";

const templates = [
  { id: "nav-realestate-luxury", name: "Luxury Property", description: "Dark bg, gold accents, serif font, 'View Properties' CTA. Premium feel." },
  { id: "nav-realestate-search", name: "Property Search", description: "Large search bar with location + type dropdowns. Filter-focused layout." },
  { id: "nav-realestate-modern", name: "Modern Clean", description: "White bg, black text, single blue accent, 'List Property' CTA." },
  { id: "nav-realestate-dark", name: "Dark Premium", description: "Near-black bg, white text, subtle gold hover. High-end realty." },
  { id: "nav-realestate-gold", name: "Gold Accents", description: "Gold (#c9a84c) borders and text highlights on white. Premium feel." },
  { id: "nav-realestate-map", name: "Map / Location", description: "Pin icon + city name visible, location-aware navbar." },
  { id: "nav-realestate-key", name: "Key Icon", description: "Key icon as logo element. 'Unlock Your Dream Home' tagline. Warm tones." },
  { id: "nav-realestate-glass", name: "Glass Effect", description: "Transparent with blur, works over property hero images. Modern." },
  { id: "nav-realestate-building", name: "Building Silhouette", description: "Building silhouette CSS art as decorative accent. Urban, architectural." },
  { id: "nav-realestate-compass", name: "Compass / Direction", description: "Compass icon, directional design elements. Explorer feel." },
];

export default function RealEstateNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">Real Estate Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">Premium, aspirational navbar designs for property and real estate.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/real-estate/${t.id}`}
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
