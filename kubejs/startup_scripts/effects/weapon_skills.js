StartupEvents.registry("mob_effect", (event) => {
    // dual wield different weapons
    event
    .create("versatile")
    .color(0x115511)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.attack_speed",
      "8d6baa43-6a57-4b8b-8266-f95d89800a5e",
      0.25,
      "add_multiplied_base"
    )

    // wield weapon and light source
    event
    .create("miners_wisdom")
    .color(0x115511)
    .beneficial()
    .modifyAttribute(
      "apothic_attributes:mining_speed",
      "01bf3fa3-ed6c-4e66-a55f-084cf1db8852",
      0.25,
      "add_multiplied_base"
    )
    .modifyAttribute(
      "minecraft:generic.attack_damage",
      "39efd0a7-7de0-4900-b712-cc49ded83fba",
      0.25,
      "add_multiplied_base"
    )
    .modifyAttribute(
      "minecraft:generic.luck",
      "0e608e6c-6663-425b-a9e2-db2fa2ff5ffa",
      1,
      "add_value"
    )

    // Staff
    event
    .create("staff_wielder")
    .color(0x115511)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.armor",
      "382b1729-9c41-40d8-ac08-86b992b48c0b",
      4,
      "add_value"
    )

    // two-handed
    event
    .create("two_handed")
    .color(0x115511)
    .beneficial()
    .modifyAttribute(
      "apothic_attributes:armor_shred",
      "bab46f10-0bf3-43eb-ad05-342fd670bd43",
      0.25,
      "add_value"
    )

    // ranged
    event
    .create("ranged")
    .color(0x115511)
    .beneficial()
    .modifyAttribute(
      "minecraft:generic.movement_speed",
      "235bed9b-2754-4051-a57c-ca79c70598bc",
      0.25,
      "add_multiplied_base"
    )
});
