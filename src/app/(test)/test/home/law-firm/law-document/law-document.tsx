/**
 * LawDocument — Law Firm hero template
 *
 * Legal document with wax seal stamp animation.
 * Parchment tones, burgundy seal, gold accents.
 *
 * @module law-document
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Certified & Authorized",
    name: "Al-Wathiq Legal Firm",
    tagline: "Every Word. Every Clause. Every Victory.",
    description:
      "Precision in drafting, excellence in execution. Our legal documents are crafted with meticulous attention to detail, ensuring ironclad protection for your interests.",
    cta: "Draft Your Agreement",
    secondary: "Our Legal Services",
  },
  ar: {
    badge: "معتمدون ومرخّصون",
    name: "مكتب الواثق للمحاماة",
    tagline: "كل كلمة. كل بند. كل انتصار.",
    description:
      "دقّة في الصياغة، تميّز في التنفيذ. وثائقنا القانونية تُصاغ بعناية فائقة بالتفاصيل، لضمان حماية حديدية لمصالحك.",
    cta: "صِغ اتفاقيتك",
    secondary: "خدماتنا القانونية",
  },
};

export function LawDocument({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #12081a 0%, #1a0f28 40%, #12081a 100%)" }}
    >
      {/* Document illustration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 260, height: 340 }}>
        {/* Paper shadow */}
        <div
          className="absolute"
          style={{
            top: 10,
            left: 10,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.2)",
            borderRadius: 4,
            filter: "blur(15px)",
          }}
        />
        {/* Paper */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #f5f0e0, #e8e0c8, #f0e8d0)",
            borderRadius: 4,
            boxShadow: "0 0 40px rgba(180,140,60,0.08)",
          }}
        />
        {/* Header line */}
        <div
          className="absolute"
          style={{
            top: 30,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 3,
            background: "#3d2b1a",
            borderRadius: 2,
          }}
        />
        {/* Text lines */}
        {[55, 75, 95, 115, 145, 165, 185, 215, 235].map((top, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top,
              left: 30,
              right: i % 3 === 2 ? 80 : 30,
              height: 2,
              background: `rgba(60,40,20,${0.12 + Math.random() * 0.08})`,
              borderRadius: 1,
            }}
          />
        ))}
        {/* Signature line */}
        <div
          className="absolute"
          style={{
            bottom: 60,
            left: 30,
            width: 80,
            height: 1,
            background: "rgba(60,40,20,0.2)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: 65,
            left: 35,
            width: 60,
            height: 12,
            background: "transparent",
            borderBottom: "2px solid rgba(20,10,50,0.15)",
            transform: "rotate(-3deg)",
            animation: "sign-write 3s ease-in-out infinite",
          }}
        />

        {/* Wax seal */}
        <div
          className="absolute"
          style={{
            bottom: 30,
            right: 30,
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 35%, #a82030, #6b1520 50%, #4a0e15 100%)",
            boxShadow: "0 3px 12px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.3), inset 0 2px 4px rgba(200,100,100,0.2)",
            animation: "seal-stamp 3s ease-out infinite",
          }}
        >
          {/* Seal emblem — inner circle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid rgba(180,140,60,0.4)",
            }}
          />
          {/* Seal emblem — inner lines */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "1px solid rgba(180,140,60,0.3)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 8,
              height: 8,
              background: "rgba(180,140,60,0.3)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Floating parchment particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
              width: 3 + Math.random() * 3,
              height: 3 + Math.random() * 3,
              background: "rgba(180,140,60,0.15)",
              borderRadius: "50%",
              animation: `parchment-float ${7 + Math.random() * 5}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div
          className="inline-block px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
          style={{
            background: "rgba(168,32,48,0.15)",
            border: "1px solid rgba(168,32,48,0.3)",
            color: "#c85060",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="font-bold mb-4 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#f5f0e8",
          }}
        >
          {t.name}
        </h1>

        <p className="text-xl md:text-2xl mb-3 font-semibold" style={{ color: "#b48c3c" }}>
          {t.tagline}
        </p>

        <p className="text-lg mb-10 mx-auto max-w-xl leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8a2030, #6b1520)",
              color: "#f5f0e8",
              boxShadow: "0 0 25px rgba(138,32,48,0.3)",
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <button
            className="px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(180,140,60,0.35)",
              color: "#b48c3c",
              background: "rgba(180,140,60,0.05)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes seal-stamp {
          0%, 70% { transform: scale(1); }
          75% { transform: scale(0.4) translateY(-30px); }
          82% { transform: scale(1.15); }
          88% { transform: scale(0.95); }
          94%, 100% { transform: scale(1); }
        }
        @keyframes sign-write {
          0% { width: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { width: 60px; opacity: 1; }
          100% { width: 60px; opacity: 0.6; }
        }
        @keyframes parchment-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
