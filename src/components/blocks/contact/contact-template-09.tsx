"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { ContactConfig } from "./types";

export function ContactTemplate09({ config, language }: BlockProps) {
  const c = config as ContactConfig;
  const isAr = language === "ar";

  const contactCards = [
    {
      icon: Mail,
      label: isAr ? "البريد الإلكتروني" : "Email",
      value: c.email,
      sublabel: isAr ? "راسلنا في أي وقت" : "Write to us anytime",
    },
    {
      icon: Phone,
      label: isAr ? "الهاتف" : "Phone",
      value: c.phone,
      sublabel: isAr ? "اتصل بنا مباشرة" : "Call us directly",
      dir: "ltr" as const,
    },
    {
      icon: MapPin,
      label: isAr ? "العنوان" : "Address",
      value: isAr ? c.addressAr : c.address,
      sublabel: isAr ? "قم بزيارتنا" : "Visit our office",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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

        {/* Large Contact Cards */}
        <div className="space-y-4 mb-14">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className={`flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all ${
                isAr ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                }}
              >
                <card.icon
                  size={24}
                  style={{ color: "var(--theme-primary)" }}
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                  {card.label}
                </p>
                <p
                  className="text-lg font-semibold text-gray-900"
                  dir={card.dir}
                >
                  {card.value}
                </p>
                <p className="text-sm text-gray-400 mt-0.5">{card.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <h3 className={`text-xl font-bold text-gray-900 mb-6 ${isAr ? "text-right" : ""}`}>
            {isAr ? "أرسل لنا رسالة" : "Send us a message"}
          </h3>
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
                    dir={field.type === "tel" ? "ltr" : isAr ? "rtl" : "ltr"}
                  />
                )}
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
