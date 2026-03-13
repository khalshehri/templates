"use client";

interface Hero12Props {
  language: "en" | "ar";
}

const content = {
  en: {
    line1: "THINK",
    line2: "BIGGER",
    body: "Strategic advisory for enterprises that refuse to think small.",
    cta: "Begin →",
    serial: "NO. 12",
    year: "2024",
  },
  ar: {
    line1: "فكّر",
    line2: "أكبر",
    body: "استشارات استراتيجية لمؤسسات ترفض التفكير بصغر.",
    cta: "ابدأ ←",
    serial: "NO. 12",
    year: "٢٠٢٤",
  },
};

export function Hero12({ language }: Hero12Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <>
      <style>{`
        @keyframes hero12-slide-left {
          0% {
            transform: translateX(-60px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes hero12-slide-right {
          0% {
            transform: translateX(60px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes hero12-fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero12-line-grow {
          0% {
            width: 0;
          }
          100% {
            width: 6rem;
          }
        }

        .hero12-line1 {
          animation: hero12-slide-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero12-line2 {
          animation: hero12-slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }

        .hero12-divider {
          animation: hero12-line-grow 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
          width: 0;
          overflow: hidden;
        }

        .hero12-body {
          animation: hero12-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          opacity: 0;
        }

        .hero12-cta {
          animation: hero12-fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
          opacity: 0;
        }

        .hero12-serial {
          animation: hero12-fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
          opacity: 0;
        }

        .hero12-year {
          animation: hero12-fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
          opacity: 0;
        }

        .hero12-outlined {
          color: transparent;
          -webkit-text-stroke: 2px #1a1a1a;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero12-line1,
          .hero12-line2,
          .hero12-body,
          .hero12-cta,
          .hero12-serial,
          .hero12-year {
            animation: none;
            opacity: 1;
          }

          .hero12-divider {
            animation: none;
            width: 6rem;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        style={{ backgroundColor: "#fafafa" }}
      >
        {/* Serial number — top-left */}
        <span
          className={`hero12-serial absolute top-6 ${
            isAr ? "right-6" : "left-6"
          } text-[10px] text-gray-300 tracking-widest font-mono`}
          aria-hidden="true"
        >
          {t.serial}
        </span>

        {/* Year — bottom-right */}
        <span
          className={`hero12-year absolute bottom-6 ${
            isAr ? "left-6" : "right-6"
          } text-[10px] text-gray-400 font-mono`}
          aria-hidden="true"
        >
          {t.year}
        </span>

        {/* Main content — massive typography */}
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h1
            className={`text-[3rem] md:text-[6rem] lg:text-[8rem] font-black leading-[0.9] tracking-tighter ${fontHeading}`}
          >
            {/* Line 1 — outlined */}
            <span
              className="hero12-line1 block hero12-outlined select-none"
              aria-label={t.line1}
            >
              {t.line1}
            </span>

            {/* Line 2 — solid filled */}
            <span
              className="hero12-line2 block select-none"
              style={{ color: "#1a1a1a" }}
            >
              {t.line2}
            </span>
          </h1>

          {/* Thin divider line */}
          <div className="hero12-divider h-px bg-gray-300 mx-auto mt-8" />

          {/* Body text */}
          <p
            className={`hero12-body text-sm text-gray-500 max-w-sm mx-auto text-center mt-6 leading-relaxed ${fontBody}`}
          >
            {t.body}
          </p>

          {/* CTA — minimal text link */}
          <a
            href="#"
            className={`hero12-cta text-gray-900 text-sm underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 cursor-pointer mt-6 inline-block transition-all duration-300 ${fontBody}`}
          >
            {t.cta}
          </a>
        </div>
      </section>
    </>
  );
}
