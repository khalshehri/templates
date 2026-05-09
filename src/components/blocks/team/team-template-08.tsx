"use client";

import type { BlockProps } from "@/types/blocks";
import type { TeamConfig } from "./types";

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
  };
  return icons[platform] || null;
}

export function TeamTemplate08({ config, language }: BlockProps) {
  const c = config as TeamConfig;
  const isAr = language === "ar";

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
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

        {/* Overlay Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.items.map((member, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Background Photo */}
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={isAr ? member.nameAr : member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
                  style={{
                    background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary, var(--theme-primary)))`,
                  }}
                >
                  {(isAr ? member.nameAr : member.name).charAt(0)}
                </div>
              )}

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16">
                <h3 className="text-white font-bold text-lg">
                  {isAr ? member.nameAr : member.name}
                </h3>
                <p className="text-white/70 text-sm mt-0.5">
                  {isAr ? member.roleAr : member.role}
                </p>
              </div>

              {/* Social icons on hover */}
              {member.socials && member.socials.length > 0 && (
                <div className={`absolute top-4 ${isAr ? "left-4" : "right-4"} flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {member.socials.map((social, si) => (
                    social && (
                    <a
                      key={si}
                      href={social.url || "#"}
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
