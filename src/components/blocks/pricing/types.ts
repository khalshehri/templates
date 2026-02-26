import { z } from "zod";

export const pricingConfigSchema = z.object({
  heading: z.string().default("Simple, Transparent Pricing"),
  headingAr: z.string().default("أسعار بسيطة وشفافة"),
  subheading: z
    .string()
    .default("Choose the plan that's right for your business. No hidden fees."),
  subheadingAr: z
    .string()
    .default("اختر الخطة المناسبة لعملك. بدون رسوم مخفية."),
  currency: z.string().default("SAR"),
  currencyAr: z.string().default("ر.س"),
  billingToggle: z.boolean().default(true),
  plans: z
    .array(
      z.object({
        name: z.string(),
        nameAr: z.string(),
        description: z.string().optional(),
        descriptionAr: z.string().optional(),
        priceMonthly: z.number(),
        priceYearly: z.number().optional(),
        features: z.array(z.string()),
        featuresAr: z.array(z.string()),
        cta: z.string().default("Get Started"),
        ctaAr: z.string().default("ابدأ الآن"),
        highlighted: z.boolean().default(false),
        badge: z.string().optional(),
        badgeAr: z.string().optional(),
      })
    )
    .default([
      {
        name: "Starter",
        nameAr: "المبتدئ",
        description: "Perfect for individuals",
        descriptionAr: "مثالي للأفراد",
        priceMonthly: 0,
        priceYearly: 0,
        features: ["1 Website", "5 Pages", "Basic Templates", "Community Support"],
        featuresAr: ["موقع واحد", "5 صفحات", "قوالب أساسية", "دعم مجتمعي"],
        cta: "Start Free",
        ctaAr: "ابدأ مجاناً",
        highlighted: false,
      },
      {
        name: "Professional",
        nameAr: "الاحترافي",
        description: "Best for growing businesses",
        descriptionAr: "الأفضل للأعمال المتنامية",
        priceMonthly: 49,
        priceYearly: 490,
        features: [
          "5 Websites",
          "Unlimited Pages",
          "All Templates",
          "Priority Support",
          "Blog & CMS",
          "Analytics",
        ],
        featuresAr: [
          "5 مواقع",
          "صفحات غير محدودة",
          "جميع القوالب",
          "دعم أولوي",
          "مدونة ونظام محتوى",
          "تحليلات",
        ],
        cta: "Get Started",
        ctaAr: "ابدأ الآن",
        highlighted: true,
        badge: "Most Popular",
        badgeAr: "الأكثر شعبية",
      },
      {
        name: "Enterprise",
        nameAr: "المؤسسات",
        description: "For large organizations",
        descriptionAr: "للمؤسسات الكبيرة",
        priceMonthly: 149,
        priceYearly: 1490,
        features: [
          "Unlimited Websites",
          "Unlimited Pages",
          "All Templates",
          "24/7 Support",
          "Blog & CMS",
          "Advanced Analytics",
          "Custom Domain",
          "White Label",
        ],
        featuresAr: [
          "مواقع غير محدودة",
          "صفحات غير محدودة",
          "جميع القوالب",
          "دعم على مدار الساعة",
          "مدونة ونظام محتوى",
          "تحليلات متقدمة",
          "نطاق مخصص",
          "علامة بيضاء",
        ],
        cta: "Contact Sales",
        ctaAr: "تواصل معنا",
        highlighted: false,
      },
    ]),
});

export type PricingConfig = z.infer<typeof pricingConfigSchema>;
