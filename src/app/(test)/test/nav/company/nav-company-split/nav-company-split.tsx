"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Vertex",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Get Started",
    lang: "عربي",
  },
  ar: {
    brand: "فيرتكس",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "ابدأ الآن",
    lang: "EN",
  },
};

export function NavCompanySplit({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-split-link {
          color: #4b5563;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-split-link:hover {
          color: #111827;
        }
      `}</style>
      <nav className={`bg-white border-b border-gray-200 px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        {/* Left: Logo isolated */}
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-gray-900 font-bold text-xl">{t.brand}</span>
        </div>

        {/* Center: Links */}
        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-split-link">{link}</a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="text-gray-400 hover:text-gray-600 transition-colors p-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700 text-sm font-medium border border-gray-300 px-3 py-1 rounded transition-colors">
            {t.lang}
          </button>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
