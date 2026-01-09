LootJS.lootTables((event) => {
  const skeletons = [
    "realmrpg_skeletons:acrobat_skeleton",
    "realmrpg_skeletons:arrow_skeleton",
    "realmrpg_skeletons:basic_skeleton",
    "realmrpg_skeletons:bow_skeleton",
    "realmrpg_skeletons:buried_skeleton",
    "realmrpg_skeletons:burnt_skeleton",
    "realmrpg_skeletons:cactus_skeleton",
    "realmrpg_skeletons:chorus_skeleton",
    "realmrpg_skeletons:chorus_tangled_skeleton",
    "realmrpg_skeletons:common_skeleton",
    "realmrpg_skeletons:corrupted_skeleton",
    "realmrpg_skeletons:crimson_tangled_skeleton",
    "realmrpg_skeletons:crystal_skeleton",
    "realmrpg_skeletons:devastated_skeleton",
    "realmrpg_skeletons:dragon_burnt_skeleton",
    "realmrpg_skeletons:dripstone_skeleton",
    "realmrpg_skeletons:duelist_skeleton",
    "realmrpg_skeletons:dungeon_crawler_skeleton",
    "realmrpg_skeletons:dusty_skeleton",
    "realmrpg_skeletons:explorer_skeleton",
    "realmrpg_skeletons:frozen_waterdrop_skeleton",
    "realmrpg_skeletons:fungus_gatherer_skeleton",
    "realmrpg_skeletons:headache_skeleton",
    "realmrpg_skeletons:headless_skeleton",
    "realmrpg_skeletons:hunted_skeleton",
    "realmrpg_skeletons:lucky_skeleton",
    "realmrpg_skeletons:melted_skeleton",
    "realmrpg_skeletons:mossy_skeleton",
    "realmrpg_skeletons:mushroomer_skeleton",
    "realmrpg_skeletons:neutralized_skeleton",
    "realmrpg_skeletons:pierced_skeleton",
    "realmrpg_skeletons:powder_snow_skeleton",
    "realmrpg_skeletons:quicksand_skeleton",
    "realmrpg_skeletons:rookie_skeleton",
    "realmrpg_skeletons:shot_skeleton",
    "realmrpg_skeletons:shroom_skeleton",
    "realmrpg_skeletons:skeleton_from_the_sky",
    "realmrpg_skeletons:skeleton_no_spawn",
    "realmrpg_skeletons:slain_skeleton",
    "realmrpg_skeletons:snow_skeleton",
    "realmrpg_skeletons:spider_victim_skeleton",
    "realmrpg_skeletons:stalactite_skeleton",
    "realmrpg_skeletons:swimmer_skeleton",
    "realmrpg_skeletons:thief_skeleton",
    "realmrpg_skeletons:trident_skeleton",
    "realmrpg_skeletons:unsaved_skeleton",
    "realmrpg_skeletons:vines_tangled_skeleton",
    "realmrpg_skeletons:waterdrop_skeleton",
    "realmrpg_skeletons:webbed_skeleton",
    "realmrpg_skeletons:winter_skeleton",
    "realmrpg_skeletons:wither_skeleton_no_spawn",
  ];
  for (const skeleton of skeletons) {
    event.modifyBlockTables(skeleton).createPool((pool) => {
      pool
        .addEntry(LootEntry.of("irons_spellbooks:arcane_essence").setCount([0, 3]))
        .when((condition) => {
          condition.matchMainHand(
            ItemFilter.hasEnchantment("minecraft:silk_touch").negate()
          );
        });
    });
  }
});
