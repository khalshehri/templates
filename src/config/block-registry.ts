// Import all blocks — this triggers registerBlock() for each
import "@/components/blocks/navbar";
import "@/components/blocks/hero";
import "@/components/blocks/about";
import "@/components/blocks/services";
import "@/components/blocks/features";
import "@/components/blocks/testimonials";
import "@/components/blocks/clients";
import "@/components/blocks/stats";
import "@/components/blocks/team";
import "@/components/blocks/pricing";
import "@/components/blocks/cta";
import "@/components/blocks/faq";
import "@/components/blocks/contact";
import "@/components/blocks/footer";

// Re-export registry for convenience
export { getAllBlocks, getBlock, getTemplate } from "@/lib/registry";
