"use client";

import Link from "next/link";

const templates = [
  { id: "ecommerce-showcase", name: "Product Spotlight", description: "Large product area with floating price badge, star rating, and Add to Cart button." },
  { id: "ecommerce-promo", name: "Sale Banner", description: "Animated diagonal stripes, oversized discount text, countdown timer, urgent CTA." },
];

export default function EcommerceIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/test/home" className="text-gray-500 hover:text-white text-sm">← Back</Link>
        <h1 className="text-2xl font-bold mt-4">E-commerce & Conversion</h1>
        <p className="text-gray-400 text-sm mt-1">High-conversion, product-focused. For online stores, product launches, fashion brands.</p>
        <div className="grid gap-4 mt-6">
          {templates.map((t) => (
            <Link key={t.id} href={`/test/home/ecommerce/${t.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
