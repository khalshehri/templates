"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Freelancer",
    title: "Connected Everywhere",
    description:
      "I work where you work. Connected across all major platforms and ready to integrate seamlessly into your team's workflow.",
    cta: "Let's Connect",
    secondary: "View Profile",
  },
  ar: {
    badge: "مستقل",
    title: "متصل في كل مكان",
    description:
      "أعمل حيث تعمل. متصل عبر جميع المنصات الرئيسية ومستعد للاندماج بسلاسة في سير عمل فريقك.",
    cta: "لنتواصل",
    secondary: "عرض الملف",
  },
};

export function FreelancerConnect({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const nodes = [
    { label: "GitHub", x: "15%", y: "20%", size: 44 },
    { label: "LinkedIn", x: "78%", y: "15%", size: 40 },
    { label: "Upwork", x: "82%", y: "55%", size: 42 },
    { label: "Dribbble", x: "12%", y: "60%", size: 38 },
    { label: "Slack", x: "30%", y: "12%", size: 36 },
    { label: "Figma", x: "65%", y: "75%", size: 36 },
    { label: "Twitter", x: "20%", y: "80%", size: 34 },
    { label: "Discord", x: "72%", y: "35%", size: 34 },
  ];

  const connections = [
    [0, 4], [0, 3], [1, 4], [1, 7], [2, 7], [2, 5],
    [3, 6], [5, 6], [0, 1], [2, 3], [4, 7], [5, 1],
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map(([from, to], i) => {
          const n1 = nodes[from];
          const n2 = nodes[to];
          return (
            <line
              key={i}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="rgba(6,182,212,0.08)"
              strokeWidth="1"
              className="fco-line-draw"
              style={{
                strokeDasharray: 500,
                strokeDashoffset: 500,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          );
        })}

        {/* Traveling dots on connections */}
        {connections.slice(0, 6).map(([from, to], i) => {
          const n1 = nodes[from];
          const n2 = nodes[to];
          return (
            <circle
              key={`dot-${i}`}
              r="2"
              fill="#06b6d4"
              opacity="0.4"
              className="fco-travel-dot"
            >
              <animateMotion
                dur={`${3 + i}s`}
                repeatCount="indefinite"
                path={`M ${n1.x.replace('%','')} ${n1.y.replace('%','')} L ${n2.x.replace('%','')} ${n2.y.replace('%','')}`}
              />
            </circle>
          );
        })}
      </svg>

      {/* Platform nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute fco-node-pop pointer-events-none"
          style={{
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)",
            animationDelay: `${i * 0.15}s`,
          }}
        >
          <div
            className="rounded-full flex items-center justify-center fco-node-pulse"
            style={{
              width: node.size,
              height: node.size,
              background: "rgba(6,182,212,0.06)",
              border: "1px solid rgba(6,182,212,0.15)",
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <span className="text-xs font-bold" style={{ color: "#06b6d4", opacity: 0.6, fontSize: 8 }}>
              {node.label}
            </span>
          </div>
        </div>
      ))}

      {/* Central hub (ME) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        {/* Outer ring */}
        <div
          className="rounded-full fco-hub-pulse"
          style={{
            width: 90,
            height: 90,
            border: "2px solid rgba(6,182,212,0.25)",
            background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: 50,
              height: 50,
              background: "rgba(6,182,212,0.15)",
              border: "1px solid rgba(6,182,212,0.3)",
            }}
          >
            <span className="text-xs font-black tracking-wider" style={{ color: "#06b6d4" }}>ME</span>
          </div>
        </div>
        {/* Radiating rings */}
        {[120, 180, 260].map((size, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full fco-radiate"
            style={{
              width: size,
              height: size,
              border: `1px solid rgba(6,182,212,${0.06 - i * 0.015})`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Connection lines from hub to nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {nodes.map((node, i) => (
          <line
            key={`hub-${i}`}
            x1="50%"
            y1="50%"
            x2={node.x}
            y2={node.y}
            stroke="rgba(6,182,212,0.06)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="fco-hub-line"
            style={{ animationDelay: `${0.5 + i * 0.1}s` }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[100px]">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#06b6d4",
            borderColor: "rgba(6,182,212,0.3)",
            background: "rgba(6,182,212,0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #14b8a6)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(6,182,212,0.4)",
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
              background: "rgba(20,184,166,0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .fco-line-draw {
          animation: fcoLine 1.5s ease-out forwards;
        }
        @keyframes fcoLine {
          0% { stroke-dashoffset: 500; }
          100% { stroke-dashoffset: 0; }
        }
        .fco-node-pop {
          animation: fcoNode 0.6s ease-out forwards;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0);
        }
        @keyframes fcoNode {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          70% { transform: translate(-50%, -50%) scale(1.1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .fco-node-pulse {
          animation: fcoPulse 3s ease-in-out infinite;
        }
        @keyframes fcoPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(6,182,212,0); }
          50% { box-shadow: 0 0 15px rgba(6,182,212,0.15); }
        }
        .fco-hub-pulse {
          animation: fcoHub 2s ease-in-out infinite;
        }
        @keyframes fcoHub {
          0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.1); }
          50% { box-shadow: 0 0 40px rgba(6,182,212,0.2); }
        }
        .fco-radiate {
          animation: fcoRadiate 3s ease-out infinite;
        }
        @keyframes fcoRadiate {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
        }
        .fco-hub-line {
          animation: fcoHubLine 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fcoHubLine {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
