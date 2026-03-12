"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Palette Co.",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "Create Together",
  },
  ar: {
    brand: "باليت",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "نبدع معاً",
  },
};

const colors = ["#ef4444", "#8b5cf6", "#06b6d4", "#f59e0b"];

export function NavAgencyPaint({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-paint-link {
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .nav-paint-drip {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 0;
          border-radius: 0 0 3px 3px;
          transition: height 0.3s;
        }
        .nav-paint-link:hover .nav-paint-drip {
          height: 12px;
        }
        .nav-paint-splat {
          position: absolute;
          top: -3px;
          right: -6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-paint-link:hover .nav-paint-splat {
          opacity: 0.6;
          transform: scale(1);
        }
        .nav-paint-stripe {
          height: 4px;
          background: linear-gradient(90deg, #ef4444 25%, #8b5cf6 25%, #8b5cf6 50%, #06b6d4 50%, #06b6d4 75%, #f59e0b 75%);
        }
      `}</style>
      <div className="bg-white">
        <div className="nav-paint-stripe" />
        <nav className={`px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-8 h-8 rounded-full" style={{ background: "conic-gradient(#ef4444, #8b5cf6, #06b6d4, #f59e0b, #ef4444)" }} />
            <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
          </div>
          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="nav-paint-link" style={{ color: undefined }}>
                {link}
                <span className="nav-paint-drip" style={{ background: colors[i] }} />
                <span className="nav-paint-splat" style={{ background: colors[i] }} />
              </a>
            ))}
          </div>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
            {t.cta}
          </button>
        </nav>
      </div>
    </>
  );
}
