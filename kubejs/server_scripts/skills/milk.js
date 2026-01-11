ItemEvents.entityInteracted("minecraft:bucket", (event) => {
  const { target, player, item, hand, server } = event;
  const player_name = player.name.string;
  const coordinates = `${player.x} ${player.y} ${player.z}`;

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
  server.runCommandSilent(
    `playsound minecraft:item.bucket.fill_milk master ${player_name} ${coordinates}`
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  player.give("minecraft:milk_bucket");
});
