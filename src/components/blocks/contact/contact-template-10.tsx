"use client";

import { Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate10({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  return (
    <div
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 20%, transparent), color-mix(in srgb, var(--theme-secondary, var(--theme-primary)) 10%, transparent))",
      }}
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-xl border border-white/60">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {c.formFields.map((field, i) => (
              <div key={i} className={isAr ? "text-right" : ""}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {isAr ? field.labelAr : field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={
                      isAr ? field.placeholderAr : field.placeholder
                    }
                    required={field.required}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/70 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                    dir={isAr ? "rtl" : "ltr"}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={
                      isAr ? field.placeholderAr : field.placeholder
                    }
                    required={field.required}
                    className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/70 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all backdrop-blur-sm"
                    dir={field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              <Send size={18} />
              {isAr ? c.submitTextAr : c.submitText}
            </button>
          </form>
        </div>

        {/* Contact info below */}
        <div className="mt-8 text-center text-sm text-gray-600 space-y-1">
          <p>{c.email}</p>
          <p dir="ltr">{c.phone}</p>
          <p>{isAr ? c.addressAr : c.address}</p>
        </div>
      </div>
    </div>
  );
}
