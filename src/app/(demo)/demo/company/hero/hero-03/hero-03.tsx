"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Activity,
  Bell,
  Plug,
  CheckCircle2,
  Star,
  BarChart3,
  Sparkles,
} from "lucide-react";

/* ── Types ─────────────────────────────────────── */
interface Hero03Props {
  language: "en" | "ar";
}

/* ── Content ───────────────────────────────────── */
const content = {
  en: {
    announcement: "New Platform Release — Explore the Latest Features",
    microLabel: "Enterprise Digital Platform",
    headline: ["Build Smarter Digital Solutions", "for Modern Businesses"],
    sub: "Accelerate innovation with scalable tools designed for high-performance teams and modern enterprises.",
    cta1: "Get Started",
    cta2: "Book a Demo",
    trust: "Trusted by 10,000+ companies worldwide",
    logos: ["Stripe", "Vercel", "Linear", "Notion", "Figma"],
    dashboard: {
      title: "Analytics Overview",
      period: "Last 30 days",
      revenue: "$847,290",
      revenueChange: "+24.5%",
      users: "28,491",
      usersChange: "+12.3%",
      conversion: "4.28%",
      conversionChange: "+8.1%",
      chartLabel: "Revenue Trend",
    },
    floatingCards: [
      { icon: "trending", label: "Growth Rate", value: "+24%", sub: "vs last quarter" },
      { icon: "plug", label: "Integrations", value: "3 New", sub: "connected today" },
      { icon: "activity", label: "System Health", value: "99.9%", sub: "all regions" },
    ],
    notifications: [
      { text: "New enterprise client onboarded", time: "2m ago" },
      { text: "Revenue milestone reached", time: "15m ago" },
    ],
    activityUsers: [
      { name: "Sarah K.", action: "deployed v2.4.1", time: "just now" },
      { name: "Ahmed R.", action: "merged PR #847", time: "3m ago" },
      { name: "Lisa M.", action: "updated dashboard", time: "8m ago" },
    ],
  },
  ar: {
    announcement: "إصدار جديد للمنصة — استكشف أحدث الميزات",
    microLabel: "منصة رقمية للمؤسسات",
    headline: ["ابنِ حلولاً رقمية ذكية", "للأعمال الحديثة"],
    sub: "سرّع الابتكار بأدوات قابلة للتوسع مصممة للفرق عالية الأداء والمؤسسات الحديثة.",
    cta1: "ابدأ الآن",
    cta2: "احجز عرضاً",
    trust: "موثوق من قبل +10,000 شركة حول العالم",
    logos: ["Stripe", "Vercel", "Linear", "Notion", "Figma"],
    dashboard: {
      title: "نظرة عامة على التحليلات",
      period: "آخر 30 يوماً",
      revenue: "$847,290",
      revenueChange: "+24.5%",
      users: "28,491",
      usersChange: "+12.3%",
      conversion: "4.28%",
      conversionChange: "+8.1%",
      chartLabel: "اتجاه الإيرادات",
    },
    floatingCards: [
      { icon: "trending", label: "معدل النمو", value: "+24%", sub: "مقارنة بالربع السابق" },
      { icon: "plug", label: "التكاملات", value: "3 جديدة", sub: "متصلة اليوم" },
      { icon: "activity", label: "صحة النظام", value: "99.9%", sub: "جميع المناطق" },
    ],
    notifications: [
      { text: "تم تسجيل عميل مؤسسي جديد", time: "منذ 2 د" },
      { text: "تم تحقيق إنجاز في الإيرادات", time: "منذ 15 د" },
    ],
    activityUsers: [
      { name: "سارة ك.", action: "نشرت الإصدار 2.4.1", time: "الآن" },
      { name: "أحمد ر.", action: "دمج طلب السحب #847", time: "منذ 3 د" },
      { name: "ليزا م.", action: "حدّثت لوحة التحكم", time: "منذ 8 د" },
    ],
  },
};

/* ── Icon map ──────────────────────────────────── */
const floatingIconMap = {
  trending: TrendingUp,
  plug: Plug,
  activity: Activity,
};

