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
  event.add('c:tools/shield', 'endermanoverhaul:corrupted_shield')
  event.add('c:tools/shields', 'endermanoverhaul:corrupted_shield')

  // Arcane Essence related
  // event.add(
  //   "fated_inventory:charges_fated_altar",
  //   "irons_spellbooks:arcane_essence"
  // );
  event.add(
    "sneakycurses:reveals_curses",
    "irons_spellbooks:arcane_essence"
  );

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
    "minecraft:prismarine_shard"
  ]
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
  event.add("map_atlases:sticky_crafting_items", "moresnifferflowers:corrupted_slime_ball");
  event.add("map_atlases:sticky_crafting_items", "crittersandcompanions:sea_bunny_slime_bottle");
});

ServerEvents.tags("block", (event) => {
  // Heat Sources
  event.add("farmersdelight:heat_sources", "rubinated_nether:ruby_brazier");
  event.add("farmersdelight:heat_sources", "irons_spellbooks:brazier");
  event.add("farmersdelight:heat_sources", "irons_spellbooks:brazier_soul");
});
