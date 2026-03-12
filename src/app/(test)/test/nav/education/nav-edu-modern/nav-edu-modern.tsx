"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "LearnHub",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Start Learning",
    search: "Search courses...",
  },
  ar: {
    brand: "ليرن هب",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "ابدأ التعلم",
    search: "ابحث عن دورات...",
  },
};

export function NavEduModern({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-edu-modern-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-edu-modern-link:hover {
          color: #059669;
        }
        .nav-edu-modern-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #059669;
          border-radius: 1px;
          transition: width 0.2s;
        }
        .nav-edu-modern-link:hover::after {
          width: 100%;
        }
        .nav-edu-modern-cta {
          background: linear-gradient(135deg, #059669, #0d9488);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-edu-modern-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(5,150,105,0.3);
        }
      `}</style>
      <nav className={`bg-white shadow-sm px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <span className="text-gray-900 font-bold text-xl">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-modern-link text-gray-600 text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="text-gray-400 hover:text-gray-600 transition-colors p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
          <button className="nav-edu-modern-cta text-white px-5 py-2 rounded-full text-sm font-semibold">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
