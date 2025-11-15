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
    player.tags.contains("phis.disciple_of_the_heinous_path") &&
    player.mainHandItem.hasTag("c:tools/knife")
  ) {
    const extraDamage =
      player.getAttributeValue("minecraft:generic.attack_damage") * 0.5;
    event.setDamage(damage + extraDamage);
  }
});
