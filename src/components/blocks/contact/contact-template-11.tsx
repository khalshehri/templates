"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate11({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  const nonTextareaFields = c.formFields.filter((f) => f.type !== "textarea");
  const textareaFields = c.formFields.filter((f) => f.type === "textarea");

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

        {/* Inline Row: Info + Form */}
        <div
          className={`grid lg:grid-cols-5 gap-10 items-start ${isAr ? "" : ""}`}
        >
          {/* Contact Info — Compact */}
          <div
            className={`lg:col-span-2 space-y-6 ${
              isAr ? "text-right lg:order-2" : ""
            }`}
          >
            <div
              className={`flex items-center gap-3 ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                }}
              >
                <Mail size={18} style={{ color: "var(--theme-primary)" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {isAr ? "البريد" : "Email"}
                </p>
                <p className="text-sm font-medium text-gray-900">{c.email}</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                }}
              >
                <Phone size={18} style={{ color: "var(--theme-primary)" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {isAr ? "الهاتف" : "Phone"}
                </p>
                <p className="text-sm font-medium text-gray-900" dir="ltr">
                  {c.phone}
                </p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                }}
              >
                <MapPin size={18} style={{ color: "var(--theme-primary)" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {isAr ? "العنوان" : "Address"}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {isAr ? c.addressAr : c.address}
                </p>
              </div>
            </div>
          </div>

          {/* Compact Form */}
          <div className={`lg:col-span-3 ${isAr ? "lg:order-1" : ""}`}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* 2-column grid for short fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                {nonTextareaFields.map((field, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {isAr ? field.labelAr : field.label}
                      {field.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={
                        isAr ? field.placeholderAr : field.placeholder
                      }
                      required={field.required}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      dir={
                        field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Textarea fields full width */}
              {textareaFields.map((field, i) => (
                <div key={i} className={isAr ? "text-right" : ""}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {isAr ? field.labelAr : field.label}
                    {field.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  <textarea
                    name={field.name}
                    placeholder={
                      isAr ? field.placeholderAr : field.placeholder
                    }
                    required={field.required}
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                    dir={isAr ? "rtl" : "ltr"}
                  />
                </div>
              ))}

              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-all ${
                  isAr ? "flex-row-reverse" : ""
                }`}
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                <Send size={16} />
                {isAr ? c.submitTextAr : c.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
