import { z } from "zod";

export const ctaConfigSchema = z.object({
  heading: z.string().default("Ready to Get Started?"),
  headingAr: z.string().default("هل أنت مستعد للبدء؟"),
  description: z
    .string()
    .default("Join thousands of businesses that trust us. Start building your website today."),
  descriptionAr: z
    .string()
    .default("انضم إلى آلاف الشركات التي تثق بنا. ابدأ بناء موقعك اليوم."),
  buttonText: z.string().default("Get Started Free"),
  buttonTextAr: z.string().default("ابدأ مجاناً"),
  buttonUrl: z.string().default("#contact"),
  secondaryButtonText: z.string().optional(),
  secondaryButtonTextAr: z.string().optional(),
  secondaryButtonUrl: z.string().optional(),
  image: z.string().optional(),
});

export type CtaConfig = z.infer<typeof ctaConfigSchema>;
