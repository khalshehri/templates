"use client";

import { useState } from "react";
import {
  LayoutTemplate,
  Navigation,
  Info,
  Layers,
  Star,
  BarChart3,
  MessageSquare,
  Users,
  CreditCard,
  HelpCircle,
  MousePointerClick,
  Handshake,
  Mail,
  PanelBottom,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

/* ── Component types with icons ────────────────────────────── */
const COMPONENTS = [
  { id: "hero", label: "Hero", icon: LayoutTemplate, color: "blue" },
  { id: "navbar", label: "Navbar", icon: Navigation, color: "cyan" },
  { id: "about", label: "About", icon: Info, color: "violet" },
  { id: "services", label: "Services", icon: Layers, color: "emerald" },
  { id: "features", label: "Features", icon: Star, color: "amber" },
  { id: "stats", label: "Stats", icon: BarChart3, color: "pink" },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare, color: "orange" },
  { id: "team", label: "Team", icon: Users, color: "teal" },
  { id: "pricing", label: "Pricing", icon: CreditCard, color: "violet" },
  { id: "faq", label: "FAQ", icon: HelpCircle, color: "amber" },
  { id: "cta", label: "CTA", icon: MousePointerClick, color: "red" },
  { id: "clients", label: "Clients", icon: Handshake, color: "blue" },
  { id: "contact", label: "Contact", icon: Mail, color: "emerald" },
  { id: "footer", label: "Footer", icon: PanelBottom, color: "gray" },
] as const;

/* ── Categories ────────────────────────────────────────────── */
const CATEGORIES = [
  { id: "company", label: "Company", color: "blue" },
  { id: "agency", label: "Agency", color: "pink" },
  { id: "freelancer", label: "Freelancer", color: "cyan" },
  { id: "resume", label: "Resume / CV", color: "violet" },
  { id: "restaurant", label: "Restaurant", color: "orange" },
  { id: "clinic", label: "Clinic", color: "emerald" },
  { id: "real-estate", label: "Real Estate", color: "amber" },
  { id: "saas", label: "SaaS", color: "violet" },
  { id: "ecommerce", label: "E-commerce", color: "emerald" },
  { id: "event", label: "Event", color: "red" },
  { id: "photography", label: "Photography", color: "pink" },
  { id: "law-firm", label: "Law Firm", color: "amber" },
  { id: "gym", label: "Gym / Fitness", color: "red" },
  { id: "education", label: "Education", color: "emerald" },
  { id: "personal", label: "Personal", color: "cyan" },
  { id: "corporate", label: "Corporate", color: "blue" },
  { id: "creative", label: "Creative", color: "pink" },
  { id: "service", label: "Service", color: "orange" },
  { id: "luxury", label: "Luxury", color: "amber" },
] as const;

/* ── Known templates registry (add here as you build them) ── */
const TEMPLATES: Record<string, Record<string, { id: string; name: string }[]>> = {
  hero: {
    company: [
      { id: "hero-01", name: "Ink & Light (Editorial Split)" },
      { id: "hero-02", name: "Neon Pulse (OLED Cyber)" },
      { id: "hero-03", name: "Diagonal Cut (Geometric Split)" },
      { id: "hero-04", name: "Marquee Energy (Kinetic Dark)" },
      { id: "hero-05", name: "Floating Deck (Product Card)" },
      { id: "hero-06", name: "Grid Mosaic (Bento Layout)" },
      { id: "hero-07", name: "Golden Gate (Dark Luxury)" },
      { id: "hero-08", name: "Horizon Line (Warm Minimal)" },
      { id: "hero-09", name: "Command Center (Terminal HUD)" },
      { id: "hero-10", name: "Paper Fold (Layered Depth)" },
    ],
  },
};

/* ── Color utilities ───────────────────────────────────────── */
const borderColors: Record<string, string> = {
  blue: "border-blue-500/20 hover:border-blue-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  violet: "border-violet-500/20 hover:border-violet-500/40",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40",
  amber: "border-amber-500/20 hover:border-amber-500/40",
  pink: "border-pink-500/20 hover:border-pink-500/40",
  orange: "border-orange-500/20 hover:border-orange-500/40",
  teal: "border-teal-500/20 hover:border-teal-500/40",
  red: "border-red-500/20 hover:border-red-500/40",
  gray: "border-gray-500/20 hover:border-gray-500/40",
};

const dotColors: Record<string, string> = {
  blue: "bg-blue-500", cyan: "bg-cyan-500", violet: "bg-violet-500",
  emerald: "bg-emerald-500", amber: "bg-amber-500", pink: "bg-pink-500",
  orange: "bg-orange-500", teal: "bg-teal-500", red: "bg-red-500",
  gray: "bg-gray-500",
};

