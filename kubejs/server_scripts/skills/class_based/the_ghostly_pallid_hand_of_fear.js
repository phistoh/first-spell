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
  if (!player.tags.contains("phis.the_ghostly_pallid_hand_of_fear")) return;

  const dx = player.x - entity.x;
  const dy = player.y - entity.y;
  const dz = player.z - entity.z;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
  
  event.setDamage(damage + Math.floor(distance/10));
});
