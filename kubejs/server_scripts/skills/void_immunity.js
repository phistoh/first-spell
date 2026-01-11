EntityEvents.beforeHurt((event) => {
  const { player, damage, source, server } = event;
  if (!player) return;
  if (!player.tags.contains("phis.void_immunity")) return;

  let scaling_factor = 1;
  if (
    player.level.dimension == "minecraft:the_end" ||
    player.level.dimension == "minecraft:the_nether"
  ) {
    scaling_factor = 0.5;
  }

  const player_name = player.name.string;
  const coordinates = `${player.x} ${player.y} ${player.z}`;

  if (player.y <= -128 * scaling_factor) {
    player.teleportRelative(0, 1000 * scaling_factor, 0);
    player.potionEffects.add("minecraft:slow_falling", 1 * 20, 4, true, true);
    server.runCommandSilent(
    `particle supplementaries:air_burst ${coordinates} .5 1.4 .2 .05 75`
    );
    server.runCommandSilent(
      `playsound minecraft:item.chorus_fruit.teleport master ${player_name} ${coordinates}`
    );
    player.potionEffects.add(
      "irons_spellbooks:angel_wings",
      30 * 20,
      0,
      true,
      true
    );
  }
});
