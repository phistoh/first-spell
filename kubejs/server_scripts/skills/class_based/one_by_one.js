EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
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
    player.runCommandSilent(
      "particle dust{color:[0.45,0.11,0.16],scale:0.5} ~ ~1 ~ .2 1 .2 .5 10"
    );
    player.runCommandSilent(
      "playsound irons_spellbooks:entity.guiding_bolt.impact master @s ~ ~ ~"
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
