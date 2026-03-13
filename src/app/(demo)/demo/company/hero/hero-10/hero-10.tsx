"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

interface Hero10Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "ANNUAL PERSPECTIVE 2024",
    line1: "Build",
    line2Light: "Beyond",
    line2Dark: "Limits",
    body: "Strategic advisory for enterprises redefining what's possible. We bring the clarity, rigor, and conviction that transformation demands.",
  },
  ar: {
    eyebrow: "المنظور السنوي ٢٠٢٤",
    line1: "ابنِ",
    line2Light: "بلا",
    line2Dark: "حدود",
    body: "استشارات استراتيجية لمؤسسات تعيد تعريف الممكن. نجلب الوضوح والصرامة والقناعة التي يتطلبها التحول.",
  },
};

export function Hero10({ language }: Hero10Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero10-back {
          0% { transform: rotate(-3deg) translateY(8px) translateX(4px); }
          100% { transform: rotate(-1.5deg) translateY(8px) translateX(4px); }
        }
        @keyframes hero10-middle {
          0% { transform: rotate(2deg) translateY(4px) translateX(-2px); }
          100% { transform: rotate(0.8deg) translateY(4px) translateX(-2px); }
        }
        @keyframes hero10-front {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero10-back { animation: none !important; transform: rotate(-1.5deg) translateY(8px) translateX(4px) !important; }
          .hero10-middle { animation: none !important; transform: rotate(0.8deg) translateY(4px) translateX(-2px) !important; }
          .hero10-front { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
      <section
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: "#fefefe" }}
      >
        <div className="relative max-w-3xl w-full">
          {/* Back layer */}
          <div
            className="hero10-back hidden md:block absolute inset-0 bg-gray-100 shadow-sm rounded-2xl"
            style={{
              animation: "hero10-back 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          />

          {/* Middle layer */}
          <div
            className="hero10-middle hidden md:block absolute inset-0 bg-gray-50 shadow-sm rounded-2xl"
            style={{
              animation: "hero10-middle 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
            }}
          />

          {/* Front layer */}
          <div
            className="hero10-front relative bg-white shadow-lg rounded-2xl p-10 md:p-14 lg:p-16"
            style={{
              opacity: 0,
              animation: "hero10-front 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
            }}
          >
            {/* Eyebrow */}
            <p
              className={`text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-8 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.eyebrow}
            </p>

            {/* Heading */}
            <h1
              className={`text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-bold text-gray-900 leading-[0.95] tracking-tight ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              <span className="block">{t.line1}</span>
              <span className="block">
                <span className="text-gray-200">{t.line2Light}</span>{" "}
                <span className="text-gray-900">{t.line2Dark}</span>
              </span>
            </h1>

            <div className="h-8" />

            {/* Body — left-aligned (start-aligned for RTL) */}
            <p
              className={`text-gray-500 text-base max-w-md leading-relaxed ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>

            <div className="h-8" />

            {/* Circle CTA */}
            <button
              className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:text-white text-gray-900"
            >
              {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
