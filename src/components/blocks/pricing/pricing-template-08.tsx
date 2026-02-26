"use client";

/**
 * Pricing Template 08 — Enterprise Focus
 * Highlighted/enterprise plan is much larger (takes 50% width).
 * Side plans are smaller, creating visual hierarchy for the "recommended" plan.
 */

import { Check, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate08({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  const highlightedPlan = c.plans.find((p) => p.highlighted);
  const sidePlans = c.plans.filter((p) => !p.highlighted);

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

        {/* Plans Layout */}
        <div
          className={`flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto items-stretch ${
            isAr ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Side Plans */}
          <div className="flex flex-col gap-6 lg:w-1/4">
            {sidePlans.map((plan, i) => (
              <div
                key={i}
                className="flex-1 p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {isAr ? plan.nameAr : plan.name}
                </h3>
                {plan.description && (
                  <p className="mt-1 text-xs text-gray-500">
                    {isAr
                      ? plan.descriptionAr || plan.description
                      : plan.description}
                  </p>
                )}

                <div className="mt-4 mb-5">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.priceMonthly === 0
                      ? isAr
                        ? "مجاني"
                        : "Free"
                      : plan.priceMonthly}
                  </span>
                  {plan.priceMonthly > 0 && (
                    <span className="text-sm text-gray-400">
                      {" "}
                      {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {(isAr ? plan.featuresAr : plan.features)
                    .slice(0, 4)
                    .map((feature, fi) => (
                      <li
                        key={fi}
                        className={`flex items-start gap-2 text-xs ${
                          isAr ? "flex-row-reverse text-right" : ""
                        }`}
                      >
                        <Check
                          size={14}
                          className="shrink-0 mt-0.5"
                          style={{ color: "var(--theme-primary)" }}
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                </ul>

                <button
                  className="w-full py-2.5 px-4 rounded-xl font-medium text-sm border-2 transition-all hover:shadow-md"
                  style={{
                    borderColor: "var(--theme-primary)",
                    color: "var(--theme-primary)",
                  }}
                >
                  {isAr ? plan.ctaAr : plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Highlighted / Enterprise Plan */}
          {highlightedPlan && (
            <div
              className="lg:w-1/2 rounded-3xl p-10 border-2 shadow-xl relative"
              style={{ borderColor: "var(--theme-primary)" }}
            >
              {/* Badge */}
              {highlightedPlan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr
                    ? highlightedPlan.badgeAr || highlightedPlan.badge
                    : highlightedPlan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {isAr ? highlightedPlan.nameAr : highlightedPlan.name}
                </h3>
                {highlightedPlan.description && (
                  <p className="mt-2 text-gray-500">
                    {isAr
                      ? highlightedPlan.descriptionAr ||
                        highlightedPlan.description
                      : highlightedPlan.description}
                  </p>
                )}

                <div className="mt-6">
                  <span className="text-6xl font-bold text-gray-900">
                    {highlightedPlan.priceMonthly === 0
                      ? isAr
                        ? "مجاني"
                        : "Free"
                      : highlightedPlan.priceMonthly}
                  </span>
                  {highlightedPlan.priceMonthly > 0 && (
                    <span className="text-lg text-gray-400">
                      {" "}
                      {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {(isAr
                  ? highlightedPlan.featuresAr
                  : highlightedPlan.features
                ).map((feature, fi) => (
                  <li
                    key={fi}
                    className={`flex items-start gap-3 ${
                      isAr ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                      }}
                    >
                      <Check
                        size={14}
                        style={{ color: "var(--theme-primary)" }}
                      />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg inline-flex items-center justify-center gap-2 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? highlightedPlan.ctaAr : highlightedPlan.cta}
                <ArrowRight
                  size={18}
                  className={isAr ? "rotate-180" : ""}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
