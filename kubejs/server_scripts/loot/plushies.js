LootJS.lootTables((event) => {
  const chests = [
    "abandoned_mineshaft",
    "bastion_bridge",
    "igloo_chest",
    "pillager_outpost",
    "shipwreck_treasure",
    "simple_dungeon",
    "stronghold_corridor",
    "village/village_desert_house",
    "village/village_plains_house",
    "village/village_savanna_house",
    "village/village_snowy_house",
    "village/village_taiga_house",
    "woodland_mansion",
  ];

  for (const chest of chests) {
    event.getLootTable(`minecraft:chests/${chest}`).createPool((pool) => {
      pool
        .rolls([0, 1])
        .addEntry(LootEntry.tag("#phis:plushies"))
        .when((condition) => {
          condition.randomChance(0.1);
        });
    });
  }

  const baby_mobs = ["zombie"];

  for (const mob of baby_mobs) {
    event.getLootTable(`minecraft:entities/${mob}`).createPool((pool) => {
      pool
        .rolls([0, 1])
        .addEntry(LootEntry.tag("#phis:plushies"))
        .when((condition) => {
          condition.randomChance(0.02) &&
            condition.killedByPlayer() &&
            condition.matchEntityCustom((entity) => {
              return entity.baby;
            });
        });
    });
  }
});
