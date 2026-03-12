"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "MediCare Clinic",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Appointment",
  },
  ar: {
    brand: "عيادة ميديكير",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز موعد",
  },
};

export function NavClinicClean({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Medical cross icon */}
          <div className="w-9 h-9 rounded-lg bg-teal-500 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 2h4v5h5v4h-5v5H7v-5H2V7h5V2z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-gray-900">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-600 hover:text-teal-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className={`flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
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
