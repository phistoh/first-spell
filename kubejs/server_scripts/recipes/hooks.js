ServerEvents.recipes((event) => {
  event.remove({ mod: "hooked" });
  event
    .shaped("hooked:wood_hook", ["  P", " R ", "R  "], {
      P: "minecraft:wooden_pickaxe",
      R: "supplementaries:rope",
    })
    .id("wood_hook");

  event
    .shaped("hooked:iron_hook", ["  P", " R ", "R  "], {
      P: "minecraft:iron_pickaxe",
      R: "supplementaries:rope",
    })
    .id("iron_hook");

  event
    .shapeless("hooked:diamond_hook", [
      "8x kubejs:diamond_dust",
      "hooked:iron_hook",
    ])
    .id("diamond_hook");

  event
    .shapeless("hooked:redstone_hook", [
      "8x minecraft:redstone",
      "hooked:iron_hook",
    ])
    .id("redstone_hook");

  event
    .shapeless("hooked:ender_hook", ["8x #c:ender_pearls", "hooked:iron_hook"])
    .id("ender_hook");

  event.remove({ id: "crittersandcompanions:grappling_hook" });
  event.shaped("crittersandcompanions:grappling_hook", ["  P", " R ", "R  "], {
    P: "#map_atlases:sticky_crafting_items",
    R: "crittersandcompanions:silk",
  });
});
