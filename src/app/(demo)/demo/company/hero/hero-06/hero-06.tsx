"use client";

import { useState, useEffect } from "react";
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Phone,
} from "lucide-react";

interface Hero06Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Open 24/7",
    heading: "Compassionate care, advanced medicine",
    sub: "Expert physicians and cutting-edge facilities dedicated to your family\u2019s health and well-being.",
    cta1: "Book Appointment",
    cta2: "Emergency: 920-XXX-XXX",
    services: [
      {
        icon: "stethoscope",
        title: "General Medicine",
        desc: "Comprehensive primary care for all ages",
      },
      {
        icon: "baby",
        title: "Pediatrics",
        desc: "Specialized children\u2019s healthcare",
      },
      {
        icon: "heartpulse",
        title: "Cardiology",
        desc: "Advanced cardiac diagnostics",
      },
    ],
  },
  ar: {
    badge: "\u0645\u0641\u062a\u0648\u062d 24/7",
    heading: "\u0631\u0639\u0627\u064a\u0629 \u062d\u0627\u0646\u064a\u0629\u060c \u0637\u0628 \u0645\u062a\u0642\u062f\u0645",
    sub: "\u0623\u0637\u0628\u0627\u0621 \u062e\u0628\u0631\u0627\u0621 \u0648\u0645\u0631\u0627\u0641\u0642 \u0645\u062a\u0637\u0648\u0631\u0629 \u0645\u062e\u0635\u0635\u0629 \u0644\u0635\u062d\u0629 \u0639\u0627\u0626\u0644\u062a\u0643 \u0648\u0631\u0641\u0627\u0647\u064a\u062a\u0647\u0627.",
    cta1: "\u0627\u062d\u062c\u0632 \u0645\u0648\u0639\u062f\u0627\u064b",
    cta2: "\u0637\u0648\u0627\u0631\u0626: 920-XXX-XXX",
    services: [
      {
        icon: "stethoscope",
        title: "\u0627\u0644\u0637\u0628 \u0627\u0644\u0639\u0627\u0645",
        desc: "\u0631\u0639\u0627\u064a\u0629 \u0623\u0648\u0644\u064a\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631",
      },
      {
        icon: "baby",
        title: "\u0637\u0628 \u0627\u0644\u0623\u0637\u0641\u0627\u0644",
        desc: "\u0631\u0639\u0627\u064a\u0629 \u0635\u062d\u064a\u0629 \u0645\u062a\u062e\u0635\u0635\u0629 \u0644\u0644\u0623\u0637\u0641\u0627\u0644",
      },
      {
        icon: "heartpulse",
        title: "\u0637\u0628 \u0627\u0644\u0642\u0644\u0628",
        desc: "\u062a\u0634\u062e\u064a\u0635\u0627\u062a \u0642\u0644\u0628\u064a\u0629 \u0645\u062a\u0642\u062f\u0645\u0629",
      },
    ],
  },
};

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  stethoscope: Stethoscope,
  baby: Baby,
  heartpulse: HeartPulse,
};

const blobConfigs = [
  {
    color: "#ddd6fe",
    size: 380,
    top: "-5%",
    left: "-8%",
    duration: "15s",
  },
  {
    color: "#a5f3fc",
    size: 320,
    top: "10%",
    right: "-5%",
    duration: "18s",
  },
  {
    color: "#bbf7d0",
    size: 350,
    bottom: "5%",
    left: "15%",
    duration: "22s",
  },
  {
    color: "#fecdd3",
    size: 300,
    bottom: "-8%",
    right: "10%",
    duration: "25s",
  },
];

export function Hero06({ language }: Hero06Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes serene-morph-0 {
          0% { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
          50% { border-radius: 60% 40% 30% 70% / 40% 60% 70% 30%; }
          100% { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
        }
        @keyframes serene-morph-1 {
          0% { border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
          50% { border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%; }
          100% { border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
        }
        @keyframes serene-morph-2 {
          0% { border-radius: 60% 40% 50% 50% / 50% 50% 40% 60%; }
          50% { border-radius: 50% 50% 60% 40% / 40% 60% 50% 50%; }
          100% { border-radius: 60% 40% 50% 50% / 50% 50% 40% 60%; }
        }
        @keyframes serene-morph-3 {
          0% { border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%; }
          50% { border-radius: 55% 45% 45% 55% / 45% 55% 45% 55%; }
          100% { border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%; }
        }
        @keyframes serene-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes serene-fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .serene-fade-up {
          opacity: 0;
          animation: serene-fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .serene-card {
          transition: transform 300ms ease, box-shadow 300ms ease;
        }
        .serene-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .serene-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .serene-blob {
            animation: none !important;
          }
          .serene-pulse-dot {
            animation: none !important;
          }
          .serene-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-20"
        style={{
          backgroundColor: "#faf8ff",
          fontFamily: isAr
            ? "var(--font-noto-sans-arabic)"
            : "var(--font-rubik)",
        }}
      >
        {/* Floating blobs */}
        {blobConfigs.map((blob, i) => (
          <div
            key={i}
            className="serene-blob absolute"
            aria-hidden="true"
            style={{
              width: blob.size,
              height: blob.size,
              backgroundColor: blob.color,
              opacity: 0.4,
              filter: "blur(60px)",
              animation: `serene-morph-${i} ${blob.duration} ease-in-out infinite`,
              top: blob.top,
              left: blob.left,
              right: blob.right,
              bottom: blob.bottom,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          {mounted && (
            <div
              className="serene-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                animationDelay: "100ms",
              }}
            >
              <span
                className="serene-pulse-dot inline-block rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#22c55e",
                  animation: "serene-pulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "#15803d" }}
              >
                {t.badge}
              </span>
            </div>
          )}

          {/* Heading */}
          {mounted && (
            <h1
              className="serene-fade-up mb-5"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#1e1b4b",
                animationDelay: "200ms",
              }}
            >
              {t.heading}
            </h1>
          )}

          {/* Subtitle */}
          {mounted && (
            <p
              className="serene-fade-up max-w-xl mb-10"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                lineHeight: 1.8,
                color: "#6b7280",
                animationDelay: "300ms",
              }}
            >
              {t.sub}
            </p>
          )}

          {/* CTAs */}
          {mounted && (
            <div
              className="serene-fade-up flex flex-col sm:flex-row items-center gap-4 mb-14"
              style={{ animationDelay: "400ms" }}
            >
              <button
                className="cursor-pointer px-8 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#7c3aed",
                  color: "#ffffff",
                  boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
                }}
              >
                {t.cta1}
              </button>
              <button
                className="cursor-pointer flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-300 hover:bg-violet-50"
                style={{
                  backgroundColor: "transparent",
                  color: "#7c3aed",
                  border: "1.5px solid rgba(124, 58, 237, 0.3)",
                }}
              >
                <Phone size={16} />
                {t.cta2}
              </button>
            </div>
          )}

          {/* Service cards */}
          <div className="w-full max-w-2xl flex flex-col gap-4">
            {t.services.map((service, i) => {
              const IconComp = iconMap[service.icon];
              return mounted ? (
                <div
                  key={i}
                  className="serene-fade-up serene-card flex items-center gap-5 px-6 py-5 rounded-2xl text-start"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)",
                    animationDelay: `${550 + i * 120}ms`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-xl"
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "rgba(124, 58, 237, 0.08)",
                    }}
                  >
                    {IconComp && (
                      <IconComp size={22} style={{ color: "#7c3aed" }} />
                    )}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "#1e1b4b" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
