"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate12({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Contact Info Row */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 ${
            isAr ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <Mail size={18} style={{ color: "var(--theme-primary)" }} />
            <span className="text-gray-600 font-medium">{c.email}</span>
          </div>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <Phone size={18} style={{ color: "var(--theme-primary)" }} />
            <span className="text-gray-600 font-medium" dir="ltr">
              {c.phone}
            </span>
          </div>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <MapPin size={18} style={{ color: "var(--theme-primary)" }} />
            <span className="text-gray-600 font-medium">
              {isAr ? c.addressAr : c.address}
            </span>
          </div>
        </div>

        {/* Full Width Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {c.formFields.map((field, i) => (
            <div key={i} className={isAr ? "text-right" : ""}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isAr ? field.labelAr : field.label}
                {field.required && (
                  <span className="text-red-500 ml-1">*</span>
                )}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={isAr ? field.placeholderAr : field.placeholder}
                  required={field.required}
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                  dir={isAr ? "rtl" : "ltr"}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={isAr ? field.placeholderAr : field.placeholder}
                  required={field.required}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  dir={field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-semibold hover:opacity-90 transition-all ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{ backgroundColor: "var(--theme-primary)" }}
          >
            <Send size={20} />
            {isAr ? c.submitTextAr : c.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
