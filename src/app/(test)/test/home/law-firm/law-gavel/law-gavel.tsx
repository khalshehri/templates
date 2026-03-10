/**
 * LawGavel — Law Firm hero template
 *
 * Gavel striking down with impact shockwave animation.
 * Deep navy background with gold accents. Authoritative and powerful.
 *
 * @module law-gavel
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Established 1987",
    name: "Al-Rashid & Partners",
    tagline: "Justice. Integrity. Excellence.",
    description:
      "With decades of unwavering commitment to legal excellence, we deliver authoritative representation that protects your rights and secures your future.",
    cta: "Schedule Consultation",
    secondary: "Our Practice Areas",
  },
  ar: {
    badge: "تأسست عام ١٩٨٧",
    name: "الراشد وشركاؤه",
    tagline: "العدالة. النزاهة. التميّز.",
    description:
      "بعقود من الالتزام الراسخ بالتميّز القانوني، نقدّم تمثيلاً قانونياً موثوقاً يحمي حقوقك ويضمن مستقبلك.",
    cta: "حجز استشارة",
    secondary: "مجالات الممارسة",
  },
};

export function LawGavel({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f1d36 40%, #0a1628 100%)" }}
    >
      {/* Gold ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(180,140,60,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Gavel SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 320, height: 320 }}>
        {/* Gavel head */}
        <div
          className="absolute"
          style={{
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 40,
            background: "linear-gradient(to bottom, #3d2b1a, #2a1d10)",
            borderRadius: 6,
            boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(180,140,60,0.2)",
            animation: "gavel-strike 2.5s ease-in-out infinite",
          }}
        />
        {/* Gavel handle */}
        <div
          className="absolute"
          style={{
            top: "36%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 12,
            height: 100,
            background: "linear-gradient(to right, #2a1d10, #3d2b1a, #2a1d10)",
            borderRadius: 4,
            animation: "gavel-strike 2.5s ease-in-out infinite",
          }}
        />
        {/* Strike plate (sound block) */}
        <div
          className="absolute"
          style={{
            bottom: "18%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 24,
            background: "linear-gradient(to bottom, #3d2b1a, #1a1208)",
            borderRadius: "50%",
            boxShadow: "0 2px 15px rgba(0,0,0,0.4)",
          }}
        />
        {/* Impact shockwave rings */}
        <div
          className="absolute"
          style={{
            bottom: "22%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 16,
            borderRadius: "50%",
            border: "2px solid rgba(180,140,60,0.3)",
            animation: "shockwave-1 2.5s ease-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "22%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 16,
            borderRadius: "50%",
            border: "2px solid rgba(180,140,60,0.2)",
            animation: "shockwave-2 2.5s ease-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "22%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 16,
            borderRadius: "50%",
            border: "1px solid rgba(180,140,60,0.15)",
            animation: "shockwave-3 2.5s ease-out infinite",
          }}
        />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "20%", top: "30%", size: 3, delay: 0, dur: 8 },
          { left: "75%", top: "25%", size: 2, delay: 1.2, dur: 10 },
          { left: "60%", top: "60%", size: 4, delay: 2.5, dur: 7 },
          { left: "30%", top: "70%", size: 2, delay: 0.8, dur: 9 },
          { left: "85%", top: "45%", size: 3, delay: 3, dur: 11 },
          { left: "15%", top: "55%", size: 2, delay: 1.5, dur: 8 },
          { left: "50%", top: "15%", size: 3, delay: 4, dur: 9 },
          { left: "40%", top: "80%", size: 2, delay: 2, dur: 10 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "rgba(180,140,60,0.3)",
              animation: `gold-float ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          style={{ color: "#b48c3c", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.badge}
        </p>

        <h1
          className="font-bold mb-4 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#f5f0e8",
            textShadow: "0 0 40px rgba(180,140,60,0.15)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-xl md:text-2xl mb-3 font-semibold tracking-wide"
          style={{ color: "#b48c3c" }}
        >
          {t.tagline}
        </p>

        <p
          className="text-lg mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(245,240,232,0.6)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #b48c3c, #8a6a2e)",
              color: "#0a1628",
              boxShadow: "0 0 30px rgba(180,140,60,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(180,140,60,0.4)",
              color: "#b48c3c",
              background: "rgba(180,140,60,0.06)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      {/* Bottom gold line accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(180,140,60,0.3), transparent)" }}
      />

      <style>{`
        @keyframes gavel-strike {
          0%, 60% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          70% { transform: translateX(-50%) translateY(-20px) rotate(-8deg); }
          80% { transform: translateX(-50%) translateY(5px) rotate(2deg); }
          85% { transform: translateX(-50%) translateY(0) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
        }
        @keyframes shockwave-1 {
          0%, 78% { transform: translateX(-50%) scale(1); opacity: 0; }
          80% { transform: translateX(-50%) scale(1); opacity: 0.6; }
          100% { transform: translateX(-50%) scale(4); opacity: 0; }
        }
        @keyframes shockwave-2 {
          0%, 80% { transform: translateX(-50%) scale(1); opacity: 0; }
          82% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          100% { transform: translateX(-50%) scale(5); opacity: 0; }
        }
        @keyframes shockwave-3 {
          0%, 82% { transform: translateX(-50%) scale(1); opacity: 0; }
          84% { transform: translateX(-50%) scale(1); opacity: 0.3; }
          100% { transform: translateX(-50%) scale(6); opacity: 0; }
        }
        @keyframes gold-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(5px); opacity: 0.5; }
          50% { transform: translateY(-35px) translateX(-3px); opacity: 0.3; }
          75% { transform: translateY(-15px) translateX(4px); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
