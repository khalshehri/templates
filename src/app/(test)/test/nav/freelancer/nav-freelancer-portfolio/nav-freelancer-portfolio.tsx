"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "View Work",
    count: "42",
    countLabel: "Projects",
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "شاهد أعمالي",
    count: "42",
    countLabel: "مشروع",
  },
};

export function NavFreelancerPortfolio({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Gallery grid icon */}
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-3 h-3 rounded-sm bg-rose-500" />
            <div className="w-3 h-3 rounded-sm bg-amber-500" />
            <div className="w-3 h-3 rounded-sm bg-sky-500" />
            <div className="w-3 h-3 rounded-sm bg-emerald-500" />
          </div>
          <span className="text-white font-bold">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={link} href="#" className={`text-sm font-medium transition-colors ${i === 1 ? "text-rose-400 hover:text-rose-300" : "text-gray-400 hover:text-white"}`}>
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-1.5 text-gray-500 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="text-xl font-bold text-white">{t.count}</span>
            <span className="text-xs">{t.countLabel}</span>
          </div>
          <button className={`flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
            {t.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d={isAr ? "M9 2L4 7l5 5" : "M5 2l5 5-5 5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
