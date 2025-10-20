LootJS.lootTables((event) => {
  event.modifyBlockTables("minecraft:diamond_ore").createPool((pool) => {
    pool.addEntry(LootEntry.of("minecraft:diamond")).when((condition) => {
      condition.matchMainHand(
        ItemFilter.hasEnchantment("minecraft:silk_touch").negate()
      ) &&
        condition.matchPlayerCustom((player) => {
          return player.tags.contains("phis.extradiamond");
        });
    });
  });
});