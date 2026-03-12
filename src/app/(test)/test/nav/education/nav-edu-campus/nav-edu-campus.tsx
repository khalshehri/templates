"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Campus Central",
    links: ["Programs", "Faculty", "Research", "Apply"],
    areas: ["Main Hall", "Science Wing", "Library", "Sports Complex", "Arts Center", "Dorms"],
    cta: "Visit Campus",
  },
  ar: {
    brand: "الحرم المركزي",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    areas: ["القاعة الرئيسية", "جناح العلوم", "المكتبة", "المجمع الرياضي", "مركز الفنون", "السكن"],
    cta: "زر الحرم",
  },
};

export function NavEduCampus({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-edu-campus-pin {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #4b5563;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 20px;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .nav-edu-campus-pin:hover {
          background: #e0f2fe;
          color: #0369a1;
        }
        .nav-edu-campus-pin::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #94a3b8;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .nav-edu-campus-pin:hover::before {
          background: #0369a1;
        }
        .nav-edu-campus-scroll {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .nav-edu-campus-scroll::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="bg-white shadow-sm">
        <nav className={`px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between border-b border-gray-100`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
          </div>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="text-gray-600 hover:text-sky-700 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="bg-sky-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sky-800 transition-colors">
            {t.cta}
          </button>
        </nav>
        <div className={`nav-edu-campus-scroll px-8 py-2 flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.areas.map((area, i) => (
            <span key={i} className="nav-edu-campus-pin">{area}</span>
          ))}
        </div>
      </div>
    </>
  );
}
