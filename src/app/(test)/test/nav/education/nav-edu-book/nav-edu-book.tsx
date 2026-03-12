"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Bookwise Academy",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Enroll Today",
  },
  ar: {
    brand: "أكاديمية بوكوايز",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "سجّل اليوم",
  },
};

export function NavEduBook({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;700&display=swap');
        .nav-edu-book { font-family: 'Lora', serif; }
        .nav-edu-book-icon {
          width: 32px; height: 28px; position: relative; display: inline-block;
        }
        .nav-edu-book-icon::before,
        .nav-edu-book-icon::after {
          content: '';
          position: absolute;
          width: 14px;
          height: 22px;
          top: 3px;
          border: 2px solid #8b6f47;
          border-radius: 0 4px 4px 0;
          background: #f5f0e8;
        }
        .nav-edu-book-icon::before {
          left: 2px;
          transform: rotate(-8deg);
          border-radius: 4px 0 0 4px;
        }
        .nav-edu-book-icon::after {
          right: 2px;
          transform: rotate(8deg);
        }
        .nav-edu-book-link {
          position: relative;
          color: #5c4a2f;
          transition: color 0.2s;
        }
        .nav-edu-book-link:hover {
          color: #8b6f47;
        }
        .nav-edu-book-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #8b6f47;
          transition: width 0.3s;
        }
        .nav-edu-book-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav className={`nav-edu-book bg-[#faf8f5] border-b-2 border-[#e8dcc8] px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="nav-edu-book-icon" />
          <span className="text-[#3d2f1a] font-bold text-lg">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-book-link text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
        <button className="bg-[#8b6f47] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#7a5f3a] transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
