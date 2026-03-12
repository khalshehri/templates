"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

export function NavCreativeWave({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .wave-nav {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          padding-bottom: 0;
          z-index: 10;
        }
        .wave-bottom {
          position: absolute;
          bottom: -30px;
          left: 0;
          width: 100%;
          height: 40px;
          z-index: 5;
          overflow: hidden;
        }
        .wave-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
        }
        .wave-path-1 {
          animation: wave-move-1 5s ease-in-out infinite;
        }
        .wave-path-2 {
          animation: wave-move-2 7s ease-in-out infinite;
        }
        .wave-path-3 {
          animation: wave-move-3 4s ease-in-out infinite;
        }
        @keyframes wave-move-1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
        }
        @keyframes wave-move-2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15%); }
        }
        @keyframes wave-move-3 {
          0%, 100% { transform: translateX(-10%); }
          50% { transform: translateX(0); }
        }
        .wave-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          letter-spacing: 0.02em;
          position: relative;
          display: inline-block;
        }
        .wave-brand-wave {
          display: inline-block;
          animation: wave-text 2s ease-in-out infinite;
        }
        @keyframes wave-text {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .wave-link {
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        .wave-link:hover {
          color: white;
        }
        .wave-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: white;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          clip-path: polygon(
            0% 50%, 10% 0%, 20% 50%, 30% 100%, 40% 50%, 50% 0%, 60% 50%, 70% 100%, 80% 50%, 90% 0%, 100% 50%
          );
        }
        .wave-link:hover::after {
          transform: scaleX(1);
        }
        .wave-cta {
          background: rgba(255,255,255,0.2);
          color: white;
          font-weight: 700;
          padding: 0.5rem 1.5rem;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.9rem;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .wave-cta:hover {
          background: white;
          color: #764ba2;
          border-color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .wave-bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          pointer-events: none;
          animation: bubble-float 6s ease-in-out infinite;
        }
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { transform: translateY(-10px) scale(1.1); opacity: 0.2; }
        }
      `}</style>
      <nav className="wave-nav" dir={isAr ? "rtl" : "ltr"}>
        {/* Floating bubbles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="wave-bubble"
            style={{
              width: `${15 + i * 8}px`,
              height: `${15 + i * 8}px`,
              top: `${10 + (i % 3) * 20}%`,
              left: `${8 + i * 16}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <span className="wave-brand">
            {t.brand.split('').map((char, i) => (
              <span
                key={i}
                className="wave-brand-wave"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="wave-link">
                {link}
              </a>
            ))}
          </div>
          <button className="wave-cta">{t.cta}</button>
        </div>
        {/* Animated wave bottom */}
        <div className="wave-bottom">
          <svg className="wave-svg wave-path-1" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 C150,35 350,0 500,20 C650,40 850,5 1000,20 C1150,35 1200,15 1200,20 L1200,40 L0,40 Z" fill="rgba(118,75,162,0.3)" />
          </svg>
          <svg className="wave-svg wave-path-2" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,25 C200,10 400,35 600,20 C800,5 1000,30 1200,15 L1200,40 L0,40 Z" fill="rgba(102,126,234,0.3)" />
          </svg>
          <svg className="wave-svg wave-path-3" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,15 C100,30 300,5 500,25 C700,45 900,10 1100,25 C1200,30 1200,20 1200,20 L1200,40 L0,40 Z" fill="rgba(118,75,162,0.5)" />
          </svg>
        </div>
      </nav>
    </>
  );
}
