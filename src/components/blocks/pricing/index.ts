import { registerBlock } from "@/lib/registry";
import { pricingConfigSchema } from "./types";
import { PricingTemplate01 } from "./pricing-template-01";
import { PricingTemplate02 } from "./pricing-template-02";
import { PricingTemplate03 } from "./pricing-template-03";
import { PricingTemplate04 } from "./pricing-template-04";
import { PricingTemplate05 } from "./pricing-template-05";
import { PricingTemplate06 } from "./pricing-template-06";
import { PricingTemplate07 } from "./pricing-template-07";
import { PricingTemplate08 } from "./pricing-template-08";
import { PricingTemplate09 } from "./pricing-template-09";
import { PricingTemplate10 } from "./pricing-template-10";
import { PricingTemplate11 } from "./pricing-template-11";
import { PricingTemplate12 } from "./pricing-template-12";

registerBlock({
  type: "pricing",
  label: "Pricing",
  labelAr: "الأسعار",
  category: "conversion",
  icon: "credit-card",
  configSchema: pricingConfigSchema,
  templates: [
    {
      id: "pricing-template-01",
      name: "Simple Columns",
      nameAr: "أعمدة بسيطة",
      description: "Clean 3-column pricing cards",
      component: PricingTemplate01,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-02",
      name: "Toggle Billing",
      nameAr: "تبديل الفوترة",
      description: "Monthly/yearly toggle with feature comparison",
      component: PricingTemplate02,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-03",
      name: "Horizontal Cards",
      nameAr: "بطاقات أفقية",
      description: "Minimal horizontal stacked pricing cards",
      component: PricingTemplate03,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-04",
      name: "Comparison Table",
      nameAr: "جدول مقارنة",
      description: "Feature comparison table with check/x icons per plan",
      component: PricingTemplate04,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-05",
      name: "Gradient Highlighted",
      nameAr: "تمييز متدرج",
      description: "Cards with gradient background on highlighted plan",
      component: PricingTemplate05,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-06",
      name: "Minimal Flat",
      nameAr: "مسطح بسيط",
      description: "Ultra-flat design with thin borders and mono font",
      component: PricingTemplate06,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-07",
      name: "Tabs Layout",
      nameAr: "تبويبات",
      description: "Tabbed interface showing one plan at a time",
      component: PricingTemplate07,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-08",
      name: "Enterprise Focus",
      nameAr: "تركيز المؤسسات",
      description: "Large highlighted plan with smaller side plans",
      component: PricingTemplate08,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-09",
      name: "Feature Checklist",
      nameAr: "قائمة الميزات",
      description: "Full-width feature rows with plan columns and check/x",
      component: PricingTemplate09,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-10",
      name: "Dark Mode",
      nameAr: "الوضع الداكن",
      description: "Dark background pricing cards with high contrast",
      component: PricingTemplate10,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-11",
      name: "Badge Style",
      nameAr: "نمط الشارة",
      description: "Cards with corner ribbon badges and generous padding",
      component: PricingTemplate11,
      defaultConfig: pricingConfigSchema.parse({}),
    },
    {
      id: "pricing-template-12",
      name: "Compact Cards",
      nameAr: "بطاقات مضغوطة",
      description: "Dense compact cards with feature pills",
      component: PricingTemplate12,
      defaultConfig: pricingConfigSchema.parse({}),
    },
  ],
});
