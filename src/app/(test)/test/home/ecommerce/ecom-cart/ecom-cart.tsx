"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Smart Shopping",
    heading: "Your Cart, Your Style",
    description: "Add what you love, check out in seconds. Enjoy free shipping on orders over $50 with our seamless shopping experience.",
    cta: "Start Shopping",
    item1: "Premium Sneakers",
    item2: "Leather Wallet",
    item3: "Wireless Earbuds",
    price1: "$129",
    price2: "$49",
    price3: "$89",
    cartLabel: "Your Cart",
    total: "Total: $267",
  },
  ar: {
    badge: "تسوّق ذكي",
    heading: "سلّتك، أسلوبك",
    description: "أضف ما تحب واتمم الشراء في ثوانٍ. استمتع بالشحن المجاني للطلبات فوق ٢٠٠ ريال مع تجربة تسوّق سلسة.",
    cta: "ابدأ التسوّق",
    item1: "أحذية رياضية فاخرة",
    item2: "محفظة جلدية",
    item3: "سماعات لاسلكية",
    price1: "٤٨٩ ر.س",
    price2: "١٨٩ ر.س",
    price3: "٣٣٩ ر.س",
    cartLabel: "سلّتك",
    total: "المجموع: ١,٠١٧ ر.س",
  },
};

export function EcomCart({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  const items = [
    { name: t.item1, price: t.price1, color: "#10b981", delay: "0.6s" },
    { name: t.item2, price: t.price2, color: "#f59e0b", delay: "1.0s" },
    { name: t.item3, price: t.price3, color: "#6366f1", delay: "1.4s" },
  ];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111811 50%, #0a0a0a 100%)" }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: "50%",
          right: isRTL ? "auto" : "10%",
          left: isRTL ? "10%" : "auto",
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div className={`flex flex-col gap-6 ${isRTL ? "lg:order-2 text-right" : "lg:order-1 text-left"}`}>
          <div className={`flex ${isRTL ? "justify-end" : "justify-start"}`}>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                background: "rgba(16,185,129,0.1)",
                color: "#10b981",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              {t.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            {t.heading}
          </h1>

          <p className="text-lg leading-relaxed max-w-lg text-gray-400">
            {t.description}
          </p>

          <div className={`flex ${isRTL ? "justify-end" : "justify-start"} mt-2`}>
            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(16,185,129,0.3)",
              }}
            >
              <span>{t.cta}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Cart visual side */}
        <div className={`flex items-center justify-center ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative" style={{ width: 360, height: 420 }}>
            {/* Cart container */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(180deg, rgba(16,185,129,0.05) 0%, rgba(10,10,10,0.9) 100%)",
                border: "1px solid rgba(16,185,129,0.15)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                opacity: 0,
                animation: "cart-appear 0.6s ease-out 0.2s forwards",
              }}
            >
              {/* Cart header */}
              <div
                className="px-6 py-4 border-b flex items-center justify-between"
                style={{ borderColor: "rgba(16,185,129,0.1)" }}
              >
                <span className="text-white font-semibold text-sm">{t.cartLabel}</span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.15)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
              </div>

              {/* Cart items */}
              <div className="px-6 py-3 flex flex-col gap-3">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      opacity: 0,
                      animation: `item-bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.delay} forwards`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: `${item.color}20` }}
                    >
                      <div
                        className="w-6 h-6 rounded"
                        style={{ background: `${item.color}40`, border: `1px solid ${item.color}60` }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{item.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: item.color }}>{item.price}</p>
                    </div>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      1
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div
                className="mx-6 mt-2 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  opacity: 0,
                  animation: "cart-appear 0.5s ease-out 2.0s forwards",
                }}
              >
                <p className="text-emerald-400 font-bold text-center">{t.total}</p>
              </div>
            </div>

            {/* Floating price tags */}
            {[
              { x: -30, y: 60, rotate: -12, delay: "1.8s" },
              { x: 340, y: 140, rotate: 15, delay: "2.2s" },
              { x: -20, y: 300, rotate: -8, delay: "2.5s" },
            ].map((tag, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  left: tag.x,
                  top: tag.y,
                  background: "#10b981",
                  boxShadow: "0 0 12px rgba(16,185,129,0.4)",
                  opacity: 0,
                  animation: `float-tag 3s ease-in-out ${tag.delay} infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cart-appear {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes item-bounce-in {
          0% { opacity: 0; transform: translateX(${isRTL ? "40px" : "-40px"}) scale(0.8); }
          60% { opacity: 1; transform: translateX(${isRTL ? "-5px" : "5px"}) scale(1.05); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes float-tag {
          0%, 100% { opacity: 0.6; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
