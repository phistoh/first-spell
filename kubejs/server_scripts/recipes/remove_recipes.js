ServerEvents.recipes((event) => {
  event.remove({ id: "irons_spellbooks:divine_pearl" });
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
  ];
  for (const trim_duplication_id of trim_duplication_ids) {
    event.remove({ id: trim_duplication_id });
  }

  event.remove({ id: "minecraft:spectral_arrow" });
  event.remove({ id: "irons_spellbooks:hogskin_to_leather" });
  
  event.remove({ id: "simpletms:tm_blank_netherite_block" });
});
