EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
    server
  } = event;

  if (!player) return;
  if (entity.level.clientSide) return;

  if (entity.lastHurtByPlayer) {
    if (player.tags.contains("phis.hide_in_shade")) {
      const player_name = player.name.string;
      const coordinates = `${player.x} ${player.y} ${player.z}`;
      server.runCommandSilent(
        `particle minecraft:witch ${coordinates} .2 .8 .2 .05 250`
      );
      server.runCommandSilent(
        `playsound irons_spellbooks:cast.blood_step master ${player_name} ${coordinates}`
      );
      player.potionEffects.add("minecraft:invisibility", 3 * 20, 3, true, true);
    } else {
      return;
    }
  }
});
