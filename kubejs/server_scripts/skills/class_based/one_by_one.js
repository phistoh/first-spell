EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
    server
  } = event;

  if (!player) return;
  if (entity.level.clientSide) return;
  if (!player.tags.contains("phis.one_by_one")) return;

  if (entity.lastHurtByPlayer) {
    let amplifier = 0;
    if (player.getEffect("kubejs:one_by_one")) {
      amplifier = player.getEffect("kubejs:one_by_one").amplifier + 1;
    }
    if (amplifier > 8) {
      amplifier = 8;
    }
    const player_name = player.name.string;
    const coordinates = `${player.x} ${player.y} ${player.z}`;
    server.runCommandSilent(
      `particle dust{color:[0.45,0.11,0.16],scale:0.5} ${coordinates} .2 1 .2 .5 10`
    );
    server.runCommandSilent(
      `playsound irons_spellbooks:entity.guiding_bolt.impact master ${player_name} ${coordinates}`
    );
    player.potionEffects.add(
      "kubejs:one_by_one",
      3 * 20,
      amplifier,
      true,
      true
    );
  }
});
