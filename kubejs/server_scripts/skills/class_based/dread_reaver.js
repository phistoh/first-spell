//priority: 10
EntityEvents.beforeHurt((event) => {
  const {
    entity,
    source: { player },
    damage,
  } = event;
  if (!player) return;
  if (!entity.living) return;
  if (entity.level.clientSide) return;
  if (!player.tags.contains("phis.dread_reaver")) return;

  if (entity.health == entity.maxHealth) {
    event.setDamage(damage * 2);
  }
});
