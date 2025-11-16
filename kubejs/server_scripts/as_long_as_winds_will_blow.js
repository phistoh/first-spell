//priority: 9

EntityEvents.beforeHurt((event) => {
  const { player, damage, source } = event;
  /**@type {$LivingEntity_} */ const entity = source.actual;
  if (!player) return;
  if (!player.tags.contains("phis.as_long_as_winds_will_blow")) return;
  if (entity == player) return;
  const total_health_remaining = player.getHealth() + player.getAbsorptionAmount()
  if (damage >= total_health_remaining && source.type().msgId() === "mob") {
    event.setDamage(total_health_remaining - 2);
  }
});
