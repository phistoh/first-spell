StartupEvents.registry("mob_effect", (event) => {
  event
    .create("speed_of_blood")
    .color(0x550000)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.attack_speed",
      "0a82a712-5c8a-4902-8844-3a65b93f8c3b",
      0.5,
      "add_multiplied_base"
    )
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "52640b67-ba08-4f12-a512-e3465428236b",
      0.5,
      "add_multiplied_base"
    );
});

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("bleeding")
    .color(0x330000)
    .harmful()
    .effectTick((entity, lvl) => {
      if (!entity || entity.level.isClientSide()) return;
      if (entity.server.tickCount % 20 == 0) {
        const damageAmount = entity.getMaxHealth() * 0.05;
        entity.attack(entity.damageSources().generic(), damageAmount);
      }
    });
});