LootJS.lootTables((event) => {
  const block_tables = [
    "rocks:rock",
    "rocks:granite_rock",
    "rocks:diorite_rock",
    "rocks:andesite_rock",
    "rocks:sand_rock",
    "rocks:red_sand_rock",
    "rocks:gravel_rock",
    "rocks:end_stone_rock",
    "rocks:netherrack_rock",
    "rocks:soul_soil_rock",
  ];
  for (const block of block_tables) {
    event.modifyBlockTables(block).createPool((pool) => {
      pool
        .addEntry(LootEntry.of("minecraft:redstone").withWeight(49))
        .addEntry(LootEntry.of("minecraft:glowstone_dust").withWeight(25))
        .addEntry(LootEntry.of("deeperdarker:soul_dust").withWeight(1))
        .addEntry(LootEntry.of("kubejs:diamond_dust").withWeight(9))
        .addEntry(LootEntry.of("rubinated_nether:bronze_powder").withWeight(36))
        .addEntry(
          LootEntry.of("irons_spellbooks:arcane_essence").withWeight(16)
        )
        .addEntry(LootEntry.of("irons_spellbooks:cinder_essence").withWeight(4))
        .name("Extra Dust")
        .when((condition) => {
          condition.matchMainHand(
            ItemFilter.hasEnchantment("minecraft:silk_touch").negate()
          ) &&
            condition.matchPlayerCustom((player) => {
              return player.tags.contains("phis.extradust");
            }) &&
            condition.randomChance(0.1);
        });
    });
  }
});
