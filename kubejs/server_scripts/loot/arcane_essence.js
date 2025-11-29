LootJS.modifiers((event) => {
  event
    .addTableModifier(LootType.ENTITY)
    .pool((pool) => {
      pool
        .addEntry(LootEntry.of("irons_spellbooks:arcane_essence").applyEnchantmentBonus([0,1]))
        .when((condition) => {
          condition.randomChance(0.05) &&
            condition.matchPlayerCustom((player) => {
              return player.tags.contains("phis.arcane_essence");
            });
        });
    })
});

