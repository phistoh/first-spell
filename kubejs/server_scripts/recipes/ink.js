ServerEvents.recipes((event) => {
  event.shapeless("minecraft:writable_book", [
    "#phis:ink",
    "minecraft:book",
  ]);
  event.shapeless("supplementaries:antique_ink", [
    "minecraft:ink_sac",
    "minecraft:feather",
    "minecraft:glass_bottle",
  ]);
  event.shapeless("supplementaries:antique_ink", [
    "irons_spellbooks:common_ink",
  ]);
   event.shapeless("irons_spellbooks:common_ink", [
    "supplementaries:antique_ink",
  ]);

  event.shapeless("supplementaries:antique_ink", [
    "minecraft:glow_ink_sac",
    "minecraft:feather",
    "minecraft:glass_bottle",
  ]);
});
