"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate07({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {isAr ? c.subheadingAr : c.subheading}
          </p>
        </div>

        {/* Map Embed */}
        {c.mapEmbed ? (
          <div
            className="w-full h-[350px] rounded-2xl overflow-hidden mb-8"
            dangerouslySetInnerHTML={{ __html: c.mapEmbed }}
          />
        ) : (
          <div className="w-full h-[200px] rounded-2xl bg-gray-100 flex items-center justify-center mb-8">
            <div className="text-center text-gray-400">
              <MapPin size={40} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">
                {isAr ? c.addressAr : c.address}
              </p>
            </div>
          </div>
        )}

        {/* Contact Info Strip */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 py-6 mb-8 rounded-xl ${
            isAr ? "flex-row-reverse" : ""
          }`}
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-primary) 5%, transparent)",
          }}
        >
          <div className={`flex items-center gap-2 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
            <Mail size={18} style={{ color: "var(--theme-primary)" }} />
            <span className="text-gray-700 font-medium">{c.email}</span>
          </div>
          <div className={`flex items-center gap-2 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
            <Phone size={18} style={{ color: "var(--theme-primary)" }} />
            <span className="text-gray-700 font-medium" dir="ltr">
              {c.phone}
            </span>
          </div>
          <div className={`flex items-center gap-2 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
            <MapPin size={18} style={{ color: "var(--theme-primary)" }} />
            <span className="text-gray-700 font-medium">
              {isAr ? c.addressAr : c.address}
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              {c.formFields
                .filter((f) => f.type !== "textarea")
                .map((field, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      dir={
                        field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"
                      }
                    />
                  </div>
                ))}
            </div>

            {c.formFields
              .filter((f) => f.type === "textarea")
              .map((field, i) => (
                <div key={i} className={isAr ? "text-right" : ""}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                    dir={isAr ? "rtl" : "ltr"}
                  />
                </div>
              ))}

            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-all ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              <Send size={18} />
              {isAr ? c.submitTextAr : c.submitText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
