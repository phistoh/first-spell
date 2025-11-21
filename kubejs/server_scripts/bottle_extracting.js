ItemEvents.rightClicked("kubejs:arcane_infused_bottle", (event) => {
  const { player, item, hand } = event;

  const extractable_liquids = {
    "biomesoplenty:blood": "irons_spellbooks:blood_vial",
  };

  if (!player.tags.contains("phis.extract_blood")) return;
  if (!player.rayTrace().block || !extractable_liquids[player.rayTrace().block.id]) return;

  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  player.runCommandSilent(
    "playsound minecraft:item.bottle.fill master @s ~ ~ ~"
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  player.give(extractable_liquids[player.rayTrace().block.id]);
});

ItemEvents.entityInteracted("kubejs:arcane_infused_bottle", (event) => {
  const { target, player, item, hand } = event;

  const extractable_liquids = {
    "minecraft:bogged": "kubejs:bottled_undead_soul",
    "minecraft:drowned": "kubejs:bottled_undead_soul",
    "minecraft:husk": "kubejs:bottled_undead_soul",
    "minecraft:phantom": "kubejs:bottled_undead_soul",
    "minecraft:skeleton": "kubejs:bottled_undead_soul",
    "minecraft:skeleton_horse": "kubejs:bottled_undead_soul",
    "minecraft:stray": "kubejs:bottled_undead_soul",
    "minecraft:wither": "kubejs:bottled_undead_soul",
    "minecraft:wither_skeleton": "kubejs:bottled_undead_soul",
    "minecraft:zoglin": "kubejs:bottled_undead_soul",
    "minecraft:zombie": "kubejs:bottled_undead_soul",
    "minecraft:zombie_horse": "kubejs:bottled_undead_soul",
    "minecraft:zombie_villager": "kubejs:bottled_undead_soul",
    "minecraft:zombified_piglin": "kubejs:bottled_undead_soul",
    "variantsandventures:gelid": "kubejs:bottled_undead_soul",
    "variantsandventures:murk": "kubejs:bottled_undead_soul",
    "variantsandventures:thicket": "kubejs:bottled_undead_soul",
    "variantsandventures:verdant": "kubejs:bottled_undead_soul",
    "mounts_of_mayhem:zombie_nautilus": "kubejs:bottled_undead_soul",
    "mounts_of_mayhem:parched": "kubejs:bottled_undead_soul",
    "netherdepthsupgrade:wither_bonefish": "kubejs:bottled_undead_soul",
    "bosses_of_mass_destruction:lich": "kubejs:bottled_undead_soul"
  };

  if (!player.tags.contains("phis.extract_various")) return;
  if (!extractable_liquids[target.type]) return;

  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  player.runCommandSilent(
    "playsound minecraft:item.bottle.fill master @s ~ ~ ~"
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  player.give(extractable_liquids[target.type]);
  player.addItemCooldown("kubejs:arcane_infused_bottle", 1 * 20)
});
