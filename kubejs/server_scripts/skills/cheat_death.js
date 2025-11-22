EntityEvents.beforeHurt((event) => {
  const {
    player,
    damage,
    source: { actual },
  } = event;
  /**@type {$LivingEntity_} */ const entity = actual;
  if (!player) return;
  if (!player.tags.contains("phis.cheat_death")) return;
  if (entity == player) return;
  if (player.hasEffect("kubejs:cheat_death_cooldown")) return;
  const total_health_remaining = player.getHealth() + player.getAbsorptionAmount()
  if (damage >= total_health_remaining) {
    event.setDamage(total_health_remaining - 2);
    player.runCommandSilent("particle minecraft:dragon_breath ~ ~ ~ .5 1.4 .2 .05 50");
    player.runCommandSilent(
      "playsound minecraft:item.totem.use master @s ~ ~ ~"
    );
    player.potionEffects.add("kubejs:cheat_death_cooldown", 300 * 20, 0, true, true);
  }
});
