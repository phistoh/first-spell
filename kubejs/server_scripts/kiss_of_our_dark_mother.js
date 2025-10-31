EntityEvents.beforeHurt((event) => {
  const {
    entity,
    source: { player },
    damage,
  } = event;
  if (!player) return;
  if (!entity.living) return;
  if (entity.level.clientSide) return;

  if (
    player.tags.contains("phis.kiss_of_our_dark_mother") &&
    player.mainHandItem.hasTag("c:tools/knife") &&
    entity.health <= player.health
  ) {
    entity.kill();
  }
});
