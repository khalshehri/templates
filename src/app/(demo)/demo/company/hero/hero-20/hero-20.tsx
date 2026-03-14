"use client";

import { ArrowRight, Compass, MapPin } from "lucide-react";

const content = {
  en: {
    badge: "Explore New Territory",
    heading: ["Chart Your", "Course to Growth"],
    sub: "Navigate the complex terrain of digital transformation with precision mapping. We identify the peaks of opportunity and chart the most efficient path to reach them.",
    cta1: "Start Expedition",
    cta2: "View the Map",
    footer: "Currently mapping: 40+ markets worldwide",
    elevStart: "Start",
    elevSummit: "Summit",
  },
  ar: {
    badge: "استكشف أراضٍ جديدة",
    heading: ["ارسم مسارك", "نحو النمو"],
    sub: "تنقّل في تضاريس التحول الرقمي المعقدة بخرائط دقيقة. نحدد قمم الفرص ونرسم أكفأ المسارات للوصول إليها.",
    cta1: "ابدأ الرحلة",
    cta2: "عرض الخريطة",
    footer: "نرسم خرائط أكثر من 40 سوقًا حول العالم",
    elevStart: "البداية",
    elevSummit: "القمة",
  },
};

export function Hero20({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#1a1a2e", fontFamily: fontBody }}
    >
      <style>{`
        @keyframes contourShift1 {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(12px, -8px); }
          66% { transform: translate(-10px, 14px); }
        }
        @keyframes contourShift2 {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(-15px, 10px); }
          50% { transform: translate(8px, 18px); }
          75% { transform: translate(14px, -12px); }
        }
        @keyframes contourShift3 {
          0%, 100% { transform: translate(0px, 0px); }
          30% { transform: translate(10px, 16px); }
          60% { transform: translate(-14px, -6px); }
        }
        @keyframes contourShift4 {
          0%, 100% { transform: translate(0px, 0px); }
          40% { transform: translate(-8px, -14px); }
          70% { transform: translate(16px, 8px); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.8); opacity: 1; }
        }
        @keyframes elevationDraw {
          from { stroke-dashoffset: 800; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes contentFade {
          from { transform: translateY(25px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes areaReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .contour-group-1 { animation: contourShift1 20s ease-in-out infinite; }
        .contour-group-2 { animation: contourShift2 18s ease-in-out infinite; }
        .contour-group-3 { animation: contourShift3 24s ease-in-out infinite; }
        .contour-group-4 { animation: contourShift4 16s ease-in-out infinite; }

        .elev-dot { animation: dotPulse 3s ease-in-out infinite; }
        .elev-dot-1 { animation-delay: 0s; }
        .elev-dot-2 { animation-delay: 0.5s; }
        .elev-dot-3 { animation-delay: 1s; }
        .elev-dot-4 { animation-delay: 1.5s; }
        .elev-dot-5 { animation-delay: 0.3s; }
        .elev-dot-6 { animation-delay: 0.8s; }
        .elev-dot-7 { animation-delay: 1.3s; }

        .elevation-line {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: elevationDraw 2s ease-out 0.6s forwards;
        }
        .elevation-area {
          opacity: 0;
          animation: areaReveal 1s ease-out 2s forwards;
        }

        .hero20-content { animation: contentFade 0.8s ease-out both; }
        .hero20-content-d1 { animation-delay: 0.1s; }
        .hero20-content-d2 { animation-delay: 0.25s; }
        .hero20-content-d3 { animation-delay: 0.4s; }
        .hero20-content-d4 { animation-delay: 0.55s; }
        .hero20-content-d5 { animation-delay: 0.7s; }
        .hero20-card { animation: contentFade 0.8s ease-out 0.5s both; }

        @media (prefers-reduced-motion: reduce) {
          .contour-group-1, .contour-group-2, .contour-group-3, .contour-group-4 {
            animation: none;
          }
          .elev-dot { animation: none; opacity: 0.7; }
          .elevation-line {
            animation: none;
            stroke-dashoffset: 0;
          }
          .elevation-area { animation: none; opacity: 1; }
          .hero20-content, .hero20-card { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Topographic Contour SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Group 1 — Center-left, 4 concentric organic shapes */}
        <g className="contour-group-1">
          <path
            d="M280,420 C290,370 340,340 390,335 C440,330 490,350 510,390 C530,430 520,480 490,510 C460,540 410,550 370,540 C330,530 270,470 280,420Z"
            stroke="rgba(99,102,241,0.12)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M240,415 C250,340 320,295 400,288 C480,280 540,320 565,380 C590,440 575,520 530,560 C485,600 400,610 340,590 C280,570 230,490 240,415Z"
            stroke="rgba(99,102,241,0.10)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M195,410 C210,310 300,250 410,240 C520,230 600,290 630,370 C660,450 640,560 580,615 C520,670 390,680 310,645 C230,610 180,510 195,410Z"
            stroke="rgba(99,102,241,0.08)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M155,405 C175,280 280,205 420,192 C560,180 660,260 695,360 C730,460 705,600 630,668 C555,736 380,750 280,700 C180,650 135,530 155,405Z"
            stroke="rgba(99,102,241,0.06)"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* Group 2 — Top-right, 3 concentric shapes */}
        <g className="contour-group-2">
          <path
            d="M1050,180 C1070,150 1120,135 1160,140 C1200,145 1230,170 1235,205 C1240,240 1215,275 1180,285 C1145,295 1095,280 1070,250 C1045,220 1030,210 1050,180Z"
            stroke="rgba(99,102,241,0.14)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M1010,165 C1035,115 1105,90 1170,98 C1235,106 1280,145 1290,200 C1300,255 1265,315 1215,335 C1165,355 1090,340 1045,295 C1000,250 985,215 1010,165Z"
            stroke="rgba(99,102,241,0.10)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M970,150 C1000,80 1090,45 1180,55 C1270,65 1330,120 1345,195 C1360,270 1315,355 1250,385 C1185,415 1080,400 1020,340 C960,280 940,220 970,150Z"
            stroke="rgba(99,102,241,0.08)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Group 3 — Bottom-center, 5 concentric shapes */}
        <g className="contour-group-3">
          <path
            d="M680,700 C690,680 720,665 750,668 C780,671 800,690 802,715 C804,740 790,760 765,768 C740,776 710,765 695,745 C680,725 670,720 680,700Z"
            stroke="rgba(99,102,241,0.15)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M650,690 C665,655 710,635 755,640 C800,645 835,675 840,715 C845,755 820,795 785,810 C750,825 700,815 670,788 C640,761 635,725 650,690Z"
            stroke="rgba(99,102,241,0.12)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M615,678 C635,625 700,600 760,608 C820,616 870,658 878,715 C886,772 850,835 805,855 C760,875 690,862 645,825 C600,788 595,731 615,678Z"
            stroke="rgba(99,102,241,0.10)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M580,665 C605,595 690,562 765,572 C840,582 905,638 916,715 C927,792 880,875 825,900 C770,925 680,910 620,862 C560,814 555,735 580,665Z"
            stroke="rgba(99,102,241,0.08)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M545,650 C575,562 680,525 770,537 C860,549 940,618 954,715 C968,812 910,915 845,945 C780,975 670,958 595,898 C520,838 515,738 545,650Z"
            stroke="rgba(99,102,241,0.06)"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* Group 4 — Right side, 3 concentric shapes */}
        <g className="contour-group-4">
          <path
            d="M1250,500 C1265,470 1300,458 1330,465 C1360,472 1380,500 1378,530 C1376,560 1350,585 1320,590 C1290,595 1260,575 1248,548 C1236,521 1235,530 1250,500Z"
            stroke="rgba(99,102,241,0.13)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M1215,480 C1238,435 1290,415 1335,425 C1380,435 1415,475 1412,525 C1409,575 1375,618 1330,630 C1285,642 1235,618 1212,578 C1189,538 1192,525 1215,480Z"
            stroke="rgba(99,102,241,0.09)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M1180,460 C1210,398 1280,372 1340,385 C1400,398 1450,450 1446,520 C1442,590 1400,650 1340,668 C1280,686 1210,658 1178,605 C1146,552 1150,522 1180,460Z"
            stroke="rgba(99,102,241,0.07)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Elevation dots — orange markers at contour intersections */}
        <circle cx="390" cy="335" r="3" fill="#f97316" className="elev-dot elev-dot-1" />
        <circle cx="510" cy="390" r="3.5" fill="#f97316" className="elev-dot elev-dot-2" />
        <circle cx="1160" cy="140" r="3" fill="#f97316" className="elev-dot elev-dot-3" />
        <circle cx="750" cy="668" r="3" fill="#f97316" className="elev-dot elev-dot-4" />
        <circle cx="840" cy="715" r="3.5" fill="#f97316" className="elev-dot elev-dot-5" />
        <circle cx="1330" cy="465" r="3" fill="#f97316" className="elev-dot elev-dot-6" />
        <circle cx="280" cy="420" r="2.5" fill="#fb923c" className="elev-dot elev-dot-7" />
      </svg>

      {/* Subtle radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(249,115,22,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className={isAr ? "text-right lg:order-2" : ""}>
            {/* Badge */}
            <div className="hero20-content hero20-content-d1">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{
                  background: "rgba(249,115,22,0.1)",
                  color: "#fb923c",
                  border: "1px solid rgba(249,115,22,0.2)",
                  fontFamily: fontBody,
                }}
              >
                <Compass className="w-4 h-4" />
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero20-content hero20-content-d2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: fontHeading }}
            >
              <span className="text-white block">{t.heading[0]}</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.heading[1]}
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="hero20-content hero20-content-d3 text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: fontBody }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className={`hero20-content hero20-content-d4 flex flex-wrap gap-4 mb-10 ${
                isAr ? "justify-end" : ""
              }`}
            >
              <button
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(249,115,22,0.3)",
                  fontFamily: fontBody,
                }}
              >
                {t.cta1}
                <ArrowRight
                  className="w-4.5 h-4.5"
                  style={{ transform: isAr ? "scaleX(-1)" : undefined }}
                />
              </button>
              <button
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-white/[0.08] ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  background: "transparent",
                  fontFamily: fontBody,
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Footer text */}
            <div
              className={`hero20-content hero20-content-d5 flex items-center gap-2 ${
                isAr ? "flex-row-reverse justify-end" : ""
              }`}
            >
              <MapPin className="w-4 h-4" style={{ color: "#f97316" }} />
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: fontBody }}
              >
                {t.footer}
              </span>
            </div>
          </div>

          {/* Right — Elevation Profile Card */}
          <div className={`hero20-card ${isAr ? "lg:order-1" : ""}`}>
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Card header */}
              <div
                className={`flex items-center gap-2 mb-6 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#f97316" }}
                />
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: fontBody,
                  }}
                >
                  Elevation Profile
                </span>
              </div>

              {/* Elevation SVG */}
              <svg
                viewBox="0 0 500 200"
                className="w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid lines */}
                <line x1="40" y1="170" x2="470" y2="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="40" y1="130" x2="470" y2="130" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="40" y1="90" x2="470" y2="90" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="40" y1="50" x2="470" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 4" />

                {/* Area fill under the elevation line */}
                <polygon
                  className="elevation-area"
                  points="40,160 80,148 120,135 160,118 200,95 230,72 255,48 275,38 295,42 320,65 350,88 380,108 410,125 440,140 470,155 470,170 40,170"
                  fill="url(#areaGradient)"
                />

                {/* Elevation polyline — animated draw */}
                <polyline
                  className="elevation-line"
                  points="40,160 80,148 120,135 160,118 200,95 230,72 255,48 275,38 295,42 320,65 350,88 380,108 410,125 440,140 470,155"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Summit marker */}
                <circle cx="275" cy="38" r="5" fill="#1a1a2e" stroke="#f97316" strokeWidth="2" className="elevation-area" />
                <circle cx="275" cy="38" r="2" fill="#f97316" className="elevation-area" />

                {/* Labels */}
                <text x="40" y="188" fill="rgba(255,255,255,0.35)" fontSize="11" fontFamily={fontBody}>
                  {t.elevStart}
                </text>
                <text
                  x="470"
                  y="188"
                  fill="rgba(255,255,255,0.35)"
                  fontSize="11"
                  textAnchor="end"
                  fontFamily={fontBody}
                >
                  {t.elevSummit}
                </text>

                {/* Summit label */}
                <text
                  x="275"
                  y="24"
                  fill="#fb923c"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily={fontBody}
                  className="elevation-area"
                >
                  {t.elevSummit}
                </text>

                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Card stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { label: isAr ? "الارتفاع" : "Elevation", value: "2,847m" },
                  { label: isAr ? "المسافة" : "Distance", value: "12.4km" },
                  { label: isAr ? "المنحدر" : "Grade", value: "18.2%" },
                ].map((stat) => (
                  <div key={stat.label} className={isAr ? "text-right" : ""}>
                    <div
                      className="text-xs mb-1"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: fontBody,
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "#fff", fontFamily: fontHeading }}
                    >
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
