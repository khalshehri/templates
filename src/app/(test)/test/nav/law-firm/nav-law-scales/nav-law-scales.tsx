"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Justice Legal",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Get Justice",
  },
  ar: {
    brand: "العدالة القانونية",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "احصل على العدالة",
  },
};

export function NavLawScales({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .scales-icon {
          position: relative;
          width: 32px;
          height: 28px;
        }
        .scales-beam {
          position: absolute;
          top: 4px;
          left: 2px;
          width: 28px;
          height: 2px;
          background: #c9a84c;
        }
        .scales-post {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 12px;
          background: #c9a84c;
        }
        .scales-pan-l, .scales-pan-r {
          position: absolute;
          bottom: 2px;
          width: 10px;
          height: 6px;
          border-bottom: 2px solid #c9a84c;
          border-left: 1px solid #c9a84c;
          border-right: 1px solid #c9a84c;
          border-radius: 0 0 3px 3px;
        }
        .scales-pan-l { left: 1px; }
        .scales-pan-r { right: 1px; }
        .scales-chain-l, .scales-chain-r {
          position: absolute;
          width: 1px;
          height: 12px;
          background: #c9a84c;
          top: 6px;
        }
        .scales-chain-l { left: 6px; }
        .scales-chain-r { right: 6px; }
        .law-scales-link {
          transition: color 0.3s ease;
        }
        .law-scales-link:hover {
          color: #c9a84c;
        }
      `}</style>
      <nav className="bg-[#111827] px-6 py-4 border-b border-[#c9a84c]/20">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="scales-icon">
              <div className="scales-post" />
              <div className="scales-beam" />
              <div className="scales-chain-l" />
              <div className="scales-chain-r" />
              <div className="scales-pan-l" />
              <div className="scales-pan-r" />
            </div>
            <span className="text-white font-serif text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="law-scales-link text-gray-400 text-sm font-serif" style={{ fontFamily: "Georgia, serif" }}>
                {link}
              </a>
            ))}
          </div>

          <button className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#111827] px-5 py-2 text-sm font-serif transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
