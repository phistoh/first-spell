ServerEvents.recipes((event) => {
  event.remove({ id: "waystones:return_scroll" });
  event.shapeless("3x waystones:return_scroll", [
    "3x minecraft:paper",
    "#phis:ink",
  ]);

  event.replaceInput(
    { id: "waystones:blank_scroll" },
    "minecraft:gold_nugget",
    "irons_spellbooks:arcane_essence"
  );

  event.remove({ id: "waystones:warp_scroll" });
});
