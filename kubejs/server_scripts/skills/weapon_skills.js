PlayerEvents.tick((event) => {
  const player = event.player;

  if (player && event.level.time % (20 * 4) === 0) {
    const light_sources = [
      "minecraft:lantern",
      "minecraft:soul_lantern",
      "minecraft:lantern",
      "minecraft:copper_lantern",
      "minecraft:weathered_copper_lantern",
      "minecraft:oxidized_copper_lantern",
      "minecraft:waxed_copper_lantern",
      "minecraft:waxed_exposed_copper_lantern",
      "minecraft:waxed_weathered_copper_lantern",
      "minecraft:waxed_oxidized_copper_lantern",
      "chipped:blue_paper_lantern",
      "chipped:burning_coal_lantern",
      "chipped:checkered_iron_lantern",
      "chipped:dark_blue_paper_lantern",
      "chipped:ender_lantern",
      "chipped:green_paper_lantern",
      "chipped:iron_bowl_lantern",
      "chipped:purple_paper_lantern",
      "chipped:red_paper_lantern",
      "chipped:small_green_lantern",
      "chipped:white_paper_lantern",
      "chipped:wooden_cage_lantern",
      "chipped:wrought_iron_lantern",
      "chipped:yellow_tube_lantern",
      "chipped:blue_paper_soul_lantern",
      "chipped:blue_tube_soul_lantern",
      "chipped:checkered_iron_soul_lantern",
      "chipped:golden_paper_soul_lantern",
      "chipped:gray_paper_soul_lantern",
      "chipped:iron_bowl_soul_lantern",
      "chipped:lime_paper_soul_lantern",
      "chipped:orange_paper_soul_lantern",
      "chipped:small_red_soul_lantern",
      "chipped:wooden_cage_soul_lantern",
      "chipped:yellow_paper_soul_lantern",
      "chipped:big_lantern",
      "chipped:donut_lantern",
      "chipped:tall_lantern",
      "chipped:wide_lantern",
      "chipped:big_soul_lantern",
      "chipped:donut_soul_lantern",
      "chipped:tall_soul_lantern",
      "chipped:wide_soul_lantern",
      "rubinated_nether:ruby_lantern",
      "suppsquared:copper_lantern",
      "suppsquared:crimson_lantern",
      "minecraft:torch",
    ];

    if (
      player.tags.contains("phis.versatile") &&
      player.mainHandItem.hasTag("minecraft:enchantable/weapon") &&
      player.offHandItem.hasTag("minecraft:enchantable/weapon") &&
      player.mainHandItem.id != player.offHandItem.id
    ) {
      player.potionEffects.add("kubejs:versatile", 20 * 6, 1, true, true);
    }

    if (
      player.tags.contains("phis.miners_wisdom") &&
      light_sources.includes(player.offHandItem.id)
    ) {
      player.potionEffects.add("kubejs:miners_wisdom", 20 * 6, 1, true, true);
    }

    if (
      player.tags.contains("phis.staff_wielder") &&
      (player.mainHandItem.hasTag("irons_spellbooks:staff") ||
        player.offHandItem.hasTag("irons_spellbooks:staff"))
    ) {
      player.potionEffects.add("kubejs:staff_wielder", 20 * 6, 1, true, true);
    }

    const two_handed_weapons = [
      "irons_spellbooks:spellbreaker",
      "irons_spellbooks:boreal_blade",
      "irons_spellbooks:twilight_gale",
      "irons_spellbooks:keeper_flamberge",
      "irons_spellbooks:legionnaire_flamberge",
      "irons_spellbooks:decrepit_scythe",
      "irons_spellbooks:hellrazor",
      "mounts_of_mayhem:wooden_spear",
      "mounts_of_mayhem:stone_spear",
      "mounts_of_mayhem:copper_spear",
      "mounts_of_mayhem:golden_spear",
      "mounts_of_mayhem:iron_spear",
      "mounts_of_mayhem:diamond_spear",
      "mounts_of_mayhem:netherite_spear",
    ];

    if (
      player.tags.contains("phis.two_handed") &&
      two_handed_weapons.includes(player.mainHandItem.id)
    ) {
      player.potionEffects.add("kubejs:two_handed", 20 * 6, 1, true, true);
    }

    if (
      player.tags.contains("phis.ranged") &&
      player.mainHandItem.hasTag("c:tools/ranged_weapon")
    ) {
      player.potionEffects.add("kubejs:ranged", 20 * 6, 1, true, true);
    }
  }
});
