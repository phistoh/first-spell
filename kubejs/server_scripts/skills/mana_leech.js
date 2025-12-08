EntityEvents.afterHurt((event) => {
  const { server, entity, damage } = event;
  const source = event.source.actual;
  const sourceType = event.source.getType();
  if (entity.level.clientSide) return;
  if (sourceType != "player") return;

  if (source.tags.contains("phis.mana_leech")) {
    source.runCommandSilent(
      `mana add @s ${Math.ceil(damage * 0.25)}`
    );
  }
});
