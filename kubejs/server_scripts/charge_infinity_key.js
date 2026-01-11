ItemEvents.rightClicked("kubejs:infinity_key", (event) => {
  const { player, item, hand, server } = event;
  const player_name = player.name.string;
  const coordinates = `${player.x} ${player.y} ${player.z}`;

  if (!player.rayTrace().block) return;
  if (player.rayTrace().block.id != "biomesoplenty:liquid_null") return;
  if (player.level.dimension != "minecraft:the_end") return;

  if (hand == "OFF_HAND") {
    player.swing("off_hand", true);
  } else {
    player.swing();
  }
  server.runCommandSilent(
    `playsound minecraft:item.bottle.fill master ${player_name} ${coordinates}`
  );
  if (player.isCreative() == false) {
    item.count--;
  }
  player.give("kubejs:infinity_key_charged");
});
