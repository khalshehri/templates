"use client";

import { ArrowRight, CheckCircle2, Clock, PlusCircle, Calendar } from "lucide-react";

const content = {
  en: {
    badge: "Q1 2024 Status",
    headingLine1: "Currently",
    headingLine2: "Booking Projects",
    sub: "Here's my real-time project board. I keep 2 slots open each month for new collaborations.",
    columns: {
      completed: {
        title: "Completed",
        count: "24",
      },
      inProgress: {
        title: "In Progress",
        count: "2",
      },
      available: {
        title: "Available",
        count: "2",
      },
    },
    completedCards: [
      { name: "TechFlow Rebrand", type: "Design", date: "Completed Jan 2024" },
      { name: "Pulse Analytics Dashboard", type: "Development", date: "Completed Feb 2024" },
      { name: "Nova Mobile App", type: "Full Project", date: "Completed Mar 2024" },
    ],
    inProgressCards: [
      { name: "Zenith SaaS Platform", type: "Development", percent: 60 },
      { name: "Echo Brand Identity", type: "Design", percent: 80 },
    ],
    availableCards: [
      { name: "Your Project Here", type: "Open Slot", date: "Starting April 2024" },
      { name: "Your Project Here", type: "Open Slot", date: "Starting May 2024" },
    ],
    cta1: "Book a Slot",
    cta2: "View Full Board",
    note: "\u26A1 Slots fill up fast \u2014 only 2 available this quarter",
  },
  ar: {
    badge: "\u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644 2024",
    headingLine1: "\u062D\u0627\u0644\u064A\u0627\u064B",
    headingLine2: "\u0623\u0642\u0628\u0644 \u0645\u0634\u0627\u0631\u064A\u0639",
    sub: "\u0647\u0630\u0647 \u0644\u0648\u062D\u0629 \u0645\u0634\u0627\u0631\u064A\u0639\u064A \u0627\u0644\u062D\u064A\u0629. \u0623\u062D\u062A\u0641\u0638 \u0628\u0645\u0643\u0627\u0646\u064A\u0646 \u0645\u0641\u062A\u0648\u062D\u064A\u0646 \u0643\u0644 \u0634\u0647\u0631 \u0644\u0644\u062A\u0639\u0627\u0648\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629.",
    columns: {
      completed: {
        title: "\u0645\u0643\u062A\u0645\u0644",
        count: "24",
      },
      inProgress: {
        title: "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
        count: "2",
      },
      available: {
        title: "\u0645\u062A\u0627\u062D",
        count: "2",
      },
    },
    completedCards: [
      { name: "\u0625\u0639\u0627\u062F\u0629 \u0647\u0648\u064A\u0629 TechFlow", type: "\u062A\u0635\u0645\u064A\u0645", date: "\u0627\u0643\u062A\u0645\u0644 \u064A\u0646\u0627\u064A\u0631 2024" },
      { name: "\u0644\u0648\u062D\u0629 Pulse \u0627\u0644\u062A\u062D\u0644\u064A\u0644\u064A\u0629", type: "\u062A\u0637\u0648\u064A\u0631", date: "\u0627\u0643\u062A\u0645\u0644 \u0641\u0628\u0631\u0627\u064A\u0631 2024" },
      { name: "\u062A\u0637\u0628\u064A\u0642 Nova", type: "\u0645\u0634\u0631\u0648\u0639 \u0643\u0627\u0645\u0644", date: "\u0627\u0643\u062A\u0645\u0644 \u0645\u0627\u0631\u0633 2024" },
    ],
    inProgressCards: [
      { name: "\u0645\u0646\u0635\u0629 Zenith", type: "\u062A\u0637\u0648\u064A\u0631", percent: 60 },
      { name: "\u0647\u0648\u064A\u0629 Echo", type: "\u062A\u0635\u0645\u064A\u0645", percent: 80 },
    ],
    availableCards: [
      { name: "\u0645\u0634\u0631\u0648\u0639\u0643 \u0647\u0646\u0627", type: "\u0645\u0643\u0627\u0646 \u0645\u0641\u062A\u0648\u062D", date: "\u064A\u0628\u062F\u0623 \u0623\u0628\u0631\u064A\u0644 2024" },
      { name: "\u0645\u0634\u0631\u0648\u0639\u0643 \u0647\u0646\u0627", type: "\u0645\u0643\u0627\u0646 \u0645\u0641\u062A\u0648\u062D", date: "\u064A\u0628\u062F\u0623 \u0645\u0627\u064A\u0648 2024" },
    ],
    cta1: "\u0627\u062D\u062C\u0632 \u0645\u0643\u0627\u0646\u0627\u064B",
    cta2: "\u0639\u0631\u0636 \u0627\u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629",
    note: "\u26A1 \u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u062A\u0645\u062A\u0644\u0626 \u0628\u0633\u0631\u0639\u0629 \u2014 \u0641\u0642\u0637 2 \u0645\u062A\u0627\u062D\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0628\u0639",
  },
};

