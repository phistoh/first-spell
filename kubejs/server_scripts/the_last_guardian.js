//priority: 10

EntityEvents.beforeHurt((event) => {
  const {
    player,
    damage,
    source: { actual },
  } = event;
  /**@type {$LivingEntity_} */ const entity = actual;
  if (!player) return;
  if (!player.tags.contains("phis.last_guardian")) return;
  if(player.offHandItem.hasTag("c:tools/shield") || player.offHandItem.hasTag("c:tools/shields")){
    event.setDamage(damage * 0.75);
  }
});
