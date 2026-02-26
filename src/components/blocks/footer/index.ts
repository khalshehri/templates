import { registerBlock } from "@/lib/registry";
import { footerConfigSchema } from "./types";
import { FooterTemplate01 } from "./footer-template-01";
import { FooterTemplate02 } from "./footer-template-02";
import { FooterTemplate03 } from "./footer-template-03";
import { FooterTemplate04 } from "./footer-template-04";
import { FooterTemplate05 } from "./footer-template-05";
import { FooterTemplate06 } from "./footer-template-06";
import { FooterTemplate07 } from "./footer-template-07";
import { FooterTemplate08 } from "./footer-template-08";
import { FooterTemplate09 } from "./footer-template-09";
import { FooterTemplate10 } from "./footer-template-10";
import { FooterTemplate11 } from "./footer-template-11";
import { FooterTemplate12 } from "./footer-template-12";

registerBlock({
  type: "footer",
  label: "Footer",
  labelAr: "التذييل",
  category: "navigation",
  icon: "panel-bottom",
  configSchema: footerConfigSchema,
  templates: [
    {
      id: "footer-template-01",
      name: "Multi-Column",
      nameAr: "متعدد الأعمدة",
      description: "Dark footer with logo, link columns, and social icons",
      component: FooterTemplate01,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-02",
      name: "With CTA Band",
      nameAr: "مع شريط دعوة",
      description: "Light footer with a CTA section above",
      component: FooterTemplate02,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-03",
      name: "Mega Footer",
      nameAr: "تذييل كبير",
      description: "Dark mega footer with newsletter section",
      component: FooterTemplate03,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-04",
      name: "Minimal Single Row",
      nameAr: "صف واحد بسيط",
      description: "Compact single-row footer with logo, links, and socials",
      component: FooterTemplate04,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-05",
      name: "Dark Gradient",
      nameAr: "تدرج داكن",
      description: "Modern dark gradient footer with colorful social circles",
      component: FooterTemplate05,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-06",
      name: "Newsletter Footer",
      nameAr: "تذييل بنشرة بريدية",
      description: "Full-featured footer with newsletter signup section",
      component: FooterTemplate06,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-07",
      name: "Social Focus",
      nameAr: "تركيز اجتماعي",
      description: "Social-media-first footer with large prominent icons",
      component: FooterTemplate07,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-08",
      name: "Two-Tone",
      nameAr: "لونين متباينين",
      description: "Split footer with primary color top and dark bottom",
      component: FooterTemplate08,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-09",
      name: "Centered Minimal",
      nameAr: "وسطي بسيط",
      description: "Elegant centered footer with flattened links",
      component: FooterTemplate09,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-10",
      name: "App Download",
      nameAr: "تحميل التطبيق",
      description: "Modern footer with app download buttons and columns",
      component: FooterTemplate10,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-11",
      name: "Large Logo",
      nameAr: "شعار كبير",
      description: "Logo-dominant footer with oversized branding",
      component: FooterTemplate11,
      defaultConfig: footerConfigSchema.parse({}),
    },
    {
      id: "footer-template-12",
      name: "Bordered Sections",
      nameAr: "أقسام بحدود",
      description: "Editorial footer with vertical borders between sections",
      component: FooterTemplate12,
      defaultConfig: footerConfigSchema.parse({}),
    },
  ],
});
