"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Verdict Legal",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Take Action",
  },
  ar: {
    brand: "الحكم القانونية",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "اتخذ إجراء",
  },
};

export function NavLawGavel({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gavel-icon {
          position: relative;
          width: 28px;
          height: 28px;
        }
        .gavel-head {
          position: absolute;
          top: 2px;
          left: 4px;
          width: 20px;
          height: 8px;
          background: linear-gradient(180deg, #92400e, #78350f);
          border-radius: 2px;
          transform: rotate(-30deg);
        }
        .gavel-handle {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) rotate(-30deg);
          width: 3px;
          height: 18px;
          background: linear-gradient(180deg, #a16207, #854d0e);
          border-radius: 1px;
        }
        .gavel-base {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 4px;
          background: linear-gradient(180deg, #78350f, #5c2d12);
          border-radius: 2px;
        }
        .gavel-link {
          font-family: Georgia, serif;
          transition: all 0.3s ease;
        }
        .gavel-link:hover {
          color: #a16207;
        }
      `}</style>
      <nav className="bg-[#1c1917] px-6 py-4 border-b border-[#78350f]/30">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="gavel-icon">
              <div className="gavel-head" />
              <div className="gavel-handle" />
              <div className="gavel-base" />
            </div>
            <span className="text-white font-serif text-lg font-bold tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gavel-link text-gray-400 text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-6 py-2.5 text-sm transition-all" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
