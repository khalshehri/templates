"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

export function NavCreativeGradient({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gradient-nav {
          background: linear-gradient(270deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752, #e73c7e);
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
          position: relative;
          overflow: hidden;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.1);
          pointer-events: none;
        }
        .gradient-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
          letter-spacing: 0.02em;
          position: relative;
        }
        .gradient-link {
          color: rgba(255,255,255,0.85);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          border-radius: 6px;
        }
        .gradient-link:hover {
          color: white;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .gradient-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 1px;
        }
        .gradient-link:hover::after {
          width: 60%;
        }
        .gradient-cta {
          background: rgba(255,255,255,0.95);
          color: #e73c7e;
          font-weight: 700;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          position: relative;
        }
        .gradient-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.2);
          background: white;
        }
        .gradient-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: sparkle 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <nav className="gradient-nav" dir={isAr ? "rtl" : "ltr"}>
        {/* Sparkle decorations */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="gradient-sparkle"
            style={{
              top: `${20 + Math.sin(i) * 30}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <span className="gradient-brand">{t.brand}</span>
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="gradient-link">
                {link}
              </a>
            ))}
          </div>
          <button className="gradient-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
