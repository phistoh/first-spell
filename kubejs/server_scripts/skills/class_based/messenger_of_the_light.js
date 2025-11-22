PlayerEvents.tick((event) => {
  const player = event.player;
  const playerAABB = AABB.of(
    event.entity.x - 8,
    event.entity.y - 8,
    event.entity.z - 8,
    event.entity.x + 8,
    event.entity.y + 8,
    event.entity.z + 8
  );
  if (
    player &&
    player.tags.contains("phis.messenger_of_light") &&
    event.level.time % (20 * 4) === 0
  ) {
    event.level.getEntitiesWithin(playerAABB).forEach((mob) => {
      if(mob.isPlayer()){
        mob.potionEffects.add("minecraft:regeneration", 6 * 20, 0, true, true)
      }
    });
  }
});
