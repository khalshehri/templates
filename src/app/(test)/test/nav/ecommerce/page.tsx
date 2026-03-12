"use client";
import Link from "next/link";

const templates = [
  { id: "nav-ecom-shop", name: "Full Shop", description: "Full e-commerce navbar: logo, search bar, account, wishlist heart, cart with badge." },
  { id: "nav-ecom-mega", name: "Mega Menu", description: "Mega menu with category grid dropdown on hover. Electronics, Fashion, Home." },
  { id: "nav-ecom-minimal", name: "Minimal Clean", description: "Minimal clean: logo, 3 links, cart icon with item count badge. White, modern." },
  { id: "nav-ecom-search", name: "Search Focus", description: "Search-focused: large centered search bar takes most width." },
  { id: "nav-ecom-promo", name: "Promo Banner", description: "Promotional banner strip above nav + main nav below." },
  { id: "nav-ecom-dark", name: "Dark Premium", description: "Dark premium e-commerce nav. Black bg, gold accents, elegant typography." },
  { id: "nav-ecom-category", name: "Category Icons", description: "Category-first nav with small category icons in a row." },
  { id: "nav-ecom-brand", name: "Brand Centered", description: "Brand-focused: large centered logo, minimal links split on sides." },
  { id: "nav-ecom-sale", name: "Sale Countdown", description: "Sale bar with animated countdown timer + nav. Red urgency accents." },
  { id: "nav-ecom-sticky", name: "Sticky Compact", description: "Sticky nav that shrinks/compacts on scroll. Full to compact state." },
];

export default function EcommerceNavIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/nav" className="text-gray-500 hover:text-white text-sm">
          ← Back to Nav Categories
        </Link>
        <h1 className="text-2xl font-bold mt-4">E-commerce & Conversion Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">High-conversion, product-focused navbar designs.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/test/nav/ecommerce/${t.id}`}
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
