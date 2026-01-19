ServerEvents.recipes((event) => {
  event.remove({ id: "netherdepthsupgrade:lava_fishing_rod" });
  event.shapeless("netherdepthsupgrade:lava_fishing_rod", [
    "minecraft:fishing_rod",
    'minecraft:potion[potion_contents={potion:"fire_resistance"}]',
  ]);

  // backpacks
  event.remove({ id: "sophisticatedbackpacks:backpack" });

  event.remove({ id: "sophisticatedbackpacks:iron_backpack" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack_from_copper" });
  event
    .shaped("sophisticatedbackpacks:iron_backpack", ["LLL", "LIL", "LLL"], {
      L: "minecraft:leather",
      I: "minecraft:iron_ingot",
    })
    .id("phis:iron_backpack");

  event.remove({ id: "sophisticatedbackpacks:gold_backpack" });
  event
    .shaped("sophisticatedbackpacks:gold_backpack", ["LLL", "LIL", "LLL"], {
      L: "irons_spellbooks:hogskin",
      I: "minecraft:gold_ingot",
    })
    .id("phis:gold_backpack");

  event.remove({ id: "sophisticatedbackpacks:diamond_backpack" });
  event
    .shaped("sophisticatedbackpacks:diamond_backpack", ["LLL", "LIL", "LLL"], {
      L: "netherdepthsupgrade:soul_sucker_leather",
      I: "minecraft:diamond",
    })
    .id("phis:diamond_backpack");

  event.remove({ id: "sophisticatedbackpacks:netherite_backpack" });
  event
    .shaped(
      "sophisticatedbackpacks:netherite_backpack",
      ["LLL", "LIL", "LLL"],
      {
        L: "irons_spellbooks:dragonskin",
        I: "minecraft:netherite_ingot",
      },
    )
    .id("phis:netherite_backpack");
});
