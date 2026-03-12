"use client";

import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

const neonColors = [
  { color: "#ff00ff", shadow: "rgba(255,0,255,0.7)" },
  { color: "#00ffff", shadow: "rgba(0,255,255,0.7)" },
  { color: "#39ff14", shadow: "rgba(57,255,20,0.7)" },
  { color: "#ff6600", shadow: "rgba(255,102,0,0.7)" },
];

export function NavCreativeNeon({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        .neon-nav {
          background: #0a0a0f;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .neon-nav::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, #ff00ff, #00ffff, #39ff14, #ff6600, #ff00ff);
          background-size: 200% 100%;
          animation: neon-border-shift 4s linear infinite;
        }
        @keyframes neon-border-shift {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .neon-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #00ffff;
          text-shadow: 0 0 7px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3);
          letter-spacing: 0.05em;
        }
        .neon-link {
          position: relative;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          border-radius: 4px;
        }
        .neon-link-0 { color: #ff00ff; }
        .neon-link-1 { color: #00ffff; }
        .neon-link-2 { color: #39ff14; }
        .neon-link-3 { color: #ff6600; }
        .neon-link:hover {
          text-shadow: 0 0 7px currentColor, 0 0 20px currentColor, 0 0 40px currentColor;
        }
        .neon-link-active {
          animation: neon-flicker 1.5s ease-in-out infinite;
        }
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow: 0 0 7px currentColor, 0 0 20px currentColor, 0 0 40px currentColor, 0 0 80px currentColor;
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }
        .neon-cta {
          color: #0a0a0f;
          background: #00ffff;
          font-weight: 700;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,255,255,0.5), 0 0 30px rgba(0,255,255,0.3), inset 0 0 10px rgba(0,255,255,0.2);
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
        }
        .neon-cta:hover {
          box-shadow: 0 0 15px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.5), 0 0 80px rgba(0,255,255,0.3), inset 0 0 15px rgba(0,255,255,0.3);
          transform: scale(1.05);
        }
      `}</style>
      <nav className="neon-nav" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="neon-brand">{t.brand}</span>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className={`neon-link neon-link-${i} ${active === i ? "neon-link-active" : ""}`}
                onClick={(e) => { e.preventDefault(); setActive(i); }}
              >
                {link}
              </a>
            ))}
          </div>
          <button className="neon-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
