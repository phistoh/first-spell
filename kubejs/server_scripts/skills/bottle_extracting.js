ItemEvents.rightClicked("kubejs:arcane_infused_bottle", (event) => {
  const { player, item, hand } = event;

  const extractable_liquids = {
    "biomesoplenty:blood": "irons_spellbooks:blood_vial",
  };

  if (!player.tags.contains("phis.extract_blood")) return;
  if (
    !player.rayTrace().block ||
    !extractable_liquids[player.rayTrace().block.id]
  )
    return;

  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  player.runCommandSilent(
    "playsound minecraft:item.bottle.fill master @s ~ ~ ~"
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  player.give(extractable_liquids[player.rayTrace().block.id]);
});

ItemEvents.entityInteracted("kubejs:arcane_infused_bottle", (event) => {
  const { target, player, item, hand } = event;

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
    "minecraft:snowy_taiga",
  ];

  const potion_effects = [
    "slowness",
    "poison",
    "weakness",
    "harming",
    "water_breathing",
    "fire_resistance",
    "healing",
    "swiftness",
  ];

  const extractable_liquids = {
    "minecraft:bogged": "kubejs:bottled_undead_soul",
    "minecraft:drowned": "kubejs:bottled_undead_soul",
    "minecraft:husk": "kubejs:bottled_undead_soul",
    "minecraft:phantom": "kubejs:bottled_undead_soul",
    "minecraft:skeleton": "kubejs:bottled_undead_soul",
    "minecraft:skeleton_horse": "kubejs:bottled_undead_soul",
    "minecraft:stray": "kubejs:bottled_undead_soul",
    "minecraft:wither": "kubejs:bottled_undead_soul",
    "minecraft:wither_skeleton": "kubejs:bottled_undead_soul",
    "minecraft:zoglin": "kubejs:bottled_undead_soul",
    "minecraft:zombie": "kubejs:bottled_undead_soul",
    "minecraft:zombie_horse": "kubejs:bottled_undead_soul",
    "minecraft:zombie_villager": "kubejs:bottled_undead_soul",
    "minecraft:zombified_piglin": "kubejs:bottled_undead_soul",
    "variantsandventures:gelid": "kubejs:bottled_undead_soul",
    "variantsandventures:murk": "kubejs:bottled_undead_soul",
    "variantsandventures:thicket": "kubejs:bottled_undead_soul",
    "variantsandventures:verdant": "kubejs:bottled_undead_soul",
    "mounts_of_mayhem:zombie_nautilus": "kubejs:bottled_undead_soul",
    "mounts_of_mayhem:parched": "kubejs:bottled_undead_soul",
    "netherdepthsupgrade:wither_bonefish": "kubejs:bottled_undead_soul",
    "bosses_of_mass_destruction:lich": "kubejs:bottled_undead_soul",
    "minecraft:cave_spider": "alshanex_familiars:poison_vial",
    "minecraft:spider": "irons_spellbooks:ice_venom_vial",
    "minecraft:glow_squid": "supplementaries:lumisene_bottle",
    "minecraft:pillager": "minecraft:ominous_bottle",
    "minecraft:evoker": "minecraft:ominous_bottle",
    "minecraft:vindicator": "minecraft:ominous_bottle",
    "friendsandfoes:illusioner": "minecraft:ominous_bottle",
    "simplemusket:musket_pillager": "minecraft:ominous_bottle",
    "minecraft:witch": 'minecraft:potion[potion_contents={potion:"slowness"}]',
  };

  if (!player.tags.contains("phis.extract_various")) return;
  if (!extractable_liquids[target.type]) return;
  const current_biome = player.level
    .getBiome(player.blockPosition())
    .getRegisteredName();
  if (
    target.type == "minecraft:spider" &&
    !snowy_biomes.includes(current_biome)
  )
    return;

  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  player.runCommandSilent(
    "playsound minecraft:item.bottle.fill master @s ~ ~ ~"
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  if (target.type == "minecraft:witch") {
    const potion_effect =
      potion_effects[Math.floor(Math.random() * potion_effects.length)];
    player.give(
      `minecraft:potion[potion_contents={potion:\"${potion_effect}\"}]`
    );
  } else {
    player.give(extractable_liquids[target.type]);
  }
  player.addItemCooldown("kubejs:arcane_infused_bottle", 1 * 20);
});
