"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "HeartCare",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Patient Portal",
    tagline: "Your health, our priority",
  },
  ar: {
    brand: "رعاية القلب",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "بوابة المريض",
    tagline: "صحتكم أولويتنا",
  },
};

export function NavClinicCare({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-rose-100">
      <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Heart icon */}
          <div className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 16s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0116 6c0 5.5-7 10-7 10z" fill="#f43f5e"/>
            </svg>
          </div>
          <div className={`${isAr ? "text-right" : ""}`}>
            <span className="font-bold text-gray-900 block leading-tight">{t.brand}</span>
            <span className="text-[10px] text-rose-400">{t.tagline}</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-rose-500 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className={`flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="5" r="3" stroke="white" strokeWidth="1.5"/>
            <path d="M1 13c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
