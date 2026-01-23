//priority: 1

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
    player.tags.contains("phis.dagger_damage") &&
    player.mainHandItem.hasTag("c:tools/knife")
  ) {
    const extraDamage =
      player.getAttributeValue("minecraft:generic.attack_damage") * 0.25;
    event.setDamage(damage + extraDamage);
  }
  
  if (
    player.tags.contains("phis.spear_damage") &&
    player.mainHandItem.hasTag("spears")
  ) {
    const extraDamage =
      player.getAttributeValue("minecraft:generic.attack_damage") * 0.25;
    event.setDamage(damage + extraDamage);
  }
});