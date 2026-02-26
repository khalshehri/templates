"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate05({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  const contactInfo = [
    {
      icon: Mail,
      label: isAr ? "البريد الإلكتروني" : "Email",
      value: c.email,
    },
    {
      icon: Phone,
      label: isAr ? "الهاتف" : "Phone",
      value: c.phone,
      dir: "ltr" as const,
    },
    {
      icon: MapPin,
      label: isAr ? "العنوان" : "Address",
      value: isAr ? c.addressAr : c.address,
    },
  ];

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

        {/* Split Screen */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${isAr ? "" : ""}`}>
          {/* Left — Contact Info */}
          <div className={`space-y-10 ${isAr ? "lg:order-2 text-right" : ""}`}>
            <div>
              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ color: "var(--theme-primary)" }}
              >
                {isAr ? "معلومات التواصل" : "Contact Information"}
              </h3>
              <p className="text-gray-500 text-sm">
                {isAr
                  ? "يسعدنا تواصلك معنا في أي وقت"
                  : "We would love to hear from you anytime"}
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                  }}
                >
                  <info.icon
                    size={22}
                    style={{ color: "var(--theme-primary)" }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {info.label}
                  </p>
                  <p className="text-gray-500" dir={info.dir}>
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <div className={isAr ? "lg:order-1" : ""}>
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      dir={
                        field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"
                      }
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-all ${
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
