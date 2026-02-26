import { registerBlock } from "@/lib/registry";
import { clientsConfigSchema } from "./types";
import { ClientsTemplate01 } from "./clients-template-01";
import { ClientsTemplate02 } from "./clients-template-02";
import { ClientsTemplate03 } from "./clients-template-03";
import { ClientsTemplate04 } from "./clients-template-04";
import { ClientsTemplate05 } from "./clients-template-05";
import { ClientsTemplate06 } from "./clients-template-06";
import { ClientsTemplate07 } from "./clients-template-07";
import { ClientsTemplate08 } from "./clients-template-08";
import { ClientsTemplate09 } from "./clients-template-09";
import { ClientsTemplate10 } from "./clients-template-10";
import { ClientsTemplate11 } from "./clients-template-11";
import { ClientsTemplate12 } from "./clients-template-12";

registerBlock({
  type: "clients",
  label: "Clients / Logos",
  labelAr: "العملاء / الشعارات",
  category: "social-proof",
  icon: "building-2",
  configSchema: clientsConfigSchema,
  templates: [
    {
      id: "clients-template-01",
      name: "Logo Row",
      nameAr: "صف شعارات",
      description: "Grayscale logos that color on hover",
      component: ClientsTemplate01,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-02",
      name: "Logo Marquee",
      nameAr: "شعارات متحركة",
      description: "Auto-scrolling logo carousel",
      component: ClientsTemplate02,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-03",
      name: "Grid Cards",
      nameAr: "شبكة بطاقات",
      description: "Modern grid cards with hover lift effect",
      component: ClientsTemplate03,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-04",
      name: "Marquee Scroll",
      nameAr: "تمرير متحرك",
      description: "Auto-scrolling horizontal marquee with gradient fade edges",
      component: ClientsTemplate04,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-05",
      name: "Logo Cloud",
      nameAr: "سحابة شعارات",
      description: "Scattered cloud layout with varied sizes for organic feel",
      component: ClientsTemplate05,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-06",
      name: "Featured Partners",
      nameAr: "شركاء مميزون",
      description: "Large cards with prominent name and hover primary border",
      component: ClientsTemplate06,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-07",
      name: "Minimal Dots",
      nameAr: "نقاط بسيطة",
      description: "Client names separated by bullet dots in a clean line",
      component: ClientsTemplate07,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-08",
      name: "Glass Tiles",
      nameAr: "بلاط زجاجي",
      description: "Glass-effect tiles in a grid with hover lift and shadow",
      component: ClientsTemplate08,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-09",
      name: "Fading Scroll",
      nameAr: "تمرير متلاشي",
      description: "Horizontal scrollable row with gradient fade on edges",
      component: ClientsTemplate09,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-10",
      name: "Two-Row Grid",
      nameAr: "شبكة صفّين",
      description: "Two rows of clients scrolling in opposite directions",
      component: ClientsTemplate10,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-11",
      name: "Dark Banner",
      nameAr: "لافتة داكنة",
      description: "Dark background with white client names for strong contrast",
      component: ClientsTemplate11,
      defaultConfig: clientsConfigSchema.parse({}),
    },
    {
      id: "clients-template-12",
      name: "Bordered Grid",
      nameAr: "شبكة محاطة",
      description: "Grid with thick primary-colored left border on each cell",
      component: ClientsTemplate12,
      defaultConfig: clientsConfigSchema.parse({}),
    },
  ],
});
