"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { PricingConfig } from "./types";

export function PricingTemplate02({ config, language }: BlockProps) {
  const c = config as PricingConfig;
  const isAr = language === "ar";
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Billing Toggle */}
        {c.billingToggle && (
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-400"}`}>
              {isAr ? "شهري" : "Monthly"}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full transition-colors duration-300"
              style={{ backgroundColor: isYearly ? "var(--theme-primary)" : "#D1D5DB" }}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  isYearly ? "translate-x-7" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-400"}`}>
              {isAr ? "سنوي" : "Yearly"}
            </span>
            {isYearly && (
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: "var(--theme-accent, #F59E0B)" }}
              >
                {isAr ? "وفّر 20%" : "Save 20%"}
              </span>
            )}
          </div>
        )}

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {c.plans.map((plan, i) => {
            const price = isYearly && plan.priceYearly != null
              ? Math.round(plan.priceYearly / 12)
              : plan.priceMonthly;

            return (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? "shadow-2xl ring-2 ring-blue-500"
                    : "bg-white shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Highlighted header band */}
                {plan.highlighted && (
                  <div
                    className="py-2 text-center text-sm font-semibold text-white"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {isAr ? plan.badgeAr || "الأكثر شعبية" : plan.badge || "Most Popular"}
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? "bg-white" : ""}`}>
                  <h3 className="text-xl font-bold text-gray-900">
                    {isAr ? plan.nameAr : plan.name}
                  </h3>
                  {plan.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {isAr ? plan.descriptionAr || plan.description : plan.description}
                    </p>
                  )}

                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-bold text-gray-900">
                      {price === 0 ? (isAr ? "مجاني" : "Free") : price}
                    </span>
                    {price > 0 && (
                      <span className="text-gray-500 text-base ml-1">
                        {isAr ? c.currencyAr : c.currency}/{isAr ? "شهر" : "mo"}
                      </span>
                    )}
                    {isYearly && plan.priceYearly != null && price > 0 && (
                      <p className="text-xs text-gray-400 mt-1">
                        {isAr
                          ? `يُدفع ${plan.priceYearly} ${c.currencyAr}/سنة`
                          : `Billed ${plan.priceYearly} ${c.currency}/year`}
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
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

                  {/* Features */}
                  <ul className="mt-8 space-y-3">
                    {(isAr ? plan.featuresAr : plan.features).map((feature, fi) => (
                      <li key={fi} className={`flex items-start gap-3 ${isAr ? "flex-row-reverse text-right" : ""}`}>
                        <Check size={16} className="shrink-0 mt-0.5 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
