ServerEvents.recipes((event) => {
  event.shapeless("kubejs:drained_ancient_tome", [
    "minecraft:book",
    "irons_spellbooks:arcane_essence",
    "irons_spellbooks:blood_vial",
    "minecraft:experience_bottle",
  ]).id("drained_ancient_tome");
  
  event.shapeless("kubejs:drained_ancient_tome", [
    "irons_spellbooks:arcane_essence",
    "3x irons_restrictions:manuscript",
    "#map_atlases:sticky_crafting_items",
  ]).id("drained_ancient_tome_from_manuscripts");
});
