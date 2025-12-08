EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
  } = event;

  const spawn_egg_table = {
    "minecraft:chicken": "minecraft:chicken_spawn_egg",
  };

  if (!player) return;
  if (entity.level.clientSide) return;
  if (!player.tags.contains("phis.spawn_eggs")) return;

  if (entity.lastHurtByPlayer) {
    const mob_id = entity.type;
    if (mob_id in spawn_egg_table && Math.random() < 0.01) {
      player.runCommandSilent(
        `summon item ${entity.x} ${entity.y} ${
          entity.z
        } {Motion:[${Math.random()/8}d,${Math.random()/8}d,${Math.random()/8}d], Item:{id:"${
          spawn_egg_table[mob_id]
        }",count:1}}`
      );
    }
  }
});
