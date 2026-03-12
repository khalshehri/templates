"use client";

import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Kate Lin",
    links: ["About", "Work", "Blog", "Contact"],
  },
  ar: {
    name: "كيت لين",
    links: ["عنّي", "أعمالي", "المدونة", "تواصل"],
  },
};

const dotColors = ["#6366f1", "#ec4899", "#10b981", "#f59e0b"];

export function NavPersonalDot({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @keyframes navDotFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes navDotBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
        .nav-dot-link {
          color: #888;
          transition: color 0.3s;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .nav-dot-link:hover {
          color: #222;
        }
        .nav-dot-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      `}</style>
      <nav
        className="bg-white py-5 px-8"
        style={{
          borderBottom: "1px solid #eee",
          animation: "navDotFade 0.6s ease",
        }}
      >
        <div
          className={`max-w-4xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span style={{ fontSize: "16px", fontWeight: 600, color: "#111" }}>
            {t.name}
          </span>

          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="nav-dot-link"
              >
                <span
                  className="nav-dot-indicator"
                  style={{
                    background: active === i ? dotColors[i] : "transparent",
                    boxShadow: active === i ? `0 0 8px ${dotColors[i]}44` : "none",
                    animation: active === i ? "navDotBounce 0.4s ease" : "none",
                  }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    color: active === i ? "#111" : undefined,
                    fontWeight: active === i ? 600 : 400,
                  }}
                >
                  {link}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
