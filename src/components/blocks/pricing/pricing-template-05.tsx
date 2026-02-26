"use client";

/**
 * Pricing Template 05 — Gradient Highlighted
 * Clean cards with highlighted plan having a gradient background (primary to secondary).
 * Others are white with border. Large price, feature list with checks, CTA buttons.
 */

import { Check } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate05({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {c.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-shadow duration-300 ${
                plan.highlighted
                  ? "text-white shadow-2xl"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              }`}
              style={
                plan.highlighted
                  ? {
                      backgroundImage:
                        "linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))",
                    }
                  : {}
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    plan.highlighted
                      ? "bg-white/20 text-white"
                      : "text-white"
                  }`}
                  style={
                    plan.highlighted
                      ? {}
                      : { backgroundColor: "var(--theme-primary)" }
                  }
                >
                  {isAr ? plan.badgeAr || plan.badge : plan.badge}
                </div>
              )}

              <h3
                className={`text-xl font-bold ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {isAr ? plan.nameAr : plan.name}
              </h3>
              {plan.description && (
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {isAr
                    ? plan.descriptionAr || plan.description
                    : plan.description}
                </p>
              )}

              <div className="mt-6 mb-8">
                <span
                  className={`text-5xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.priceMonthly === 0
                    ? isAr
                      ? "مجاني"
                      : "Free"
                    : plan.priceMonthly}
                </span>
                {plan.priceMonthly > 0 && (
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {" "}
                    {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {(isAr ? plan.featuresAr : plan.features).map((feature, fi) => (
                  <li
                    key={fi}
                    className={`flex items-start gap-3 ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <Check
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : ""
                      }`}
                      style={
                        plan.highlighted
                          ? {}
                          : { color: "var(--theme-primary)" }
                      }
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-white hover:bg-white/90"
                    : "text-white hover:opacity-90"
                }`}
                style={
                  plan.highlighted
                    ? { color: "var(--theme-primary)" }
                    : { backgroundColor: "var(--theme-primary)" }
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
