EntityEvents.beforeHurt((event) => {
  const {
    entity,
    source: { player },
    damage,
  } = event;
  if (!player) return;
  if (!entity.living) return;
  if (entity.level.clientSide) return;


  console.log(player.mainHandItem.tags)
  if (
    player.hasEffect("minecraft:invisibility") &&
    player.tags.contains("phis.disciple_of_the_heinous_path") &&
    player.mainHandItem.hasTag("farmersdelight:tools/knives")
  ) {
    const extraDamage =
      player.getAttributeValue("minecraft:generic.attack_damage") * 0.5;
    event.setDamage(damage + extraDamage);
  }
});
