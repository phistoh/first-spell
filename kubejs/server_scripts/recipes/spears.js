ServerEvents.recipes((event) => {
  event.shaped("mounts_of_mayhem:stone_spear", ["  M", " S ", "S  "], {
    M: "#minecraft:stone_crafting_materials",
    S: "minecraft:stick",
  });

  event.shaped("mounts_of_mayhem:copper_spear", ["  M", " S ", "S  "], {
    M: "minecraft:copper_ingot",
    S: "minecraft:stick",
  });

  event.shaped("mounts_of_mayhem:iron_spear", ["  M", " S ", "S  "], {
    M: "minecraft:iron_ingot",
    S: "minecraft:stick",
  });

  event.shaped("mounts_of_mayhem:golden_spear", ["  M", " S ", "S  "], {
    M: "minecraft:gold_ingot",
    S: "minecraft:stick",
  });

  event.shaped("mounts_of_mayhem:diamond_spear", ["  M", " S ", "S  "], {
    M: "minecraft:diamond",
    S: "minecraft:stick",
  });

  event.smithing(
    "mounts_of_mayhem:netherite_spear", // arg 1: output
    "minecraft:netherite_upgrade_smithing_template", // arg 2: the smithing template
    "mounts_of_mayhem:diamond_spear", // arg 3: the item to be upgraded
    "minecraft:netherite_ingot" // arg 4: the upgrade item
  );
});
