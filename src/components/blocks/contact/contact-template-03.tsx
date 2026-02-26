"use client";

/**
 * Contact Template 03 — Centered Minimal Form
 * Clean, centered single-column form with floating labels feel
 */

import { Send, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate03({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 15%, transparent)" }}
          >
            <Send size={20} style={{ color: "var(--theme-primary)" }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-3 text-white/50 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {c.formFields.map((field, i) => (
            <div key={i}>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={isAr ? field.placeholderAr || field.labelAr : field.placeholder || field.label}
                  required={field.required}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                  dir={isAr ? "rtl" : "ltr"}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={isAr ? field.placeholderAr || field.labelAr : field.placeholder || field.label}
                  required={field.required}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  dir={field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className={`w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:opacity-90 hover:shadow-2xl mt-2 ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{ backgroundColor: "var(--theme-primary)" }}
          >
            {isAr ? c.submitTextAr : c.submitText}
            <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
          </button>
        </form>

        {/* Contact details below */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
          <span>{c.email}</span>
          <span dir="ltr">{c.phone}</span>
          <span>{isAr ? c.addressAr : c.address}</span>
        </div>
      </div>
    </div>
  );
}
