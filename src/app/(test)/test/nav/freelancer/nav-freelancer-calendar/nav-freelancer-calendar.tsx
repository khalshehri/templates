"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex Morgan",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Book a Call",
    status: "Available for hire",
    availability: "Open",
  },
  ar: {
    brand: "أليكس مورغان",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "احجز مكالمة",
    status: "متاح للعمل",
    availability: "متاح",
  },
};

export function NavFreelancerCalendar({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Availability strip */}
      <div className="bg-emerald-50 border-b border-emerald-100">
        <div className={`max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-emerald-700">{t.status}</span>
        </div>
      </div>

      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Calendar icon */}
          <div className="w-9 h-9 rounded-lg border-2 border-emerald-500 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full bg-emerald-500 text-white text-[7px] font-bold text-center leading-tight py-0.5">MAR</div>
            <span className="text-[11px] font-bold text-gray-800 leading-tight">15</span>
          </div>
          <span className="font-bold text-gray-900">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-emerald-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className={`flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.5"/>
            <path d="M1 5.5h12M4.5 1v2M9.5 1v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
