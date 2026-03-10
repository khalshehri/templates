"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Heart Rate Zone",
    title: "Feel Your Pulse",
    subtitle: "Push Beyond Limits",
    description: "Every heartbeat counts. Train in the zone where transformation happens. Monitor, push, conquer.",
    cta: "Start Training",
    secondary: "View Programs",
    bpm: "BPM",
    zone: "Fat Burn Zone",
  },
  ar: {
    badge: "منطقة معدل القلب",
    title: "اشعر بنبضك",
    subtitle: "تجاوز حدودك",
    description: "كل نبضة قلب مهمة. تدرب في المنطقة التي يحدث فيها التحول. راقب، ادفع، انتصر.",
    cta: "ابدأ التدريب",
    secondary: "عرض البرامج",
    bpm: "نبضة/دقيقة",
    zone: "منطقة حرق الدهون",
  },
};

export function GymPulse({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Deep red ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ECG Line - top */}
      <svg className="absolute top-[30%] left-0 w-full h-32 pointer-events-none" preserveAspectRatio="none">
        <path
          d="M0,60 L80,60 L90,60 L100,20 L110,90 L120,10 L130,80 L140,60 L200,60 L280,60 L290,60 L300,20 L310,90 L320,10 L330,80 L340,60 L400,60 L480,60 L490,60 L500,20 L510,90 L520,10 L530,80 L540,60 L600,60 L680,60 L690,60 L700,20 L710,90 L720,10 L730,80 L740,60 L800,60 L880,60 L890,60 L900,20 L910,90 L920,10 L930,80 L940,60 L1000,60 L1080,60 L1090,60 L1100,20 L1110,90 L1120,10 L1130,80 L1140,60 L1200,60 L1280,60 L1290,60 L1300,20 L1310,90 L1320,10 L1330,80 L1340,60 L1440,60"
          fill="none"
          stroke="rgba(239,68,68,0.4)"
          strokeWidth="2"
          className="ecg-line"
        />
      </svg>

      {/* ECG Line - bottom */}
      <svg className="absolute top-[65%] left-0 w-full h-32 pointer-events-none" preserveAspectRatio="none">
        <path
          d="M0,60 L80,60 L90,60 L100,20 L110,90 L120,10 L130,80 L140,60 L200,60 L280,60 L290,60 L300,20 L310,90 L320,10 L330,80 L340,60 L400,60 L480,60 L490,60 L500,20 L510,90 L520,10 L530,80 L540,60 L600,60 L680,60 L690,60 L700,20 L710,90 L720,10 L730,80 L740,60 L800,60 L880,60 L890,60 L900,20 L910,90 L920,10 L930,80 L940,60 L1000,60 L1080,60 L1090,60 L1100,20 L1110,90 L1120,10 L1130,80 L1140,60 L1200,60 L1280,60 L1290,60 L1300,20 L1310,90 L1320,10 L1330,80 L1340,60 L1440,60"
          fill="none"
          stroke="rgba(239,68,68,0.15)"
          strokeWidth="1.5"
          className="ecg-line-slow"
        />
      </svg>

      {/* Pulsing heart icon */}
      <div className="absolute top-[18%] right-[12%] pointer-events-none">
        <div className="pulse-heart text-red-500/30 text-6xl">&#9829;</div>
      </div>

      {/* BPM counter */}
      <div className="absolute top-[15%] left-[10%] pointer-events-none">
        <div className="text-red-500/60 font-mono text-sm">{t.zone}</div>
        <div className="bpm-counter text-red-500 font-mono text-5xl font-bold mt-1">156</div>
        <div className="text-red-500/40 font-mono text-xs mt-1">{t.bpm}</div>
      </div>

      {/* Grid dots background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ef4444 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-3xl mx-auto ${isAr ? "text-right" : "text-left"} md:text-center`}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{
            background: "rgba(239,68,68,0.15)",
            color: "#ef4444",
            border: "1px solid rgba(239,68,68,0.3)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-black mb-2 leading-none"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#fef2f2",
            textShadow: "0 0 60px rgba(239,68,68,0.3)",
          }}
        >
          {t.title}
        </h1>

        <h2
          className="font-bold mb-6"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "#ef4444",
          }}
        >
          {t.subtitle}
        </h2>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(239,68,68,0.4), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(239,68,68,0.4)",
              color: "#ef4444",
              background: "rgba(239,68,68,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ecg-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200px); }
        }
        @keyframes ecg-scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200px); }
        }
        .ecg-line {
          animation: ecg-scroll 2s linear infinite;
        }
        .ecg-line-slow {
          animation: ecg-scroll-slow 3s linear infinite;
        }
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          15% { transform: scale(1.3); opacity: 0.6; }
          30% { transform: scale(1); opacity: 0.3; }
          45% { transform: scale(1.2); opacity: 0.5; }
          60% { transform: scale(1); opacity: 0.3; }
        }
        .pulse-heart {
          animation: pulse-heart 1.2s ease-in-out infinite;
        }
        @keyframes bpm-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .bpm-counter {
          animation: bpm-flash 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
