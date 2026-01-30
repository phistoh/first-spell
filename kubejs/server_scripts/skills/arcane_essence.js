EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
    server
  } = event;

  if (!player) return;
  if (entity.level.clientSide) return;
  if (!entity.living) return;
  if (!player.tags.contains("phis.arcane_essence")) return;

  if (entity.lastHurtByPlayer) {
    const mob_id = entity.type;
    if (mob_id == "cobblemon:pokemon") return;
    if (Math.random() < 0.05) {
      server.runCommandSilent(
        `summon item ${entity.x} ${entity.y} ${entity.z} {Motion:[${
          Math.random() / 8
        }d,${Math.random() / 8}d,${
          Math.random() / 8
        }d], Item:{id:"irons_spellbooks:arcane_essence",count:1}}`
      );
    }
  }
});
