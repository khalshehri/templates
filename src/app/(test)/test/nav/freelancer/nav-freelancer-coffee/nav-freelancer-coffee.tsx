"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
    tagline: "Crafted with care",
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
    tagline: "صُنع بعناية",
  },
};

export function NavFreelancerCoffee({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav style={{ backgroundColor: "#f5ebe0", borderBottom: "2px solid #d4a574" }}>
      <div className={`max-w-5xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* CSS Coffee cup icon */}
          <div className="relative w-7 h-6">
            <div style={{ width: 18, height: 16, backgroundColor: "#8b6f47", borderRadius: "0 0 6px 6px", position: "absolute", top: 4, left: 0 }} />
            <div style={{ width: 6, height: 8, border: "2px solid #8b6f47", borderLeft: "none", borderRadius: "0 4px 4px 0", position: "absolute", top: 6, left: 18 }} />
            <div style={{ width: 4, height: 4, backgroundColor: "#d4a574", borderRadius: "50%", position: "absolute", top: 0, left: 4, opacity: 0.6 }} />
            <div style={{ width: 3, height: 3, backgroundColor: "#d4a574", borderRadius: "50%", position: "absolute", top: 0, left: 10, opacity: 0.4 }} />
          </div>
          <div className={`${isAr ? "text-right" : ""}`}>
            <span className="font-bold text-amber-900 text-lg block leading-tight" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
            <span className="text-xs text-amber-700/70" style={{ fontFamily: "Georgia, serif" }}>{t.tagline}</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-amber-800 hover:text-amber-950 transition-colors" style={{ fontFamily: "Georgia, serif" }}>
              {link}
            </a>
          ))}
        </div>

        <button className="text-sm font-medium px-5 py-2 rounded-full transition-colors" style={{ backgroundColor: "#8b6f47", color: "#f5ebe0", fontFamily: "Georgia, serif" }}>
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
