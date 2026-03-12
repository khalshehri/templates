"use client";
import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Omni Solutions",
    links: ["About", "Industries", "Careers", "Contact"],
    solutions: "Solutions",
    cta: "Request Demo",
    megaItems: [
      { icon: "chart", title: "Analytics", desc: "Data-driven insights" },
      { icon: "cloud", title: "Cloud", desc: "Scalable infrastructure" },
      { icon: "shield", title: "Security", desc: "Enterprise protection" },
      { icon: "code", title: "Development", desc: "Custom solutions" },
      { icon: "users", title: "Consulting", desc: "Expert guidance" },
      { icon: "globe", title: "Global Ops", desc: "Worldwide reach" },
    ],
  },
  ar: {
    brand: "أومني للحلول",
    links: ["عن الشركة", "القطاعات", "الوظائف", "اتصل بنا"],
    solutions: "الحلول",
    cta: "اطلب عرضاً",
    megaItems: [
      { icon: "chart", title: "التحليلات", desc: "رؤى مبنية على البيانات" },
      { icon: "cloud", title: "السحابة", desc: "بنية تحتية قابلة للتطوير" },
      { icon: "shield", title: "الأمان", desc: "حماية المؤسسات" },
      { icon: "code", title: "التطوير", desc: "حلول مخصصة" },
      { icon: "users", title: "الاستشارات", desc: "إرشاد متخصص" },
      { icon: "globe", title: "العمليات الدولية", desc: "انتشار عالمي" },
    ],
  },
};

const icons: Record<string, string> = {
  chart: "M3 3v18h18M9 17V9m4 8V5m4 12v-4",
  cloud: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  code: "m16 18 6-6-6-6M8 6l-6 6 6 6",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
};

export function NavCompanyMega({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [showMega, setShowMega] = useState(false);

  return (
    <>
      <style>{`
        .nav-mega-dropdown {
          animation: navMegaSlide 0.25s ease-out;
        }
        @keyframes navMegaSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-mega-item {
          transition: background 0.15s;
          border-radius: 12px;
          padding: 16px;
        }
        .nav-mega-item:hover {
          background: #f1f5f9;
        }
        .nav-mega-link {
          color: #4b5563;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-mega-link:hover { color: #1e40af; }
      `}</style>
      <nav className={`bg-white border-b border-gray-200 px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between relative`}>
        <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            onMouseEnter={() => setShowMega(true)}
            onMouseLeave={() => setShowMega(false)}
            className={`nav-mega-link flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""} font-semibold text-blue-700`}
          >
            {t.solutions}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-mega-link">{link}</a>
          ))}
        </div>
        <button className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors">
          {t.cta}
        </button>

        {showMega && (
          <div
            className={`nav-mega-dropdown absolute top-full ${isAr ? "right-0" : "left-0"} right-0 bg-white border border-gray-200 shadow-xl z-50 p-6`}
            onMouseEnter={() => setShowMega(true)}
            onMouseLeave={() => setShowMega(false)}
          >
            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-2">
              {t.megaItems.map((item, i) => (
                <a key={i} href="#" className={`nav-mega-item flex items-start gap-3 ${isAr ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={icons[item.icon]} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
