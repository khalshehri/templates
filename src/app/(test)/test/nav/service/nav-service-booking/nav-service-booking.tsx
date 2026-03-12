"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "HealthFirst",
    links: ["Home", "Services", "Doctors", "Contact"],
    cta: "Book Appointment",
    phone: "+1 (555) 123-4567",
    location: "Downtown Clinic",
  },
  ar: {
    brand: "صحتك أولاً",
    links: ["الرئيسية", "الخدمات", "الأطباء", "اتصل بنا"],
    cta: "احجز موعد",
    phone: "+966 55 123 4567",
    location: "عيادة وسط المدينة",
  },
};

export function NavServiceBooking({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-gray-800 text-lg">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-gray-600 hover:text-emerald-600 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <a href="#" className={`hidden sm:flex items-center gap-1.5 text-gray-500 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t.phone}
          </a>
          <span className={`hidden sm:inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.location}
          </span>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm">
            {t.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}
