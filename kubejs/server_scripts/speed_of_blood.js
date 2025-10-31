EntityEvents.afterHurt((event) => {
  const { server, entity } = event;
  let source = event.source.actual;
  let sourceType = event.source.getType();
  if (entity.level.clientSide) return;
  if (!entity || !entity.type == "minecraft:player") return;

  if (
    sourceType == "mob" &&
    source &&
    source.isMonster() &&
    entity.tags.contains("phis.speed_of_blood")
  ) {
    const currentHealth = entity.health / entity.maxHealth;

    if (currentHealth < 0.25) {
      entity.potionEffects.add("kubejs:speed_of_blood", 20 * 20, 1, true, true);
    } else if (currentHealth < 0.5) {
      entity.potionEffects.add("kubejs:speed_of_blood", 20 * 20, 0, true, true);
    }
  }
});
