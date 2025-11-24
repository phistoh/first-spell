EntityEvents.beforeHurt((event) => {
  const {
    player,
    damage,
    source,
  } = event;
  if (!player) return;
  if (!player.tags.contains("phis.void_immunity")) return;

  let scaling_factor = 1;
  if(player.level.dimension == "minecraft:the_end" || player.level.dimension == "minecraft:the_nether"){
    scaling_factor = 0.5;
  }

  if (player.y <= -128 * scaling_factor) {
    player.teleportRelative(0, 1000 * scaling_factor, 0);
    player.potionEffects.add("minecraft:slow_falling", 1 * 20, 4, true, true)
    player.runCommandSilent("particle supplementaries:air_burst ~ ~ ~ .5 1.4 .2 .05 75");
    player.runCommandSilent(
      "playsound minecraft:item.chorus_fruit.teleport master @s ~ ~ ~"
    );
    player.potionEffects.add("irons_spellbooks:angel_wings", 30 * 20, 0, true, true)
  }
});
