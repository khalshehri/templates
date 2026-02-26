"use client";

import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate02({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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

        {/* Contact cards row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: Mail,
              label: isAr ? "البريد الإلكتروني" : "Email",
              value: c.email,
            },
            {
              icon: Phone,
              label: isAr ? "الهاتف" : "Phone",
              value: c.phone,
              dir: "ltr",
            },
            {
              icon: MapPin,
              label: isAr ? "العنوان" : "Address",
              value: isAr ? c.addressAr : c.address,
            },
          ].map((info, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}
              >
                <info.icon size={20} style={{ color: "var(--theme-primary)" }} />
              </div>
              <p className="text-sm text-gray-500 mb-1">{info.label}</p>
              <p className="font-medium text-gray-900 text-sm" dir={info.dir}>
                {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form + Map split */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className={`bg-white p-8 rounded-2xl border border-gray-100 ${isAr ? "lg:order-2" : ""}`}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.formFields
                  .filter((f) => f.type !== "textarea")
                  .map((field, i) => (
                    <div key={i} className={isAr ? "text-right" : ""}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {isAr ? field.labelAr : field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={isAr ? field.placeholderAr : field.placeholder}
                        required={field.required}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        dir={field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"}
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
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <textarea
                      name={field.name}
                      placeholder={isAr ? field.placeholderAr : field.placeholder}
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

          {/* Map placeholder */}
          <div className={`${isAr ? "lg:order-1" : ""}`}>
            {c.mapEmbed ? (
              <div
                className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                dangerouslySetInnerHTML={{ __html: c.mapEmbed }}
              />
            ) : (
              <div className="w-full h-full min-h-[400px] rounded-2xl bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-3 opacity-40" />
                  <p className="text-sm font-medium">{isAr ? "خريطة الموقع" : "Map Location"}</p>
                  <p className="text-xs mt-1">{isAr ? c.addressAr : c.address}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