export function Hero09({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#0f0b1e",
        fontFamily: fontBody,
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <style>{`
        @keyframes columnSlideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes cardSlideIn {
          from { transform: translateX(${isAr ? "20px" : "-20px"}); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slotPulse {
          0%, 100% { border-color: rgba(139, 92, 246, 0.3); }
          50% { border-color: rgba(139, 92, 246, 0.7); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        @keyframes glowBorder {
          0%, 100% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.15), inset 0 0 15px rgba(139, 92, 246, 0.05); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.1); }
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-col, .hero09-card, .hero09-slot, .hero09-progress, .hero09-glow, .hero09-badge-dot {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero09-progress {
            width: var(--target-width) !important;
          }
        }
      `}</style>

      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Top Section */}
        <div className="text-center mb-14 sm:mb-18">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(139, 92, 246, 0.12)", border: "1px solid rgba(139, 92, 246, 0.2)" }}>
            <Calendar className="w-4 h-4" style={{ color: "#8b5cf6" }} />
            <span
              className="hero09-badge-dot"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
                animation: "badgePulse 2s ease-in-out infinite",
              }}
            />
            <span className="text-sm font-medium" style={{ color: "#c4b5fd", fontFamily: fontBody }}>
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
            style={{ fontFamily: fontHeading, color: "#f5f3ff", lineHeight: 1.15 }}
          >
            {t.headingLine1}
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.headingLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "#a1a1aa", lineHeight: 1.7, fontFamily: fontBody }}
          >
            {t.sub}
          </p>
        </div>

        {/* Kanban Board */}
        <div
          className="rounded-2xl p-3 sm:p-5 mb-12"
          style={{
            background: "#1a1430",
            border: "1px solid rgba(139, 92, 246, 0.1)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Column 1 — Completed */}
            <div
              className="hero09-col rounded-xl p-3 sm:p-4"
              style={{
                background: "rgba(15, 11, 30, 0.6)",
                border: "1px solid rgba(34, 197, 94, 0.1)",
                animation: "columnSlideUp 0.6s ease-out 0.1s both",
              }}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: "#22c55e" }} />
                  <span className="text-sm font-semibold" style={{ color: "#22c55e", fontFamily: fontHeading }}>
                    {t.columns.completed.title}
                  </span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80" }}
                >
                  {t.columns.completed.count}
                </span>
              </div>

              {/* Completed Cards */}
              <div className="space-y-2.5">
                {t.completedCards.map((card, i) => (
                  <div
                    key={i}
                    className="hero09-card rounded-lg p-3 cursor-pointer transition-all duration-200"
                    style={{
                      background: "#221c38",
                      [isAr ? "borderRight" : "borderLeft"]: "3px solid rgba(34, 197, 94, 0.5)",
                      opacity: 0.6,
                      animation: `cardSlideIn 0.4s ease-out ${0.3 + i * 0.1}s both`,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <p className="text-sm font-medium mb-1" style={{ color: "#e4e4e7", fontFamily: fontHeading }}>
                      {card.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(34, 197, 94, 0.1)", color: "#86efac" }}>
                        {card.type}
                      </span>
                      <span className="text-xs" style={{ color: "#71717a" }}>
                        {card.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — In Progress */}
            <div
              className="hero09-col rounded-xl p-3 sm:p-4"
              style={{
                background: "rgba(15, 11, 30, 0.6)",
                border: "1px solid rgba(245, 158, 11, 0.1)",
                animation: "columnSlideUp 0.6s ease-out 0.3s both",
              }}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: "#f59e0b" }} />
                  <span className="text-sm font-semibold" style={{ color: "#f59e0b", fontFamily: fontHeading }}>
                    {t.columns.inProgress.title}
                  </span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24" }}
                >
                  {t.columns.inProgress.count}
                </span>
              </div>

              {/* In Progress Cards */}
              <div className="space-y-2.5">
                {t.inProgressCards.map((card, i) => (
                  <div
                    key={i}
                    className="hero09-card rounded-lg p-3 cursor-pointer transition-all duration-200"
                    style={{
                      background: "#221c38",
                      [isAr ? "borderRight" : "borderLeft"]: "3px solid rgba(245, 158, 11, 0.5)",
                      animation: `cardSlideIn 0.4s ease-out ${0.5 + i * 0.1}s both`,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <p className="text-sm font-medium mb-1" style={{ color: "#e4e4e7", fontFamily: fontHeading }}>
                      {card.name}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#fcd34d" }}>
                        {card.type}
                      </span>
                      <span className="text-xs font-medium" style={{ color: "#f59e0b" }}>
                        {card.percent}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(245, 158, 11, 0.1)" }}>
                      <div
                        className="hero09-progress h-full rounded-full"
                        style={{
                          "--target-width": `${card.percent}%`,
                          background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                          animation: `progressFill 1.5s ease-out ${0.8 + i * 0.2}s both`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 — Available (highlighted) */}
            <div
              className="hero09-col hero09-glow rounded-xl p-3 sm:p-4"
              style={{
                background: "rgba(15, 11, 30, 0.6)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                animation: "columnSlideUp 0.6s ease-out 0.5s both, glowBorder 3s ease-in-out infinite",
              }}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                  <span className="text-sm font-semibold" style={{ color: "#8b5cf6", fontFamily: fontHeading }}>
                    {t.columns.available.title}
                  </span>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(139, 92, 246, 0.15)", color: "#a78bfa" }}
                >
                  {t.columns.available.count}
                </span>
              </div>

              {/* Available Slot Cards */}
              <div className="space-y-2.5">
                {t.availableCards.map((card, i) => (
                  <div
                    key={i}
                    className="hero09-card hero09-slot rounded-lg p-3 cursor-pointer transition-all duration-200"
                    style={{
                      background: "transparent",
                      animation: `cardSlideIn 0.4s ease-out ${0.7 + i * 0.1}s both`,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(139, 92, 246, 0.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "transparent"; }}
                  >
                    <div
                      className="rounded-lg p-3"
                      style={{
                        border: "2px dashed rgba(139, 92, 246, 0.3)",
                        [isAr ? "borderRight" : "borderLeft"]: "3px solid rgba(139, 92, 246, 0.6)",
                        animation: "slotPulse 2s ease-in-out infinite",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <PlusCircle className="w-3.5 h-3.5" style={{ color: "#8b5cf6" }} />
                        <p className="text-sm font-medium" style={{ color: "#c4b5fd", fontFamily: fontHeading }}>
                          {card.name}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(139, 92, 246, 0.1)", color: "#a78bfa" }}>
                          {card.type}
                        </span>
                        <span className="text-xs" style={{ color: "#71717a" }}>
                          {card.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                color: "#fff",
                fontFamily: fontHeading,
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.35)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 30px rgba(139, 92, 246, 0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.35)"; }}
            >
              {t.cta1}
              <ArrowRight className="w-4 h-4" style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
            </button>
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "#c4b5fd",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                fontFamily: fontHeading,
              }}
            >
              {t.cta2}
            </button>
          </div>
          <p className="text-sm" style={{ color: "#71717a", fontFamily: fontBody }}>
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
