import { registerBlock } from "@/lib/registry";
import { featuresConfigSchema } from "./types";
import { FeaturesTemplate01 } from "./features-template-01";
import { FeaturesTemplate02 } from "./features-template-02";
import { FeaturesTemplate03 } from "./features-template-03";
import { FeaturesTemplate04 } from "./features-template-04";
import { FeaturesTemplate05 } from "./features-template-05";
import { FeaturesTemplate06 } from "./features-template-06";
import { FeaturesTemplate07 } from "./features-template-07";
import { FeaturesTemplate08 } from "./features-template-08";
import { FeaturesTemplate09 } from "./features-template-09";
import { FeaturesTemplate10 } from "./features-template-10";
import { FeaturesTemplate11 } from "./features-template-11";
import { FeaturesTemplate12 } from "./features-template-12";

registerBlock({
  type: "features",
  label: "Features",
  labelAr: "المميزات",
  category: "content",
  icon: "layout-grid",
  configSchema: featuresConfigSchema,
  templates: [
    {
      id: "features-template-01",
      name: "Icon Grid",
      nameAr: "شبكة أيقونات",
      description: "3-column grid with icon cards",
      component: FeaturesTemplate01,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-02",
      name: "Alternating",
      nameAr: "متناوب",
      description: "Zigzag layout with images and bottom grid",
      component: FeaturesTemplate02,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-03",
      name: "Numbered Steps",
      nameAr: "خطوات مرقمة",
      description: "Numbered step cards with accent border",
      component: FeaturesTemplate03,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-04",
      name: "Alternating Zigzag",
      nameAr: "تعرج متناوب",
      description: "Zigzag pattern with connecting line",
      component: FeaturesTemplate04,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-05",
      name: "Checklist Style",
      nameAr: "نمط قائمة تحقق",
      description: "Checkmark icons with feature details",
      component: FeaturesTemplate05,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-06",
      name: "Large Icon Grid",
      nameAr: "شبكة أيقونات كبيرة",
      description: "Oversized icons in a clean grid layout",
      component: FeaturesTemplate06,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-07",
      name: "Floating Cards",
      nameAr: "بطاقات عائمة",
      description: "Elevated cards with perspective effect",
      component: FeaturesTemplate07,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-08",
      name: "Minimal List",
      nameAr: "قائمة بسيطة",
      description: "Clean list with horizontal separators",
      component: FeaturesTemplate08,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-09",
      name: "Grouped Two-Column",
      nameAr: "عمودين مجمعة",
      description: "Features split into two grouped columns",
      component: FeaturesTemplate09,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-10",
      name: "Card Carousel",
      nameAr: "دوّار بطاقات",
      description: "Horizontal scrolling cards with accent bar",
      component: FeaturesTemplate10,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-11",
      name: "Bordered Sections",
      nameAr: "أقسام بحدود",
      description: "Thick left border sections stacked vertically",
      component: FeaturesTemplate11,
      defaultConfig: featuresConfigSchema.parse({}),
    },
    {
      id: "features-template-12",
      name: "Dark Contrast",
      nameAr: "تباين داكن",
      description: "Dark background with light text and primary icons",
      component: FeaturesTemplate12,
      defaultConfig: featuresConfigSchema.parse({}),
    },
  ],
});
