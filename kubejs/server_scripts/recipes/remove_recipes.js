ServerEvents.recipes((event) => {
  event.remove({ id: "irons_spellbooks:spider_den_map" });
  event.remove({ id: "irons_spellbooks:citadel_map" });
  const trim_duplication_ids = [
    "minecraft:sentry_armor_trim_smithing_template",
    "minecraft:vex_armor_trim_smithing_template",
    "minecraft:wild_armor_trim_smithing_template",
    "minecraft:coast_armor_trim_smithing_template",
    "minecraft:dune_armor_trim_smithing_template",
    "minecraft:wayfinder_armor_trim_smithing_template",
    "minecraft:raiser_armor_trim_smithing_template",
    "minecraft:shaper_armor_trim_smithing_template",
    "minecraft:host_armor_trim_smithing_template",
    "minecraft:ward_armor_trim_smithing_template",
    "minecraft:silence_armor_trim_smithing_template",
    "minecraft:tide_armor_trim_smithing_template",
    "minecraft:snout_armor_trim_smithing_template",
    "minecraft:rib_armor_trim_smithing_template",
    "minecraft:eye_armor_trim_smithing_template",
    "minecraft:spire_armor_trim_smithing_template",
    "minecraft:flow_armor_trim_smithing_template",
    "minecraft:bolt_armor_trim_smithing_template",
    "moresnifferflowers:aroma_armor_trim_smithing_template_from_trim_crafting",
    "moresnifferflowers:carnage_armor_trim_smithing_template_from_trim_crafting",
    "moresnifferflowers:carotene_armor_trim_smithing_template_from_trim_crafting",
    "moresnifferflowers:tater_armor_trim_smithing_template_from_trim_crafting",
    "moresnifferflowers:grain_armor_trim_smithing_template_from_trim_crafting",
    "moresnifferflowers:beat_armor_trim_smithing_template_from_trim_crafting",
    "moresnifferflowers:nether_wart_armor_trim_smithing_template_from_trim_crafting",
    "cobblemon:automaton_armor_trim_smithing_template",
  ];
  for (const trim_duplication_id of trim_duplication_ids) {
    event.remove({ id: trim_duplication_id });
  }

  event.remove({ id: "minecraft:spectral_arrow" });
  event.remove({ id: "irons_spellbooks:hogskin_to_leather" });

  event.remove({ id: "simpletms:tm_blank_netherite_block" });

  event.remove({ id: "irons_spellbooks:wayward_compass" });

  event.remove({ id: "unbreakablecatalyst:unbreakable_catalyst" });

  // double recipes
  event.remove({ id: "vanillabackport:saddle" });
  event.remove({ id: "leafscopperbackport:copper_nugget_recipe" });
  event.remove({ id: "leafscopperbackport:blast_copper_leggings" });
  event.remove({ id: "leafscopperbackport:blast_copper_axe" });
  event.remove({ id: "leafscopperbackport:blast_copper_shovel" });
  event.remove({ id: "leafscopperbackport:blast_copper_helmet" });
  event.remove({ id: "leafscopperbackport:blast_copper_sword" });
  event.remove({ id: "leafscopperbackport:blast_copper_chestplate" });
  event.remove({ id: "leafscopperbackport:blast_copper_pickaxe" });
  event.remove({ id: "leafscopperbackport:blast_copper_hoe" });
  event.remove({ id: "leafscopperbackport:blast_copper_boots" });
  event.remove({ id: "leafscopperbackport:smelt_copper_leggings" });
  event.remove({ id: "leafscopperbackport:smelt_copper_axe" });
  event.remove({ id: "leafscopperbackport:smelt_copper_shovel" });
  event.remove({ id: "leafscopperbackport:smelt_copper_helmet" });
  event.remove({ id: "leafscopperbackport:smelt_copper_sword" });
  event.remove({ id: "leafscopperbackport:smelt_copper_chestplate" });
  event.remove({ id: "leafscopperbackport:smelt_copper_pickaxe" });
  event.remove({ id: "leafscopperbackport:smelt_copper_hoe" });
  event.remove({ id: "leafscopperbackport:smelt_copper_boots" });
  event.remove({ id: "leafscopperbackport:copper_ingot_recipe" });
});
