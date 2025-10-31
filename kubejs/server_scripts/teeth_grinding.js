EntityEvents.beforeHurt((event) => {
  const {
    entity,
    source: { player },
    damage,
  } = event;
  if (!player) return;
  if (!entity.living) return;
  if (entity.level.clientSide) return;

  if (player.tags.contains("phis.teeth_grinding")) {
    const missingHealth = player.maxHealth - player.health;
    event.setDamage(damage + missingHealth);
  }
});
