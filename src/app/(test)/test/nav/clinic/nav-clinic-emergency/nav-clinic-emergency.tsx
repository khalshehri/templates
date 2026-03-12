"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "SafeHealth Clinic",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Appointment",
    emergency: "Emergency: 911",
  },
  ar: {
    brand: "عيادة الأمان",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز موعد",
    emergency: "طوارئ: 997",
  },
};

export function NavClinicEmergency({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Emergency strip */}
      <div className="bg-red-600">
        <div className={`max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs font-bold text-white tracking-wide">{t.emergency}</span>
        </div>
      </div>

      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Medical cross in circle */}
          <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 2h3v3.5H12v3H8.5V12h-3V8.5H2v-3h3.5V2z" fill="#ef4444"/>
            </svg>
          </div>
          <span className="font-bold text-gray-900">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-red-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
