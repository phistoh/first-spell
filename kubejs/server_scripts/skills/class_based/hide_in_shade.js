EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
  } = event;

  if (!player) return;
  if (entity.level.clientSide) return;

  if (entity.lastHurtByPlayer) {
    if (player.tags.contains("phis.hide_in_shade")) {
      player.runCommandSilent(
        "particle minecraft:witch ~ ~ ~ .2 .8 .2 .05 250"
      );
      player.runCommandSilent(
        "playsound irons_spellbooks:cast.blood_step master @s ~ ~ ~"
      );
      player.potionEffects.add("minecraft:invisibility", 3 * 20, 3, true, true);
    } else {
      return;
    }
  }
});
