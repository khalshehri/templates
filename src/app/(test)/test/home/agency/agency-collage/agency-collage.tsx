"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Mixed Media Studio",
    title: "Crafted From Many Pieces",
    description:
      "We tear apart conventions and reassemble them into something extraordinary. Our creative collage approach brings texture, depth, and authenticity to every project.",
    cta: "Let's Create",
    secondary: "Our Process",
  },
  ar: {
    badge: "استوديو الوسائط المتعددة",
    title: "مصنوعة من قطع كثيرة",
    description:
      "نمزّق القواعد التقليدية ونعيد تجميعها في شيء استثنائي. نهجنا الإبداعي يضيف عمقاً وأصالة لكل مشروع.",
    cta: "لنبدع معاً",
    secondary: "منهجيتنا",
  },
};

export function AgencyCollage({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const papers = [
    { color: "#fecdd3", x: "5%", y: "8%", w: 220, h: 160, angle: -8, delay: 0, z: 1 },
    { color: "#c4b5fd", x: "65%", y: "5%", w: 200, h: 180, angle: 12, delay: 0.3, z: 2 },
    { color: "#a7f3d0", x: "70%", y: "55%", w: 190, h: 150, angle: -5, delay: 0.6, z: 1 },
    { color: "#fde68a", x: "8%", y: "60%", w: 210, h: 140, angle: 7, delay: 0.9, z: 2 },
    { color: "#bae6fd", x: "40%", y: "70%", w: 180, h: 170, angle: -10, delay: 1.2, z: 1 },
    { color: "#fbcfe8", x: "55%", y: "30%", w: 160, h: 130, angle: 15, delay: 1.5, z: 3 },
    { color: "#fed7aa", x: "25%", y: "15%", w: 170, h: 120, angle: -3, delay: 0.4, z: 2 },
    { color: "#d9f99d", x: "82%", y: "35%", w: 140, h: 160, angle: 6, delay: 0.8, z: 1 },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#f5f0e8]">
      {/* Cork board texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(180,140,100,0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(180,140,100,0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(180,140,100,0.05) 0%, transparent 45%)
          `,
        }}
      />

      {/* Torn paper pieces */}
      {papers.map((p, i) => (
        <div
          key={i}
          className="absolute pointer-events-none acl-paper"
          style={{
            left: p.x,
            top: p.y,
            width: p.w,
            height: p.h,
            zIndex: p.z,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: p.color,
              transform: `rotate(${p.angle}deg)`,
              clipPath: `polygon(
                ${2 + Math.random() * 5}% ${Math.random() * 3}%,
                ${30 + Math.random() * 5}% ${1 + Math.random() * 4}%,
                ${55 + Math.random() * 8}% ${Math.random() * 3}%,
                ${95 + Math.random() * 5}% ${2 + Math.random() * 5}%,
                ${97 + Math.random() * 3}% ${40 + Math.random() * 10}%,
                ${96 + Math.random() * 4}% ${90 + Math.random() * 8}%,
                ${60 + Math.random() * 10}% ${95 + Math.random() * 5}%,
                ${20 + Math.random() * 10}% ${97 + Math.random() * 3}%,
                ${Math.random() * 4}% ${93 + Math.random() * 5}%,
                ${1 + Math.random() * 3}% ${50 + Math.random() * 10}%
              )`,
              boxShadow: "3px 3px 12px rgba(0,0,0,0.12)",
            }}
          >
            {/* Fake text lines */}
            <div className="p-4 space-y-2">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="rounded-full"
                  style={{
                    width: `${50 + Math.random() * 40}%`,
                    height: 4,
                    background: "rgba(0,0,0,0.08)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Washi tape strips */}
      {[
        { x: "15%", y: "25%", angle: 45, color: "rgba(244,63,94,0.3)", w: 80 },
        { x: "72%", y: "18%", angle: -30, color: "rgba(139,92,246,0.3)", w: 60 },
        { x: "75%", y: "68%", angle: 20, color: "rgba(34,197,94,0.3)", w: 70 },
        { x: "12%", y: "72%", angle: -15, color: "rgba(245,158,11,0.3)", w: 90 },
      ].map((tape, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: tape.x,
            top: tape.y,
            width: tape.w,
            height: 16,
            background: tape.color,
            transform: `rotate(${tape.angle}deg)`,
            zIndex: 5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#d946ef",
            borderColor: "rgba(217,70,239,0.3)",
            background: "rgba(217,70,239,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight text-gray-900"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-600">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 text-white"
            style={{
              background: "linear-gradient(135deg, #d946ef, #a855f7)",
              boxShadow: "0 0 25px rgba(217,70,239,0.3)",
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
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(217,70,239,0.3)",
              color: "#a855f7",
              background: "rgba(217,70,239,0.05)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .acl-paper {
          animation: acl-float 6s ease-in-out infinite;
        }
        @keyframes acl-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(4px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
