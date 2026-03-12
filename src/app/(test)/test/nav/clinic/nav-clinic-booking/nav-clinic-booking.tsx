"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CarePoint",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Now",
    phone: "+1 (800) 555-0123",
  },
  ar: {
    brand: "نقطة الرعاية",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز الآن",
    phone: "+966 50 000 0000",
  },
};

export function NavClinicBooking({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-bold text-gray-900 text-lg">{t.brand}</span>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-teal-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Phone */}
          <a href="tel:" className={`hidden sm:flex items-center gap-1.5 text-sm text-gray-600 hover:text-teal-600 transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 1.5L3 4.5c1 2.5 3 4.5 5.5 5.5l3-2.5 2 3-1 1c-5.5 1-10.5-4-9.5-9.5l1-1 1.5 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="font-medium" dir="ltr">{t.phone}</span>
          </a>

          {/* Large Book CTA */}
          <button className={`flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-3 rounded-xl text-sm transition-colors shadow-lg shadow-teal-500/25 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.5"/>
              <path d="M2 6.5h12M5.5 2v2M10.5 2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {t.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}
