ItemEvents.entityInteracted("minecraft:bucket", (event) => {
  const { target, player, item, hand } = event;

  const milkable =
    target.type == "minecraft:cow" ||
    target.type == "minecraft:goat" ||
    (target.type == "minecraft:sheep" &&
      player.tags.contains("phis.sheep_milk")) ||
    player.tags.contains("phis.omni_milk");

  if (!milkable) return;
  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  player.runCommandSilent(
    "playsound minecraft:item.bucket.fill_milk master @s ~ ~ ~"
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  player.give("minecraft:milk_bucket");
});
