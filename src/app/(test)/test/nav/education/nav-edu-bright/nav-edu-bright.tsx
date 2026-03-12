"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "BrightMinds",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Join Us!",
  },
  ar: {
    brand: "عقول مضيئة",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "انضم إلينا!",
  },
};

const linkColors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6"];

export function NavEduBright({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-edu-bright-link {
          position: relative;
          font-weight: 600;
          transition: transform 0.2s;
          display: inline-block;
        }
        .nav-edu-bright-link:hover {
          transform: scale(1.1);
        }
        .nav-edu-bright-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 2px;
          background: currentColor;
          transform: scaleX(0);
          transition: transform 0.2s;
        }
        .nav-edu-bright-link:hover::after {
          transform: scaleX(1);
        }
        .nav-edu-bright-cta {
          background: linear-gradient(135deg, #ef4444, #f59e0b, #10b981, #3b82f6);
          background-size: 300% 300%;
          animation: navEduBrightGradient 4s ease infinite;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-edu-bright-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(59,130,246,0.3);
        }
        @keyframes navEduBrightGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .nav-edu-bright-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          animation: navEduBrightBounce 1.5s ease infinite;
        }
        @keyframes navEduBrightBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      <nav className={`bg-white px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between border-b-4 border-transparent`}
        style={{ borderImage: "linear-gradient(90deg, #ef4444, #f59e0b, #10b981, #3b82f6) 1" }}>
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="flex gap-1 items-center">
            {linkColors.map((c, i) => (
              <span key={i} className="nav-edu-bright-dot" style={{ background: c, animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
          <span className="text-gray-900 font-black text-xl tracking-tight">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-bright-link text-sm" style={{ color: linkColors[i] }}>
              {link}
            </a>
          ))}
        </div>
        <button className="nav-edu-bright-cta text-white px-6 py-2 rounded-full text-sm font-bold">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
