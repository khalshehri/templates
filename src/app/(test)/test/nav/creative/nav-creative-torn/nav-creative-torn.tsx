"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

export function NavCreativeTorn({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .torn-nav {
          background: #ffffff;
          position: relative;
          padding-bottom: 20px;
          z-index: 10;
        }
        .torn-nav::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: -5%;
          right: -5%;
          height: 25px;
          background: #ffffff;
          clip-path: polygon(
            0% 0%, 2% 60%, 4% 20%, 6% 70%, 8% 30%, 10% 80%,
            12% 10%, 14% 65%, 16% 35%, 18% 75%, 20% 15%, 22% 85%,
            24% 25%, 26% 70%, 28% 40%, 30% 90%, 32% 20%, 34% 60%,
            36% 30%, 38% 80%, 40% 10%, 42% 70%, 44% 45%, 46% 85%,
            48% 20%, 50% 75%, 52% 35%, 54% 90%, 56% 15%, 58% 65%,
            60% 40%, 62% 80%, 64% 25%, 66% 70%, 68% 50%, 70% 85%,
            72% 10%, 74% 60%, 76% 30%, 78% 75%, 80% 20%, 82% 80%,
            84% 35%, 86% 65%, 88% 15%, 90% 70%, 92% 40%, 94% 85%,
            96% 25%, 98% 60%, 100% 0%
          );
          filter: drop-shadow(0 3px 3px rgba(0,0,0,0.1));
          z-index: 5;
        }
        .torn-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a1a;
          font-family: Georgia, 'Times New Roman', serif;
          position: relative;
        }
        .torn-brand::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 3px;
          background: #e74c3c;
          clip-path: polygon(0% 0%, 5% 100%, 10% 20%, 20% 80%, 30% 30%, 40% 90%, 50% 10%, 60% 70%, 70% 40%, 80% 100%, 90% 20%, 95% 80%, 100% 0%);
        }
        .torn-link {
          color: #444;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.4rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
        }
        .torn-link:hover {
          color: #e74c3c;
        }
        .torn-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          background: #e74c3c;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          clip-path: polygon(0% 0%, 10% 100%, 25% 20%, 40% 80%, 55% 30%, 70% 90%, 85% 10%, 100% 0%);
        }
        .torn-link:hover::after {
          transform: scaleX(1);
        }
        .torn-cta {
          background: #1a1a1a;
          color: white;
          font-weight: 600;
          padding: 0.5rem 1.5rem;
          border: none;
          cursor: pointer;
          position: relative;
          font-size: 0.9rem;
          clip-path: polygon(
            0% 10%, 3% 0%, 8% 15%, 15% 2%, 25% 12%, 35% 0%, 45% 8%, 55% 0%, 65% 12%, 75% 2%, 85% 10%, 92% 0%, 97% 8%, 100% 0%,
            100% 90%, 97% 100%, 92% 85%, 85% 98%, 75% 88%, 65% 100%, 55% 92%, 45% 100%, 35% 88%, 25% 98%, 15% 90%, 8% 100%, 3% 88%, 0% 100%
          );
          transition: background 0.3s ease;
        }
        .torn-cta:hover {
          background: #e74c3c;
        }
        .torn-texture {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }
      `}</style>
      <nav className="torn-nav" dir={isAr ? "rtl" : "ltr"}>
        <div className="torn-texture" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <span className="torn-brand">{t.brand}</span>
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="torn-link">
                {link}
              </a>
            ))}
          </div>
          <button className="torn-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
