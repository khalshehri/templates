"use client";

/**
 * Pricing Template 09 — Feature Checklist
 * Focus on features. Each feature row spans full width with plan columns.
 * Check/X icons for each plan. Alternating row colors. Sticky plan header row.
 */

import { Check, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate09({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  // Collect all unique features across all plans
  const allFeatures = isAr
    ? Array.from(new Set(c.plans.flatMap((p) => p.featuresAr)))
    : Array.from(new Set(c.plans.flatMap((p) => p.features)));

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Feature Checklist Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-white border-b-2 border-gray-200">
              <div className="grid" style={{ gridTemplateColumns: `2fr ${c.plans.map(() => "1fr").join(" ")}` }}>
                <div className="p-4" />
                {c.plans.map((plan, i) => (
                  <div
                    key={i}
                    className={`p-4 text-center ${
                      plan.highlighted ? "rounded-t-xl" : ""
                    }`}
                    style={
                      plan.highlighted
                        ? {
                            backgroundColor:
                              "color-mix(in srgb, var(--theme-primary) 8%, transparent)",
                          }
                        : {}
                    }
                  >
                    <div className="text-base font-bold text-gray-900">
                      {isAr ? plan.nameAr : plan.name}
                    </div>
                    <div className="mt-1">
                      <span className="text-2xl font-bold text-gray-900">
                        {plan.priceMonthly === 0
                          ? isAr
                            ? "مجاني"
                            : "Free"
                          : plan.priceMonthly}
                      </span>
                      {plan.priceMonthly > 0 && (
                        <span className="text-xs text-gray-400">
                          {" "}
                          {isAr ? c.currencyAr : c.currency}/
                          {isAr ? "شهر" : "mo"}
                        </span>
                      )}
                    </div>
                    {plan.badge && (
                      <span
                        className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: "var(--theme-primary)" }}
                      >
                        {isAr ? plan.badgeAr || plan.badge : plan.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Rows */}
            {allFeatures.map((feature, fi) => (
              <div
                key={fi}
                className={`grid ${
                  fi % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
                style={{ gridTemplateColumns: `2fr ${c.plans.map(() => "1fr").join(" ")}` }}
              >
                <div
                  className={`p-4 text-sm text-gray-700 font-medium flex items-center ${
                    isAr ? "justify-end text-right" : ""
                  }`}
                >
                  {feature}
                </div>
                {c.plans.map((plan, pi) => {
                  const planFeatures = isAr
                    ? plan.featuresAr
                    : plan.features;
                  const hasFeature = planFeatures.includes(feature);

                  return (
                    <div
                      key={pi}
                      className="p-4 flex items-center justify-center"
                      style={
                        plan.highlighted
                          ? {
                              backgroundColor:
                                "color-mix(in srgb, var(--theme-primary) 4%, transparent)",
                            }
                          : {}
                      }
                    >
                      {hasFeature ? (
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                          }}
                        >
                          <Check
                            size={16}
                            style={{ color: "var(--theme-primary)" }}
                          />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                          <X size={16} className="text-gray-300" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* CTA Row */}
            <div
              className="grid border-t-2 border-gray-200 pt-4"
              style={{ gridTemplateColumns: `2fr ${c.plans.map(() => "1fr").join(" ")}` }}
            >
              <div className="p-4" />
              {c.plans.map((plan, i) => (
                <div key={i} className="p-4 text-center">
                  <button
                    className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                      plan.highlighted
                        ? "text-white hover:opacity-90"
                        : "border-2 hover:shadow-md"
                    }`}
                    style={
                      plan.highlighted
                        ? { backgroundColor: "var(--theme-primary)" }
                        : {
                            borderColor: "var(--theme-primary)",
                            color: "var(--theme-primary)",
                          }
                    }
                  >
                    {isAr ? plan.ctaAr : plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