/* ── Deterministic particles ───────────────────── */
const particles = [
  { x: 5, y: 15, size: 3, delay: 0, duration: 20 },
  { x: 90, y: 10, size: 2, delay: 3, duration: 18 },
  { x: 12, y: 80, size: 4, delay: 1, duration: 22 },
  { x: 85, y: 75, size: 2, delay: 4, duration: 19 },
  { x: 50, y: 5, size: 3, delay: 2, duration: 24 },
  { x: 75, y: 90, size: 2, delay: 5, duration: 21 },
  { x: 30, y: 50, size: 2, delay: 1.5, duration: 23 },
  { x: 68, y: 30, size: 3, delay: 3.5, duration: 17 },
  { x: 42, y: 68, size: 2, delay: 2.5, duration: 25 },
  { x: 20, y: 35, size: 3, delay: 0.5, duration: 20 },
];

/* ── Chart data (deterministic) ────────────────── */
const chartData = [28, 35, 42, 38, 52, 48, 58, 55, 62, 68, 72, 78, 74, 82, 88, 85, 92, 96];

/* ── Framer variants ───────────────────────────── */
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 } },
};

/* ── Main Component ────────────────────────────── */
export function Hero03({ language }: Hero03Props) {
  const t = content[language];
  const isAr = language === "ar";
  const font = (type: "heading" | "body") => ({
    fontFamily: isAr
      ? type === "heading" ? "var(--font-changa)" : "var(--font-tajawal)"
      : "var(--font-inter)",
  });

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={font("body")}
    >
      {/* ── Background ───────────────────────────── */}
      <div className="absolute inset-0 bg-[#08090d]" />

      {/* Gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)", top: "-15%", left: "-10%" }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", bottom: "0%", right: "5%" }}
          animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
          transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", top: "50%", left: "40%" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-400/15"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: p.duration, ease: "easeInOut", repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* ── Announcement bar ─────────────────────── */}
      <motion.div
        className="relative z-10 flex justify-center pt-6 px-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          className={`group inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-300 cursor-pointer ${isAr ? "flex-row-reverse" : ""}`}
          style={font("body")}
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[13px] text-gray-300">{t.announcement}</span>
          <ArrowRight className={`w-3 h-3 text-gray-500 group-hover:text-indigo-400 transition-all duration-300 group-hover:translate-x-0.5 ${isAr ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
        </button>
      </motion.div>

      {/* ── Main content ─────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-20">
        <div className={`grid lg:grid-cols-[1fr,1.1fr] gap-16 lg:gap-20 items-center ${isAr ? "lg:grid-flow-col-dense" : ""}`}>

          {/* ── Left: Marketing content ────────────── */}
          <motion.div
            className={`${isAr ? "lg:col-start-2 text-right" : "text-left"} lg:py-8`}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Micro label */}
            <motion.div variants={fadeUp}>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400/80"
                style={font("body")}
              >
                {t.microLabel}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-bold text-white leading-[1.1] tracking-[-0.02em]"
              style={font("heading")}
            >
              {t.headline[0]}
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {t.headline[1]}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[17px] text-gray-400 leading-relaxed max-w-lg"
              style={font("body")}
            >
              {t.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className={`mt-10 flex flex-wrap items-center gap-4 ${isAr ? "justify-end" : "justify-start"}`}
            >
              <button
                className={`group relative inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[15px] font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_28px_rgba(79,70,229,0.4)] active:scale-[0.97] ${isAr ? "flex-row-reverse" : ""}`}
                style={font("body")}
              >
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button
                className={`group inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.1] text-gray-300 text-[15px] font-medium rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.16] active:scale-[0.97] ${isAr ? "flex-row-reverse" : ""}`}
                style={font("body")}
              >
                <Play className={`w-3.5 h-3.5 text-gray-500 ${isAr ? "order-last" : ""}`} />
                {t.cta2}
              </button>
            </motion.div>

            {/* Trust */}
            <motion.div variants={fadeUp} className="mt-14">
              <p
                className={`text-[13px] text-gray-500 flex items-center gap-2 mb-5 ${isAr ? "justify-end flex-row-reverse" : ""}`}
                style={font("body")}
              >
                <span className="flex -space-x-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </span>
                {t.trust}
              </p>
              <div className={`flex items-center gap-8 ${isAr ? "justify-end" : "justify-start"}`}>
                {t.logos.map((logo) => (
                  <span
                    key={logo}
                    className="text-[13px] font-semibold text-white/[0.15] tracking-wide hover:text-white/[0.3] transition-all duration-300 cursor-pointer"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Product dashboard ────────────── */}
          <motion.div
            className={`relative ${isAr ? "lg:col-start-1" : ""}`}
            variants={scaleIn}
            initial="hidden"
            animate="show"
          >
            {/* Glow behind dashboard */}
            <div className="absolute -inset-8 bg-gradient-to-br from-indigo-600/8 via-violet-600/4 to-transparent rounded-3xl blur-3xl" />

            {/* Dashboard container */}
            <div className="relative">
              {/* Main dashboard panel */}
              <div className="bg-[#0d0e14] border border-white/[0.06] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Dashboard top bar */}
                <div className={`flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05] ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className={isAr ? "text-right" : ""}>
                      <p className="text-[13px] font-semibold text-white/90" style={font("heading")}>
                        {t.dashboard.title}
                      </p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span className="text-[11px] text-gray-500" style={font("body")}>{t.dashboard.period}</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-400/70" />
                      <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5">
                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: isAr ? "الإيرادات" : "Revenue", value: t.dashboard.revenue, change: t.dashboard.revenueChange, color: "indigo" },
                      { label: isAr ? "المستخدمون" : "Active Users", value: t.dashboard.users, change: t.dashboard.usersChange, color: "violet" },
                      { label: isAr ? "التحويل" : "Conversion", value: t.dashboard.conversion, change: t.dashboard.conversionChange, color: "cyan" },
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        className={`bg-white/[0.02] border border-white/[0.04] rounded-xl p-3.5 ${isAr ? "text-right" : ""}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="text-[11px] text-gray-500 mb-1.5" style={font("body")}>{metric.label}</p>
                        <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                          {metric.value}
                        </p>
                        <div className={`flex items-center gap-1 mt-1.5 ${isAr ? "justify-end flex-row-reverse" : ""}`}>
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          <span className="text-[11px] text-emerald-400 font-medium">{metric.change}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white/[0.015] border border-white/[0.04] rounded-xl p-4">
                    <p className={`text-[11px] text-gray-500 mb-4 ${isAr ? "text-right" : ""}`} style={font("body")}>
                      {t.dashboard.chartLabel}
                    </p>
                    {/* SVG line chart */}
                    <div className="h-32 relative">
                      <svg className="w-full h-full" viewBox="0 0 360 128" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient03" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Fill area */}
                        <motion.path
                          d={`M0,${128 - chartData[0] * 1.3} ${chartData.map((v, i) => `L${(i / (chartData.length - 1)) * 360},${128 - v * 1.3}`).join(" ")} L360,128 L0,128 Z`}
                          fill="url(#chartGradient03)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                        {/* Line */}
                        <motion.path
                          d={`M0,${128 - chartData[0] * 1.3} ${chartData.map((v, i) => `L${(i / (chartData.length - 1)) * 360},${128 - v * 1.3}`).join(" ")}`}
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />
                        {/* Dot at end */}
                        <motion.circle
                          cx={360}
                          cy={128 - chartData[chartData.length - 1] * 1.3}
                          r="4"
                          fill="#6366f1"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 2.2 }}
                        />
                        <motion.circle
                          cx={360}
                          cy={128 - chartData[chartData.length - 1] * 1.3}
                          r="8"
                          fill="#6366f1"
                          opacity={0.2}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 2] }}
                          transition={{ duration: 2, delay: 2.3, repeat: Infinity }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Activity + Notifications row */}
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {/* Recent activity */}
                    <div className="bg-white/[0.015] border border-white/[0.04] rounded-xl p-3.5">
                      <div className={`flex items-center gap-1.5 mb-3 ${isAr ? "flex-row-reverse" : ""}`}>
                        <Users className="w-3 h-3 text-gray-500" />
                        <p className="text-[11px] text-gray-500 font-medium" style={font("body")}>
                          {isAr ? "النشاط الأخير" : "Recent Activity"}
                        </p>
                      </div>
                      <div className="space-y-2.5">
                        {t.activityUsers.map((user, i) => (
                          <motion.div
                            key={i}
                            className={`flex items-start gap-2 ${isAr ? "flex-row-reverse text-right" : ""}`}
                            initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.5 + i * 0.15 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 flex items-center justify-center mt-0.5 shrink-0">
                              <span className="text-[8px] text-white/70 font-bold">{user.name[0]}</span>
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] text-gray-300 truncate">
                                <span className="font-medium text-white/70">{user.name}</span>{" "}
                                <span className="text-gray-500">{user.action}</span>
                              </p>
                              <p className="text-[10px] text-gray-600">{user.time}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white/[0.015] border border-white/[0.04] rounded-xl p-3.5">
                      <div className={`flex items-center gap-1.5 mb-3 ${isAr ? "flex-row-reverse" : ""}`}>
                        <Bell className="w-3 h-3 text-gray-500" />
                        <p className="text-[11px] text-gray-500 font-medium" style={font("body")}>
                          {isAr ? "الإشعارات" : "Notifications"}
                        </p>
                      </div>
                      <div className="space-y-2.5">
                        {t.notifications.map((notif, i) => (
                          <motion.div
                            key={i}
                            className={`flex items-start gap-2 ${isAr ? "flex-row-reverse text-right" : ""}`}
                            initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.7 + i * 0.15 }}
                          >
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5 shrink-0">
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] text-gray-300 truncate">{notif.text}</p>
                              <p className="text-[10px] text-gray-600">{notif.time}</p>
                            </div>
                          </motion.div>
                        ))}
                        {/* Integration status */}
                        <motion.div
                          className={`flex items-center gap-2 mt-1 pt-2 border-t border-white/[0.04] ${isAr ? "flex-row-reverse" : ""}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 2 }}
                        >
                          <Plug className="w-3 h-3 text-indigo-400" />
                          <span className="text-[10px] text-gray-500" style={font("body")}>
                            {isAr ? "12 تكامل نشط" : "12 active integrations"}
                          </span>
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating cards ──────────────────── */}
              {t.floatingCards.map((card, i) => {
                const Icon = floatingIconMap[card.icon as keyof typeof floatingIconMap];
                const positions = [
                  { className: `absolute -top-6 ${isAr ? "-left-4 lg:-left-10" : "-right-4 lg:-right-10"}` },
                  { className: `absolute top-1/2 -translate-y-1/2 ${isAr ? "-right-4 lg:-right-12" : "-left-4 lg:-left-12"}` },
                  { className: `absolute -bottom-6 ${isAr ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"}` },
                ];
                return (
                  <motion.div
                    key={i}
                    className={`${positions[i].className} z-20`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      className={`bg-[#12131a]/90 backdrop-blur-xl border border-white/[0.08] rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.3)] ${isAr ? "text-right" : ""}`}
                      animate={{ y: [0, i % 2 === 0 ? -6 : -8, 0] }}
                      transition={{ duration: 4 + i, ease: "easeInOut", repeat: Infinity, delay: i * 0.5 }}
                    >
                      <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          i === 0 ? "bg-emerald-500/10" : i === 1 ? "bg-indigo-500/10" : "bg-cyan-500/10"
                        }`}>
                          <Icon className={`w-3.5 h-3.5 ${
                            i === 0 ? "text-emerald-400" : i === 1 ? "text-indigo-400" : "text-cyan-400"
                          }`} />
                        </div>
                        <div>
                          <p className="text-[11px] text-gray-500" style={font("body")}>{card.label}</p>
                          <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>{card.value}</p>
                        </div>
                      </div>
                      <p className={`text-[10px] text-gray-600 mt-1 ${isAr ? "text-right" : ""}`} style={font("body")}>{card.sub}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
