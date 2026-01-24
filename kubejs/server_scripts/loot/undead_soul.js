LootJS.lootTables((event) => {
  const undead_mobs = [
    "minecraft:entities/bogged",
    "minecraft:entities/drowned",
    "minecraft:entities/husk",
    "minecraft:entities/phantom",
    "minecraft:entities/skeleton",
    "minecraft:entities/skeleton_horse",
    "minecraft:entities/stray",
    "minecraft:entities/wither",
    "minecraft:entities/wither_skeleton",
    "minecraft:entities/zoglin",
    "minecraft:entities/zombie",
    "minecraft:entities/zombie_horse",
    "minecraft:entities/zombie_villager",
    "minecraft:entities/zombified_piglin",
    "variantsandventures:entities/gelid",
    "variantsandventures:entities/murk",
    "variantsandventures:entities/thicket",
    "variantsandventures:entities/verdant",
    "netherdepthsupgrade:entities/wither_bonefish",
    "bosses_of_mass_destruction:entities/lich",
  ];

  for (const undead_mob of undead_mobs) {
    event.getLootTable(undead_mob).createPool((pool) => {
      pool.rolls([0,1])
        .addEntry(LootEntry.of("endrem:undead_soul"))
        .when((condition) => {
          condition.randomChance(0.1);
        });
    });
  }
});
