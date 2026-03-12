"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Oakbridge University",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Apply Now",
  },
  ar: {
    brand: "جامعة أوكبريدج",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "قدّم الآن",
  },
};

export function NavEduClassic({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .nav-edu-classic-brand {
          font-family: 'Playfair Display', serif;
        }
        .nav-edu-classic-link {
          position: relative;
          transition: color 0.3s;
        }
        .nav-edu-classic-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c9a84c;
          transition: width 0.3s;
        }
        .nav-edu-classic-link:hover::after {
          width: 100%;
        }
        .nav-edu-classic-link:hover {
          color: #c9a84c;
        }
        .nav-edu-classic-shield {
          width: 40px;
          height: 46px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-edu-classic-shield::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #c9a84c;
          clip-path: polygon(50% 0%, 100% 10%, 100% 70%, 50% 100%, 0% 70%, 0% 10%);
        }
        .nav-edu-classic-shield::after {
          content: 'U';
          position: relative;
          z-index: 1;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a2744;
        }
      `}</style>
      <nav className={`bg-[#1a2744] border-b-4 border-[#c9a84c] px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="nav-edu-classic-shield" />
          <span className="nav-edu-classic-brand text-white text-xl">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-classic-link text-gray-300 text-sm font-medium tracking-wide uppercase">
              {link}
            </a>
          ))}
        </div>
        <button className="bg-[#c9a84c] text-[#1a2744] px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#d4b55e] transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
