ServerEvents.recipes((event) => {
  event.shaped("kubejs:copper_knife", ["C", "S"], {
    C: "minecraft:copper_ingot",
    S: "minecraft:stick",
  });

  event.smithing(
    "kubejs:warden_knife", // arg 1: output
    "deeperdarker:warden_upgrade_smithing_template", // arg 2: the smithing template
    "farmersdelight:netherite_knife", // arg 3: the item to be upgraded
    "deeperdarker:reinforced_echo_shard" // arg 4: the upgrade item
  );
});
