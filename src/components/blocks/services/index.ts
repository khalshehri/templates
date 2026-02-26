import { registerBlock } from "@/lib/registry";
import { servicesConfigSchema } from "./types";
import { ServicesTemplate01 } from "./services-template-01";
import { ServicesTemplate02 } from "./services-template-02";
import { ServicesTemplate03 } from "./services-template-03";
import { ServicesTemplate04 } from "./services-template-04";
import { ServicesTemplate05 } from "./services-template-05";
import { ServicesTemplate06 } from "./services-template-06";
import { ServicesTemplate07 } from "./services-template-07";
import { ServicesTemplate08 } from "./services-template-08";
import { ServicesTemplate09 } from "./services-template-09";
import { ServicesTemplate10 } from "./services-template-10";
import { ServicesTemplate11 } from "./services-template-11";
import { ServicesTemplate12 } from "./services-template-12";

registerBlock({
  type: "services",
  label: "Services",
  labelAr: "الخدمات",
  category: "content",
  icon: "briefcase",
  configSchema: servicesConfigSchema,
  templates: [
    {
      id: "services-template-01",
      name: "Card Grid",
      nameAr: "شبكة بطاقات",
      description: "Icon cards in a responsive grid layout",
      component: ServicesTemplate01,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-02",
      name: "Stacked List",
      nameAr: "قائمة متراصة",
      description: "Horizontal stacked cards with details",
      component: ServicesTemplate02,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-03",
      name: "Bento Grid",
      nameAr: "شبكة بنتو",
      description: "Dark bento grid with featured large card",
      component: ServicesTemplate03,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-04",
      name: "Icon Circles",
      nameAr: "دوائر أيقونات",
      description: "Large circular icon containers with title and description",
      component: ServicesTemplate04,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-05",
      name: "Numbered List",
      nameAr: "قائمة مرقمة",
      description: "Sequential numbers with service details",
      component: ServicesTemplate05,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-06",
      name: "Alternating Rows",
      nameAr: "صفوف متناوبة",
      description: "Left-right alternating layout with images",
      component: ServicesTemplate06,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-07",
      name: "Minimal Cards",
      nameAr: "بطاقات بسيطة",
      description: "Ultra-clean cards with hover border effect",
      component: ServicesTemplate07,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-08",
      name: "Gradient Cards",
      nameAr: "بطاقات متدرجة",
      description: "Subtle gradient backgrounds with shadow hover",
      component: ServicesTemplate08,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-09",
      name: "Horizontal Scroll",
      nameAr: "تمرير أفقي",
      description: "Horizontally scrolling fixed-width cards",
      component: ServicesTemplate09,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-10",
      name: "Overlapping Cards",
      nameAr: "بطاقات متراكبة",
      description: "Stacked cards with overlap and primary border",
      component: ServicesTemplate10,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-11",
      name: "Two Column Split",
      nameAr: "تقسيم عمودين",
      description: "Sticky heading with scrollable service list",
      component: ServicesTemplate11,
      defaultConfig: servicesConfigSchema.parse({}),
    },
    {
      id: "services-template-12",
      name: "Masonry Grid",
      nameAr: "شبكة متداخلة",
      description: "Pinterest-style masonry layout with varied heights",
      component: ServicesTemplate12,
      defaultConfig: servicesConfigSchema.parse({}),
    },
  ],
});
