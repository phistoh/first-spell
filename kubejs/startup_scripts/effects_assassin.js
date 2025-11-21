// Indicator/Cooldown effects for player
StartupEvents.registry("mob_effect", (event) => {
  event.create("crippling_poison_indicator").color(0x224400).beneficial();
});

StartupEvents.registry("mob_effect", (event) => {
  event.create("numbing_poison_indicator").color(0xee6600).beneficial();
});

StartupEvents.registry("mob_effect", (event) => {
  event.create("atrophic_poison_indicator").color(0x662288).beneficial();
});

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("leeching_poison")
    .color(0x00ee00)
    .beneficial()
    .modifyAttribute(
      "puffish_attributes:life_steal",
      "7b9cefb6-5b66-439b-93d1-0370a9c1b873",
      0.25,
      "add_multiplied_total"
    );
});

StartupEvents.registry("mob_effect", (event) => {
  event.create("amplifying_poison_indicator").color(0x115511).beneficial();
});

StartupEvents.registry("mob_effect", (event) => {
  event.create("deadly_poison_indicator").color(0x00aa55).beneficial();
});

StartupEvents.registry("mob_effect", (event) => {
  event.create("instant_poison_indicator").color(0x11dd22).beneficial();
});


// Actual effects for mobs
StartupEvents.registry("mob_effect", (event) => {
  event
    .create("crippling_poison")
    .color(0x224400)
    .harmful()
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "458a6192-fb4c-44f2-8f0b-e4949ccf16a9",
      -0.5,
      "add_multiplied_base"
    );
});

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("numbing_poison")
    .color(0xee6600)
    .harmful()
    .modifyAttribute(
      "minecraft:generic.attack_speed",
      "705cc779-ba44-43d4-ae8a-ff00318d2cb7",
      -0.3,
      "add_multiplied_base"
    )
    .modifyAttribute(
      "irons_spellbooks:cast_time_reduction",
      "7d0927e4-55d3-4790-9a9c-adb770988246",
      -0.3,
      "add_multiplied_base"
    );
});

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("atrophic_poison")
    .color(0x662288)
    .harmful()
    .modifyAttribute(
      "puffish_attributes:magic_damage",
      "56c8e830-fc06-4f16-8b30-c211f93f1a79",
      -0.1,
      "add_multiplied_base"
    )
    .modifyAttribute(
      "puffish_attributes:melee_damage",
      "0f2c5af2-ee19-4e13-bbcf-e845a47f5a80",
      -0.1,
      "add_multiplied_base"
    )
    .modifyAttribute(
      "puffish_attributes:ranged_damage",
      "d13c3edd-4425-447e-ac97-4512057b6e5c",
      -0.1,
      "add_multiplied_base"
    );
});

// not needed -- leech is calculated on player
// StartupEvents.registry("mob_effect", (event) => {
//   event
//     .create("leeching_poison")
//     .color(0x00ee00)
//     .harmful();
// });

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("amplifying_poison")
    .color(0x115511)
    .harmful()
    .modifyAttribute(
      "puffish_attributes:resistance",
      "772176d9-8e57-4baf-b741-025ce4f8ec17",
      -0.5,
      "add_multiplied_base"
    );
});

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("deadly_poison")
    .color(0x00aa55)
    .harmful()
    .effectTick((entity, lvl) => {
      if (!entity || entity.level.isClientSide()) return;
      if (entity.server.tickCount % 20 == 0) {
        entity.attack(entity.damageSources().void(), 2 + lvl);
      }
    });
});
