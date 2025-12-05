LootJS.modifiers((event) => {
  const undead_mobs = [
    "minecraft:bogged",
    "minecraft:drowned",
    "minecraft:husk",
    "minecraft:phantom",
    "minecraft:skeleton",
    "minecraft:skeleton_horse",
    "minecraft:stray",
    "minecraft:wither",
    "minecraft:wither_skeleton",
    "minecraft:zoglin",
    "minecraft:zombie",
    "minecraft:zombie_horse",
    "minecraft:zombie_villager",
    "minecraft:zombified_piglin",
    "variantsandventures:gelid",
    "variantsandventures:murk",
    "variantsandventures:thicket",
    "variantsandventures:verdant",
    "mounts_of_mayhem:zombie_nautilus",
    "mounts_of_mayhem:parched",
    "netherdepthsupgrade:wither_bonefish",
    "bosses_of_mass_destruction:lich",
  ];

  for (const undead_mob of undead_mobs) {
    event.addTableModifier(undead_mob).pool((pool) => {
      pool
        .addEntry(LootEntry.of("kubejs:bottled_undead_soul").setCount([0, 1]))
        .when((condition) => {
          condition.randomChance(0.1);
        });
    });
  }
});
