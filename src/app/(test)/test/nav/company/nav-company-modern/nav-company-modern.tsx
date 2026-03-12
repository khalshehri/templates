"use client";
import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Flowline",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Start Project",
  },
  ar: {
    brand: "فلولاين",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "ابدأ مشروعك",
  },
};

export function NavCompanyModern({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        .nav-modern-link {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 9999px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-modern-link:hover {
          color: #111827;
          background: #f3f4f6;
        }
        .nav-modern-link.active {
          color: #fff;
          background: #111827;
        }
        .nav-modern-cta {
          background: #111827;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-modern-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>
      <nav className={`bg-white mx-4 mt-4 rounded-2xl shadow-sm border border-gray-100 px-6 py-3 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xs">F</span>
          </div>
          <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`nav-modern-link ${active === i ? "active" : ""}`}
            >
              {link}
            </button>
          ))}
        </div>
        <button className="nav-modern-cta text-white px-5 py-2 rounded-full text-sm font-semibold">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
