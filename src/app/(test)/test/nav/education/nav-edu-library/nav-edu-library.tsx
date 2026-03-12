"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Public Library",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Get a Card",
  },
  ar: {
    brand: "المكتبة العامة",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "احصل على بطاقة",
  },
};

export function NavEduLibrary({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
        .nav-edu-library-tab {
          position: relative;
          background: #f5f0e6;
          border: 1px solid #d4c5a9;
          border-bottom: none;
          padding: 8px 20px;
          border-radius: 6px 6px 0 0;
          font-family: 'Merriweather', serif;
          font-size: 13px;
          color: #5c4a2f;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          transform: translateY(1px);
        }
        .nav-edu-library-tab:hover {
          background: #efe8d6;
          transform: translateY(0);
        }
        .nav-edu-library-tab::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 8px;
          right: 8px;
          height: 2px;
          background: #c4a86c;
          border-radius: 1px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-edu-library-tab:hover::before {
          opacity: 1;
        }
      `}</style>
      <nav className="bg-[#efe8d6] border-b-2 border-[#c4a86c]">
        <div className={`px-8 pt-4 pb-0 flex items-end ${isAr ? "flex-row-reverse" : ""} justify-between`}>
          <div className={`flex items-center gap-3 pb-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c4a2f" strokeWidth="1.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            <span style={{ fontFamily: "'Merriweather', serif" }} className="text-[#3d2f1a] font-bold text-lg">{t.brand}</span>
          </div>
          <div className={`hidden md:flex items-end gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <button key={i} className="nav-edu-library-tab">
                {link}
              </button>
            ))}
          </div>
          <button className="mb-3 bg-[#8b6f47] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#7a5f3a] transition-colors" style={{ fontFamily: "'Merriweather', serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
