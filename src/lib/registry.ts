import type {
  BlockType,
  BlockDefinition,
  BlockCategory,
  TemplateEntry,
} from "@/types/blocks";

const registry = new Map<BlockType, BlockDefinition>();

export function registerBlock(definition: BlockDefinition): void {
  registry.set(definition.type, definition);
}

export function getBlock(type: BlockType): BlockDefinition {
  const def = registry.get(type);
  if (!def) throw new Error(`Block "${type}" not registered`);
  return def;
}

export function getTemplate(
  type: BlockType,
  templateId: string
): TemplateEntry {
  const block = getBlock(type);
  const template = block.templates.find((t) => t.id === templateId);
  if (!template)
    throw new Error(
      `Template "${templateId}" not found for block "${type}"`
    );
  return template;
}

export function getAllBlocks(): BlockDefinition[] {
  return Array.from(registry.values());
}

export function getBlocksByCategory(
  category: BlockCategory
): BlockDefinition[] {
  return getAllBlocks().filter((b) => b.category === category);
}
