LootJS.modifiers((event) => {
  const snowy_biomes = [
    "biomesoplenty:auroral_garden",
    "biomesoplenty:cold_desert",
    "minecraft:cold_ocean",
    "minecraft:deep_cold_ocean",
    "minecraft:deep_frozen_ocean",
    "minecraft:frozen_ocean",
    "minecraft:frozen_peaks",
    "minecraft:frozen_river",
    "minecraft:ice_spikes",
    "minecraft:jagged_peaks",
    "biomesoplenty:muskeg",
    "minecraft:snowy_beach",
    "biomesoplenty:snowy_coniferous_forest",
    "biomesoplenty:snowy_fir_clearing",
    "biomesoplenty:snowy_maple_woods",
    "biomesoplenty:snowblossom_grove",
    "minecraft:snowy_plains",
    "minecraft:snowy_slopes",
    "minecraft:snowy_taiga"
  ];

  event.addTableModifier(/minecraft:.*spider.*/).pool((pool) => {
    pool
      .addEntry(
        LootEntry.of("irons_spellbooks:icy_fang")
          .setCount([0, 2])
          .applyEnchantmentBonus([0, 1])
      )
      .when((condition) => {
        condition.randomChance(0.1) &&
          condition.matchBiome(snowy_biomes);
      });
  });
});
