"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Pillar Law Group",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Schedule Meeting",
  },
  ar: {
    brand: "مجموعة بيلار القانونية",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "حجز موعد",
  },
};

export function NavLawColumn({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .column-accent {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 14px;
        }
        .column-accent::before {
          content: '';
          width: 14px;
          height: 4px;
          background: linear-gradient(180deg, #d4c5a0, #b8a880);
          border-radius: 1px;
        }
        .column-accent::after {
          content: '';
          width: 14px;
          height: 4px;
          background: linear-gradient(0deg, #d4c5a0, #b8a880);
          border-radius: 1px;
        }
        .column-shaft {
          width: 8px;
          height: 24px;
          background: linear-gradient(90deg, #e8dcc4, #d4c5a0, #c4b48c, #d4c5a0, #e8dcc4);
        }
        .column-link {
          font-family: Georgia, serif;
          transition: color 0.3s ease;
        }
        .column-link:hover {
          color: #92400e;
        }
      `}</style>
      <nav className="bg-[#faf8f4] border-b border-[#d4c5a0] px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="column-accent">
              <div className="column-shaft" />
            </div>
            <span className="text-[#3d2b1f] font-serif text-lg" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
            <div className="column-accent">
              <div className="column-shaft" />
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="column-link text-[#5c4033] text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-[#3d2b1f] hover:bg-[#2d1f15] text-[#faf8f4] font-serif px-5 py-2 text-sm transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
