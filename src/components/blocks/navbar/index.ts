import { registerBlock } from "@/lib/registry";
import { navbarConfigSchema } from "./types";
import { NavbarTemplate01 } from "./navbar-template-01";
import { NavbarTemplate02 } from "./navbar-template-02";
import { NavbarTemplate03 } from "./navbar-template-03";
import { NavbarTemplate04 } from "./navbar-template-04";
import { NavbarTemplate05 } from "./navbar-template-05";
import { NavbarTemplate06 } from "./navbar-template-06";
import { NavbarTemplate07 } from "./navbar-template-07";
import { NavbarTemplate08 } from "./navbar-template-08";
import { NavbarTemplate09 } from "./navbar-template-09";
import { NavbarTemplate10 } from "./navbar-template-10";
import { NavbarTemplate11 } from "./navbar-template-11";
import { NavbarTemplate12 } from "./navbar-template-12";

registerBlock({
  type: "navbar",
  label: "Navigation Bar",
  labelAr: "شريط التنقل",
  category: "navigation",
  icon: "menu",
  configSchema: navbarConfigSchema,
  templates: [
    {
      id: "navbar-template-01",
      name: "Clean Minimal",
      nameAr: "بسيط ونظيف",
      description: "Minimal navbar with logo, links, and CTA button",
      component: NavbarTemplate01,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-02",
      name: "With Top Bar",
      nameAr: "مع شريط علوي",
      description: "Professional navbar with contact info top bar",
      component: NavbarTemplate02,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-03",
      name: "Centered Logo",
      nameAr: "شعار وسطي",
      description: "Floating glass bar with centered logo and side links",
      component: NavbarTemplate03,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-04",
      name: "Pill Navigation",
      nameAr: "تنقل حبّي",
      description: "Rounded pill-shaped buttons for each nav link with primary hover",
      component: NavbarTemplate04,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-05",
      name: "Sidebar Drawer",
      nameAr: "درج جانبي",
      description: "Full-height sidebar drawer navigation with slide-out animation",
      component: NavbarTemplate05,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-06",
      name: "Double Row",
      nameAr: "صفّان مزدوجان",
      description: "Two-row layout with logo and CTA on top, links on bottom",
      component: NavbarTemplate06,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-07",
      name: "Floating Island",
      nameAr: "جزيرة عائمة",
      description: "Floating capsule-shaped navbar centered at top with shadow",
      component: NavbarTemplate07,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-08",
      name: "Transparent Dark",
      nameAr: "شفاف داكن",
      description: "Dark text on transparent background for light hero sections",
      component: NavbarTemplate08,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-09",
      name: "Split Brand",
      nameAr: "علامة مقسّمة",
      description: "Centered large logo with navigation links split on both sides",
      component: NavbarTemplate09,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-10",
      name: "Gradient Bar",
      nameAr: "شريط متدرّج",
      description: "Full-width gradient background with white text and links",
      component: NavbarTemplate10,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-11",
      name: "Glassmorphism",
      nameAr: "زجاج ضبابي",
      description: "Frosted glass effect with backdrop blur and rounded floating style",
      component: NavbarTemplate11,
      defaultConfig: navbarConfigSchema.parse({}),
    },
    {
      id: "navbar-template-12",
      name: "Minimal Underline",
      nameAr: "خط سفلي بسيط",
      description: "Ultra-clean navbar with underline hover effect on links",
      component: NavbarTemplate12,
      defaultConfig: navbarConfigSchema.parse({}),
    },
  ],
});
