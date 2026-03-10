"use client";

import { useState } from "react";
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
      { id: "corporate-grid", name: "Corporate Grid" },
      { id: "corporate-horizon", name: "Corporate Horizon" },
      { id: "corporate-lens", name: "Corporate Lens" },
      { id: "corporate-pillars", name: "Corporate Pillars" },
      { id: "corporate-shield", name: "Corporate Shield" },
      { id: "corporate-stairs", name: "Corporate Stairs" },
      { id: "corporate-wave", name: "Corporate Wave" },
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
      { id: "creative-collage", name: "Creative Collage" },
      { id: "creative-drip", name: "Creative Drip" },
      { id: "creative-grid-break", name: "Grid Break" },
      { id: "creative-neon", name: "Creative Neon" },
      { id: "creative-stack", name: "Creative Stack" },
      { id: "creative-torn", name: "Creative Torn" },
      { id: "creative-wave", name: "Creative Wave" },
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
      { id: "saas-dashboard", name: "Dashboard" },
      { id: "saas-api", name: "API Gateway" },
      { id: "saas-cloud", name: "Cloud Platform" },
      { id: "saas-integration", name: "Integration Hub" },
      { id: "saas-metrics", name: "SaaS Metrics" },
      { id: "saas-pipeline", name: "Data Pipeline" },
      { id: "saas-pricing", name: "Pricing Table" },
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
      { id: "service-checklist", name: "Service Checklist" },
      { id: "service-clock", name: "Service Clock" },
      { id: "service-counter", name: "Service Counter" },
      { id: "service-map-pin", name: "Map Pin" },
      { id: "service-phone", name: "Service Phone" },
      { id: "service-ribbon", name: "Service Ribbon" },
      { id: "service-testimonial", name: "Testimonial" },
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
      { id: "ecom-cart", name: "Shopping Cart" },
      { id: "ecom-bag", name: "Shopping Bag" },
      { id: "ecom-carousel", name: "Product Carousel" },
      { id: "ecom-flash", name: "Flash Sale" },
      { id: "ecom-rack", name: "Product Rack" },
      { id: "ecom-search", name: "Product Search" },
      { id: "ecom-tag", name: "Price Tag" },
    ],
  },
  {
    id: "event",
    name: "Event & Launch",
    color: "red",
    description: "Excitement, urgency, time-bound",
    templates: [
      { id: "event-countdown", name: "The Big Day" },
      { id: "event-stage", name: "Event Stage" },
      { id: "event-speakers", name: "Speaker Spotlight" },
      { id: "fireworks", name: "Fireworks" },
      { id: "event-badge", name: "Event Badge" },
      { id: "event-banner", name: "Event Banner" },
      { id: "event-confetti", name: "Event Confetti" },
      { id: "event-mic", name: "Event Mic" },
      { id: "event-schedule", name: "Event Schedule" },
      { id: "event-ticket", name: "Event Ticket" },
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
      { id: "luxury-columns", name: "Luxury Columns" },
      { id: "luxury-diamond", name: "Luxury Diamond" },
      { id: "luxury-frame", name: "Luxury Frame" },
      { id: "luxury-monogram", name: "Luxury Monogram" },
      { id: "luxury-noir", name: "Luxury Noir" },
      { id: "luxury-silk", name: "Luxury Silk" },
      { id: "luxury-veil", name: "Luxury Veil" },
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
      { id: "personal-card-flip", name: "Card Flip" },
      { id: "personal-desk", name: "Personal Desk" },
      { id: "personal-handwave", name: "Hand Wave" },
      { id: "personal-pixel", name: "Pixel Avatar" },
      { id: "personal-social", name: "Social Links" },
      { id: "personal-spotlight", name: "Spotlight" },
      { id: "personal-timeline", name: "Timeline" },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant & Food",
    color: "orange",
    description: "Appetizing, warm, sensory",
    templates: [
      { id: "kitchen-flame", name: "Kitchen Flame" },
      { id: "restaurant-chef", name: "Chef's Table" },
      { id: "restaurant-garden", name: "Garden Dining" },
      { id: "restaurant-menu", name: "Restaurant Menu" },
      { id: "restaurant-oven", name: "Brick Oven" },
      { id: "restaurant-plate", name: "Restaurant Plate" },
      { id: "restaurant-spice", name: "Spice Rack" },
      { id: "restaurant-sushi", name: "Sushi Bar" },
      { id: "restaurant-table", name: "Restaurant Table" },
      { id: "restaurant-wine", name: "Wine Cellar" },
    ],
  },
  {
    id: "education",
    name: "Education & Academy",
    color: "emerald",
    description: "Inspiring, structured, knowledge-driven",
    templates: [
      { id: "chalkboard", name: "Chalkboard" },
      { id: "education-globe", name: "Education Globe" },
      { id: "education-lab", name: "Science Lab" },
      { id: "education-library", name: "Library" },
      { id: "education-lighthouse", name: "Lighthouse" },
      { id: "education-notebook", name: "Notebook" },
      { id: "education-podium", name: "Podium" },
      { id: "education-puzzle", name: "Puzzle" },
      { id: "education-steps", name: "Steps" },
      { id: "education-tree", name: "Knowledge Tree" },
    ],
  },
  {
    id: "company",
    name: "Company",
    color: "blue",
    description: "Professional, trustworthy, corporate",
    templates: [
      { id: "company-skyline", name: "City Skyline" },
      { id: "company-tower", name: "Glass Tower" },
      { id: "company-globe", name: "Global Network" },
      { id: "company-metrics", name: "Business Metrics" },
      { id: "company-timeline", name: "Milestone Timeline" },
      { id: "company-network", name: "Office Network" },
      { id: "company-growth", name: "Growth Chart" },
      { id: "company-handshake", name: "Handshake" },
      { id: "company-headquarters", name: "Headquarters" },
      { id: "company-shield", name: "Company Shield" },
    ],
  },
  {
    id: "agency",
    name: "Creative Agency",
    color: "pink",
    description: "Bold, artistic, expressive",
    templates: [
      { id: "agency-palette", name: "Paint Palette" },
      { id: "agency-canvas", name: "Living Canvas" },
      { id: "agency-collage", name: "Mixed Media Collage" },
      { id: "agency-drip", name: "Paint Drip" },
      { id: "agency-film", name: "Film Strip" },
      { id: "agency-mosaic", name: "Mosaic" },
      { id: "agency-neon", name: "Neon Sign" },
      { id: "agency-scissors", name: "Scissors Cut" },
      { id: "agency-spray", name: "Spray Paint" },
      { id: "agency-studio", name: "Studio" },
    ],
  },
  {
    id: "freelancer",
    name: "Freelancer",
    color: "cyan",
    description: "Personal, authentic, skill-focused",
    templates: [
      { id: "freelancer-desk", name: "Freelancer Desk" },
      { id: "freelancer-coffee", name: "Coffee Break" },
      { id: "freelancer-notebook", name: "Notebook" },
      { id: "freelancer-badge", name: "ID Badge" },
      { id: "freelancer-tools", name: "Tool Belt" },
      { id: "freelancer-calendar", name: "Calendar" },
      { id: "freelancer-code", name: "Code Editor" },
      { id: "freelancer-connect", name: "Connect" },
      { id: "freelancer-quotes", name: "Client Quotes" },
      { id: "freelancer-workspace", name: "Workspace" },
    ],
  },
  {
    id: "resume",
    name: "Resume / CV",
    color: "violet",
    description: "Professional, personal, creative",
    templates: [
      { id: "resume-paper", name: "Floating Paper" },
      { id: "resume-timeline", name: "Career Timeline" },
      { id: "resume-blueprint", name: "Blueprint" },
      { id: "resume-book", name: "Open Book" },
      { id: "resume-card", name: "Business Card" },
      { id: "resume-dashboard", name: "Dashboard" },
      { id: "resume-mosaic", name: "Skill Mosaic" },
      { id: "resume-scroll", name: "Scroll" },
      { id: "resume-spotlight", name: "Spotlight" },
      { id: "resume-terminal", name: "Terminal" },
    ],
  },
  {
    id: "clinic",
    name: "Medical Clinic",
    color: "emerald",
    description: "Clean, trustworthy, caring",
    templates: [
      { id: "clinic-pulse", name: "Pulse Monitor" },
      { id: "clinic-dna", name: "DNA Helix" },
      { id: "clinic-shield", name: "Health Shield" },
      { id: "clinic-molecule", name: "Molecule" },
      { id: "clinic-cross", name: "Medical Cross" },
      { id: "clinic-wave", name: "Healing Wave" },
      { id: "clinic-care", name: "Patient Care" },
      { id: "clinic-cells", name: "Cell Structure" },
      { id: "clinic-clean", name: "Clean Room" },
      { id: "clinic-stethoscope", name: "Stethoscope" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    color: "amber",
    description: "Premium, aspirational, location-focused",
    templates: [
      { id: "realestate-skyline", name: "Skyline" },
      { id: "realestate-key", name: "Golden Key" },
      { id: "realestate-floor", name: "Floor Plan" },
      { id: "realestate-door", name: "Open Door" },
      { id: "realestate-compass", name: "Compass" },
      { id: "realestate-blueprint", name: "Blueprint" },
      { id: "realestate-building", name: "Building Rise" },
      { id: "realestate-garden", name: "Garden View" },
      { id: "realestate-interior", name: "Interior" },
      { id: "realestate-window", name: "Window View" },
    ],
  },
  {
    id: "photography",
    name: "Photography",
    color: "pink",
    description: "Visual, artistic, portfolio-driven",
    templates: [
      { id: "photo-shutter", name: "Shutter Click" },
      { id: "photo-polaroid", name: "Polaroid" },
      { id: "photo-aperture", name: "Aperture" },
      { id: "photo-contact", name: "Contact Sheet" },
      { id: "photo-darkroom", name: "Darkroom" },
      { id: "photo-exposure", name: "Exposure" },
      { id: "photo-film", name: "Film Roll" },
      { id: "photo-gallery", name: "Gallery Wall" },
      { id: "photo-lightbox", name: "Lightbox" },
      { id: "photo-viewfinder", name: "Viewfinder" },
    ],
  },
  {
    id: "law-firm",
    name: "Law Firm",
    color: "amber",
    description: "Authoritative, trustworthy, prestigious",
    templates: [
      { id: "law-gavel", name: "Gavel" },
      { id: "law-library", name: "Law Library" },
      { id: "law-column", name: "Greek Column" },
      { id: "law-document", name: "Legal Document" },
      { id: "law-brief", name: "Legal Brief" },
      { id: "law-curtain", name: "Court Curtain" },
      { id: "law-emblem", name: "Law Emblem" },
      { id: "law-ink", name: "Ink & Quill" },
      { id: "law-scales", name: "Scales of Justice" },
      { id: "law-shield", name: "Law Shield" },
    ],
  },
  {
    id: "gym",
    name: "Gym / Fitness",
    color: "red",
    description: "Energetic, powerful, motivating",
    templates: [
      { id: "gym-pulse", name: "Heart Rate" },
      { id: "gym-weights", name: "Barbell" },
      { id: "gym-energy", name: "Energy Burst" },
      { id: "gym-champion", name: "Champion Podium" },
      { id: "gym-flame", name: "Calorie Flame" },
      { id: "gym-power", name: "Power Meter" },
      { id: "gym-rings", name: "Olympic Rings" },
      { id: "gym-stats", name: "Fitness Stats" },
      { id: "gym-timer", name: "Workout Timer" },
      { id: "gym-track", name: "Running Track" },
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

/* ── Component type icons ─────────────────────────────────────── */
const componentIcons: Record<string, string> = {
  navbar: "Na", hero: "He", about: "Ab", services: "Sv",
  features: "Fe", testimonials: "Te", clients: "Cl", stats: "St",
  team: "Tm", pricing: "Pr", cta: "Ct", faq: "Fq",
  contact: "Co", footer: "Fo",
};

const componentColors: Record<string, { bg: string; text: string; border: string }> = {
  navbar:       { bg: "bg-blue-500/10",    text: "text-blue-400",    border: "border-blue-500/30 hover:border-blue-500/60" },
  hero:         { bg: "bg-purple-500/10",  text: "text-purple-400",  border: "border-purple-500/30 hover:border-purple-500/60" },
  about:        { bg: "bg-cyan-500/10",    text: "text-cyan-400",    border: "border-cyan-500/30 hover:border-cyan-500/60" },
  services:     { bg: "bg-orange-500/10",  text: "text-orange-400",  border: "border-orange-500/30 hover:border-orange-500/60" },
  features:     { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30 hover:border-emerald-500/60" },
  testimonials: { bg: "bg-pink-500/10",    text: "text-pink-400",    border: "border-pink-500/30 hover:border-pink-500/60" },
  clients:      { bg: "bg-amber-500/10",   text: "text-amber-400",   border: "border-amber-500/30 hover:border-amber-500/60" },
  stats:        { bg: "bg-violet-500/10",  text: "text-violet-400",  border: "border-violet-500/30 hover:border-violet-500/60" },
  team:         { bg: "bg-teal-500/10",    text: "text-teal-400",    border: "border-teal-500/30 hover:border-teal-500/60" },
  pricing:      { bg: "bg-green-500/10",   text: "text-green-400",   border: "border-green-500/30 hover:border-green-500/60" },
  cta:          { bg: "bg-red-500/10",     text: "text-red-400",     border: "border-red-500/30 hover:border-red-500/60" },
  faq:          { bg: "bg-sky-500/10",     text: "text-sky-400",     border: "border-sky-500/30 hover:border-sky-500/60" },
  contact:      { bg: "bg-indigo-500/10",  text: "text-indigo-400",  border: "border-indigo-500/30 hover:border-indigo-500/60" },
  footer:       { bg: "bg-gray-500/10",    text: "text-gray-400",    border: "border-gray-500/30 hover:border-gray-500/60" },
};

/* ── Page ─────────────────────────────────────────────────────── */
export default function TestIndexPage() {
  const blocks = getAllBlocks();
  const totalRegistry = blocks.reduce((sum, b) => sum + b.templates.length, 0);
  const totalExperimental = heroCategories.reduce((s, c) => s + c.templates.length, 0) + creativeOriginals.length + standaloneExperiments.length;

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [expandedHero, setExpandedHero] = useState(false);

  // Find the selected block
  const selectedBlock = selectedComponent ? blocks.find(b => b.type === selectedComponent) : null;

  // Check if hero experimental is selected
  const isHeroExperimental = selectedComponent === "hero-experimental";

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Component Test Lab</h1>
          <p className="text-gray-500 text-sm mt-1">
            Preview and test all block templates in isolation.
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-600">
            <span>{blocks.length} component types</span>
            <span>·</span>
            <span>{totalRegistry} registry templates</span>
            <span>·</span>
            <span>{totalExperimental} experimental hero templates</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* ═══ Component Type Selector ═══ */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-2 mb-8">
          {blocks.map((block) => {
            const colors = componentColors[block.type] || componentColors.footer;
            const isActive = selectedComponent === block.type;
            return (
              <button
                key={block.type}
                onClick={() => setSelectedComponent(isActive ? null : block.type)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                  isActive
                    ? `${colors.border.split(" ")[0]} bg-white/5 ring-1 ring-white/10`
                    : "border-gray-800 hover:border-gray-700 hover:bg-white/[0.02]"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text} text-sm font-bold`}>
                  {componentIcons[block.type] || block.type.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-medium capitalize">{block.label}</span>
                <span className="text-[10px] text-gray-600">{block.templates.length} tmpl</span>
              </button>
            );
          })}

          {/* Hero Experimental button */}
          <button
            onClick={() => {
              setSelectedComponent(isHeroExperimental ? null : "hero-experimental");
              if (!isHeroExperimental) setExpandedHero(true);
            }}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
              isHeroExperimental
                ? "border-indigo-500/50 bg-white/5 ring-1 ring-indigo-500/20"
                : "border-gray-800 hover:border-gray-700 hover:bg-white/[0.02]"
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">
              Ex
            </div>
            <span className="text-xs font-medium">Experimental</span>
            <span className="text-[10px] text-gray-600">{heroCategories.length} cats</span>
          </button>
        </div>

        {/* ═══ Content Area — shows based on selection ═══ */}

        {/* No selection — show overview */}
        {!selectedComponent && (
          <div className="text-center py-20 text-gray-600">
            <p className="text-lg">Select a component type above to view its templates</p>
            <p className="text-sm mt-2">{blocks.length} components · {totalRegistry + totalExperimental} total templates</p>
          </div>
        )}

        {/* Registry block selected — show its templates */}
        {selectedBlock && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${(componentColors[selectedBlock.type] || componentColors.footer).bg} flex items-center justify-center ${(componentColors[selectedBlock.type] || componentColors.footer).text} text-sm font-bold`}>
                  {componentIcons[selectedBlock.type] || selectedBlock.type.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{selectedBlock.label}</h2>
                  <p className="text-xs text-gray-500">{selectedBlock.type} · {selectedBlock.category} · {selectedBlock.templates.length} templates</p>
                </div>
              </div>
              <Link
                href={`/test/${selectedBlock.type}`}
                className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                View All Stacked →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedBlock.templates.map((t) => (
                <Link
                  key={t.id}
                  href={`/test/${selectedBlock.type}/${t.id}`}
                  className={`bg-gray-900/50 border ${(componentColors[selectedBlock.type] || componentColors.footer).border} rounded-xl p-4 transition-colors`}
                >
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{t.id}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Hero Experimental selected — show categories */}
        {isHeroExperimental && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">
                  Ex
                </div>
                <div>
                  <h2 className="text-xl font-bold">Experimental Hero Templates</h2>
                  <p className="text-xs text-gray-500">{heroCategories.length} categories · {heroCategories.reduce((s, c) => s + c.templates.length, 0)} templates</p>
                </div>
              </div>
              <button
                onClick={() => setExpandedHero(!expandedHero)}
                className="text-sm bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors font-medium"
              >
                {expandedHero ? "Grid View" : "Show All Templates"}
              </button>
            </div>

            {/* Category Grid */}
            <div className={`grid gap-3 ${expandedHero ? "" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
              {heroCategories.map((cat) => (
                <div
                  key={cat.id}
                  className={`bg-gray-900/50 border rounded-xl transition-colors ${borderColor[cat.color]}`}
                >
                  <Link
                    href={`/test/home/${cat.id}`}
                    className="flex items-center gap-3 p-4 hover:bg-white/[0.02] rounded-t-xl transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full ${dotColor[cat.color]}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{cat.name}</h3>
                        <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">{cat.templates.length}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{cat.description}</p>
                    </div>
                    <span className="text-gray-600 text-xs shrink-0">View →</span>
                  </Link>

                  {expandedHero && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-800/50">
                      <div className="flex flex-wrap gap-2">
                        {cat.templates.map((t) => (
                          <Link
                            key={t.id}
                            href={`/test/home/${cat.id}/${t.id}`}
                            className={`text-sm bg-gray-800 ${linkColor[cat.color]} px-3 py-1.5 rounded-md transition-colors`}
                          >
                            {t.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Creative Originals */}
              <div className="bg-gray-900/50 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-colors">
                <Link
                  href="/test/home"
                  className="flex items-center gap-3 p-4 hover:bg-white/[0.02] rounded-t-xl transition-colors"
                >
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">Creative Originals</h3>
                      <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">{creativeOriginals.length}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">Novel visual concepts</p>
                  </div>
                  <span className="text-gray-600 text-xs shrink-0">View →</span>
                </Link>
                {expandedHero && (
                  <div className="px-4 pb-4 pt-1 border-t border-gray-800/50">
                    <div className="flex flex-wrap gap-2">
                      {creativeOriginals.map((t) => (
                        <Link
                          key={t.id}
                          href={`/test/home/${t.id}`}
                          className="text-sm bg-gray-800 hover:bg-purple-600 px-3 py-1.5 rounded-md transition-colors"
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Standalone */}
              {standaloneExperiments.map((t) => (
                <Link
                  key={t.id}
                  href={`/test/home/${t.id}`}
                  className="bg-gray-900/50 border border-gray-800 hover:border-gray-600 rounded-xl p-4 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                    <h3 className="font-semibold text-sm">{t.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{t.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          {blocks.length} components · {totalRegistry} registry templates · {totalExperimental} experimental · {totalRegistry + totalExperimental} total
        </div>
      </div>
    </div>
  );
}
