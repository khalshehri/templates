"use client";

/**
 * Pricing Template 03 — Minimal Horizontal Cards
 * Clean horizontal layout, one card per row, focus on readability
 */

import { Check, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate03({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Stacked plan cards */}
        <div className="space-y-4">
          {c.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
                plan.highlighted ? "shadow-md" : "border-gray-100"
              }`}
              style={plan.highlighted ? { borderColor: "var(--theme-primary)" } : {}}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 px-3 py-0.5 rounded-full text-xs font-semibold text-white ${
                    isAr ? "right-6" : "left-6"
                  }`}
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? plan.badgeAr || plan.badge : plan.badge}
                </div>
              )}

              <div className={`flex flex-col sm:flex-row sm:items-center gap-6 ${isAr ? "sm:flex-row-reverse text-right" : ""}`}>
                {/* Plan info */}
                <div className="flex-1 min-w-0">
                  <div className={`flex items-baseline gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    <h3 className="text-xl font-bold text-gray-900">
                      {isAr ? plan.nameAr : plan.name}
                    </h3>
                    {plan.description && (
                      <span className="text-sm text-gray-400">
                        {isAr ? plan.descriptionAr || plan.description : plan.description}
                      </span>
                    )}
                  </div>

                  {/* Features as inline pills */}
                  <div className={`flex flex-wrap gap-2 mt-3 ${isAr ? "flex-row-reverse" : ""}`}>
                    {(isAr ? plan.featuresAr : plan.features).slice(0, 4).map((f, fi) => (
                      <span
                        key={fi}
                        className={`inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg ${
                          isAr ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Check size={12} style={{ color: "var(--theme-primary)" }} />
                        {f}
                      </span>
                    ))}
                    {(isAr ? plan.featuresAr : plan.features).length > 4 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{(isAr ? plan.featuresAr : plan.features).length - 4} {isAr ? "المزيد" : "more"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className={`flex items-center gap-5 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className={isAr ? "text-right" : ""}>
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.priceMonthly === 0 ? (isAr ? "مجاني" : "Free") : plan.priceMonthly}
                    </span>
                    {plan.priceMonthly > 0 && (
                      <span className="text-sm text-gray-400 ml-1">
                        {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                      </span>
                    )}
                  </div>

                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                      plan.highlighted
                        ? "text-white hover:opacity-90 hover:shadow-lg"
                        : "border-2 hover:shadow-md"
                    } ${isAr ? "flex-row-reverse" : ""}`}
                    style={
                      plan.highlighted
                        ? { backgroundColor: "var(--theme-primary)" }
                        : { borderColor: "var(--theme-primary)", color: "var(--theme-primary)" }
                    }
                  >
                    {isAr ? plan.ctaAr : plan.cta}
                    <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
