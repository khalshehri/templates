"use client";

import { useState } from "react";
import { getAllBlocks } from "@/config/block-registry";
import Link from "next/link";

/* ── Experimental hero categories (test lab) ────────────────── */
const heroCategories = [
  {
    id: "corporate",
    name: "Corporate & Trust",
    color: "blue",
    description: "Professional, stable, trustworthy",
    templates: [
      { id: "corporate-tower", name: "Vertical Authority" },
      { id: "corporate-metrics", name: "Data-Driven Trust" },
      { id: "hologram-board", name: "Hologram Board" },
      { id: "corporate-grid", name: "Corporate Grid" },
      { id: "corporate-horizon", name: "Corporate Horizon" },
      { id: "corporate-lens", name: "Corporate Lens" },
      { id: "corporate-pillars", name: "Corporate Pillars" },
      { id: "corporate-shield", name: "Corporate Shield" },
      { id: "corporate-stairs", name: "Corporate Stairs" },
      { id: "corporate-wave", name: "Corporate Wave" },
    ],
  },
  {
    id: "creative",
    name: "Creative & Bold",
    color: "pink",
    description: "Expressive, experimental, rule-breaking",
    templates: [
      { id: "creative-clash", name: "Color Collision" },
      { id: "creative-showcase", name: "Portfolio Ribbon" },
      { id: "ink-flow", name: "Ink Flow" },
      { id: "creative-collage", name: "Creative Collage" },
      { id: "creative-drip", name: "Creative Drip" },
      { id: "creative-grid-break", name: "Grid Break" },
      { id: "creative-neon", name: "Creative Neon" },
      { id: "creative-stack", name: "Creative Stack" },
      { id: "creative-torn", name: "Creative Torn" },
      { id: "creative-wave", name: "Creative Wave" },
    ],
  },
  {
    id: "saas",
    name: "SaaS & Product",
    color: "violet",
    description: "Modern, technical, product-forward",
    templates: [
      { id: "saas-terminal", name: "Developer Terminal" },
      { id: "saas-orbit", name: "Product Orbit" },
      { id: "neural-network", name: "Neural Network" },
      { id: "saas-dashboard", name: "Dashboard" },
      { id: "saas-api", name: "API Gateway" },
      { id: "saas-cloud", name: "Cloud Platform" },
      { id: "saas-integration", name: "Integration Hub" },
      { id: "saas-metrics", name: "SaaS Metrics" },
      { id: "saas-pipeline", name: "Data Pipeline" },
      { id: "saas-pricing", name: "Pricing Table" },
    ],
  },
  {
    id: "service",
    name: "Service & Local",
    color: "orange",
    description: "Warm, approachable, action-oriented",
    templates: [
      { id: "service-card", name: "Booking Card" },
      { id: "service-location", name: "Map Pinpoint" },
      { id: "warm-welcome", name: "Warm Welcome" },
      { id: "service-checklist", name: "Service Checklist" },
      { id: "service-clock", name: "Service Clock" },
      { id: "service-counter", name: "Service Counter" },
      { id: "service-map-pin", name: "Map Pin" },
      { id: "service-phone", name: "Service Phone" },
      { id: "service-ribbon", name: "Service Ribbon" },
      { id: "service-testimonial", name: "Testimonial" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce & Conversion",
    color: "emerald",
    description: "High-conversion, product-focused",
    templates: [
      { id: "ecommerce-showcase", name: "Product Spotlight" },
      { id: "ecommerce-promo", name: "Sale Banner" },
      { id: "unboxing", name: "Unboxing" },
      { id: "ecom-cart", name: "Shopping Cart" },
      { id: "ecom-bag", name: "Shopping Bag" },
      { id: "ecom-carousel", name: "Product Carousel" },
      { id: "ecom-flash", name: "Flash Sale" },
      { id: "ecom-rack", name: "Product Rack" },
      { id: "ecom-search", name: "Product Search" },
      { id: "ecom-tag", name: "Price Tag" },
    ],
  },
  {
    id: "event",
    name: "Event & Launch",
    color: "red",
    description: "Excitement, urgency, time-bound",
    templates: [
      { id: "event-countdown", name: "The Big Day" },
      { id: "event-stage", name: "Event Stage" },
      { id: "event-speakers", name: "Speaker Spotlight" },
      { id: "fireworks", name: "Fireworks" },
      { id: "event-badge", name: "Event Badge" },
      { id: "event-banner", name: "Event Banner" },
      { id: "event-confetti", name: "Event Confetti" },
      { id: "event-mic", name: "Event Mic" },
      { id: "event-schedule", name: "Event Schedule" },
      { id: "event-ticket", name: "Event Ticket" },
    ],
  },
  {
    id: "luxury",
    name: "Luxury & Premium",
    color: "amber",
    description: "Elegant, minimal, exclusive",
    templates: [
      { id: "luxury-reveal", name: "Curtain Reveal" },
      { id: "luxury-editorial", name: "Magazine Cover" },
      { id: "marble-gold", name: "Marble & Gold" },
      { id: "luxury-columns", name: "Luxury Columns" },
      { id: "luxury-diamond", name: "Luxury Diamond" },
      { id: "luxury-frame", name: "Luxury Frame" },
      { id: "luxury-monogram", name: "Luxury Monogram" },
      { id: "luxury-noir", name: "Luxury Noir" },
      { id: "luxury-silk", name: "Luxury Silk" },
      { id: "luxury-veil", name: "Luxury Veil" },
    ],
  },
  {
    id: "personal",
    name: "Personal & Freelancer",
    color: "cyan",
    description: "Human, authentic, personality-driven",
    templates: [
      { id: "personal-intro", name: "Hey, I'm..." },
      { id: "personal-stack", name: "Skill Stack" },
      { id: "polaroid-wall", name: "Polaroid Wall" },
      { id: "personal-card-flip", name: "Card Flip" },
      { id: "personal-desk", name: "Personal Desk" },
      { id: "personal-handwave", name: "Hand Wave" },
      { id: "personal-pixel", name: "Pixel Avatar" },
      { id: "personal-social", name: "Social Links" },
      { id: "personal-spotlight", name: "Spotlight" },
      { id: "personal-timeline", name: "Timeline" },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant & Food",
    color: "orange",
    description: "Appetizing, warm, sensory",
    templates: [
      { id: "kitchen-flame", name: "Kitchen Flame" },
      { id: "restaurant-chef", name: "Chef's Table" },
      { id: "restaurant-garden", name: "Garden Dining" },
      { id: "restaurant-menu", name: "Restaurant Menu" },
      { id: "restaurant-oven", name: "Brick Oven" },
      { id: "restaurant-plate", name: "Restaurant Plate" },
      { id: "restaurant-spice", name: "Spice Rack" },
      { id: "restaurant-sushi", name: "Sushi Bar" },
      { id: "restaurant-table", name: "Restaurant Table" },
      { id: "restaurant-wine", name: "Wine Cellar" },
    ],
  },
  {
    id: "education",
    name: "Education & Academy",
    color: "emerald",
    description: "Inspiring, structured, knowledge-driven",
    templates: [
      { id: "chalkboard", name: "Chalkboard" },
      { id: "education-globe", name: "Education Globe" },
      { id: "education-lab", name: "Science Lab" },
      { id: "education-library", name: "Library" },
      { id: "education-lighthouse", name: "Lighthouse" },
      { id: "education-notebook", name: "Notebook" },
      { id: "education-podium", name: "Podium" },
      { id: "education-puzzle", name: "Puzzle" },
      { id: "education-steps", name: "Steps" },
      { id: "education-tree", name: "Knowledge Tree" },
    ],
  },
  {
    id: "company",
    name: "Company",
    color: "blue",
    description: "Professional, trustworthy, corporate",
    templates: [
      { id: "company-skyline", name: "City Skyline" },
      { id: "company-tower", name: "Glass Tower" },
      { id: "company-globe", name: "Global Network" },
      { id: "company-metrics", name: "Business Metrics" },
      { id: "company-timeline", name: "Milestone Timeline" },
      { id: "company-network", name: "Office Network" },
      { id: "company-growth", name: "Growth Chart" },
      { id: "company-handshake", name: "Handshake" },
      { id: "company-headquarters", name: "Headquarters" },
      { id: "company-shield", name: "Company Shield" },
    ],
  },
  {
    id: "agency",
    name: "Creative Agency",
    color: "pink",
    description: "Bold, artistic, expressive",
    templates: [
      { id: "agency-palette", name: "Paint Palette" },
      { id: "agency-canvas", name: "Living Canvas" },
      { id: "agency-collage", name: "Mixed Media Collage" },
      { id: "agency-drip", name: "Paint Drip" },
      { id: "agency-film", name: "Film Strip" },
      { id: "agency-mosaic", name: "Mosaic" },
      { id: "agency-neon", name: "Neon Sign" },
      { id: "agency-scissors", name: "Scissors Cut" },
      { id: "agency-spray", name: "Spray Paint" },
      { id: "agency-studio", name: "Studio" },
    ],
  },
  {
    id: "freelancer",
    name: "Freelancer",
    color: "cyan",
    description: "Personal, authentic, skill-focused",
    templates: [
      { id: "freelancer-desk", name: "Freelancer Desk" },
      { id: "freelancer-coffee", name: "Coffee Break" },
      { id: "freelancer-notebook", name: "Notebook" },
      { id: "freelancer-badge", name: "ID Badge" },
      { id: "freelancer-tools", name: "Tool Belt" },
      { id: "freelancer-calendar", name: "Calendar" },
      { id: "freelancer-code", name: "Code Editor" },
      { id: "freelancer-connect", name: "Connect" },
      { id: "freelancer-quotes", name: "Client Quotes" },
      { id: "freelancer-workspace", name: "Workspace" },
    ],
  },
  {
    id: "resume",
    name: "Resume / CV",
    color: "violet",
    description: "Professional, personal, creative",
    templates: [
      { id: "resume-paper", name: "Floating Paper" },
      { id: "resume-timeline", name: "Career Timeline" },
      { id: "resume-blueprint", name: "Blueprint" },
      { id: "resume-book", name: "Open Book" },
      { id: "resume-card", name: "Business Card" },
      { id: "resume-dashboard", name: "Dashboard" },
      { id: "resume-mosaic", name: "Skill Mosaic" },
      { id: "resume-scroll", name: "Scroll" },
      { id: "resume-spotlight", name: "Spotlight" },
      { id: "resume-terminal", name: "Terminal" },
    ],
  },
  {
    id: "clinic",
    name: "Medical Clinic",
    color: "emerald",
    description: "Clean, trustworthy, caring",
    templates: [
      { id: "clinic-pulse", name: "Pulse Monitor" },
      { id: "clinic-dna", name: "DNA Helix" },
      { id: "clinic-shield", name: "Health Shield" },
      { id: "clinic-molecule", name: "Molecule" },
      { id: "clinic-cross", name: "Medical Cross" },
      { id: "clinic-wave", name: "Healing Wave" },
      { id: "clinic-care", name: "Patient Care" },
      { id: "clinic-cells", name: "Cell Structure" },
      { id: "clinic-clean", name: "Clean Room" },
      { id: "clinic-stethoscope", name: "Stethoscope" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    color: "amber",
    description: "Premium, aspirational, location-focused",
    templates: [
      { id: "realestate-skyline", name: "Skyline" },
      { id: "realestate-key", name: "Golden Key" },
      { id: "realestate-floor", name: "Floor Plan" },
      { id: "realestate-door", name: "Open Door" },
      { id: "realestate-compass", name: "Compass" },
      { id: "realestate-blueprint", name: "Blueprint" },
      { id: "realestate-building", name: "Building Rise" },
      { id: "realestate-garden", name: "Garden View" },
      { id: "realestate-interior", name: "Interior" },
      { id: "realestate-window", name: "Window View" },
    ],
  },
  {
    id: "photography",
    name: "Photography",
    color: "pink",
    description: "Visual, artistic, portfolio-driven",
    templates: [
      { id: "photo-shutter", name: "Shutter Click" },
      { id: "photo-polaroid", name: "Polaroid" },
      { id: "photo-aperture", name: "Aperture" },
      { id: "photo-contact", name: "Contact Sheet" },
      { id: "photo-darkroom", name: "Darkroom" },
      { id: "photo-exposure", name: "Exposure" },
      { id: "photo-film", name: "Film Roll" },
      { id: "photo-gallery", name: "Gallery Wall" },
      { id: "photo-lightbox", name: "Lightbox" },
      { id: "photo-viewfinder", name: "Viewfinder" },
    ],
  },
  {
    id: "law-firm",
    name: "Law Firm",
    color: "amber",
    description: "Authoritative, trustworthy, prestigious",
    templates: [
      { id: "law-gavel", name: "Gavel" },
      { id: "law-library", name: "Law Library" },
      { id: "law-column", name: "Greek Column" },
      { id: "law-document", name: "Legal Document" },
      { id: "law-brief", name: "Legal Brief" },
      { id: "law-curtain", name: "Court Curtain" },
      { id: "law-emblem", name: "Law Emblem" },
      { id: "law-ink", name: "Ink & Quill" },
      { id: "law-scales", name: "Scales of Justice" },
      { id: "law-shield", name: "Law Shield" },
    ],
  },
  {
    id: "gym",
    name: "Gym / Fitness",
    color: "red",
    description: "Energetic, powerful, motivating",
    templates: [
      { id: "gym-pulse", name: "Heart Rate" },
      { id: "gym-weights", name: "Barbell" },
      { id: "gym-energy", name: "Energy Burst" },
      { id: "gym-champion", name: "Champion Podium" },
      { id: "gym-flame", name: "Calorie Flame" },
      { id: "gym-power", name: "Power Meter" },
      { id: "gym-rings", name: "Olympic Rings" },
      { id: "gym-stats", name: "Fitness Stats" },
      { id: "gym-timer", name: "Workout Timer" },
      { id: "gym-track", name: "Running Track" },
    ],
  },
];

/* ── Experimental nav categories (test lab) ────────────────── */
const navCategories = [
  {
    id: "corporate", name: "Corporate & Trust", color: "blue",
    description: "Professional, stable, trustworthy",
    templates: [
      { id: "nav-corp-classic", name: "Classic Bar" },
      { id: "nav-corp-glass", name: "Glass Effect" },
      { id: "nav-corp-dark", name: "Dark Navy" },
      { id: "nav-corp-split", name: "Split Layout" },
      { id: "nav-corp-minimal", name: "Ultra Minimal" },
      { id: "nav-corp-mega", name: "Mega Menu" },
      { id: "nav-corp-topbar", name: "Top Bar" },
      { id: "nav-corp-sidebar", name: "Sidebar" },
      { id: "nav-corp-centered", name: "Centered Logo" },
      { id: "nav-corp-ribbon", name: "Ribbon Bar" },
    ],
  },
  {
    id: "creative", name: "Creative & Bold", color: "pink",
    description: "Expressive, experimental, rule-breaking",
    templates: [
      { id: "nav-creative-paint", name: "Paint Splash" },
      { id: "nav-creative-neon", name: "Neon Glow" },
      { id: "nav-creative-torn", name: "Torn Paper" },
      { id: "nav-creative-gradient", name: "Gradient Shift" },
      { id: "nav-creative-sticker", name: "Sticker Labels" },
      { id: "nav-creative-brush", name: "Brush Stroke" },
      { id: "nav-creative-collage", name: "Collage Mix" },
      { id: "nav-creative-retro", name: "Retro Style" },
      { id: "nav-creative-bold", name: "Bold Type" },
      { id: "nav-creative-wave", name: "Wavy Border" },
    ],
  },
  {
    id: "saas", name: "SaaS & Product", color: "violet",
    description: "Modern, technical, product-forward",
    templates: [
      { id: "nav-saas-modern", name: "Modern Pill" },
      { id: "nav-saas-terminal", name: "Terminal Style" },
      { id: "nav-saas-dark", name: "Dark Grid" },
      { id: "nav-saas-glass", name: "Floating Glass" },
      { id: "nav-saas-gradient", name: "Gradient Accent" },
      { id: "nav-saas-command", name: "Command Palette" },
      { id: "nav-saas-product", name: "Product Nav" },
      { id: "nav-saas-api", name: "API Docs" },
      { id: "nav-saas-dashboard", name: "Dashboard Bar" },
      { id: "nav-saas-minimal", name: "Super Minimal" },
    ],
  },
  {
    id: "service", name: "Service & Local", color: "orange",
    description: "Warm, approachable, action-oriented",
    templates: [
      { id: "nav-service-warm", name: "Warm Colors" },
      { id: "nav-service-booking", name: "Booking CTA" },
      { id: "nav-service-local", name: "Local Pin" },
      { id: "nav-service-clean", name: "Clean White" },
      { id: "nav-service-card", name: "Card Float" },
      { id: "nav-service-friendly", name: "Friendly Pill" },
      { id: "nav-service-phone", name: "Phone Number" },
      { id: "nav-service-hours", name: "Hours Display" },
      { id: "nav-service-map", name: "Map Address" },
      { id: "nav-service-trust", name: "Trust Badges" },
    ],
  },
  {
    id: "ecommerce", name: "E-commerce & Conversion", color: "emerald",
    description: "High-conversion, product-focused",
    templates: [
      { id: "nav-ecom-shop", name: "Shop Nav" },
      { id: "nav-ecom-mega", name: "Mega Categories" },
      { id: "nav-ecom-minimal", name: "Minimal Cart" },
      { id: "nav-ecom-search", name: "Search Focus" },
      { id: "nav-ecom-promo", name: "Promo Banner" },
      { id: "nav-ecom-dark", name: "Dark Premium" },
      { id: "nav-ecom-category", name: "Category Icons" },
      { id: "nav-ecom-brand", name: "Brand Center" },
      { id: "nav-ecom-sale", name: "Sale Countdown" },
      { id: "nav-ecom-sticky", name: "Sticky Compact" },
    ],
  },
  {
    id: "event", name: "Event & Launch", color: "red",
    description: "Excitement, urgency, time-bound",
    templates: [
      { id: "nav-event-countdown", name: "Countdown Timer" },
      { id: "nav-event-ticket", name: "Get Tickets" },
      { id: "nav-event-festive", name: "Festive Party" },
      { id: "nav-event-dark", name: "Dark Cinema" },
      { id: "nav-event-badge", name: "Event Badge" },
      { id: "nav-event-stage", name: "Stage Curtain" },
      { id: "nav-event-schedule", name: "Schedule Links" },
      { id: "nav-event-live", name: "Live Indicator" },
      { id: "nav-event-speaker", name: "Speaker Ticker" },
      { id: "nav-event-neon", name: "Neon Party" },
    ],
  },
  {
    id: "luxury", name: "Luxury & Premium", color: "amber",
    description: "Elegant, minimal, exclusive",
    templates: [
      { id: "nav-luxury-minimal", name: "Ultra Minimal" },
      { id: "nav-luxury-gold", name: "Gold Accent" },
      { id: "nav-luxury-editorial", name: "Editorial" },
      { id: "nav-luxury-serif", name: "Serif Classic" },
      { id: "nav-luxury-noir", name: "All Black" },
      { id: "nav-luxury-marble", name: "Marble Texture" },
      { id: "nav-luxury-silk", name: "Silk Smooth" },
      { id: "nav-luxury-monogram", name: "Monogram" },
      { id: "nav-luxury-curtain", name: "Curtain Drape" },
      { id: "nav-luxury-diamond", name: "Diamond Cut" },
    ],
  },
  {
    id: "personal", name: "Personal & Freelancer", color: "cyan",
    description: "Human, authentic, personality-driven",
    templates: [
      { id: "nav-personal-hello", name: "Hello Intro" },
      { id: "nav-personal-photo", name: "Avatar Photo" },
      { id: "nav-personal-social", name: "Social Links" },
      { id: "nav-personal-minimal", name: "Name Only" },
      { id: "nav-personal-card", name: "Business Card" },
      { id: "nav-personal-blog", name: "Blog Style" },
      { id: "nav-personal-stack", name: "Tech Stack" },
      { id: "nav-personal-handwrite", name: "Handwritten" },
      { id: "nav-personal-gradient", name: "Soft Gradient" },
      { id: "nav-personal-dot", name: "Dot Indicator" },
    ],
  },
  {
    id: "restaurant", name: "Restaurant & Food", color: "orange",
    description: "Appetizing, warm, sensory",
    templates: [
      { id: "nav-restaurant-menu", name: "Menu Focus" },
      { id: "nav-restaurant-chef", name: "Chef Hat" },
      { id: "nav-restaurant-elegant", name: "Fine Dining" },
      { id: "nav-restaurant-rustic", name: "Rustic Wood" },
      { id: "nav-restaurant-modern", name: "Modern Bistro" },
      { id: "nav-restaurant-sushi", name: "Japanese Min" },
      { id: "nav-restaurant-pizza", name: "Italian Warm" },
      { id: "nav-restaurant-cafe", name: "Coffee Shop" },
      { id: "nav-restaurant-bar", name: "Bar Lounge" },
      { id: "nav-restaurant-reserve", name: "Reserve Table" },
    ],
  },
  {
    id: "education", name: "Education & Academy", color: "emerald",
    description: "Inspiring, structured, knowledge-driven",
    templates: [
      { id: "nav-edu-classic", name: "Academic" },
      { id: "nav-edu-modern", name: "E-Learning" },
      { id: "nav-edu-book", name: "Book Theme" },
      { id: "nav-edu-chalk", name: "Chalkboard" },
      { id: "nav-edu-campus", name: "Campus Map" },
      { id: "nav-edu-course", name: "Course Catalog" },
      { id: "nav-edu-bright", name: "Bright Youth" },
      { id: "nav-edu-lab", name: "Science Lab" },
      { id: "nav-edu-library", name: "Library Card" },
      { id: "nav-edu-minimal", name: "Clean Minimal" },
    ],
  },
  {
    id: "company", name: "Company", color: "blue",
    description: "Professional, trustworthy, corporate",
    templates: [
      { id: "nav-company-corporate", name: "Corporate" },
      { id: "nav-company-glass", name: "Glass Effect" },
      { id: "nav-company-dark", name: "Dark Pro" },
      { id: "nav-company-split", name: "Split Layout" },
      { id: "nav-company-mega", name: "Mega Menu" },
      { id: "nav-company-topbar", name: "Top Info Bar" },
      { id: "nav-company-centered", name: "Center Logo" },
      { id: "nav-company-sidebar", name: "Side Nav" },
      { id: "nav-company-modern", name: "Modern Clean" },
      { id: "nav-company-bold", name: "Bold Type" },
    ],
  },
  {
    id: "agency", name: "Creative Agency", color: "pink",
    description: "Bold, artistic, expressive",
    templates: [
      { id: "nav-agency-creative", name: "Creative Bold" },
      { id: "nav-agency-neon", name: "Neon Accent" },
      { id: "nav-agency-film", name: "Film Cinema" },
      { id: "nav-agency-grid", name: "Grid Layout" },
      { id: "nav-agency-paint", name: "Paint Art" },
      { id: "nav-agency-minimal", name: "Art Minimal" },
      { id: "nav-agency-bold", name: "Oversized" },
      { id: "nav-agency-dark", name: "Dark Moody" },
      { id: "nav-agency-color", name: "Color Block" },
      { id: "nav-agency-studio", name: "Studio Space" },
    ],
  },
  {
    id: "freelancer", name: "Freelancer", color: "cyan",
    description: "Personal, authentic, skill-focused",
    templates: [
      { id: "nav-freelancer-simple", name: "Simple Clean" },
      { id: "nav-freelancer-code", name: "Code Editor" },
      { id: "nav-freelancer-coffee", name: "Coffee Vibe" },
      { id: "nav-freelancer-desk", name: "Desktop Work" },
      { id: "nav-freelancer-badge", name: "ID Badge" },
      { id: "nav-freelancer-tools", name: "Tool Belt" },
      { id: "nav-freelancer-calendar", name: "Calendar" },
      { id: "nav-freelancer-connect", name: "Hire CTA" },
      { id: "nav-freelancer-portfolio", name: "Portfolio" },
      { id: "nav-freelancer-quotes", name: "Client Quote" },
    ],
  },
  {
    id: "resume", name: "Resume / CV", color: "violet",
    description: "Professional, personal, creative",
    templates: [
      { id: "nav-resume-paper", name: "Paper Doc" },
      { id: "nav-resume-timeline", name: "Timeline Nav" },
      { id: "nav-resume-tab", name: "Tab Sections" },
      { id: "nav-resume-minimal", name: "Name + Tabs" },
      { id: "nav-resume-card", name: "Card Header" },
      { id: "nav-resume-dashboard", name: "Dashboard" },
      { id: "nav-resume-terminal", name: "Terminal CLI" },
      { id: "nav-resume-scroll", name: "Scroll Paper" },
      { id: "nav-resume-blueprint", name: "Blueprint" },
      { id: "nav-resume-spotlight", name: "Spotlight" },
    ],
  },
  {
    id: "clinic", name: "Medical Clinic", color: "emerald",
    description: "Clean, trustworthy, caring",
    templates: [
      { id: "nav-clinic-clean", name: "Clean White" },
      { id: "nav-clinic-pulse", name: "Pulse Line" },
      { id: "nav-clinic-trust", name: "Trust Badge" },
      { id: "nav-clinic-booking", name: "Book Appt" },
      { id: "nav-clinic-emergency", name: "Emergency" },
      { id: "nav-clinic-modern", name: "Modern Care" },
      { id: "nav-clinic-care", name: "Patient Care" },
      { id: "nav-clinic-dna", name: "DNA Accent" },
      { id: "nav-clinic-shield", name: "Health Shield" },
      { id: "nav-clinic-green", name: "Nature Heal" },
    ],
  },
  {
    id: "real-estate", name: "Real Estate", color: "amber",
    description: "Premium, aspirational, location-focused",
    templates: [
      { id: "nav-realestate-luxury", name: "Luxury Prop" },
      { id: "nav-realestate-search", name: "Search Bar" },
      { id: "nav-realestate-modern", name: "Modern Clean" },
      { id: "nav-realestate-dark", name: "Dark Premium" },
      { id: "nav-realestate-gold", name: "Gold Accent" },
      { id: "nav-realestate-map", name: "Map Location" },
      { id: "nav-realestate-key", name: "Key Icon" },
      { id: "nav-realestate-glass", name: "Glass Effect" },
      { id: "nav-realestate-building", name: "Building Line" },
      { id: "nav-realestate-compass", name: "Compass Nav" },
    ],
  },
  {
    id: "photography", name: "Photography", color: "pink",
    description: "Visual, artistic, portfolio-driven",
    templates: [
      { id: "nav-photo-gallery", name: "Gallery Style" },
      { id: "nav-photo-dark", name: "Dark Room" },
      { id: "nav-photo-minimal", name: "Ultra Minimal" },
      { id: "nav-photo-film", name: "Film Strip" },
      { id: "nav-photo-aperture", name: "Aperture" },
      { id: "nav-photo-lightbox", name: "Lightbox" },
      { id: "nav-photo-viewfinder", name: "Viewfinder" },
      { id: "nav-photo-polaroid", name: "Polaroid" },
      { id: "nav-photo-exposure", name: "Exposure" },
      { id: "nav-photo-lens", name: "Lens Focus" },
    ],
  },
  {
    id: "law-firm", name: "Law Firm", color: "amber",
    description: "Authoritative, trustworthy, prestigious",
    templates: [
      { id: "nav-law-classic", name: "Classic Legal" },
      { id: "nav-law-column", name: "Greek Column" },
      { id: "nav-law-scales", name: "Scales" },
      { id: "nav-law-dark", name: "Dark Authority" },
      { id: "nav-law-gold", name: "Gold Serif" },
      { id: "nav-law-library", name: "Law Library" },
      { id: "nav-law-document", name: "Legal Doc" },
      { id: "nav-law-emblem", name: "Crest Emblem" },
      { id: "nav-law-marble", name: "Marble Hall" },
      { id: "nav-law-gavel", name: "Gavel Icon" },
    ],
  },
  {
    id: "gym", name: "Gym / Fitness", color: "red",
    description: "Energetic, powerful, motivating",
    templates: [
      { id: "nav-gym-energy", name: "High Energy" },
      { id: "nav-gym-dark", name: "Dark Red" },
      { id: "nav-gym-pulse", name: "Pulse Beat" },
      { id: "nav-gym-power", name: "Power Bar" },
      { id: "nav-gym-neon", name: "Neon Sign" },
      { id: "nav-gym-track", name: "Race Track" },
      { id: "nav-gym-flame", name: "Fire Flame" },
      { id: "nav-gym-steel", name: "Steel Metal" },
      { id: "nav-gym-timer", name: "Timer Clock" },
      { id: "nav-gym-champion", name: "Champion" },
    ],
  },
];

const creativeOriginals = [
  { id: "liquid-morphism", name: "Liquid Morphism", description: "Organic morphing blobs with glassmorphism cards" },
  { id: "isometric-world", name: "Isometric World", description: "CSS isometric city with rising buildings" },
  { id: "neon-noir", name: "Neon Noir", description: "Cyberpunk rain + flickering neon sign" },
  { id: "paper-layers", name: "Paper Layers", description: "SVG mountain paper-cut depth layers" },
  { id: "geometric-chaos", name: "Geometric Chaos", description: "Brutalist scattered shapes + bold type" },
  { id: "aurora-mesh", name: "Aurora Mesh", description: "Animated gradient mesh like northern lights" },
  { id: "split-personality", name: "Split Personality", description: "Diagonal split — light/dark halves" },
  { id: "retro-crt", name: "Retro CRT", description: "CRT monitor scanlines + terminal boot" },
  { id: "typewriter", name: "Typewriter", description: "Vintage typewriter with character-by-character typing" },
  { id: "constellation", name: "Constellation", description: "Deep space star map with twinkling nebula" },
  { id: "glitch-matrix", name: "Glitch Matrix", description: "Matrix falling characters + RGB aberration" },
  { id: "vinyl-record", name: "Vinyl Record", description: "Spinning CSS vinyl with grooves + equalizer" },
  { id: "origami", name: "Origami", description: "Japanese paper-fold cranes — zen minimal" },
  { id: "lava-lamp", name: "Lava Lamp", description: "70s psychedelic morphing blobs in glass tube" },
  { id: "blueprint", name: "Blueprint", description: "Architecture blueprint grid + technical drawings" },
  { id: "kaleidoscope", name: "Kaleidoscope", description: "Rotating symmetric jewel-tone rings" },
  { id: "smoke-reveal", name: "Smoke Reveal", description: "Cinematic smoke clears to reveal content" },
  { id: "pixel-rain", name: "Pixel Rain", description: "8-bit retro falling pixel blocks + arcade UI" },
];

const standaloneExperiments = [
  { id: "bento-hero", name: "Bento Grid Hero", description: "Asymmetric bento layout with gradient text" },
];

/* ── Color maps ──────────────────────────────────────────────── */
const borderColor: Record<string, string> = {
  blue: "border-blue-500/20 hover:border-blue-500/50",
  pink: "border-pink-500/20 hover:border-pink-500/50",
  violet: "border-violet-500/20 hover:border-violet-500/50",
  orange: "border-orange-500/20 hover:border-orange-500/50",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50",
  red: "border-red-500/20 hover:border-red-500/50",
  amber: "border-amber-500/20 hover:border-amber-500/50",
  cyan: "border-cyan-500/20 hover:border-cyan-500/50",
};

const dotColor: Record<string, string> = {
  blue: "bg-blue-500", pink: "bg-pink-500", violet: "bg-violet-500",
  orange: "bg-orange-500", emerald: "bg-emerald-500", red: "bg-red-500",
  amber: "bg-amber-500", cyan: "bg-cyan-500",
};

const linkColor: Record<string, string> = {
  blue: "hover:bg-blue-600", pink: "hover:bg-pink-600", violet: "hover:bg-violet-600",
  orange: "hover:bg-orange-600", emerald: "hover:bg-emerald-600", red: "hover:bg-red-600",
  amber: "hover:bg-amber-600", cyan: "hover:bg-cyan-600",
};

/* ── Page ─────────────────────────────────────────────────────── */
export default function TestIndexPage() {
  const blocks = getAllBlocks();
  const totalRegistry = blocks.reduce((sum, b) => sum + b.templates.length, 0);
  const totalHeroExp = heroCategories.reduce((s, c) => s + c.templates.length, 0) + creativeOriginals.length + standaloneExperiments.length;
  const totalNavExp = navCategories.reduce((s, c) => s + c.templates.length, 0);

  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string) => setActive(active === id ? null : id);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Component Test Lab</h1>
          <p className="text-gray-500 text-sm mt-1">
            Click a component to view its categories and templates.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            {blocks.length + 2} sections · {totalRegistry + totalHeroExp + totalNavExp} total templates
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-3">
        {/* ═══ Experimental Hero ═══ */}
        <div className="rounded-xl border border-indigo-500/20 overflow-hidden">
          <button
            onClick={() => toggle("hero-exp")}
            className={`w-full flex items-center gap-4 p-5 text-left transition-colors ${active === "hero-exp" ? "bg-indigo-500/10" : "bg-gray-900/50 hover:bg-gray-900"}`}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 font-bold text-lg shrink-0">
              H
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-lg">Experimental Hero</h2>
              <p className="text-xs text-gray-500">{heroCategories.length} categories · {heroCategories.reduce((s, c) => s + c.templates.length, 0)} templates · {creativeOriginals.length} creative originals</p>
            </div>
            <span className={`text-gray-500 text-xl transition-transform ${active === "hero-exp" ? "rotate-180" : ""}`}>▾</span>
          </button>

          {active === "hero-exp" && (
            <div className="border-t border-indigo-500/10 bg-gray-950/50 p-5 space-y-4">
              {/* Category cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {heroCategories.map((cat) => (
                  <div key={cat.id} className={`border rounded-xl overflow-hidden ${borderColor[cat.color]}`}>
                    <Link
                      href={`/test/home/${cat.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor[cat.color]}`} />
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-sm">{cat.name}</span>
                        <span className="text-xs text-gray-600 ml-2">{cat.templates.length}</span>
                      </div>
                    </Link>
                    <div className="px-3 pb-3 flex flex-wrap gap-1.5">
                      {cat.templates.map((t) => (
                        <Link
                          key={t.id}
                          href={`/test/home/${cat.id}/${t.id}`}
                          className={`text-xs bg-gray-800 ${linkColor[cat.color]} px-2.5 py-1 rounded transition-colors`}
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Creative Originals */}
                <div className="border border-purple-500/20 rounded-xl overflow-hidden">
                  <Link href="/test/home" className="flex items-center gap-3 p-3 hover:bg-white/[0.02] transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
                    <span className="font-semibold text-sm">Creative Originals</span>
                    <span className="text-xs text-gray-600">{creativeOriginals.length}</span>
                  </Link>
                  <div className="px-3 pb-3 flex flex-wrap gap-1.5">
                    {creativeOriginals.map((t) => (
                      <Link key={t.id} href={`/test/home/${t.id}`} className="text-xs bg-gray-800 hover:bg-purple-600 px-2.5 py-1 rounded transition-colors">
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Standalone */}
                {standaloneExperiments.map((t) => (
                  <Link key={t.id} href={`/test/home/${t.id}`} className="border border-gray-800 hover:border-gray-600 rounded-xl p-3 transition-colors">
                    <span className="font-semibold text-sm">{t.name}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{t.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ═══ Experimental Navigation ═══ */}
        <div className="rounded-xl border border-teal-500/20 overflow-hidden">
          <button
            onClick={() => toggle("nav-exp")}
            className={`w-full flex items-center gap-4 p-5 text-left transition-colors ${active === "nav-exp" ? "bg-teal-500/10" : "bg-gray-900/50 hover:bg-gray-900"}`}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center text-teal-400 font-bold text-lg shrink-0">
              N
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-lg">Experimental Navigation</h2>
              <p className="text-xs text-gray-500">{navCategories.length} categories · {totalNavExp} templates</p>
            </div>
            <span className={`text-gray-500 text-xl transition-transform ${active === "nav-exp" ? "rotate-180" : ""}`}>▾</span>
          </button>

          {active === "nav-exp" && (
            <div className="border-t border-teal-500/10 bg-gray-950/50 p-5 space-y-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {navCategories.map((cat) => (
                  <div key={cat.id} className={`border rounded-xl overflow-hidden ${borderColor[cat.color]}`}>
                    <Link
                      href={`/test/nav/${cat.id}`}
                      className="flex items-center gap-3 p-3 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor[cat.color]}`} />
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-sm">{cat.name}</span>
                        <span className="text-xs text-gray-600 ml-2">{cat.templates.length}</span>
                      </div>
                    </Link>
                    <div className="px-3 pb-3 flex flex-wrap gap-1.5">
                      {cat.templates.map((t) => (
                        <Link
                          key={t.id}
                          href={`/test/nav/${cat.id}/${t.id}`}
                          className={`text-xs bg-gray-800 ${linkColor[cat.color]} px-2.5 py-1 rounded transition-colors`}
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ═══ Registry Blocks ═══ */}
        {blocks.map((block) => (
          <div key={block.type} className="rounded-xl border border-gray-800 overflow-hidden">
            <button
              onClick={() => toggle(block.type)}
              className={`w-full flex items-center gap-4 p-5 text-left transition-colors ${active === block.type ? "bg-gray-800/50" : "bg-gray-900/50 hover:bg-gray-900"}`}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm uppercase shrink-0">
                {block.type.slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg">{block.label}</h2>
                <p className="text-xs text-gray-500">{block.templates.length} templates · {block.category}</p>
              </div>
              <Link
                href={`/test/${block.type}`}
                onClick={(e) => e.stopPropagation()}
                className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg transition-colors shrink-0 mr-3"
              >
                Stacked View
              </Link>
              <span className={`text-gray-500 text-xl transition-transform ${active === block.type ? "rotate-180" : ""}`}>▾</span>
            </button>

            {active === block.type && (
              <div className="border-t border-gray-800 bg-gray-950/50 p-5">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {block.templates.map((t) => (
                    <Link
                      key={t.id}
                      href={`/test/${block.type}/${t.id}`}
                      className="flex items-center gap-3 bg-gray-900 border border-gray-800 hover:border-emerald-500/40 rounded-lg px-4 py-3 transition-colors"
                    >
                      <div className="w-7 h-7 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-[10px] font-bold shrink-0">
                        {t.id.split("-").pop()?.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm">{t.name}</p>
                        <p className="text-xs text-gray-600 truncate">{t.id}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          {blocks.length + 2} sections · {totalRegistry + totalHeroExp + totalNavExp} total templates
        </div>
      </div>
    </div>
  );
}
