import { z } from "zod";

export const featuresConfigSchema = z.object({
  heading: z.string().default("Everything You Need"),
  headingAr: z.string().default("كل ما تحتاجه"),
  subheading: z
    .string()
    .default("Powerful features to help you grow your business online"),
  subheadingAr: z
    .string()
    .default("ميزات قوية لمساعدتك في تنمية أعمالك عبر الإنترنت"),
  items: z
    .array(
      z.object({
        icon: z.string().default("zap"),
        title: z.string(),
        titleAr: z.string(),
        description: z.string(),
        descriptionAr: z.string(),
      })
    )
    .default([
      {
        icon: "zap",
        title: "Lightning Fast",
        titleAr: "سرعة البرق",
        description:
          "Optimized for speed with instant page loads and smooth interactions.",
        descriptionAr:
          "محسّن للسرعة مع تحميل فوري للصفحات وتفاعلات سلسة.",
      },
      {
        icon: "shield",
        title: "Secure by Default",
        titleAr: "آمن بشكل افتراضي",
        description:
          "Enterprise-grade security with SSL, DDoS protection, and encrypted data.",
        descriptionAr:
          "أمان على مستوى المؤسسات مع SSL وحماية DDoS وبيانات مشفرة.",
      },
      {
        icon: "globe",
        title: "Global CDN",
        titleAr: "شبكة عالمية",
        description:
          "Content delivered from edge locations worldwide for minimal latency.",
        descriptionAr:
          "المحتوى يُقدَّم من مواقع حافة حول العالم لأقل تأخير.",
      },
      {
        icon: "palette",
        title: "Beautiful Design",
        titleAr: "تصميم جميل",
        description:
          "Professional templates crafted by expert designers for every industry.",
        descriptionAr:
          "قوالب احترافية صممها خبراء لكل صناعة.",
      },
      {
        icon: "smartphone",
        title: "Mobile Responsive",
        titleAr: "متجاوب مع الموبايل",
        description:
          "Perfect experience on every device, from phone to desktop.",
        descriptionAr:
          "تجربة مثالية على كل جهاز، من الهاتف إلى الحاسوب.",
      },
      {
        icon: "headphones",
        title: "24/7 Support",
        titleAr: "دعم على مدار الساعة",
        description:
          "Our support team is always available to help you succeed.",
        descriptionAr:
          "فريق الدعم لدينا متاح دائماً لمساعدتك على النجاح.",
      },
    ]),
});

export type FeaturesConfig = z.infer<typeof featuresConfigSchema>;
