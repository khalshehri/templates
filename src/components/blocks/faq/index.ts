import { registerBlock } from "@/lib/registry";
import { faqConfigSchema } from "./types";
import { FaqTemplate01 } from "./faq-template-01";
import { FaqTemplate02 } from "./faq-template-02";
import { FaqTemplate03 } from "./faq-template-03";
import { FaqTemplate04 } from "./faq-template-04";
import { FaqTemplate05 } from "./faq-template-05";
import { FaqTemplate06 } from "./faq-template-06";
import { FaqTemplate07 } from "./faq-template-07";
import { FaqTemplate08 } from "./faq-template-08";
import { FaqTemplate09 } from "./faq-template-09";
import { FaqTemplate10 } from "./faq-template-10";
import { FaqTemplate11 } from "./faq-template-11";
import { FaqTemplate12 } from "./faq-template-12";

registerBlock({
  type: "faq",
  label: "FAQ",
  labelAr: "الأسئلة الشائعة",
  category: "informational",
  icon: "help-circle",
  configSchema: faqConfigSchema,
  templates: [
    {
      id: "faq-template-01",
      name: "Accordion",
      nameAr: "أكورديون",
      description: "Expandable questions with smooth animation",
      component: FaqTemplate01,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-02",
      name: "Two Column",
      nameAr: "عمودين",
      description: "Questions and answers in two columns",
      component: FaqTemplate02,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-03",
      name: "Side Heading",
      nameAr: "عنوان جانبي",
      description: "Sticky side heading with clean expandable list",
      component: FaqTemplate03,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-04",
      name: "Two Column Accordion",
      nameAr: "أكورديون بعمودين",
      description: "Odd/even questions split into two column accordion grid",
      component: FaqTemplate04,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-05",
      name: "Cards",
      nameAr: "بطاقات",
      description: "Each Q&A in its own card with border and shadow",
      component: FaqTemplate05,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-06",
      name: "Numbered",
      nameAr: "مرقّم",
      description: "Questions prefixed with large numbered labels",
      component: FaqTemplate06,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-07",
      name: "Minimal Accordion",
      nameAr: "أكورديون بسيط",
      description: "Ultra-clean accordion with plus/minus icons and max whitespace",
      component: FaqTemplate07,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-08",
      name: "Search Style",
      nameAr: "بحث",
      description: "Searchable FAQ with filter input and accordion list",
      component: FaqTemplate08,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-09",
      name: "Bordered Sections",
      nameAr: "أقسام بحدود",
      description: "Strong left border accent on each expandable Q&A",
      component: FaqTemplate09,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-10",
      name: "Toggle Cards",
      nameAr: "بطاقات قابلة للتبديل",
      description: "Standalone cards with toggle chevron in a grid",
      component: FaqTemplate10,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-11",
      name: "Centered List",
      nameAr: "قائمة وسطية",
      description: "Centered questions as buttons that expand with answers",
      component: FaqTemplate11,
      defaultConfig: faqConfigSchema.parse({}),
    },
    {
      id: "faq-template-12",
      name: "Dark Mode",
      nameAr: "الوضع الداكن",
      description: "Dark background with high contrast accordion cards",
      component: FaqTemplate12,
      defaultConfig: faqConfigSchema.parse({}),
    },
  ],
});
