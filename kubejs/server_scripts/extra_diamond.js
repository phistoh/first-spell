LootJS.lootTables((event) => {
  const block_tables = [
    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",
    "deeperdarker:gloomslate_diamond_ore",
    "deeperdarker:sculk_stone_diamond_ore",
    "ditr:obsidian_diamond_ore"
  ];
  for (const block of block_tables) {
    event.modifyBlockTables(block).createPool((pool) => {
      pool.addEntry(LootEntry.of("minecraft:diamond")).when((condition) => {
        condition.matchMainHand(
          ItemFilter.hasEnchantment("minecraft:silk_touch").negate()
        ) &&
          condition.matchPlayerCustom((player) => {
            return player.tags.contains("phis.extradiamond");
          });
      });
    });
  }
});
