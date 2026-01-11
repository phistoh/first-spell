EntityEvents.afterHurt((event) => {
  const {
    entity,
    source: { player },
    server
  } = event;
  const variants = [
    "pale",
    "ashen",
    "black",
    "chestnut",
    "rusty",
    "snowy",
    "spotted",
    "striped",
    "woods",
  ];
  if (!player) return;
  const damage_type = event.getSource().getType();
  if (
    player.tags.contains("phis.wolves_guard_my_coffin") &&
    (damage_type == "arrow" || damage_type == "bullet")
  ) {
    if (Math.random() < 0.05) {
      let variant = variants[Math.floor(Math.random() * variants.length)];
      let collar_color = Math.floor(Math.random() * 16);
      let hunterDog = player.level.createEntity("minecraft:wolf");
      hunterDog.mergeNbt(`{Owner:${player.nbt.UUID}}`);
      hunterDog.mergeNbt(`{AngryAt: ${entity.nbt.UUID}}`);
      hunterDog.mergeNbt(`{Sitting: false}`);
      hunterDog.mergeNbt(`{Silent: true}`);
      hunterDog.mergeNbt(`{CustomName: 'Coffin Guardian'}`);
      hunterDog.mergeNbt(`{CustomNameVisible: false}`);
      hunterDog.mergeNbt(`{CollarColor: ${collar_color}}`);
      hunterDog.mergeNbt(`{variant: ${variant}}`);
      hunterDog.mergeNbt(
        `{attributes:[{base:10.0,id:"minecraft:generic.max_health",modifiers:[{amount:${
          player.getAttribute("minecraft:generic.max_health").value / 3
        },id:hdhp,operation:add_value}]}]}`
      );
      hunterDog.mergeNbt(
        `{attributes:[{base:0.09,id:"minecraft:generic.movement_speed",modifiers:[{amount:0.02,id:hdhp,operation:add_value}]}]}`
      );
      hunterDog.mergeNbt(`{Health: 100}`);
      hunterDog.x = player.x;
      hunterDog.y = player.y;
      hunterDog.z = player.z;
      hunterDog.spawn();
      server.runCommandSilent(
        `particle minecraft:dust_plume ${hunterDog.x} ${hunterDog.y} ${hunterDog.z} .2 .5 .2 .01 1000`
      );
      server.runCommandSilent(
        `playsound minecraft:entity.wolf.ambient master @a ${hunterDog.x} ${hunterDog.y} ${hunterDog.z}`
      );
      hunterDog.server.scheduleInTicks(10 * 20, () => {
        server.runCommandSilent(
          `particle minecraft:dust_plume ${hunterDog.x} ${hunterDog.y} ${hunterDog.z} .2 .5 .2 .01 1000`
        );
        hunterDog.remove("DISCARDED");
      });
    }
  }
});
