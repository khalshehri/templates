"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Let's Connect",
    badge: "50+ Projects",
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "لنتواصل",
    badge: "+50 مشروع",
  },
};

export function NavFreelancerConnect({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg">
      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-white font-bold text-lg">{t.brand}</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 text-white/90 font-medium backdrop-blur-sm">
            {t.badge}
          </span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-white/80 hover:text-white font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className={`flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-md ${isAr ? "flex-row-reverse" : ""}`}>
          {t.cta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={isAr ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
