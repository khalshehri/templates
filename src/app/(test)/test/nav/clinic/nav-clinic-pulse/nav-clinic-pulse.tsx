"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PulseHealth",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Now",
  },
  ar: {
    brand: "نبض الصحة",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز الآن",
  },
};

export function NavClinicPulse({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes nav-pulse-line {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .nav-pulse-border {
          position: relative;
        }
        .nav-pulse-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 8px,
            #10b981 8px,
            #10b981 10px,
            transparent 10px,
            transparent 14px,
            #10b981 14px,
            #10b981 20px,
            #059669 20px,
            #059669 22px,
            #10b981 22px,
            #10b981 28px,
            transparent 28px,
            transparent 40px
          );
          background-size: 200% 100%;
          animation: nav-pulse-line 3s linear infinite;
        }
      `}</style>
      <nav className="nav-pulse-border bg-white shadow-sm">
        <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Heart pulse icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-emerald-500">
              <path d="M14 24s-9-6.5-9-13a5 5 0 019-3 5 5 0 019 3c0 6.5-9 13-9 13z" fill="currentColor" opacity="0.15"/>
              <path d="M3 14h5l2-4 3 8 2-4h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-gray-900">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-sm text-gray-500 hover:text-emerald-600 font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
