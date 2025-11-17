ItemEvents.rightClicked("kubejs:arcane_infused_bottle", (event) => {
  const { player, item, hand } = event;

  const extractable_liquids = {
    "biomesoplenty:blood": "irons_spellbooks:blood_vial",
  };

  if (!player.tags.contains("phis.extract_blood")) return;
  if (!extractable_liquids[player.rayTrace().block.id]) return;

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
    "minecraft:chicken": "irons_spellbooks:blood_vial",
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
});
