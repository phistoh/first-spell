EntityEvents.afterHurt((event) => {
  const { server, entity, damage } = event;
  const source = event.source.actual;
  const sourceType = event.source.getType();
  if (entity.level.clientSide) return;
  if (sourceType != "player") return;

  if (source.tags.contains("phis.mana_leech")) {
    const player_name = source.name.string;
    server.runCommandSilent(
      `mana add ${player_name} ${Math.ceil(damage * 0.25)}`
    );
  }
});
