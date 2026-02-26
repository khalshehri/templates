"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate01({ config, language }: BlockProps) {
  const c = config as ContactConfig;
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

        <div className={`grid lg:grid-cols-5 gap-12 ${isAr ? "" : ""}`}>
          {/* Contact info */}
          <div className={`lg:col-span-2 space-y-8 ${isAr ? "text-right lg:order-2" : ""}`}>
            <div className={`flex items-start gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
              >
                <Mail size={20} style={{ color: "var(--theme-primary)" }} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</p>
                <p className="text-gray-500">{c.email}</p>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
              >
                <Phone size={20} style={{ color: "var(--theme-primary)" }} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{isAr ? "الهاتف" : "Phone"}</p>
                <p className="text-gray-500" dir="ltr">{c.phone}</p>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
              >
                <MapPin size={20} style={{ color: "var(--theme-primary)" }} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{isAr ? "العنوان" : "Address"}</p>
                <p className="text-gray-500">{isAr ? c.addressAr : c.address}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 ${isAr ? "lg:order-1" : ""}`}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {c.formFields.map((field, i) => (
                <div key={i} className={isAr ? "text-right" : ""}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isAr ? field.labelAr : field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={isAr ? field.placeholderAr : field.placeholder}
                      required={field.required}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      dir={isAr ? "rtl" : "ltr"}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={isAr ? field.placeholderAr : field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      dir={field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-200 ${
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
    </div>
  );
}
