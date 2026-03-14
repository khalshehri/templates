"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, BarChart3, Globe } from "lucide-react";

/* ── Types ─────────────────────────────────────── */
interface Hero01Props {
  language: "en" | "ar";
}

/* ── Content ───────────────────────────────────── */
const content = {
  en: {
    badge: "Trusted by 10,000+ Companies Worldwide",
    headline: "Build Smarter Digital Solutions for Modern Businesses",
    sub: "Powerful tools and scalable technology to accelerate your company's growth. Transform how you work, collaborate, and deliver value.",
    cta1: "Get Started",
    cta2: "Book a Demo",
    trust: "Trusted by industry leaders",
    stats: [
      { value: 10000, suffix: "+", label: "Companies" },
      { value: 99.9, suffix: "%", label: "Uptime", decimal: true },
      { value: 150, suffix: "+", label: "Countries" },
      { value: 4.9, suffix: "/5", label: "Rating", decimal: true },
    ],
    cards: [
      { icon: "shield", title: "Enterprise Security", desc: "SOC 2 & ISO 27001 certified" },
      { icon: "zap", title: "Lightning Fast", desc: "50ms avg response time" },
      { icon: "chart", title: "Real-time Analytics", desc: "Live dashboards & insights" },
      { icon: "globe", title: "Global CDN", desc: "Edge nodes in 40+ regions" },
    ],
    logos: ["Microsoft", "Google", "Stripe", "Shopify", "Slack"],
  },
  ar: {
    badge: "موثوق من قبل +10,000 شركة حول العالم",
    headline: "ابنِ حلولاً رقمية ذكية للأعمال الحديثة",
    sub: "أدوات قوية وتقنيات قابلة للتوسع لتسريع نمو شركتك. غيّر طريقة عملك وتعاونك وتقديم القيمة.",
    cta1: "ابدأ الآن",
    cta2: "احجز عرضاً",
    trust: "موثوق من قادة الصناعة",
    stats: [
      { value: 10000, suffix: "+", label: "شركة" },
      { value: 99.9, suffix: "%", label: "وقت التشغيل", decimal: true },
      { value: 150, suffix: "+", label: "دولة" },
      { value: 4.9, suffix: "/5", label: "التقييم", decimal: true },
    ],
    cards: [
      { icon: "shield", title: "أمان المؤسسات", desc: "معتمد SOC 2 و ISO 27001" },
      { icon: "zap", title: "سرعة فائقة", desc: "50 مللي ثانية متوسط الاستجابة" },
      { icon: "chart", title: "تحليلات فورية", desc: "لوحات تحكم ورؤى مباشرة" },
      { icon: "globe", title: "شبكة عالمية", desc: "نقاط في +40 منطقة" },
    ],
    logos: ["Microsoft", "Google", "Stripe", "Shopify", "Slack"],
  },
};

/* ── Icon map ──────────────────────────────────── */
const iconMap = {
  shield: Shield,
  zap: Zap,
  chart: BarChart3,
  globe: Globe,
};

/* ── Floating particles (deterministic) ────────── */
const particles = [
  { x: 8, y: 12, size: 4, delay: 0, duration: 18 },
  { x: 92, y: 8, size: 3, delay: 2, duration: 22 },
  { x: 15, y: 85, size: 5, delay: 4, duration: 20 },
  { x: 88, y: 78, size: 3, delay: 1, duration: 24 },
  { x: 45, y: 6, size: 4, delay: 3, duration: 19 },
  { x: 72, y: 92, size: 3, delay: 5, duration: 21 },
  { x: 28, y: 45, size: 2, delay: 2.5, duration: 23 },
  { x: 65, y: 35, size: 2, delay: 1.5, duration: 17 },
  { x: 38, y: 72, size: 3, delay: 3.5, duration: 25 },
  { x: 82, y: 55, size: 2, delay: 0.5, duration: 20 },
  { x: 52, y: 18, size: 3, delay: 4.5, duration: 22 },
  { x: 18, y: 62, size: 2, delay: 2, duration: 16 },
];

/* ── Count-up hook ─────────────────────────────── */
function useCountUp(target: number, decimal?: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, decimal]);
  return decimal ? value.toFixed(1) : value.toLocaleString();
}

/* ── Stat component ────────────────────────────── */
function StatItem({ value, suffix, label, decimal, lang }: {
  value: number; suffix: string; label: string; decimal?: boolean; lang: "en" | "ar";
}) {
  const display = useCountUp(value, decimal);
  return (
    <div className="text-center">
      <div
        className="text-2xl md:text-3xl font-bold text-white"
        style={{ fontFamily: lang === "ar" ? "var(--font-changa)" : "var(--font-inter)" }}
      >
        {display}{suffix}
      </div>
      <div
        className="text-sm text-indigo-200/70 mt-1"
        style={{ fontFamily: lang === "ar" ? "var(--font-tajawal)" : "var(--font-inter)" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Framer variants ───────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardFloat = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
  },
};

const cardFloat2 = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 },
  },
};

