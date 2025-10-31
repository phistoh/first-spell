EntityEvents.afterHurt((event) => {
  const { server, entity } = event;
  let source = event.source.actual;
  let sourceType = event.source.getType();
  if (entity.level.clientSide) return;
  if (!entity.type == "minecraft:player") return;

  if (
    sourceType == "mob" &&
    source.isMonster() &&
    entity.tags.contains("phis.speed_of_blood")
  ) {
    const currentHealth = player.health / player.maxHealth;

    if (currentHealth < 0.25) {
      player.potionEffects.add("kubejs:speed_of_blood", 20 * 20, 1, true, false);
    } else if (currentHealth < 0.5) {
      player.potionEffects.add("kubejs:speed_of_blood", 20 * 20, 0, true, false);
    }
  }
});
