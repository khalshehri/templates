"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "KeyHome",
    tagline: "Unlock Your Dream Home",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "Get Started",
  },
  ar: {
    brand: "كي هوم",
    tagline: "افتح باب منزل أحلامك",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "ابدأ الآن",
  },
};

export function NavRealEstateKey({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes keyTurn {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
        }
        .key-icon:hover svg {
          animation: keyTurn 0.5s ease;
        }
        .key-nav-link:hover {
          color: #b45309;
        }
      `}</style>
      <nav className="bg-gradient-to-b from-amber-50 to-white border-b border-amber-200/50 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 key-icon ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
            <div className={`flex flex-col ${isAr ? "items-end" : ""}`}>
              <span className="text-amber-900 font-bold text-lg leading-tight">{t.brand}</span>
              <span className="text-amber-600/70 text-[11px] italic">{t.tagline}</span>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="key-nav-link text-amber-800/70 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-sm">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
