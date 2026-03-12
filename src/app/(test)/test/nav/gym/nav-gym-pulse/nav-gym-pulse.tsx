"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PULSEFIT",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "Get Started",
  },
  ar: {
    brand: "بالس فيت",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "ابدأ الآن",
  },
};

export function NavGymPulse({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gym-pulse-line {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes gym-heartbeat {
          0%, 100% { transform: scaleY(0.3); }
          10% { transform: scaleY(1); }
          20% { transform: scaleY(0.5); }
          30% { transform: scaleY(0.8); }
          40% { transform: scaleY(0.3); }
        }
        .gym-pulse-nav {
          background: #111;
          position: relative;
        }
        .gym-pulse-nav::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #e11d48 30%, #22c55e 50%, #e11d48 70%, transparent 100%);
          background-size: 200% 100%;
          animation: gym-pulse-line 3s linear infinite;
        }
        .gym-pulse-brand {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .gym-pulse-link {
          color: #737373;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .gym-pulse-link:hover {
          color: #22c55e;
        }
        .gym-pulse-cta {
          background: #22c55e;
          color: #111;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 8px 20px;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .gym-pulse-cta:hover {
          background: #16a34a;
        }
        .gym-pulse-heartbeat {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 20px;
        }
        .gym-pulse-bar {
          width: 3px;
          height: 100%;
          background: #e11d48;
          border-radius: 1px;
          animation: gym-heartbeat 1.2s ease-in-out infinite;
        }
        .gym-pulse-bar:nth-child(2) { animation-delay: 0.1s; }
        .gym-pulse-bar:nth-child(3) { animation-delay: 0.2s; }
        .gym-pulse-bar:nth-child(4) { animation-delay: 0.3s; }
        .gym-pulse-bar:nth-child(5) { animation-delay: 0.4s; }
      `}</style>
      <nav className="gym-pulse-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="gym-pulse-heartbeat">
              <div className="gym-pulse-bar" />
              <div className="gym-pulse-bar" />
              <div className="gym-pulse-bar" />
              <div className="gym-pulse-bar" />
              <div className="gym-pulse-bar" />
            </div>
            <span className="gym-pulse-brand">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gym-pulse-link">{link}</a>
            ))}
          </div>

          <button className="gym-pulse-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
