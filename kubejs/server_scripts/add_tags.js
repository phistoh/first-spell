ServerEvents.tags("item", (event) => {
  // Make Corrupted Blade behave like Farmer's Delight knives
  const knife_tags = [
    "c:enchantable/damage_primary",
    "c:enchantable/fire_aspect_primary",
    "c:enchantable/knockback",
    "c:enchantable/mob_loot",
    "c:enchantables",
    "c:tools",
    "c:tools/knife",
    "farmersdelight:enchantable/knife",
    "farmersdelight:straw_harvesters",
    "farmersdelight:tools/knives",
    "majospellenchantment:mana_reaper_compatible",
    "minecraft:breaks_decorated_pots",
    "minecraft:enchantable/durability",
    "minecraft:enchantable/fire_aspect",
    "minecraft:enchantable/mining",
    "minecraft:enchantable/mining_loot",
    "minecraft:enchantable/sharp_weapon",
    "minecraft:enchantable/sword",
    "minecraft:enchantable/vanishing",
    "minecraft:enchantable/weapon",
  ];

  for (let tag of knife_tags) {
    event.add(tag, "endermanoverhaul:corrupted_blade");
  }

  // Corrupted Shield is a Shield!
  event.add("c:tools/shield", "endermanoverhaul:corrupted_shield");
  event.add("c:tools/shields", "endermanoverhaul:corrupted_shield");

  // Arcane Essence related
  // event.add(
  //   "fated_inventory:charges_fated_altar",
  //   "irons_spellbooks:arcane_essence"
  // );
  event.add("sneakycurses:reveals_curses", "irons_spellbooks:arcane_essence");

  // Rock splitter tag
  const rock_splitter = [
    "rocks:cobblestone_splitter",
    "rocks:granite_splitter",
    "rocks:diorite_splitter",
    "rocks:andesite_splitter",
    "rocks:sandstone_splitter",
    "rocks:red_sandstone_splitter",
    "rocks:end_stone_splitter_splitter",
    "rocks:netherrack_splitter",
    "rocks:soul_soil_splitter",
    "minecraft:flint",
    "minecraft:prismarine_shard",
  ];
  for (const splitter of rock_splitter) {
    event.add("rocks:splitter", splitter);
  }

  // Nether bricks (for Nether chest)
  event.add("phis:nether_bricks", "minecraft:nether_bricks");
  event.add("phis:nether_bricks", "minecraft:chiseled_nether_bricks");
  event.add("phis:nether_bricks", "minecraft:cracked_nether_bricks");
  event.add("phis:nether_bricks", "minecraft:red_nether_bricks");

  // Ender Eyes
  event.add("phis:ender_eye", "minecraft:ender_eye");
  event.add("phis:ender_eye", "endrem:black_eye");
  event.add("phis:ender_eye", "endrem:cold_eye");
  event.add("phis:ender_eye", "endrem:corrupted_eye");
  event.add("phis:ender_eye", "endrem:cursed_eye");
  event.add("phis:ender_eye", "endrem:guardian_eye");
  event.add("phis:ender_eye", "endrem:lost_eye");
  event.add("phis:ender_eye", "endrem:magical_eye");
  event.add("phis:ender_eye", "endrem:nether_eye");
  event.add("phis:ender_eye", "endrem:old_eye");
  event.add("phis:ender_eye", "endrem:rogue_eye");
  event.add("phis:ender_eye", "endrem:evil_eye");
  event.add("phis:ender_eye", "endrem:cryptic_eye");
  event.add("phis:ender_eye", "endrem:wither_eye");
  event.add("phis:ender_eye", "endrem:witch_eye");
  event.add("phis:ender_eye", "endrem:undead_eye");
  event.add("phis:ender_eye", "endrem:exotic_eye");

  // Enchanting Tables
  event.add("phis:enchanting_table", "minecraft:enchanting_table");
  // event.add("phis:enchanting_table", "enchant_revised:enchant_altar");

  // Sticky Crafting
  event.add(
    "map_atlases:sticky_crafting_items",
    "moresnifferflowers:corrupted_slime_ball",
  );
  event.add(
    "map_atlases:sticky_crafting_items",
    "crittersandcompanions:sea_bunny_slime_bottle",
  );
  event.add("map_atlases:sticky_crafting_items", "minecraft:slime_ball");
  event.add("map_atlases:sticky_crafting_items", "minecraft:honey_bottle");

  // Ink
  event.add("phis:ink", "supplementaries:antique_ink");
  event.add("phis:ink", "irons_spellbooks:common_ink");
  event.add("phis:ink", "irons_spellbooks:uncommon_ink");
  event.add("phis:ink", "irons_spellbooks:rare_ink");
  event.add("phis:ink", "irons_spellbooks:epic_ink");
  event.add("phis:ink", "irons_spellbooks:legendary_ink");

  // Diamond Shears
  event.add("c:enchantables", "kubejs:diamond_shears");
  event.add("enchantencore:all_enchantable", "kubejs:diamond_shears");
  event.add("enchantencore:all_tools", "kubejs:diamond_shears");
  event.add("minecraft:enchantable/durability", "kubejs:diamond_shears");
  event.add("minecraft:enchantable/vanishing", "kubejs:diamond_shears");
  event.add("enchantencore:no_weapons", "kubejs:diamond_shears");
  event.add("c:tools/shears", "kubejs:diamond_shears");
  event.add("minecraft:enchantable/mining", "kubejs:diamond_shears");

  // Plushies
  const plushies = [
    "plushie_allay",
    "plushie_axolotl",
    "plushie_bee",
    "plushie_chicken",
    "plushie_cow",
    "plushie_fox",
    "plushie_parrot",
    "plushie_pig",
    "plushie_sheep",
    "plushie_turtle",
    "plushie_camel",
    "plushie_cat",
    "plushie_creeper",
    "plushie_dolphin",
    "plushie_enderdragon",
    "plushie_enderman",
    "plushie_frog",
    "plushie_ghast",
    "plushie_goat",
    "plushie_horse",
    "plushie_mooshroom",
    "plushie_panda",
    "plushie_polar_bear",
    "plushie_pufferfish",
    "plushie_rabbit",
    "plushie_skeleton_horse",
    "plushie_sniffer",
    "plushie_squid",
    "plushie_wolf",
    "plushie_donkey",
    "plushie_bat",
    "plushie_phantom",
    "plushie_skeleton",
    "plushie_spider",
    "plushie_warden",
    "plushie_witch",
    "plushie_wither",
    "plushie_wither_skeleton",
    "plushie_zoglin",
    "plushie_zombie",
    "plushie_trader_lama",
    "plushie_villager",
    "plushie_wandering_trader",
    "plushie_zombie_villager",
    "plushie_iron_golem",
    "plushie_evoker",
    "plushie_pillager",
    "plushie_ravanger",
    "plushie_vex",
    "plushie_vindicator",
    "plushie_blaze",
    "plushie_drowned",
    "plushie_hoglin",
    "plushie_husk",
    "plushie_magma_cube",
    "plushie_piglin",
    "plushie_piglin_brute",
    "plushie_stray",
    "plushie_strider",
    "plushie_zombified_piglin",
    "plushie_armadillo",
    "plushie_breeze",
    "plushie_cave_spider",
    "plushie_glow_squid",
    "plushie_guardian",
    "plushie_llama",
    "plushie_mule",
    "plushie_shulker",
    "plushie_slime",
    "plushie_elder_guardian",
    "plushie_peter",
    "plushie_dark_father",
    "plushie_emperor",
    "plushie_yoga",
    "plushie_chewie",
    "plushie_dan_rolo",
    "plushie_storm_soldier",
  ];
  for (const plush of plushies) {
    event.add("phis:plushies", `plushie_buddies:${plush}`);
  }

  event.add("c:tools/ranged_weapon", "simplemusket:musket");

  // Tag for Enhanced Celestials
  event.add("phis:magic_drops", "irons_spellbooks:arcane_essence");
  event.add("phis:magic_drops", "irons_restrictions:manuscript");
  event.add("phis:magic_drops", "irons_spellbooks:scroll");
  event.add("phis:magic_drops", "#irons_spellbooks:school_focus");
});

ServerEvents.tags("block", (event) => {
  // Heat Sources
  event.add("farmersdelight:heat_sources", "rubinated_nether:ruby_brazier");
  event.add("farmersdelight:heat_sources", "irons_spellbooks:brazier");
  event.add("farmersdelight:heat_sources", "irons_spellbooks:brazier_soul");
});
