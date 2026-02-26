import { z } from "zod";

export const heroConfigSchema = z.object({
  // Core content
  heading: z.string().default("Build Your Digital Presence"),
  headingAr: z.string().default("ابنِ حضورك الرقمي"),
  subheading: z
    .string()
    .default(
      "Create stunning websites in minutes with our powerful platform. No coding required."
    ),
  subheadingAr: z
    .string()
    .default(
      "أنشئ مواقع مذهلة في دقائق باستخدام منصتنا القوية. لا حاجة للبرمجة."
    ),

  // CTA buttons
  ctaPrimary: z
    .object({
      text: z.string().default("Get Started Free"),
      textAr: z.string().default("ابدأ مجاناً"),
      url: z.string().default("#contact"),
    })
    .default({ text: "Get Started Free", textAr: "ابدأ مجاناً", url: "#contact" }),
  ctaSecondary: z
    .object({
      text: z.string().default("Learn More"),
      textAr: z.string().default("اعرف المزيد"),
      url: z.string().default("#services"),
    })
    .optional(),

  // Media
  backgroundImage: z.string().optional(),
  overlayOpacity: z.number().min(0).max(100).default(50),
  personalPhoto: z.string().optional(),

  // Layout
  alignment: z.enum(["left", "center", "right"]).default("center"),

  // Badge
  badge: z
    .object({
      text: z.string().default("New Release"),
      textAr: z.string().default("إصدار جديد"),
    })
    .optional(),

  // Stats
  stats: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
        labelAr: z.string(),
      })
    )
    .optional(),

  // Highlighted word in heading (for gradient text effect)
  highlightedWord: z.string().optional(),
  highlightedWordAr: z.string().optional(),

  // Search bar (for real estate / directory hero)
  searchPlaceholder: z.string().optional(),
  searchPlaceholderAr: z.string().optional(),
  searchCategories: z
    .array(
      z.object({
        label: z.string(),
        labelAr: z.string(),
      })
    )
    .optional(),

  // Typed text animation (for personal/resume hero)
  typedTexts: z.array(z.string()).optional(),
  typedTextsAr: z.array(z.string()).optional(),

  // Social links (for personal hero)
  socials: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string(),
      })
    )
    .optional(),

  // Floating cards / metrics (for glassmorphism hero)
  floatingCards: z
    .array(
      z.object({
        icon: z.string().optional(),
        title: z.string(),
        titleAr: z.string(),
        value: z.string().optional(),
      })
    )
    .optional(),

  // Marquee words (for oversized scrolling text hero)
  marqueeWords: z.array(z.string()).optional(),
  marqueeWordsAr: z.array(z.string()).optional(),
});

export type HeroConfig = z.infer<typeof heroConfigSchema>;
