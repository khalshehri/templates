"use client";

import { getAllBlocks } from "@/config/block-registry";
import Link from "next/link";

/* ── Experimental hero categories (test lab) ────────────────── */
const heroCategories = [
  {
    id: "corporate",
    name: "Corporate & Trust",
    color: "blue",
    description: "Professional, stable, trustworthy",
    templates: [
      { id: "corporate-tower", name: "Vertical Authority" },
      { id: "corporate-metrics", name: "Data-Driven Trust" },
      { id: "hologram-board", name: "Hologram Board" },
    ],
  },
  {
    id: "creative",
    name: "Creative & Bold",
    color: "pink",
    description: "Expressive, experimental, rule-breaking",
    templates: [
      { id: "creative-clash", name: "Color Collision" },
      { id: "creative-showcase", name: "Portfolio Ribbon" },
      { id: "ink-flow", name: "Ink Flow" },
    ],
  },
  {
    id: "saas",
    name: "SaaS & Product",
    color: "violet",
    description: "Modern, technical, product-forward",
    templates: [
      { id: "saas-terminal", name: "Developer Terminal" },
      { id: "saas-orbit", name: "Product Orbit" },
      { id: "neural-network", name: "Neural Network" },
    ],
  },
  {
    id: "service",
    name: "Service & Local",
    color: "orange",
    description: "Warm, approachable, action-oriented",
    templates: [
      { id: "service-card", name: "Booking Card" },
      { id: "service-location", name: "Map Pinpoint" },
      { id: "warm-welcome", name: "Warm Welcome" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Conversion",
    color: "emerald",
    description: "High-conversion, product-focused",
    templates: [
      { id: "ecommerce-showcase", name: "Product Spotlight" },
      { id: "ecommerce-promo", name: "Sale Banner" },
      { id: "unboxing", name: "Unboxing" },
    ],
  },
  {
    id: "event",
    name: "Event & Launch",
    color: "red",
    description: "Excitement, urgency, time-bound",
    templates: [
      { id: "event-countdown", name: "The Big Day" },
      { id: "event-speakers", name: "Speaker Spotlight" },
      { id: "fireworks", name: "Fireworks" },
    ],
  },
  {
    id: "luxury",
    name: "Luxury & Premium",
    color: "amber",
    description: "Elegant, minimal, exclusive",
    templates: [
      { id: "luxury-reveal", name: "Curtain Reveal" },
      { id: "luxury-editorial", name: "Magazine Cover" },
      { id: "marble-gold", name: "Marble & Gold" },
    ],
  },
  {
    id: "personal",
    name: "Personal & Freelancer",
    color: "cyan",
    description: "Human, authentic, personality-driven",
    templates: [
      { id: "personal-intro", name: "Hey, I'm..." },
      { id: "personal-stack", name: "Skill Stack" },
      { id: "polaroid-wall", name: "Polaroid Wall" },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant & Food",
    color: "orange",
    description: "Appetizing, warm, sensory",
    templates: [
      { id: "kitchen-flame", name: "Kitchen Flame" },
    ],
  },
  {
    id: "education",
    name: "Education & Academy",
    color: "emerald",
    description: "Inspiring, structured, knowledge-driven",
    templates: [
      { id: "chalkboard", name: "Chalkboard" },
    ],
  },
];

const creativeOriginals = [
  { id: "liquid-morphism", name: "Liquid Morphism", description: "Organic morphing blobs with glassmorphism cards" },
  { id: "isometric-world", name: "Isometric World", description: "CSS isometric city with rising buildings" },
  { id: "neon-noir", name: "Neon Noir", description: "Cyberpunk rain + flickering neon sign" },
  { id: "paper-layers", name: "Paper Layers", description: "SVG mountain paper-cut depth layers" },
  { id: "geometric-chaos", name: "Geometric Chaos", description: "Brutalist scattered shapes + bold type" },
  { id: "aurora-mesh", name: "Aurora Mesh", description: "Animated gradient mesh like northern lights" },
  { id: "split-personality", name: "Split Personality", description: "Diagonal split — light/dark halves" },
  { id: "retro-crt", name: "Retro CRT", description: "CRT monitor scanlines + terminal boot" },
  { id: "typewriter", name: "Typewriter", description: "Vintage typewriter with character-by-character typing" },
  { id: "constellation", name: "Constellation", description: "Deep space star map with twinkling nebula" },
  { id: "glitch-matrix", name: "Glitch Matrix", description: "Matrix falling characters + RGB aberration" },
  { id: "vinyl-record", name: "Vinyl Record", description: "Spinning CSS vinyl with grooves + equalizer" },
  { id: "origami", name: "Origami", description: "Japanese paper-fold cranes — zen minimal" },
  { id: "lava-lamp", name: "Lava Lamp", description: "70s psychedelic morphing blobs in glass tube" },
  { id: "blueprint", name: "Blueprint", description: "Architecture blueprint grid + technical drawings" },
  { id: "kaleidoscope", name: "Kaleidoscope", description: "Rotating symmetric jewel-tone rings" },
  { id: "smoke-reveal", name: "Smoke Reveal", description: "Cinematic smoke clears to reveal content" },
  { id: "pixel-rain", name: "Pixel Rain", description: "8-bit retro falling pixel blocks + arcade UI" },
];

const standaloneExperiments = [
  { id: "bento-hero", name: "Bento Grid Hero", description: "Asymmetric bento layout with gradient text" },
];

/* ── Color maps ──────────────────────────────────────────────── */
const borderColor: Record<string, string> = {
  blue: "border-blue-500/20 hover:border-blue-500/50",
  pink: "border-pink-500/20 hover:border-pink-500/50",
  violet: "border-violet-500/20 hover:border-violet-500/50",
  orange: "border-orange-500/20 hover:border-orange-500/50",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50",
  red: "border-red-500/20 hover:border-red-500/50",
  amber: "border-amber-500/20 hover:border-amber-500/50",
  cyan: "border-cyan-500/20 hover:border-cyan-500/50",
};

const dotColor: Record<string, string> = {
  blue: "bg-blue-500", pink: "bg-pink-500", violet: "bg-violet-500",
  orange: "bg-orange-500", emerald: "bg-emerald-500", red: "bg-red-500",
  amber: "bg-amber-500", cyan: "bg-cyan-500",
};

const linkColor: Record<string, string> = {
  blue: "hover:bg-blue-600", pink: "hover:bg-pink-600", violet: "hover:bg-violet-600",
  orange: "hover:bg-orange-600", emerald: "hover:bg-emerald-600", red: "hover:bg-red-600",
  amber: "hover:bg-amber-600", cyan: "hover:bg-cyan-600",
};

/* ── Page ─────────────────────────────────────────────────────── */
export default function TestIndexPage() {
  const blocks = getAllBlocks();
  const totalRegistry = blocks.reduce((sum, b) => sum + b.templates.length, 0);
  const totalExperimental = heroCategories.reduce((s, c) => s + c.templates.length, 0) + creativeOriginals.length + standaloneExperiments.length;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Component Test Lab</h1>
          <p className="text-gray-500 text-sm mt-1">
            Preview and test all block templates in isolation.
            Delete{" "}
            <code className="bg-gray-800 px-1.5 py-0.5 rounded text-xs">
              src/app/(test)
            </code>{" "}
            before launch.
          </p>
          <div className="flex gap-4 mt-3 text-xs text-gray-600">
            <span>{blocks.length} registered blocks</span>
            <span>·</span>
            <span>{totalRegistry} registry templates</span>
            <span>·</span>
            <span>{totalExperimental} experimental templates</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* ═══ SECTION 1: Experimental Hero Templates ═══ */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
            <div>
              <h2 className="text-xl font-bold">Experimental Hero Templates</h2>
              <p className="text-xs text-gray-500">New designs organized by category — not yet in the registry</p>
            </div>
          </div>

          <div className="grid gap-4">
            {heroCategories.map((cat) => (
              <div
                key={cat.id}
                className={`bg-gray-900/50 border rounded-xl p-5 transition-colors ${borderColor[cat.color]}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-2 h-2 rounded-full ${dotColor[cat.color]}`} />
                  <Link
                    href={`/test/home/${cat.id}`}
                    className="font-semibold hover:underline"
                  >
                    {cat.name}
                  </Link>
                  <span className="text-xs text-gray-600">
                    {cat.description}
                  </span>
                  <Link
                    href={`/test/home/${cat.id}`}
                    className="ml-auto text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View Category →
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.templates.map((t) => (
                    <Link
                      key={t.id}
                      href={`/test/home/${cat.id}/${t.id}`}
                      className={`text-sm bg-gray-800 ${linkColor[cat.color]} px-3 py-1.5 rounded-md transition-colors flex items-center gap-2`}
                    >
                      <span className="text-gray-400">{t.id}</span>
                      <span className="text-gray-600">—</span>
                      <span>{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Creative Originals */}
            <div className="bg-gray-900/50 border border-purple-500/20 hover:border-purple-500/40 rounded-xl p-5 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="font-semibold">Creative & Unique Originals</span>
                <span className="text-xs text-gray-600">Novel visual concepts — unique designs</span>
                <Link
                  href="/test/home"
                  className="ml-auto text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {creativeOriginals.map((t) => (
                  <Link
                    key={t.id}
                    href={`/test/home/${t.id}`}
                    className="text-sm bg-gray-800 hover:bg-purple-600 px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-400">{t.id}</span>
                    <span className="text-gray-600">—</span>
                    <span>{t.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Standalone */}
            {standaloneExperiments.map((t) => (
              <Link
                key={t.id}
                href={`/test/home/${t.id}`}
                className="bg-gray-900/50 border border-gray-800 hover:border-gray-600 rounded-xl p-4 transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-sm">{t.name}</span>
                  <span className="text-xs text-gray-600 ml-3">{t.description}</span>
                </div>
                <span className="text-xs text-gray-600">Standalone →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ═══ SECTION 2: Registered Block Components ═══ */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
            <div>
              <h2 className="text-xl font-bold">Registered Block Components</h2>
              <p className="text-xs text-gray-500">{blocks.length} block types from the main registry — these render live sites</p>
            </div>
          </div>

          <div className="grid gap-4">
            {blocks.map((block) => (
              <div
                key={block.type}
                className="bg-gray-900/50 border border-gray-800 hover:border-gray-700 rounded-xl p-5 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xs font-bold uppercase">
                      {block.type.slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{block.label}</h3>
                      <p className="text-xs text-gray-600">
                        {block.type} · {block.category} ·{" "}
                        {block.templates.length} templates
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/test/${block.type}`}
                    className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    View All Stacked →
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {block.templates.map((t) => (
                    <Link
                      key={t.id}
                      href={`/test/${block.type}/${t.id}`}
                      className="text-sm bg-gray-800 hover:bg-emerald-600 px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
                    >
                      <span className="text-gray-400">{t.id}</span>
                      <span className="text-gray-600">—</span>
                      <span>{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          Total: {blocks.length} blocks · {totalRegistry} registry templates ·{" "}
          {totalExperimental} experimental templates ·{" "}
          {totalRegistry + totalExperimental} total
        </div>
      </div>
    </div>
  );
}
