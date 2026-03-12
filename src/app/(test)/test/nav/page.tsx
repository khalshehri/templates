"use client";

import Link from "next/link";

const categories = [
  {
    id: "corporate",
    name: "Corporate & Trust",
    color: "blue",
    count: 10,
    description: "Professional, stable, trustworthy. For companies, enterprises, consulting firms, banks.",
    templates: ["nav-corp-classic", "nav-corp-glass", "nav-corp-dark", "nav-corp-split", "nav-corp-minimal", "nav-corp-mega", "nav-corp-topbar", "nav-corp-sidebar", "nav-corp-centered", "nav-corp-ribbon"],
  },
  {
    id: "creative",
    name: "Creative & Bold",
    color: "pink",
    count: 10,
    description: "Expressive, experimental, rule-breaking. For design agencies, branding studios, artists.",
    templates: ["nav-creative-paint", "nav-creative-neon", "nav-creative-torn", "nav-creative-gradient", "nav-creative-sticker", "nav-creative-brush", "nav-creative-collage", "nav-creative-retro", "nav-creative-bold", "nav-creative-wave"],
  },
  {
    id: "saas",
    name: "SaaS & Product",
    color: "violet",
    count: 10,
    description: "Modern, technical, product-forward. For software products, AI tools, dev tools, APIs.",
    templates: ["nav-saas-modern", "nav-saas-terminal", "nav-saas-dark", "nav-saas-glass", "nav-saas-gradient", "nav-saas-command", "nav-saas-product", "nav-saas-api", "nav-saas-dashboard", "nav-saas-minimal"],
  },
  {
    id: "service",
    name: "Service & Local",
    color: "orange",
    count: 10,
    description: "Warm, approachable, action-oriented. For clinics, salons, restaurants, local services.",
    templates: ["nav-service-warm", "nav-service-booking", "nav-service-local", "nav-service-clean", "nav-service-card", "nav-service-friendly", "nav-service-phone", "nav-service-hours", "nav-service-map", "nav-service-trust"],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Conversion",
    color: "emerald",
    count: 10,
    description: "High-conversion, product-focused. For online stores, product launches, fashion brands.",
    templates: ["nav-ecom-shop", "nav-ecom-mega", "nav-ecom-minimal", "nav-ecom-search", "nav-ecom-promo", "nav-ecom-dark", "nav-ecom-category", "nav-ecom-brand", "nav-ecom-sale", "nav-ecom-sticky"],
  },
  {
    id: "event",
    name: "Event & Launch",
    color: "red",
    count: 10,
    description: "Excitement, urgency, time-bound. For conferences, webinars, product launches.",
    templates: ["nav-event-countdown", "nav-event-ticket", "nav-event-festive", "nav-event-dark", "nav-event-badge", "nav-event-stage", "nav-event-schedule", "nav-event-live", "nav-event-speaker", "nav-event-neon"],
  },
  {
    id: "luxury",
    name: "Luxury & Premium",
    color: "amber",
    count: 10,
    description: "Elegant, minimal, exclusive. For high-end brands, jewelry, hotels, fashion houses.",
    templates: ["nav-luxury-minimal", "nav-luxury-gold", "nav-luxury-editorial", "nav-luxury-serif", "nav-luxury-noir", "nav-luxury-marble", "nav-luxury-silk", "nav-luxury-monogram", "nav-luxury-curtain", "nav-luxury-diamond"],
  },
  {
    id: "personal",
    name: "Personal & Freelancer",
    color: "cyan",
    count: 10,
    description: "Human, authentic, personality-driven. For freelancers, consultants, personal brands.",
    templates: ["nav-personal-hello", "nav-personal-photo", "nav-personal-social", "nav-personal-minimal", "nav-personal-card", "nav-personal-blog", "nav-personal-stack", "nav-personal-handwrite", "nav-personal-gradient", "nav-personal-dot"],
  },
  {
    id: "restaurant",
    name: "Restaurant & Food",
    color: "orange",
    count: 10,
    description: "Appetizing, warm, sensory. For restaurants, cafes, food businesses.",
    templates: ["nav-restaurant-menu", "nav-restaurant-chef", "nav-restaurant-elegant", "nav-restaurant-rustic", "nav-restaurant-modern", "nav-restaurant-sushi", "nav-restaurant-pizza", "nav-restaurant-cafe", "nav-restaurant-bar", "nav-restaurant-reserve"],
  },
  {
    id: "education",
    name: "Education & Academy",
    color: "emerald",
    count: 10,
    description: "Inspiring, structured, knowledge-driven. For schools, universities, online learning.",
    templates: ["nav-edu-classic", "nav-edu-modern", "nav-edu-book", "nav-edu-chalk", "nav-edu-campus", "nav-edu-course", "nav-edu-bright", "nav-edu-lab", "nav-edu-library", "nav-edu-minimal"],
  },
  {
    id: "company",
    name: "Company",
    color: "blue",
    count: 10,
    description: "Professional, trustworthy, corporate. For established companies and organizations.",
    templates: ["nav-company-corporate", "nav-company-glass", "nav-company-dark", "nav-company-split", "nav-company-mega", "nav-company-topbar", "nav-company-centered", "nav-company-sidebar", "nav-company-modern", "nav-company-bold"],
  },
  {
    id: "agency",
    name: "Creative Agency",
    color: "pink",
    count: 10,
    description: "Bold, artistic, expressive. For creative and digital agencies.",
    templates: ["nav-agency-creative", "nav-agency-neon", "nav-agency-film", "nav-agency-grid", "nav-agency-paint", "nav-agency-minimal", "nav-agency-bold", "nav-agency-dark", "nav-agency-color", "nav-agency-studio"],
  },
  {
    id: "freelancer",
    name: "Freelancer",
    color: "cyan",
    count: 10,
    description: "Personal, authentic, skill-focused. For independent professionals.",
    templates: ["nav-freelancer-simple", "nav-freelancer-code", "nav-freelancer-coffee", "nav-freelancer-desk", "nav-freelancer-badge", "nav-freelancer-tools", "nav-freelancer-calendar", "nav-freelancer-connect", "nav-freelancer-portfolio", "nav-freelancer-quotes"],
  },
  {
    id: "resume",
    name: "Resume / CV",
    color: "violet",
    count: 10,
    description: "Professional, personal, creative. For CV and portfolio sites.",
    templates: ["nav-resume-paper", "nav-resume-timeline", "nav-resume-tab", "nav-resume-minimal", "nav-resume-card", "nav-resume-dashboard", "nav-resume-terminal", "nav-resume-scroll", "nav-resume-blueprint", "nav-resume-spotlight"],
  },
  {
    id: "clinic",
    name: "Medical Clinic",
    color: "emerald",
    count: 10,
    description: "Clean, trustworthy, caring. For healthcare and medical practices.",
    templates: ["nav-clinic-clean", "nav-clinic-pulse", "nav-clinic-trust", "nav-clinic-booking", "nav-clinic-emergency", "nav-clinic-modern", "nav-clinic-care", "nav-clinic-dna", "nav-clinic-shield", "nav-clinic-green"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    color: "amber",
    count: 10,
    description: "Premium, aspirational, location-focused. For property and real estate.",
    templates: ["nav-realestate-luxury", "nav-realestate-search", "nav-realestate-modern", "nav-realestate-dark", "nav-realestate-gold", "nav-realestate-map", "nav-realestate-key", "nav-realestate-glass", "nav-realestate-building", "nav-realestate-compass"],
  },
  {
    id: "photography",
    name: "Photography",
    color: "pink",
    count: 10,
    description: "Visual, artistic, portfolio-driven. For photographers and visual artists.",
    templates: ["nav-photo-gallery", "nav-photo-dark", "nav-photo-minimal", "nav-photo-film", "nav-photo-aperture", "nav-photo-lightbox", "nav-photo-viewfinder", "nav-photo-polaroid", "nav-photo-exposure", "nav-photo-lens"],
  },
  {
    id: "law-firm",
    name: "Law Firm",
    color: "amber",
    count: 10,
    description: "Authoritative, trustworthy, prestigious. For legal practices.",
    templates: ["nav-law-classic", "nav-law-column", "nav-law-scales", "nav-law-dark", "nav-law-gold", "nav-law-library", "nav-law-document", "nav-law-emblem", "nav-law-marble", "nav-law-gavel"],
  },
  {
    id: "gym",
    name: "Gym / Fitness",
    color: "red",
    count: 10,
    description: "Energetic, powerful, motivating. For gyms and fitness centers.",
    templates: ["nav-gym-energy", "nav-gym-dark", "nav-gym-pulse", "nav-gym-power", "nav-gym-neon", "nav-gym-track", "nav-gym-flame", "nav-gym-steel", "nav-gym-timer", "nav-gym-champion"],
  },
];

const colorMap: Record<string, { border: string; dot: string; link: string }> = {
  blue: { border: "border-blue-500/20 hover:border-blue-500/50", dot: "bg-blue-500", link: "hover:bg-blue-600" },
  pink: { border: "border-pink-500/20 hover:border-pink-500/50", dot: "bg-pink-500", link: "hover:bg-pink-600" },
  violet: { border: "border-violet-500/20 hover:border-violet-500/50", dot: "bg-violet-500", link: "hover:bg-violet-600" },
  orange: { border: "border-orange-500/20 hover:border-orange-500/50", dot: "bg-orange-500", link: "hover:bg-orange-600" },
  emerald: { border: "border-emerald-500/20 hover:border-emerald-500/50", dot: "bg-emerald-500", link: "hover:bg-emerald-600" },
  red: { border: "border-red-500/20 hover:border-red-500/50", dot: "bg-red-500", link: "hover:bg-red-600" },
  amber: { border: "border-amber-500/20 hover:border-amber-500/50", dot: "bg-amber-500", link: "hover:bg-amber-600" },
  cyan: { border: "border-cyan-500/20 hover:border-cyan-500/50", dot: "bg-cyan-500", link: "hover:bg-cyan-600" },
};

export default function NavExperimentsIndex() {
  const total = categories.reduce((s, c) => s + c.count, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/test" className="text-gray-500 hover:text-white text-sm">
          ← Back to Test Lab
        </Link>
        <h1 className="text-3xl font-bold mt-4">Experimental Navigation</h1>
        <p className="text-gray-400 text-sm mt-1">
          {categories.length} categories · {total} navbar templates
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div key={cat.id} className={`border rounded-xl overflow-hidden ${c.border}`}>
                <Link
                  href={`/test/nav/${cat.id}`}
                  className="flex items-center gap-3 p-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full shrink-0 ${c.dot}`} />
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold">{cat.name}</span>
                    <span className="text-xs text-gray-600 ml-2">{cat.count}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{cat.description}</p>
                  </div>
                </Link>
                <div className="px-4 pb-4 flex flex-wrap gap-1.5">
                  {cat.templates.map((tid) => (
                    <Link
                      key={tid}
                      href={`/test/nav/${cat.id}/${tid}`}
                      className={`text-xs bg-gray-800 ${c.link} px-2.5 py-1 rounded transition-colors`}
                    >
                      {tid.replace(/^nav-/, "").replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
