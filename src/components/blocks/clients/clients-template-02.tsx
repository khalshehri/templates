"use client";

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate02({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  // Double the items for seamless marquee
  const doubledItems = [...c.items, ...c.items];

  return (
    <div className="bg-gray-50 py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {isAr ? c.headingAr : c.heading}
          </h2>
          {(c.subheading || c.subheadingAr) && (
            <p className="mt-2 text-gray-500">
              {isAr ? c.subheadingAr : c.subheading}
            </p>
          )}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubledItems.map((client, i) => (
            <div
              key={i}
              className="flex-none mx-8 flex items-center justify-center"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 sm:h-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <div
                  className="px-8 py-4 rounded-xl border border-gray-200 bg-white"
                >
                  <span className="text-lg sm:text-xl font-bold text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee animation via inline style */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
