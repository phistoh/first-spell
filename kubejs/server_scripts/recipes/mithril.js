ServerEvents.recipes((event) => {
  event
    .custom({
      type: "rubinated_nether:freezing",
      category: "freezable_misc",
      cookingtime: 600,
      experience: 2.0,
      ingredient: {
        item: "arcaneessenceblock:arcane_essence_block",
      },
      result: {
        id: "irons_spellbooks:raw_mithril",
      },
    })
    .id("kubejs:mithril_scrap_freezing");
});

ServerEvents.recipes((event) => {
  event.shapeless("irons_spellbooks:mithril_ore", [
    "minecraft:dragon_breath",
    "minecraft:diamond_ore",
  ]);

  event.shapeless("irons_spellbooks:deepslate_mithril_ore", [
    "minecraft:dragon_breath",
    "minecraft:deepslate_diamond_ore",
  ]);
});