const bgActive: Record<string, string> = {
  blue: "bg-blue-500/10", cyan: "bg-cyan-500/10", violet: "bg-violet-500/10",
  emerald: "bg-emerald-500/10", amber: "bg-amber-500/10", pink: "bg-pink-500/10",
  orange: "bg-orange-500/10", teal: "bg-teal-500/10", red: "bg-red-500/10",
  gray: "bg-gray-500/10",
};

const iconBg: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-400", cyan: "bg-cyan-500/15 text-cyan-400",
  violet: "bg-violet-500/15 text-violet-400", emerald: "bg-emerald-500/15 text-emerald-400",
  amber: "bg-amber-500/15 text-amber-400", pink: "bg-pink-500/15 text-pink-400",
  orange: "bg-orange-500/15 text-orange-400", teal: "bg-teal-500/15 text-teal-400",
  red: "bg-red-500/15 text-red-400", gray: "bg-gray-500/15 text-gray-400",
};

const tagHover: Record<string, string> = {
  blue: "hover:bg-blue-600", cyan: "hover:bg-cyan-600", violet: "hover:bg-violet-600",
  emerald: "hover:bg-emerald-600", amber: "hover:bg-amber-600", pink: "hover:bg-pink-600",
  orange: "hover:bg-orange-600", teal: "hover:bg-teal-600", red: "hover:bg-red-600",
  gray: "hover:bg-gray-600",
};

/* ── Page ──────────────────────────────────────────────────── */
export default function DemoIndexPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const totalTemplates = Object.values(TEMPLATES).reduce(
    (sum, cats) => sum + Object.values(cats).reduce((s, t) => s + t.length, 0), 0
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Demo Lab</h1>
          <p className="text-gray-500 text-sm mt-1">
            Click a component to view categories and templates. Templates open in a new tab.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            {COMPONENTS.length} components · {CATEGORIES.length} categories · {totalTemplates} templates built
          </p>
        </div>
      </div>

      {/* Component list */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-3">
        {COMPONENTS.map((comp) => {
          const Icon = comp.icon;
          const isOpen = expanded === comp.id;
          const templates = TEMPLATES[comp.id] || {};
          const templateCount = Object.values(templates).reduce((s, t) => s + t.length, 0);
          const categoryCount = Object.keys(templates).length;

          return (
            <div
              key={comp.id}
              className={`rounded-xl border overflow-hidden transition-colors ${borderColors[comp.color]}`}
            >
              {/* Accordion header */}
              <button
                onClick={() => toggle(comp.id)}
                className={`w-full flex items-center gap-4 p-5 text-left transition-colors ${
                  isOpen ? bgActive[comp.color] : "bg-gray-900/50 hover:bg-gray-900"
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBg[comp.color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-lg">{comp.label}</h2>
                  <p className="text-xs text-gray-500">
                    {templateCount > 0
                      ? `${categoryCount} ${categoryCount === 1 ? "category" : "categories"} · ${templateCount} ${templateCount === 1 ? "template" : "templates"}`
                      : "No templates yet"
                    }
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Expanded content — categories with templates */}
              {isOpen && (
                <div className="border-t border-white/[0.06] bg-gray-950/50 p-5">
                  {templateCount === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600 text-sm">No templates built yet for {comp.label}.</p>
                      <p className="text-gray-700 text-xs mt-1">
                        Templates will appear here as they are created in{" "}
                        <code className="text-gray-500">demo/[category]/{comp.id}/</code>
                      </p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {CATEGORIES.map((cat) => {
                        const catTemplates = templates[cat.id];
                        if (!catTemplates || catTemplates.length === 0) return null;

                        return (
                          <div
                            key={cat.id}
                            className={`border rounded-xl overflow-hidden ${borderColors[cat.color]}`}
                          >
                            {/* Category header */}
                            <div className="flex items-center gap-3 p-3">
                              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColors[cat.color]}`} />
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold text-sm">{cat.label}</span>
                                <span className="text-xs text-gray-600 ml-2">{catTemplates.length}</span>
                              </div>
                            </div>

                            {/* Template links — open in new tab */}
                            <div className="px-3 pb-3 flex flex-wrap gap-1.5">
                              {catTemplates.map((tmpl) => (
                                <a
                                  key={tmpl.id}
                                  href={`/demo/${cat.id}/${comp.id}/${tmpl.id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`group inline-flex items-center gap-1.5 text-xs bg-gray-800 ${tagHover[cat.color]} px-2.5 py-1.5 rounded transition-colors`}
                                >
                                  {tmpl.name}
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          {COMPONENTS.length} components · {CATEGORIES.length} categories · {totalTemplates} templates
        </div>
      </div>
    </div>
  );
}
