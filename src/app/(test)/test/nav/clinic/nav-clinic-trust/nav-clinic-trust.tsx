"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "TrustCare Clinic",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Visit",
    badges: [
      { icon: "\u2605", text: "4.9 Rating" },
      { icon: "\u2713", text: "Board Certified" },
      { icon: "\u2713", text: "15+ Years" },
    ],
  },
  ar: {
    brand: "عيادة الثقة",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز زيارة",
    badges: [
      { icon: "\u2605", text: "تقييم 4.9" },
      { icon: "\u2713", text: "معتمد" },
      { icon: "\u2713", text: "+15 سنة" },
    ],
  },
};

export function NavClinicTrust({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-100">
      {/* Trust badges strip */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className={`max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.badges.map((badge, i) => (
            <span key={i} className={`flex items-center gap-1.5 text-xs font-medium text-blue-700 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className={i === 0 ? "text-amber-500" : "text-emerald-500"}>{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-gray-900">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
