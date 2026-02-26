"use client";

/**
 * Hero Template 06 — Search Bar Hero
 * Best for: Real Estate, Job Board, Directory, Travel, Marketplace
 * Features: Prominent search bar with category tabs, background image,
 *           trust badges, popular search suggestions
 */

import { Search, MapPin, Building2, Home, Briefcase } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { HeroConfig } from "./types";

export function HeroTemplate06({ config, language }: BlockProps) {
  const c = config as HeroConfig;
  const isAr = language === "ar";

  const defaultCategories = [
    { label: "All", labelAr: "الكل" },
    { label: "Buy", labelAr: "شراء" },
    { label: "Rent", labelAr: "إيجار" },
    { label: "Commercial", labelAr: "تجاري" },
  ];

  const categories = c.searchCategories || defaultCategories;

  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      {c.backgroundImage ? (
        <img
          src={c.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 90%, black) 0%, color-mix(in srgb, var(--theme-primary) 60%, #1e293b) 100%)`,
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: c.backgroundImage ? c.overlayOpacity / 100 : 0.3 }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="text-center">
          {/* Badge */}
          {c.badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/80 mb-8 border border-white/10">
              <MapPin size={14} />
              {isAr ? c.badge.textAr : c.badge.text}
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            {isAr ? c.headingAr : c.heading}
          </h1>

          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>

          {/* Search box */}
          <div className="mt-10 max-w-3xl mx-auto">
            {/* Category tabs */}
            <div className={`flex gap-1 mb-3 justify-center ${isAr ? "flex-row-reverse" : ""}`}>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    i === 0
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  {isAr ? cat.labelAr : cat.label}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative">
              <div className="flex items-center bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
                <div className={`flex-1 flex items-center gap-3 px-6 py-5 ${isAr ? "flex-row-reverse" : ""}`}>
                  <Search size={20} className="text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder={
                      isAr
                        ? c.searchPlaceholderAr || "ابحث عن موقع، نوع العقار..."
                        : c.searchPlaceholder || "Search by location, property type..."
                    }
                    className="flex-1 text-gray-900 placeholder:text-gray-400 focus:outline-none text-base bg-transparent"
                    dir={isAr ? "rtl" : "ltr"}
                  />
                </div>
                <button
                  className={`px-8 py-5 text-white font-semibold text-sm transition-all hover:opacity-90 shrink-0 ${
                    isAr ? "rounded-l-2xl" : "rounded-r-2xl"
                  }`}
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? "ابحث" : "Search"}
                </button>
              </div>
            </div>

            {/* Popular searches */}
            <div className={`mt-5 flex flex-wrap items-center justify-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="text-white/40 text-sm">{isAr ? "الأكثر بحثاً:" : "Popular:"}</span>
              {(isAr
                ? ["الرياض", "جدة", "شقق", "فلل"]
                : ["Riyadh", "Jeddah", "Apartments", "Villas"]
              ).map((tag, i) => (
                <button
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium text-white/60 border border-white/15 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          {c.stats && c.stats.length > 0 && (
            <div className="mt-16 flex items-center justify-center gap-8 sm:gap-14">
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                    {isAr ? stat.labelAr : stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