/* ── Main Component ────────────────────────────── */
export function Hero01({ language }: Hero01Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}
    >
      {/* ── Animated background ──────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a]" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[160px]"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          top: "-10%",
          left: isAr ? "auto" : "-5%",
          right: isAr ? "-5%" : "auto",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          bottom: "5%",
          right: isAr ? "auto" : "10%",
          left: isAr ? "10%" : "auto",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-400/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content ──────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-20 ${isAr ? "lg:grid-flow-col-dense" : ""}`}>

          {/* Left / Content side */}
          <motion.div
            className={`${isAr ? "lg:col-start-2 text-right" : "text-left"}`}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className={`inline-flex items-center gap-2 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span
                className="text-sm text-indigo-200/80 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-sm"
                style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}
              >
                {t.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)" }}
            >
              {isAr ? (
                <>
                  ابنِ حلولاً رقمية{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    ذكية
                  </span>{" "}
                  للأعمال الحديثة
                </>
              ) : (
                <>
                  Build Smarter{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital Solutions
                  </span>{" "}
                  for Modern Businesses
                </>
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-slate-300/80 max-w-xl leading-relaxed"
              style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}
            >
              {t.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className={`mt-10 flex flex-wrap gap-4 ${isAr ? "justify-end" : "justify-start"}`}
            >
              {/* Primary CTA */}
              <button
                className={`group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}
              >
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </button>

              {/* Secondary CTA */}
              <button
                className={`group inline-flex items-center gap-2 px-8 py-4 border border-white/[0.12] text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.2] backdrop-blur-sm active:scale-[0.98] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}
              >
                <Play className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isAr ? "order-last" : ""}`} />
                {t.cta2}
              </button>
            </motion.div>

            {/* Trust logos */}
            <motion.div variants={fadeUp} className="mt-12">
              <p className="text-xs text-slate-400/60 uppercase tracking-widest mb-4" style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}>
                {t.trust}
              </p>
              <div className={`flex items-center gap-8 flex-wrap ${isAr ? "justify-end" : "justify-start"}`}>
                {t.logos.map((logo) => (
                  <span
                    key={logo}
                    className="text-sm font-semibold text-slate-500/40 tracking-wide transition-all duration-300 hover:text-slate-400/70 cursor-pointer"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right / Visual side */}
          <motion.div
            className={`relative ${isAr ? "lg:col-start-1" : ""}`}
            variants={fadeScale}
            initial="hidden"
            animate="show"
          >
            {/* Glow behind cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-violet-600/5 to-transparent rounded-3xl blur-3xl" />

            {/* Main dashboard card */}
            <motion.div
              className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-2xl"
              variants={cardFloat}
              animate="animate"
            >
              {/* Card header */}
              <div className={`flex items-center justify-between mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div className={isAr ? "text-right" : ""}>
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)" }}>
                      {isAr ? "لوحة التحليلات" : "Analytics Dashboard"}
                    </p>
                    <p className="text-xs text-slate-400" style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}>
                      {isAr ? "مباشر" : "Live"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              {/* Chart bars */}
              <div className={`flex items-end gap-2 h-40 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
                {[65, 45, 80, 55, 92, 70, 85, 60, 95, 48, 78, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-600/60 to-violet-500/40 border border-white/[0.06]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      height: `${h}%`,
                      transformOrigin: "bottom",
                    }}
                  />
                ))}
              </div>

              {/* Stats row */}
              <div className={`grid grid-cols-3 gap-4 ${isAr ? "direction-rtl" : ""}`}>
                {[
                  { label: isAr ? "الإيرادات" : "Revenue", val: "$4.2M", change: "+24%", up: true },
                  { label: isAr ? "المستخدمون" : "Users", val: "12.8K", change: "+18%", up: true },
                  { label: isAr ? "التحويل" : "Conversion", val: "3.2%", change: "+7%", up: true },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`bg-white/[0.03] rounded-xl p-3 border border-white/[0.05] ${isAr ? "text-right" : ""}`}
                  >
                    <p className="text-xs text-slate-400 mb-1" style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}>
                      {stat.label}
                    </p>
                    <p className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-inter)" }}>
                      {stat.val}
                    </p>
                    <p className="text-xs text-emerald-400 mt-0.5">
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating feature cards */}
            <motion.div
              className={`absolute -bottom-4 ${isAr ? "-right-4 md:-right-8" : "-left-4 md:-left-8"} bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-xl p-4 shadow-xl`}
              variants={cardFloat2}
              animate="animate"
              initial={{ opacity: 0, x: isAr ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div className={isAr ? "text-right" : ""}>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)" }}>
                    {isAr ? "أمان المؤسسات" : "Enterprise Secure"}
                  </p>
                  <p className="text-xs text-slate-400" style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}>
                    {isAr ? "معتمد SOC 2" : "SOC 2 Certified"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`absolute -top-4 ${isAr ? "-left-4 md:-left-8" : "-right-4 md:-right-8"} bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-xl p-4 shadow-xl`}
              variants={cardFloat}
              animate="animate"
              initial={{ opacity: 0, x: isAr ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-violet-400" />
                </div>
                <div className={isAr ? "text-right" : ""}>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)" }}>
                    {isAr ? "أداء فائق" : "Blazing Fast"}
                  </p>
                  <p className="text-xs text-slate-400" style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}>
                    {isAr ? "50 مللي ثانية" : "50ms Response"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom stats bar ─────────────────────── */}
      <motion.div
        className="relative z-10 border-t border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${isAr ? "direction-rtl" : ""}`}>
            {t.stats.map((stat, i) => (
              <StatItem
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimal={stat.decimal}
                lang={language}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Feature cards row ────────────────────── */}
      <motion.div
        className="relative z-10 border-t border-white/[0.04]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.cards.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={i}
                  className={`group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-5 cursor-pointer transition-all duration-300 ${isAr ? "text-right" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <p
                    className="text-sm font-semibold text-white mb-1"
                    style={{ fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-xs text-slate-400"
                    style={{ fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)" }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
