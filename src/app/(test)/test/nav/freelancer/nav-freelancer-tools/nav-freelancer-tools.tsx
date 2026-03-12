"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
  },
};

// CSS-only tool icons as inline SVGs
const toolIcons = [
  /* person/about */ <svg key="t0" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* code/work */ <svg key="t1" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* pen/blog */ <svg key="t2" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14l1.5-5L12 1.5 14.5 4 7 12.5 2 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  /* brush/contact */ <svg key="t3" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 1L6 8l-1 3 3-1 7-7-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 12c-1 1-2 2-1.5 3s2-.5 3-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

export function NavFreelancerTools({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Toolbox icon */}
          <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="6" width="14" height="9" rx="1.5" stroke="white" strokeWidth="1.5"/>
              <path d="M5 6V4a3 3 0 016 0v2" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className="text-white font-bold text-sm">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
            >
              <span className="text-slate-500">{toolIcons[i]}</span>
              {link}
            </a>
          ))}
        </div>

        <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-bold px-5 py-2 rounded-md transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
