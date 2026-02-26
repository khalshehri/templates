"use client";

/**
 * Pricing Template 12 — Compact Cards
 * Smaller, compact cards. 3 cards in a row even on medium screens.
 * Less padding. Price prominent. Features as pills/badges instead of list. Dense but clear.
 */

import { Check } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate12({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-3 gap-4">
          {c.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-xl p-5 border-2 transition-all duration-300 ${
                plan.highlighted
                  ? "shadow-lg"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-md"
              }`}
              style={
                plan.highlighted
                  ? { borderColor: "var(--theme-primary)" }
                  : {}
              }
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-semibold text-white mb-3"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? plan.badgeAr || plan.badge : plan.badge}
                </span>
              )}

              <div className={`${isAr ? "text-right" : ""}`}>
                <h3 className="text-sm font-semibold text-gray-900">
                  {isAr ? plan.nameAr : plan.name}
                </h3>

                <div className="mt-3 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.priceMonthly === 0
                      ? isAr
                        ? "مجاني"
                        : "Free"
                      : plan.priceMonthly}
                  </span>
                  {plan.priceMonthly > 0 && (
                    <span className="text-xs text-gray-400">
                      {" "}
                      {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                    </span>
                  )}
                </div>
              </div>

              {/* Features as Pills */}
              <div
                className={`flex flex-wrap gap-1.5 mb-5 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                {(isAr ? plan.featuresAr : plan.features).map((feature, fi) => (
                  <span
                    key={fi}
                    className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-primary) 8%, transparent)",
                      color: "var(--theme-primary)",
                    }}
                  >
                    <Check size={10} className="shrink-0" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`w-full py-2.5 px-4 rounded-lg font-medium text-xs transition-all duration-200 ${
                  plan.highlighted
                    ? "text-white hover:opacity-90"
                    : "border hover:shadow-sm"
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
  );
}
