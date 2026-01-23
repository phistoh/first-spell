ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "irons_spellbooks" },
    "irons_spellbooks:common_ink",
    "#phis:ink"
  );

  event.replaceInput(
    { mod: "supplementaries" },
    "supplementaries:antique_ink",
    "#phis:ink"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "irons_spellbooks" },
    "minecraft:ender_pearl",
    "#c:ender_pearls"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "irons_spellbooks" },
    "minecraft:enchanted_book",
    "immersiveenchanting:ancient_book"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "minecraft:recovery_compass" },
    "minecraft:echo_shard",
    "minecraft:prismarine_shard"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "farmersdelight" },
    "farmersdelight:rope",
    "supplementaries:rope"
  );

  event.replaceOutput(
    { mod: "farmersdelight" },
    "farmersdelight:rope",
    "supplementaries:rope"
  );

  event.replaceInput(
    { mod: "mynethersdelight" },
    "mynethersdelight:hoglin_hide",
    "irons_spellbooks:hogskin"
  );

  event.replaceInput(
    { input: "minecraft:enchanting_table" },
    "minecraft:enchanting_table",
    "#phis:enchanting_table"
  );

  event.replaceInput(
    { output: "crittersandcompanions:silk_lead" },
    "minecraft:iron_ingot",
    "#map_atlases:sticky_crafting_items"
  );

  event.replaceInput(
    { output: "bosses_of_mass_destruction:void_lily" },
    "minecraft:amethyst_shard",
    "irons_spellbooks:arcane_essence"
  );

  event.replaceInput(
    { id: "keeperofinventories:keeper_of_inventories_craft" },
    "minecraft:redstone",
    "irons_spellbooks:arcane_essence"
  );

  event.replaceInput(
    { id: "keeperofinventories:keeper_of_inventories_craft" },
    "minecraft:gold_ingot",
    "endrem:witch_pupil"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "simpletms:tr_blank" },
    "minecraft:quartz",
    "biomesoplenty:rose_quartz_chunk"
  );
  event.replaceInput(
    { id: "simpletms:tr_blank" },
    "minecraft:diamond",
    "irons_spellbooks:rare_ink"
  );
  event.replaceInput(
    { id: "simpletms:tr_blank" },
    "minecraft:iron_ingot",
    "netherdepthsupgrade:fortress_grouper_plate"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "simpletms:case_tm" },
    "minecraft:leather",
    "irons_spellbooks:hogskin"
  );
  event.replaceInput(
    { id: "simpletms:case_tm" },
    "minecraft:diamond",
    "rubinated_nether:ruby"
  );
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "simpletms:tm_blank_echo_shard" },
    "minecraft:echo_shard",
    "deeperdarker:resonarium"
  );
});
