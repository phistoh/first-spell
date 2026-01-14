ServerEvents.recipes((event) => {
  event.remove({ id: "netherdepthsupgrade:lava_fishing_rod" });
  event.shapeless("netherdepthsupgrade:lava_fishing_rod", ["minecraft:fishing_rod", "minecraft:potion[potion_contents={potion:\"fire_resistance\"}]"]);
})