"use client";

/**
 * Unboxing Hero Component — E-commerce Category
 *
 * A premium box opening animation. A 3D CSS box lid lifts up and back on load,
 * revealing glowing product content inside. Sparkle/confetti particles burst out
 * as the box opens. Product info floats up from inside the box.
 * Premium unboxing experience feel with high-end product launch vibes.
 *
 * Color palette: deep plum (#0c0a0e), gold (#d4a853), warm white, subtle purple (#2a2035)
 * Full RTL support for Arabic.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Limited Edition",
    heading: "Unveil the Extraordinary",
    description:
      "Experience the thrill of discovery with our premium curated collection. Each piece is handpicked for those who appreciate the finer things in life.",
    cta: "Shop Collection",
    productName: "Premium Collection",
    productTag: "Exclusive Release",
  },
  ar: {
    badge: "إصدار محدود",
    heading: "اكتشف التميّز الاستثنائي",
    description:
      "عش تجربة الاكتشاف مع مجموعتنا المنسّقة بعناية. كل قطعة مختارة يدويًا لمن يقدّرون الأشياء الراقية في الحياة.",
    cta: "تسوّق المجموعة",
    productName: "المجموعة الفاخرة",
    productTag: "إصدار حصري",
  },
};

export function Unboxing({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#0c0a0e" }}
    >
      {/* Ambient background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(212,168,83,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 30% 30%, rgba(42,32,53,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Sparkle / Confetti Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => {
          const left = 30 + Math.random() * 40;
          const delay = 1.2 + Math.random() * 0.6;
          const duration = 1.2 + Math.random() * 1.0;
          const size = 3 + Math.random() * 5;
          const xDrift = -60 + Math.random() * 120;
          const colors = ["#d4a853", "#f5e6c8", "#ffffff", "#e8c96e", "#c9983a"];
          const color = colors[i % colors.length];
          const startY = 55 + Math.random() * 10;

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${startY}%`,
                background: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
                opacity: 0,
                animation: `sparkle-burst ${duration}s ease-out ${delay}s forwards`,
                ["--x-drift" as string]: `${xDrift}px`,
              }}
            />
          );
        })}
      </div>

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text content */}
        <div
          className={`flex flex-col gap-6 ${isRTL ? "lg:order-2 text-right" : "lg:order-1 text-left"}`}
          style={{
            opacity: 0,
            animation: "content-fade-in 0.8s ease-out 2.0s forwards",
          }}
        >
          {/* Badge */}
          <div className={`flex ${isRTL ? "justify-end" : "justify-start"}`}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05))",
                color: "#d4a853",
                border: "1px solid rgba(212,168,83,0.25)",
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "#f5f0e8" }}
          >
            {t.heading}
          </h1>

          {/* Description */}
          <p
            className="text-lg leading-relaxed max-w-lg"
            style={{ color: "rgba(245,240,232,0.6)" }}
          >
            {t.description}
          </p>

          {/* CTA */}
          <div className={`flex ${isRTL ? "justify-end" : "justify-start"} mt-2`}>
            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #d4a853, #c9983a)",
                color: "#0c0a0e",
                boxShadow:
                  "0 4px 24px rgba(212,168,83,0.3), 0 0 0 1px rgba(212,168,83,0.1)",
              }}
            >
              <span>{t.cta}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* 3D Box */}
        <div
          className={`flex items-center justify-center ${isRTL ? "lg:order-1" : "lg:order-2"}`}
        >
          <div
            className="relative"
            style={{
              perspective: "1200px",
              width: 320,
              height: 380,
            }}
          >
            {/* Ambient glow beneath the box (reflection) */}
            <div
              className="absolute"
              style={{
                width: 280,
                height: 40,
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                background:
                  "radial-gradient(ellipse, rgba(212,168,83,0.25) 0%, transparent 70%)",
                filter: "blur(12px)",
                opacity: 0,
                animation: "glow-appear 0.6s ease-out 1.0s forwards",
              }}
            />

            {/* Box container with 3D transform */}
            <div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(5deg) rotateY(-8deg)" }}
            >
              {/* --- BOX BOTTOM (visible front + sides) --- */}
              <div
                className="absolute"
                style={{
                  width: 260,
                  height: 200,
                  bottom: 40,
                  left: "50%",
                  transform: "translateX(-50%)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 rounded-b-lg"
                  style={{
                    background: "linear-gradient(180deg, #2a2035, #1a1520)",
                    border: "1px solid rgba(212,168,83,0.15)",
                    borderTop: "none",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Golden ribbon vertical stripe */}
                  <div
                    className="absolute top-0 bottom-0"
                    style={{
                      width: 28,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background:
                        "linear-gradient(180deg, rgba(212,168,83,0.5), rgba(212,168,83,0.2))",
                      borderLeft: "1px solid rgba(212,168,83,0.3)",
                      borderRight: "1px solid rgba(212,168,83,0.3)",
                    }}
                  />
                  {/* Bottom edge trim */}
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-b-lg"
                    style={{
                      height: 3,
                      background: "linear-gradient(90deg, transparent, #d4a853, transparent)",
                    }}
                  />
                </div>

                {/* Left side face */}
                <div
                  className="absolute rounded-bl-lg"
                  style={{
                    width: 60,
                    height: 200,
                    top: 0,
                    left: 0,
                    background: "linear-gradient(180deg, #221c2c, #15101c)",
                    borderLeft: "1px solid rgba(212,168,83,0.1)",
                    borderBottom: "1px solid rgba(212,168,83,0.1)",
                    transform: "translateX(-59px) rotateY(-90deg)",
                    transformOrigin: "right center",
                  }}
                />

                {/* Right side face */}
                <div
                  className="absolute rounded-br-lg"
                  style={{
                    width: 60,
                    height: 200,
                    top: 0,
                    right: 0,
                    background: "linear-gradient(180deg, #2e2638, #1e1828)",
                    borderRight: "1px solid rgba(212,168,83,0.1)",
                    borderBottom: "1px solid rgba(212,168,83,0.1)",
                    transform: "translateX(59px) rotateY(90deg)",
                    transformOrigin: "left center",
                  }}
                />

                {/* Interior glow (visible when lid opens) */}
                <div
                  className="absolute inset-0 rounded-b-lg overflow-hidden"
                  style={{
                    opacity: 0,
                    animation: "interior-glow 1s ease-out 1.0s forwards",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(212,168,83,0.35) 0%, rgba(212,168,83,0.05) 60%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Product placeholder floating up from inside */}
                <div
                  className="absolute flex flex-col items-center justify-center"
                  style={{
                    width: 160,
                    height: 140,
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(60px)",
                    opacity: 0,
                    animation: "product-float-up 1s ease-out 1.6s forwards",
                  }}
                >
                  {/* Product glow ring */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: 120,
                      height: 120,
                      background:
                        "radial-gradient(circle, rgba(212,168,83,0.15) 0%, transparent 70%)",
                      boxShadow: "0 0 40px rgba(212,168,83,0.1)",
                    }}
                  />
                  {/* Product icon placeholder */}
                  <div
                    className="relative rounded-2xl flex items-center justify-center"
                    style={{
                      width: 90,
                      height: 90,
                      background:
                        "linear-gradient(135deg, rgba(212,168,83,0.2), rgba(212,168,83,0.05))",
                      border: "1px solid rgba(212,168,83,0.3)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
                        stroke="#d4a853"
                        strokeWidth="1.5"
                        fill="rgba(212,168,83,0.08)"
                      />
                      <path
                        d="M20 4L36 12L20 20L4 12L20 4Z"
                        fill="rgba(212,168,83,0.15)"
                        stroke="#d4a853"
                        strokeWidth="1"
                      />
                      <line
                        x1="20"
                        y1="20"
                        x2="20"
                        y2="36"
                        stroke="#d4a853"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                  {/* Product tag */}
                  <span
                    className="mt-3 text-xs font-medium tracking-wider uppercase"
                    style={{ color: "#d4a853" }}
                  >
                    {t.productTag}
                  </span>
                  <span
                    className="mt-1 text-sm font-semibold"
                    style={{ color: "#f5f0e8" }}
                  >
                    {t.productName}
                  </span>
                </div>
              </div>

              {/* --- LID --- */}
              <div
                className="absolute"
                style={{
                  width: 270,
                  height: 70,
                  bottom: 230,
                  left: "50%",
                  transform: "translateX(-50%)",
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                  animation: "lid-open 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards",
                }}
              >
                {/* Lid front face */}
                <div
                  className="absolute inset-0 rounded-t-lg"
                  style={{
                    background: "linear-gradient(0deg, #2a2035, #342a40)",
                    border: "1px solid rgba(212,168,83,0.2)",
                    borderBottom: "2px solid rgba(212,168,83,0.4)",
                  }}
                >
                  {/* Ribbon on lid */}
                  <div
                    className="absolute top-0 bottom-0"
                    style={{
                      width: 28,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background:
                        "linear-gradient(180deg, rgba(212,168,83,0.4), rgba(212,168,83,0.6))",
                      borderLeft: "1px solid rgba(212,168,83,0.3)",
                      borderRight: "1px solid rgba(212,168,83,0.3)",
                    }}
                  />
                  {/* Bow accent on lid */}
                  <div
                    className="absolute"
                    style={{
                      width: 50,
                      height: 24,
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {/* Left bow loop */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 22,
                        height: 18,
                        top: 2,
                        left: 2,
                        border: "2px solid #d4a853",
                        background: "rgba(212,168,83,0.1)",
                        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                        transform: "rotate(-20deg)",
                      }}
                    />
                    {/* Right bow loop */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 22,
                        height: 18,
                        top: 2,
                        right: 2,
                        border: "2px solid #d4a853",
                        background: "rgba(212,168,83,0.1)",
                        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                        transform: "rotate(20deg)",
                      }}
                    />
                    {/* Bow center knot */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 10,
                        height: 10,
                        top: 6,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#d4a853",
                      }}
                    />
                  </div>
                  {/* Top edge highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 rounded-t-lg"
                    style={{
                      height: 2,
                      background:
                        "linear-gradient(90deg, transparent, rgba(212,168,83,0.5), transparent)",
                    }}
                  />
                </div>

                {/* Lid top face */}
                <div
                  className="absolute rounded-t-lg"
                  style={{
                    width: 270,
                    height: 60,
                    top: 0,
                    left: 0,
                    background: "linear-gradient(180deg, #3a3048, #2a2035)",
                    border: "1px solid rgba(212,168,83,0.15)",
                    transform: "rotateX(90deg)",
                    transformOrigin: "center top",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes lid-open {
          0% {
            transform: translateX(-50%) rotateX(0deg);
          }
          100% {
            transform: translateX(-50%) rotateX(-110deg);
          }
        }

        @keyframes interior-glow {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes product-float-up {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0px);
          }
        }

        @keyframes sparkle-burst {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0);
          }
          20% {
            opacity: 1;
            transform: translateY(-30px) translateX(calc(var(--x-drift) * 0.3)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-180px) translateX(var(--x-drift)) scale(0.3);
          }
        }

        @keyframes content-fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-appear {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
