import { registerBlock } from "@/lib/registry";
import { ctaConfigSchema } from "./types";
import { CtaTemplate01 } from "./cta-template-01";
import { CtaTemplate02 } from "./cta-template-02";
import { CtaTemplate03 } from "./cta-template-03";
import { CtaTemplate04 } from "./cta-template-04";
import { CtaTemplate05 } from "./cta-template-05";
import { CtaTemplate06 } from "./cta-template-06";
import { CtaTemplate07 } from "./cta-template-07";
import { CtaTemplate08 } from "./cta-template-08";
import { CtaTemplate09 } from "./cta-template-09";
import { CtaTemplate10 } from "./cta-template-10";
import { CtaTemplate11 } from "./cta-template-11";
import { CtaTemplate12 } from "./cta-template-12";

registerBlock({
  type: "cta",
  label: "Call to Action",
  labelAr: "دعوة للعمل",
  category: "conversion",
  icon: "megaphone",
  configSchema: ctaConfigSchema,
  templates: [
    {
      id: "cta-template-01",
      name: "Banner",
      nameAr: "بانر",
      description: "Full-width colored CTA banner",
      component: CtaTemplate01,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-02",
      name: "Split Layout",
      nameAr: "تخطيط منقسم",
      description: "Text on one side, image on the other",
      component: CtaTemplate02,
      defaultConfig: { ...ctaConfigSchema.parse({}), image: "" },
    },
    {
      id: "cta-template-03",
      name: "Gradient Glow",
      nameAr: "توهج متدرج",
      description: "Dark background with gradient glow border effect",
      component: CtaTemplate03,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-04",
      name: "Split Image",
      nameAr: "صورة منقسمة",
      description: "Two halves with text and image, decorative gradient fallback",
      component: CtaTemplate04,
      defaultConfig: { ...ctaConfigSchema.parse({}), image: "" },
    },
    {
      id: "cta-template-05",
      name: "Newsletter Style",
      nameAr: "نمط النشرة",
      description: "Email input field with submit button layout",
      component: CtaTemplate05,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-06",
      name: "Gradient Wave",
      nameAr: "موجة متدرجة",
      description: "Gradient background with decorative SVG wave shapes",
      component: CtaTemplate06,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-07",
      name: "Floating Card",
      nameAr: "بطاقة عائمة",
      description: "White card floating over colored background",
      component: CtaTemplate07,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-08",
      name: "Minimal Banner",
      nameAr: "بانر بسيط",
      description: "Thin compact banner with heading and button in one row",
      component: CtaTemplate08,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-09",
      name: "Full Screen",
      nameAr: "شاشة كاملة",
      description: "Full viewport height with centered dramatic content",
      component: CtaTemplate09,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-10",
      name: "Dark Overlay",
      nameAr: "تراكب داكن",
      description: "Dark background with CSS pattern texture and white text",
      component: CtaTemplate10,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-11",
      name: "Stats + CTA",
      nameAr: "إحصائيات + دعوة",
      description: "Stats row with social proof above call-to-action",
      component: CtaTemplate11,
      defaultConfig: ctaConfigSchema.parse({}),
    },
    {
      id: "cta-template-12",
      name: "Bordered Box",
      nameAr: "صندوق محاط",
      description: "Strong primary-colored border box with no fill background",
      component: CtaTemplate12,
      defaultConfig: ctaConfigSchema.parse({}),
    },
  ],
});
