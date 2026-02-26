"use client";

/**
 * Pricing Template 04 — Comparison Table
 * Feature comparison table with rows for features and columns for plans.
 * Checkmarks for included features, highlighted plan column has primary bg.
 */

import { Check, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate04({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

  // Collect all unique features across all plans
  const allFeatures = isAr
    ? Array.from(new Set(c.plans.flatMap((p) => p.featuresAr)))
    : Array.from(new Set(c.plans.flatMap((p) => p.features)));

  const allFeaturesOther = isAr
    ? Array.from(new Set(c.plans.flatMap((p) => p.features)))
    : Array.from(new Set(c.plans.flatMap((p) => p.featuresAr)));

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

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            {/* Plan Header Row */}
            <thead>
              <tr>
                <th
                  className={`p-4 text-sm font-medium text-gray-500 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {isAr ? "الميزات" : "Features"}
                </th>
                {c.plans.map((plan, i) => (
                  <th
                    key={i}
                    className={`p-4 text-center min-w-[160px] ${
                      plan.highlighted ? "text-white rounded-t-2xl" : ""
                    }`}
                    style={
                      plan.highlighted
                        ? { backgroundColor: "var(--theme-primary)" }
                        : {}
                    }
                  >
                    {plan.badge && plan.highlighted && (
                      <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-white/20 mb-2">
                        {isAr ? plan.badgeAr || plan.badge : plan.badge}
                      </span>
                    )}
                    <div
                      className={`text-lg font-bold ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {isAr ? plan.nameAr : plan.name}
                    </div>
                    <div className="mt-2">
                      <span
                        className={`text-3xl font-bold ${
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
                          {isAr ? c.currencyAr : c.currency}/
                          {isAr ? "شهر" : "mo"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature Rows */}
            <tbody>
              {allFeatures.map((feature, fi) => {
                const otherFeature = allFeaturesOther[fi] || feature;
                return (
                  <tr
                    key={fi}
                    className={fi % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td
                      className={`p-4 text-sm text-gray-700 ${
                        isAr ? "text-right" : "text-left"
                      }`}
                    >
                      {feature}
                    </td>
                    {c.plans.map((plan, pi) => {
                      const planFeatures = isAr
                        ? plan.featuresAr
                        : plan.features;
                      const hasFeature = planFeatures.includes(
                        isAr ? feature : feature
                      );

                      return (
                        <td
                          key={pi}
                          className={`p-4 text-center ${
                            plan.highlighted ? "bg-opacity-5" : ""
                          }`}
                          style={
                            plan.highlighted
                              ? {
                                  backgroundColor:
                                    "color-mix(in srgb, var(--theme-primary) 5%, transparent)",
                                }
                              : {}
                          }
                        >
                          {hasFeature ? (
                            <Check
                              size={20}
                              className="mx-auto"
                              style={{ color: "var(--theme-primary)" }}
                            />
                          ) : (
                            <X size={20} className="mx-auto text-gray-300" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            {/* CTA Row */}
            <tfoot>
              <tr>
                <td className="p-4" />
                {c.plans.map((plan, i) => (
                  <td
                    key={i}
                    className={`p-4 text-center ${
                      plan.highlighted ? "rounded-b-2xl" : ""
                    }`}
                    style={
                      plan.highlighted
                        ? {
                            backgroundColor:
                              "color-mix(in srgb, var(--theme-primary) 5%, transparent)",
                          }
                        : {}
                    }
                  >
                    <button
                      className={`w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 ${
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
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
