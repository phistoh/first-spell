EntityEvents.beforeHurt((event) => {
  const { player, damage, source } = event;
  /**@type {$LivingEntity_} */ const entity = source.actual;
  if (!player) return;
  if (!player.tags.contains("phis.as_long_as_winds_will_blow")) return;
  if (entity == player) return;
  if (damage >= player.getHealth() && source.type().msgId() === "mob") {
    event.setDamage(player.getHealth() - 2);
  }
});
