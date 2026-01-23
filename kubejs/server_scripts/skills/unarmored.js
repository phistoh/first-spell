NativeEvents.onEvent(
  "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent",
  (event) => {
    const player = event.entity;

    if (!player.isPlayer()) return;
    if (!player.tags.contains("phis.unarmored")) return;

    if (
      player.headArmorItem != "minecraft:air" ||
      player.chestArmorItem != "minecraft:air" ||
      player.legsArmorItem != "minecraft:air" ||
      player.feetArmorItem != "minecraft:air"
    )
      return;

    // const unavoidable_damage = [""];
    // if (unavoidable_damage.contains(event.source.type())) return;

    console.log(event.source.type())
    if (Math.random() < 0.1) {
      const player_name = player.name.string;
      const coordinates = `${player.x} ${player.y} ${player.z}`;
      player.server.runCommandSilent(
        `playsound irons_spellbooks:lightning_woosh_01 master ${player_name} ${coordinates}`,
      );
      event.setCanceled(true);
    }
  },
);

EntityEvents.death((event) => {
  const {
    entity,
    source: { player },
    server,
  } = event;

  if (!player) return;
  if (entity.level.clientSide) return;
  if (!entity.living) return;
  if (!player.tags.contains("phis.unarmored")) return;

  if (entity.lastHurtByPlayer) {
    const mob_id = entity.type;
    if (mob_id == "minecraft:player") return;
    if (mob_id == "cobblemon:pokemon") return;
    const xp_orb = player.block.createEntity(
      "minecraft:experience_orb",
    );
    xp_orb.setPos(player.x + Math.random(), player.y, player.z + Math.random());
    xp_orb.mergeNbt({ Value: Math.random()*5 });
    xp_orb.spawn();
  }
});
