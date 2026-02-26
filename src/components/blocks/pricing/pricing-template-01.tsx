"use client";

import { Check } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate01({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";

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

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {c.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl border-2 transition-shadow duration-300 ${
                plan.highlighted
                  ? "border-current shadow-xl scale-[1.02]"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
              }`}
              style={plan.highlighted ? { borderColor: "var(--theme-primary)" } : {}}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? plan.badgeAr || plan.badge : plan.badge}
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isAr ? plan.nameAr : plan.name}
                </h3>
                {plan.description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {isAr ? plan.descriptionAr || plan.description : plan.description}
                  </p>
                )}

                <div className="mt-6 mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.priceMonthly === 0
                      ? isAr ? "مجاني" : "Free"
                      : plan.priceMonthly}
                  </span>
                  {plan.priceMonthly > 0 && (
                    <span className="text-gray-500 text-sm">
                      {" "}{isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {(isAr ? plan.featuresAr : plan.features).map((feature, fi) => (
                  <li key={fi} className={`flex items-start gap-3 ${isAr ? "flex-row-reverse text-right" : ""}`}>
                    <Check size={18} className="shrink-0 mt-0.5" style={{ color: "var(--theme-primary)" }} />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "text-white hover:opacity-90"
                    : "border-2 hover:shadow-md"
                }`}
                style={
                  plan.highlighted
                    ? { backgroundColor: "var(--theme-primary)" }
                    : { borderColor: "var(--theme-primary)", color: "var(--theme-primary)" }
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
