"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "GenomeClinic",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Consultation",
  },
  ar: {
    brand: "عيادة الجينوم",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز استشارة",
  },
};

export function NavClinicDna({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes nav-dna-rotate {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nav-dna-strip {
          overflow: hidden;
          height: 4px;
          position: relative;
        }
        .nav-dna-helix {
          display: flex;
          gap: 3px;
          animation: nav-dna-rotate 4s linear infinite;
          width: 200%;
        }
        .nav-dna-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>
      <nav className="bg-white border-b border-gray-100">
        <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* DNA helix icon */}
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2c0 3 3 4 4 6s4 3 4 6M12 2c0 3-3 4-4 6s-4 3-4 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 5h6M5 11h6" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>
            <span className="font-bold text-gray-900">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-500 hover:text-purple-600 font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            {t.cta}
          </button>
        </div>

        {/* DNA helix animation strip at bottom */}
        <div className="nav-dna-strip">
          <div className="nav-dna-helix">
            {Array.from({ length: 120 }).map((_, i) => {
              const phase = (i / 8) * Math.PI;
              const size = Math.abs(Math.sin(phase));
              return (
                <div
                  key={i}
                  className="nav-dna-dot"
                  style={{
                    backgroundColor: size > 0.5 ? "#9333ea" : "#c084fc",
                    opacity: 0.3 + size * 0.7,
                    transform: `translateY(${Math.sin(phase) * 1}px)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
