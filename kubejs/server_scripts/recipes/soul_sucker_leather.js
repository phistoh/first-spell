ServerEvents.recipes((event) => {
  event.shapeless("3x netherdepthsupgrade:soul_sucker_leather", [
    "netherdepthsupgrade:soulsucker",
    "kubejs:diamond_shears"
  ]).damageIngredient('kubejs:diamond_shears', 1);
  
  event.remove({ id: "netherdepthsupgrade:soul_sucker_leather" });
  event.shapeless("3x netherdepthsupgrade:soul_sucker_leather", [
    "netherdepthsupgrade:soulsucker",
    "minecraft:shears"
  ]).damageIngredient('minecraft:shears', 1);
});