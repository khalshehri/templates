"use client";

/**
 * Vinyl Record Hero Template
 *
 * A large spinning vinyl record as the centerpiece with CSS-only grooves
 * (concentric circles). The record spins slowly while a tonearm sits on it.
 * Warm retro music vibe with a split layout: content on one side, record on the other.
 * Equalizer bars animate in the background for extra flair.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    tagline: "Feel the Rhythm",
    heading: "Where Sound Meets Creativity",
    subheading:
      "Every great idea has a rhythm. We craft digital experiences that resonate with your audience — bold, soulful, and unforgettable.",
    cta: "Drop the Needle",
    labelLine1: "SAFAHATI",
    labelLine2: "RECORDS",
    stat1Label: "Tracks Produced",
    stat1Value: "2,400+",
    stat2Label: "Happy Listeners",
    stat2Value: "18K",
    stat3Label: "Years Spinning",
    stat3Value: "12",
  },
  ar: {
    tagline: "اشعر بالإيقاع",
    heading: "حيث يلتقي الصوت بالإبداع",
    subheading:
      "لكل فكرة عظيمة إيقاعها الخاص. نصنع تجارب رقمية تتردد أصداؤها لدى جمهورك — جريئة، عميقة، ولا تُنسى.",
    cta: "ابدأ الآن",
    labelLine1: "صفحاتي",
    labelLine2: "ريكوردز",
    stat1Label: "مقطوعة منتجة",
    stat1Value: "+٢٬٤٠٠",
    stat2Label: "مستمع سعيد",
    stat2Value: "١٨ ألف",
    stat3Label: "سنوات من الدوران",
    stat3Value: "١٢",
  },
};

export function VinylRecord({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#1a1412" }}
    >
      <style>{`
        @keyframes spin-record {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes eq-bar-1 {
          0%, 100% { height: 8px; }
          50% { height: 32px; }
        }
        @keyframes eq-bar-2 {
          0%, 100% { height: 14px; }
          50% { height: 48px; }
        }
        @keyframes eq-bar-3 {
          0%, 100% { height: 6px; }
          50% { height: 40px; }
        }
        @keyframes eq-bar-4 {
          0%, 100% { height: 18px; }
          50% { height: 28px; }
        }
        @keyframes eq-bar-5 {
          0%, 100% { height: 10px; }
          50% { height: 52px; }
        }

        @keyframes tonearm-drop {
          0% { transform: rotate(-30deg); }
          100% { transform: rotate(-18deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes float-note {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        }

        .vinyl-spin {
          animation: spin-record 8s linear infinite;
        }

        .tonearm-anim {
          animation: tonearm-drop 2s ease-out forwards;
        }

        .eq-1 { animation: eq-bar-1 1.2s ease-in-out infinite; }
        .eq-2 { animation: eq-bar-2 0.9s ease-in-out infinite; }
        .eq-3 { animation: eq-bar-3 1.5s ease-in-out infinite; }
        .eq-4 { animation: eq-bar-4 1.1s ease-in-out infinite; }
        .eq-5 { animation: eq-bar-5 0.8s ease-in-out infinite; }

        .glow-pulse {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .float-note {
          animation: float-note 3s ease-in-out infinite;
        }
      `}</style>

      {/* Warm ambient glow behind the record */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-pulse pointer-events-none ${
          isAr ? "left-[10%]" : "right-[10%]"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main split layout */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center ${
          isAr ? "flex-col-reverse lg:flex-row-reverse" : "flex-col-reverse lg:flex-row"
        } gap-12 lg:gap-20 py-20 lg:py-0`}
      >
        {/* Content side */}
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          {/* Equalizer bars */}
          <div
            className={`flex items-end gap-1 mb-8 ${
              isAr ? "justify-end" : "justify-start"
            }`}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-[4px] rounded-full eq-${i}`}
                style={{
                  background:
                    "linear-gradient(to top, #d97706, #f59e0b)",
                  height: "8px",
                }}
              />
            ))}
            <span
              className={`text-amber-500 text-sm font-medium tracking-widest uppercase ${
                isAr ? "mr-3 font-arabic" : "ml-3"
              }`}
              style={{ letterSpacing: isAr ? "normal" : "0.2em" }}
            >
              {t.tagline}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: "#fef3c7" }}
          >
            {t.heading}
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg lg:text-xl leading-relaxed mb-10 max-w-lg ${
              isAr ? "mr-0 ml-auto" : ""
            }`}
            style={{
              color: "#d4a574",
              fontStyle: "italic",
            }}
          >
            {t.subheading}
          </p>

          {/* CTA Button */}
          <button
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, #d97706, #b45309)",
              color: "#1a1412",
              boxShadow: "0 0 30px rgba(217,119,6,0.3)",
            }}
          >
            {t.cta}
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                isAr ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </button>

          {/* Stats row */}
          <div
            className={`flex gap-8 mt-12 ${
              isAr ? "justify-end" : "justify-start"
            }`}
          >
            {[
              { value: t.stat1Value, label: t.stat1Label },
              { value: t.stat2Value, label: t.stat2Label },
              { value: t.stat3Value, label: t.stat3Label },
            ].map((stat, i) => (
              <div key={i} className={isAr ? "text-right" : "text-left"}>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#f59e0b" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "#a08060" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Record side */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Floating music notes */}
          <div
            className="absolute -top-4 float-note"
            style={{
              color: "#d97706",
              fontSize: "28px",
              animationDelay: "0s",
              ...(isAr ? { left: "10%" } : { right: "10%" }),
            }}
          >
            &#9835;
          </div>
          <div
            className="absolute top-10 float-note"
            style={{
              color: "#f59e0b",
              fontSize: "22px",
              animationDelay: "1s",
              ...(isAr ? { left: "2%" } : { right: "2%" }),
            }}
          >
            &#9834;
          </div>

          {/* Tonearm */}
          <div
            className="absolute z-20 tonearm-anim"
            style={{
              top: "4%",
              transformOrigin: "top center",
              ...(isAr ? { left: "42%" } : { right: "42%" }),
            }}
          >
            {/* Tonearm base (pivot) */}
            <div
              className="w-5 h-5 rounded-full"
              style={{
                background: "#78716c",
                border: "2px solid #a8a29e",
              }}
            />
            {/* Tonearm shaft */}
            <div
              className="relative"
              style={{
                width: "3px",
                height: "160px",
                background: "linear-gradient(to bottom, #a8a29e, #78716c)",
                marginLeft: "9px",
                marginTop: "-2px",
                transform: "rotate(25deg)",
                transformOrigin: "top center",
                borderRadius: "2px",
              }}
            >
              {/* Headshell */}
              <div
                className="absolute bottom-0"
                style={{
                  width: "12px",
                  height: "18px",
                  background: "#78716c",
                  borderRadius: "2px 2px 4px 4px",
                  left: "-5px",
                }}
              />
            </div>
          </div>

          {/* Vinyl record */}
          <div
            className="vinyl-spin relative"
            style={{
              width: "340px",
              height: "340px",
              borderRadius: "50%",
            }}
          >
            {/* Outer edge */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "#0a0a0a",
                border: "4px solid #2a2420",
                boxShadow:
                  "0 0 60px rgba(0,0,0,0.8), inset 0 0 30px rgba(0,0,0,0.5)",
              }}
            />

            {/* Grooves (concentric circles) */}
            <div
              className="absolute inset-[6px] rounded-full"
              style={{
                background: `repeating-radial-gradient(
                  circle at center,
                  transparent 0px,
                  transparent 2px,
                  rgba(40,35,30,0.8) 2px,
                  rgba(40,35,30,0.8) 3px,
                  transparent 3px,
                  transparent 5px
                )`,
              }}
            />

            {/* Sheen / light reflection */}
            <div
              className="absolute inset-[6px] rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.03) 45%, transparent 55%)",
              }}
            />

            {/* Outer groove area highlight */}
            <div
              className="absolute inset-[20px] rounded-full"
              style={{
                background: `repeating-radial-gradient(
                  circle at center,
                  transparent 0px,
                  transparent 3px,
                  rgba(50,40,30,0.6) 3px,
                  rgba(50,40,30,0.6) 4px,
                  transparent 4px,
                  transparent 7px
                )`,
              }}
            />

            {/* Center label */}
            <div
              className="absolute rounded-full flex flex-col items-center justify-center"
              style={{
                width: "100px",
                height: "100px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, #d97706 0%, #b45309 60%, #92400e 100%)",
                border: "3px solid #78350f",
                boxShadow: "inset 0 0 15px rgba(0,0,0,0.3)",
              }}
            >
              {/* Spindle hole */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#1a1412",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 5,
                }}
              />
              <span
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: "#1a1412", marginBottom: "2px" }}
              >
                {t.labelLine1}
              </span>
              <span
                className="text-[8px] font-medium tracking-wide"
                style={{ color: "#451a03" }}
              >
                {t.labelLine2}
              </span>
            </div>

            {/* Outer rim ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid rgba(120,100,80,0.2)",
              }}
            />
          </div>

          {/* Shadow under the record */}
          <div
            className="absolute rounded-full"
            style={{
              width: "300px",
              height: "20px",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.4), transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Bottom decorative bar — warm gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #d97706, #f59e0b, #d97706, transparent)",
        }}
      />
    </section>
  );
}
