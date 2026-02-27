import { registerBlock } from "@/lib/registry";
import { contactConfigSchema } from "./types";
import { ContactTemplate01 } from "./contact-template-01";
import { ContactTemplate02 } from "./contact-template-02";
import { ContactTemplate03 } from "./contact-template-03";
import { ContactTemplate04 } from "./contact-template-04";
import { ContactTemplate05 } from "./contact-template-05";
import { ContactTemplate06 } from "./contact-template-06";
import { ContactTemplate07 } from "./contact-template-07";
import { ContactTemplate08 } from "./contact-template-08";
import { ContactTemplate09 } from "./contact-template-09";
import { ContactTemplate10 } from "./contact-template-10";
import { ContactTemplate11 } from "./contact-template-11";
import { ContactTemplate12 } from "./contact-template-12";

registerBlock({
  type: "contact",
  label: "Contact",
  labelAr: "تواصل معنا",
  category: "conversion",
  icon: "mail",
  configSchema: contactConfigSchema,
  templates: [
    {
      id: "contact-template-01",
      name: "Simple Form",
      nameAr: "نموذج بسيط",
      description: "Contact info with a form side by side",
      component: ContactTemplate01,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-02",
      name: "Form + Map",
      nameAr: "نموذج + خريطة",
      description: "Contact cards, form, and map location",
      component: ContactTemplate02,
      defaultConfig: { ...contactConfigSchema.parse({}), mapEmbed: "" },
    },
    {
      id: "contact-template-03",
      name: "Centered Minimal",
      nameAr: "بسيط وسطي",
      description: "Dark centered minimal form with ghost inputs",
      component: ContactTemplate03,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-04",
      name: "Floating Card",
      nameAr: "بطاقة عائمة",
      description: "Elevated form card with contact info below",
      component: ContactTemplate04,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-05",
      name: "Split Screen",
      nameAr: "شاشة مقسومة",
      description: "Contact info left, form right in 50/50 split",
      component: ContactTemplate05,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-06",
      name: "Minimal Centered",
      nameAr: "بسيط متمركز",
      description: "Everything centered with full-width submit button",
      component: ContactTemplate06,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-07",
      name: "Map Focus",
      nameAr: "تركيز الخريطة",
      description: "Map embed at top with info strip and form below",
      component: ContactTemplate07,
      defaultConfig: { ...contactConfigSchema.parse({}), mapEmbed: "" },
    },
    {
      id: "contact-template-08",
      name: "Dark Mode",
      nameAr: "الوضع الداكن",
      description: "Dark background with translucent form inputs",
      component: ContactTemplate08,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-09",
      name: "Social Focus",
      nameAr: "تركيز اجتماعي",
      description: "Large contact info cards with form below",
      component: ContactTemplate09,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-10",
      name: "Glass Card",
      nameAr: "بطاقة زجاجية",
      description: "Glassmorphism form card on gradient background",
      component: ContactTemplate10,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-11",
      name: "Inline Row",
      nameAr: "صف مضمّن",
      description: "Compact side-by-side layout with 2-column form grid",
      component: ContactTemplate11,
      defaultConfig: contactConfigSchema.parse({}),
    },
    {
      id: "contact-template-12",
      name: "Full Width",
      nameAr: "عرض كامل",
      description: "Full-width spacious form with large inputs",
      component: ContactTemplate12,
      defaultConfig: contactConfigSchema.parse({}),
    },
  ],
});
