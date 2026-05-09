import { pgTable, text, integer, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: integer("created_at").notNull(),
});

export const sites = pgTable("sites", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  industry: text("industry").notNull(),
  theme: text("theme").notNull(), // JSON string of SiteTheme
  language: text("language").notNull().default("en"),
  status: text("status")
    .notNull()
    .default("draft"),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});

export const sections = pgTable("sections", {
  id: text("id").primaryKey(),
  siteId: text("site_id")
    .notNull()
    .references(() => sites.id, { onDelete: "cascade" }),
  blockType: text("block_type").notNull(),
  templateId: text("template_id").notNull(),
  config: text("config").notNull(), // JSON string
  sortOrder: integer("sort_order").notNull(),
  isVisible: boolean("is_visible").notNull().default(true),
});
