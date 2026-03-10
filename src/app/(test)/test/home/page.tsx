"use client";

import Link from "next/link";

const categories = [
  {
    id: "corporate",
    name: "Corporate & Trust",
    color: "blue",
    count: 2,
    description:
      "Professional, stable, trustworthy. For companies, enterprises, consulting firms, banks.",
    templates: ["corporate-tower", "corporate-metrics"],
  },
  {
    id: "creative",
    name: "Creative & Bold",
    color: "pink",
    count: 2,
    description:
      "Expressive, experimental, rule-breaking. For design agencies, branding studios, artists.",
    templates: ["creative-clash", "creative-showcase"],
  },
  {
    id: "saas",
    name: "SaaS & Product",
    color: "violet",
    count: 2,
    description:
      "Modern, technical, product-forward. For software products, AI tools, dev tools, APIs.",
    templates: ["saas-terminal", "saas-orbit"],
  },
  {
    id: "service",
    name: "Service & Local",
    color: "orange",
    count: 2,
    description:
      "Warm, approachable, action-oriented. For clinics, salons, restaurants, local services.",
    templates: ["service-card", "service-location"],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Conversion",
    color: "emerald",
    count: 2,
    description:
      "High-conversion, product-focused. For online stores, product launches, fashion brands.",
    templates: ["ecommerce-showcase", "ecommerce-promo"],
  },
  {
    id: "event",
    name: "Event & Launch",
    color: "red",
    count: 2,
    description:
      "Excitement, urgency, time-bound. For conferences, webinars, product launches, concerts.",
    templates: ["event-countdown", "event-speakers"],
  },
  {
    id: "luxury",
    name: "Luxury & Premium",
    color: "amber",
    count: 2,
    description:
      "Elegant, minimal, exclusive. For high-end brands, jewelry, hotels, fashion houses.",
    templates: ["luxury-reveal", "luxury-editorial"],
  },
  {
    id: "personal",
    name: "Personal & Freelancer",
    color: "cyan",
    count: 2,
    description:
      "Human, authentic, personality-driven. For freelancers, consultants, coaches, influencers.",
    templates: ["personal-intro", "personal-stack"],
  },
];

const standalone = [
  {
    id: "bento-hero",
    name: "Bento Grid Hero",
    description:
      "Modern asymmetric bento layout with animated gradient text and feature cards",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 hover:border-blue-500/60",
  pink: "border-pink-500/30 hover:border-pink-500/60",
  violet: "border-violet-500/30 hover:border-violet-500/60",
  orange: "border-orange-500/30 hover:border-orange-500/60",
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  red: "border-red-500/30 hover:border-red-500/60",
  amber: "border-amber-500/30 hover:border-amber-500/60",
  cyan: "border-cyan-500/30 hover:border-cyan-500/60",
};

const dotColorMap: Record<string, string> = {
  blue: "bg-blue-500",
  pink: "bg-pink-500",
  violet: "bg-violet-500",
  orange: "bg-orange-500",
  emerald: "bg-emerald-500",
  red: "bg-red-500",
  amber: "bg-amber-500",
  cyan: "bg-cyan-500",
};

export default function HomeTestIndex() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Link
            href="/test"
            className="text-gray-500 hover:text-white text-sm"
          >
            ← Back to Test Lab
          </Link>
          <h1 className="text-3xl font-bold mt-4">Home / Hero Experiments</h1>
          <p className="text-gray-400 text-sm mt-1">
            New hero ideas organized by category. Test before promoting to the
            main block registry.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            8 categories · 16 templates + 1 standalone
          </p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/test/home/${cat.id}`}
              className={`block bg-gray-900 border rounded-xl p-5 transition-colors ${colorMap[cat.color]}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-2 h-2 rounded-full ${dotColorMap[cat.color]}`}
                />
                <h2 className="font-semibold">{cat.name}</h2>
                <span className="text-xs text-gray-600 ml-auto">
                  {cat.count} templates
                </span>
              </div>
              <p className="text-sm text-gray-500">{cat.description}</p>
              <div className="flex gap-2 mt-3">
                {cat.templates.map((tid) => (
                  <span
                    key={tid}
                    className="text-xs bg-gray-800 px-2 py-0.5 rounded"
                  >
                    {tid}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Standalone experiments */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Standalone Experiments
          </h3>
          <div className="grid gap-3">
            {standalone.map((t) => (
              <Link
                key={t.id}
                href={`/test/home/${t.id}`}
                className="block bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-colors"
              >
                <h2 className="font-semibold text-sm">{t.name}</h2>
                <p className="text-xs text-gray-500 mt-1">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
