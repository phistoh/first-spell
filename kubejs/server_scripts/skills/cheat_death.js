EntityEvents.beforeHurt((event) => {
  const {
    player,
    damage,
    source: { actual },
    server
  } = event;
  /**@type {$LivingEntity_} */ const entity = actual;
  if (!player) return;
  if (!player.tags.contains("phis.cheat_death")) return;
  if (entity == player) return;
  if (player.hasEffect("kubejs:cheat_death_cooldown")) return;
  const player_name = player.name.string;
  const coordinates = `${player.x} ${player.y} ${player.z}`;
  const total_health_remaining = player.getHealth() + player.getAbsorptionAmount()
  if (damage >= total_health_remaining) {
    event.setDamage(total_health_remaining - 2);
    server.runCommandSilent(`particle minecraft:dragon_breath ${coordinates} .5 1.4 .2 .05 50`);
    server.runCommandSilent(
      `playsound minecraft:item.totem.use master ${player_name} ${coordinates}`
    );
    player.potionEffects.add("kubejs:cheat_death_cooldown", 300 * 20, 0, true, true);
  }
});
