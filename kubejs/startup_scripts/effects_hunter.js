StartupEvents.registry("mob_effect", (event) => {
  event
    .create("one_by_one")
    .color(0x007777)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "8d2f2d7b-37b6-4f73-aee7-d0a65910e9af",
      1,
      "add_value"
    );
});