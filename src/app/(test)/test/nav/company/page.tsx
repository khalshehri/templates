"use client";
import Link from "next/link";

const templates = [
  { id: "nav-company-corporate", name: "Corporate Standard", description: "Blue theme, professional layout with About/Services/Industries/Careers/Contact + CTA." },
  { id: "nav-company-glass", name: "Glass Effect", description: "Transparent with backdrop-blur, white text, subtle border. Works over hero images." },
  { id: "nav-company-dark", name: "Dark Professional", description: "Near-black background, white text, subtle hover effects. Serious, established." },
  { id: "nav-company-split", name: "Split Layout", description: "Logo isolated left, center links, right actions (search + language + CTA)." },
  { id: "nav-company-mega", name: "Mega Menu", description: "Solutions link triggers large dropdown grid with icons + descriptions." },
  { id: "nav-company-topbar", name: "Top Info Bar", description: "Two-tier: top info bar (address, phone, social) + main nav below." },
  { id: "nav-company-centered", name: "Centered Logo", description: "Links split evenly 3-left, 3-right of centered logo. Balanced, premium." },
  { id: "nav-company-sidebar", name: "Sidebar Navigation", description: "Full-height vertical nav (280px), logo top, links stacked, social at bottom." },
  { id: "nav-company-modern", name: "Modern Clean", description: "Rounded corners, soft shadow, pill-shaped active state. Contemporary feel." },
  { id: "nav-company-bold", name: "Bold Typography", description: "Thick font-weight links, strong presence. Oversized logo text." },
];

export default function CompanyNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          &larr; Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Company Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          Professional, corporate navbar designs for businesses of all sizes.
        </p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/company/${t.id}`}
              className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors"
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
