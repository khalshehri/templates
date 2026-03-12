"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "DayCare Plus",
    links: ["Home", "Programs", "About", "Enrollment"],
    cta: "Enroll Now",
    hours: "Open Today: 9AM - 6PM",
    status: "Open",
  },
  ar: {
    brand: "رعاية بلس",
    links: ["الرئيسية", "البرامج", "من نحن", "التسجيل"],
    cta: "سجل الآن",
    hours: "مفتوح اليوم: ٩ص - ٦م",
    status: "مفتوح",
  },
};

export function NavServiceHours({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        .pulse-dot { animation: pulse-dot 2s ease infinite; }
      `}</style>
      <nav className="bg-white border-b border-gray-200">
        <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-gray-800">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-600 hover:text-sky-600 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className={`hidden sm:flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-2 h-2 bg-emerald-500 rounded-full pulse-dot" />
              <span className="text-emerald-700 text-xs font-semibold">{t.hours}</span>
            </div>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
              {t.cta}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
