LootJS.modifiers((event) => {
  const magic_mobs = ["archevoker", "necromancer", "cryomancer", "pyromancer"];

  for (const magic_mob of magic_mobs) {
    event
      .addTableModifier(`irons_spellbooks:entities/${magic_mob}`)
      .pool((pool) => {
        pool
          .addEntry(LootEntry.of("endrem:magical_eye").setCount([0, 1]))
          .when((condition) => {
            condition.randomChanceWithEnchantment(
              "minecraft:looting",
              [0.05, 0.075, 0.1, 0.2]
            );
          });
      });
  }
});

LootJS.modifiers((event) => {
  event.addTableModifier("friendsandfoes:entities/iceologer").pool((pool) => {
    pool
      .addEntry(LootEntry.of("endrem:cold_eye").setCount([0, 1]))
      .when((condition) => {
        condition.randomChanceWithEnchantment(
          "minecraft:looting",
          [0.05, 0.075, 0.1, 0.2]
        );
      });
  });
});
