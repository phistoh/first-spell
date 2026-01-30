LootJS.modifiers((event) => {
  const echo_mobs = [
    "deeperdarker:entities/sculk_centipede",
    "deeperdarker:entities/sculk_snapper",
    "deeperdarker:entities/sculk_snapper",
  ];

  for (const echo_mob of echo_mobs) {
    event.addTableModifier(echo_mob).pool((pool) => {
      pool
        .addEntry(LootEntry.of("minecraft:echo_shard").setCount([0, 1]))
        .when((condition) => {
          condition.randomChance(0.01);
        });
    });
  }
});