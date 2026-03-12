"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "QuickFix",
    links: ["Home", "Services", "Contact"],
    phone: "(555) 123-HELP",
    tagline: "24/7 Emergency Service",
  },
  ar: {
    brand: "إصلاح سريع",
    links: ["الرئيسية", "الخدمات", "اتصل بنا"],
    phone: "٩٦٦-٥٥-١٢٣-٤٥٦٧",
    tagline: "خدمة طوارئ ٢٤/٧",
  },
};

export function NavServicePhone({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(0deg); }
        }
        .phone-ring:hover svg { animation: phoneRing 0.6s ease; }
      `}</style>
      <nav className="bg-gradient-to-r from-orange-600 to-red-600 shadow-lg">
        <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Q</span>
            </div>
            <div className={isAr ? "text-right" : ""}>
              <span className="text-white font-bold block leading-tight">{t.brand}</span>
              <span className="text-orange-200 text-xs">{t.tagline}</span>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <a href="tel:+15551234357" className={`phone-ring flex items-center gap-2.5 bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-lg hover:scale-105 transition-all shadow-md ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t.phone}
          </a>
        </div>
      </nav>
    </>
  );
}
