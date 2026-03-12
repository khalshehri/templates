"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "ScienceLab Institute",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Explore Labs",
  },
  ar: {
    brand: "معهد المختبر العلمي",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "استكشف المختبرات",
  },
};

export function NavEduLab({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-edu-lab-molecule {
          position: relative;
          width: 60px;
          height: 32px;
        }
        .nav-edu-lab-molecule .dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #06b6d4;
        }
        .nav-edu-lab-molecule .dot:nth-child(1) { left: 0; top: 12px; }
        .nav-edu-lab-molecule .dot:nth-child(2) { left: 22px; top: 2px; }
        .nav-edu-lab-molecule .dot:nth-child(3) { left: 22px; top: 22px; }
        .nav-edu-lab-molecule .dot:nth-child(4) { left: 44px; top: 12px; }
        .nav-edu-lab-molecule .line {
          position: absolute;
          height: 2px;
          background: #06b6d4;
          opacity: 0.4;
          transform-origin: left center;
        }
        .nav-edu-lab-molecule .line:nth-child(5) { left: 4px; top: 15px; width: 22px; transform: rotate(-25deg); }
        .nav-edu-lab-molecule .line:nth-child(6) { left: 4px; top: 16px; width: 22px; transform: rotate(15deg); }
        .nav-edu-lab-molecule .line:nth-child(7) { left: 26px; top: 6px; width: 22px; transform: rotate(15deg); }
        .nav-edu-lab-molecule .line:nth-child(8) { left: 26px; top: 26px; width: 22px; transform: rotate(-25deg); }
        .nav-edu-lab-link {
          color: #374151;
          position: relative;
          transition: color 0.2s;
        }
        .nav-edu-lab-link:hover {
          color: #06b6d4;
        }
        .nav-edu-lab-link::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #06b6d4;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-edu-lab-link:hover::before {
          opacity: 1;
        }
      `}</style>
      <nav className={`bg-white border-b border-gray-100 px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="nav-edu-lab-molecule">
            <span className="dot" /><span className="dot" /><span className="dot" /><span className="dot" />
            <span className="line" /><span className="line" /><span className="line" /><span className="line" />
          </div>
          <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-lab-link text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
        <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
