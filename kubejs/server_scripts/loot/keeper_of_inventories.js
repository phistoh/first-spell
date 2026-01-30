LootJS.lootTables((event) => {
  const mobs = [
    "minecraft:entities/evoker",
    "minecraft:entities/guardian",
    "minecraft:entities/piglin_brute",
    "minecraft:entities/wither_skeleton",
    "irons_spellbooks:entities/necromancer",
  ];

  for (const mob of mobs) {
    event.getLootTable(mob).createPool((pool) => {
      pool
        .rolls([0, 1])
        .addEntry(LootEntry.of("keeperofinventories:keeper_of_inventories"))
        .when((condition) => {
          condition.killedByPlayer() && condition.randomChance(0.01);
        });
    });
  }
});
