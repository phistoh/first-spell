LootJS.lootTables((event) => {
  const chests_capsule = [
    "abandoned_mineshaft",
    "simple_dungeon",
    "stronghold_library",
    "shipwreck_supply"
  ];

  for (const chest of chests_capsule) {
    event.getLootTable(`minecraft:chests/${chest}`).createPool((pool) => {
      pool
        .rolls([0, 1])
        .addEntry(LootEntry.of("cobblemon:ability_capsule"))
        .when((condition) => {
          condition.randomChance(0.1);
        });
    });
  }

  const chests_patch = [
    "ancient_city",
    "end_city_treasure",
    "trial_chambers/reward_ominous_rare"
  ];

  for (const chest of chests_patch) {
    event.getLootTable(`minecraft:chests/${chest}`).createPool((pool) => {
      pool
        .rolls([0, 1])
        .addEntry(LootEntry.of("cobblemon:ability_capsule"))
        .when((condition) => {
          condition.randomChance(0.05);
        });
    });
  }
});
