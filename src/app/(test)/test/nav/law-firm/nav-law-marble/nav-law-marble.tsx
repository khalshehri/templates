"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Marble & Stone LLP",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Get Started",
  },
  ar: {
    brand: "ماربل وستون",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "ابدأ الآن",
  },
};

export function NavLawMarble({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .marble-bg {
          background:
            linear-gradient(125deg, rgba(255,255,255,0.3) 0%, transparent 40%),
            linear-gradient(245deg, rgba(200,200,200,0.2) 0%, transparent 50%),
            linear-gradient(165deg, rgba(180,180,180,0.15) 0%, transparent 45%),
            linear-gradient(0deg, #e8e4df, #f5f3f0, #ece8e3);
        }
        .marble-link {
          font-family: Georgia, serif;
          transition: all 0.3s ease;
        }
        .marble-link:hover {
          color: #c9a84c;
        }
      `}</style>
      <nav className="marble-bg px-6 py-5 border-b border-[#c9a84c]/30">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-8 h-8 border-2 border-[#c9a84c] flex items-center justify-center">
              <span className="text-[#c9a84c] font-serif text-sm font-bold" style={{ fontFamily: "Georgia, serif" }}>M</span>
            </div>
            <span className="text-[#2d2926] font-serif text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="marble-link text-[#5c5650] text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-[#2d2926] hover:bg-[#1a1816] text-[#c9a84c] font-serif px-6 py-2.5 text-sm tracking-wide transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
