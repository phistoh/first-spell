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
});
