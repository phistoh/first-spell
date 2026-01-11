EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
    server
  } = event;

  if (!player) return;
  if (entity.level.clientSide) return;
  if (!entity.living) return;
  if (!player.tags.contains("phis.spawn_eggs")) return;

  if (entity.lastHurtByPlayer) {
    const mob_id = entity.type;
    if (mob_id == "minecraft:player") return;
    if (mob_id == "cobblemon:pokemon") return;
    if (Math.random() < 0.01) {
      server.runCommandSilent(
        `summon item ${entity.x} ${entity.y} ${entity.z} {Motion:[${
          Math.random() / 8
        }d,${Math.random() / 8}d,${
          Math.random() / 8
        }d], Item:{id:"${mob_id}_spawn_egg",count:1}}`
      );
    }
  }
});
