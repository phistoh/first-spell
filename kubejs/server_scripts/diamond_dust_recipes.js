ServerEvents.recipes((event) => {
  event.shaped("minecraft:diamond", ["DD", "DD"], {
    D: "kubejs:diamond_dust",
  });
  event.shapeless("4x kubejs:diamond_dust", ["minecraft:diamond"]);
  event
    .shapeless("2x irons_spellbooks:arcane_essence", [
      "kubejs:diamond_dust",
      "minecraft:lapis_lazuli",
    ]).id("arcane_essence");
});
