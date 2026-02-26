"use client";

/**
 * Pricing Template 11 — Badge Style
 * Each plan has a large badge/ribbon at the top corner. Highlighted plan badge in primary color.
 * Cards with generous padding. Bold price display.
 */

import { Check } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate11({ config, language }: BlockProps) {
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
              className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Corner Ribbon / Badge */}
              <div
                className={`absolute top-0 ${
                  isAr ? "left-0" : "right-0"
                } z-10`}
              >
                <div
                  className={`px-6 py-2 text-sm font-bold text-white ${
                    isAr
                      ? "rounded-br-2xl rounded-tl-2xl"
                      : "rounded-bl-2xl rounded-tr-2xl"
                  }`}
                  style={{
                    backgroundColor: plan.highlighted
                      ? "var(--theme-primary)"
                      : "#6B7280",
                  }}
                >
                  {plan.badge
                    ? isAr
                      ? plan.badgeAr || plan.badge
                      : plan.badge
                    : isAr
                      ? plan.nameAr
                      : plan.name}
                </div>
              </div>

              <div className="p-10 pt-16">
                <h3 className="text-xl font-bold text-gray-900">
                  {isAr ? plan.nameAr : plan.name}
                </h3>
                {plan.description && (
                  <p className="mt-2 text-sm text-gray-500">
                    {isAr
                      ? plan.descriptionAr || plan.description
                      : plan.description}
                  </p>
                )}

                <div className="mt-8 mb-8">
                  <span className="text-6xl font-extrabold text-gray-900">
                    {plan.priceMonthly === 0
                      ? isAr
                        ? "مجاني"
                        : "Free"
                      : plan.priceMonthly}
                  </span>
                  {plan.priceMonthly > 0 && (
                    <div className="mt-1">
                      <span className="text-sm text-gray-400">
                        {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="h-0.5 w-12 mb-8"
                  style={{
                    backgroundColor: plan.highlighted
                      ? "var(--theme-primary)"
                      : "#E5E7EB",
                  }}
                />

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {(isAr ? plan.featuresAr : plan.features).map(
                    (feature, fi) => (
                      <li
                        key={fi}
                        className={`flex items-start gap-3 ${
                          isAr ? "flex-row-reverse text-right" : ""
                        }`}
                      >
                        <Check
                          size={18}
                          className="shrink-0 mt-0.5"
                          style={{ color: "var(--theme-primary)" }}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "text-white hover:opacity-90 hover:shadow-lg"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
