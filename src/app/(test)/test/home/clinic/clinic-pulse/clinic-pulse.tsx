"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "VitalCare Clinic",
    tagline: "Your Health, Our Heartbeat",
    description:
      "Advanced cardiac monitoring and comprehensive healthcare services. We keep our finger on the pulse of your wellbeing with cutting-edge diagnostic technology.",
    cta: "Book Appointment",
    secondary: "Our Services",
  },
  ar: {
    name: "عيادة فيتال كير",
    tagline: "صحتك، نبض قلوبنا",
    description:
      "مراقبة قلبية متقدمة وخدمات رعاية صحية شاملة. نضع إصبعنا على نبض صحتك بأحدث تقنيات التشخيص.",
    cta: "احجز موعدًا",
    secondary: "خدماتنا",
  },
};

export function ClinicPulse({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #021a1a 0%, #041f2e 50%, #0a1628 100%)" }}
    >
      {/* ECG Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main ECG line */}
        <svg className="absolute w-full" style={{ top: "30%", height: 120 }} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 L200,60 L220,60 L240,20 L260,100 L280,10 L300,90 L320,60 L400,60 L600,60 L620,60 L640,20 L660,100 L680,10 L700,90 L720,60 L800,60 L1000,60 L1020,60 L1040,20 L1060,100 L1080,10 L1100,90 L1120,60 L1200,60"
            fill="none"
            stroke="rgba(20,184,166,0.4)"
            strokeWidth="2"
            className="ecg-line-main"
          />
        </svg>
        {/* Secondary ECG line */}
        <svg className="absolute w-full" style={{ top: "55%", height: 80 }} viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path
            d="M0,40 L250,40 L270,40 L290,15 L310,65 L330,5 L350,60 L370,40 L500,40 L700,40 L720,40 L740,15 L760,65 L780,5 L800,60 L820,40 L950,40 L1200,40"
            fill="none"
            stroke="rgba(20,184,166,0.2)"
            strokeWidth="1.5"
            className="ecg-line-secondary"
          />
        </svg>
        {/* Tertiary faint ECG */}
        <svg className="absolute w-full" style={{ top: "75%", height: 60 }} viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 L300,30 L320,30 L340,10 L360,50 L380,8 L400,45 L420,30 L600,30 L800,30 L820,30 L840,10 L860,50 L880,8 L900,45 L920,30 L1200,30"
            fill="none"
            stroke="rgba(20,184,166,0.1)"
            strokeWidth="1"
            className="ecg-line-tertiary"
          />
        </svg>
      </div>

      {/* Scanning line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ecg-scan-line" />
      </div>

      {/* Pulse dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: "10%", top: "25%", delay: 0 },
          { left: "85%", top: "35%", delay: 1.2 },
          { left: "20%", top: "70%", delay: 2.5 },
          { left: "75%", top: "65%", delay: 0.8 },
          { left: "50%", top: "20%", delay: 3 },
          { left: "40%", top: "80%", delay: 1.8 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full pulse-dot"
            style={{
              left: dot.left,
              top: dot.top,
              width: 6,
              height: 6,
              background: "rgba(20,184,166,0.6)",
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Heart rate display */}
      <div
        className="absolute top-8 right-8 font-mono text-sm pointer-events-none"
        style={{ color: "rgba(20,184,166,0.5)" }}
      >
        <div className="flex items-center gap-2">
          <div className="heart-icon">♥</div>
          <span className="bpm-number">72</span>
          <span className="text-xs opacity-60">BPM</span>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 px-6 max-w-3xl mx-auto ${isAr ? "text-right" : "text-center"}`}>
        <p
          className="text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          style={{ color: "#2dd4bf", letterSpacing: isAr ? "0.1em" : "0.25em" }}
        >
          {t.tagline}
        </p>

        <h1
          className="font-bold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#e0fffe",
            textShadow: "0 0 40px rgba(20,184,166,0.2)",
          }}
        >
          {t.name}
        </h1>

        <p
          className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed"
          style={{ color: "rgba(204,251,241,0.6)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : "justify-center"}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14b8a6, #0d9488)",
              color: "#021a1a",
              boxShadow: "0 0 30px rgba(20,184,166,0.3), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(20,184,166,0.4)",
              color: "#2dd4bf",
              background: "rgba(20,184,166,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .ecg-line-main {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: ecg-draw 3s linear infinite;
        }
        .ecg-line-secondary {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: ecg-draw 4s linear 0.5s infinite;
        }
        .ecg-line-tertiary {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: ecg-draw 5s linear 1s infinite;
        }
        .ecg-scan-line {
          position: absolute;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(20,184,166,0.15) 30%, rgba(20,184,166,0.3) 50%, rgba(20,184,166,0.15) 70%, transparent 100%);
          animation: scan-move 3s linear infinite;
          box-shadow: 0 0 20px rgba(20,184,166,0.2);
        }
        .pulse-dot {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .heart-icon {
          color: #ef4444;
          animation: heartbeat 1s ease-in-out infinite;
        }
        .bpm-number {
          animation: bpm-flicker 2s steps(1) infinite;
        }
        @keyframes ecg-draw {
          0% { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes scan-move {
          0% { left: -2px; }
          100% { left: 100%; }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.3; box-shadow: 0 0 4px rgba(20,184,166,0.3); }
          50% { transform: scale(2); opacity: 0.8; box-shadow: 0 0 15px rgba(20,184,166,0.6); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.3); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }
        @keyframes bpm-flicker {
          0% { content: "72"; }
          25% { opacity: 0.8; }
          50% { opacity: 1; }
          75% { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
